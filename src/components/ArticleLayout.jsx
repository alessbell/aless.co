import Head from 'next/head'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

export function ArticleLayout({ children, meta, isRssFeed = false }) {
  if (isRssFeed) {
    return children
  }
  return (
    <>
      <Head>
        <title>{`${meta.title} - Alessia Bellisario`}</title>
        <meta name="description" content={meta.description} />
        <meta name="og:description" content={meta.description} />
        <meta name="og:type" content="article" />
        <meta name="og:site_name" content="Alessia Bellisario" />
        <meta name="og:title" content={`${meta.title} - Alessia Bellisario`} />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${meta.title}`}
        />
        <meta
          name="twitter:title"
          content={`${meta.title} - Alessia Bellisario`}
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alessbell" />
        <meta
          property="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${meta.title}`}
        />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:to-fuchsia-300 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-lg text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

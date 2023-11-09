import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Prose } from '@/components/Prose'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import speakingImage from '@/images/profile3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Alessia Bellisario</title>
        <meta
          name="description"
          content="I’m Alessia, a software engineer based in New York City."
        />
        <meta
          name="description"
          content="I’m Alessia, a software engineer based in New York City."
        />
        <meta
          name="og:description"
          content="I’m Alessia, a software engineer based in New York City."
        />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=About`}
        />
        <meta name="og:site_name" content="Alessia Bellisario" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - Alessia Bellisario" />
        <meta property="twitter:title" content="About - Alessia Bellisario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alessbell" />
        <meta
          name="twitter:description"
          content="I’m Alessia, a software engineer based in New York City."
        />
        <meta
          property="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=About`}
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                priority
                src={speakingImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <Prose className="lg:order-first lg:row-span-2">
            <h1 className="font-mono bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:to-fuchsia-300 sm:text-5xl">
              hey there 👋
            </h1>
            <div className="mt-6 space-y-7 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                I&rsquo;m Alessia. I work on the{' '}
                <a
                  href="https://github.com/apollographql/apollo-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apollo Client
                </a>{' '}
                team at{' '}
                <a
                  href="https://apollographql.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apollo
                </a>{' '}
                as a Staff Software Engineer.
              </p>
              <p>
                In April 2019 I attended the{' '}
                <a
                  href="https://recurse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recurse Center
                </a>
                —I{`'`}m always happy to chat about RC with anyone considering
                applying.
              </p>
              <p>
                I{`'`}m using this space to write about programming and
                occasionally building mechanical keyboards. If any of this is of
                interest to you, you can reach me at{' '}
                <a href="mailto:web@bellisar.io">web[at]bellisar.io</a>.
              </p>
              <p>Finally, this site contains no tracking or analytics 💖</p>
            </div>
          </Prose>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/alessbell"
                icon={TwitterIcon}
              >
                tweets
              </SocialLink>
              <SocialLink
                href="https://github.com/alessbell"
                icon={GitHubIcon}
                className="mt-4"
              >
                code
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/alessiabellisario/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                business friends
              </SocialLink>
              <SocialLink
                href="mailto:web@bellisar.io"
                icon={MailIcon}
                className="mt-4"
              >
                web[at]bellisar.io
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

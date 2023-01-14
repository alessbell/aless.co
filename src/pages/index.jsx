import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-6.jpg'
import image2 from '@/images/photos/image-7.jpg'
import image3 from '@/images/photos/image-9.jpg'
import image5 from '@/images/photos/image-10.jpg'
import image4 from '@/images/photos/image-12.jpg'
// import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function ApolloLogo(props) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="#3f20ba"
        className="dark:fill-zinc-300 dark:stroke-zinc-500"
        d="M160.227 178.519h27.63L143.75 64.049h-30.549l-44.107 114.47h27.632l7.208-19.39h41.675l-7.544-21.456h-27.44l17.85-49.254 31.752 90.1zm91.112-84.751a6.641 6.641 0 0 0-8.185-4.627 6.648 6.648 0 0 0-4.628 8.183A114.646 114.646 0 0 1 242.704 128c0 63.248-51.456 114.702-114.704 114.702-63.248 0-114.703-51.454-114.703-114.702C13.297 64.751 64.752 13.296 128 13.296c26.793 0 52.718 9.518 73.179 26.456a15.938 15.938 0 0 0-1.238 6.173c0 8.835 7.162 15.997 15.997 15.997s15.997-7.162 15.997-15.997-7.162-15.997-15.997-15.997c-1.701 0-3.338.271-4.876.763C188.022 11.056 158.513 0 128 0 57.421 0 0 57.42 0 128c0 70.579 57.421 127.999 128 127.999 70.579 0 128-57.42 128-127.999a127.95 127.95 0 0 0-4.661-34.232z"
      />
    </svg>
  )
}
function VenmoLogo(props) {
  return (
    <svg
      width="512px"
      height="512px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#0074de"
        className="dark:fill-zinc-300 dark:stroke-zinc-500"
        d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.8,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM278,387H174.32L132.75,138.44l90.75-8.62,22,176.87c20.53-33.45,45.88-86,45.88-121.87,0-19.62-3.36-33-8.61-44L365.4,124.1c9.56,15.78,13.86,32,13.86,52.57C379.25,242.17,323.34,327.26,278,387Z"
      />
    </svg>
  )
}
function BreatherLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#1FA561"
        className="dark:fill-zinc-300 dark:stroke-zinc-500"
        d="M13.09,22.64c-0.111,0-0.258-0.037-0.332-0.111c-0.111-0.074-0.147-0.221-0.147-0.332v-2.765 c0-0.184,0.147-0.369,0.332-0.442l3.909-1.069c0.332-0.074,0.553-0.442,0.442-0.774c-0.074-0.332-0.442-0.553-0.774-0.442 l-3.355,0.885c-0.147,0.037-0.295,0-0.369-0.074c-0.111-0.074-0.184-0.221-0.184-0.369V16.04c0-0.184,0.147-0.369,0.332-0.442 l5.199-1.438c0.332-0.111,0.516-0.442,0.442-0.774c-0.111-0.332-0.442-0.516-0.774-0.442l-4.609,1.291 c-0.147,0.037-0.295,0-0.406-0.074c-0.111-0.074-0.184-0.221-0.184-0.369v-1.069c0-0.184,0.147-0.369,0.332-0.442l3.909-1.032 c0.332-0.074,0.553-0.442,0.442-0.774c-0.074-0.332-0.442-0.553-0.774-0.442l-3.355,0.885c-0.147,0.037-0.295,0-0.369-0.074 c-0.111-0.074-0.184-0.221-0.184-0.369V9.403c0-0.184,0.147-0.369,0.332-0.442l2.507-0.664c0.332-0.074,0.553-0.442,0.442-0.774 C15.819,7.19,15.45,6.969,15.118,7.08l-1.954,0.516c-0.147,0.037-0.258,0-0.369-0.074c-0.111-0.074-0.184-0.221-0.184-0.369V4.462 c0-0.369-0.295-0.627-0.627-0.627c-0.369,0-0.627,0.295-0.627,0.627v2.692c0,0.147-0.074,0.258-0.184,0.369 c-0.111,0.074-0.258,0.111-0.369,0.074L8.85,7.08C8.518,7.006,8.149,7.19,8.075,7.522C8.001,7.854,8.186,8.223,8.518,8.296 l2.507,0.664c0.184,0.037,0.332,0.221,0.332,0.442v1.069c0,0.147-0.074,0.258-0.184,0.369c-0.111,0.074-0.258,0.111-0.406,0.074 l-3.355-0.811c-0.332-0.074-0.701,0.111-0.774,0.442c-0.074,0.332,0.111,0.701,0.442,0.774l3.945,1.032 c0.184,0.037,0.332,0.221,0.332,0.442v1.069c0,0.147-0.074,0.258-0.184,0.369c-0.111,0.074-0.258,0.111-0.406,0.074l-4.646-1.291 c-0.332-0.111-0.701,0.111-0.774,0.442c-0.111,0.332,0.111,0.701,0.442,0.774l5.199,1.438c0.184,0.037,0.332,0.221,0.332,0.442 v1.106c0,0.147-0.074,0.258-0.184,0.369c-0.111,0.074-0.258,0.111-0.406,0.074l-3.319-0.959c-0.332-0.074-0.701,0.111-0.774,0.442 c-0.074,0.332,0.111,0.701,0.442,0.774l3.945,1.069c0.184,0.037,0.332,0.221,0.332,0.442v2.765c0,0.111-0.037,0.258-0.147,0.332 c-0.111,0.074-0.221,0.111-0.332,0.111c-5.383-0.553-9.587-5.125-9.587-10.656c0-5.9,4.794-10.73,10.73-10.73 c5.9,0,10.73,4.794,10.73,10.73C22.677,17.515,18.473,22.05,13.09,22.64 M11.984,0C5.383,0,0,5.383,0,11.984 s5.383,11.984,11.984,11.984s11.984-5.383,11.984-11.984C23.968,5.347,18.584,0,11.984,0"
      ></path>
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read post</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="group -m-1 p-1"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Apollo',
      title: 'Senior Open Source Engineer',
      Logo: ApolloLogo,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Venmo',
      title: 'Staff Product Engineer',
      Logo: VenmoLogo,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Breather',
      title: 'Senior Web Engineer',
      Logo: BreatherLogo,
      start: '2015',
      end: '2020',
    },
  ]

  return (
    <div className="resume rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((Role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Role.Logo className="h-6 w-6" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none font-medium text-zinc-900 dark:text-zinc-100">
                {Role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {Role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${Role.start.label ?? Role.start} until ${
                  Role.end.label ?? Role.end
                }`}
              >
                <time dateTime={Role.start.dateTime ?? Role.start}>
                  {Role.start.label ?? Role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={Role.end.dateTime ?? Role.end}>
                  {Role.end.label ?? Role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/resume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
        absolute
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image5, image3, image2, image4, image1].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              priority
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Alessia Bellisario</title>
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
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=aless.co`}
        />
        <meta name="og:site_name" content="Alessia Bellisario" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alessia Bellisario" />
        <meta property="twitter:title" content="Alessia Bellisario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alessbell" />
        <meta
          name="twitter:description"
          content="I’m Alessia, a software engineer based in New York City."
        />
        <meta
          property="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=aless.co`}
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Alessia Bellisario
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Alessia, a software engineer based in New York City. I’m
            currently working on Apollo Client at Apollo GraphQL.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/alessbell"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/alessbell"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/alessiabellisario/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

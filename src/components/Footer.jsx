import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

function RCIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1350 900" {...props}>
      <path
        className="fill-zinc-900 stroke-zinc-500 dark:fill-zinc-300 dark:stroke-zinc-500"
        d="M0 0h900v675h-75V75H75v600h825v75H0zm0 900h900v225H150v-75h75v-75h75v75h75v-75h75v75h75v-75h75v75h75v-75h75v-75h-75v75h-75v-75h-75v75h-75v-75h-75v75h-75v-75h-75v75h-75v150H0zm75-75h750v75H75zm225-75h300v75H300z"
      />
      <path
        className="fill-zinc-900 stroke-zinc-500 dark:fill-zinc-300 dark:stroke-zinc-500"
        d="M150 150h150v150h75v-75h-75v-75h150v150h75v-75h-75v-75h300v225H450v75h150v-75h150v225H150V375h75v75h150v-75H150v-75h75v-75h-75z"
      />
    </svg>
  )
}

function MastodonIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 55" {...props}>
      <path
        d="M60.7539 14.3904C59.8143 7.40642 53.7273 1.90257 46.5117 0.836066C45.2943 0.655854 40.6819 0 29.9973 0H29.9175C19.2299 0 16.937 0.655854 15.7196 0.836066C8.70488 1.87302 2.29885 6.81852 0.744617 13.8852C-0.00294988 17.3654 -0.0827298 21.2237 0.0561464 24.7629C0.254119 29.8384 0.292531 34.905 0.753482 39.9598C1.07215 43.3175 1.62806 46.6484 2.41704 49.9276C3.89445 55.9839 9.87499 61.0239 15.7344 63.0801C22.0077 65.2244 28.7542 65.5804 35.2184 64.1082C35.9295 63.9428 36.6318 63.7508 37.3252 63.5321C38.8971 63.0329 40.738 62.4745 42.0913 61.4937C42.1099 61.4799 42.1251 61.4621 42.1358 61.4417C42.1466 61.4212 42.1526 61.3986 42.1534 61.3755V56.4773C42.153 56.4557 42.1479 56.4345 42.1383 56.4151C42.1287 56.3958 42.1149 56.3788 42.0979 56.3655C42.0809 56.3522 42.0611 56.3429 42.04 56.3382C42.019 56.3335 41.9971 56.3336 41.9761 56.3384C37.8345 57.3276 33.5905 57.8234 29.3324 57.8156C22.0045 57.8156 20.0336 54.3384 19.4693 52.8908C19.0156 51.6397 18.7275 50.3346 18.6124 49.0088C18.6112 48.9866 18.6153 48.9643 18.6243 48.9439C18.6333 48.9236 18.647 48.9056 18.6643 48.8915C18.6816 48.8774 18.7019 48.8675 18.7237 48.8628C18.7455 48.858 18.7681 48.8585 18.7897 48.8641C22.8622 49.8465 27.037 50.3423 31.2265 50.3412C32.234 50.3412 33.2387 50.3412 34.2463 50.3146C38.4598 50.1964 42.9009 49.9808 47.0465 49.1713C47.1499 49.1506 47.2534 49.1329 47.342 49.1063C53.881 47.8507 60.1038 43.9097 60.7362 33.9301C60.7598 33.5372 60.8189 29.8148 60.8189 29.4071C60.8218 28.0215 61.2651 19.5781 60.7539 14.3904Z"
        className="fill-zinc-900 stroke-zinc-500 dark:fill-zinc-300 dark:stroke-zinc-500"
      />
      <path
        d="M50.3943 22.237V39.5876H43.5185V22.7481C43.5185 19.2029 42.0411 17.3949 39.036 17.3949C35.7325 17.3949 34.0778 19.5338 34.0778 23.7585V32.9759H27.2434V23.7585C27.2434 19.5338 25.5857 17.3949 22.2822 17.3949C19.2949 17.3949 17.8027 19.2029 17.8027 22.7481V39.5876H10.9298V22.237C10.9298 18.6918 11.835 15.8754 13.6453 13.7877C15.5128 11.7049 17.9623 10.6355 21.0028 10.6355C24.522 10.6355 27.1813 11.9885 28.9542 14.6917L30.665 17.5633L32.3788 14.6917C34.1517 11.9885 36.811 10.6355 40.3243 10.6355C43.3619 10.6355 45.8114 11.7049 47.6847 13.7877C49.4931 15.8734 50.3963 18.6899 50.3943 22.237Z"
        className="fill-white stroke-white dark:fill-zinc-900 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function XXIIVVIcon(props) {
  return (
    <svg
      viewBox="0 0 260 210"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="28px"
      strokeLinecap="square"
      aria-hidden="true"
      fill="none"
      {...props}
    >
      <g>
        <g transform="translate(150,150),rotate(120,0,0)">
          <path
            className="stroke-zinc-900 dark:stroke-zinc-300"
            d="M0,-60 a60,60 0 1,0 0,120 l100,0"
          ></path>
        </g>
        <g transform="translate(150,150),rotate(240,0,0)">
          <path
            className="stroke-zinc-900 dark:stroke-zinc-300"
            d="M0,-60 a60,60 0 1,0 0,120 l100,0"
          ></path>
        </g>
        <g transform="translate(150,150),rotate(0,0,0)">
          <path
            className="stroke-zinc-900 dark:stroke-zinc-300"
            d="M0,-60 a60,60 0 1,0 0,120 l100,0"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div className="flex">
                <a
                  aria-label="Recurse Center Webring"
                  href="https://webring.recurse.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RCIcon className="h-12 w-12" />
                </a>
                <a
                  aria-label="Mastodon"
                  rel="me"
                  href="https://recurse.social/@alessbell"
                >
                  <MastodonIcon className="ml-2 h-12 w-12" />
                </a>
                <a
                  aria-label="XXIIVV Webring"
                  href="https://webring.xxiivv.com/#random"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XXIIVVIcon className="ml-1 h-12 w-12" />
                </a>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function RCIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1125"
      width="900"
      viewBox="0 0 1350 900"
      {...props}
    >
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

function XXIIVVIcon(props) {
  return (
    <svg
      width="300px"
      height="210px"
      viewBox="0 0 300 210"
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
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div className="flex">
                <a
                  href="https://webring.recurse.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RCIcon className="h-12 w-12" />
                </a>
                <a
                  href="https://webring.xxiivv.com/#random"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XXIIVVIcon className="h-12 w-12" />
                </a>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

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

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">about</NavLink>
                <NavLink href="/blog">blog</NavLink>
                <NavLink href="/speaking">speaking</NavLink>
                <NavLink href="/uses">uses</NavLink>
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
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

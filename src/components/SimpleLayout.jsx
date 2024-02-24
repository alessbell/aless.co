import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text font-mono text-4xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:to-fuchsia-300 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

import { Container } from 'components/Container'

export default function Custom404() {
  return (
    <Container className="mt-16 grid h-60 grid-cols-1 place-content-center sm:mt-32">
      <div className="text-zinc-800 dark:text-zinc-100">
        <h2 className="text-xl">404 - Page Not Found</h2>
      </div>
    </Container>
  )
}

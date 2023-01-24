import { Container } from '@/components/Container'

export default function Custom404() {
  return (
    <Container className="grid grid-cols-1 h-60 place-content-center mt-16 sm:mt-32">
      <div className="text-zinc-800 dark:text-zinc-100">
        <h2 className="text-xl">404 - Page Not Found</h2>
      </div>
    </Container>
  )
}

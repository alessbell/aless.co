// export default function RootLayout({
//   // Layouts must accept a children prop.
//   // This will be populated with nested layouts or pages
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

// import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

// function usePrevious(value) {
//   let ref = useRef()

//   useEffect(() => {
//     ref.current = value
//   }, [value])

//   return ref.current
// }

export default function App({
  // Component,
  // pageProps,
  // router,
  children,
}: {
  children: React.ReactNode
}) {
  // let previousPathname = usePrevious(router.pathname)

  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

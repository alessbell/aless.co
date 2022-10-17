import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Alessia Bellisario</title>
        <meta name="description" content="Things I Use" />
      </Head>
      <SimpleLayout
        title="Things I Use"
        intro="I thought I'd write down a few trinkets and more useful tools I'm a fan of in my day-to-day."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1, 16GB RAM (2020)">
              My personal machine is a late 2019 16&quot; MacBook Pro and the
              difference between it and my work machine, the 2020 M1 MPB, is
              night and day.
            </Tool>
            <Tool title="Samsung J791 Series 34-Inch Ultrawide QHD (3440x1440)">
              I recently upgraded to an ultrawide monitor since the 2020 M1 macs
              can only drive one external display. I&apos;m enjoying it more
              than the more cumbersome two monitor set-up I had before.
            </Tool>
            <Tool title="OLKB Planck Keyboard">
              I&apos;ve built a few keyboards and let my now 14 month old son
              slam his fists on a few... the keyboard that has stood the test of
              his manual QA (read: the one I have left to use) is the first
              board I soldered, a Planck 40% ortholinear layout.
            </Tool>
            <Tool title="Logitech MX Master 2S Wireless Mouse">
              I don&apos;t think I&apos;ll use another mouse again.
            </Tool>
            <Tool title="Capisco Chair by HÅG">
              It&apos;s comfortable, has a nice foot rest and is easy to
              transition between sitting and standing heights.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Microsoft's Visual Studio Code">
              I use dark theme{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Dark Dimmed
              </a>{' '}
              combined with{' '}
              <a
                href="https://developer.apple.com/fonts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SF Mono
              </a>
              .
            </Tool>
            <Tool title="iTerm2">
              I&apos;ve been using it almost since the day I started
              programming.
            </Tool>
            <Tool title="Insomnia">A REST client for MacOS.</Tool>
            <Tool title="Dash">
              A Mac app that gives you offline access to 200+ API documentation
              sets.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Alessia Bellisario</title>
        <meta name="description" content="A few talks I've given" />
      </Head>
      <SimpleLayout
        title="A few talks I've given"
        intro="I'm looking for more opportunities to speak at tech events of all kinds this year - please get in touch if you happen to be organizing one!"
      >
        <div className="space-y-20">
          <SpeakingSection title="Meetups">
            <Appearance
              href="https://defer-presentation.vercel.app/"
              title="@defer all the (slow) things"
              description="An overview of GraphQL's proposed @defer directive, now available in Apollo Client and GraphOS."
              event="ChicagoJS"
              cta="View slides"
            />
          </SpeakingSection>
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://youtu.be/tq9MfIG-VXw?t=14526"
              title="Next i18n: Performant, Rich Translations in Next.js"
              description="Inter­nation­ali­zation isn't a feature, it’s an architecture."
              event="JS@PayPal Worldwide Virtual Conference (2021)"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=6EHbfAmA_0c"
              title="A QuickStart Guide to Making Things on the Internet"
              // description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="Google Women Techmakers Montreal (2016)"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

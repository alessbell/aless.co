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
      {event && <Card.Eyebrow decorate>{event}</Card.Eyebrow>}
      {description && <Card.Description>{description}</Card.Description>}
      {cta && <Card.Cta>{cta}</Card.Cta>}
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
          <SpeakingSection title="Upcoming">
            <Appearance
              title="How to Use Suspense and GraphQL with Apollo to Build Great User Experiences"
              event="React Advanced London (October 2023)"
              description="The Apollo Client team will show you how we built a non-trivial app using Apollo Client’s new Suspense features and GraphQL features like the @defer directive."
              href="https://reactadvanced.com/"
              cta="View React Advanced site"
            />
          </SpeakingSection>
          <SpeakingSection title="Past">
            <Appearance
              href="https://defer-presentation.vercel.app/"
              title="@defer all the (slow) things"
              description="An overview of GraphQL's proposed @defer directive, now available in Apollo Client and GraphOS."
              event="ChicagoJS (March 2023)"
              cta="View slides"
            />
            <Appearance
              href="https://youtu.be/tq9MfIG-VXw?t=14526"
              title="Next i18n: Performant, Rich Translations in Next.js"
              description="Inter­nation­ali­zation isn't a feature, it’s an architecture."
              event="JS@PayPal Worldwide Virtual Conference (May 2021)"
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

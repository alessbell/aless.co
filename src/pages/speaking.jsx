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
      <SimpleLayout title="A few talks I've given">
        <div className="space-y-20">
          <SpeakingSection title="Upcoming">
            <Appearance
              title="Query Now, Render Later: Leveraging @defer for Efficient Data Delivery"
              event="GraphQL Summit 2023"
              description="An overview of GraphQL's proposed @defer directive, now available in Apollo Client and GraphOS."
              href="https://summit.graphql.com/event/c51538f6-4b76-44e3-871e-54180c77cad8/summary"
              cta="View GraphQL Summit site"
            />
            <Appearance
              title="How to Use Suspense and GraphQL with Apollo to Build Great User Experiences"
              event="React Advanced London 2023"
              description="The Apollo Client team will show you how we built a non-trivial app using Apollo Client’s new Suspense features and GraphQL features like the @defer directive."
              href="https://reactadvanced.com/"
              cta="View React Advanced site"
            />
          </SpeakingSection>
          <SpeakingSection title="Past">
            <Appearance
              title="@defer all the slow things"
              event="GraphQL Conf 2023"
              description="A lightning talk on GraphQL's proposed @defer directive."
              href="https://www.youtube.com/watch?v=b0iNvXu5ZlU"
              cta="View GraphQL Conf site"
              />
            <Appearance
              title="Suspense + GraphQL = Superpowers"
              event="React Rally 2023"
              description="A deep dive into an app built with Apollo Client’s new Suspense hooks and GraphQL features like the @defer directive."
              href="https://www.youtube.com/watch?v=xqI3O8lqIxw"
              cta="Watch video"
            />
            <Appearance
              href="https://youtu.be/tq9MfIG-VXw?t=14526"
              title="Next i18n: Performant, Rich Translations in Next.js"
              description="Inter­nation­ali­zation isn't a feature, it’s an architecture."
              event="JS@PayPal Worldwide Virtual Conference 2021"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=6EHbfAmA_0c"
              title="A QuickStart Guide to Making Things on the Internet"
              event="Google Women Techmakers Montreal 2016"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

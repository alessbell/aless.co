import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import speakingImage from '@/images/profile6.JPG'

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
      <Card.Title blank as="h3" href={href}>
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
      <SimpleLayout title="tech talks">
        <div className="lg:pl-2"></div>
        <div className="space-y-20">
          <Section border={false}>
            <div className="max-w-xs px-2.5 lg:max-w-xl">
              <Image
                src={speakingImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </Section>
          <SpeakingSection title="Past">
            <Appearance
              title="Schema-Driven Testing with Mock Service Worker"
              event="GraphQL Conf 2024"
              href="https://www.youtube.com/watch?v=hFmJgR0vssY"
              cta="Watch video"
            />
            <Appearance
              title="GraphQL in the World of React Server Components"
              event="React Advanced 2024"
              href="https://gitnation.com/contents/graphql-in-the-world-of-react-server-components"
              cta="Watch video"
            />
            <Appearance
              title="How to Use Suspense and GraphQL with Apollo to Build Great User Experiences"
              event="React Summit US 2023"
              href="https://portal.gitnation.org/contents/how-to-use-suspense-and-graphql-with-apollo-to-build-great-user-experiences-1609"
              cta="Watch video"
            />
            <Appearance
              title="Panel Discussion: Open Source & “Perceived Competition” Between Projects"
              event="React Advanced London 2023"
              href="https://portal.gitnation.org/contents/open-source-and-perceived-competition-between-projects"
              cta="Watch video"
            />
            <Appearance
              title="How to Use Suspense and GraphQL with Apollo to Build Great User Experiences"
              event="React Advanced London 2023"
              description="The Apollo Client team will show you how we built a non-trivial app using Apollo Client’s new Suspense features and GraphQL features like the @defer directive."
              href="https://portal.gitnation.org/contents/how-to-use-suspense-and-graphql-with-apollo-to-build-great-user-experiences"
              cta="Watch video"
            />
            <Appearance
              title="Query Now, Render Later: Leveraging @defer for Efficient Data Delivery"
              event="GraphQL Summit 2023"
              description="An overview of GraphQL's proposed @defer directive, now available in Apollo Client and GraphOS."
              href="https://www.youtube.com/watch?v=n4mcAm4ukLU"
              cta="Watch video"
            />
            <Appearance
              title="Apollo Client Office Hours with Alessia Bellisario"
              // event="GraphQL Summit 2023"
              description="Alessia Bellisario and Jeff Auriemma talk about Apollo Client. Originally streamed in Apollo’s Discord on October 6, 2023."
              href="https://www.apollographql.com/blog/uncategorized/apollo-client-office-hours-with-alessia-bellisario/"
              cta="Read transcript or listen to podcast"
            />
            <Appearance
              title="@defer all the slow things"
              event="GraphQL Conf 2023"
              description="A lightning talk on GraphQL's proposed @defer directive."
              href="https://www.youtube.com/watch?v=b0iNvXu5ZlU"
              cta="Watch video"
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

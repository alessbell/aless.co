import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

interface Book {
  book: {
    link: string;
    title: string;
  };
}

interface ProfilePictureData {
  profilePicture: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  goodreadsShelf?: {
    reviews: Book[];
  };
}

const AboutPage: React.FunctionComponent = () => {
  const data: ProfilePictureData = useStaticQuery(graphql`
    query ProfilePictureQuery {
      profilePicture: file(
        absolutePath: { regex: "/assets/alessiabellisario/" }
      ) {
        childImageSharp {
          fixed(height: 150, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      goodreadsShelf {
        reviews {
          book {
            link
            title
          }
        }
      }
    }
  `);
  const shelf = data.goodreadsShelf;
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[
          `blog`,
          `rust`,
          `gatsby`,
          `webassembly`,
          `javascript`,
          `react`,
          `Alessia Bellisario`,
        ]}
      />
      <h2>
        Hi there{' '}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h2>
      <p>
        <Img
          style={{
            float: 'left',
            marginRight: '1.5rem',
            marginTop: '0.25rem',
          }}
          fixed={data.profilePicture.childImageSharp.fixed}
        />
        I{`'`}m Alessia Bellisario, a software engineer based in NYC.
        {shelf && (
          <span>
            {' '}
            I{`'`}m currently reading{' '}
            <a
              href={shelf.reviews[0].book.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shelf.reviews[0].book.title}
            </a>
            .
          </span>
        )}
      </p>
      <p>
        I work at{' '}
        <a
          href="https://www.breather.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Breather
        </a>{' '}
        as a Senior Front End Developer. I{`'`}m also an alumna of the{' '}
        <a
          href="https://recurse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recurse Center
        </a>
        . I{`'`}m always happy to chat about RC with anyone considering
        applying.
      </p>
      <p>
        I{`'`}m using this space to write about programming—my current interests
        include Rust and graphics—and building mechanical keyboards. If any of
        this is of interest to you, say hi! You can reach me at{' '}
        <a href="mailto:web@bellisar.io">web[at]bellisar.io</a>.
      </p>
      <p>
        Finally, here{`'`}s a list of{' '}
        <a href="/uses">tools and doodads I use</a> in the course of my life and
        work.
      </p>
      <hr />
      <p style={{ marginBottom: '1.5rem', fontSize: '14px' }}>
        <i>A note on tracking:</i> In January 2020, I decided to{' '}
        <a
          href="https://www.kn8.lt/blog/hosting-your-own-analytics-with-fathom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          host my own instance
        </a>{' '}
        of{' '}
        <a
          href="https://usefathom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fathom
        </a>
        , a GDPR-compliant open source analytics platform for tracking basic
        metrics about this site without collecting any personal or invasive
        data.
      </p>
    </Layout>
  );
};

export default AboutPage;

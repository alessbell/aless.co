import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

type ProfilePictureData = {
  profilePicture: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  ogImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
};
const AboutPage = (): JSX.Element => {
  const { profilePicture, ogImage }: ProfilePictureData =
    useStaticQuery(graphql`
      query ProfilePictureQuery {
        profilePicture: file(absolutePath: { regex: "/assets/alessia2022/" }) {
          childImageSharp {
            fixed(height: 250, width: 225) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        ogImage: file(absolutePath: { regex: "/assets/about-twitter-card/" }) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `);
  return (
    <Layout>
      <SEO
        ogImageProp={ogImage?.childImageSharp?.fixed?.src}
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
        Hey there{' '}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h2>
      <p>
        {profilePicture?.childImageSharp?.fixed ? (
          <Img
            style={{
              float: 'left',
              marginRight: '1.5rem',
              marginTop: '0.1rem',
              marginBottom: '0.2rem',
            }}
            fixed={profilePicture.childImageSharp.fixed}
          />
        ) : null}
        I{`'`}m Alessia, a software engineer based in NYC.
      </p>
      <p>
        I work on the{' '}
        <a
          href="https://github.com/apollographql/apollo-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apollo Client
        </a>{' '}
        team at{' '}
        <a
          href="https://apollographql.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apollo GraphQL
        </a>{' '}
        as a Senior Open Source Engineer.
      </p>
      <p>
        In April 2019 I attended the{' '}
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
        <Link to="/uses/">tools and doodads I use</Link>.
      </p>
      <p>This site contains no tracking or analytics💗</p>
    </Layout>
  );
};

export default AboutPage;

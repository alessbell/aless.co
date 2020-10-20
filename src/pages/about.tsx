import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import { Link } from 'gatsby';
import { ProfilePictureQueryQuery } from '../../graphql-types';
import SEO from '../components/seo';
import Layout from '../components/layout';

// omit generated profilePicture type because of bad schema typing:
// https://github.com/gatsbyjs/gatsby/issues/17003
const AboutPage = (): JSX.Element => {
  const {
    profilePicture,
    ogImage,
    goodreadsShelf,
  }: Omit<ProfilePictureQueryQuery, 'profilePicture'> & {
    profilePicture: { childImageSharp: { fixed: FixedObject } };
  } = useStaticQuery(graphql`
    query ProfilePictureQuery {
      profilePicture: file(absolutePath: { regex: "/assets/selfie/" }) {
        childImageSharp {
          fixed(
            height: 225
            width: 200
            traceSVG: { color: "#d3c8ac", blackOnWhite: false }
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
              borderRadius: '8px',
            }}
            fixed={profilePicture.childImageSharp.fixed}
          />
        ) : null}
        I{`'`}m Alessia, a software engineer based in NYC.
        {goodreadsShelf?.reviews && goodreadsShelf.reviews[0] ? (
          <span>
            {' '}
            I{`'`}m currently reading{' '}
            <a
              href={goodreadsShelf.reviews[0].book?.link || ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              {goodreadsShelf.reviews[0].book?.title || ''}
            </a>
            .
          </span>
        ) : null}
      </p>
      <p>
        I work on the{' '}
        <a href="https://venmo.com/" target="_blank" rel="noopener noreferrer">
          Venmo
        </a>{' '}
        team at PayPal as a senior engineer. In April 2019 I attended the{' '}
        <a
          href="https://recurse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recurse Center
        </a>{' '}
        - I{`'`}m always happy to chat about RC with anyone considering
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

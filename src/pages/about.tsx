import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SEO from '../components/seo';
import Layout from '../components/layout';

const AboutPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="About"
        // ogImageProp={ogImage?.childImageSharp?.fixed?.src}
        // keywords={[
        //   `blog`,
        //   `rust`,
        //   `nextjs`,
        //   `gatsby`,
        //   `webassembly`,
        //   `javascript`,
        //   `react`,
        //   `Alessia Bellisario`,
        // ]}
      />
      <h2>
        Hey there{' '}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h2>
      <div
        style={{
          float: 'left',
          marginRight: '1.5rem',
          marginTop: '0.1rem',
          marginBottom: '0.2rem',
          borderRadius: '8px',
        }}
      >
        <Image src="/assets/selfie.jpg" width="200" height="200" />
      </div>
      {/* <p>
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
      </p> */}
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
        <Link href="/uses/">tools and doodads I use</Link>.
      </p>
      <p>This site contains no tracking or analytics💗</p>
    </Layout>
  );
};

export default AboutPage;

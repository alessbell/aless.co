import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <SEO
      title="about"
      keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
    />
    <h2>about</h2>
    <p>
      Hi
      <span role="img" aria-label="waving hand">
        👋
      </span>
      {'  '}
      I'm Alessia Bellisario, a software engineer based in New York City.
    </p>
    <p>
      I work at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>{' '}
      as a Senior Front End Developer, and in April 2019 I spent a week at the{' '}
      <a href="https://recurse.com/" target="_blank" rel="noopener noreferrer">
        Recurse Center
      </a>{' '}
      as a member of the mini 3 2019 batch.
    </p>
    <p>
      I'm using this space to write about programming—my current interests
      include Rust and graphics—and building mechanical keyboards, a hobby I'm
      relatively new to. You can reach me at web [at] bellisar.io.
    </p>
  </Layout>
);

export default AboutPage;

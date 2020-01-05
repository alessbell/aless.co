import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
    />
    <h2>About</h2>
    <p>
      Hi
      <span role="img" aria-label="waving hand">
        👋
      </span>
      {'   '}
      I'm Alessia Bellisario, a software engineer based in New York City.
    </p>
    <p>
      I work at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>{' '}
      as a Senior Front End Developer, and I'm an alumna of the{' '}
      <a href="https://recurse.com/" target="_blank" rel="noopener noreferrer">
        Recurse Center
      </a>
      . I'm always happy to chat about RC with anyone considering applying (just
      shoot me a note at the email below).
    </p>
    <p>
      I'm using this space to write about programming—my current interests
      include Rust and graphics—and building mechanical keyboards. If any of
      this is of interest to you, say hi! You can reach me at{' '}
      <a href="mailto:web@bellisar.io">web[at]bellisar.io</a>.
    </p>
    <p style={{ marginBottom: '1.5rem' }}>
      Finally, this site collects no data or analytics <code>{'<3'}</code>
    </p>
  </Layout>
);

export default AboutPage;

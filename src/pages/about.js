import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <SEO
      title="about"
      keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
    />
    <h1>about</h1>
    <p>
      Hi
      <span role="img" aria-label="waving hand">
        👋
      </span>{' '}
      I'm Alessia Bellisario, a programmer based in NYC.
    </p>
    <p>
      I work at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>{' '}
      as a web engineer, and in April I'll spend a week at the{' '}
      <a href="https://recurse.com/" target="_blank" rel="noopener noreferrer">
        Recurse Center
      </a>{' '}
      as a member of the mini 3 2019 batch.
    </p>
    <p>
      For now, I plan on using this space to write about Rust as I learn it, and
      to talk about my preparation for and experiences at RC.
    </p>
  </Layout>
);

export default AboutPage;

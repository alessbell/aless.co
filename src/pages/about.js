import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>about</h1>
    <p>Hello, I'm Alessia Bellisario. I live and work in New York City.</p>
    <p>
      I work at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>{' '}
      as a full stack web engineer, and in April I'll spend a week at the{' '}
      <a
        href="https://http://recurse.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Recurse Center
      </a>{' '}
      as a member of the mini 3 2019 batch.
    </p>
    <p>This blog will mostly explore my interests </p>
  </Layout>
);

export default AboutPage;

import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>about</h1>
    <p>Hi, I'm Alessia Bellisario. I live in New York City.</p>
    <p>
      I work at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>{' '}
      as a full stack web engineer, and in April I'll spend a week at the{' '}
      <a href="https://recurse.com/" target="_blank" rel="noopener noreferrer">
        Recurse Center
      </a>{' '}
      as a member of the mini 3 2019 batch.
    </p>
    <p>
      This blog will explore topics in JavaScript, React, and maybe even Rust,
      Wasm, WebGL, generative art... stay tuned ¯\_(ツ)_/¯
    </p>
  </Layout>
);

export default AboutPage;

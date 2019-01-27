import React from 'react';
import Layout from '../components/layout';

const AboutPage = ({ data: { site } }) => (
  <Layout title={site.siteMetadata.title}>
    <h1>Hello!</h1>
    <p>I'm Alessia Bellisario. I live and work in New York City.</p>
    <p>
      I'm a developer at{' '}
      <a href="https://breather.com" target="_blank" rel="noopener noreferrer">
        Breather
      </a>
      , and in April I'll spend a week at the{' '}
      <a
        href="https://http://recurse.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Recurse Center
      </a>{' '}
      as a member of the mini 3 2019 batch. I could not be more excited.
    </p>
    <p>
      The name of this blog—anti-pattern—is a shout out to anyone who has ever
      been made to feel unwelcome in programming spaces. I've lost count of the
      times I've been asked "So, are you a developer?" at meetups.
    </p>
    <p>
      In a field (software dev) and an industry (tech startups) that are so
      supremely obsessed with pattern-matching, the notion of anti-patterns
      takes on new meaning. Anti-patterns are...
    </p>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            spoiler
            title
          }
        }
      }
    }
  }
`;

import React from 'react';

const Footer = () => (
  <footer
    style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
      marginBottom: '3rem',
    }}
  >
    <div>
      <a
        href="https://twitter.com/alessbell"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>
      {'   '}🔸{'  '}
      <a
        href="https://github.com/alessbell"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      {'   '}🔺{'  '}
      <a
        href="mailto:web@bellisar.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>
      {'   '}🔹{'  '}
      <a href="/about">about</a>
    </div>
  </footer>
);

export default Footer;

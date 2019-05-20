/* eslint-disable jsx-a11y/accessible-emoji */
// linting error doesn't recognize emotion component as span
// so it's raising a false positive...

import React from 'react';
import styled from '@emotion/styled';

const Space = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: ${({ color }) => color || 'black'};
`;

const FooterWrapper = styled.footer`
  display: block;
  padding: 0;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
  }
`;

const Anchor = ({ link, name, rel, target = '_self' }) => (
  <a
    href={link}
    target={target}
    rel={rel === 'noopener' ? 'noopener noreferrer' : ''}
  >
    {name}
  </a>
);

const Footer = ({ commit, repository }) => (
  <FooterWrapper>
    <Anchor
      link="https://twitter.com/alessbell"
      target="_blank"
      rel="noopener"
      name="twitter"
    />

    <Space color="red">•</Space>

    <Anchor
      link="https://github.com/alessbell"
      target="_blank"
      rel="noopener"
      name="github"
    />

    <Space color="orange">•</Space>

    <a href="/rss.xml">rss</a>

    <Space color="pink">•</Space>

    <a href="/about">about</a>

    <div style={{ float: 'right' }}>
      deployed commit:{' '}
      <code>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${repository}/commit/${commit}`}
        >
          {commit.substring(0, 6)}
        </a>
      </code>
    </div>
  </FooterWrapper>
);

export default Footer;

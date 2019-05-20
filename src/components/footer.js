/* eslint-disable jsx-a11y/accessible-emoji */
// linting error doesn't recognize emotion component as span
// so it's raising a false positive...

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Space = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
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
    <div>
      <Anchor
        link="https://twitter.com/alessbell"
        target="_blank"
        rel="noopener"
        name="twitter"
      />
      <Space role="img" aria-label="orange diamond">
        🔸
      </Space>
      <Anchor
        link="https://github.com/alessbell"
        target="_blank"
        rel="noopener"
        name="github"
      />
      <Space role="img" aria-label="red triangle">
        🔺
      </Space>
      <a href="/rss.xml">rss</a>
      <Space role="img" aria-label="blue diamond">
        🔹
      </Space>
      <a href="/about">about</a>
      <Space>
        Deployed commit of{' '}
        <a href={`${repository}/commit/${commit}`}>{commit.substring(0, 6)}</a>
      </Space>
    </div>
  </FooterWrapper>
);

export default Footer;

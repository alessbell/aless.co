/* eslint-disable jsx-a11y/accessible-emoji */
// linting error doesn't recognize emotion component as span
// so it's raising a false positive...

import * as React from 'react';
import { Space, FooterWrapper } from './styles';

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: string;
  name: string;
  rel?: 'noopener';
  target?: string;
}

interface FooterProps {
  commit: string;
  repository: string;
}

const Anchor: React.SFC<AnchorProps> = ({
  link,
  name,
  rel,
  target = '_self',
}) => (
  <a
    href={link}
    target={target}
    rel={rel === 'noopener' ? 'noopener noreferrer' : ''}
  >
    {name}
  </a>
);

const Footer: React.SFC<FooterProps> = ({ commit, repository }) => (
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
          {commit.substring(0, 7)}
        </a>
      </code>
    </div>
  </FooterWrapper>
);

export default Footer;

import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Space, FooterWrapper } from './styles';

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: string;
  name: string;
  rel?: 'noopener';
  target?: '_blank';
}

const Commit = styled.div`
  @media (min-width: 52em) {
    float: right;
  }
`;

export interface FooterProps {
  commit: string;
  repository: string;
}

const Anchor: React.FunctionComponent<AnchorProps> = ({
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

const Footer: React.FunctionComponent<FooterProps> = ({
  commit,
  repository,
}) => (
  <FooterWrapper>
    <Link to="/about">about</Link>

    <Space color="orange">•</Space>

    <Anchor
      link="https://github.com/alessbell"
      target="_blank"
      rel="noopener"
      name="github"
    />

    <Space color="red">•</Space>

    <Anchor
      link="https://twitter.com/alessbell"
      target="_blank"
      rel="noopener"
      name="twitter"
    />

    <Space color="green">•</Space>

    <Anchor
      link="https://www.dropbox.com/s/o5hwc6eivt2gk5x/resume.pdf?dl=0"
      target="_blank"
      rel="noopener"
      name="resume"
    />

    <Space color="pink">•</Space>

    <a href="/rss.xml">rss</a>

    <Commit>
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
    </Commit>
  </FooterWrapper>
);

export default Footer;

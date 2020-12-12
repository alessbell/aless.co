import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Space, FooterWrapper } from './styles';
import rcLogo from './icons/rc.svg';
import iconBlack from './icons/icon.black.svg';

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: string;
  name: string;
  rel?: 'noopener';
  target?: '_blank' | '_self';
}

const Commit = styled.div`
  @media (min-width: 52em) {
    float: right;
  }
`;

const Anchor = ({ link, name, rel, target = '_self' }: AnchorProps) => (
  <a
    href={link}
    target={target}
    rel={rel === 'noopener' ? 'noopener noreferrer' : ''}
  >
    {name}
  </a>
);

const Footer = ({
  commit,
  repository,
}: {
  commit?: string | null;
  repository?: string | null;
}): JSX.Element => (
  <FooterWrapper>
    <Link to="/about/">about</Link>

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

    <Anchor link="/resume.pdf" name="resume" />

    <Space color="pink">•</Space>

    <a href="/rss.xml">rss</a>

    {commit && repository ? (
      <Commit>
        deployed commit:{' '}
        <code>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${repository}/commit/${commit}`}
          >
            {commit?.substring(0, 7)}
          </a>
        </code>
      </Commit>
    ) : null}
    <div className="webrings">
      <a
        className="webring-link"
        href="https://webring.xxiivv.com/#random"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={iconBlack as string}
          style={{ width: '55px', marginRight: '4px', marginBottom: '-9px' }}
        />
      </a>
      <a
        className="webring-link"
        href="https://webring.recurse.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={rcLogo as string} style={{ width: '36px' }} />
      </a>
    </div>
  </FooterWrapper>
);

export default Footer;

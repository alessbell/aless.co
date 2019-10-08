import * as React from 'react';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { H1, Link, LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';
import Footer from './footer';

interface LayoutData {
  site: {
    siteMetadata: {
      title: string;
      commit: string;
      repository: string;
    };
  };
}

const Layout: React.FunctionComponent = ({ children }) => {
  React.useEffect(() => {
    const headings = document.querySelectorAll('h1');
    let styles = ``;
    headings.forEach(heading => {
      const random = `x${Math.floor(Math.random() * 16777215).toString(16)}`;
      heading.classList.add(random);
      let text = '';
      if (heading.innerText) {
        text = heading.innerText.replace(`'`, `\\'`).replace(`\n`, '\\A ');
      }
      styles += `.${random}:after { content: '${text}';}`;
    });

    const style = document.createElement('style');
    style.textContent = styles;
    document.body.appendChild(style);
  });

  const data: LayoutData = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          commit
          repository
        }
      }
    }
  `);

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: '640px',
      }}
    >
      <Global
        styles={css`
          body {
            padding: 0 1.5rem;
            margin: 0;
          }
          h1,
          h2 {
            &::after {
              top: 0;
              width: 100%;
              z-index: -1;
              left: 18px;
              color: #f8a51a;
              text-shadow: none;
              font-style: italic;
              position: absolute;
              transform: skew(-2deg) translateX(-20px);
            }
          }
          hr {
            box-sizing: content-box;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: calc(1.75rem - 1px);
            background: hsla(0, 0%, 0%, 0.2);
            border: none;
            height: 1px;
          }
          .autolink-header {
            margin-right: 0.5rem;
            margin-left: 0;
            @media (min-width: 52em) {
              margin-left: -1.5rem;
            }
            > svg {
              fill: blue;
            }
            &:hover {
              background: white;
            }
          }
          .prism-code {
            overflow-x: scroll;
            line-height: unset;
            padding: 15px 20px !important;
          }
          :not(pre) > code[class*='language-'],
          pre[class*='language-'] {
            margin-bottom: 1.75rem;
          }
          blockquote {
            color: #525252;
            margin-left: 0;
            font-size: 1.1rem;
            padding-left: 1rem;
            border-left: 6px solid blue;
            font-style: italic;
          }
          /* Inline code */
          code {
            line-height: 1.5;
            border-radius: 0.3rem;
            background: rgba(255, 229, 100, 0.2);
            color: #1a1a1a;
            font-size: inherit;
            font-weight: inherit;
            padding: 0.15em 0.2em 0.05em;
            white-space: normal;
            text-shadow: none;
          }
          /* Gatsby Image */
          .gatsby-resp-image-image {
            position: absolute;
            top: 0;
            width: 100%;
          }
        `}
      />
      <div style={{ position: 'relative' }}>
        <H1>
          <Link id="title" to={`/`}>
            {data.site.siteMetadata.title}
          </Link>
        </H1>
        {typeof document !== `undefined` && <Header />}
        <h3>a blog by alessia bellisario</h3>
      </div>
      {children}
      <Footer
        commit={data.site.siteMetadata.commit}
        repository={data.site.siteMetadata.repository}
      />
      <TopBar />
      <BottomBar />
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default Layout;

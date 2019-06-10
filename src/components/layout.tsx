import * as React from 'react';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import {
  H1,
  Link,
  LeftBar,
  RightBar,
  TopBar,
  BottomBar,
  BORDER_COLOR,
} from './styles';
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
        maxWidth: '40rem',
      }}
    >
      <Global
        styles={css`
          body {
            --hr: hsla(0, 0%, 0%, 0.2);
            --inlineCode-bg: rgba(255, 229, 100, 0.2);
            --inlineCode-text: #1a1a1a;
            padding: 0 1.5rem;
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 3rem;
          }
          h3 {
            margin-bottom: 0.5rem;
          }
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          li,
          footer,
          small {
            font-family: 'Untitled Sans', 'Helvetica', sans-serif;
          }
          h1,
          h2,
          h3 {
            font-family: 'GT Pressura Mono Regular', monospace;
          }
          h1,
          h2 {
            margin-bottom: 1rem;
            font-size: 1.8rem;
            position: relative;
            color: ${BORDER_COLOR};
            text-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
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

          ::selection {
            background: #efb617; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #efb617; /* Gecko Browsers */
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
            background: var(--hr);
            border: none;
            height: 1px;
          }

          p {
            font-size: 18px;
            margin-top: 0.5rem;
          }

          ul,
          p {
            line-height: 1.5;
          }

          :not(pre) > code[class*='language-'],
          pre[class*='language-'],
          p,
          ul {
            margin-bottom: 1.75rem;
          }
          a {
            color: blue;
            text-decoration: hotpink underline;
            text-decoration-style: wavy;
            text-underline-position: under;
          }
          a:hover {
            color: black;
            background-color: yellow;
          }
          figure {
            margin: 0;
          }
          figcaption {
            font-size: 0.85rem;
            margin-top: 0.5rem;
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
            border-radius: 0.3em;
            background: var(--inlineCode-bg);
            color: var(--inlineCode-text);
            padding: 0.15em 0.2em 0.05em;
            white-space: normal;
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
        <h3 style={{ marginTop: '0', marginBottom: '3rem' }}>
          a blog by alessia bellisario
        </h3>
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

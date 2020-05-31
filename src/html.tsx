import * as React from 'react';

type HTMLProps = {
  htmlAttributes: React.AllHTMLAttributes<HTMLElement>;
  headComponents: [];
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
};

function createTrackingSnippet() {
  const token = 'f905436a5b667f3b2e97ce0a0fbc33e2';
  const type = 'logo_and_text';

  return `
    ;(function(w, d) {

    if (!w._rcs) {
      w._rcs = {token: '${token}', type: '${type}'};
    }

    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://d29xw0ra2h4o4u.cloudfront.net/assets/scout-a161fd9d3fd8243a4bc05c4ca4b9fe66bc5c115f778d70cf59b5090c9c1626ba.js';
    d.body.appendChild(s);

    })(window, document);
  `;
}

const HTML: React.FunctionComponent<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  const html = createTrackingSnippet();
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
              (function() {
                window.__onShaderChange = function() {};
                function setShader(newShader) {
                  window.__shader = newShader;
                  preferredShader = newShader;
                  window.__onShaderChange(newShader);
                }
                var preferredShader;
                try {
                  preferredShader = localStorage.getItem('shader');
                } catch (err) {}
                window.__setPreferredShader = function(newShader) {
                  setShader(newShader);
                  try {
                    localStorage.setItem('shader', newShader);
                  } catch (err) {}
                }
                setShader(preferredShader || '0');
              })();
            `,
          }}
        />
        {preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
        <script
          key="gatsby-plugin-recurse-scout"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </body>
    </html>
  );
};

export default HTML;

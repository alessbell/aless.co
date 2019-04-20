import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Theme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <LiveProvider code={children.trim()}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      theme={Theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {/* render null for last empty line because
          it was adding a span that looked like padding */}
          {tokens.map((line, i) => {
            return i + 1 === tokens.length &&
              line.length === 1 &&
              line[0].empty ? null : (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

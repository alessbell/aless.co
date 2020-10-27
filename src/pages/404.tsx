import React from 'react';

const NotFoundPage = (): JSX.Element => (
  <>
    <h2>Not found :(</h2>
    <p>
      Oops, there{`'`}s nothing here... head back to the{' '}
      <a href="/">blog index</a> and try again.
    </p>
  </>
);

export default NotFoundPage;

import * as React from 'react';
import Layout from '../components/layout';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <h2>Not found :(</h2>
    <p>
      Oops, there{`'`}s nothing here... head back to the{' '}
      <a href="/">blog index</a> and try again.
    </p>
  </Layout>
);

export default NotFoundPage;

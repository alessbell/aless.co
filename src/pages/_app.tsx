import React from 'react';
import { AppProps } from 'next/app';
import { QueryParamProviderComponent } from '../components/QueryParamProvider';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <QueryParamProviderComponent>
      <Component {...pageProps} />
    </QueryParamProviderComponent>
  );
};

export default App;

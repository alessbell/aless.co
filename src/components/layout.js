import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LeftBar, RightBar, TopBar, BottomBar } from './styles';

import '../css/font-face.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="alessia bellisario"
      meta={[
        {
          name: 'description',
          content:
            'alessia bellisario is a programmer working on the web in new york city',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <TopBar />
    <BottomBar />
    <LeftBar />
    <RightBar />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;

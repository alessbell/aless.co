import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../layouts/font-face.css';
import '../layouts/index.css';

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
    <div id="top" />
    <div id="bottom" />
    <div id="left" />
    <div id="right" />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;

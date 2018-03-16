import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './font-face.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="alessia bellisario"
      meta={[
        { name: 'description', content: 'alessia bellisario is a programmer working on the web in new york city' },
      ]}
    />
    <div id="left"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="bottom"></div>
    <div
      style={{
        fontFamily: 'GT Pressura Mono Regular',
        margin: '0 auto',
        maxWidth: 500,
        paddingTop: 0,
        display: 'grid',
        gridTemplateRows: '100vh',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

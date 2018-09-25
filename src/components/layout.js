import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion';

import '../layouts/font-face.css'
import '../layouts/index.css'

const BaseBorder = styled.div`
  background: red;
  position: fixed;
  z-index: 101;
`;

const LeftRightSide = styled(BaseBorder)`
  left: 0;
  right: 0;
  width: 3px;
`;
const TopBottomSide = styled(BaseBorder)`
  top: 0;
  bottom: 0;
  width: 3px;
`;

const Left = styled(LeftRightSide)`
  left: 0;
`;
const Right = styled(LeftRightSide)`
  right: 0'
`;

const Top = styled(TopBottomSide)`
  top: 0;
`;
const Bottom = styled(TopBottomSide)`
  top: 0;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="alessia bellisario"
      meta={[
        {
          name: 'description',
          content: 'alessia bellisario is a programmer working on the web in new york city'
        }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Left />
    <Right />
    <Top />
    <Bottom />
    {children}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper

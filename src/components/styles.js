import styled from '@emotion/styled';

const BORDER_WIDTH = '3px';
const BORDER_COLOR = 'red';

const BaseBar = styled.div`
  background: ${BORDER_COLOR};
  position: fixed;
  z-index: 101;
`;
const LRSides = styled(BaseBar)`
  top: 0;
  bottom: 0;
  width: ${BORDER_WIDTH};
`;
const TBSides = styled(BaseBar)`
  left: 0;
  right: 0;
  height: ${BORDER_WIDTH};
`;
const LeftBar = styled(LRSides)`
  left: 0;
`;
const RightBar = styled(LRSides)`
  right: 0;
`;
const TopBar = styled(TBSides)`
  top: 0;
`;
const BottomBar = styled(TBSides)`
  bottom: 0;
`;

const Linx = styled.a`
  margin: 1rem;
  color: blue;
  &:hover {
    color: black;
    background-color: yellow;
  }
`;
const CenteredText = styled.div`
  text-align: center;
`;
const Wrapper = styled.div`
  font-family: 'GT Pressura Mono Regular';
  margin: 0 auto;
  padding-top: 0;
  display: grid;
  grid-template-rows: 100vh;
  max-width: ${props => props.maxWidth};
`;
const BlinkyText = styled.div`
  z-index: 100;
  position: relative;
  mix-blend-mode: screen;
  background-color: white;
  line-height: 4rem;
  text-align: center;
  font-size: ${props => `${props.fontSize}rem`};
  min-height: ${props => `${props.minHeight}rem`};
  margin-top: ${props => `${props.marginTop}rem`};
  width: ${props => `${props.width}`};
  margin-bottom: 2.5rem;
`;
const Container = styled.main`
  position: relative;
  margin: auto;
`;

export {
  BlinkyText,
  CenteredText,
  Container,
  Linx,
  Wrapper,
  LeftBar,
  RightBar,
  TopBar,
  BottomBar,
};

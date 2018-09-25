import styled from 'react-emotion';

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
const BlinkyText = styled.p`
  z-index: 100;
  position: relative;
  mix-blend-mode: screen;
  background-color: white;
  line-height: 4rem;
  text-align: center;
  font-size: ${props => `${props.fontSize}rem`};
  min-height: ${props => `${props.minHeight}rem`};
  min-width: ${props => `${props.minWidth}rem`};
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
};

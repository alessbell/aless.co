import styled from '@emotion/styled';
import { Link as BaseLink } from 'gatsby';

const BORDER_WIDTH = '6px';
export const BORDER_COLOR = '#ff2121';

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
export const LeftBar = styled(LRSides)`
  left: 0;
`;
export const RightBar = styled(LRSides)`
  right: 0;
`;
export const TopBar = styled(TBSides)`
  top: 0;
`;
export const BottomBar = styled(TBSides)`
  bottom: 0;
`;
export const Space = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: ${({ color }) => color || 'black'};
`;
export const FooterWrapper = styled.footer`
  display: block;
  padding: 0;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
  }
`;
export const H1 = styled.h1`
  font-size: 38px;
  margin-bottom: 0.2rem;
  position: relative;
  z-index: 100;
  mix-blend-mode: screen;
  background-color: white;
  color: black;
  a {
    &:hover {
      background-color: white;
    }
  }
`;
export const Link = styled(BaseLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;
export const BlogLink = styled(BaseLink)`
  line-height: 1.85rem;
`;

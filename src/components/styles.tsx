import styled from '@emotion/styled';
import { Link as BaseLink } from 'gatsby';

const BORDER_WIDTH = '5px';
export const BORDER_COLOR = '#FE4450';

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
  margin-bottom: 1rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
  }
`;
export const H1 = styled.h1`
  font-size: 38px;
  position: relative;
  z-index: 1;
  width: 400px;
  mix-blend-mode: var(--mixBlendMode);
  background-color: var(--bg);
  color: var(--headerText);
`;
export const Link = styled(BaseLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;
export const BlogLink = styled(BaseLink)`
  line-height: 1.85rem;
`;
export const Tag = styled.code<{ active?: boolean; link?: boolean }>`
  background-color: ${({ active }) =>
    active ? 'var(--activeTagBg)' : 'var(--inactiveTagBg)'};
  font-size: 0.8rem;
  height: fit-content;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: initial;
  white-space: nowrap;

  box-shadow: ${({ active }) => active && '0px 0px 1px 1px #FF7EDB'};
  color: ${({ active }) => (active ? 'var(--activeTagText)' : 'var(--blue)')};

  @media (hover: hover) {
    transition: background-color 200ms;
    &:hover {
      background-color: ${({ link }) =>
        link ? 'var(--activeTagBg)' : 'var(--inactiveTagBg)'};
    }

    a:hover {
      background-color: initial;
    }
  }

  a {
    text-decoration: none;
    color: ${({ active }) => (active ? 'var(--activeTagText)' : 'var(--blue)')};
  }
`;

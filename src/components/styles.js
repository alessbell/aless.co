import styled from '@emotion/styled';

const BORDER_WIDTH = '4px';
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

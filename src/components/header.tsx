import React from 'react';
import styled from 'styled-components';
import { Surface } from 'gl-react-dom';
import Shaders from './shaders';

const shaders = Object.values(Shaders).map((S, idx) => <S key={idx} />);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  mix-blend-mode: var(--mixBlendMode2);
`;

const InnerWrapper = styled.span`
  position: absolute;
  top: 0;
  mix-blend-mode: var(--mixBlendMode2);
`;

const Header = (): JSX.Element => {
  return (
    <Wrapper data-testid="header">
      <InnerWrapper>
        <Surface width={250} height={47}>
          {shaders[0]}
        </Surface>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

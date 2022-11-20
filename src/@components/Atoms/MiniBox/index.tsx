import React, { CSSProperties } from 'react';
import * as Styled from './index.styles';

interface Props {
  headerChildren: JSX.Element;
  contentChildren: JSX.Element;
  style?: CSSProperties;
}

const MiniBox = ({ headerChildren, contentChildren, style }: Props) => {
  return (
    <>
      <Styled.Container style={style}>
        <Styled.HeaderContainer>{headerChildren}</Styled.HeaderContainer>
        <Styled.ContentContainer>{contentChildren}</Styled.ContentContainer>
      </Styled.Container>
    </>
  );
};

export default MiniBox;

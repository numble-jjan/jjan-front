import React, { CSSProperties } from 'react';
import * as Styled from './index.styles';

interface Props {
  firstChildren: JSX.Element;
  secondChildren: JSX.Element;
  thirdChildren: JSX.Element;
  style?: CSSProperties;
}

const GuideSection = ({
  firstChildren,
  secondChildren,
  thirdChildren,
  style,
}: Props) => {
  return (
    <>
      <Styled.Container style={style}>
        <Styled.FirstContainer>{firstChildren}</Styled.FirstContainer>
        <Styled.SecondContainer>{secondChildren}</Styled.SecondContainer>
        <Styled.ThirdContainer>{thirdChildren}</Styled.ThirdContainer>
      </Styled.Container>
    </>
  );
};

export default GuideSection;

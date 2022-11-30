import React from 'react';
import usePrevious from '@/@hooks/usePrevious';
import { Image } from '@/@components';
import * as Styled from '../index.styles';

const Previous = () => {
  const { goPrevious } = usePrevious();
  return (
    <Styled.IconWrapper onClick={goPrevious}>
      <Image src="icons/icon-prev.svg" alt="이전으로 가기"></Image>
    </Styled.IconWrapper>
  );
};
export default Previous;

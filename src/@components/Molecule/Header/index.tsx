import React from 'react';
import useGoPrev from '@/@hooks/useGoPrev';

import * as Styled from './index.styles';
import { Typography } from '@/@components';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { goPrev } = useGoPrev();

  return (
    <Styled.Container>
      <Styled.IconWrapper onClick={goPrev}>
        <img src="icons/icon-prev.svg" alt="이전으로 가기" />
      </Styled.IconWrapper>
      <Typography fontSize={18}>{title}</Typography>
    </Styled.Container>
  );
};

export default Header;

import React from 'react';

import * as Styled from './index.styles';
import { Typography, Divider } from '@/@components';

import useGoPrev from '@/@hooks/useGoPrev';
import { color } from '@/styles/theme';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { goPrev } = useGoPrev();

  return (
    <>
      <Styled.Container>
        <Styled.IconWrapper onClick={goPrev}>
          <img src="icons/icon-prev.svg" alt="이전으로 가기" />
        </Styled.IconWrapper>
        <Typography fontSize={18}>{title}</Typography>
      </Styled.Container>
      <Divider color={color.light_gray2} />
    </>
  );
};

export default Header;

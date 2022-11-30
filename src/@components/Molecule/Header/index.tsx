import React from 'react';

import { Typography, Divider } from '@/@components';
import Container from './Container';
import Title from './Title';
import Previous from './Previous';
import Options from './Options';

import usePrevious from '@/@hooks/usePrevious';

import * as Styled from './index.styles';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { goPrevious } = usePrevious();

  return (
    <Styled.Container>
      <Styled.IconWrapper onClick={goPrevious}>
        <img src="icons/icon-prev.svg" alt="이전으로 가기" />
      </Styled.IconWrapper>
      <Typography fontSize={18}>{title}</Typography>
    </Styled.Container>
  );
};

export default Header;

export const HeaderCompound = Object.assign(Container, {
  Title,
  Divider,
  Previous,
  Options,
});

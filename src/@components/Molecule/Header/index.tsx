import React from 'react';

import * as Styled from './index.styles';
import Typography from '../../Atoms/Typography';

interface Props {
  onClickPrev: () => void;
  title: string;
}

const Header = ({ title, onClickPrev }: Props) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper onClick={onClickPrev}>
        <img src="icons/prev.svg" alt="이전으로 가기" />
      </Styled.IconWrapper>
      <Typography fontSize={18}>{title}</Typography>
    </Styled.Container>
  );
};

export default Header;

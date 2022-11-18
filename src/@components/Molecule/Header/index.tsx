import React from 'react';

import * as Styled from './index.styles';
import Typography from '../../Atoms/Typography';

interface Props {
  onClick: () => void;
  title: string;
}

const Header = ({ title, onClick }: Props) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper onClick={onClick}>
        <img src="icons/prev.svg" alt="이전으로 가기" />
      </Styled.IconWrapper>
      <Typography fontSize={18}>{title}</Typography>
    </Styled.Container>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

interface Props {
  onClickPrev: () => void;
  title: string;
}

const Header = ({ title, onClickPrev }: Props) => {
  return (
    <Container>
      <IconWrapper onClick={onClickPrev}>
        <img src="icons/prev.svg" alt="이전으로 가기" />
      </IconWrapper>
      <Typography fontSize={18}>{title}</Typography>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 9.6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;

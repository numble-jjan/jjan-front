import React from 'react';
import styled from 'styled-components';

import Typography from '../Typography';
import Button from '../Button';

import color from '@/styles/constants/color';

interface Props {
  message: string;
  onClickDisagree: () => void;
  onClickAgree: () => void;
}

const Modal = ({ message, onClickAgree, onClickDisagree }: Props) => {
  return (
    <Container>
      <Floating>
        <MessageBox>
          <Typography fontSize={14}>{message}</Typography>
        </MessageBox>
        <SelectionContainer>
          <Button
            backgroundColor={color.white}
            color={color.purple}
            onClick={onClickAgree}
          >
            예
          </Button>
          <Button
            backgroundColor={color.purple}
            color={color.white}
            onClick={onClickDisagree}
          >
            아니요
          </Button>
        </SelectionContainer>
      </Floating>
    </Container>
  );
};
export default Modal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const Floating = styled.div`
  width: 328px;
  height: 150px;
  background-color: white;
`;
const MessageBox = styled.div`
  width: 100%;
  height: 100px;
`;
const SelectionContainer = styled.div`
  width: 100%;
  height: 50px;
`;

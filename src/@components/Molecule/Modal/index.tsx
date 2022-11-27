import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from '@/@components';

import { btn1, btn3, color } from '@/styles/theme';

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
          <Button style={btn3} onClick={onClickAgree}>
            <Typography fontSize={14} color={color.purple}>
              예
            </Typography>
          </Button>
          <Button style={btn1} onClick={onClickDisagree}>
            <Typography fontSize={14} color={color.white}>
              아니요
            </Typography>
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
  padding: 16px;
  position: absolute;
`;
const Floating = styled.div`
  height: 150px;
  background-color: white;
  z-index: 20;
`;
const MessageBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SelectionContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  & div {
    width: 50%;
  }
`;

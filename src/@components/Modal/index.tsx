import React from 'react';
import styled from 'styled-components';

import Typography from '../Typography';

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
          <SelectionButton onClick={onClickAgree}>예</SelectionButton>
          <SelectionButton onClick={onClickDisagree}>아니요</SelectionButton>
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
const SelectionButton = styled.button`
  width: 50%;
  height: 100%;
`;

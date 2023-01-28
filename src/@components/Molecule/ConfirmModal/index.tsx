import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Typography, Backdrop, Button } from '@/@components';
import GridItem from '@/@components/Atoms/GridItems';

import { color } from '@/styles/theme';

interface Props {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancle: () => void;
}

const ConfirmModal = ({ isOpen, message, onConfirm, onCancle }: Props) => {
  const $backdrop = document.getElementById('backdrop') as HTMLElement;
  const $modal = document.getElementById('modal') as HTMLElement;

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, $backdrop)}
      {ReactDOM.createPortal(
        <Container>
          <Floating>
            <MessageBox>
              <Typography fontSize={14}>{message}</Typography>
            </MessageBox>
            <GridItem rows={2} gap={0}>
              <Button shape="whiteWithPurple" height="l" onClick={onConfirm}>
                <Typography fontSize={14} color={color.purple}>
                  예
                </Typography>
              </Button>
              <Button shape="purple" height="l" onClick={onCancle}>
                <Typography fontSize={14} color={color.white}>
                  아니요
                </Typography>
              </Button>
            </GridItem>
          </Floating>
        </Container>,
        $modal,
      )}
    </>
  );
};

export default ConfirmModal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 16px;
`;
const Floating = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  z-index: 20;
  margin-top: 75%;
`;
const MessageBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

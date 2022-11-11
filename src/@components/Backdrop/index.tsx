import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const Backdrop = ({ onClick }: Props) => {
  return <Background onClick={onClick}></Background>;
};

export default Backdrop;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

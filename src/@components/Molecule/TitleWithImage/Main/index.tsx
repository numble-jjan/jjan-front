import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Main = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

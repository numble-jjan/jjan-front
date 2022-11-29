import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Options = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 15px;
  & * {
    margin-left: 10px;
  }
`;
export default Options;

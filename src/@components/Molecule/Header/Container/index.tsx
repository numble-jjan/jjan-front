import React, { PropsWithChildren } from 'react';
import * as Styled from '../index.styles';

const Container = ({ children }: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};
export default Container;

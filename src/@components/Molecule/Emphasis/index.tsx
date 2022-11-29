import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { font, color } from '@/styles/theme';

const Emphasis = ({ children }: PropsWithChildren) => {
  return <Root>{children}</Root>;
};
export default Emphasis;

const Root = styled.span`
  color: ${color.purple};
  font-size: ${font.size.title};
  font-weight: ${font.weight.bold};
`;

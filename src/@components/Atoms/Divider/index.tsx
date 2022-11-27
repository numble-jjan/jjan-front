import React from 'react';
import * as Styled from './index.styles';

interface Props {
  color: string;
}
const Divider = ({ color }: Props) => {
  return <Styled.Root color={color} />;
};
export default Divider;

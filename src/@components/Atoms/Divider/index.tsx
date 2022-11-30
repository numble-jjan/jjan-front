import React, { CSSProperties } from 'react';
import * as Styled from './index.styles';

interface Props {
  color: string;
  style?: CSSProperties;
}
const Divider = ({ color, style }: Props) => {
  return <Styled.Root color={color} style={style} />;
};
export default Divider;

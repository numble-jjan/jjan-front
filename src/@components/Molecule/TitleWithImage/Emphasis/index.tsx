import React, { CSSProperties, PropsWithChildren } from 'react';
import { color, font } from '@/styles/theme';

const style: CSSProperties = {
  color: color.purple,
  fontWeight: font.weight.bold,
  fontSize: font.size.title,
};

const Emphasis = ({ children }: PropsWithChildren) => {
  return <span style={style}>{children}</span>;
};
export default Emphasis;

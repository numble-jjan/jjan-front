import React, { PropsWithChildren } from 'react';
import { Typography } from '@/@components';

interface Props extends PropsWithChildren {
  fontSize: string;
  fontWeight: string;
  color: string;
}

const Title = ({ children, fontSize, fontWeight, color }: Props) => {
  return (
    <Typography color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};
export default Title;

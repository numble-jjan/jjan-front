import React, { PropsWithChildren } from 'react';

import { Typography } from '@/@components';

import { font } from '@/styles/theme';

// fonts 10, 11, 12, 13, 14, 16
const { size, weight } = font;

interface Props extends PropsWithChildren {
  color?: string;
}

const Text8 = ({ color, children }: Props) => {
  return (
    <Typography color={color} fontSize={size.m} fontWeight={weight.bold}>
      {children}
    </Typography>
  );
};

export default Text8;

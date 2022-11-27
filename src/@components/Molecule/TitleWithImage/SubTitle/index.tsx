import React, { PropsWithChildren } from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';

const SubTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      color={color.gray}
      fontSize={font.size.s}
      fontWeight={font.weight.regular}
    >
      {children}
    </Typography>
  );
};
export default SubTitle;

import React, { PropsWithChildren } from 'react';
import { Typography } from '@/@components';
import { font, color } from '@/styles/theme';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      color={color.black}
      fontSize={font.size.title}
      fontWeight={font.weight.regular}
    >
      {children}
    </Typography>
  );
};
export default Title;

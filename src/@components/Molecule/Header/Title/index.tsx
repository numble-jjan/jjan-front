import React, { PropsWithChildren } from 'react';
import { Typography } from '@/@components';
import { font } from '@/styles/theme';

const Title = ({ children }: PropsWithChildren) => {
  return <Typography fontSize={font.size.header}>{children}</Typography>;
};
export default Title;

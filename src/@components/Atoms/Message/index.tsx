import React from 'react';

import * as Styled from './index.styles';
import { Typography } from '@/@components';

import { color } from '@/styles/theme';

interface Props {
  children: string;
}

const Lable = ({ children }: Props) => {
  return (
    <Styled.LableWrapper>
      <Typography
        fontSize={11}
        color={color.orange}
        style={{
          fontWeight: '400',
          letterSpacing: '-0.28px',
        }}
      >
        {children}
      </Typography>
    </Styled.LableWrapper>
  );
};

export default Lable;

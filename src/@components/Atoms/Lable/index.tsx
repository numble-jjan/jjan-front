import React from 'react';

import * as Styled from './index.styles';
import { Typography } from '@/@components';

import { color, font } from '@/styles/theme';

interface Props {
  children: string;
}

const Lable = ({ children }: Props) => {
  return (
    <Styled.LableWrapper>
      <Typography
        color={color.black}
        fontSize={font.size.m}
        fontWeight={font.weight.medium}
        style={{
          letterSpacing: '-0.4px',
        }}
      >
        {children}
      </Typography>
    </Styled.LableWrapper>
  );
};

export default Lable;

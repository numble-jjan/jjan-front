import React from 'react';

import * as Styled from './index.styles';
import { Typography } from '@/@components';

interface Props {
  children: string;
}

const Lable = ({ children }: Props) => {
  return (
    <Styled.LableWrapper>
      <Typography
        fontSize={13}
        style={{
          fontWeight: '400',
          lineHeight: '19px',
          letterSpacing: '-0.4px',
        }}
      >
        {children}
      </Typography>
    </Styled.LableWrapper>
  );
};

export default Lable;

import React from 'react';

import * as Styled from './index.styles';
import { Typography } from '@/@components';

import { font } from '@/styles/theme';

interface Props {
  children: string;
  color: string;
}

const Message = ({ children, color }: Props) => {
  return (
    <Styled.MessageWrapper>
      <Typography
        color={color}
        fontSize={font.size.s}
        fontWeight={font.weight.medium}
        style={{
          letterSpacing: '-0.28px',
        }}
      >
        {children}
      </Typography>
    </Styled.MessageWrapper>
  );
};

export default Message;

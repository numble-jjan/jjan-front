import React from 'react';
import { PropsWithChildren } from 'react';

import { Typography, Divider } from '@/@components';

import { color } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props extends PropsWithChildren {
  essential: boolean;
}

const TitleBar = ({ essential, children }: Props) => {
  return (
    // 16 500
    <>
      <Styled.Container>
        <Typography color={color.black}>{children}</Typography>
        {essential && (
          // 12 500
          <Styled.RequiredWrapper>
            <Typography color={color.purple}>*</Typography>
            <Typography color={color.black}>필수사항</Typography>
          </Styled.RequiredWrapper>
        )}
      </Styled.Container>
      <Divider color={color.black} />
    </>
  );
};

export default TitleBar;

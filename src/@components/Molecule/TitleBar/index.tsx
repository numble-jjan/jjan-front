import React from 'react';
import { PropsWithChildren } from 'react';

import { Typography, Divider } from '@/@components';

import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props extends PropsWithChildren {
  essential: boolean;
}

const TitleBar = ({ essential, children }: Props) => {
  return (
    <>
      <Styled.Container>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.medium}
        >
          {children}
        </Typography>
        {essential && (
          <Styled.RequiredWrapper>
            <Typography
              color={color.purple}
              fontSize={font.size.s}
              fontWeight={font.weight.medium}
            >
              *
            </Typography>
            <Typography
              color={color.black}
              fontSize={font.size.s}
              fontWeight={font.weight.medium}
            >
              필수사항
            </Typography>
          </Styled.RequiredWrapper>
        )}
      </Styled.Container>
      <Divider color={color.black} />
    </>
  );
};

export default TitleBar;

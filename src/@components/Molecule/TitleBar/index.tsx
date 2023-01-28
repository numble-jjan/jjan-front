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
    <div>
      <Styled.Container>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.regular}
        >
          {children}
        </Typography>
        {essential && (
          <Styled.RequiredWrapper>
            <Typography
              color={color.purple}
              fontSize={font.size.s}
              fontWeight={font.weight.regular}
            >
              *
            </Typography>
            <Typography
              color={color.black}
              fontSize={font.size.s}
              fontWeight={font.weight.regular}
            >
              필수사항
            </Typography>
          </Styled.RequiredWrapper>
        )}
      </Styled.Container>
      <Divider color={color.black} />
    </div>
  );
};

export default TitleBar;

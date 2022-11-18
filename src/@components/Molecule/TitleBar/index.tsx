import React from 'react';
import { PropsWithChildren } from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props extends PropsWithChildren {
  type?: 'default' | 'essential';
}

const TitleBar = ({ type, children }: Props) => {
  return type === 'essential' ? (
    <Styled.Root>
      <Styled.Title>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.medium}
        >
          {children}
        </Typography>
      </Styled.Title>
      <Styled.Essential>
        <Typography
          color={color.black}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          필수사항
        </Typography>
      </Styled.Essential>
      <Styled.Essential>
        <Typography
          color={color.purple}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          *
        </Typography>
      </Styled.Essential>
    </Styled.Root>
  ) : (
    <Styled.Root>
      <Styled.Title>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.medium}
        >
          {children}
        </Typography>
      </Styled.Title>
    </Styled.Root>
  );
};

export default TitleBar;

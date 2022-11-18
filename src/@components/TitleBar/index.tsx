import React from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Typography } from '@/@components';
import color from '@/styles/constants/color';
import { font } from '@/styles/constants/theme';

interface Props extends PropsWithChildren {
  type?: 'default' | 'essential';
}

const Root = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const Title = styled.div`
  display: inline-block;
`;

const Essential = styled.div`
  margin-top: 2px;
  display: inline-block;
  float: right;
`;

const TitleBar = ({ type, children }: Props) => {
  return type === 'essential' ? (
    <Root>
      <Title>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.medium}
        >
          {children}
        </Typography>
      </Title>
      <Essential>
        <Typography
          color={color.black}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          필수사항
        </Typography>
      </Essential>
      <Essential>
        <Typography
          color={color.purple}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          *
        </Typography>
      </Essential>
    </Root>
  ) : (
    <Root>
      <Title>
        <Typography
          color={color.black}
          fontSize={font.size.title}
          fontWeight={font.weight.medium}
        >
          {children}
        </Typography>
      </Title>
    </Root>
  );
};

export default TitleBar;

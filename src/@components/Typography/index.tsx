import React from 'react';
import { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Root = styled.div<Props>`
  ${props => `color: ${props.color};`}
  ${props => `font-size: ${props.fontSize}px;`} 
  ${props => `font-weight: ${props.fontWeight};`}
`;

const Typography = ({
  color,
  fontSize,
  fontWeight,
  style,
  onClick,
  children,
}: Props) => {
  return (
    <Root
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      style={style}
      onClick={onClick}
    >
      {children}
    </Root>
  );
};

export default Typography;

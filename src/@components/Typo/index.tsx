import React from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  fontSize: number;
  children: any;
  style?: any;
  onClick?: () => void;
};

type RootProps = {
  color?: string;
  fontSize: number;
};

const Root = styled.div<RootProps>`
  ${props => `color: ${props.color};`}
  ${props => `font-size: ${props.fontSize}rem;`}
`;

const Typo: React.FC<Props> = ({
  color,
  fontSize,
  children,
  style,
  onClick,
}) => {
  return (
    <Root color={color} fontSize={fontSize} style={style} onClick={onClick}>
      {children}
    </Root>
  );
};

export default Typo;

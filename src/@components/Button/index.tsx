import React from 'react';
import styled from 'styled-components';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  children: any;
  onClick?: () => void;
  style?: any;
  fontSize?: number;
  fontWeight?: string;
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  fontWeight?: string;
};

const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => `width: ${props.width}px;`}
  ${props => `height: ${props.height}px;`}
  ${props => `border-radius: ${props.borderRadius}rem;`}
  ${props => `background-color: ${props.backgroundColor};`}
  ${props => `color: ${props.color};`}
  ${props => `border-color: ${props.borderColor};`}  
  ${props => `font-size: ${props.fontSize}px;`}
  ${props => `font-weight: ${props.fontWeight};`}
  cursor: pointer;
`;

const Button: React.FC<Props> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  color,
  borderColor,
  onClick,
  children,
  style,
  fontSize,
  fontWeight,
}) => {
  return (
    <>
      <Root
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={onClick}
        style={style}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Root>
    </>
  );
};

export default Button;
export { Root as StyledButton };

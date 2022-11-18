import styled from 'styled-components';

type RootProps = {
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
};

export const Root = styled.div<RootProps>`
  ${props => `color: ${props.color};`}
  ${props => `font-size: ${props.fontSize};`} 
  ${props => `font-weight: ${props.fontWeight};`}
`;

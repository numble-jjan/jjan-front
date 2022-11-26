import styled from 'styled-components';

type RootProps = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export const Root = styled.div<RootProps>`
  ${props => `top: ${props.top}px;`}
  ${props => `bottom: ${props.bottom}px;`} 
  ${props => `left: ${props.left}px;`} 
  ${props => `right: ${props.right}px;`} 
  position: fixed;
`;

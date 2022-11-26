import styled from 'styled-components';

type RootProps = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export const Root = styled.div<RootProps>`
  ${props => `top: ${props.top};`}
  ${props => `bottom: ${props.bottom};`} 
  ${props => `left: ${props.left};`} 
  ${props => `right: ${props.right};`} 
  position: fixed;
`;

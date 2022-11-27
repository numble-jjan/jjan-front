import styled from 'styled-components';

interface RootProps {
  color: string;
}
export const Root = styled.div<RootProps>`
  height: 1px;
  width: 100%;
  background-color: ${({ color }) => color};
`;

import styled from 'styled-components';

import { color } from '@/styles/theme';

export const InputWrapper = styled.div<{ isValid?: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${color.white};
  border: 1px solid
    ${props => (props.isValid ? color.light_gray1 : color.orange)};
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
`;

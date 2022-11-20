import styled from 'styled-components';

import { color } from '@/styles/theme';

export const Container = styled.div`
  height: 40px;
  border-bottom: 1px solid ${color.light_gray1};
  padding: 12px 8px;

  display: flex;
  justify-content: space-between;

  & svg {
    margin-left: 8px;
  }
`;

import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 121px;
  background: ${color.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;
export const SubContainer = styled.div`
  transform: translate(0, 70%);
`;

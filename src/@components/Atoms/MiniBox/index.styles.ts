import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 140px;
  background: ${color.white};
  border: 1px solid ${color.light_gray1};
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 43px;
  border-bottom: 1px solid ${color.light_gray1};
`;

export const ContentContainer = styled.div`
  height: 96px;
`;

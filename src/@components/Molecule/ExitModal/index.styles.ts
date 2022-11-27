import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
`;
export const MessageBox = styled.div`
  height: 50px;
  background-color: ${color.purple};
  text-align: center;
  border-radius: 25px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoutWrapper = styled.div`
  width: 194px;
`;
export const WithdrawWrapper = styled.div`
  width: 222px;
`;

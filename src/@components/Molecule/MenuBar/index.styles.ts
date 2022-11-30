import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Root = styled.div`
  width: 100%;
  height: 70px;
`;

export const CommunityIconWrapper = styled.div`
  width: 74.86px;
  height: 70px;
  text-align: center;
  position: absolute;
  display: inline-block;
  background: linear-gradient(135deg, ${color.purple} 0%, #925ce9 100%);
  box-shadow: -9px 4px 20px rgba(146, 92, 233, 0.3);
  img {
    width: 29.33px;
    height: 16.67px;
    margin-top: 18.67px;
    margin-bottom: 8.67px;
  }
`;

export const IconsContainer = styled.div`
  width: 245px;
  height: 60px;
  margin-top: 10px;
  background: ${color.white};
  border-top: 1px solid ${color.light_gray2};
  display: inline-block;
`;

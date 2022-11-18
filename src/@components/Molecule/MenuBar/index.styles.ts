import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Root = styled.div`
  width: 100%;
  height: 70px;
`;

export const CommunityIconWrapper = styled.div`
  width: 74.86px;
  height: 68px;
  text-align: center;
  position: absolute;
  display: inline-block;
  background: linear-gradient(135deg, ${color.purple} 0%, #925ce9 100%);
  box-shadow: -9px 4px 20px rgba(146, 92, 233, 0.3);
  img {
    margin-top: 18.67px;
    margin-bottom: 8.67px;
  }
`;

export const IconsContainer = styled.div`
  width: 245px;
  height: 60px;
  margin-top: 7px;
  background: ${color.white};
  border-top: 1px solid ${color.light_gray2};
  display: inline-block;
`;

export const IconContainer = styled.div`
  width: 25%;
  height: 60px;
  float: left;
  text-align: center;
  img {
    margin-top: 12px;
    margin-bottom: 6px;
  }
`;

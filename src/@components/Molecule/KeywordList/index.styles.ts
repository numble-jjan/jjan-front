import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 470px;
  padding-top: 18px;
  background: rgba(104, 60, 237, 0.1);
`;
export const SubContainer = styled.div`
  height: 368px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    height: 50%;
    border-radius: 3px;
    background-color: ${color.light_gray4};
  }
`;
export const ListContainer = styled.div`
  padding: 0px 16px;
`;
export const ItemWrapper = styled.div`
  width: 49%;
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 2px;
  &.keyword: nth-child(odd) {
    margin-right: 4px;
  }
`;
export const ButtonWrapper = styled.div`
  padding: 16px;
`;

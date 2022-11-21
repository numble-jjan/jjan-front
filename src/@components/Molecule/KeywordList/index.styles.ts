import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70%;
  background: rgba(104, 60, 237, 0.1);
`;
export const SubContainer = styled.div`
  padding: 20px 16px 16px;
`;
export const ButtonWrapper = styled.div`
  width: 49%;
  display: inline-block;
  margin-bottom: 4px;
  &.keyword: nth-child(odd) {
    margin-right: 4px;
  }
`;

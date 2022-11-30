import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 11px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LikeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
`;
export const TypographyWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 18.82px;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px 15px 12px 15px;
  display: flex;
  justify-content: flex-first;
  align-items: center;
`;
export const LocationWrapper = styled.div`
  margin-left: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 12px 11px 0px 11px;
`;
export const TypographyWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 18.82px;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

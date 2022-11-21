import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 11px 13px 13px 12.82px;
  img {
    float: left;
    margin-top: 1px;
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
`;
export const TypographyWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 18.82px;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

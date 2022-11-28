import styled from 'styled-components';
import { color } from '@/styles/theme';

export const Root = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 131px;
  background: ${color.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;
export const ImageWrapper = styled.div`
  float: right;
`;
export const TypographyWrapper = styled.div`
  display: inline-block;
`;
export const Container = styled.div`
  width: 100%;
`;
export const TagContainer = styled.div`
  width: 100%;
  margin-top: 2px;
`;
export const MoodContainer = styled.div`
  margin-top: 13px;
`;
export const KeywordContainer = styled.div`
  margin-top: 26px;
`;

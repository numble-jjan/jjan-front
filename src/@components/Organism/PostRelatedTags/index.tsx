import React from 'react';
import styled from 'styled-components';
import { Typography, SearchInput, Badge } from '@/@components';
import { badge } from '@/styles/theme';

interface Tag {
  id: number;
  text: string;
}
type Tags = Tag[];

interface Props {
  tags: Tags;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PostRelatedTags = ({ tags, handleEnter }: Props) => {
  return (
    <Container>
      <Typography>연관 태그 입력</Typography>
      <SearchInput type="text" onKeyDown={handleEnter} />
      <BadgeContainer>
        {tags.map(({ id, text }) => (
          <Badge key={id} style={badge.gray}>
            #{text}
          </Badge>
        ))}
      </BadgeContainer>
    </Container>
  );
};
export default PostRelatedTags;

const Container = styled.div`
  margin-bottom: 1rem;
`;
const BadgeContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-right: 10px;
  }
`;

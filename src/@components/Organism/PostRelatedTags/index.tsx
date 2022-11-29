import React from 'react';
import styled from 'styled-components';
import { Typography, SearchInput, TagChip } from '@/@components';

interface Tag {
  id: number;
  text: string;
}
type Tags = Tag[];

interface Props {
  tags: Tags;
  onKeyDownEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  createDeleteHandler: (id: number) => () => void;
}

const PostRelatedTags = ({
  tags,
  onKeyDownEnter,
  createDeleteHandler,
}: Props) => {
  return (
    <Container>
      <Typography>연관 태그 입력</Typography>
      <SearchInput type="text" onKeyDown={onKeyDownEnter} />
      <BadgeContainer>
        {tags.map(({ id, text }) => (
          <TagChip
            key={id}
            text={text}
            expanded={true}
            onClickDelete={createDeleteHandler(id)}
          />
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
    margin-right: 7px;
    margin-bottom: 8px;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Header,
  PostImageUploader,
  PostRelatedTags,
  PostTextarea,
  Typography,
} from '@/@components';
import { btn1, color, font } from '@/styles/theme';

export interface Tag {
  id: number;
  text: string;
}
export type Tags = Tag[];

let id = 0;

const WritePost = () => {
  const [tags, setTags] = useState<Tags>([]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (tags.length >= 5) return;
    if (e.nativeEvent.isComposing) return;

    const newTag = e.currentTarget.value;
    setTags(prevTags => [...prevTags, { id: id++, text: newTag }]);
  };

  return (
    <Container>
      <Header title="글쓰기" />
      <Content>
        <PostTextarea />
        <PostImageUploader />
        <PostRelatedTags tags={tags} handleEnter={handleEnter} />
        <Button style={btn1}>
          <Typography
            color={color.white}
            fontSize={font.size.content}
            fontWeight={font.weight.bold}
          >
            등록하기
          </Typography>
        </Button>
      </Content>
    </Container>
  );
};
export default WritePost;

const Container = styled.div``;
const Content = styled.div`
  padding: 16px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Header,
  PostImageUploader,
  PostRelatedTags,
  PostTextarea,
} from '@/@components';
import SubmitButton from './SubmitButton';

export interface Tag {
  id: number;
  text: string;
}
export type Tags = Tag[];

/**
 * todo
 * - id는 다른 방식으로 수정하도록 변경
 * - text의 limit값은 별도의 상수로 빼놓기
 */
let id = 0;

const WritePost = () => {
  const [tags, setTags] = useState<Tags>([]);
  const [text, setText] = useState('');

  const handleEnterTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (tags.length >= 5) return;
    if (e.nativeEvent.isComposing) return;

    const newTag = e.currentTarget.value;
    setTags(prevTags => [...prevTags, { id: id++, text: newTag }]);
    e.currentTarget.value = '';
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > 2000) return;
    setText(e.currentTarget.value);
  };
  const handleClickSubmit = () => {};

  const createDeleteHandler = (id: number) => () => {
    const newTags = tags.filter(tag => tag.id !== id);
    setTags(newTags);
  };

  return (
    <Container>
      <Header title="글쓰기" />
      <Content>
        <PostTextarea onChange={handleChangeText} textLength={text.length} />
        <PostImageUploader />
        <PostRelatedTags
          tags={tags}
          onKeyDownEnter={handleEnterTag}
          createDeleteHandler={createDeleteHandler}
        />
        <SubmitButton onClick={handleClickSubmit} />
      </Content>
    </Container>
  );
};
export default WritePost;

const Container = styled.div``;
const Content = styled.div`
  padding: 16px;
  & > div:nth-child(2) {
    margin-top: 20px;
  }
  & > div:nth-child(3) {
    margin-top: 20px;
  }
  & > button {
    margin-top: 68px;
  }
`;

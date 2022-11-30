import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CommentSvg } from '@/assets/Icons/comment.svg';
import { Typography } from '@/@components';

interface Props {
  commentsCount: number;
}

const CommentsInfo = ({ commentsCount }: Props) => {
  return (
    <Container style={{ marginRight: '15px' }}>
      <CommentSvg />
      <Typography style={{ marginLeft: '7px' }}>댓글</Typography>
      <Typography>{commentsCount}</Typography>
    </Container>
  );
};

export default CommentsInfo;

const Container = styled.div`
  display: flex;
`;

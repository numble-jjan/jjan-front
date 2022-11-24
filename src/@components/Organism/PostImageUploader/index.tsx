import React from 'react';
import styled from 'styled-components';

import { ImageUploader, Typography, UploadImageIcon } from '@/@components/';

const PostImageUploader = () => {
  return (
    <Container>
      <Typography>이미지 첨부(선택)</Typography>
      <ImageUploader ImageElement={<UploadImageIcon />} />
    </Container>
  );
};
export default PostImageUploader;

const Container = styled.div`
  & div:first-child {
  }
`;

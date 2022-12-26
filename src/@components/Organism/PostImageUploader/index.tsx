import React, { useState } from 'react';
import styled from 'styled-components';

import { ImageUploader, Typography, UploadImageIcon } from '@/@components/';

const DEFAULT_SRC = 'icons/icon-camera-gray.svg';

//TODO: 현재 PostimageUploader에서 정의된 state를 페이지 레벨로 옮겨야한다.

const PostImageUploader = () => {
  const [src, setSrc] = useState(DEFAULT_SRC);
  const [uploaded, setUploaded] = useState(false);

  const onChangeFile = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    // const files = e.currentTarget.files;
    const { files } = currentTarget;
    if (!files) return;

    const [file] = files;
    const newSrc = URL.createObjectURL(file);
    setSrc(newSrc);
    setUploaded(true);
  };
  const onClickDelete = () => {
    setSrc(DEFAULT_SRC);
    setUploaded(false);
  };

  return (
    <Container>
      <Typography>이미지 첨부(선택)</Typography>
      <ImageUploader
        onChangeFile={onChangeFile}
        uploaded={uploaded}
        ImageElement={
          <UploadImageIcon
            src={src}
            uploaded={uploaded}
            onClickDelete={onClickDelete}
          />
        }
      />
    </Container>
  );
};
export default PostImageUploader;

const Container = styled.div`
  & > form {
    margin-top: 15px;
  }
`;

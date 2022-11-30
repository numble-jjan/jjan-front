import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ImageElement: JSX.Element;
  uploaded?: boolean;
}

const ImageUploader = ({ ImageElement, onChangeFile, uploaded }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    if (uploaded) return;
    if (!hiddenFileInput.current) return;
    hiddenFileInput.current.click();
  };

  const Image = React.cloneElement(ImageElement, { onClick: onClickImage });

  return (
    <Container>
      {Image}
      <input type="file" ref={hiddenFileInput} onChange={onChangeFile} />
    </Container>
  );
};
export default ImageUploader;

const Container = styled.form`
  & input {
    display: none;
  }
`;

import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  ImageElement: JSX.Element;
}

const ImageUploader = ({ ImageElement }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    if (!hiddenFileInput.current) return;
    hiddenFileInput.current.click();
  };
  const Image = React.cloneElement(ImageElement, { onClick: onClickImage });

  return (
    <Container>
      {Image}
      <input type="file" ref={hiddenFileInput} />
    </Container>
  );
};
export default ImageUploader;

const Container = styled.form`
  & input {
    display: none;
  }
`;

import React, { useRef } from 'react';
import styled from 'styled-components';

type C =
  | React.ComponentPropsWithoutRef<'img'>
  | React.ComponentPropsWithRef<'svg'>;
interface Props {
  ImageElement: React.FunctionComponent<C>;
}
const ImageUploader = ({ ImageElement }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    if (!hiddenFileInput.current) return;
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <ImageElement onClick={onClickImage} />
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

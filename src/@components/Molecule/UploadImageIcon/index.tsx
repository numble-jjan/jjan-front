import React from 'react';
import styled from 'styled-components';
import { Image, CancelIcon } from '@/@components';
import { color } from '@/styles/theme';

interface Props {
  src: string;
  onClickDelete: () => void;
  uploaded: boolean;
}
const UploadImageIcon = ({ src, uploaded, onClickDelete, ...rest }: Props) => {
  return (
    <Container uploaded={uploaded} {...rest}>
      <Image src={src} alt="업로드된 이미지" />
      {uploaded && <CancelIcon onClickDelete={onClickDelete} />}
    </Container>
  );
};
export default UploadImageIcon;

interface ContainerProps {
  uploaded: boolean;
}
const Container = styled.div<ContainerProps>`
  position: relative;
  width: 74px;
  height: 74px;
  border: 1px solid ${color.light_gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  & > img:first-child {
    width: ${({ uploaded }) => (uploaded ? `100%` : `18px`)};
    height: ${({ uploaded }) => (uploaded ? `100%` : `14px`)};
    object-fit: ${({ uploaded }) => uploaded && `contain`};
  }
  & > img:nth-child(2) {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

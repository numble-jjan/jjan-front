import React from 'react';
import styled from 'styled-components';
import Image from '@/@components/Atoms/Image';
import { color } from '@/styles/theme';

interface Props {
  onClick?: () => void;
}
const UploadImageIcon = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Image src="icons/icon-camera-gray.svg" alt="카메라 아이콘" />
    </Container>
  );
};
export default UploadImageIcon;

const Container = styled.div`
  width: 74px;
  height: 74px;
  border: 1px solid ${color.light_gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

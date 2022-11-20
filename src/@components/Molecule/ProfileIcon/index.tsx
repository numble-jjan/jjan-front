import React, { useRef } from 'react';
import styled from 'styled-components';
import { color } from '@/styles/theme';

interface Props {
  extended?: boolean;
}
const ProfileIcon = ({ extended = false }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!hiddenFileInput.current) {
      return;
    }
    hiddenFileInput.current.click();
  };
  return (
    <IconContainer>
      <img
        src="icons/icon-profile-anonymous.svg"
        alt="프로필 사진"
        onClick={handleClick}
      />
      {extended && (
        <CameraCircle backgroundColor={color.purple}>
          <img src="icons/icon-camera.svg" alt="카메라 아이콘" />
        </CameraCircle>
      )}
      <input type="file" ref={hiddenFileInput} />
    </IconContainer>
  );
};

export default ProfileIcon;

interface CameraCircleProps {
  backgroundColor: string;
}

const IconContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  & input {
    display: none;
  }
`;

const CameraCircle = styled.div<CameraCircleProps>`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(50%);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

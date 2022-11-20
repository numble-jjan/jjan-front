import React from 'react';
import styled from 'styled-components';
import { color } from '@/styles/theme';

interface Props {
  extended?: boolean;
}
const ProfileIcon = ({ extended = false }: Props) => {
  return (
    <IconContainer>
      <img src="icons/icon-profile-anonymous.svg" alt="프로필 사진" />
      {extended && (
        <CameraCircle backgroundColor={color.purple}>
          <img src="icons/icon-camera.svg" alt="카메라" />
        </CameraCircle>
      )}
    </IconContainer>
  );
};

export default ProfileIcon;

interface CameraCircleProps {
  backgroundColor: string;
}

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
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

import React, { useRef } from 'react';
import styled from 'styled-components';

import Image from '@/@components/Atoms/Image';
import { img } from '@/styles/theme';

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
    <Container>
      <Image
        src="icons/icon-profile-anonymous.svg"
        alt="프로필 이미지"
        style={img.profileLarge}
        onClick={handleClick}
      />
      {extended && (
        <ProfileSatelliteWrapper>
          <Image
            src="icons/icon-camera.svg"
            alt="카메라 아이콘"
            style={img.smallCircle}
            onClick={handleClick}
          />
        </ProfileSatelliteWrapper>
      )}
      <input type="file" ref={hiddenFileInput} />
    </Container>
  );
};

export default ProfileIcon;

const Container = styled.form`
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

const ProfileSatelliteWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(50%);
`;

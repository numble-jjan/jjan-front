import React from 'react';
import styled from 'styled-components';

import { Header } from '@/@components';
import { Typography, Button, GuideTitle } from '@/@components';

import { btn2, btn4, color } from '@/styles/theme';

const ProfileSetting = () => {
  const onClickPrev = () => {
    //sample
  };

  const onClickSetLocation = () => {
    //sample
  };
  const onClickSetProfile = () => {
    //sample
  };
  return (
    <div>
      <Header onClickPrev={onClickPrev} title="프로필 설정" />
      <Content>
        <GuideTitle>내 주변 술친구를 마주할 프로필을 등록해주세요.</GuideTitle>
        <IconContainer>
          <img src="icons/icon-profile-anonymous.svg" alt="프로필 사진" />
          <CameraCircle backgroundColor={color.purple}>
            <img src="icons/icon-camera.svg" alt="카메라" />
          </CameraCircle>
        </IconContainer>
        {/** Input이 들어가는 자리 */}
        <ButtonContainer>
          <Button style={btn4} onClick={onClickSetLocation}>
            <Typography color={color.purple} fontSize={13}>
              활동지역 설정하기
            </Typography>
          </Button>
          <Button style={btn2} onClick={onClickSetProfile}>
            <Typography color={color.white} fontSize={13}>
              프로필 설정하기
            </Typography>
          </Button>
        </ButtonContainer>
      </Content>
    </div>
  );
};
export default ProfileSetting;

const Content = styled.div`
  padding: 16px;
`;
interface CameraCircleProps {
  backgroundColor: string;
}
const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
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
const ButtonContainer = styled.div`
  & > div:first-child {
    margin-bottom: 50px;
  }
`;

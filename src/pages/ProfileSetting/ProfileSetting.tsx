import React from 'react';
import styled from 'styled-components';

import Layout from '@/@components/Organism/Layout';
import { Typography, Button } from '@/@components';

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
    <Layout headerTitle="프로필 설정" onClickPrev={onClickPrev}>
      <Introduction color={color.purple}>
        <Typography fontSize={16}>
          내 주변 술친구를 마주할
          <br />
          <span>프로필을 등록</span>해주세요.
        </Typography>
      </Introduction>
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
    </Layout>
  );
};
export default ProfileSetting;

interface CameraCircleProps {
  backgroundColor: string;
}
interface IntroductionProps {
  color: string;
}

const Introduction = styled.p<IntroductionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  & span {
    color: ${({ color }) => color};
  }
`;
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

import React from 'react';
import styled from 'styled-components';

import { Header } from '@/@components';
import { Typography, Button, GuideTitle } from '@/@components';

import { btn2, btn4, color } from '@/styles/theme';
import ProfileIcon from '@/@components/Molecule/ProfileIcon';

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
        <ProfileIcon extended={true} />
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
const ButtonContainer = styled.div`
  & > div:first-child {
    margin-bottom: 50px;
  }
`;

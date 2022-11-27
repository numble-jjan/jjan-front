import React from 'react';
import styled from 'styled-components';

import { Typography, Button, Header } from '@/@components';
import Introduction from './Introduction';

import { btn2, btn4, color } from '@/styles/theme';

const ProfileSetting = () => {
  const onClickSetLocation = () => {
    //sample
  };
  const onClickSetProfile = () => {
    //sample
  };
  /**
   * todo
   * TitleWithImage를 통해서 GuideTitle을 삭제하도록 합니다.
   */
  return (
    <div>
      <Header title="프로필 설정" />
      <Content>
        <Introduction />
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

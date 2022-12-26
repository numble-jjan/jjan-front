import React from 'react';
import {
  Header,
  Content,
  TitleBar,
  Input,
  Button,
  Divider,
  Typography,
} from '@/@components';
import { color } from '@/styles/theme';
import GridItems from '@/@components/Atoms/GridItems';

const data = ['서울 마포구 공덕동', '서울 동대문구 신설동'];

const LocationSetting = () => {
  return (
    <>
      <Header title="활동지역 설정"></Header>
      <Divider color={color.light_gray2} />
      <Content>
        <TitleBar essential={false}>활동지역 설정</TitleBar>
        <Input shape="bottomLine" />
        {data.map(d => (
          <Typography key={d}>d</Typography>
        ))}
        <GridItems rows={2} gap={5}>
          <Button shape="whiteWithPurple" height="l">
            취소
          </Button>
          <Button shape="purple" height="l">
            설정하기
          </Button>
        </GridItems>
      </Content>
    </>
  );
};

export default LocationSetting;

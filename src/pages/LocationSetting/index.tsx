import React from 'react';
import styled from 'styled-components';

import {
  Header,
  TitleBar,
  Input,
  Button,
  Typography,
  Divider,
} from '@/@components';

import GridItems from '@/@components/Atoms/GridItems';
import { Flexbox } from '@/@components/Layout/Flexbox';

import { LOCATION } from '@/constants/icons';
import { color } from '@/styles/theme';

const data = [
  '서울 마포구 공덕동',
  '서울 동대문구 신설동',
  '서울 마포구 공덕동',
  '서울 동대문구 신설동',
  '서울 마포구 공덕동',
  '서울 동대문구 신설동',
];

const LocationSetting = () => {
  return (
    <Flexbox direction="column" style={{ height: '100vh' }}>
      <Header title="활동지역 설정"></Header>
      <Divider color={color.light_gray2} />
      <Flexbox
        padding={16}
        gap={32}
        direction="column"
        style={{ height: '50%', flexGrow: 1 }}
      >
        <TitleBar essential={false}>활동지역 설정</TitleBar>
        <Flexbox direction="row" gap={5}>
          <Input shape="bottomLine" right={LOCATION} />
          <Button height="m" shape="purple" width={94}>
            검색
          </Button>
        </Flexbox>
        <List>
          {data.map((d, idx) => (
            <Typography key={idx}>{d}</Typography>
          ))}
        </List>

        <GridItems rows={2} gap={5}>
          <Button shape="whiteWithPurple" height="l">
            취소
          </Button>
          <Button shape="purple" height="l">
            설정하기
          </Button>
        </GridItems>
      </Flexbox>
    </Flexbox>
  );
};

export default LocationSetting;

// const ButtonWrapper = styled.div`
//   position: absolute;
//   width: 100%;
//   padding: 16px;
//   bottom: 0;
//   display: flex;
//   flex-direction: column;
// `;

const List = styled.div`
  flex-grow: 10;

  & > div {
    padding-bottom: 12px;
  }
`;

// 현재로서의 방법
/**
 * 1. flex-grow를 이용해서 설정한다.
 * -> FlexBox 컴포넌트가 복잡해지는 문제가 있음
 * 2. absolute를 이용해서 설정한다.
 * -> List의 영역을 하드코딩으로 설정해야함
 */

import React from 'react';

import { Header, Typography, KeywordList } from '@/@components';

import { color, font } from '@/styles/theme';

import * as Styled from './index.styles';

interface List {
  id: number;
  keyword: string;
  isSelected: boolean;
}

const MoodKeywordSetting = () => {
  const mood: List[] = [
    {
      id: 1,
      keyword: '활기찬',
      isSelected: false,
    },
    {
      id: 2,
      keyword: '력셔리한',
      isSelected: false,
    },
    {
      id: 3,
      keyword: '감성적인',
      isSelected: false,
    },
    {
      id: 4,
      keyword: '시끄러운',
      isSelected: false,
    },
  ];
  return (
    <>
      <Header title={'키워드 설정'} />
      <Styled.Container>
        <img src="icons/icon-purple-heart.svg" />
        <Typography fontSize={font.size.title} fontWeight={font.weight.bold}>
          좋아하는 술자리 분위기를
        </Typography>
        <Typography fontSize={font.size.title} fontWeight={font.weight.bold}>
          알려주세요.
        </Typography>
        <Typography
          color={color.gray}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          JJAN이 매일 취향에 맞는
        </Typography>
        <Typography
          color={color.gray}
          fontSize={font.size.s}
          fontWeight={font.weight.medium}
        >
          오늘의 술을 추천드릴게요!
        </Typography>
      </Styled.Container>
      <KeywordList keywordList={mood} />
    </>
  );
};

export default MoodKeywordSetting;

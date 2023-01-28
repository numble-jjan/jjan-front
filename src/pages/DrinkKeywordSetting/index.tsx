import React from 'react';

import { Header, Typography, KeywordList } from '@/@components';

import { color, font } from '@/styles/theme';

import * as Styled from '@/pages/MoodKeywordSetting/index.styles';

interface List {
  id: number;
  keyword: string;
  isSelected: boolean;
}

const DrinkKeywordSetting = () => {
  const drink: List[] = [
    {
      id: 1,
      keyword: '진(Jin)',
      isSelected: false,
    },
    {
      id: 2,
      keyword: '와인(Wine)',
      isSelected: false,
    },
    {
      id: 3,
      keyword: '막걸리(Makgeolli)',
      isSelected: false,
    },
    {
      id: 4,
      keyword: '사케(Sake)',
      isSelected: false,
    },
  ];
  return (
    <>
      <Header title={'키워드 설정'} />
      <Styled.Container>
        <img src="icons/icon-purple-heart.svg" />
        <Typography fontSize={font.size.title} fontWeight={font.weight.bold}>
          좋아하는 술 종류를
        </Typography>
        <Typography fontSize={font.size.title} fontWeight={font.weight.bold}>
          알려주세요.
        </Typography>
        <Typography
          color={color.gray}
          fontSize={font.size.s}
          fontWeight={font.weight.regular}
        >
          JJAN이 매일 취향에 맞는
        </Typography>
        <Typography
          color={color.gray}
          fontSize={font.size.s}
          fontWeight={font.weight.regular}
        >
          오늘의 술을 추천드릴게요!
        </Typography>
      </Styled.Container>
      <KeywordList
        keywordList={drink}
        style={{ position: 'fixed', bottom: '0', left: '0' }}
      />
    </>
  );
};

export default DrinkKeywordSetting;

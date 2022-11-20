import React, { CSSProperties, useState } from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props {
  style?: CSSProperties;
}

/* 리코일 연결 후 불러오는 방식은 수정할 예정*/

const Card = ({ style }: Props) => {
  interface Drink {
    id: number;
    name: string;
  }
  interface Mood {
    id: number;
    name: string;
  }
  const [favoriteDrinkList, setFavoriteDrinkList] = useState<Drink[]>([
    {
      id: 0,
      name: '막걸리',
    },
    {
      id: 1,
      name: '샴페인',
    },
    {
      id: 2,
      name: '맥주',
    },
  ]);
  const [favoriteMoodList, setFavoriteMoodList] = useState<Mood[]>([
    {
      id: 0,
      name: '감성적인',
    },
    {
      id: 1,
      name: '조용한',
    },
  ]);
  const [isSetting, setIsSetting] = useState<boolean>(true);

  // assigned a value but never used 오류 방지용
  setFavoriteDrinkList;
  setFavoriteMoodList;
  setIsSetting;
  //

  return (
    <>
      <Styled.Root style={style}>
        {isSetting === true ? (
          <>
            <Styled.Container>
              <Styled.TypographyWrapper>
                <Typography
                  color={color.black}
                  fontSize={font.size.content}
                  fontWeight={font.weight.bold}
                >
                  좋아하는
                </Typography>
              </Styled.TypographyWrapper>
              <Styled.TypographyWrapper>
                <Typography
                  color={color.light_purple}
                  fontSize={font.size.content}
                  fontWeight={font.weight.bold}
                >
                  &nbsp;술&nbsp;
                </Typography>
              </Styled.TypographyWrapper>
              <Styled.TypographyWrapper>
                <Typography
                  color={color.black}
                  fontSize={font.size.content}
                  fontWeight={font.weight.bold}
                >
                  종류
                </Typography>
              </Styled.TypographyWrapper>
              <Styled.ImageWrapper>
                <img src="icons/icon-favorite-setting.svg" />
              </Styled.ImageWrapper>
            </Styled.Container>
            <Styled.TagContainer>
              {favoriteDrinkList &&
                favoriteDrinkList.map((drink: Drink) => {
                  return (
                    drink && (
                      <Typography
                        key={drink.id}
                        color={color.gray}
                        fontSize={font.size.s}
                        fontWeight={font.weight.regular}
                        style={{
                          lineHeight: '17px',
                          letterSpacing: '-0.3px',
                          display: 'inline-block',
                        }}
                      >
                        #{drink.name}&nbsp;
                      </Typography>
                    )
                  );
                })}
            </Styled.TagContainer>
            <Styled.MoodContainer>
              <Styled.Container>
                <Styled.TypographyWrapper>
                  <Typography
                    color={color.black}
                    fontSize={font.size.content}
                    fontWeight={font.weight.bold}
                  >
                    좋아하는&nbsp;
                  </Typography>
                </Styled.TypographyWrapper>
                <Styled.TypographyWrapper>
                  <Typography
                    color={color.light_purple}
                    fontSize={font.size.content}
                    fontWeight={font.weight.bold}
                  >
                    분위기
                  </Typography>
                </Styled.TypographyWrapper>
              </Styled.Container>
              <Styled.TagContainer>
                {favoriteMoodList &&
                  favoriteMoodList.map((mood: Mood) => {
                    return (
                      mood && (
                        <Typography
                          key={mood.id}
                          color={color.gray}
                          fontSize={font.size.s}
                          fontWeight={font.weight.regular}
                          style={{
                            lineHeight: '17px',
                            letterSpacing: '-0.3px',
                            display: 'inline-block',
                          }}
                        >
                          #{mood.name}&nbsp;
                        </Typography>
                      )
                    );
                  })}
              </Styled.TagContainer>
            </Styled.MoodContainer>
          </>
        ) : (
          <>
            <Styled.ImageWrapper>
              <img src="icons/icon-favorite-setting.svg" />
            </Styled.ImageWrapper>
            <Styled.KeywordContainer>
              <Typography
                color={color.black}
                fontSize={font.size.content}
                fontWeight={font.weight.bold}
              >
                나의 키워드
              </Typography>
              <Styled.TagContainer>
                <Typography
                  color={color.gray}
                  fontSize={font.size.s}
                  fontWeight={font.weight.regular}
                  style={{
                    lineHeight: '17px',
                    letterSpacing: '-0.3px',
                  }}
                >
                  술 친구에게 나를 표현해보세요.
                </Typography>
              </Styled.TagContainer>
            </Styled.KeywordContainer>
          </>
        )}
      </Styled.Root>
    </>
  );
};

export default Card;

import React, { CSSProperties, useState } from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface List {
  id: number;
  name: string;
}

interface Props {
  keywordList: List[];
  type: 'drink' | 'mood';
  personal: boolean;
  style?: CSSProperties;
}

const CardKeyword = ({ keywordList, type, personal, style }: Props) => {
  const [keyList, setKeyList] = useState<List[]>(keywordList);
  setKeyList;
  return (
    <Styled.Container style={style}>
      <Styled.subContainer>
        <Styled.TypographyWrapper>
          <Typography
            color={color.black}
            fontSize={font.size.content}
            fontWeight={font.weight.bold}
          >
            좋아하는
          </Typography>
          {type === 'drink' ? (
            <>
              <Typography
                color={color.light_purple}
                fontSize={font.size.content}
                fontWeight={font.weight.bold}
              >
                &nbsp;술&nbsp;
              </Typography>
              <Typography
                color={color.black}
                fontSize={font.size.content}
                fontWeight={font.weight.bold}
              >
                종류
              </Typography>
            </>
          ) : (
            <Typography
              color={color.light_purple}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              &nbsp;분위기
            </Typography>
          )}
        </Styled.TypographyWrapper>
        {personal && (
          <Styled.ImageWrapper>
            <img src="icons/icon-favorite-setting.svg" />
          </Styled.ImageWrapper>
        )}
      </Styled.subContainer>
      {keyList &&
        keyList.map((item: List) => {
          return (
            item && (
              <Typography
                key={item.id}
                color={color.gray}
                fontSize={font.size.s}
                fontWeight={font.weight.regular}
                style={{
                  lineHeight: '17px',
                  letterSpacing: '-0.3px',
                  display: 'inline-block',
                  marginTop: '2px',
                }}
              >
                #{item.name}&nbsp;
              </Typography>
            )
          );
        })}
    </Styled.Container>
  );
};

export default CardKeyword;

import React, { CSSProperties } from 'react';
import { CardKeyword, Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface List {
  id: number;
  name: string;
}

interface Props {
  favoriteDrinkList: List[];
  favoriteMoodList: List[];
  personal: boolean;
  isSetting: boolean;
  style?: CSSProperties;
}

/* 리코일 연결 후 불러오는 방식은 수정할 예정*/

const Card = ({
  favoriteDrinkList,
  favoriteMoodList,
  personal,
  isSetting,
  style,
}: Props) => {
  return (
    <>
      <Styled.Container style={style}>
        {isSetting === true ? (
          <>
            <CardKeyword
              keywordList={favoriteDrinkList}
              type={'drink'}
              personal={personal}
            />
            <CardKeyword
              keywordList={favoriteMoodList}
              type={'mood'}
              personal={personal}
              style={{ marginTop: '13px' }}
            />
          </>
        ) : (
          <Styled.SubContainer>
            <Typography
              color={color.black}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              나의 키워드
            </Typography>
            <Typography
              color={color.gray}
              fontSize={font.size.s}
              fontWeight={font.weight.regular}
              style={{
                lineHeight: '17px',
                letterSpacing: '-0.3px',
                marginTop: '2px',
              }}
            >
              술 친구에게 나를 표현해보세요.
            </Typography>
          </Styled.SubContainer>
        )}
      </Styled.Container>
    </>
  );
};

export default Card;

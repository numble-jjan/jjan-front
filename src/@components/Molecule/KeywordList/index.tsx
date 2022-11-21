import React, { CSSProperties, useState } from 'react';
import { Button, Typography } from '@/@components';
import { btn8, btn10, color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface List {
  id: number;
  keyword: string;
  isSelected: boolean;
}

interface Props {
  keywordList: List[];
  style?: CSSProperties;
}

const KeywordList = ({ keywordList, style }: Props) => {
  const [keyList, setKeyList] = useState<List[]>(keywordList);
  return (
    <Styled.Container style={style}>
      <Styled.SubContainer>
        {keyList &&
          keyList.map((keyword: List) => {
            return (
              keyword && (
                <Styled.ButtonWrapper className={'keyword'} key={keyword.id}>
                  <Button
                    onClick={() => {
                      setKeyList(
                        keyList.map((value: List) =>
                          value.id === keyword.id
                            ? {
                                ...value,
                                isSelected: !value.isSelected,
                              }
                            : { ...value },
                        ),
                      );
                    }}
                    style={keyword.isSelected === true ? btn10 : btn8}
                  >
                    <Typography
                      color={
                        keyword.isSelected === true
                          ? color.purple
                          : color.dark_gray
                      }
                      fontSize={font.size.content}
                      fontWeight={font.weight.bold}
                    >
                      {keyword.keyword}
                    </Typography>
                  </Button>
                </Styled.ButtonWrapper>
              )
            );
          })}
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default KeywordList;

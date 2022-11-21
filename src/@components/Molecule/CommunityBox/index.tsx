import React, { CSSProperties } from 'react';
import { MiniBox, Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props {
  category: string;
  content: string;
  date: string;
  likes: number;
  style?: CSSProperties;
  onClick?: () => void;
}

const CommunityBox = ({
  category,
  content,
  date,
  likes,
  style,
  onClick,
}: Props) => {
  return (
    <>
      <MiniBox
        headerChildren={
          <Styled.HeaderContainer>
            <img src="icons/icon-heart.svg" />
            <Typography
              color={color.light_purple}
              fontSize={font.size.m}
              fontWeight={font.weight.bold}
              style={{ float: 'left', marginLeft: '5px', lineHeight: '19px' }}
            >
              {likes}
            </Typography>
            <Typography
              color={color.dark_gray}
              fontSize={font.size.s}
              fontWeight={font.weight.medium}
              style={{
                float: 'right',
                lineHeight: '17px',
                letterSpacing: '-0.2px',
                marginTop: '1px',
              }}
            >
              {date}
            </Typography>
          </Styled.HeaderContainer>
        }
        contentChildren={
          <Styled.ContentContainer onClick={onClick}>
            <Styled.TypographyWrapper>
              <Typography
                color={color.black}
                fontSize={font.size.m}
                fontWeight={font.weight.medium}
              >
                {content}
              </Typography>
            </Styled.TypographyWrapper>
            <Typography
              color={color.dark_gray}
              fontSize={font.size.s}
              fontWeight={font.weight.bold}
              style={{
                position: 'absolute',
                bottom: '10px',
              }}
            >
              {category}
            </Typography>
          </Styled.ContentContainer>
        }
        style={style}
      />
    </>
  );
};

export default CommunityBox;

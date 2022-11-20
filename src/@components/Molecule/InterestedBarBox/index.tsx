import React, { CSSProperties } from 'react';
import { MiniBox, Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props {
  BarName: string;
  BarType: string;
  location: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const InterestedBarBox = ({
  BarName,
  BarType,
  location,
  style,
  onClick,
}: Props) => {
  return (
    <>
      <MiniBox
        headerChildren={
          <Styled.HeaderContainer>
            <img src="icons/icon-purple-location.svg" />
            <Styled.LocationWrapper>
              <Typography
                color={color.black}
                fontSize={font.size.m}
                fontWeight={font.weight.medium}
                style={{
                  float: 'left',
                  marginLeft: '7px',
                  lineHeight: '18.82px',
                }}
              >
                {location}
              </Typography>
            </Styled.LocationWrapper>
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
                {BarName}
              </Typography>
            </Styled.TypographyWrapper>
            <Typography
              color={color.dark_gray}
              fontSize={font.size.xs}
              fontWeight={font.weight.medium}
            >
              {BarType}
            </Typography>
            <Typography
              color={color.dark_gray}
              fontSize={font.size.s}
              fontWeight={font.weight.bold}
              style={{
                marginTop: '19px',
                position: 'absolute',
                bottom: '12px',
              }}
              onClick={onClick}
            >
              자세히보기
            </Typography>
          </Styled.ContentContainer>
        }
        style={style}
      />
    </>
  );
};

export default InterestedBarBox;

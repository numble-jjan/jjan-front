import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  TitleWithImage,
  Typography,
  GuideSection,
} from '../../@components';

import * as Styled from './index.styles';
import { btn1, color, font } from '../../styles/theme';

const SignUpCompleted = () => {
  return (
    <Styled.Container>
      <TitleWithImage>
        <TitleWithImage.Image
          src={'icons/icon-good.svg'}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <TitleWithImage.Title>반갑습니다</TitleWithImage.Title>
        <TitleWithImage.Title>
          <TitleWithImage.Emphasis>abc@gmail.com</TitleWithImage.Emphasis>님!
        </TitleWithImage.Title>
        <TitleWithImage.Title>
          JJAN 회원이 되신걸 축하드립니다!
        </TitleWithImage.Title>
      </TitleWithImage>
      <GuideSection
        firstChildren={
          <>
            <img src="icons/icon-community-service.svg" />
            <Styled.TypographyWapper>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  커뮤니티 서비스
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  를 통해
                </Typography>
              </Styled.EmphasisWapper>
              <Typography
                color={color.black}
                fontSize={font.size.s}
                fontWeight={font.weight.medium}
              >
                술에 대한 정보를 공유해보세요!
              </Typography>
            </Styled.TypographyWapper>
          </>
        }
        secondChildren={
          <>
            <img src="icons/icon-drink-mate.svg" />
            <Styled.TypographyWapper>
              <Typography
                color={color.black}
                fontSize={font.size.s}
                fontWeight={font.weight.medium}
              >
                현 위치를 기반으로
              </Typography>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  내 주변 술 메이트
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  를 찾아보세요!
                </Typography>
              </Styled.EmphasisWapper>
            </Styled.TypographyWapper>
          </>
        }
        thirdChildren={
          <>
            <img src="icons/icon-circle-location.svg" />
            <Styled.TypographyWapper>
              <Typography
                color={color.black}
                fontSize={font.size.s}
                fontWeight={font.weight.medium}
              >
                지역기반 커뮤니티를 통해
              </Typography>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  내 지역 핫한 술집
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.s}
                  fontWeight={font.weight.medium}
                >
                  을 공유해보세요!
                </Typography>
              </Styled.EmphasisWapper>
            </Styled.TypographyWapper>
          </>
        }
        style={{ marginTop: '50px' }}
      />
      <Styled.ButtonContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button style={btn1}>
            <Typography
              color={color.white}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              로그인 하기
            </Typography>
          </Button>
        </Link>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default SignUpCompleted;

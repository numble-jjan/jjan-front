import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, GuideSection } from '../../@components';

import * as Styled from './index.styles';
import { color, font } from '../../styles/theme';

const SignUpCompleted = () => {
  return (
    <Styled.Container>
      <img className="good" src="icons/icon-good.svg" />
      <Typography fontSize={font.size.title} fontWeight={font.weight.regular}>
        반갑습니다
      </Typography>
      <Styled.TitleWapper>
        <Typography
          color={color.purple}
          fontSize={font.size.title}
          fontWeight={font.weight.bold}
        >
          abc@gmail.com
        </Typography>
        <Typography fontSize={font.size.title} fontWeight={font.weight.regular}>
          님!
        </Typography>
      </Styled.TitleWapper>
      <Typography fontSize={font.size.title} fontWeight={font.weight.regular}>
        JJAN 회원이 되신걸 축하드립니다!
      </Typography>
      <GuideSection
        firstChildren={
          <>
            <img src="icons/icon-community-service.svg" />
            <Styled.TypographyWapper>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.m}
                  fontWeight={font.weight.bold}
                >
                  커뮤니티 서비스
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.m}
                  fontWeight={font.weight.regular}
                >
                  를 통해
                </Typography>
              </Styled.EmphasisWapper>
              <Typography
                color={color.black}
                fontSize={font.size.m}
                fontWeight={font.weight.regular}
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
                fontSize={font.size.m}
                fontWeight={font.weight.regular}
              >
                현 위치를 기반으로
              </Typography>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.m}
                  fontWeight={font.weight.bold}
                >
                  내 주변 술 메이트
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.m}
                  fontWeight={font.weight.regular}
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
                fontSize={font.size.m}
                fontWeight={font.weight.regular}
              >
                지역기반 커뮤니티를 통해
              </Typography>
              <Styled.EmphasisWapper>
                <Typography
                  color={color.purple}
                  fontSize={font.size.m}
                  fontWeight={font.weight.bold}
                >
                  내 지역 핫한 술집
                </Typography>
                <Typography
                  color={color.black}
                  fontSize={font.size.m}
                  fontWeight={font.weight.regular}
                >
                  을 공유해보세요!
                </Typography>
              </Styled.EmphasisWapper>
            </Styled.TypographyWapper>
          </>
        }
        style={{ marginTop: '40px' }}
      />
      <Styled.ButtonContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button shape="purple" height="l">
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

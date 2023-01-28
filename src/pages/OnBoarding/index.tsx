import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@/@components';

import * as Styled from './index.styles';
import { color, font } from '@/styles/theme';

const Onboarding = () => {
  return (
    <Styled.Container>
      <img src="icons/icon-logo.svg" />
      <Styled.GreetingWrapper>
        <Typography
          color={color.purple}
          fontSize={font.size.header}
          fontWeight={font.weight.bold}
        >
          JJAN
        </Typography>
        <Typography
          color={color.black}
          fontSize={font.size.header}
          fontWeight={font.weight.bold}
        >
          에 오신 것을 환영합니다!
        </Typography>
      </Styled.GreetingWrapper>
      <Typography
        color={color.black}
        fontSize={font.size.content}
        style={{ marginTop: '14px' }}
      >
        같이 한잔 할 친구가 필요하신가요?
      </Typography>
      <Typography
        color={color.black}
        fontSize={font.size.content}
        style={{ lineHeight: '20px' }}
      >
        내 주변에서 찾아보세요!
      </Typography>
      <Typography
        color={color.purple}
        fontSize={font.size.content}
        fontWeight={font.weight.bold}
        style={{ marginTop: '30px', marginBottom: '50px' }}
      >
        오늘 하루도 짠-!
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button shape="purple" height="l">
          <Typography
            color={color.white}
            fontSize={font.size.content}
            fontWeight={font.weight.bold}
          >
            JJAN 회원가입
          </Typography>
        </Button>
      </Link>
    </Styled.Container>
  );
};

export default Onboarding;

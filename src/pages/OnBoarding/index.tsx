import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@/@components';

import {
  Root,
  ButtonContainer,
  TextBox,
  Firstgreeting,
  Introduce,
} from './index.styles';
import { btn1, color, font } from '@/styles/theme';

const Onboarding = () => {
  return (
    <Root>
      <img src="/logo.svg" />
      <Firstgreeting>
        <TextBox>
          <Typography
            color={color.purple}
            fontSize={font.size.header}
            fontWeight={font.weight.bold}
          >
            JJAN
          </Typography>
        </TextBox>
        <TextBox>
          <Typography
            color={color.black}
            fontSize={font.size.header}
            fontWeight={font.weight.bold}
          >
            에 오신 것을 환영합니다!
          </Typography>
        </TextBox>
      </Firstgreeting>
      <Introduce>
        <Typography color={color.black} fontSize={font.size.content}>
          같이 한잔 할 친구가 필요하신가요?
        </Typography>
        <Typography color={color.black} fontSize={font.size.content}>
          내 주변에서 찾아보세요!
        </Typography>
      </Introduce>
      <Typography
        color={color.purple}
        fontSize={font.size.content}
        fontWeight={font.weight.bold}
        style={{ marginTop: '30px' }}
      >
        오늘 하루도 짠-!
      </Typography>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <ButtonContainer>
          <Button style={btn1}>
            <Typography
              color={color.white}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              JJAN 회원가입
            </Typography>
          </Button>
        </ButtonContainer>
      </Link>
    </Root>
  );
};

export default Onboarding;

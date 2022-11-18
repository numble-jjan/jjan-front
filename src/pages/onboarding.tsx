import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../@components';
import { Typography } from '../@components';
import {
  Root,
  TextBox,
  Firstgreeting,
  Introduce,
  SignUpButton,
} from '../styles/onboarding';
import color from '../styles/constants/color';

const Onboarding = () => {
  return (
    <Root>
      <img src="/logo.png" />
      <Firstgreeting>
        <TextBox>
          <Typography
            color={color.purple}
            fontSize={18}
            style={{ fontWeight: 'bold' }}
          >
            JJAN
          </Typography>
        </TextBox>
        <TextBox>
          <Typography color={color.black} fontSize={18}>
            에 오신 것을 환영합니다!
          </Typography>
        </TextBox>
      </Firstgreeting>
      <Introduce>
        <Typography color={color.black} fontSize={14}>
          같이 한잔 할 친구가 필요하신가요?
        </Typography>
        <Typography color={color.black} fontSize={14}>
          내 주변에서 찾아보세요!
        </Typography>
      </Introduce>
      <Typography
        color={color.purple}
        fontSize={14}
        style={{ fontWeight: 'bold', marginTop: '30px' }}
      >
        오늘 하루도 짠-!
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <SignUpButton>
          <Button
            backgroundColor={color.purple}
            color={color.white}
            fontSize={14}
            width={290}
            height={50}
            fontWeight={'bold'}
          >
            JJAN 회원가입
          </Button>
        </SignUpButton>
      </Link>
    </Root>
  );
};

export default Onboarding;

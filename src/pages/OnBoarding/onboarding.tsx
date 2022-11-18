import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '../../@components';

import {
  Root,
  TextBox,
  Firstgreeting,
  Introduce,
  SignUpButton,
} from './onboarding';
import { btn1, color, font } from '../../styles/theme';

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
          <Typography color={color.black} fontSize={font.size.header}>
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
        fontSize={14}
        style={{ fontWeight: 'bold', marginTop: '30px' }}
      >
        오늘 하루도 짠-!
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <SignUpButton>
          <Button style={btn1}>
            <Typography
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              JJAN 회원가입
            </Typography>
          </Button>
        </SignUpButton>
      </Link>
    </Root>
  );
};

export default Onboarding;

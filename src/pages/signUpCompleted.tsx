import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../@components';
import { Typography } from '../@components';
import {
  Root,
  TextBox,
  Introduce,
  SignInButton,
} from '../styles/signUpCompleted';
import color from '../styles/constants/color';

const Onboarding = () => {
  return (
    <Root>
      <img id="good" src="/good.png" />
      <Introduce>
        <Typography color={color.black} fontSize={16}>
          반갑습니다
        </Typography>
        <TextBox>
          <Typography
            color={color.purple}
            fontSize={16}
            style={{ fontWeight: 'bold' }}
          >
            abc@gmail.com
          </Typography>
        </TextBox>
        <TextBox>
          <Typography color={color.black} fontSize={16}>
            님!
          </Typography>
        </TextBox>
        <Typography color={color.black} fontSize={16}>
          JJAN 회원이 되신걸 축하드립니다!
        </Typography>
      </Introduce>
      <img id="box" src="/signUpCompleted.png" />
      <SignInButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            backgroundColor={color.purple}
            color={color.white}
            fontSize={14}
            width={290}
            height={50}
            fontWeight={'bold'}
          >
            로그인 하기
          </Button>
        </Link>
      </SignInButton>
    </Root>
  );
};

export default Onboarding;

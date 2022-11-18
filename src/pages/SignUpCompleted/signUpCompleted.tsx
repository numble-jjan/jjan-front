import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '../../@components';

import { Root, TextBox, Introduce, SignInButton } from './signUpCompleted';
import { btn1, color, font } from '../../styles/theme';

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
      </SignInButton>
    </Root>
  );
};

export default Onboarding;

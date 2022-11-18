import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '../../@components';

import { Root, ButtonContainer, TextBox, Introduce } from './index.styles';
import { btn1, color, font } from '../../styles/theme';

const SignUpCompleted = () => {
  return (
    <Root>
      <img id="good" src="/good.svg" />
      <Introduce>
        <Typography color={color.black} fontSize={font.size.title}>
          반갑습니다
        </Typography>
        <TextBox>
          <Typography
            color={color.purple}
            fontSize={font.size.title}
            fontWeight={font.weight.bold}
          >
            abc@gmail.com
          </Typography>
        </TextBox>
        <TextBox>
          <Typography color={color.black} fontSize={font.size.title}>
            님!
          </Typography>
        </TextBox>
        <Typography color={color.black} fontSize={font.size.title}>
          JJAN 회원이 되신걸 축하드립니다!
        </Typography>
      </Introduce>
      <img id="box" src="/signUpCompleted.svg" />
      <ButtonContainer>
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
      </ButtonContainer>
    </Root>
  );
};

export default SignUpCompleted;

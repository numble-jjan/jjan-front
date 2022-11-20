import React from 'react';
import { useForm } from 'react-hook-form';

import { FormInput, Button, Layout, Typography } from '@/@components';

import { btn1, color, font } from '@/styles/theme';
import * as Styled from './index.styles';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/;

type FormData = {
  email: string;
  password: string;
};

const index = () => {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors },
  } = useForm<FormData>();

  const onClickPrev = () => {
    //sample
  };

  const emailRegister = {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: emailRegex,
      message: '이메일 주소를 다시 확인해주세요.',
    },
  };

  const passwordRegister = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: passwordRegex,
      message:
        '비밀번호는 최소 8자 이상의 영문자, 숫자, 특수문자 조합을 입력해야 합니다.',
    },
  };

  return (
    <Layout headerTitle="로그인" onClickPrev={onClickPrev}>
      <Styled.FormContainer>
        <FormInput
          lable="이메일"
          placeholder="이메일 주소"
          isValid={!errors.email?.message}
          type="text"
          register={register('email', emailRegister)}
          errorMessage={errors.email && String(errors.email.message)}
        />
        <FormInput
          lable="비밀번호"
          placeholder="영문 대소문자, 숫자, !@#$%^&*"
          isValid={!errors.password?.message}
          type="password"
          register={register('password', passwordRegister)}
          errorMessage={errors.password && String(errors.password.message)}
        />
      </Styled.FormContainer>
      <Styled.ButtonContainer>
        <Button
          style={btn1}
          /* eslint-disable */
          onClick={handleSubmit(data => console.log(data))}
        >
          <Typography
            color={color.white}
            fontSize={font.size.content}
            fontWeight={font.weight.bold}
          >
            로그인 하기
          </Typography>
        </Button>
        <Typography
          onClick={() => console.log('hi')}
          color={color.purple}
          fontSize={font.size.content}
          fontWeight={font.weight.bold}
        >
          회원가입
        </Typography>
      </Styled.ButtonContainer>
    </Layout>
  );
};

export default index;

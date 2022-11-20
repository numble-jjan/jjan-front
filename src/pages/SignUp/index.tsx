import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { TitleBar, FormInput, Button, Layout, Typography } from '@/@components';

import { btn1, btn3, color, font } from '@/styles/theme';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/;

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    // setError,
    formState: { errors },
  } = useForm<FormData>();

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

  const confirmPasswordRegister = {
    required: '비밀번호를 입력해주세요.',
    validate: (confirmPassword: string) => {
      if (watch('password') !== confirmPassword) {
        return '비밀번호를 다시 확인해주세요';
      }
    },
  };

  return (
    <Layout headerTitle="회원 가입">
      <TitleBar type="essential">회원 정보</TitleBar>
      <FormContainer>
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
        <FormInput
          lable="비밀번호 확인"
          placeholder="비밀번호 재입력"
          isValid={!errors.confirmPassword?.message}
          type="password"
          register={register('confirmPassword', confirmPasswordRegister)}
          errorMessage={
            errors.confirmPassword && String(errors.confirmPassword.message)
          }
        />
      </FormContainer>
      <ButtonContainer>
        <Button style={btn3}>
          <Typography
            color={color.purple}
            fontSize={font.size.content}
            fontWeight={font.weight.bold}
          >
            취소
          </Typography>
        </Button>
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
            회원가입
          </Typography>
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

export default index;

const FormContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;

  div {
    &:first-child {
      margin-right: 5px;
    }
  }
`;

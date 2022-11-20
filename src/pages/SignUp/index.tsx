import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TitleBar, FormInput, Button, Layout, Typography } from '@/@components';

import { btn1, btn3, color, font } from '@/styles/theme';
import * as Styled from './index.styles';
import { schema } from '@/constants/validationSchema';

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  return (
    <Layout headerTitle="회원 가입">
      <TitleBar type="essential">회원 정보</TitleBar>
      <Styled.FormContainer>
        <FormInput
          lable="이메일"
          placeholder="이메일 주소"
          isValid={!errors.email?.message}
          type="text"
          register={register('email')}
          errorMessage={errors.email && String(errors.email.message)}
        />
        <FormInput
          lable="비밀번호"
          placeholder="영문 대소문자, 숫자, !@#$%^&*"
          isValid={!errors.password?.message}
          type="password"
          register={register('password')}
          errorMessage={errors.password && String(errors.password.message)}
        />
        <FormInput
          lable="비밀번호 확인"
          placeholder="비밀번호 재입력"
          isValid={!errors.passwordConfirmation?.message}
          type="password"
          register={register('passwordConfirmation')}
          errorMessage={
            errors.passwordConfirmation &&
            String(errors.passwordConfirmation.message)
          }
        />
      </Styled.FormContainer>
      <Styled.ButtonContainer>
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
      </Styled.ButtonContainer>
    </Layout>
  );
};

export default index;

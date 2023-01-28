import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Typography, Content, Header } from '@/@components';
import LoginForm from './LoginForm';
import * as Styled from './index.styles';

import { color, font } from '@/styles/theme';

import { LoginFormData } from './types';
import { schema } from '@/constants/validationSchema';

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  return (
    <>
      <Header title="로그인" />
      <Content>
        <LoginForm register={register} errors={errors} />
        <Styled.ButtonContainer>
          <Button
            shape="purple"
            height="l"
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
      </Content>
    </>
  );
};

export default index;

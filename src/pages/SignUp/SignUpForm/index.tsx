import React from 'react';
import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';

import * as Styled from './index.styles';
import { FormInput } from '@/@components';

import { SignUpFormData } from '../types';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  errors: Partial<FieldErrorsImpl<SignUpFormData>>;
}

const SignUpForm = ({ register, errors }: Props) => {
  return (
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
  );
};

export default SignUpForm;

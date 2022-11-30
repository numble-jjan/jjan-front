import React from 'react';
import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';

import { FormInput } from '@/@components';

import { LoginFormData } from '../types';

interface Props {
  register: UseFormRegister<LoginFormData>;
  errors: Partial<FieldErrorsImpl<LoginFormData>>;
}

const SignUpForm = ({ register, errors }: Props) => {
  return (
    <>
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
    </>
  );
};

export default SignUpForm;

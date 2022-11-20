import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { Input, Lable, Message } from '@/@components';

import { InputType } from '@/@types/inputType';
import { color } from '@/styles/theme';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  lable: string;
  isValid: boolean;
  type: InputType;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  confirmMessage?: string;
  required?: boolean;
  isTouched?: boolean;
}

const FormInput = ({
  lable,
  placeholder,
  isValid,
  type,
  register,
  errorMessage,
  confirmMessage,
  required,
  isTouched,
}: IProps) => {
  return (
    <Container>
      <Lable>{lable}</Lable>
      <Input
        placeholder={placeholder}
        isValid={isValid}
        type={type}
        required={required}
        {...register}
      />
      {!isValid && errorMessage && (
        <Message color={color.orange}>{errorMessage}</Message>
      )}
      {isValid && isTouched && confirmMessage && (
        <Message color={color.purple}>{confirmMessage}</Message>
      )}
    </Container>
  );
};

export default FormInput;

const Container = styled.div`
  margin-bottom: 15px;
`;

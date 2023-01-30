import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { Typography } from '@/@components';
import { Input } from '@/@components';

import { InputType } from '@/@types/inputType';
import { color, font } from '@/styles/theme';

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
      <Typography
        fontSize={font.size.m}
        fontWeight={font.weight.regular}
        style={{ marginBottom: '5px' }}
      >
        {lable}
      </Typography>
      <Input
        placeholder={placeholder}
        isValid={isValid}
        type={type}
        required={required}
        shape="border"
        {...register}
      />
      {!isValid && errorMessage && (
        <Typography
          color={color.orange}
          fontSize={font.size.s}
          fontWeight={font.weight.regular}
          style={{ marginTop: '3px' }}
        >
          {errorMessage}
        </Typography>
      )}
      {isValid && isTouched && confirmMessage && (
        <Typography
          color={color.purple}
          fontSize={font.size.s}
          fontWeight={font.weight.bold}
          style={{ marginTop: '3px' }}
        >
          {confirmMessage}
        </Typography>
      )}
    </Container>
  );
};

export default FormInput;

const Container = styled.div`
  margin-bottom: 15px;
`;

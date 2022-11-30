import React, { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { ValidationInput, Typography } from '@/@components';

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
  right?: ReactNode;
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
  right,
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
      <ValidationInput
        placeholder={placeholder}
        isValid={isValid}
        type={type}
        required={required}
        right={right}
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
          fontWeight={font.weight.medium}
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

import React, { forwardRef, InputHTMLAttributes } from 'react';

import * as Styled from './index.styles';

import { InputType } from '../../../@types/inputType';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  isValid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, placeholder, type, isValid, ...props }: InputProps,
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Styled.StyledInput
        ref={ref}
        name={name}
        placeholder={placeholder}
        type={type}
        isValid={isValid}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;

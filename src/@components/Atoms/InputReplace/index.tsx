import React, { forwardRef } from 'react';

import * as Styled from './index.styles';

import type { InputType } from '@/@types/inputType';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, ...props }: Props, ref?: React.Ref<HTMLInputElement>) => {
    return <Styled.Input type={type} ref={ref} {...props} />;
  },
);

Input.displayName = 'Input';

export default Input;

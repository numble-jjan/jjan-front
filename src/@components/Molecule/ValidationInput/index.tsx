import React, { forwardRef } from 'react';

import { Input } from '@/@components';
import * as Styled from './index.styles';

import { InputType } from '@/@types/inputType';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  isValid?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

const ValidationInput = forwardRef<HTMLInputElement, Props>(
  ({ type, isValid, ...props }: Props, ref) => {
    return (
      <Styled.Container isValid={isValid}>
        <Input type={type} ref={ref} {...props} />
      </Styled.Container>
    );
  },
);

ValidationInput.displayName = 'ValidationInput';

export default ValidationInput;

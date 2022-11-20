import React, { forwardRef } from 'react';

import { InputReplace } from '@/@components';
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
        <InputReplace type={type} ref={ref} {...props} />
      </Styled.Container>
    );
  },
);

ValidationInput.displayName = 'ValidationInput';

export default ValidationInput;

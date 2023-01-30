import React, { forwardRef, ReactNode } from 'react';

import { Input } from '@/@components';
import * as Styled from './index.styles';

import { InputType } from '@/@types/inputType';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  isValid?: boolean;
  right?: ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

const ValidationInput = forwardRef<HTMLInputElement, Props>(
  ({ type, isValid, right, ...props }: Props, ref) => {
    return (
      <Styled.Container>
        <Styled.InputWrapper isValid={isValid}>
          <Input shape="border" type={type} ref={ref} {...props} />
        </Styled.InputWrapper>
        {right}
      </Styled.Container>
    );
  },
);

ValidationInput.displayName = 'ValidationInput';

export default ValidationInput;

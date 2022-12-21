import React, { forwardRef } from 'react';

import * as Styled from './index.styles';

type InputType = React.InputHTMLAttributes<HTMLInputElement>;
export type InputShape = 'border' | 'bottomLine';

const InputBase = forwardRef<HTMLInputElement, InputType>(
  (props: InputType, ref?: React.Ref<HTMLInputElement>) => {
    return <Styled.Root ref={ref} {...props} />;
  },
);

InputBase.displayName = 'InputBase';

interface IProps extends InputType {
  isValid?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  shape: InputShape;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref?: React.Ref<HTMLInputElement>) => {
    const { shape, left, right, isValid } = props;
    return (
      <Styled.Container isValid={isValid} shape={shape}>
        {left}
        <InputBase ref={ref} {...props} />
        {right}
      </Styled.Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;

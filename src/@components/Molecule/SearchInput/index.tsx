import React from 'react';

import { InputReplace } from '@/@components';
import * as Styled from './index.styles';

import { InputType } from '@/@types/inputType';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  ref?: React.Ref<HTMLInputElement>;
}

const SearchInput = ({ type, ref, icon, ...props }: Props) => {
  const Icon = icon || 'svg';
  return (
    <Styled.Container>
      <InputReplace type={type} ref={ref} {...props} />
      <Icon />
    </Styled.Container>
  );
};
export default SearchInput;

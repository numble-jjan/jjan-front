import React from 'react';

import { Input } from '@/@components';
import * as Styled from './index.styles';

import { InputType } from '@/@types/inputType';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  ref?: React.Ref<HTMLInputElement>;
}

const SearchInput = ({ type, ref, icon, ...props }: Props) => {
  const Icon = icon;
  return (
    <Styled.Container>
      <Input type={type} ref={ref} {...props} />
      {Icon && <Icon />}
    </Styled.Container>
  );
};
export default SearchInput;

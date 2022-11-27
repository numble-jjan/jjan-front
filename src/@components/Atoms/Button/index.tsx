import React, { CSSProperties, PropsWithChildren } from 'react';

import * as Styled from './index.styles';

interface Props extends PropsWithChildren {
  style?: CSSProperties;
  onClick?: () => void;
}

const Button = ({ style, onClick, children }: Props) => {
  return (
    <Styled.Root style={style} onClick={onClick}>
      {children}
    </Styled.Root>
  );
};

export default Button;

import React, { ReactNode } from 'react';

import * as Styled from './index.styles';

interface Props {
  children: ReactNode;
}

const index = ({ children }: Props) => {
  return <Styled.Content>{children}</Styled.Content>;
};

export default index;

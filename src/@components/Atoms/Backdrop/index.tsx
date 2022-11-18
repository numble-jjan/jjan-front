import React from 'react';

import * as Styled from './index.styles';

interface Props {
  onClick?: () => void;
}

const Backdrop = ({ onClick }: Props) => {
  return <Styled.Background onClick={onClick}></Styled.Background>;
};

export default Backdrop;

import React from 'react';
import { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  style?: CSSProperties;
  onClick?: () => void;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
`;

const Button = ({ style, onClick, children }: Props) => {
  return (
    <>
      <Root style={style} onClick={onClick}>
        {children}
      </Root>
    </>
  );
};

export default Button;

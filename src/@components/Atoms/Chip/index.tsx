import React, { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  style?: CSSProperties;
}

const Badge = ({ style, children, ...rest }: Props) => {
  return (
    <Container style={style} {...rest}>
      {children}
    </Container>
  );
};
export default Badge;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px 9px 4px;
  text-align: center;
`;

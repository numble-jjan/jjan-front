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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 4px 4px 4px 8px;
  text-align: center;
`;

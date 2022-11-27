import React, { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

interface Props extends PropsWithChildren {
  style: CSSProperties;
}

const Badge = ({ style, children }: Props) => {
  const { fontSize, fontWeight } = style;
  return (
    <Container style={style}>
      <Typography fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Typography>
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
`;

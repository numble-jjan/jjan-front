import React from 'react';
import styled from 'styled-components';

interface Props {
  direction: 'row' | 'column';
  gap?: number;
  padding?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Flexbox = ({
  style,
  direction,
  gap,
  padding,
  children,
}: Props) => {
  return (
    <Container direction={direction} gap={gap} padding={padding} style={style}>
      {children}
    </Container>
  );
};

type StyledProps = Omit<Props, 'children'>;

const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => `${padding}px`};
`;

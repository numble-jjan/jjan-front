import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  rows: number;
  gap?: number;
  children: ReactNode;
  style?: CSSProperties;
}

const GridItems = ({ rows, gap = 0, children, style }: Props) => {
  return (
    <Container gap={gap} style={style}>
      {React.Children.toArray(children).map((child, index) => (
        <ItemWrapper key={index} rows={rows} gap={gap}>
          {child}
        </ItemWrapper>
      ))}
    </Container>
  );
};

export default GridItems;

const Container = styled.div<{ gap: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.gap}px;
`;

const ItemWrapper = styled.div<{ rows: number; gap: number }>`
  flex-basis: ${({ rows, gap }) =>
    `calc((100% - (${rows} - 1) * ${gap}px) / ${rows})`};
`;

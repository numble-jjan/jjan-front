import React, { CSSProperties, PropsWithChildren } from 'react';

import * as Styled from './index.styles';

interface Props extends PropsWithChildren {
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Typography = ({
  color,
  fontSize,
  fontWeight,
  style,
  onClick,
  children,
}: Props) => {
  return (
    <Styled.Root
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      style={style}
      onClick={onClick}
    >
      {children}
    </Styled.Root>
  );
};

export default Typography;

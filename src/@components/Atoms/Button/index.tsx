import React, { CSSProperties, PropsWithChildren } from 'react';

import * as Styled from './index.styles';
import { buttonHeight } from '@/styles/theme';

export type ButtonShape =
  | 'purple'
  | 'whiteWithPurple'
  | 'whiteWithGray'
  | 'gray';

export type ButtonHeight = 'xs' | 'm' | 'l';

interface Props extends PropsWithChildren {
  shape: ButtonShape;
  height: ButtonHeight;
  width?: number;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  shape,
  width,
  height = 'm',
  style,
  onClick,
  disabled,
  children,
}: Props) => {
  const heightValue = buttonHeight[height];

  return (
    <Styled.Root
      shape={shape}
      height={heightValue}
      width={width}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <Styled.OverridenTypo shape={shape}>{children}</Styled.OverridenTypo>
    </Styled.Root>
  );
};

export default Button;

import React, { CSSProperties, PropsWithChildren } from 'react';

import * as Styled from './index.styles';
import { buttonHeight } from '@/styles/theme';

// 현재 weight값은 700으로 고정된 상태로 스타일링을 진행함

// const buttonShpes = {
//   purple: 'purple',
//   whiteWithPurple: 'whiteWithPurple',
// };

export type ButtonShape =
  | 'purple'
  | 'whiteWithPurple'
  | 'whiteWithGray'
  | 'gray';

export type ButtonHeight = 'xs' | 'm' | 'l';

interface Props extends PropsWithChildren {
  shape: ButtonShape;
  height: ButtonHeight;
  style?: CSSProperties;
  onClick?: () => void;
  disabled: boolean;
}

const Button = ({
  shape,
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
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <Styled.OverridenTypo shape={shape}>{children}</Styled.OverridenTypo>
    </Styled.Root>
  );
};

export default Button;

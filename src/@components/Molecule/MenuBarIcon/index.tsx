import React, { CSSProperties } from 'react';

import { Typography } from '@/@components';

import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props {
  src: string;
  menuTitle: string;
  isSelected: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

const MenuBarIcon = ({ src, menuTitle, isSelected, style, onClick }: Props) => {
  return (
    <Styled.Container style={style} onClick={onClick}>
      <img src={src} />
      <Typography
        color={isSelected === true ? color.purple : color.black}
        fontSize={font.size.menubar}
        fontWeight={isSelected === true ? font.weight.bold : font.weight.bold}
      >
        {menuTitle}
      </Typography>
    </Styled.Container>
  );
};

export default MenuBarIcon;

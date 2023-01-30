import React, { Dispatch, SetStateAction } from 'react';

import * as Styled from './index.styles';
import { Button, Typography } from '@/@components';

import {
  color,
  btn_board_active,
  btn_board_inactive,
  font,
} from '@/styles/theme';
import { BOARDS } from '@/constants/board';

interface Props {
  activeBoardIndex: number;
  setActiveBoardIndex: Dispatch<SetStateAction<number>>;
}

const CategoryBar = ({ activeBoardIndex, setActiveBoardIndex }: Props) => {
  const createClickHandler = (index: number) => () => {
    setActiveBoardIndex(index);
  };

  return (
    <Styled.Container>
      {BOARDS.map((board, index) => {
        if (activeBoardIndex === index) {
          return (
            <Button
              key={index}
              shape="gray"
              height="m"
              onClick={createClickHandler(index)}
              style={btn_board_active}
            >
              <Typography
                fontSize={font.size.title}
                fontWeight={font.weight.bold}
                color={color.purple}
              >
                {board}
              </Typography>
            </Button>
          );
        } else {
          return (
            <Button
              key={index}
              shape="gray"
              height="m"
              onClick={createClickHandler(index)}
              style={btn_board_inactive}
            >
              <Typography
                fontSize={font.size.title}
                fontWeight={font.weight.regular}
                color={color.black}
              >
                {board}
              </Typography>
            </Button>
          );
        }
      })}
    </Styled.Container>
  );
};

export default CategoryBar;

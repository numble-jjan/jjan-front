import React from 'react';
import { Typography, Button } from '@/@components';
import { btn1, color, font } from '@/styles/theme';

interface Props {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: Props) => {
  return (
    <Button style={btn1} onClick={onClick}>
      <Typography
        color={color.white}
        fontSize={font.size.content}
        fontWeight={font.weight.bold}
      >
        등록하기
      </Typography>
    </Button>
  );
};
export default SubmitButton;

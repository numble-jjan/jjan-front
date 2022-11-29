import React from 'react';
import { Typography, Button } from '@/@components';
import { btn1, color, font } from '@/styles/theme';

const SubmitButton = () => {
  return (
    <Button style={btn1}>
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

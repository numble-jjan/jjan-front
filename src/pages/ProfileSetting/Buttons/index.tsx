import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Typography, Button } from '@/@components';
import { btn2, btn4, color } from '@/styles/theme';

/**
 * todo
 * routes가 다 설정되면 to의 인자를 변경해야함
 */
const Buttons = () => {
  return (
    <ButtonContainer>
      <Link to="/">
        <Button style={btn4}>
          <Typography color={color.purple} fontSize={13}>
            활동지역 설정하기
          </Typography>
        </Button>
      </Link>
      <Link to="/">
        <Button style={btn2}>
          <Typography color={color.white} fontSize={13}>
            프로필 설정하기
          </Typography>
        </Button>
      </Link>
    </ButtonContainer>
  );
};
export default Buttons;

const ButtonContainer = styled.div`
  & > div:first-child {
    margin-bottom: 50px;
  }
`;

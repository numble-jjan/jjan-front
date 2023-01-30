import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Typography, Button } from '@/@components';
import { color } from '@/styles/theme';

/**
 * todo
 * routes가 다 설정되면 to의 인자를 변경해야함
 */
const Buttons = () => {
  return (
    <ButtonContainer>
      <Link to="/">
        <Button shape="whiteWithPurple" height="m">
          <Typography color={color.purple} fontSize={13}>
            활동지역 설정하기
          </Typography>
        </Button>
      </Link>
      <Link to="/">
        <Button shape="purple" height="m">
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

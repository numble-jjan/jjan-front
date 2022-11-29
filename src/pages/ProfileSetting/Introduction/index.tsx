import React from 'react';
import styled from 'styled-components';
import { Emphasis, Typography, ProfileIcon } from '@/@components';

const Introduction = () => {
  return (
    <Container>
      <Typography>내 주변 술친구를 마주할</Typography>
      <Typography>
        <Emphasis>프로필을 등록</Emphasis>
        해주세요.
      </Typography>
      <ProfileIcon extended={true} />
    </Container>
  );
};
export default Introduction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

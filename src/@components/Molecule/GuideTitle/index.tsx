import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Typography from '@/@components/Atoms/Typography';
import { font } from '@/styles/theme';

const GuideTitle = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Typography fontSize={font.size.title}>{children}</Typography>
    </Container>
  );
};
export default GuideTitle;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

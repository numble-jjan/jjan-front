import React from 'react';
import styled from 'styled-components';
import Textarea from '@/@components/Atoms/Textarea';
import { color, font } from '@/styles/theme';

interface Props {
  onChange?: () => void;
}

const PostTextarea = ({ onChange }: Props) => {
  return (
    <Container>
      <Textarea onChange={onChange} />
    </Container>
  );
};
export default PostTextarea;

const Container = styled.div`
  position: relative;
  & textarea {
    width: 100%;
    height: 200px;
    border: 1px solid ${color.light_gray1};
    font-size: ${font.size.m};
    font-weight: ${font.weight.regular};
  }
`;

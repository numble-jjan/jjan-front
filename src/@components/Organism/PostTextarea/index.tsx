import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Textarea, Typography } from '@/@components';
import { color, font } from '@/styles/theme';

interface Props {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  textLength?: number;
}

const PostTextarea = ({ onChange, textLength = 0 }: Props) => {
  return (
    <Container>
      <Textarea onChange={onChange} />
      <Typography color={color.dark_gray}>
        <span>{textLength}</span>/2000
      </Typography>
    </Container>
  );
};
export default PostTextarea;

const Container = styled.div`
  & > textarea {
    width: 100%;
    height: 154px;
    border: 1px solid ${color.light_gray1};
    border-bottom: 0px;
    font-size: ${font.size.m};
    font-weight: ${font.weight.regular};
    margin: 0;
  }
  & > div {
    margin-top: -3px; //textarea와 div 사이에 공백이 발생하여 어쩔 수 없었음.
    width: 100%;
    height: 48px;
    border: 1px solid ${color.light_gray1};
    border-top: 0px;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
  }
  & > div > span {
    color: ${color.purple};
  }
`;

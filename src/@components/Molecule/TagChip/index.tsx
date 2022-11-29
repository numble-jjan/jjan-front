import React from 'react';
import styled from 'styled-components';

import { Chip, Typography, Image } from '@/@components';
import { badge, img } from '@/styles/theme';

interface Props {
  text: string;
  onClickDelete?: () => void;
  expanded?: boolean;
}

const TagChip = ({ text, expanded, onClickDelete }: Props) => {
  return (
    <Container style={badge.gray}>
      <Typography>#{text}</Typography>
      {expanded && (
        <Image
          src="icons/icon-cancel.svg"
          alt="취소"
          style={img.innerTagCircle}
          onClick={onClickDelete}
        />
      )}
    </Container>
  );
};
export default TagChip;

const Container = styled(Chip)`
  & > img {
    margin-left: 4px;
    cursor: pointer;
  }
`;

import React from 'react';
import styled from 'styled-components';

import { Chip, Typography, CancelIcon } from '@/@components';
import { badge } from '@/styles/theme';

interface Props {
  text: string;
  onClickDelete: () => void;
  expanded?: boolean;
}

const TagChip = ({ text, expanded, onClickDelete }: Props) => {
  return (
    <Container style={badge.gray}>
      <Typography>#{text}</Typography>
      {expanded && <CancelIcon onClickDelete={onClickDelete} />}
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

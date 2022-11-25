import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './index.styles';

interface Props {
  type: 'grumble' | 'drinkingMate';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  style?: CSSProperties;
}

const PostingButton = ({ type, top, bottom, left, right, style }: Props) => {
  return (
    <Styled.Root
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      style={style}
    >
      {type === 'grumble' ? (
        // 링크 주소는 페이지 나오면 수정
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="icons/icon-post-board.svg" />
        </Link>
      ) : (
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="icons/icon-post-board.svg" />
        </Link>
      )}
    </Styled.Root>
  );
};

export default PostingButton;

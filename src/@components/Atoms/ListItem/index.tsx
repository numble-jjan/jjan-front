import React from 'react';

interface Props {
  profileUrl: string;
  username: string;
  isAuthor: boolean;
  createdAt: string;
  likes: number;
  comments: number;
}

// todo
// 디자인 시안 나오면 스타일링

/* eslint-disable */
const ListItem = ({
  profileUrl,
  username,
  isAuthor,
  createdAt,
  likes,
  comments,
}: Props) => {
  return <div>index</div>;
};

export default ListItem;

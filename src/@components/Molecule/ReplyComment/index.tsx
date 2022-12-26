import React, { useState } from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';

interface Props {
  parentId: number;
}
interface List {
  id: number;
  comment: string;
  responseTo: number;
}

const ReplyComment = ({ parentId }: Props) => {
  const [childrenId, setChildrenId] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<List[]>([]);
  const [display, setDisplay] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: childrenId,
      comment,
      responseTo: parentId,
    };
    setComments([...comments, data]);
    setChildrenId(childrenId + 1);
    setComment('');
  };

  return (
    <>
      <Typography
        color={color.gray}
        fontSize={font.size.s}
        fontWeight={font.weight.bold}
        style={{
          lineHeight: '17px',
          letterSpacing: '-0.35px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        답글달기
      </Typography>
      {comments.map(comment => (
        <div key={comment.id} style={{ marginLeft: '10%' }}>
          <Typography
            color={color.black}
            fontSize={font.size.m}
            fontWeight={font.weight.medium}
            style={{ lineHeight: '19px', letterSpacing: '-0.3px' }}
            onClick={() => {
              setDisplay(!display);
            }}
          >
            {comment.comment}
          </Typography>
        </div>
      ))}
      {display && (
        <div>
          <form onSubmit={onSubmit}>
            <input
              onChange={e => {
                setComment(e.target.value);
              }}
              placeholder="답글 달기"
              value={comment}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default ReplyComment;

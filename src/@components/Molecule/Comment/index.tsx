import React, { useState } from 'react';
import { ReplyComment } from '@/@components';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';

interface List {
  id: number;
  comment: string;
  responseTo: string;
}

const Comment = () => {
  const [id, setId] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<List[]>([]);
  const [isVaild, setIsVaild] = useState<boolean>(false);

  const addComment = () => {
    const data = {
      id,
      comment,
      responseTo: 'root',
    };
    setComments([...comments, data]);
    setId(id + 1);
    setComment('');
    setIsVaild(false);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <>
      {comments.map((item: List) => {
        return (
          <div key={item.id}>
            <Typography
              color={color.black}
              fontSize={font.size.m}
              fontWeight={font.weight.bold}
              style={{ lineHeight: '19px', letterSpacing: '-0.3px' }}
            >
              {item.comment}
            </Typography>
            <ReplyComment parentId={item.id} />
          </div>
        );
      })}
      <form>
        <input
          value={comment}
          type={'text'}
          placeholder="댓글 달기"
          onChange={e => {
            e.target.value.length > 0 ? setIsVaild(true) : setIsVaild(false);
            setComment(e.target.value);
          }}
        />
        <button
          onClick={addComment}
          onKeyPress={handleOnKeyPress}
          disabled={isVaild ? false : true}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default Comment;

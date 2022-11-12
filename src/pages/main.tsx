import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../@components';
import { Typography } from '../@components';

const Main = () => {
  return (
    <>
      <Typography color={'black'} fontSize={1.5}>
        메인
      </Typography>
      <Link to="/">
        <Button backgroundColor={'white'} color={'black'} borderColor={'gray'}>
          시작하기
        </Button>
      </Link>
    </>
  );
};

export default Main;

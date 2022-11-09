import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/components';
import { Typo } from '../shared/components';

const Main = () => {
  return (
    <>
      <Typo color={'black'} fontSize={1.5}>
        메인
      </Typo>
      <Link to="/">
        <Button backgroundColor={'white'} color={'black'} borderColor={'gray'}>
          시작하기
        </Button>
      </Link>
    </>
  );
};
export default Main;

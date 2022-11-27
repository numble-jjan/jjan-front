import React from 'react';
import ReactDOM from 'react-dom';

import { Backdrop } from '@/@components';

interface Props {
  children: JSX.Element;
}

const ModalPortal = ({ children }: Props) => {
  const $backdrop = document.getElementById('backdrop') as HTMLElement;
  const $modal = document.getElementById('modal') as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, $backdrop)}
      {ReactDOM.createPortal(children, $modal)}
    </>
  );
};

export default ModalPortal;

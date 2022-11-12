import React from 'react';
import ReactDOM from 'react-dom';

import { Backdrop } from '../index';

interface Props {
  children: JSX.Element;
}

const ModalPortal = ({ children }: Props) => {
  const $backdrop = document.getElementById('backdrop');
  if (!$backdrop) throw new Error('no backdrop');

  const $modal = document.getElementById('modal');
  if (!$modal) throw new Error('no modal');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, $backdrop)}
      {ReactDOM.createPortal(children, $modal)}
    </>
  );
};

export default ModalPortal;

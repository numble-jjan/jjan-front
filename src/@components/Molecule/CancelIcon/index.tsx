import React from 'react';
import { Image } from '@/@components';
import { img } from '@/styles/theme';

interface Props {
  onClickDelete: () => void;
}

const CancelIcon = ({ onClickDelete }: Props) => {
  return (
    <Image
      src="icons/icon-cancel.svg"
      alt="취소"
      style={img.innerTagCircle}
      onClick={onClickDelete}
    />
  );
};
export default CancelIcon;

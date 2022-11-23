import React, { CSSProperties } from 'react';

interface Props {
  onChange?: () => void;
  style: CSSProperties;
}

const Textarea = ({ style, onChange }: Props) => {
  return <textarea style={style} onChange={onChange}></textarea>;
};
export default Textarea;

import React, { CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Image = ({ src, alt, style, onClick }: Props) => {
  return <img src={src} alt={alt} style={style} onClick={onClick} />;
};
export default Image;

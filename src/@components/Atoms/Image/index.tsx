import React, { CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  style: CSSProperties;
}

const Image = ({ src, alt, style }: Props) => {
  return <img src={src} alt={alt} style={style} />;
};
export default Image;

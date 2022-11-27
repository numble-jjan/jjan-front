import React from 'react';

const Image = ({ src, style }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} style={style}></img>;
};
export default Image;

/**
 * todo
 * Image를 합성 컴포넌트 단위로 분리했을 때의 이점이 무엇인지 생각해 볼 것.
 * 과연 그냥 차례대로 대입하는 것과 무슨 차이가 있을까?
 * 왜냐하면 현재 이미지가 각기 다른 형태로 받아들여지기 때문에,
 * 컴포넌트의 위치를 변경을 편리하게 하는 것 이상으로 추가적인 스타일링이 필요로 하기 때문이다.
 */

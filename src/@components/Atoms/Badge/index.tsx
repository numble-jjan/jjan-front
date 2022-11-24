import React, { CSSProperties, PropsWithChildren } from 'react';
import Typography from '../Typography';

interface Props extends PropsWithChildren {
  style: CSSProperties;
}

const Badge = ({ style, children }: Props) => {
  const { fontSize, fontWeight } = style;
  return (
    <div style={style}>
      <Typography fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Typography>
    </div>
  );
};
export default Badge;

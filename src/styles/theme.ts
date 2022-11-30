import type { CSSProperties } from 'react';

export const color = {
  purple: '#683CED',
  light_purple: '#925CE9',
  orange: '#F58229',
  light_gray1: '#DDDDDD',
  light_gray2: '#EEEEEE',
  light_gray3: '#F9F9F9',
  gray: '#666666',
  dark_gray: '#999999',
  black: '#000000',
  white: '#FFFFFF',
};

export const btn1 = {
  backgroundColor: `${color.purple}`,
  border: '1px solid',
  borderColor: `${color.purple}`,
  height: '50px',
};

export const btn2 = {
  backgroundColor: `${color.purple}`,
  height: '40px',
};

export const btn3 = {
  backgroundColor: `${color.white}`,
  border: '1px solid',
  borderColor: `${color.purple}`,
  height: '50px',
};

export const btn4 = {
  backgroundColor: `${color.white}`,
  border: '1px solid',
  borderColor: `${color.purple}`,
  height: '40px',
};

export const btn5 = {
  backgroundColor: 'rgba(104, 60, 237, 0.3)',
  height: '50px',
};

export const btn6 = {
  backgroundColor: 'rgba(104, 60, 237, 0.3)',
  height: '40px',
};

export const btn7 = {
  backgroundColor: `${color.dark_gray}`,
  height: '27px',
};

export const btn8 = {
  backgroundColor: `${color.white}`,
  border: '1px solid',
  borderColor: `${color.light_gray1}`,
  height: '50px',
};

export const btn9 = {
  border: '1px solid',
  borderColor: 'rgba(104, 60, 237, 0.3)',
  height: '50px',
};

export const btn10 = {
  backgroundColor: `${color.white}`,
  border: '1px solid',
  borderColor: `${color.purple}`,
  filter: 'drop-shadow(0px 10px 20px rgba(104, 60, 237, 0.16))',
};

export const btn_board_active = {
  backgroundColor: 'transparent',
  height: '50px',
  borderBottom: `1px solid ${color.purple}`,
};

export const btn_board_inactive = {
  backgroundColor: 'transparent',
  height: '50px',
};

export const font = {
  size: {
    menubar: '10px',
    xs: '11px',
    s: '12px',
    m: '13px',
    content: '14px',
    title: '16px',
    header: '18px',
  },
  weight: {
    light: '100',
    regular: 'normal',
    medium: '500',
    bold: 'bold',
  },
};

export const typo1 = {
  size: '10px',
  weight: '400',
};

export const typo2 = {
  size: '10px',
  weight: '700',
};

export const typo3 = {
  size: '11px',
  weight: '400',
};

export const typo4 = {
  size: '11px',
  weight: '700',
};

export const typo5 = {
  size: '12px',
  weight: '400',
};

export const typo6 = {
  size: '12px',
  weight: '700',
};

export const typo7 = {
  size: '13px',
  weight: '400',
};

export const typo8 = {
  size: '13px',
  weight: '700',
};

export const typo9 = {
  size: '14px',
  weight: '400',
};

export const typo10 = {
  size: '14px',
  weight: '700',
};

export const typo11 = {
  size: '14px',
  weight: '900',
};

export const typo12 = {
  size: '16px',
  weight: '400',
};

export const typo13 = {
  size: '14px',
  weight: '700',
};

export const typo14 = {
  size: '18px',
  weight: '700',
};

type Img = {
  profileLarge: CSSProperties;
  porfileMedium: CSSProperties;
  smallCircle: CSSProperties;
  mediumCircle: CSSProperties;
};
export const img: Img = {
  profileLarge: {
    width: '75px',
    height: '75px',
  },
  porfileMedium: {
    width: '50px',
    height: '50px',
  },
  smallCircle: {
    width: '28px',
    height: '28px',
    backgroundColor: `${color.purple}`,
    backgroundPosition: 'center',
    borderRadius: '50%',
    backgroundSize: '1px',
    padding: '6px',
  },
  mediumCircle: {
    width: '50px',
    height: '50px',
    backgroundColor: `${color.purple}`,
    backgroundPosition: 'center',
    borderRadius: '50%',
    backgroundSize: '1px',
    padding: '6px',
  },
};

type Badge = {
  gray: CSSProperties;
  purple: CSSProperties;
  wrapper: CSSProperties;
};
export const badge: Badge = {
  gray: {
    border: `1px solid ${color.light_gray1}`,
    color: `${color.dark_gray}`,
    fontSize: `${font.size.s}`,
    fontWeight: `${font.weight.regular}`,
    height: '24px',
    borderRadius: '12px',
  },
  purple: {
    backgroundColor: `${color.purple}`,
    color: `${color.white}`,
    fontSize: `${font.size.s}`,
    fontWeight: `${font.weight.regular}`,
    height: '28px',
    borderRadius: '15px',
  },
  wrapper: {
    border: `1px solid ${color.light_gray1}`,
    color: `${color.black}`,
    fontSize: `${font.size.s}`,
    fontWeight: `${font.weight.regular}`,
    height: '32px',
  },
};

import { color } from '@/styles/theme';

export type Color = {
  [K in keyof typeof color]: string;
};

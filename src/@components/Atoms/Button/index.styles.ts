import styled, { css } from 'styled-components';
import { ButtonShape } from './index';

import Typography from '../Typography';

import { color, font } from '@/styles/theme';

export const Root = styled.button<{ shape: ButtonShape; height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;

  border: none;

  height: ${({ height }) => height};
  ${props => {
    switch (props.shape) {
      case 'gray': {
        return css`
          background-color: ${color.dark_gray};
        `;
      }
      case 'whiteWithGray': {
        return css`
          background-color: ${color.white};
          border: 1px solid ${color.light_gray1};
        `;
      }
      case 'whiteWithPurple': {
        return css`
          background-color: ${color.white};
          border: 1px solid ${color.purple};
        `;
      }
      default: {
        return css`
          background-color: ${color.purple};

          &:disabled {
            background-color: rgba(104, 60, 237, 0.3);
          }
        `;
      }
    }
  }}
`;

export const OverridenTypo = styled(Typography)<{ shape: ButtonShape }>`
  ${props => {
    switch (props.shape) {
      case 'gray': {
        return css`
          color: ${color.white};
          font-weight: ${font.weight.bold};
        `;
      }
      case 'whiteWithGray': {
        return css`
          color: ${color.dark_gray};
          font-weight: ${font.weight.bold};
        `;
      }
      case 'whiteWithPurple': {
        return css`
          color: ${color.purple};
          font-weight: ${font.weight.bold};
        `;
      }
      default: {
        return css`
          color: ${color.white};
          font-weight: ${font.weight.bold};
        `;
      }
    }
  }}
`;

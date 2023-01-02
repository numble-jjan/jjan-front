import styled, { css } from 'styled-components';

import { color, font } from '@/styles/theme';
import { InputShape } from './index';

export const Root = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${font.size.m};
  font-weight: ${font.weight.regular};
  line-height: 19px;
  letter-spacing: -0.325px;
  border: none;
  color: ${color.black};

  &::placeholder {
    color: ${color.dark_gray};
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }
`;

interface ContainerProps {
  isValid?: boolean;
  shape: InputShape;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  padding: 12px 8px;

  ${props => {
    switch (props.shape) {
      case 'bottomLine': {
        return css`
          border: none;
          border-bottom: 1px solid ${color.light_gray1};
        `;
      }
      default: {
        return css`
          border: 1px solid ${props.isValid ? color.light_gray1 : color.orange};
        `;
      }
    }
  }}
`;

export const RightImage = styled.img`
  margin-left: 4px;
`;
export const LeftImage = styled.img`
  margin-right: 4px;
`;

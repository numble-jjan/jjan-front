import styled from 'styled-components';

import { color, font } from '@/styles/theme';

export const Root = styled.input`
  width: 100%;
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

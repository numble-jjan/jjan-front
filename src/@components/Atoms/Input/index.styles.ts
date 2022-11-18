import styled from 'styled-components';

import color from '@/styles/constants/color';

export const StyledInput = styled.input<{ isValid?: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${color.white};
  border: 1px solid
    ${props => (props.isValid ? color.light_gray1 : color.orange)};
  box-sizing: border-box;
  padding: 12px 8px;

  // font 관련 스타일링 밖에서 주입할 예정
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.325px;
  color: ${color.black};

  &::placeholder {
    color: ${color.dark_gray};
  }

  &:focus {
    outline: none;
    // ${props => (props.isValid ? 'none' : '')};
  }
`;

import React from 'react';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';
import * as Styled from './index.styles';

interface Props {
  type?: 'logout' | 'withdraw';
}

const ExitModal = ({ type }: Props) => {
  return (
    <Styled.Container>
      <Styled.MessageBox>
        {type === 'logout' ? (
          <Styled.LogoutWrapper>
            <Typography
              color={color.white}
              fontSize={font.size.content}
              fontWeight={font.weight.regular}
            >
              로그아웃 되었습니다.
            </Typography>
          </Styled.LogoutWrapper>
        ) : (
          <Styled.WithdrawWrapper>
            <Typography
              color={color.white}
              fontSize={font.size.content}
              fontWeight={font.weight.regular}
            >
              탈퇴 처리가 완료되었습니다.
            </Typography>
          </Styled.WithdrawWrapper>
        )}
      </Styled.MessageBox>
    </Styled.Container>
  );
};
export default ExitModal;

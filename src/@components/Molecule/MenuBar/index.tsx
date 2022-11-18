import React from 'react';
import * as Styled from './index.styles';
import { Typography } from '@/@components';
import { color, font } from '@/styles/theme';

// 페이지 이동 이벤트는 나중에 추가

const MenuBar = () => {
  return (
    <Styled.Root>
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <img src="icons/icon-profile.svg" />
          <Typography
            color={color.black}
            fontSize={font.size.menubar}
            fontWeight={font.weight.medium}
          >
            프로필
          </Typography>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <img src="icons/icon-location.svg" />
          <Typography
            color={color.black}
            fontSize={font.size.menubar}
            fontWeight={font.weight.medium}
          >
            추천술집
          </Typography>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <img src="icons/icon-home.svg" />
          <Typography
            color={color.black}
            fontSize={font.size.menubar}
            fontWeight={font.weight.medium}
          >
            홈
          </Typography>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <img src="icons/icon-information.svg" />
          <Typography
            color={color.black}
            fontSize={font.size.menubar}
            fontWeight={font.weight.medium}
          >
            술정보
          </Typography>
        </Styled.IconContainer>
      </Styled.IconsContainer>
      <Styled.CommunityIconWrapper>
        <img src="icons/icon-community.svg" />
        <Typography
          color={color.white}
          fontSize={font.size.menubar}
          fontWeight={font.weight.regular}
        >
          커뮤니티
        </Typography>
      </Styled.CommunityIconWrapper>
    </Styled.Root>
  );
};

export default MenuBar;

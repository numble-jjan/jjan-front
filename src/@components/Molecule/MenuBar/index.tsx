import React, { useState } from 'react';
import * as Styled from './index.styles';
import { Typography, MenuBarIcon } from '@/@components';
import { color, font } from '@/styles/theme';

// 페이지 이동 이벤트는 나중에 추가

const MenuBar = () => {
  const [currentPage, SetCurrentPage] = useState<string>('홈');
  SetCurrentPage;
  return (
    <Styled.Root>
      <Styled.IconsContainer>
        <MenuBarIcon
          src={
            currentPage === '프로필'
              ? 'icons/icon-selected-profile.svg'
              : 'icons/icon-profile.svg'
          }
          menuTitle={'프로필'}
          isSelected={currentPage === '프로필'}
        />
        <MenuBarIcon
          src={
            currentPage === '추천술집'
              ? 'icons/icon-selected-location.svg'
              : 'icons/icon-location.svg'
          }
          menuTitle={'추천술집'}
          isSelected={currentPage === '추천술집'}
        />
        <MenuBarIcon
          src={
            currentPage === '홈'
              ? 'icons/icon-selected-home.svg'
              : 'icons/icon-home.svg'
          }
          menuTitle={'홈'}
          isSelected={currentPage === '홈'}
        />
        <MenuBarIcon
          src={
            currentPage === '술정보'
              ? 'icons/icon-selected-information.svg'
              : 'icons/icon-information.svg'
          }
          menuTitle={'술정보'}
          isSelected={currentPage === '술정보'}
        />
      </Styled.IconsContainer>
      <Styled.CommunityIconWrapper>
        <img
          src={
            currentPage === '커뮤니티'
              ? 'icons/icon-selected-community.svg'
              : 'icons/icon-community.svg'
          }
        />
        <Typography
          color={color.white}
          fontSize={font.size.menubar}
          fontWeight={
            currentPage === '커뮤니티' ? font.weight.bold : font.weight.regular
          }
        >
          커뮤니티
        </Typography>
      </Styled.CommunityIconWrapper>
    </Styled.Root>
  );
};

export default MenuBar;

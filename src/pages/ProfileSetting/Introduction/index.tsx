import React from 'react';
import { TitleWithImage, ProfileIcon } from '@/@components';

const Introduction = () => {
  return (
    <TitleWithImage>
      <TitleWithImage.Title>내 주변 술친구를 마주할</TitleWithImage.Title>
      <TitleWithImage.Title>
        <TitleWithImage.Emphasis>프로필을 등록</TitleWithImage.Emphasis>
        해주세요.
      </TitleWithImage.Title>
      <ProfileIcon extended={true} />
    </TitleWithImage>
  );
};
export default Introduction;

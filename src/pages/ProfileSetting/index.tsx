import React from 'react';
import styled from 'styled-components';

import Introduction from './Introduction';
import Buttons from './Buttons';
import { HeaderCompound } from '@/@components/Molecule/Header';

const ProfileSetting = () => {
  return (
    <div>
      <HeaderCompound>
        <HeaderCompound.Previous />
        <HeaderCompound.Title>프로필 설정</HeaderCompound.Title>
      </HeaderCompound>
      <Content>
        <Introduction />
        {/** Input이 들어가는 자리 */}
        <Buttons />
      </Content>
    </div>
  );
};
export default ProfileSetting;

const Content = styled.div`
  padding: 16px;
`;

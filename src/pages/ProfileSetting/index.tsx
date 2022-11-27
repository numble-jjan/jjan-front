import React from 'react';
import styled from 'styled-components';

import { Header } from '@/@components';
import Introduction from './Introduction';
import Buttons from './Buttons';

const ProfileSetting = () => {
  return (
    <div>
      <Header title="프로필 설정" />
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

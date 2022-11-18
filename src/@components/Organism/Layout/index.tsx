import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '../../Molecule/Header';

interface Props extends PropsWithChildren {
  headerTitle: string;
  onClickPrev: () => void;
}

const Layout = ({ headerTitle, onClickPrev, children }: Props) => {
  return (
    <div>
      <Header title={headerTitle} onClickPrev={onClickPrev} />
      <Content>{children}</Content>
    </div>
  );
};
export default Layout;

const Content = styled.div`
  padding: 16px;
`;

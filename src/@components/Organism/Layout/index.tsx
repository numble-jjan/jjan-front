import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header } from '@/@components';

interface Props extends PropsWithChildren {
  headerTitle: string;
}

const Layout = ({ headerTitle, children }: Props) => {
  return (
    <div>
      <Header title={headerTitle} />
      <Content>{children}</Content>
    </div>
  );
};
export default Layout;

const Content = styled.div`
  padding: 16px;
`;

import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any;
  style?: any;
};

const Title = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  width: 90%;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const TitleBar: React.FC<Props> = ({ children, style }) => {
  return <Title style={style}>{children}</Title>;
};

export default TitleBar;

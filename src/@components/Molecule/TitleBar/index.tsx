import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  type?: 'default' | 'essential';
};

const Root = styled.div`
  width: 90%;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
`;

const Essential = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
  display: inline-block;
  float: right;
`;

const TitleBar: React.FC<Props> = ({ children, type }) => {
  return type === 'essential' ? (
    <Root>
      <Title>{children}</Title>
      <Essential>필수사항</Essential>
    </Root>
  ) : (
    <Root>
      <Title>{children}</Title>
    </Root>
  );
};

export default TitleBar;

import React, { ReactNode } from 'react';

import * as Styled from './index.styles';

interface Props {
  image: ReactNode;
  title: ReactNode;
  subTitle: ReactNode;
}

const index = ({ image, title, subTitle }: Props) => {
  return (
    <Styled.Container>
      {image}
      <Styled.TitleContainer>
        {title}
        {subTitle}
      </Styled.TitleContainer>
    </Styled.Container>
  );
};

export default index;

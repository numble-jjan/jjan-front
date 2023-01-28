import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//cyclic dependency를 방지하기 위해서 아래와 같이 import
import { CategoryBar } from '@/@components';

export default {
  title: 'Molecule/CategoryBar',
  component: CategoryBar,
} as ComponentMeta<typeof CategoryBar>;

const Template: ComponentStory<typeof CategoryBar> = args => (
  <CategoryBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

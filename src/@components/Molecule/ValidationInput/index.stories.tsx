import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//cyclic dependency를 방지하기 위해서 아래와 같이 import
import { ValidationInput } from '@/@components';

export default {
  title: 'Molecule/ValidationInput',
  component: ValidationInput,
} as ComponentMeta<typeof ValidationInput>;

const Template: ComponentStory<typeof ValidationInput> = args => (
  <ValidationInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

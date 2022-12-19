import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    shape: {
      control: 'radio',
      options: ['border', 'bottomLine'],
    },
    isValid: {
      control: 'boolean',
    },
    // left: {
    //   control: 'radio',
    //   options: ['name1', 'name2'],
    // },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  isValid: true,
  placeholder: 'Placeholder',
};

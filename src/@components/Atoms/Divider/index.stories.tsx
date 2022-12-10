import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Divider from './index';

import { color } from '@/styles/theme';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    color: { control: 'select', options: Object.values(color) },
  },
} as ComponentMeta<typeof Divider>;

/* eslint-disable*/
const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Default = Template.bind({});

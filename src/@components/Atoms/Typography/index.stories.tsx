import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './index';

import { color } from '@/styles/theme';

export default {
  title: 'Atoms/Button',
  component: Typography,
  argTypes: {
    color: { control: 'select', options: Object.values(color) },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);

export const Default = Template.bind({});

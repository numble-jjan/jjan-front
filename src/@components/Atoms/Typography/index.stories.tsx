import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './index';

import { color, font } from '@/styles/theme';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'select', options: Object.values(color) },
    fontSize: { control: 'select', options: Object.values(font.size) },
    fontWeight: { control: 'select', options: Object.values(font.weight) },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

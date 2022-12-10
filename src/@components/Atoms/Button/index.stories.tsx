import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

import { color } from '@/styles/theme';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'select', options: Object.values(color) },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

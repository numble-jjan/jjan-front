import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

import { LOCATION, SEARCH } from '@/constants/icons';

const icons = { Empty: null, LOCATION, SEARCH };

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
    left: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          LOCATION: 'Location',
          SEARCH: 'Search',
        },
      },
    },
    right: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          LOCATION: 'Location',
          SEARCH: 'Search',
        },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  isValid: true,
  placeholder: 'Placeholder',
};

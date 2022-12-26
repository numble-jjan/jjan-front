import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LocationSetting from './index';
import { BrowserRouter } from 'react-router-dom';

// import { color, font } from '@/styles/theme';

export default {
  title: 'pages/LocationSetting',
  component: LocationSetting,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof LocationSetting>;

const Template: ComponentStory<typeof LocationSetting> = () => (
  <LocationSetting />
);

export const Default = Template.bind({});

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignUp from './index';

export default {
  title: 'pages/SignUp',
  component: SignUp,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = () => <SignUp />;

export const Default = Template.bind({});

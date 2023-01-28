import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchInput } from '@/@components';

export default {
  title: 'Molecule/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});

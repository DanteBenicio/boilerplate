import { ArgTypes } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-7-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Basic = (args: ArgTypes) => <Main {...args} />;

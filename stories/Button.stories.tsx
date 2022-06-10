import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import { Variant } from '../src/types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  onClick: undefined,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
  variant: Variant.Primary,
  onClick: undefined,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  variant: Variant.Secondary,
  onClick: undefined,
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger button',
  variant: Variant.Danger,
  onClick: undefined,
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success button',
  variant: Variant.Success,
  onClick: undefined,
};

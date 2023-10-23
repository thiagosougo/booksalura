import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbEmail, InputTextProps } from '../src'

export default {
  title: 'componentes/AbCampoTexto',
  component: AbEmail,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbEmail>;

const Template: ComponentStory<typeof AbEmail> = (args) => <AbEmail {...args} />;

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
    label: 'E-mail field',
} as InputTextProps
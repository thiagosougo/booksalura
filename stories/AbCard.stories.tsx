import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Card } from '../src'

export default {
  title: 'componentes/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
    return (<Card>
        <h1>This is a card</h1>
    </Card>)
}
import React from "react";
import { AbOptionsGroup } from "../src";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbOptionsGroup',
    component: AbOptionsGroup
} as ComponentMeta<typeof AbOptionsGroup>;

const Template: ComponentStory<typeof AbOptionsGroup> = (args) => <AbOptionsGroup {...args} />;

export const Default = Template.bind({}); 

Default.args = {
    options: [
        {
            id: 1,
            title: "E-book",
            body: "R$ 00,00",
            footer: ".pdf, .epub, .mob"
        },
        {
            id: 2,
            title: "Impresso",
            body: "R$ 00,00",
            footer: ".pdf, .epub, .mob"
        },
        {
            id: 3,
            title: "E-book + Impresso",
            body: "R$ 00,00",
            footer: ".pdf, .epub, .mob"
        }
    ]
} 


import React from 'react';
import { storiesOf, addDecorator } from "@storybook/react";
import Example from '../src/components/example';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


storiesOf('Mi Ejemplo', module)
    .add('with text',
        () =>(
        <Example name={text("name", "Edward")}></Example>
    ))
    .add('with number', () => (
        <Example name="123"></Example>
    ))
    .add('with symbols', () => (
        <Example name="!!!"></Example>
    ));


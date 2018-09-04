import React from 'react';
import { storiesOf, addDecorator } from "@storybook/react";
import Example from '../src/components/example';
import { withInfo } from '@storybook/addon-info';
import { text, array, number, object } from '@storybook/addon-knobs/react';
import ApplicantCard from '../src/components/applicantCard/ApplicantCard'
import ProcessGraphic from '../src/components/processGraphic/ProcessGraphic'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf('Mi Ejemplo', module)
    .add('with text',
        () => (
            <Example name={text("name", "Edward")}></Example>
        ))
    .add('with number', () => ( 
        <Example name="123"></Example>
    ))
    .add('with symbols', () => (
        <Example name="!!!"></Example>
    ));


storiesOf('ProcessGraphic', module)
    .add('New', () => (
        <ProcessGraphic stages={object("stages",[{id: 1, status:'ns', type: 'Phone Call'},{id: 2,status:'ns', type: 'Interview'},{id: 3,status:'ns', type: 'Test'}])} lineSize={number("lineSize",100)} circleSize={number("circleSize", 100)}></ProcessGraphic>
    ))
    .add('Scheduled stage', () => (
        <ProcessGraphic stages={object("stages",[{id: 1, status:'s', type: 'Phone Call'},{id: 2,status:'ns', type: 'Interview'},{id: 3,status:'ns', type: 'Test'}])} lineSize={number("lineSize",100)} circleSize={number("circleSize", 100)}></ProcessGraphic>
     ))
    .add('Approved stage', () => (
        <ProcessGraphic stages={object("stages",[{id: 1, status:'a', type: 'Phone Call'},{id: 2,status:'ns', type: 'Interview'},{id: 3,status:'ns', type: 'Test'}])} lineSize={number("lineSize",100)} circleSize={number("circleSize", 100)}></ProcessGraphic>
    ))
    .add('Failed stage', () => (
        <ProcessGraphic stages={object("stages",[{id: 1, status:'a', type: 'Phone Call'},{id: 2,status:'f', type: 'Interview'},{id: 3,status:'ns', type: 'Test'}])} lineSize={number("lineSize",100)} circleSize={number("circleSize", 100)}></ProcessGraphic>
    ));

storiesOf('ApplicantCard', module)
    .add('New', () => (
        <ApplicantCard stages={object("stages",[{id: 1, status:'ns', type: 'Phone Call'},{id: 2,status:'ns', type: 'Interview'},{id: 3,status:'ns', type: 'Test'}])} name={text("name", "Edward Rodriguez")}></ApplicantCard>
    ))
    .add('Scheduled stage', () => (
        <ApplicantCard></ApplicantCard>
    ))
    .add('Approved stage', () => (
        <ApplicantCard></ApplicantCard>
    ))
    .add('Rejected stage', () => (
        <ApplicantCard></ApplicantCard>
    ));


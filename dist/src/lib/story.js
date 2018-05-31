import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
var data = {
    id: 'some_id',
    value: 'Some Value'
};
storiesOf('Component', module)
    .add('basic', function () { return (React.createElement(Component, { data: data },
    React.createElement("p", null, "I\u2019m a child"))); });

// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Component from './index'

const data = {
  id: 'some_id',
  value: 'Some Value'
}

storiesOf('Component', module)
  .add('basic', () => (
    <Component data={data}>
      <p>I’m a child</p>
    </Component>
  ))

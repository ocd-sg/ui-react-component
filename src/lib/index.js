// @flow
import React from 'react'
import type { Node, Element } from 'react'
import type { Data } from './types'

export type Props = {
  children: ?Node,
  data: Data
}

const Component = ({ children, data }: Props): Element<any> => (
  <div className='f6 pv2 ph2'>
    <h3 className='serif f4'>{data.id}: {data.value}</h3>
    {children}
  </div>
)

Component.defaultProps = {
  data: {
    id: null,
    value: null
  }
}

Component.displayName = 'Component'

export default Component

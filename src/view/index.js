// @flow
import {h} from 'hyperapp' // eslint-disable-line

import type {State} from '../state'
import styled from 'packages/styled-components'

const Title = styled('h1')`
  background: ${props => props.bg}
  color: white
  font-family: sans-serif
  padding: 5px 20px
`

export default (state: State) => (<Title bg='green'>{state.test}</Title>;)

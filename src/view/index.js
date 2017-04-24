// @flow
import { h } from 'hyperapp' // eslint-disable-line
import type { State } from '../state'

export default (state: State) => (
  <div>{state.test}</div>
)

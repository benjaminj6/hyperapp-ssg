// @flow
import { h } from 'hyperapp' // eslint-disable-line

import stringify from './stringify-html-node'
// $FlowFixMe: figure out how to stub/ignore all non-js imports
import template from './template.html'

import view from 'view'

const Title = () => <span>title</span>
const app = state => (
  <h1 id='foo' class={state.class}>
    <Title />
  </h1>
)

const html = app({ title: 'bleh' })
export default (data: {}) =>
  template({
    app: stringify(html),
    title: 'YAY!',
    ...data
  })

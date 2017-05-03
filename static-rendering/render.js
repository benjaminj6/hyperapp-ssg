// @flow
import {h} from 'hyperapp' // eslint-disable-line

import stringify from './stringify-html-node'
import template from './template.html'

const Title = () => <span>title</span>
const app = state => (
  <h1 id='foo' class={state.class}>
    <Title />
  </h1>
)

const html = app({class: 'bleh'})
export default (data: {}) =>
  template({
    app: stringify(html),
    title: 'YAY!',
    ...data
  })

// @flow
import { h } from 'hyperapp' // eslint-disable-line

import state from 'state'
import stringify from './stringify-html-node'
// $FlowFixMe: figure out how to stub/ignore all non-js imports
import template from './template.html'
import view from 'view'

import { renderer } from 'packages/styled-components'

// Renders html from the `view` dir with an initial state.
// No event listeners are attached as this is static html
const html = view(state)

// Function to be used by webpack-static-site-plugin
export default (data: {}) =>
  template({
    app: stringify(html),
    title: data.title || 'My app',
    css: renderer.renderToString(),
    ...data
  })

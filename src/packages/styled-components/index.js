import { h } from 'hyperapp' // eslint-disable-line
import { createRenderer } from 'fela'
import { render } from 'fela-dom'
import styled from 'react-styling'

// intialize renderer
const renderer = createRenderer()
const { renderRule } = renderer

// setup stylesheet render
const stylesheet = document.createElement('style')
document.head.appendChild(stylesheet)
render(renderer, stylesheet)

const testRule = () => styled`
  @media (min-width: 400px) {
    font-size: 20px
    background: red
  }

  background: green
  font-size: 14px
`

const ruleName = renderRule(testRule)
console.log(ruleName)

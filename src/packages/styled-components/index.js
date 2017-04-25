import { h } from 'hyperapp' // eslint-disable-line
import { createRenderer } from 'fela'
import { render } from 'fela-dom'
import css from 'react-styling'

// intialize renderer
const renderer = createRenderer()
const { renderRule } = renderer

// setup stylesheet render
const stylesheet = document.createElement('style')
document.head.appendChild(stylesheet)
render(renderer, stylesheet)

const evaluateInterpolation = (arg = '', props) => typeof arg === 'function' ? arg(props) : arg

const createCssRule = (props) => (strings, ...args) => {
  const template = strings.map((string, i) => string + evaluateInterpolation(args[i], props)).join('')
  return css`${template}`
}

const createRule = (props) => (
  strings,
  ...args
) => renderRule(
  () => createCssRule(props)(strings, ...args)
)

const createStyledComponent = (tagName) => (strings, ...args) => (props, children) => {
  const templ = createRule(props)
  const rule = templ(strings, ...args)
  console.log('RULE', rule)

  return h(
    tagName,
    { class: rule },
    ...children
  )
}

export default createStyledComponent

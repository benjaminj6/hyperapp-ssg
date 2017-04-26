import { h } from 'hyperapp' // eslint-disable-line
import css from 'react-styling'

import renderer from './render-stylesheet'

const { renderRule } = renderer

const evaluateInterpolation = (arg = '', props) => typeof arg === 'function' ? arg(props) : arg

const createCssRule = (props) => (strings, ...args) => {
  const template = strings.map((string, i) => string + evaluateInterpolation(args[i], props)).join('')
  return css`${template}`
}

const createRule = (props) => (
  strings,
  ...args
) => {
  console.log('createRule', createCssRule(props)(strings, ...args))
  return renderRule(
    () => createCssRule(props)(strings, ...args)
  )
}

export const createStyled = (TagName) => (strings, ...args) => (props, children) => {
  const templ = createRule(props)
  let rule = templ(strings, ...args)

  if (typeof TagName === 'function') {
    const Element = h(TagName, { ...props }, ...children)
    Element.data.class = `${Element.data.class} ${rule}`

    return Element
  }

  return h(
    TagName,
    { class: rule },
    ...children
  )
}

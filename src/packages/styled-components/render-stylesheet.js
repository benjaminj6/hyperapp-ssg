import {h} from 'hyperapp' // eslint-disable-line
import {createRenderer} from 'fela'
import {render} from 'fela-dom'

// intialize renderer
const renderer = createRenderer()

// setup stylesheet render
const stylesheet = document.createElement('style')
document.head.appendChild(stylesheet)
render(renderer, stylesheet)

// export renderRule, which attaches rules to the renerer instance
export default renderer

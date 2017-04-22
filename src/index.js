import { app } from 'hyperapp'

import state from './state'
import view from './view'

export default app({
  state,
  view,
  root: document.getElementById('root')
})

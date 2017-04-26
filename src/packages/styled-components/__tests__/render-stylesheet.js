import test from 'ava'

import renderer from '../render-stylesheet'

test.afterEach.always(t => {
  renderer.clear()
})

test.serial('should return some classes', t => {
  const rule = renderer.renderRule(() => ({
    background: 'green',
    padding: '10px'
  }))

  console.log(rule)
})

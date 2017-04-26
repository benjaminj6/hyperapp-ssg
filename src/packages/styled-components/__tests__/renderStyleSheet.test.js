import test from 'ava'

import renderRule from '../renderStyleSheet'

test('should return some classes', t => {
  const rule = renderRule(() => ({
    background: 'green'
  }))

  console.log(rule)
})

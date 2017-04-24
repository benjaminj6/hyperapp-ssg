import test from 'ava'

import view from './index'

const mockState = {
  test: 'test'
}

test('should render without crashing', t => {
  view(mockState)
  t.pass()
})

test('should throw if `test` is not present in state', t => {
  t.throws(() => view())
})

test('should pass `state.test` to children', t => {
  const wrapper = view(mockState)
  t.is(wrapper.children[0], mockState.test)
})

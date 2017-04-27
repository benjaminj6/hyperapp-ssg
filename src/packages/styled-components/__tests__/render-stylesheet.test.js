import test from 'ava'

import renderer from '../render-stylesheet'

test.afterEach.always('clear renderer', t => {
  renderer.clear()
})

const defaultRenderRule = () => ({
  background: 'green',
  padding: '10px'
})

const testRule = (t, { rule, props }, fn) => {
  // Add helper props / methods to the t.context object
  t.context.rule = renderer.renderRule(rule, props)
  t.context.props = props
  t.context.renderedStyles = document.head.querySelector('style').innerHTML
  t.context.regexForClassName = name => new RegExp(`.${name}{`)
  t.context.ruleArray = t.context.rule.split(' ') // Array of the classNames in the rule

  fn(t)
}

const testDefaultRule = (t, fn) => testRule(t, { rule: defaultRenderRule }, fn)

test(
  'should return one class name per rule',
  testDefaultRule,
  t => t.is(t.context.ruleArray.length, 2)
)

test(
  'document should contain class names in the rule',
  testDefaultRule,
  t => {
    const { renderedStyles, ruleArray, regexForClassName } = t.context

    t.regex(renderedStyles, regexForClassName(ruleArray[0]))
  }
)

test(
  'should render the rule with props value when passed',
  testRule,
  { rule: props => ({ margin: props.size }), props: { size: '10px' } },
  t => {
    const { props, ruleArray, renderedStyles, regexForClassName } = t.context

    t.is(ruleArray.length, 1)
    t.regex(renderedStyles, regexForClassName(ruleArray[0]))
    t.regex(renderedStyles, new RegExp(props.size))
  }
)

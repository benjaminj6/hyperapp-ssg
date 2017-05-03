import test from 'ava'

import stringify from '../stringify-html-node'

const defaultHTMLNode = { tag: 'div', data: {}, children: [] }
const testHTMLNode = node => (t, fn) => {
  node = { ...defaultHTMLNode, ...node }
  t.context.node = node
  t.context.html = stringify(node)

  fn(t)
}

test(
  'should return an opening and closing html tag',
  testHTMLNode({ tag: 'h1' }),
  t => t.regex(t.context.html, /(<\/{0,1}h1>){2}/)
)

test(
  'should attach attributes passed via `data`',
  testHTMLNode({
    data: {
      class: 'test',
      id: 'test-id',
      href: 'http://test.com',
      custom: 'custom'
    }
  }),
  t => {
    const { html, node } = t.context

    t.regex(html, /class="test"/)
    t.regex(html, /id="test-id"/)
    t.regex(html, new RegExp(`href="${node.data.href}"`))
    t.regex(html, /custom="custom"/)
  }
)

test(
  'should not render closing tag on self-closing elements',
  testHTMLNode({ tag: 'br' }),
  t => t.notRegex(t.context.html, /<\/br>/)
)

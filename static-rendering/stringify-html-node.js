const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]

const stringify = ({ tag, data = {}, children }) => {
  const attrNames = Object.keys(data)
  const attrs = attrNames.map(attr => ` ${attr}="${data[attr]}"`).join('')

  const getChildren = children.map(child => {
    if (!child) return ''
    if (typeof child === 'string') return child
    return stringify(child)
  })

  if (selfClosingTags.includes(tag)) {
    return `<${tag + attrs} />`
  }

  return `
    <${tag + attrs}>${getChildren}</${tag}>
  `
}

export default stringify

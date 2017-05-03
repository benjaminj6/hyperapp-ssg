const stringify = ({tag, data = {}, children}) => {
  const attrNames = Object.keys(data)
  const attrs = attrNames.map(attr => ` ${attr}="${data[attr]}"`).join('')

  const getChildren = children.map(child => {
    if (!child) return ''
    if (typeof child === 'string') return child
    return stringify(child)
  })

  return `
    <${tag + attrs}>${getChildren}</${tag}>
  `
}

export default stringify

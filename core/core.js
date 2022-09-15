const makeProxy = (target, node) => {
  return new Proxy(target, {
    set(target, p, value) {
      node.innerText = value
      target[p] = value
      return true
    },
    get(target, p ) {
      return target[p]
    }
  })
}

const templator = (template) => {
  // <>

  const tree = {
    root: null
  }

  const symbols = template.split('')

  let temp = ''

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i]

    if (symbol !== '<' && i === 0) {
      throw {value: 'Invalid'}
    }

    temp += symbol

    if (symbol === '>' && i < 5) {
      const name = temp.replace('<', '').replace('>', '')
      tree.root = document.createElement(name)
      temp = ''
    }
  }


  return tree.root
}

export default {
  makeProxy,
  templator
}
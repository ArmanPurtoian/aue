let rootNode = undefined

function render (root, virtualDOM) {
  traverse(virtualDOM.children)
  root.innerHTML = rootNode.outerHTML
}

function traverse(tree, parentNode = undefined) {
  tree.forEach(node => {
    let currentNode = undefined

    if (node.tag) {
      currentNode = document.createElement(node.tag)
      if (!rootNode) {
        rootNode = currentNode
      }
    } else {
      parentNode.innerHTML = node
    }

    if (parentNode && currentNode) {
      parentNode.appendChild(currentNode)
    }

    if (node.children && node.children.length) {
      traverse(node.children, currentNode)
    }
  })
}

export default {
  render
}
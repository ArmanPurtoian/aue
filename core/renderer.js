let rootNode = undefined
let currentNode = undefined

function render (root, virtualDOM) {
  traverse(virtualDOM.children)
  root.innerHTML = rootNode.outerHTML
}

function traverse(tree, parentNode = undefined) {
  tree.forEach(node => {

    if (node.tag) {
      currentNode = document.createElement(node.tag)

      if (!rootNode) {
        rootNode = currentNode
      } else if (parentNode){
        parentNode.appendChild(currentNode)
      } else {
        rootNode.appendChild(currentNode)
      }

    } else {
      currentNode.innerHTML = node
    }


    if (node.children && node.children.length) {
      parentNode = currentNode
      traverse(node.children, parentNode)
    } else {
      parentNode = null
    }
  })
}

export default {
  render
}
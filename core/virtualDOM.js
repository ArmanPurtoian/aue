let cursor = 0
let currentText = '' // text inside tags e.g <div>123</div> -> 123
let currentTag = ''
let currentFunction = scanToken
const virtualDOM = {children: []}
const nodeStack = []
let currentNode = virtualDOM
let newNode

function createVirtualDOM (html) {
  for (; cursor < html.length; cursor++) {
    const token = html[cursor]
    currentFunction = currentFunction(token)
  }

  return virtualDOM
}

function scanToken(token) {
  if (token === '<') {

    if (currentText) {
      currentNode.children.push(currentText)
      currentText = ''
    }

    return parseTag
  }

  currentText += token
  return scanToken
}

function parseTag(token) {
  if (token === '/') {
    return parseCloseTag
  }

  cursor-- // return to tag first character
  return parseOpenTag
}

function parseOpenTag(token) {
  if (token === '>') {
    currentNode.children.push(newNode = {
      tag: currentTag,
      parentNode: currentNode,
      children: []
    })

    nodeStack.push(currentNode = newNode)

    currentTag = ''

    return scanToken
  }

  currentTag += token

  return parseOpenTag
}

function parseCloseTag(token) {
  if (token === '>') {
    currentTag = ''

    nodeStack.pop()

    currentNode = currentNode.parentNode

    return scanToken
  }

  currentTag += token
  return parseCloseTag
}

export default {
  createVirtualDOM
}
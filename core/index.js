import core from "./core";
import virtualDOM from "./virtualDOM";
import renderer from './renderer'

const template = `<div><h1>Some text</h1><hr></hr><p><span>Some body</span></p><div><h2>Other text</h2></div></div>`
const node = document.getElementById('root')

const vDOM = virtualDOM.createVirtualDOM(template)

renderer.render(node, vDOM)

// FirstComponent(core)
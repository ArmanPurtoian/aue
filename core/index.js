import core from "./core";
import TemplateEngine from "./virtualDOM";

const template = `<div><h1>Some text</h1><p>Some body</p></div>`

const tree = TemplateEngine.createVirtualDOM(template)
console.log(tree)

// FirstComponent(core)
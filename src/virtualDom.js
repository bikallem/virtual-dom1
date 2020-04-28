import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import createElement from 'virtual-dom/create-element';
import patch from 'virtual-dom/patch';

function textNode(count) {
  return h("div", {}, "hello world " + count + " !");
}

let count = 0;

let tree = textNode(count);
let rootNode = createElement(tree);
document.body.appendChild(rootNode);

setInterval(function () {
  count++;
  
  const newTree = textNode(count);
  const patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);

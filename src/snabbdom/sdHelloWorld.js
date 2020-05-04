import {init} from "snabbdom/snabbdom"
import h from "snabbdom/h"

const patch = init([                   // Init patch function with choosen modules
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
])

function view(currentDate) {
  return h('div', 'Current date' + currentDate)
}

let oldVNode = document.getElementById("root")

setInterval(() => {
  const newVnode = view(new Date())
  oldVNode = patch(oldVNode, newVnode)
}, 1000)
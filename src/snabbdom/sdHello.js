const snabbdom = require('snabbdom')
const h = require('snabbdom/h').default

const patch = snabbdom.init([
  require('snabbdom/modules/eventlisteners').default,
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default,
])

function view(name) {
  return h('div', {}, [
    h('input', {
      on: {input: update},
      props: {type: 'text', placeholder: 'Type your name'},
    }),
    h('hr'),
    h('div', 'Hello ' + name)
  ])
}

function update(event) {
  console.log("input changed.")
  const newVnode = view(event.target.value)
  oldVnode = patch(oldVnode, newVnode)
}

let oldVnode = document.getElementById('root')

oldVnode = patch(oldVnode, view(''))
export function h(nodeName, attributes, ...children) {
  return { nodeName, attributes, children }
}

export const renderComponent = (component) => {
  let rendered = component.render(component.props, component.state)
  component.base = patch(component.base, rendered)
}

/// Renders vdom to browser DOM
export function renderNode(vnode) {
  const { nodeName, attributes, children } = vnode

  if (vnode.split) return document.createTextNode(vnode)
  let el

  if (typeof nodeName === "string") {
    // e.g. 'div', 'h1', 'span', etc
    el = document.createElement(nodeName)
    for (const key in attributes) {
      el.setAttribute(key, attributes[key])
    }
  } else if (typeof nodeName === "function") {
    // ES6 class/function constructors.
    const component = new nodeName(attributes)
    el = renderNode(component.render(component.props, component.state))

    // Save DOM reference to `base` field as in `renderComponent`
    component.base = el
  }

  ;(children || []).forEach((child) => el.appendChild(renderNode(child)))

  return el
}

/// Diffs vdom with DOM and patches the diff.
/// Also known as update or sync function.
const patch = (dom, vnode, parent) => {
  if (dom) {
    if (typeof vnode === "string") {
      dom.nodeValue = vnode

      return dom
    }

    if (typeof vnode.nodeName === "function") {
      const component = new vnode.nodeName(vnode.attributes)
      const rendered = component.render(component.props, component.state)

      patch(dom, rendered)
      return dom
    }

    // Naive check for number of children of vNode and dom
    if (vnode.children.length !== dom.childNodes.length) {
      dom.appendChild(
        // render only the last child
        renderNode(vnode.children[vnode.children.length - 1])
      )
    }

    // run diffing for children
    for (let i = 0; i < vnode.children.length; i++) {
      patch(dom.childNodes[i], vnode.children[i])
    }

    return dom
  } else {
    const newDom = renderNode(vnode)
    parent.appendChild(newDom)
    return newDom
  }
}

export const render = (vNode, parent) => {
  patch(undefined, vNode, parent)
}

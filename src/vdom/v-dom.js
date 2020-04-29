export function hyperscript(nodeName, attributes, ...children) {
  return {nodeName, attributes, children};
}

export function renderNode(vnode) {
  const {nodeName, attributes, children} = vnode;
  
  if (vnode.split) return document.createTextNode(vnode);
  let el;
  
  if (typeof nodeName === 'string') {   // e.g. 'div', 'h1', 'span', etc
    el = document.createElement(nodeName);
    for (const key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  } else if (typeof nodeName === 'function') { // ES6 class for function contructors.
    const component = new nodeName(attributes);
    el = renderNode(component.render(component.props, component.state))
    
    // Save DOM reference to `base` field as in `renderComponent`
    component.base = el;
  }
  
  (children || []).forEach(child => el.appendChild(renderNode(child)));
  
  return el;
}

export const renderComponent = (component, parent) => {
  const oldBase = component.base;
  component.base = renderNode(component.render(component.props, component.state));
  
  if (parent) {
    parent.appendChild(component.base);
  } else {
    oldBase.parentNode.replaceChild(component.base, oldBase);
  }
}

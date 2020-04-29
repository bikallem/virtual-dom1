export default function renderNode(vnode) {
  const {nodeName, attributes, children} = vnode;
  
  if (vnode.split) return document.createTextNode(vnode);
  
  let el = document.createElement(nodeName);
  
  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  
  (children || []).forEach(c => el.appendChild(renderNode(c)));
  
  return el;
};
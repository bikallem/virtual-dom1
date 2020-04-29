const renderNode = vnode => {
  const {nodeName, attributes, children} = vnode;
  
  if (vnode.split) return document.createTextNode(vnode);
  
  let el = document.createElement(nodeName);
  
  Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
  
  (children || []).forEach(c => el.appendChild(renderNode(c)));
  
  return el;
};
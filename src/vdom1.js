function hyperscript(nodeName, attrs, ...children) {
  const $el = document.createElement(nodeName);
  
  for (let key in attrs) {
    $el.setAttribute(key, attrs[key]);
  }
  
  children.forEach(child => {
    if (typeof child == 'string') {
      $el.appendChild(document.createTextNode(child));
    } else {
      $el.appendChild(child);
    }
  });
  
  return $el;
}

const h = hyperscript;

const App = (props) => {
  const {list} = props;
  
  return h('div', {class: 'app'},
    h('h1', null, 'Simple vDOM'),
    h('ul', null,
      ...list.map(item => h('li', null, item))
    )
  );
};

let currentApp;
const render = (state) => {
  const newApp = App(state);
  currentApp
    ? document.body.replaceChild(newApp, currentApp)
    : document.body.appendChild(newApp);
  currentApp = newApp;
};

const state = {
  list: ['a', 'b', 'c']
};

render(state);


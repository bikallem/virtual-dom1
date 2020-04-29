import {hyperscript as h, renderComponent} from 'Vdom/v-dom'
import Component from "Vdom/component";

const getRandomItemFromArray = (list) => {
  return list[Math.round(Math.random() * (list.length - 1))];
};

class App extends Component {
  render() {
    return h('div', {class: 'app'},
      h('h1', null, 'Simple DOM'),
      h(People)
    )
  }
}

class People extends Component {
  constructor(props) {
    super(props);
    
    this.state = {list: ['🕺', '💃', '😀', '🙋‍', '💼', '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧']};
    
    this.timer = setInterval(() => {
      this.setState({
        list: [...this.state.list, getRandomItemFromArray(this.state.list)]
      });
    }, 1000);
  }
  
  render(props, state) {
    return h('ul', null,
      ...state.list.map(item => h('hi', null, item))
    );
  }
}

renderComponent(new App(), document.querySelector('#root'));
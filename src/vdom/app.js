import { h, render } from "Vdom/v-dom"
import Component from "Vdom/component"

class App extends Component {
  render() {
    return h(
      "div",
      { class: "app" },
      h("h1", null, "Simple DOM"),
      h(People)
    )
  }
}

const getRandomItemFromArray = (list) => {
  return list[
    Math.round(Math.random() * (list.length - 1))
  ]
}

class People extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        "🕺",
        "💃",
        "😀",
        "🙋‍",
        "💼",
        "🕶️️",
        "👏",
        "🤳",
        "🕵️",
        "👩‍🔧",
      ],
    }

    this.timer = setInterval(() => {
      this.setState({
        list: [
          ...this.state.list,
          getRandomItemFromArray(this.state.list),
        ],
      })
    }, 1000)
  }

  render(props, state) {
    return h(
      "ul",
      null,
      ...state.list.map((item) =>
        h("li", null, item)
      )
    )
  }
}

render(h(App), document.querySelector("#root"))

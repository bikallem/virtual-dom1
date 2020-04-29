import { renderComponent } from "Vdom/v-dom"

export default class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  setState(state) {
    this.state = Object.assign({}, state)
    renderComponent(this)
  }
}

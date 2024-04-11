import State from './State.js'
import {STATES} from '../Input.js'

export default class Released extends State {
  #input = null

  constructor(input) {
    super('Released')
    this.#input = input
  }

  enter() {
    super.enter()
    this.drawView()
  }

  handleCondition() {
    super.handleCondition()

    if (this.#input.data) {
      this.#input.setState(STATES.DOWN)
    }
  }

  drawView() {
    super.drawView(this.#input)
  }
}

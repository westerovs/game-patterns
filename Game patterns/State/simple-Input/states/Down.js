import State from './State.js'
import {INPUT_STATES} from '../Input.js'

export default class Down extends State {
  #input = null

  constructor(input) {
    super('Down')

    this.#input = input
  }

  enter(state) {
    super.enter(state)
  }

  update(state) {
    super.update(state)
    this.drawView()
  }

  handleCondition() {
    super.handleCondition()

    if (this.#input.data === null) {
      this.#input.setState(INPUT_STATES.UP)
    }
  }

  drawView() {
    super.drawView()

    this.#input
      .clear()
      .beginFill(0xFF0000, 0.3)
      .drawRect(0, 0, 1366, 1366)
      .endFill()
  }
}

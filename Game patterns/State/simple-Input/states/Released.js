import State from './State.js'
import {INPUT_STATES} from '../Input.js'

export default class Released extends State {
  #input = null

  constructor(input) {
    super('Released')

    this.#input = input
  }

  enter(state) {
    super.enter(state)
    this.drawView()
  }

  update(state) {
    super.update(state)
  }

  handleCondition() {
    super.handleCondition()

    if (this.#input.data) {
      this.#input.setState(INPUT_STATES.DOWN)
    }
  }

  drawView() {
    super.drawView()

    this.#input
      .clear()
      .beginFill(0x00ff00, 0.3)
      .drawRect(0, 0, 1366, 1366)
      .endFill()
  }
}

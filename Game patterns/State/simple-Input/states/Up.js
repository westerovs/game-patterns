import State from './State.js'
import {INPUT_STATES} from '../Input.js'

export default class Up extends State {
  #input = null

  constructor(input) {
    super('Up')

    this.#input = input
  }

  enter(state) {
    super.enter(state)
  }

  update(state) {
    super.update(state)
  }

  handleCondition() {
    super.handleCondition()
    this.#input.setState(INPUT_STATES.RELEASED)
  }
}

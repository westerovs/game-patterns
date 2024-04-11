import State from './State.js'
import {STATES} from '../Input.js'

export default class Up extends State {
  #input = null

  constructor(input) {
    super('Up')
    this.#input = input
  }

  handleCondition() {
    super.handleCondition()
    this.#input.setState(STATES.RELEASED)
  }
}


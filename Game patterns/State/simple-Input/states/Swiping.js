import State from './State.js'

export default class Swiping extends State {
  #input = null

  constructor(input) {
    super('Swiping')

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

  }
}

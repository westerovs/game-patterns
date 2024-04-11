import State from './State.js'
import {STATES} from '../Input.js'

export default class Down extends State {
  #input = null

  constructor(input) {
    super('Down')
    this.#input = input
  }

  enter() {
    super.enter()
    this.drawView()
    this.#input.startTouch = {...this.#input.data.global}
  }

  update() {
    super.update()
    this.#input.computeDirection()
  }

  handleCondition() {
    super.handleCondition()

    const {x, y} = this.#input.swipeDirection

    if (this.#input.data === null) {
      this.#input.setState(STATES.UP)
    }
    else if ((x !== 0 || y !== 0)) {
      if (x > 0) console.log('swipe right')
      if (x < 0) console.log('swipe left')
      if (y < 0) console.log('swipe top')
      if (y > 0) console.log('swipe bottom')
      this.#input.setState(STATES.SWIPING)
    }
  }



  drawView() {
    this.#input
      .beginFill(0xFF0000, 0.3)
      .drawRect(0, 0, 1366, 1366)
      .endFill()
  }
}

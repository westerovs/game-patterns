import {STATES} from '../Input.js'
import State from './State.js'

export default class SwipingState extends State {
  #input = null

  constructor(input) {
    super('SwipingState')
    this.#input = input
  }

  enter() {
    super.enter()
  }

  update() {
    super.update()
    this.drawView()
  }

  handleCondition() {
    super.handleCondition()

    if (!this.#input.data) {
      this.#input.setState(STATES.RELEASED)
    }
  }

  drawView() {
    super.drawView(this.#input)

    const width = 600
    const height = 100
    const {startTouch} = this.#input

    const {x, y} = this.#input.computeDirection()
    // console.log(x, y)

    this.#input
      .clear()
      .lineStyle(2, 0xff0000)
      .beginFill(0xffff00, 0.5)
      .drawRect(startTouch.x - (width / 2), startTouch.y - (height / 2), width, height) // горизонтальный
      .drawRect(startTouch.x - (height / 2), startTouch.y - (width / 2), height, width) // горизонтальный
      .endFill()
  }
}

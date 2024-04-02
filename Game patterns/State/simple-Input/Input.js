import {Graphics} from 'pixi.js-legacy'
import ReleasedState from './states/Released.js'
import DownState from './states/Down.js'
import SwipingState from './states/Swiping.js'
import UpState from './states/Up.js'

export const INPUT_STATES = {
  RELEASED: 0,
  DOWN: 1,
  SWIPING: 2,
  UP: 3,
}

export class Input extends Graphics {
  #states = [
    new ReleasedState(this),
    new DownState(this),
    new SwipingState(this),
    new UpState(this),
  ]
  #currentState = null
  data = null

  constructor() {
    super()

    this.interactive = true
    this.on('pointerdown', this.#handlePointerDown)
    this.on('pointerup', this.#handlePointerUp)

    this.setState(INPUT_STATES.RELEASED)
  }

  setState = (state) => {
    this.#currentState = this.#states[state]
    this.#currentState.enter()
  }

  update = () => {
    this.#currentState.handleCondition()
    this.#currentState.update()
  }

  #handlePointerDown = (e) => {
    this.data = e.data
    // console.log('handlePointerDown')
  }

  #handlePointerUp = () => {
    this.data = null
    // console.log('handlePointerUp')
  }
}



import {Graphics} from 'pixi.js-legacy'
import ReleasedState from './states/Released.js'
import DownState from './states/Down.js'
import SwipingState from './states/Swiping.js'
import UpState from './states/Up.js'

export const STATES = {
  RELEASED: 0,
  DOWN: 1,
  SWIPING: 2,
  UP: 3,
}

export default class Input extends Graphics {
  #game = window._game
  #refs = this.#game.refs
  #states = [
    new ReleasedState(this),
    new DownState(this),
    new SwipingState(this),
    new UpState(this),
  ]
  #currentState = null

  data = null
  startTouch = null
  swipeDirection = {x: 0, y: 0}

  constructor() {
    super()

    this.#refs.wrapper.addChild(this)
    this.interactive = true
    this.on('pointerdown', this.#handlePointerDown)
    this.on('pointerup', this.#handlePointerUp)
    this.on('pointerout', this.#handlePointerUp)
    this.on('pointerupoutside', this.#handlePointerUp)

    this.setState(STATES.RELEASED)
  }

  computeDirection() {
    const {data, startTouch, radius} = this
    const x = data.global.x - startTouch.x
    const y = data.global.y - startTouch.y

    this.swipeDirection = {
      x: Math.floor(x),
      y: Math.floor(y)
    }

    return this.swipeDirection
  }

  update = () => {
    this.#currentState.handleCondition()
    this.#currentState.update()
  }

  setState = (state) => {
    this.#currentState = this.#states[state]
    this.#currentState.enter()
  }

  #handlePointerDown = (e) => {
    this.data = e.data
  }

  #handlePointerUp = () => {
    this.data = null
  }
}



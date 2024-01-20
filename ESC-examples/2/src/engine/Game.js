const RESOLUTION_WIDTH = 400
const RESOLUTION_HEIGHT = 600
const SCALE_FACTOR = 4
// обратите внимание, что ENGINE_SPEED используется в setTimeout, поэтому он
// в миллисекундах, но точность не гарантируется
const ENGINE_SPEED = 250
const MOVEMENT_SPEED = 1
const BOUNDARIES = {
  x: Math.floor(RESOLUTION_WIDTH / SCALE_FACTOR),
  y: Math.floor(RESOLUTION_HEIGHT / SCALE_FACTOR),
}


export default class Game {
  #logger = null
  #componentManager = null
  #systemManager = null
  #entityManager = null
  #worldEntityId = null
  #entity1Id = null
  #entity2Id = null
  #speed = null
  #gameUpdateId = null

  constructor(config = {}) {
    config = {
      canvasWidth: RESOLUTION_WIDTH,
      canvasHeight: RESOLUTION_HEIGHT,
      scaleFactor: SCALE_FACTOR,
      engineSpeed: ENGINE_SPEED,
      loggingEnabled: true,
      ...config,
    }

    this.#speed = config.engineSpeed
  }

  start() {
    this._update()
  }

  _update = () => {
    // this.#systemManager.update()
    this.#gameUpdateId = setTimeout(this._update.bind(this), this.#speed)
  }
}

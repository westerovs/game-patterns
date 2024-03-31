import {Entities} from './entities/entities.js'
import PreloadState from './states/PreloadState.js'
import GameState from './states/GameState.js'
import RenderSystem from './systems/RenderSystem.js'

export default class Game {
  #sprites = []
  #ctx = null
  #renderSystem = null

  constructor() {
    // this.ctx = this.#renderSystem.ctx
  }

  start = () => {
    const preload = new PreloadState()

    preload.loadGraphics()
      .then((sprites) => {
        this.#sprites = sprites
        this.#renderSystem = new RenderSystem(sprites)
        this.update()

        // gameState.getSystems.render = new RenderSystem(sprites)

      })

  }

  update = () => {
    this.#renderSystem.update(Entities)

    requestAnimationFrame(this.update)
  }
}


// const setEvents = (platform, ball) => {
//   window.addEventListener('keydown', event => {
//     if (event.key === KEYS.LEFT || event.key === KEYS.RIGHT) {
//       console.log('l r')
//       // platform.getComponent('MovementComponent').dx =
//       //   (event.key === KEYS.LEFT ? -1 : 1) * platform.getComponent('MovementComponent').velocity
//     }
//     if (event.key === KEYS.SPACE || event.key === KEYS.ArrowUp) {
//       console.log('fire')
//       // ball.getComponent('MovementComponent').dy = -ball.getComponent('MovementComponent').velocity
//       // platform.ball = null // "Отстреливаем" шарик от платформы
//     }
//   })
//   window.addEventListener('keyup', event => {
//     if (event.key === KEYS.LEFT || event.key === KEYS.RIGHT) {
//       console.log('up')
//       // platform.getComponent('MovementComponent').dx = 0
//     }
//   })
// }
// setEvents(platform, ball, KEYS) // И события



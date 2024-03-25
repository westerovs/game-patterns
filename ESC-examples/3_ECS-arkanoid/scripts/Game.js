import {Entities} from './entities/entities.js'
import PreloadState from './states/PreloadState.js'
import GameState from './states/GameState.js'
import RenderSystem from './systems/RenderSystem.js'

console.log(Entities)

export default class Game {
  constructor() {

  }

  start = () => {
    const preload = new PreloadState()
    const gameState = new GameState()

    preload.loadGraphics()
      .then((sprites) => {
        gameState.getSystems.render = new RenderSystem(sprites)
        gameState.start()
      })
  }

  update = () => {

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



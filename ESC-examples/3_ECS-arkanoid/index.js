import {KEYS} from './scripts/consts.js'
import PreloadState from './scripts/states/PreloadState.js'
import RenderSystem from './scripts/systems/RenderSystem.js'
import GameState from './scripts/states/GameState.js'

const setEvents = (platform, ball) => {
  window.addEventListener('keydown', event => {
    if (event.key === KEYS.LEFT || event.key === KEYS.RIGHT) {
      console.log('l r')
      // platform.getComponent('MovementComponent').dx =
      //   (event.key === KEYS.LEFT ? -1 : 1) * platform.getComponent('MovementComponent').velocity
    }
    if (event.key === KEYS.SPACE || event.key === KEYS.ArrowUp) {
      console.log('fire')
      // ball.getComponent('MovementComponent').dy = -ball.getComponent('MovementComponent').velocity
      // platform.ball = null // "Отстреливаем" шарик от платформы
    }
  })
  window.addEventListener('keyup', event => {
    if (event.key === KEYS.LEFT || event.key === KEYS.RIGHT) {
      console.log('up')
      // platform.getComponent('MovementComponent').dx = 0
    }
  })
}
// setEvents(platform, ball, KEYS) // И события

window.createGame = () => {
  const preload = new PreloadState()
  const game = new GameState()
  window._game = game

  preload.loadGraphics((sprites) => {
    game.getSystems.render = new RenderSystem(sprites)
    game.start()
  })
}

window.addEventListener('load', () => {
  if (window.createGame) {
    window.createGame()
  }
})


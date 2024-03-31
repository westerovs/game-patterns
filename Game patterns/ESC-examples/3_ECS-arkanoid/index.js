import Game from './scripts/Game.js'

window.addEventListener('load', () => {
  const game = new Game()
  window._game = game

  game.start()
})








import Game from './src/scripts/Game.js'

const canvas = document.getElementById('canvas1')
canvas.width = 400
canvas.height = 400
const ctx = canvas.getContext('2d')
ctx.font = '25px Impact'

const game = new Game(canvas)
game.render(ctx)

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  game.render(ctx)
  requestAnimationFrame(animate)
}

animate()

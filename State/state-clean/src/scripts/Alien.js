export default class Alien {
  constructor(game) {
    this.game = game
    this.spriteWidth = 360
    this.spriteHeight = 360

    this.color = 'black'
  }

  draw(context) {
    context.fillStyle = this.color
    context.fillRect(0, 0, this.game.width, this.game.height)
  }

}

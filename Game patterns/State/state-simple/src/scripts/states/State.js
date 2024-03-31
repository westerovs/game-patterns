export default class State {
  constructor(game) {
    this.game = game

    this.color = 'black'
  }

  draw(context) {
    context.fillStyle = this.color
    context.fillRect(0, 0, this.game.width, this.game.height)
  }
}

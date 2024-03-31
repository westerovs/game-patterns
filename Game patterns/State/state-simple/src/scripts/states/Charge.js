import State from './State.js'

export default class Charge extends State {
  start() {
    this.color = 'red'
  }

  update() {
    if (this.game.keys.has('3')) {
      console.log('i has')
      this.game.setState(2)
    }
  }

  draw(context) {
    super.draw(context)
    context.fillStyle = 'purple'
    context.fillRect(
      (this.game.width / 2) - 50,
      (this.game.height / 2) - 50,
      100, 100)

  }

}

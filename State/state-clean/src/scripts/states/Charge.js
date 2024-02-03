import Alien from '../Alien.js'

export default class Charge extends Alien {
  start() {
    this.color = 'red'
    this.frameY = 0
  }

  update() {
    if (this.game.keys.has('3')) {
      console.log('i has')
      this.game.setAlienState(2)
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

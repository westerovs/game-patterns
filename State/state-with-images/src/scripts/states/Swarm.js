import Alien from '../Alien.js'

export default class Swarm extends Alien {
  start() {
    this.color = 'blue'
    this.text = 'SWARMING! \n ' +
      'Press 1 to IDLE or 2 to CHARGE'
    this.frameY = 2
  }

  update() {
    if (this.game.keys.has('1')) {
      this.game.setAlienState(0)
    } else if (this.game.keys.has('2')) {
      this.game.setAlienState(1)
    }
  }
}

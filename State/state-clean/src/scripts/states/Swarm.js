import Alien from '../Alien.js'

export default class Swarm extends Alien {
  start() {
    this.color = 'blue'
  }

  update() {
    if (this.game.keys.has('1')) {
      this.game.setAlienState(0)
    }
    if (this.game.keys.has('2')) {
      this.game.setAlienState(1)
    }
  }

}

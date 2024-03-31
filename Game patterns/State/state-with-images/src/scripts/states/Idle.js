import Alien from '../Alien.js'

export default class Idle extends Alien {
  start() {
    this.color = 'red'
    this.text = 'IDLE! \n ' +
      ' Press 2 to CHARGE of 3 to SWARM'
    this.frameY = 0
  }

  update() {
    if (this.game.keys.has('2')) {
      this.game.setAlienState(1)
    } else if (this.game.keys.has('3')) {
      this.game.setAlienState(2)
    }
  }
}

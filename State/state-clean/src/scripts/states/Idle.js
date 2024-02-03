import Alien from '../Alien.js'

export default class Idle extends Alien {
  start() {
    this.color = 'green'
  }


  update() {
    if (this.game.keys.has('2')) {
      console.log('i has')
      this.game.setAlienState(1)
    }
    if (this.game.keys.has('3')) {
      this.game.setAlienState(2)
    }
  }
}

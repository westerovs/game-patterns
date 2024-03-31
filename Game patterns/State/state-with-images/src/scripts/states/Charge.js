import Alien from '../Alien.js'

export default class Charge extends Alien {
  start() {
    this.color = 'green'
    this.counter = 0
    this.text = `CHARGING! \n 
    Press 3 to SWARM or wait for the counter 
    to reach ${this.maxCount} to automatically switch to IDLE`
    this.frameY = 1
  }

  update() {
    if (this.game.keys.has('3')) {
      this.game.setAlienState(2)
    }
    this.counter++
    console.log(this.counter)
    if (this.counter > this.maxCount) {
      this.game.setAlienState(0)
    }
  }

  draw(context) {
    super.draw(context)
    context.fillText(this.counter, 15, 30)
  }
}

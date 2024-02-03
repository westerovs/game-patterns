import Idle from './states/Idle.js'
import Charge from './states/Charge.js'
import Swarm from './states/Swarm.js'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height

    this.alien = null
    this.states = [new Idle(this), new Charge(this), new Swarm(this)]
    this.setAlienState(0)

    this.keys = new Set()
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.key)
    })
    document.addEventListener('keyup', () => {
      this.keys.clear()
    })
  }

  setAlienState(state) {
    this.alien = this.states[state]
    this.alien.start()
    console.log(this.alien)
  }

  render(context) {
    this.alien.draw(context)
    this.alien.update()
  }

}

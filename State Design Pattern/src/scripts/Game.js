import Idle from './states/Idle.js'
import Charge from './states/Charge.js'
import Swarm from './states/Swarm.js'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.keys = new Set()
    this.info = document.querySelector('#info')

    this.alienStates = [new Idle(this), new Charge(this), new Swarm(this)]
    this.alien = null
    this.setAlienState(0)

    window.addEventListener('keydown', e => {
      this.keys.add(e.key)
      console.warn(e.key)
    })
    window.addEventListener('keyup', e => {
      this.keys.clear()
    })
  }

  render(context) {
    this.alien.update(context)
    this.alien.draw(context)
  }

  setAlienState(state) {
    this.alien = this.alienStates[state]
    this.alien.start()
    this.info.innerText = this.alien.text
  }
}

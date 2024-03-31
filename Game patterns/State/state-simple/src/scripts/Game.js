import Idle from './states/Idle.js'
import Charge from './states/Charge.js'
import Swarm from './states/Swarm.js'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height

    this.state = null
    this.states = [
      new Idle(this),
      new Charge(this),
      new Swarm(this),
    ]
    this.setState(0)

    this.keys = new Set()
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.key)
    })
    document.addEventListener('keyup', () => {
      this.keys.clear()
    })
  }

  setState(state) {
    this.state = this.states[state]
    this.state.start()
    console.log(this.state)
  }

  render(context) {
    this.state.draw(context)
    this.state.update()
  }
}

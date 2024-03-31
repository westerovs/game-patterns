import State from './State.js'

export default class Swarm extends State {
  start() {
    this.color = 'blue'
  }

  update() {
    if (this.game.keys.has('1')) {
      this.game.setState(0)
    }
    if (this.game.keys.has('2')) {
      this.game.setState(1)
    }
  }
}

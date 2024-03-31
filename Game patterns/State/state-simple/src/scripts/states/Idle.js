import State from './State.js'

export default class Idle extends State {
  start() {
    this.color = 'green'
  }


  update() {
    if (this.game.keys.has('2')) {
      console.log('i has')
      this.game.setState(1)
    }
    if (this.game.keys.has('3')) {
      this.game.setState(2)
    }
  }
}

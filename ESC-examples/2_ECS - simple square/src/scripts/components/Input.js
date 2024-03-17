export default class Input {
  constructor() {
    this.keys = {}
    window.addEventListener('keydown', (e) => this.keys[e.key] = true)
    window.addEventListener('keyup', (e) => this.keys[e.key] = false)
  }
}

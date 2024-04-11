export default class State {
  constructor(fuckingName) {
    this.fuckingName = fuckingName
  }

  enter(state) {
    console.log('state entered: %c%s', 'color: red;', this.fuckingName)
  }

  handleCondition() {
    // console.log(1)
  }

  update() {
    // console.log(2)
  }

  drawView(input) {
    input
      .clear()
      .beginFill(0x00ff00, 0.4)
      .drawRect(0, 0, 1366, 1366)
      .endFill()
  }
}

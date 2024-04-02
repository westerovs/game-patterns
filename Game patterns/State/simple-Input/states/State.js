export default class State {
  constructor(fuckingName) {
    this.fuckingName = fuckingName
  }

  enter(state) {
    console.log('state entered: %c%s', 'color: red;', this.fuckingName)
  }

  update() {
    // console.log('state update')
  }

  drawView() {
    // console.log('draw View')
  }

  handleCondition() {
    console.log('update Condition')
  }
}

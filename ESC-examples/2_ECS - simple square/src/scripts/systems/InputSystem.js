import Position from '../components/Position.js'
import Input from '../components/Input.js'

export default class InputSystem {
  constructor() {
    this.keys = {}
    this.moveStep = 2
  }

  update(entities) {
    Object.values(entities).forEach(entity => {
      if (entity.components.Position && entity.components.Input) {
        const position = entity.getComponent(Position)
        const input = entity.getComponent(Input).keys
        if (input['ArrowUp']) position.y -= this.moveStep
        if (input['ArrowDown']) position.y += this.moveStep
        if (input['ArrowLeft']) position.x -= this.moveStep
        if (input['ArrowRight']) position.x += this.moveStep
      }
    })
  }
}

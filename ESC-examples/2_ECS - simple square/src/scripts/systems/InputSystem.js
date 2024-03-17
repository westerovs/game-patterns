import PositionComponent from '../components/PositionComponent.js'
import InputComponent from '../components/InputComponent.js'

// в ECS системы часто знают о компонентах, потому что они отвечают за их обработку

  export default class InputSystem {
  constructor() {
    this.keys = {}
    this.moveStep = 2
  }

  update(entities) {
    Object.values(entities).forEach(entity => {
      // система сначала проверяет, есть ли у сущности необходимые компоненты, и если они есть,
      // выполняет операции ввода, изменяя положение сущности согласно нажатым клавишам.
      if (entity.components.PositionComponent && entity.components.InputComponent) {
        const position = entity.getComponent(PositionComponent)
        const input = entity.getComponent(InputComponent).keys
        if (input['ArrowUp']) position.y -= this.moveStep
        if (input['ArrowDown']) position.y += this.moveStep
        if (input['ArrowLeft']) position.x -= this.moveStep
        if (input['ArrowRight']) position.x += this.moveStep
      }
    })
  }
}

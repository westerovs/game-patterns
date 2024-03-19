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
        const position = entity.components.PositionComponent
        const input = entity.components.InputComponent.keys

        if (input['ArrowUp']) position.y -= this.moveStep
        if (input['ArrowDown']) position.y += this.moveStep
        if (input['ArrowLeft']) position.x -= this.moveStep
        if (input['ArrowRight']) position.x += this.moveStep
      }
    })
  }
}
/*

Гибкость в обработке ввода:
Хотя система обрабатывает базовые направления перемещения, она может быть расширена
для поддержки более сложных взаимодействий, таких как прыжки, ускорение или специальные действия,
путём добавления дополнительных условий и компонентов

Оптимизация производительности:
При большом количестве сущностей в игре перебор всех сущностей на каждом кадре может быть неэффективным.
Можно рассмотреть оптимизации, например, поддержку списка активных сущностей, которые ожидают обработки ввода.
*/

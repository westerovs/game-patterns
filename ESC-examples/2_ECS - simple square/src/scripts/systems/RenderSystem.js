import {config} from '../../config.js'

export default class RenderSystem {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)

    this.canvas.width = config.canvasWidth
    this.canvas.height = config.canvasHeight
  }

  update(entities) {
    // Возможны оптимизации, например, очищение только изменённых областей.
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    Object.values(entities).forEach(entity => {
      if (entity.components.PositionComponent && entity.components.RenderableComponent) {
        const {x, y} = entity.components.PositionComponent
        const {color, size} = entity.components.RenderableComponent
        this.context.fillStyle = color
        this.context.fillRect(x, y, size, size)
      }
    })
  }
}

// Рассмотреть использование веб-воркеров или offscreen canvas для сложных расчётов
// и отрисовки в более сложных проектах.


// Для улучшения поддерживаемости и расширяемости можно ввести дополнительные абстракции
// для различных типов рендерируемых объектов.

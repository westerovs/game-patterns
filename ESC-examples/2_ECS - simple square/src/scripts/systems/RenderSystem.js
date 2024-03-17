export default class RenderSystem {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
    this.canvas.width = 400
    this.canvas.height = 400
  }

  update(entities) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    Object.values(entities).forEach(entity => {
      if (entity.components.Position && entity.components.Renderable) {
        const {x, y} = entity.components.Position
        const {color, size} = entity.components.Renderable
        this.context.fillStyle = color
        this.context.fillRect(x, y, size, size)
      }
    })
  }
}

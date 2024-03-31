import PositionComponent from '../components/PositionComponent.js'
import RenderComponent from '../components/RenderComponent.js'
import {config} from '../config.js'

export default class RenderSystem {
  #sprites = {}
  #ctx = null

  constructor(sprites) {
    this.#sprites = sprites

    this.#createCanvas()
  }

  #createCanvas = () => {
    const canvas = document.createElement('canvas')
    this.#ctx = canvas.getContext('2d')
    document.body.appendChild(canvas)

    canvas.width = config.canvasWidth
    canvas.height = config.canvasHeight
  }

  update(entities) {
    entities.forEach(entity => {
      const position = entity.getComponent(PositionComponent)
      const render = entity.getComponent(RenderComponent)

      if (position && render && this.#sprites[render.sprite]) {
        // Используем спрайт из загруженных ресурсов
        this.#ctx.drawImage(
          this.#sprites[render.sprite],
          position.x,
          position.y,
          render.width,
          render.height
        )
      }
    })
  }
}

import PositionComponent from '../components/PositionComponent.js'
import RenderComponent from '../components/RenderComponent.js'

export default class RenderSystem {
  constructor(sprites) {
    this.sprites = sprites // Объект со спрайтами
  }

  run(entity, ctx) {
    const position = entity.getComponent(PositionComponent)
    const render = entity.getComponent(RenderComponent)

    if (position && render && this.sprites[render.sprite]) {
      // Используем спрайт из загруженных ресурсов
      ctx.drawImage(this.sprites[render.sprite], position.x, position.y, render.width, render.height)
    }
  }
}

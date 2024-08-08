import System from './System.js'
import PositionComponent from '../components/PositionComponent.js'
import SpriteComponent from '../components/SpriteComponent.js'
import InteractiveComponent from '../components/InteractionComponent.js'

export default class RenderSystem extends System {
  constructor(app) {
    super()
    this.app = app
  }

  update() {
    this.entities.forEach(entity => {
      const position = entity.getComponent(PositionComponent)
      const spriteComponent = entity.getComponent(SpriteComponent)

      if (position && spriteComponent) {
        const sprite = spriteComponent.sprite
        sprite.position.set(position.x, position.y)
        sprite.anchor.set(0.5)
        sprite.interactive = entity.hasComponent(InteractiveComponent)

        if (!this.app.stage.children.includes(sprite)) {
          this.app.stage.addChild(sprite)
        }
      }
    })
  }
}

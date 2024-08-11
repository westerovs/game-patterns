import System from './System.js'
import PositionComponent from '../components/PositionComponent.js'
import ContainerComponent from '../components/ContainerComponent.js'
import InteractiveComponent from '../components/InteractionComponent.js'

export default class RenderSystem extends System {
  constructor(app) {
    super()
    this.app = app
  }

  update() {
    this.entities.forEach(entity => {
      const position = entity.getComponent(PositionComponent)
      const containerComponent  = entity.getComponent(ContainerComponent)

      if (position && containerComponent) {
        const container = containerComponent.view

        container.position.set(position.x, position.y)
        container.pivot.set(container.width / 2, container.height / 2)

        // gsap.to(container, {angle: 360, duration: 2, repeat: -1})

        container.interactive = entity.hasComponent(InteractiveComponent)

        if (!this.app.stage.children.includes(container)) {
          this.app.stage.addChild(container)
        }
      }
    })
  }
}

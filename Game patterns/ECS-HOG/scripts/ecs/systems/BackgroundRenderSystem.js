import System from './System.js'
import BackgroundComponent from '../components/BackgroundComponent.js'

export default class BackgroundRenderSystem extends System {
  constructor(app) {
    super()
    this.app = app
  }

  update() {
    this.entities.forEach(entity => {
      const backgroundComponent = entity.getComponent(BackgroundComponent)
      if (backgroundComponent) {
        const sprite = backgroundComponent.sprite

        // Добавляем спрайт на сцену только один раз
        if (!this.app.stage.children.includes(sprite)) {
          this.app.stage.addChildAt(sprite, 0)  // Добавляем на задний план
        }
      }
    })
  }
}

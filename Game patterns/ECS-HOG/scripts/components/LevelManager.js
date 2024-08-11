import ContainerComponent from '../ecs/components/ContainerComponent.js'
import BackgroundComponent from '../ecs/components/BackgroundComponent.js'

export default class LevelManager {
  #app = null

  constructor(app) {
    this.#app = app
  }

  clearStage = (entities) => {
    entities.forEach(entity => {
      const containerComponent = entity.getComponent(ContainerComponent) || entity.getComponent(BackgroundComponent)

      if (containerComponent) {
        this.#app.stage.removeChild(containerComponent.view)
      }
    })
  }

  clearEntitiesAndSystems = (entities, systems) => {
    entities.clear()
    systems.clear()
  }
}

let entityIdCounter = 0

export default class Entity {
  constructor() {
    this.id = entityIdCounter++
    this.components = {}
  }

  addComponent(component) {
    this.components[component.constructor.name] = component
  }

  getComponent(componentClass) {
    return this.components[componentClass.name]
  }
}

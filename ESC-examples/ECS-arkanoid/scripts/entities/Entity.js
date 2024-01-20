export default class Entity {
  constructor() {
    this.components = {}
  }

  addComponent(component) {
    this.components[component.constructor.name] = component
  }

  getComponent(componentClass) {
    return this.components[componentClass.name]
  }
}

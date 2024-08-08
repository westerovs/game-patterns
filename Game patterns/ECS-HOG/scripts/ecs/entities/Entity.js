export default class Entity {
  constructor(id) {
    this.id = id
    this.components = new Map()
  }

  addComponent(component) {
    this.components.set(component.constructor.name, component)
  }

  getComponent(componentClass) {
    return this.components.get(componentClass.name)
  }

  hasComponent(componentClass) {
    return this.components.has(componentClass.name)
  }
}



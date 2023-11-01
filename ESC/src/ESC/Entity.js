export default class Entity {
  constructor() {
    this.components = {};
  }

  addComponent(component) {
    this.components[component.constructor.name] = component;
  }

  getComponent(componentName) {
    return this.components[componentName];
  }
}

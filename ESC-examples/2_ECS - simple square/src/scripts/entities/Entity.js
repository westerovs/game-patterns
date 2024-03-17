export default class Entity {
  constructor() {
    this.id = (+new Date()).toString(16);
    this.components = {};
  }

  addComponent(component) {
    this.components[component.constructor.name] = component;
  }

  getComponent(componentClass) {
    return this.components[componentClass.name];
  }
}

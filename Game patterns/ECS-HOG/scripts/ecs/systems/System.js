export default class System {
  constructor() {
    this.entities = new Set()
  }

  addEntity(entity) {
    this.entities.add(entity)
  }

  removeEntity(entity) {
    this.entities.delete(entity)
  }

  update() {
    throw new Error('System update method not implemented')
  }
}



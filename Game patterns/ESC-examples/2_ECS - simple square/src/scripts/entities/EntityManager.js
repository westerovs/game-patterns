export default class EntityManager {
  constructor() {
    this.entities = {}
  }

  addEntity(entity) {
    this.entities[entity.id] = entity
  }

  getEntity(id) {
    return this.entities[id]
  }
}

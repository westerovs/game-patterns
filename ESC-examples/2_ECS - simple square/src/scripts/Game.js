// entities
import EntityManager from './entities/EntityManager.js'
import Entity from './entities/Entity.js'
// systems
import InputSystem from './systems/InputSystem.js'
import RenderSystem from './systems/RenderSystem.js'
// components
import InputComponent from './components/InputComponent.js'
import PositionComponent from './components/PositionComponent.js'
import RenderableComponent from './components/RenderableComponent.js'

export default class Game {
  constructor() {
    this.entityManager = new EntityManager()
    this.renderSystem = new RenderSystem()
    this.inputSystem = new InputSystem()
  }

  createSquare() {
    const square = new Entity()
    square.addComponent(new PositionComponent(100, 100))
    square.addComponent(new RenderableComponent('red', 50))
    square.addComponent(new InputComponent())
    this.entityManager.addEntity(square)
  }

  start() {
    this.createSquare()
    this.gameLoop()
  }

  gameLoop = () => {
    this.inputSystem.update(this.entityManager.entities)
    this.renderSystem.update(this.entityManager.entities)
    requestAnimationFrame(this.gameLoop)
  }
}

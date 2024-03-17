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
import CollisionSystem from './systems/CollisionSystem.js'
import CollidableComponent from './components/CollidableComponent.js'
import {config} from '../config.js'

export default class Game {
  constructor() {
    this.entityManager = new EntityManager()
    this.renderSystem = new RenderSystem()
    this.inputSystem = new InputSystem()
    // Game.js
    this.collisionSystem = new CollisionSystem({
      minX: 0,
      minY: 0,
      maxX: config.canvasWidth,
      maxY: config.canvasHeight
    })
  }

  createSquare() {
    const square = new Entity()
    square.addComponent(new PositionComponent(100, 100))
    square.addComponent(new RenderableComponent('red', 50))
    square.addComponent(new CollidableComponent(50, 50))
    square.addComponent(new InputComponent())

    this.entityManager.addEntity(square)
  }

  start() {
    this.createSquare()
    this.gameLoop()
  }

  gameLoop = () => {
    this.inputSystem.update(this.entityManager.entities)
    this.collisionSystem.update(this.entityManager.entities)
    this.renderSystem.update(this.entityManager.entities)
    requestAnimationFrame(this.gameLoop)
  }
}

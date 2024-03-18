// entities
import Entity from './entities/Entity.js'
import EntityManager from './entities/EntityManager.js'
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
    this.collisionSystem = new CollisionSystem({
      minX: 0,
      minY: 0,
      maxX: config.canvasWidth,
      maxY: config.canvasHeight
    })

    this.entities = {}
  }

  start() {
    const redSquare = this.createSquare(100, 100, 50, 'red')
    redSquare.addComponent(new InputComponent())
    this.entities.redSquare = redSquare

    const blueSquare = this.createSquare(200, 200, 100, 'blue')
    this.entities.blueSquare = blueSquare

    this.update()
  }

  createSquare(x, y, size, color) {
    const square = new Entity()
    square.addComponent(new PositionComponent(x, y))
    square.addComponent(new RenderableComponent(color, size))
    square.addComponent(new CollidableComponent(size, size))

    this.entityManager.addEntity(square)
    return square
  }

  update = () => {
    this.inputSystem.update(this.entityManager.entities)
    this.collisionSystem.update(this.entityManager.entities)
    this.renderSystem.update(this.entityManager.entities)

    requestAnimationFrame(this.update)
  }
}

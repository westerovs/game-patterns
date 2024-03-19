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

/*
Улучшение:

Рассмотреть возможность добавления системы управления состоянием игры,
чтобы легко переключаться между разными режимами или уровнями игры.

Подумай над добавлением более сложных механик и взаимодействий между сущностями,
используя дополнительные системы и компоненты

Решения
Для решения или смягчения этих проблем можно использовать несколько подходов:

Использование событий или сообщений: Вместо прямого изменения компонентов системы могут генерировать события или отправлять сообщения, которые затем обрабатываются другими системами или диспетчером событий. Это снижает прямую связность между системами.
Компоненты-флаги: Для управления состоянием и взаимодействием между системами можно использовать специальные компоненты, которые действуют как флаги или маркеры для определённых действий, без хранения конкретных данных.
Централизованное управление состоянием: В некоторых случаях может быть полезно иметь централизованное управление состоянием, где изменения состояния происходят через определённый интерфейс или набор функций, контролирующих взаимодействие между системами.
Выбор подхода зависит от конкретных требований и сложности проекта, но важно осознавать потенциальные проблемы и стремиться к созданию чётко структурированной и гибко расширяемой архитектуры.
* */



















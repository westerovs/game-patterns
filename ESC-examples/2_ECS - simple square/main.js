import EntityManager from './src/scripts/entities/EntityManager.js'
import RenderSystem from './src/scripts/systems/RenderSystem.js'
import Entity from './src/scripts/entities/Entity.js'
import Position from './src/scripts/components/Position.js'
import Renderable from './src/scripts/components/Renderable.js'
import InputSystem from './src/scripts/systems/InputSystem.js'
import Input from './src/scripts/components/Input.js'

// Инициализация
const entityManager = new EntityManager()
const renderSystem = new RenderSystem()
const inputSystem = new InputSystem()

// Создание квадрата
const square = new Entity()
square.addComponent(new Input())
square.addComponent(new Position(100, 100)) // начальное положение квадрата
square.addComponent(new Renderable('red', 50)) // цвет и размер

entityManager.addEntity(square)

// Главный цикл игры
function gameLoop() {
  inputSystem.update(entityManager.entities)
  renderSystem.update(entityManager.entities)
  requestAnimationFrame(gameLoop)
}

gameLoop() // Запуск игры


import EntityManager from './src/scripts/entities/EntityManager.js'
import RenderSystem from './src/scripts/systems/RenderSystem.js'
import Entity from './src/scripts/entities/Entity.js'
import Position from './src/scripts/components/Position.js'
import Renderable from './src/scripts/components/Renderable.js'

console.log('HELLO JS')

// Инициализация
const entityManager = new EntityManager()
const renderSystem = new RenderSystem()

// Создание квадрата
const square = new Entity()
square.addComponent(new Position(100, 100)) // начальное положение квадрата
square.addComponent(new Renderable('red', 50)) // цвет и размер
entityManager.addEntity(square)

// Главный цикл игры
function gameLoop() {
  renderSystem.update(entityManager.entities)
  requestAnimationFrame(gameLoop)
}

gameLoop() // Запуск игры


window.addEventListener('keydown', (e) => {
  const position = square.getComponent(Position);
  switch(e.key) {
    case 'ArrowUp': position.y -= 10; break;
    case 'ArrowDown': position.y += 10; break;
    case 'ArrowLeft': position.x -= 10; break;
    case 'ArrowRight': position.x += 10; break;
  }
});

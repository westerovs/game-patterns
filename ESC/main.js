// E
import Entity from './src/ESC/Entity.js'
// S
import MovementSystem from './src/ESC/System.js'
// C
import PositionComponent from './src/ESC/components/PositionComponent.js'
import RenderComponent from './src/ESC/components/RenderComponent.js'

// Создаем игровые объекты
const playerSprite = document.querySelector('#player')
const player = new Entity();
player.addComponent(new PositionComponent(0, 0));
player.addComponent(new RenderComponent(playerSprite));

const enemySprite = document.querySelector('#enemy')
const enemy = new Entity();
enemy.addComponent(new PositionComponent(10, 5));
enemy.addComponent(new RenderComponent(enemySprite));

// Создаем систему движения и добавляем в нее объекты
const movementSystem = new MovementSystem();
movementSystem.addEntity(player);
movementSystem.addEntity(enemy);


// Обновляем систему для каждого кадра игры
function gameLoop() {
  movementSystem.update();
  requestAnimationFrame(gameLoop);
}

// Запускаем игровой цикл
gameLoop();

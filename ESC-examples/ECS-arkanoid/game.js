// E
import Entity from './scripts/entities/Entity.js'
// C
import PositionComponent from './scripts/components/PositionComponent.js'
import MovementComponent from './scripts/components/MovementComponent.js'
import RenderComponent from './scripts/components/RenderComponent.js'
// S
import MovementSystem from './scripts/systems/MovementSystem.js'
import RenderSystem from './scripts/systems/RenderSystem.js'

const ball = new Entity()
ball.addComponent(new PositionComponent(320, 280))
ball.addComponent(new MovementComponent(0, 3, 3))
ball.addComponent(new RenderComponent('ball', 80, 20))

// Создаем платформу как сущность и добавляем компоненты
const platform = new Entity();
platform.addComponent(new PositionComponent(280, 300)); // Начальная позиция
platform.addComponent(new MovementComponent(0, 0, 6)); // Начальное движение
platform.addComponent(new RenderComponent('platform', 100, 14));

// Создаем блоки в цикле
const blocks = [];
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 8; col++) {
    const block = new Entity();
    block.addComponent(new PositionComponent(64 * col + 65, 24 * row + 35));
    block.addComponent(new RenderComponent('block', 60, 20));
    blocks.push(block);
  }
}

const game = {
  ctx: document.getElementById('mycanvas').getContext('2d'),
  entities: [ball, platform, ...blocks],
  systems: [new MovementSystem(), new RenderSystem(/* объект со спрайтами */)],

  update() {
    this.systems.forEach(system => {
      this.entities.forEach(entity => system.run(entity, this.ctx)); // Передаем ctx в RenderSystem
    });
  },

  run() {
    window.requestAnimationFrame(() => {
      this.update()
      this.run()
    })
  },

  start() {
    this.run()
  }
}


function loadGraphics(callback) {
  let sprites = {
    ball: new Image(),
    platform: new Image(),
    block: new Image(),
    // Загрузка других спрайтов
  };

  let loaded = 0;
  for (let key in sprites) {
    sprites[key].src = `img/${key}.png`;
    sprites[key].onload = () => {
      if (++loaded >= Object.keys(sprites).length) {
        callback(sprites);
      }
    };
  }
}

// Использование функции загрузки
loadGraphics((sprites) => {
  game.systems[1] = new RenderSystem(sprites); // Устанавливаем RenderSystem с загруженными спрайтами
  game.start();
});



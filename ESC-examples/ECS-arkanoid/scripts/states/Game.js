import {KEYS} from '../consts.js'
import {loadGraphics} from './Preload.js'

// E
import Entity from '../entities/Entity.js'
// C
import PositionComponent from '../components/PositionComponent.js'
import MovementComponent from '../components/MovementComponent.js'
import RenderComponent from '../components/RenderComponent.js'
// S
import MovementSystem from '../systems/MovementSystem.js'
import RenderSystem from '../systems/RenderSystem.js'


// Create Entities
const ball = new Entity()
ball.addComponent(new PositionComponent(320, 280))
ball.addComponent(new MovementComponent(0, 3, 3))
ball.addComponent(new RenderComponent('ball', 80, 20))

const platform = new Entity()
platform.addComponent(new PositionComponent(280, 300)) // Начальная позиция
platform.addComponent(new MovementComponent(0, 0, 6)) // Начальное движение
platform.addComponent(new RenderComponent('platform', 100, 14))

const blocks = []
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 8; col++) {
    const block = new Entity()
    block.addComponent(new PositionComponent(64 * col + 65, 24 * row + 35))
    block.addComponent(new RenderComponent('block', 60, 20))
    blocks.push(block)
  }
}

const game = {
  ctx: document.getElementById('mycanvas').getContext('2d'),
  entities: [ball, platform, ...blocks],
  systems: {
    movement: new MovementSystem(),
    render: null, // Пока что здесь null, установим систему после загрузки спрайтов
  },

  update() {
    Object.values(this.systems).forEach(system => {
      if (system) { // Проверяем, что система инициализирована
        this.entities.forEach(entity => system.run(entity, this.ctx));
      }
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

function setEvents(platform, ball) {
  window.addEventListener('keydown', event => {
    if (event.keyCode === KEYS.LEFT || event.keyCode === KEYS.RIGHT) {
      platform.getComponent('MovementComponent').dx = (event.keyCode === KEYS.LEFT ? -1 : 1) * platform.getComponent('MovementComponent').velocity
    }
    if (event.keyCode === KEYS.SPACE) {
      ball.getComponent('MovementComponent').dy = -ball.getComponent('MovementComponent').velocity
      platform.ball = null // "Отстреливаем" шарик от платформы
    }
  })
  window.addEventListener('keyup', event => {
    if (event.keyCode === KEYS.LEFT || event.keyCode === KEYS.RIGHT) {
      platform.getComponent('MovementComponent').dx = 0
    }
  })
}


// Использование функции загрузки
loadGraphics((sprites) => {
  game.systems.render = new RenderSystem(sprites); // Теперь инициализируем RenderSystem
  setEvents(platform, ball, KEYS); // И события
  game.start(); // И начинаем игру
});


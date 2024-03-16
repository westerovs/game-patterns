import Assemblages from './Assemblages.js'
import {COMPONENTS} from './Components.js'

// systems
import UserInputSystem from './systems/UserInput.js'
import DecaySystem from './systems/Decay.js'
import RenderSystem from './systems/Render.js'
import CollisionSystem from './systems/Сollision.js'
import Entity from './Entity.js'

// Добавляем сущность в глобальный объект ECS
ECS.Entity = Entity;

ECS.Assemblages = Assemblages
ECS.Components = COMPONENTS

ECS.systems.decay = new DecaySystem()
ECS.systems.userInput = new UserInputSystem()
ECS.systems.collision = new CollisionSystem()
ECS.systems.render = new RenderSystem()

class Game {
  #running = true
  #entities = {}
  #systems = []

  constructor() {
    this.#setupEntities()
    this.#setupPlayer()
    ECS.entities = this.#entities
    this.#setupSystems()
    requestAnimationFrame(() => this.gameLoop())
  }

  #setupEntities() {
    // Create a bunch of random entities
    for (let i = 0; i < 20; i++) {
      const entity = new ECS.Entity()
      entity.addComponent(new ECS.Components.Appearance())
      entity.addComponent(new ECS.Components.Position())

      // chance for decaying rects ?
      if (Math.random() < 0.2) {
        entity.addComponent(new ECS.Components.Health())
      }

      // Если бы мы хотели, чтобы не было коллизий, мы могли бы установить это здесь
      entity.addComponent(new ECS.Components.Collision())
      this.#entities[entity.id] = entity
    }
  }

  // PLAYER entity
  #setupPlayer() {
    const player = new ECS.Entity()
    player.addComponent(new ECS.Components.Appearance())
    player.addComponent(new ECS.Components.Position())
    player.addComponent(new ECS.Components.PlayerControlled())
    player.addComponent(new ECS.Components.Health())
    player.addComponent(new ECS.Components.Collision())
    // we can also edit any component, as it's just data
    player.components.appearance.colors.g = 255
    this.#entities[player.id] = player
  }

  #setupSystems() {
    // Порядок систем, имеет решающее значение,
    this.#systems = [
      ECS.systems.userInput,
      ECS.systems.collision,
      ECS.systems.decay,
      ECS.systems.render,
    ]
  }

  // Одним из оптимальных решений было бы передавать только объекты,
  // которые имеют соответствующие компоненты для системы, вместо
  // того, чтобы заставлять систему выполнять итерацию по всем объектам
  gameLoop = () => {
    // this.#systems.forEach(system => system(ECS.entities))
    this.#systems.forEach(system => {
      if (system.tick) system.tick(ECS.entities)
    })

    if (this.#running) {
      requestAnimationFrame(this.gameLoop)
    }
  }

  endGame = () => {
    this.#running = false
    document.getElementById('final-score').innerHTML = ECS.score
    document.getElementById('game-over').className = ''
    document.getElementById('game-canvas').className = 'game-over'
  }
}

ECS.game = new Game()


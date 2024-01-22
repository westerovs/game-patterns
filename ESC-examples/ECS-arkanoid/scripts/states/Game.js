import {Entities} from '../entities/entities.js'
import MovementSystem from '../systems/MovementSystem.js'
import RenderSystem from '../systems/RenderSystem.js'


export default class Game {
  #ctx = document.getElementById('canvas').getContext('2d')
  #entities = [...Entities]
  #systems = {
    movement: new MovementSystem(),
    render: null, // Пока что здесь null, установим систему после загрузки спрайтов
  }

  get getSystems() {
    return this.#systems
  }

  update = () => {
    Object.values(this.#systems).forEach(system => {
      if (system) { // Проверяем, что система инициализирована
        this.#entities.forEach(entity => system.run(entity, this.#ctx))
      }
    })
  }

  run = () => {
    window.requestAnimationFrame(() => {
      this.update()
      this.run()
    })
  }

  start = () => {
    this.run()
  }
}



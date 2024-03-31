import {Entities} from '../entities/entities.js'
import MovementSystem from '../systems/MovementSystem.js'
import RenderSystem from '../systems/RenderSystem.js'

export default class GameState {
  #ctx = null
  #entities = [...Entities]
  #systems = {
    // movement: new MovementSystem(),
    // render: null, // Пока что здесь null, установим систему после загрузки спрайтов
  }

  constructor(ctx) {
    this.#ctx = ctx
  }

  get getSystems() {
    return this.#systems
  }

  update = () => {
    // Object.values(this.#systems).forEach(system => {
    //   if (system) { // Проверяем, что система инициализирована
    //     this.#entities.forEach(entity => system.run(entity, this.#ctx))
    //   }
    // })
  }

  run = () => {
    // window.requestAnimationFrame(() => {
    //   this.update()
    //   this.run()
    // })
  }

  start = () => {
    // this.run()
  }
}



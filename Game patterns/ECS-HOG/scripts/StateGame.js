import {Texture, Text} from '../assets/lib/pixi.mjs'
import {assetsMap} from './assetsMap.js'
// E
import Entity from './ecs/entities/Entity.js'
// C
import SpriteComponent from './ecs/components/SpriteComponent.js'
import InteractiveComponent from './ecs/components/InteractiveComponent.js'
import PositionComponent from './ecs/components/PositionComponent.js'
// S
import RenderSystem from './ecs/systems/RenderSystem.js'

export default class StateGame {
  #app = null
  #entities = []
  #systems = []
  #itemsLeft = 3
  #textFound = null

  constructor(app) {
    this.#app = app
  }

  enter = () => {
    this.createEntities()
    this.initSystems()
    this.updateText()

    this.#app.ticker.add(() => {
      this.#systems.forEach(system => system.update())
    })
  }

  createEntities = () => {
    assetsMap.sprites.forEach(({name}, i) => {
      const entity = new Entity(i)
      const spriteComponent = new SpriteComponent(Texture.from(name))
      spriteComponent.sprite.once('pointerdown', () => this.onItemClicked(entity))

      entity.addComponent(new PositionComponent(i * 250, 250))
      entity.addComponent(spriteComponent)
      entity.addComponent(new InteractiveComponent())

      this.#entities.push(entity)
    })
  }

  initSystems = () => {
    const renderSystem = new RenderSystem(this.#app)
    this.#entities.forEach(entity => renderSystem.addEntity(entity))
    this.#systems.push(renderSystem)
  }

  onItemClicked = (entity) => {
    const spriteComponent = entity.getComponent(SpriteComponent)
    if (spriteComponent) {
      const sprite = spriteComponent.sprite

      gsap.timeline()
        .to(sprite.scale, {x: 1.5, y: 1.5, duration: 0.5})
        .to(sprite, {alpha: 0, duration: 0.5}, '<')
        .eventCallback('onComplete', () => {
          this.#app.stage.removeChild(sprite)
          this.#itemsLeft -= 1
          this.updateText()

          if (this.#itemsLeft === 0) this.winAction()
        })
    }
  }

  winAction = () => {
    this.showCompletionMessage()
  }

  updateText = () => {
    if (!this.#textFound) {
      this.#textFound = new Text(`Осталось предметов: ${this.#itemsLeft}`, {fill: 'white'})
      this.#textFound.position.set(20, 20)
      this.#app.stage.addChild(this.#textFound)
    } else {
      this.#textFound.text = `Осталось предметов: ${this.#itemsLeft}`
    }
  }

  showCompletionMessage = () => {
    const winMessage = new Text('Все предметы найдены!', {fill: 'white'})
    winMessage.position.set(this.#app.view.width / 2, this.#app.view.height / 2)
    winMessage.anchor.set(0.5)
    this.#app.stage.addChild(winMessage)
  }
}

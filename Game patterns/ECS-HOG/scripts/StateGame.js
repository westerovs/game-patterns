import {Texture, Text} from '../assets/lib/pixi.mjs'
import {LEVELS} from './CONFIG.js'

// Entity
import Entity from './ecs/entities/Entity.js'
// Components
import SpriteComponent from './ecs/components/SpriteComponent.js'
import InteractiveComponent from './ecs/components/InteractionComponent.js'
import PositionComponent from './ecs/components/PositionComponent.js'
import BackgroundComponent from './ecs/components/BackgroundComponent.js'
import InteractionComponent from './ecs/components/InteractionComponent.js'
// Systems
import RenderSystem from './ecs/systems/RenderSystem.js'
import BackgroundRenderSystem from './ecs/systems/BackgroundRenderSystem.js'

export default class StateGame {
  #app = null
  #entities = []
  #systems = []
  #itemsLeft = null
  #textFound = null
  #level = null
  #lvCounter = 1
  #maxLevelsValue = Object.keys(LEVELS).length

  constructor(app, level = 1) {
    this.#app = app
    this.#level = level
  }

  enter = () => {
    this.#createEntities()
    this.#initSystems()
    this.#updateText()

    this.#systems.forEach(system => system.update())
  }

  switchLevel = (newLevel) => {
    this.#level = newLevel
    this.#itemsLeft = newLevel.items

    // Удаляем все текущие спрайты со сцены
    this.#entities.forEach(entity => {
      const spriteComponent = entity.getComponent(SpriteComponent) || entity.getComponent(BackgroundComponent)

      if (spriteComponent) {
        this.#app.stage.removeChild(spriteComponent.sprite)
      }
    })

    // Очищаем текущие сущности и системы
    this.#entities = []
    this.#systems = []

    // Перезагружаем уровень
    this.enter()
  }

  #createEntities = () => {
    const levelConfig = LEVELS[this.#level]
    this.#itemsLeft = levelConfig.items

    this.#createBackground(levelConfig)
    this.#createHogItems(levelConfig)
  }

  #createBackground = (levelConfig) => {
    const backgroundEntity = new Entity('background')
    const backgroundTexture = Texture.from(levelConfig.background)
    const backgroundComponent = new BackgroundComponent(backgroundEntity, backgroundTexture)

    backgroundEntity.addComponent(backgroundComponent)
    this.#entities.push(backgroundEntity)
  }

  #createHogItems = (levelConfig) => {
    levelConfig.items.forEach(({ name, x, y }, i) => {
      const entity = new Entity(i)
      const spriteComponent = new SpriteComponent(Texture.from(name))
      spriteComponent.sprite.once('pointerdown', () => this.onItemClicked(entity))

      entity.addComponent(new PositionComponent(x, y))
      entity.addComponent(spriteComponent)
      entity.addComponent(new InteractionComponent())

      this.#entities.push(entity)
    })

    this.#itemsLeft = levelConfig.items.length
  }

  #initSystems = () => {
    const backgroundRenderSystem = new BackgroundRenderSystem(this.#app)
    const renderSystem = new RenderSystem(this.#app)

    this.#entities.forEach(entity => {
      backgroundRenderSystem.addEntity(entity)
      renderSystem.addEntity(entity)
    })

    this.#systems.push(backgroundRenderSystem, renderSystem)
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
          this.#updateText()

          if (this.#itemsLeft === 0) this.#levelEndAction()
        })
    }
  }

  #levelEndAction = () => {
    this.#lvCounter++

    if (this.#lvCounter > this.#maxLevelsValue) {
      this.#showCompletionMessage()
      return
    }

    this.switchLevel(this.#lvCounter)
  }

  #updateText = () => {
    if (!this.#textFound) {
      this.#textFound = new Text(`Осталось предметов: ${this.#itemsLeft}`, {fill: 'white'})
      this.#textFound.position.set(20, 20)
      this.#app.stage.addChild(this.#textFound)
    } else {
      this.#textFound.text = `Осталось предметов: ${this.#itemsLeft}`
    }
  }

  #showCompletionMessage = () => {
    const winMessage = new Text('Все предметы найдены!', {fill: 'white'})
    winMessage.position.set(this.#app.view.width / 2, this.#app.view.height / 2)
    winMessage.anchor.set(0.5)
    this.#app.stage.addChild(winMessage)
  }
}

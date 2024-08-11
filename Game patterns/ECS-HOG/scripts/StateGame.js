import {Texture, Text} from '../assets/lib/pixi.mjs'
import {LEVELS} from './CONFIG.js'

// Entity
import Entity from './ecs/entities/Entity.js'
// Components
import ContainerComponent from './ecs/components/ContainerComponent.js'
import PositionComponent from './ecs/components/PositionComponent.js'
import BackgroundComponent from './ecs/components/BackgroundComponent.js'
import InteractionComponent from './ecs/components/InteractionComponent.js'
// Systems
import RenderSystem from './ecs/systems/RenderSystem.js'
import BackgroundRenderSystem from './ecs/systems/BackgroundRenderSystem.js'
import LevelManager from './components/LevelManager.js'

export default class StateGame {
  #app = null
  #entities = new Map()
  #systems =  new Map()

  #itemsLeft = null
  #textFound = null
  #level = null
  #lvCounter = 1
  #maxLevelsValue = Object.keys(LEVELS).length

  constructor(app, level = 1) {
    this.#app = app
    this.#level = level

    this.levelManager = new LevelManager(this.#app)
  }

  enter = () => {
    this.#createEntities()
    this.#initSystems()
    this.#updateText()

    this.#systems.forEach(system => system.update())
  }

  findEntity = (id) => {
    return this.#entities.get(id)
  }

  switchLevel = (newLevel) => {
    this.#level = newLevel
    this.#itemsLeft = LEVELS[this.#level].items
    this.levelManager.clearStage(this.#entities)
    this.levelManager.clearEntitiesAndSystems(this.#entities, this.#systems)
    this.enter()
  }

  #createEntities = () => {
    const levelConfig = LEVELS[this.#level]
    this.#itemsLeft = levelConfig.items

    this.#createBackground(levelConfig)
    this.#createHogItems(levelConfig)
  }

  #createBackground = (levelConfig) => {
    const backgroundEntity = new Entity(`background-${levelConfig.background}`)
    const backgroundTexture = Texture.from(levelConfig.background)
    const backgroundComponent = new BackgroundComponent(backgroundEntity, backgroundTexture)

    backgroundEntity.addComponent(backgroundComponent)
    this.#entities.set(backgroundEntity.id, backgroundEntity)
  }

  #createHogItems = (levelConfig) => {
    levelConfig.items.forEach(({name: textureName, x, y}, i) => {
      const hogItemEntity = new Entity(`hogItem-${textureName}`)

      const containerComponent = new ContainerComponent(Texture.from(textureName))
      containerComponent.view.once('pointerdown', () => this.#onItemClicked(hogItemEntity))

      hogItemEntity.addComponent(new PositionComponent(x, y))
      hogItemEntity.addComponent(containerComponent)
      hogItemEntity.addComponent(new InteractionComponent())

      this.#entities.set(hogItemEntity.id, hogItemEntity)
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

    this.#systems.set('backgroundRenderSystem', backgroundRenderSystem)
    this.#systems.set('renderSystem', renderSystem)
  }

  #onItemClicked = (entity) => {
    const containerComponent = entity.getComponent(ContainerComponent)
    if (containerComponent) {
      const view = containerComponent.view

      gsap.timeline()
        .to(view.scale, {x: 1.5, y: 1.5, duration: 0.5})
        .to(view, {alpha: 0, duration: 0.5}, '<')
        .eventCallback('onComplete', () => {
          this.#app.stage.removeChild(view)
          this.#itemsLeft -= 1
          this.#updateText()

          // Удаляем сущность из Map
          this.#entities.delete(entity.id)

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

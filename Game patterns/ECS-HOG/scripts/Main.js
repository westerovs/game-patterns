import {Application} from '../assets/lib/pixi.mjs'
import {assetsMap} from './assetsMap.js'
import {CONFIG} from './CONFIG.js'
import LevelState from './LevelState.js'

const App = new Application(CONFIG)
document.body.appendChild(App.view)

class Game {
  constructor() {
    this.app = App
    this.levelState = new LevelState(this.app, 1)
  }

  preload() {
    assetsMap.sprites.forEach((value) => this.app.loader.add(value.name, value.url))
    this.app.loader.onComplete.add(this.startGame.bind(this))
  }

  init() {
    this.preload()
    this.app.loader.load()
  }

  startGame() {
    this.levelState.enter()
  }
}

new Game().init()


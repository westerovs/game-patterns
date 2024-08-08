import {Application} from '../assets/lib/pixi.mjs'
import {assetsMap} from './assetsMap.js'
import {config} from './config.js'
import StateGame from './StateGame.js'

const App = new Application(config)
document.body.appendChild(App.view)

class Game {
  constructor() {
    this.app = App
    this.stateGame = new StateGame(this.app)
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
    console.log(this.stateGame)
    this.stateGame.enter()
  }
}

new Game().init()


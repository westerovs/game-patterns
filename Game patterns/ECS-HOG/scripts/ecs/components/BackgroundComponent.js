import {Sprite} from '../../../assets/lib/pixi.mjs'
import Component from './Component.js'

export default class BackgroundComponent extends Component {
  constructor(entity, texture) {
    super(entity)
    this.sprite = new Sprite(texture)
    this.sprite.anchor.set(0.5)
    this.sprite.position.set(window.innerWidth / 2, window.innerHeight / 2)
  }
}


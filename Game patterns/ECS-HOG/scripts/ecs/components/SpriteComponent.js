import {Sprite} from '../../../assets/lib/pixi.mjs'
import Component from './Component.js'

export default class SpriteComponent extends Component {
  constructor(texture) {
    super()

    this.texture = texture
    this.sprite = new Sprite(this.texture)
  }
}

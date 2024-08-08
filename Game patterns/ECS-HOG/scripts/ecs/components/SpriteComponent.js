import {Sprite} from '../../../assets/lib/pixi.mjs'

export default class SpriteComponent {
  constructor(texture) {
    this.texture = texture
    this.sprite = new Sprite(this.texture)
  }
}

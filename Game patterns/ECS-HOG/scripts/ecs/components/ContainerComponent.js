import { Container, Sprite } from '../../../assets/lib/pixi.mjs'
import Component from './Component.js'

export default class ContainerComponent extends Component {
  #view = new Container()

  constructor(texture) {
    super()

    this.#createView(texture)
  }

  #createView = (texture) => {
    const sprite = new Sprite(texture)
    this.#view.addChild(sprite)
  }

  // Геттер для получения контейнера
  get view() {
    return this.#view
  }

  // Метод для добавления дополнительных элементов в контейнер
  addChild(element) {
    this.#view.addChild(element)
  }
}

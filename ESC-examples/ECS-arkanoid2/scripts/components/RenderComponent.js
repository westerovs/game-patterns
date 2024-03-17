export default class RenderComponent {
  #image;

  constructor(image) {
    this.#image = image;
  }

  get image() {
    return this.#image;
  }
}

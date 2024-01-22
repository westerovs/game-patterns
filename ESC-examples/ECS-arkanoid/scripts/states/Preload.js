export default class Preload {
  #sprites = {
    background: new Image(),
    ball: new Image(),
    platform: new Image(),
    block: new Image(),
  }
  #loaded = 0
  #required = Object.keys(this.#sprites).length

  loadGraphics = (callback) => {
    for (let key in this.#sprites) {
      this.#sprites[key].src = `img/${key}.png`
      this.#sprites[key].onload = () => {
        if (++this.#loaded >= this.#required) {
          callback(this.#sprites)
        }
      }
    }
  }
}

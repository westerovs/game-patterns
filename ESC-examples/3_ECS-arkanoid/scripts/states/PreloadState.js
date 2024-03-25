export default class PreloadState {
  #sprites = {
    background: new Image(),
    ball: new Image(),
    platform: new Image(),
    block: new Image(),
  }
  #required = Object.keys(this.#sprites).length

  loadGraphics = () => {
    return new Promise(resolve => {
      let loaded = 0

      Object.keys(this.#sprites).forEach((key) => {
        this.#sprites[key].src = `./img/${key}.png`
        this.#sprites[key].onload = () => {
          loaded++
          if (loaded >= this.#required) resolve(this.#sprites)
        }
      })
    })

  }
}

const loadGraphics = (callback) => {
  const sprites = {
    background: new Image(),
    ball: new Image(),
    platform: new Image(),
    block: new Image(),
  }

  let loaded = 0
  const required = Object.keys(sprites).length

  for (let key in sprites) {
    sprites[key].src = `img/${key}.png`
    sprites[key].onload = () => {
      if (++loaded >= required) {
        callback(sprites)
      }
    }
  }
}

export {
  loadGraphics,
}

const randomPosition = (min = 200, max = 1166) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {
  randomPosition,
}

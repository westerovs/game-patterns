const randomPosition = (min = 200, max = 1366) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {
  randomPosition,
}

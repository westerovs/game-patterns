export default class Alien {
  constructor(game) {
    this.game = game
    this.spriteWidth = 360
    this.spriteHeight = 360
    this.width = this.spriteWidth
    this.height = this.spriteHeight
    this.x = (this.game.width * 0.5) - (this.width * 0.5)
    this.y = (this.game.width * 0.5) - (this.width * 0.5)
    this.color = 'green'
    this.counter = 0
    this.maxCount = 200
    this.image = document.querySelector('.locustmorph')
    this.frameX = 0
    this.frameY = 0
    this.maxFrame = 38
  }

  draw(context) {
    (this.frameX < this.maxFrame) ? this.frameX++ : this.frameX = 0

    context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
      this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}

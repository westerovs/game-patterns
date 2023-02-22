// Ещё без observer`a !!!

class Game {
  constructor() {
    this.game = null
    
    this.RECT_COUNT = 5
    this.rect1      = null
    this.rect2      = null
    this.rect3      = null
    this.rect4      = null
    this.rect5      = null
  
    this.text    = null
    this.barText = null
    this.textStyle = {
      font        : "bold 32px Arial",
      fill        : "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };
  
    this.MaxCount = this.RECT_COUNT
    this.counterRectOnBase = 0
  }
  
  init() {
    this.game = new Phaser.Game(
      1366,
      1366,
      Phaser.CANVAS,
      null,
      {
        preload: this.preload,
        create : this.create,
        update : this.update,
      })
  }
  
  preload = () => {
    this.game.load.image('block1', '/src/img/block1.png')
  }
  
  create = () => {
    this.#createText()
    this.#createRectangles()
    this.#runAnimationMove()
  }
  
  #createRect = (x, y) => {
    return this.game.add.sprite(x, y, 'block1')
  }
  
  #createRectangles = () => {
    this.rect1       = this.#createRect(0, 500)
    this.rect1._name = 'rect1'
    
    this.rect2       = this.#createRect(250, 500)
    this.rect2._name = 'rect2'
    
    this.rect3       = this.#createRect(500, 500)
    this.rect3._name = 'rect3'
    
    this.rect4       = this.#createRect(750, 500)
    this.rect4._name = 'rect4'
    
    this.rect5       = this.#createRect(1000, 500)
    this.rect5._name = 'rect5'
  }
  
  #runAnimationMove = () => {
    this.#onMoveTween(this.rect1, -500, 0)
      .onComplete.add(() => this.#report(this.rect1))
    
    this.#onMoveTween(this.rect2, -500, 0.5)
      .onComplete.add(() => this.#report(this.rect2))
    
    this.#onMoveTween(this.rect3, -500, 1)
      .onComplete.add(() => this.#report(this.rect3))
    
    this.#onMoveTween(this.rect4, -500, 1.5)
      .onComplete.add(() => this.#report(this.rect4))
    
    this.#onMoveTween(this.rect5, -500, 2)
      .onComplete.add(() => this.#report(this.rect5))
  }
  
  #onMoveTween = (rect, posY, delay) => {
    return this.game.add.tween(rect.position)
      .to({y: rect.position.y + posY,},
        Phaser.Timer.HALF, Phaser.Easing.Linear.None, true, 1000 * delay)
  }
  
  #report(rect) {
    rect.tint = 0x3AE2CE
    this.counterRectOnBase += 1
    this.text.setText(`COUNTER: ${ this.counterRectOnBase }`)
    this.#isEndGame()
  }
  
  #createText = () => {
    this.barText = this.game.add.graphics();
    this.barText.beginFill(0xC0C0C0, 0.5);
    this.barText.drawRect(0, 800, this.game.width, 100);
    
    this.text = this.game.add.text(0, 0, `COUNTER: ${ this.counterRectOnBase }`, this.textStyle);
    this.text.setShadow(5, 5, 'rgba(0,0,0,1)', 10);
    //  границы x, y и ширину и высоту текста
    this.text.setTextBounds(0, 820, this.game.width, 50);
  }
  
  #isEndGame = () => {
    if (this.counterRectOnBase === this.MaxCount) {
      this.text.setText('CONGRATULATIONS YOU WIN!')
    }
  }
}

new Game().init()










// Этот компонент хранит скорость сущности по обеим осям, x и y.
export default class MovementComponent {
  #velocityX;
  #velocityY;

  constructor(velocityX, velocityY) {
    this.#velocityX = velocityX;
    this.#velocityY = velocityY;
  }

  get velocityX() {
    return this.#velocityX;
  }

  set velocityX(value) {
    this.#velocityX = value;
  }

  get velocityY() {
    return this.#velocityY;
  }

  set velocityY(value) {
    this.#velocityY = value;
  }
}

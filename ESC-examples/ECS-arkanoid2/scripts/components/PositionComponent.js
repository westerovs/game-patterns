// PositionComponent.js
// Этот компонент будет отвечать за хранение и управление позицией объектов в игре.
export default class PositionComponent {
  // Используем приватные поля класса для хранения координат x и y
  #x
  #y

  constructor(x, y) {
    this.#x = x
    this.#y = y
  }

  // Геттер для x
  get x() {
    return this.#x
  }

  // Сеттер для x
  set x(value) {
    this.#x = value
  }

  // Геттер для y
  get y() {
    return this.#y
  }

  // Сеттер для y
  set y(value) {
    this.#y = value
  }
}

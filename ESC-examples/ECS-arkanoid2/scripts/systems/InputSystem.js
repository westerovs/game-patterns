// регистрирует нажатия клавиш и обновляет движение платформы в ответ на нажатия стрелок влево и вправо.
// Также предусмотрено место для логики, которая будет запускать шарик при нажатии пробела.
export default class InputSystem {
  // Конструктор инициализирует состояние нажатых клавиш
  constructor() {
    this.pressedKeys = new Set();

    // Обработчики событий для клавиш
    window.addEventListener('keydown', event => {
      this.pressedKeys.add(event.code);
    });

    window.addEventListener('keyup', event => {
      this.pressedKeys.delete(event.code);
    });
  }

  // Метод для обновления сущностей на основе ввода
  run(entities) {
    entities.forEach(entity => {
      const movementComponent = entity.getComponent('MovementComponent');
      if (!movementComponent) return;

      // Обработка нажатий клавиш для управления платформой
      if (this.pressedKeys.has('ArrowLeft')) {
        movementComponent.velocityX = -5; // Двигаем платформу влево
      } else if (this.pressedKeys.has('ArrowRight')) {
        movementComponent.velocityX = 5; // Двигаем платформу вправо
      } else {
        movementComponent.velocityX = 0; // Останавливаем платформу
      }

      // Обработка нажатия пробела для запуска шарика
      if (this.pressedKeys.has('Space')) {
        // Здесь будет логика запуска шарика
      }
    });
  }
}

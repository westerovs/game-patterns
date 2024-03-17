// Эта система итерирует через каждую сущность, проверяет наличие
// компонентов движения и позиции, и если оба присутствуют,
// обновляет координаты позиции сущности на основе её скорости.
export default class MovementSystem {
  run(entities) {
    // Перебираем все сущности
    entities.forEach(entity => {
      const positionComponent = entity.getComponent('PositionComponent');
      const movementComponent = entity.getComponent('MovementComponent');

      // Обновляем позицию на основе скорости
      if (positionComponent && movementComponent) {
        positionComponent.x += movementComponent.velocityX;
        positionComponent.y += movementComponent.velocityY;
      }
    });
  }
}

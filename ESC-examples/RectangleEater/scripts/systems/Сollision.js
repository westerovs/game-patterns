export default class CollisionSystem {
  #doesIntersect(obj1, obj2) {
    // Функция для проверки пересечения двух прямоугольников
    const rect1 = {
      x: obj1.position.x - obj1.size,
      y: obj1.position.y - obj1.size,
      height: obj1.size * 2,
      width: obj1.size * 2
    };
    const rect2 = {
      x: obj2.position.x - obj2.size,
      y: obj2.position.y - obj2.size,
      height: obj2.size * 2,
      width: obj2.size * 2
    };

    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y
    );
  }

  tick(entities) {
    const entityIdsCollidedWith = [];

    Object.keys(entities).forEach(entityId => {
      const curEntity = entities[entityId];

      // Сброс цвета внешнего вида
      curEntity.components.appearance.colors.r = 0;

      if (
        curEntity.components.appearance &&
        curEntity.components.playerControlled &&
        curEntity.components.position
      ) {
        // Очистка существующих свойств внешнего вида столкновения
        curEntity.components.appearance.colors.r = 0;

        Object.keys(entities).forEach(entityId2 => {
          const targetEntity = entities[entityId2];

          if (
            !targetEntity.components.playerControlled &&
            targetEntity.components.position &&
            targetEntity.components.collision &&
            targetEntity.components.appearance &&
            this.#doesIntersect(
              {
                position: curEntity.components.position,
                size: curEntity.components.appearance.size
              },
              {
                position: targetEntity.components.position,
                size: targetEntity.components.appearance.size
              }
            )
          ) {
            // Логика обработки столкновения...
            // Меняем цвет при столкновении, управляем здоровьем и другие эффекты
            // Обновление здоровья, очков и т.д.
            // Этот код может быть дополнен в соответствии с логикой столкновения вашей игры

            // Пример изменения цвета при столкновении
            curEntity.components.appearance.colors.r = 255;
            targetEntity.components.appearance.colors.r = 150;

            // Удаление столкнувшейся сущности (пример)
            delete entities[entityId2];

            // Остановка дальнейшего перебора, если необходимо
            return;
          }
        });
      }
    });

    // Логика добавления новых сущностей после столкновения, если это необходимо
    // Добавление сущностей может зависеть от игровой логики и условий
  }
}


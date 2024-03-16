export default class RenderSystem {
  #clearCanvas() {
    // Сохранение текущей матрицы трансформации
    ECS.context.save();

    // Использование единичной матрицы при очистке канваса
    ECS.context.setTransform(1, 0, 0, 1, 0, 0);
    ECS.context.clearRect(0, 0, ECS.$canvas.width, ECS.$canvas.height);

    // Восстановление трансформации
    ECS.context.restore();
  }

  tick(entities) {
    // Очистка канваса перед каждым обновлением
    this.#clearCanvas();

    // Перебор всех сущностей
    for (let entityId in entities) {
      const curEntity = entities[entityId];

      // Логика выполняется только если у сущности есть компоненты внешнего вида и позиции
      if (curEntity.components.appearance && curEntity.components.position) {
        // Формирование стиля заливки на основе данных о цвете сущности
        let fillStyle = `rgba(${curEntity.components.appearance.colors.r},${curEntity.components.appearance.colors.g},${curEntity.components.appearance.colors.b}`;

        fillStyle += curEntity.components.collision ? ',1)' : ',0.1)';
        ECS.context.fillStyle = fillStyle;

        // Различное отображение для больших квадратов, которые не контролируются игроком
        if (!curEntity.components.playerControlled && curEntity.components.appearance.size > 12) {
          ECS.context.fillStyle = 'rgba(0,0,0,0.8)';
        }

        // Рисование маленькой чёрной линии вокруг каждого прямоугольника
        ECS.context.strokeStyle = 'rgba(0,0,0,1)';

        // Рисование прямоугольника
        ECS.context.fillRect(
          curEntity.components.position.x - curEntity.components.appearance.size,
          curEntity.components.position.y - curEntity.components.appearance.size,
          curEntity.components.appearance.size * 2,
          curEntity.components.appearance.size * 2
        );

        // Обводка прямоугольника
        ECS.context.strokeRect(
          curEntity.components.position.x - curEntity.components.appearance.size,
          curEntity.components.position.y - curEntity.components.appearance.size,
          curEntity.components.appearance.size * 2,
          curEntity.components.appearance.size * 2
        );
      }
    }
  }
}


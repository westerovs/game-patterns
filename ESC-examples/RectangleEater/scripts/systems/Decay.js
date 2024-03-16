export default class DecaySystem {
  tick(entities) {
    Object.keys(entities).forEach(entityId => {
      const curEntity = entities[entityId];

      // Проверка, мертва ли сущность
      if (curEntity.components.playerControlled && curEntity.components.health.value < 0) {
        ECS.game.endGame();
        return;
      }

      if (curEntity.components.health) {
        // Уменьшение здоровья в зависимости от текущего уровня
        const health = curEntity.components.health.value;
        if (health < 0.7) {
          curEntity.components.health.value -= 0.01;
        } else if (health < 2) {
          curEntity.components.health.value -= 0.03;
        } else if (health < 10) {
          curEntity.components.health.value -= 0.07;
        } else if (health < 20) {
          curEntity.components.health.value -= 0.15;
        } else {
          curEntity.components.health.value -= 1; // Быстрое ухудшение для очень больших сущностей
        }

        // Обновление внешнего вида в зависимости от здоровья
        if (curEntity.components.health.value >= 0) {
          if (curEntity.components.playerControlled) {
            curEntity.components.appearance.colors = curEntity.components.health.value > 10
              ? { r: 50, g: 255, b: 50 }
              : { r: 255, g: 50, b: 50 };
          }

          if (curEntity.components.appearance.size) {
            curEntity.components.appearance.size = curEntity.components.health.value;
          }
        } else {
          // Сущность мертва
          if (curEntity.components.playerControlled) {
            ECS.game.endGame();
          } else {
            delete entities[entityId];
          }
        }
      }
    });
  }
}


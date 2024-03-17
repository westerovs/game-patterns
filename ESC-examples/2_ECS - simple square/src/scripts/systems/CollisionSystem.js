// CollisionSystem.js
import PositionComponent from '../components/PositionComponent.js'
import CollidableComponent from '../components/CollidableComponent.js'

export default class CollisionSystem {
  constructor(boundaries) {
    this.boundaries = boundaries;
  }

  update(entities) {
    Object.values(entities).forEach(entity => {
      if (entity.components.PositionComponent && entity.components.CollidableComponent) {
        const position = entity.getComponent(PositionComponent);
        const collidable = entity.getComponent(CollidableComponent);

        // Проверка столкновений с границами
        position.x = Math.max(this.boundaries.minX, Math.min(position.x, this.boundaries.maxX - collidable.width));
        position.y = Math.max(this.boundaries.minY, Math.min(position.y, this.boundaries.maxY - collidable.height));

        // Дополнительные проверки для столкновений с другими объектами могут быть добавлены здесь
      }
    });
  }
}

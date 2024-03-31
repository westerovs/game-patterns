export default class CollisionSystem {
  constructor(boundaries) {
    this.boundaries = boundaries
  }

  update(entities) {
    Object.values(entities).forEach(entity => {
      if (entity.components.PositionComponent && entity.components.CollidableComponent) {
        const position = entity.components.PositionComponent
        const collidable = entity.components.CollidableComponent

        // Проверка столкновений с границами
        position.x = Math.max(this.boundaries.minX,
          Math.min(position.x, this.boundaries.maxX - collidable.width))
        position.y = Math.max(this.boundaries.minY,
          Math.min(position.y, this.boundaries.maxY - collidable.height))
      }
    })
  }
}

/*
Система ограничивается обработкой столкновений с предопределёнными границами, что упрощает её структуру и повышает читаемость.
Однако в более сложных играх может потребоваться расширение функционала для обработки столкновений между произвольными объектами.

Оптимизация производительности:
При большом количестве сущностей перебор всех объектов на каждом кадре может стать узким местом. Возможно, стоит
рассмотреть способы оптимизации, такие как пространственное разбиение (quadtree, spatial hash) для сокращения числа проверяемых столкновений.
* */

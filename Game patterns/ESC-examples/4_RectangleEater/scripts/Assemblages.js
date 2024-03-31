/* =========================================================================
 *
 * Assemblages.js
 *  Contains assemblages. Assemblages are essentially entity "templates"
 *
 * ========================================================================= */

export default class Assemblages {
  static CollisionRect() {
    // Базовый прямоугольник для столкновений
    const entity = new ECS.Entity()
    entity.addComponent(new ECS.Components.Appearance())
    entity.addComponent(new ECS.Components.Position())
    entity.addComponent(new ECS.Components.Collision())
    return entity
  }
}


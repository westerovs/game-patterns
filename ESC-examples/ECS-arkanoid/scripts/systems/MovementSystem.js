import PositionComponent from '../components/PositionComponent.js'
import MovementComponent from '../components/MovementComponent.js'

export default class MovementSystem {
  run(entity) {
    const position = entity.getComponent(PositionComponent);
    const movement = entity.getComponent(MovementComponent);

    if (position && movement) {
      position.x += movement.dx;
      position.y += movement.dy;
    }
  }
}

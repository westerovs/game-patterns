export default class MovementSystem {
  constructor() {
    this.entities = [];
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  update() {
    this.entities.forEach(entity => {
      const position = entity.getComponent('PositionComponent');
      const sprite = entity.getComponent('RenderComponent').sprite;
      position.x += 0.1
      sprite.style.left = `${Math.trunc(position.x)}px`; // Просто смещаем сущность вправо в каждом обновлении
      sprite.style.left = `${Math.trunc(position.x)}px`; // Просто смещаем сущность вправо в каждом обновлении

      // console.log(Math.trunc(position.x), Math.trunc(position.y))
    });
  }
}

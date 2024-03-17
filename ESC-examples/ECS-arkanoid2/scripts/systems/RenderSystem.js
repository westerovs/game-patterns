// Эта система RenderSystem принимает контекст канваса, что позволяет ей рисовать объекты.
// Метод render отвечает за отрисовку отдельной сущности, а метод run используется
// для отрисовки всех сущностей, которые должны быть нарисованы в текущем кадре.
// RenderSystem.js
export default class RenderSystem {
  constructor(context) {
    this.ctx = context;
  }

  render(entity) {
    const positionComponent = entity.getComponent('PositionComponent');
    const renderComponent = entity.getComponent('RenderComponent');

    if (!positionComponent || !renderComponent) {
      return; // Если компоненты отсутствуют, то сущность не рендерится
    }

    // Если у компонента рендеринга есть изображение, используем его для отрисовки
    if (renderComponent.image) {
      this.ctx.drawImage(
        renderComponent.image,
        positionComponent.x,
        positionComponent.y
      );
    } else {
      // Если изображение не указано, рисуем прямоугольник с цветом
      this.ctx.fillStyle = renderComponent.color || 'white';
      this.ctx.fillRect(
        positionComponent.x,
        positionComponent.y,
        renderComponent.width,
        renderComponent.height
      );
    }
  }

  run(entities) {
    entities.forEach(entity => this.render(entity));
  }
}

export default class Position {
  constructor(params = {}) {
    // Генерация случайных значений, если они не переданы
    // ВНИМАНИЕ: Для учебного пособия мы связываем случайные значения с шириной/высотой канваса,
    // но в идеале это должно быть декуплировано (компоненту не следует знать размеры канваса)
    this.x = params.x || 20 + (Math.random() * (ECS.$canvas.width - 20) | 0);
    this.y = params.y || 20 + (Math.random() * (ECS.$canvas.height - 20) | 0);
  }
  name = 'position';
}

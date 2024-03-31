export default class Appearance {
  constructor(params = {}) {
    // Внешний вид определяет данные для цвета и размера
    this.colors = params.colors || { r: 0, g: 100, b: 150 };
    this.size = params.size || 1 + (Math.random() * 30 | 0);
  }
  name = 'appearance';
}

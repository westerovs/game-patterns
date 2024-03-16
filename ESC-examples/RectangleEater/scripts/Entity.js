/* =========================================================================
 *
 * Entity.js
 *  Definition of our "Entity". Abstractly, an entity is basically an ID.
 *  Here we implement an entity as a container of data (container of components)
 *
 * ========================================================================= */

export default class Entity {
  static _count = 0;

  constructor() {
    // Генерация псевдослучайного ID
    this.id = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) +
      Entity._count;

    // Увеличение счётчика
    Entity._count++;

    // Данные компонентов будут храниться в этом объекте
    this.components = {};
  }

  addComponent(component) {
    // Добавление данных компонента к сущности
    this.components[component.name] = component;
    return this;
  }

  removeComponent(componentName) {
    // Удаление данных компонента путём удаления ссылки на него.
    // Позволяет передать как функцию компонента, так и строку с именем компонента
    const name = typeof componentName === 'function' ? componentName.prototype.name : componentName;

    delete this.components[name];
    return this;
  }

  print() {
    // Функция для печати/логирования информации о сущности
    console.log(JSON.stringify(this, null, 4));
    return this;
  }
}



export default class Teacher {
  render(name) {
    return `
    <div class='card teacher'>
      Карточка преподавателя: ${name}
    </div>
    `;
  }
}

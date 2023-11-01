export default class Student {
  create(name) {
    return `
    <div class='card student'>
      Карточка студента: ${name}
    </div>
    `;
  }
}


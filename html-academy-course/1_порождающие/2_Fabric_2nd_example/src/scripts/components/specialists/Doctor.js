export default class Doctor {
  get(name) {
    return `
    <div class='card doctor'>
      Карточка врача: ${name}
    </div>
    `;
  }
}

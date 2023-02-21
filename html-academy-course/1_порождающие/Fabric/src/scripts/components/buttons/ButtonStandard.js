export default class ButtonStandard {
  create(name) {
    return `
      <button class="double-btn">
        ${name}
      </button>
    `;
  }
}


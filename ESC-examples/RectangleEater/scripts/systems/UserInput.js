export default class UserInputSystem {
  #userInputPosition = {
    x: -100,
    y: -100,
    deltaX: false,
    deltaY: false
  };

  constructor() {
    this.#initializeUserInputPosition();
    this.#setupMouseHandling();
    this.#setupHammerEvents();
  }

  #hasTouchEnabled() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }

  #initializeUserInputPosition() {
    if (this.#hasTouchEnabled()) {
      this.#userInputPosition = {
        x: ECS.$canvas.width / 2,
        y: ECS.$canvas.height / 2,
        lastX: ECS.$canvas.width / 2,
        lastY: ECS.$canvas.height / 2
      };
    }
  }

  #updateMousePosition(evt) {
    const rect = ECS.$canvas.getBoundingClientRect();
    this.#userInputPosition.x = evt.clientX - rect.left;
    this.#userInputPosition.y = evt.clientY - rect.top;
    this.#userInputPosition.touch = false;
  }

  #setupMouseHandling() {
    ECS.$canvas.addEventListener('mousemove', (evt) => {
      this.#updateMousePosition(evt);
    }, false);
  }

  #setupHammerEvents() {
    const mc = new Hammer.Manager(ECS.$canvas);
    if (this.#hasTouchEnabled()) {
      mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
      mc.on("panstart", (ev) => {
        const rect = ECS.$canvas.getBoundingClientRect();

        this.#userInputPosition.lastX = this.#userInputPosition.x;
        this.#userInputPosition.lastY = this.#userInputPosition.y;

        this.#userInputPosition.x = ev.center.x - rect.left - 10;
        this.#userInputPosition.y = ev.center.y - rect.top - 10;
      });

      mc.on("panmove", (ev) => {
        this.#userInputPosition.x = this.#userInputPosition.lastX + ev.deltaX;
        this.#userInputPosition.y = this.#userInputPosition.lastY + ev.deltaY;
      });

      mc.on("panend", (ev) => {
        // this.#userInputPosition.lastX = this.#userInputPosition.x;
        // this.#userInputPosition.lastY = this.#userInputPosition.y;
      });
    }
  }

  tick(entities) {
    for (let entityId in entities) {
      const curEntity = entities[entityId];

      if (curEntity.components.playerControlled) {
        curEntity.components.position.x = this.#userInputPosition.x;
        curEntity.components.position.y = this.#userInputPosition.y;
      }
    }
  }
}

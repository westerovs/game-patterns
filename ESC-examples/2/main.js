/*
I created three systems:

- InputSystem:
    To handle (keyboard) input.
    It interacts with PositionComponent components, by modifying their velocity "vectors"
    and/or changing positions when the Spacebar is pressed (resets all entities to new random positions).

- MovementSystem:
    Updates PositionComponent components movement logic:
    update position based on velocity, or stop if at a boundary (edge)

- RenderSystem:
    Initializes the screen (an HTML canvas) and tells RenderComponent components to render based on their PositionComponent values.

Two components:
- PositionComponent: Keeps (x,y) and a velocity vector
- RenderComponent: Keeps the "sprite" data

A few managers::
- E_entityManager: Entities do not exist as a class; they are mere identifiers. The sole purpose of EntityManager is to generate the entity IDs and keep track of them
- C_componentManager: Keeps track of all components of each entity. When a system is going through an update sweep, queries this manager to ask for all components required; e.g., the RenderSystem asks for PositionComponent and RenderComponent, ensuring that any entity has both (or will be skipped)
- S_systemManager: A simple list of all configured systems, plus an update() method that, surprise, triggers an update cycle on all systems
*/

import Game from './src/engine/Game.js'

let game = null

window.addEventListener('load', (event) => {
  game = new Game({
      canvasId: 'game-canvas',
      loggingEnabled: false
    }
  )
  game.start()
})

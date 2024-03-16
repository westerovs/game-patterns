// Компоненты - это просто данные.
import Appearance from './components/Appearance.js'
import Health from './components/Health.js'
import Position from './components/Position.js'
import PlayerControlled from './components/PlayerControlled.js'
import Collision from './components/Collision.js'

const COMPONENTS = {
  Appearance: Appearance,
  Health: Health,
  Position: Position,
  PlayerControlled: PlayerControlled,
  Collision: Collision
}

export {
  COMPONENTS
}

import Entity from './Entity.js'

import PositionComponent from '../components/PositionComponent.js'
import MovementComponent from '../components/MovementComponent.js'
import RenderComponent from '../components/RenderComponent.js'

const createBall = () => {
  const ball = new Entity()
  ball.addComponent(new PositionComponent(320, 280))
  ball.addComponent(new MovementComponent(0, 3, 3))
  ball.addComponent(new RenderComponent('ball', 80, 20))

  return ball
}

const createBlocks = () => {
  const blocks = []
  const width = 60
  const height = 20
  const offsetBetween = 4

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      const block = new Entity()
      block.addComponent(new PositionComponent((col * width), 0))
      block.addComponent(new RenderComponent('block', width, height))
      blocks.push(block)
    }
  }

  return blocks
}

const createPlatform = () => {
  const platform = new Entity()
  platform.addComponent(new PositionComponent(280, 300)) // Начальная позиция
  platform.addComponent(new MovementComponent(0, 0, 6)) // Начальное движение
  platform.addComponent(new RenderComponent('platform', 100, 14))

  return platform
}

export const Entities = [
  createBall(),
  ...createBlocks(),
  createPlatform(),
]

import {randomPosition} from './utils/utils.js'


const CONFIG = {
  width: 1366,
  height: 1366,
  backgroundColor: 0x111444,
}

const LEVELS = {
  1: {
    background: 'backLv1',
    items: [
      {name: 'blockA', x: randomPosition(), y: randomPosition()},
      {name: 'blockB', x: randomPosition(), y: randomPosition()}
    ]
  },
  2: {
    background: 'backLv2',
    items: [
      {name: 'blockC', x: randomPosition(), y: randomPosition()},
      {name: 'blockA', x: randomPosition(), y: randomPosition()},
      {name: 'blockB', x: randomPosition(), y: randomPosition()}
    ]
  },
  3: {
    background: 'backLv3',
    items: [
      {name: 'blockB', x: randomPosition(), y: randomPosition()},
      {name: 'blockC', x: randomPosition(), y: randomPosition()}
    ]
  },
  4: {
    background: 'backLv4',
    items: [
      {name: 'blockC', x: randomPosition(), y: randomPosition()},
      {name: 'blockA', x: randomPosition(), y: randomPosition()},
      {name: 'blockB', x: randomPosition(), y: randomPosition()}
    ]
  },
}


export {
  LEVELS,
  CONFIG
}

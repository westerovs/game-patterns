import {render} from './scripts/utils/utils.js'
import Fabric from './scripts/components/Fabric.js'

const PEOPLE_LIST = [
  {
    name: 'Иван',
    specialist: 'Врач'
  },
  {
    name: 'Владимир',
    specialist: 'Преподаватель'
  },
  {
    name: 'Виталий',
    specialist: 'Студент'
  }
];

const ROOT = document.querySelector('.wrapper')

PEOPLE_LIST.forEach(item => {
  const fabric = new Fabric()
  render(ROOT, fabric.create(item))
})

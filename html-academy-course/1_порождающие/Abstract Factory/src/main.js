import {render} from './scripts/utils/utils.js'
import CatsList from './scripts/components/catsList.js'
import {catsListData} from './scripts/components/mocks/catsListData.js'
import FactoryCatCard from './scripts/components/factory-cat-card.js'
import AbstractFactory from './scripts/components/factory-cat-card.js'
import CatCard from './scripts/components/cat-card.js'
import {CatCardSpecial} from './scripts/components/cat-card-special.js'

const wrapper = document.querySelector('.wrapper')
render(wrapper, CatsList())

const list = wrapper.querySelector('.list')

const TYPES = {
  card: 'card',
  title: 'title',
  default: 'default',
}
const abstractFactory = new AbstractFactory()

// render elements
catsListData.forEach((cat => {
  const card = abstractFactory
    .create(TYPES.title, cat)
    .create(TYPES.card, cat)
  
  render(list, card)
}))


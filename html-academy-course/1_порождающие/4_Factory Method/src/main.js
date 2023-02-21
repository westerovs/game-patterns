import {render} from './scripts/utils/utils.js'
import CatsList from './scripts/components/catsList.js'
import {catsListData} from './scripts/components/mocks/catsListData.js'
import FactoryCatCard from './scripts/components/factory-cat-card.js'

const wrapper = document.querySelector('.wrapper')
render(wrapper, CatsList())

const list = wrapper.querySelector('.list')

catsListData.forEach((cat => {
  render(list, FactoryCatCard(cat))
}))

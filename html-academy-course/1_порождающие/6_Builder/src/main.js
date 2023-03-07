import {render} from './scripts/utils/utils.js'
import CatsList from './scripts/components/catsList.js'
import {catsListData} from './scripts/components/mocks/catsListData.js'
import AbstractFactory from './scripts/components/AbstractFactory.js'

const wrapper = document.querySelector('.wrapper')
render(wrapper, CatsList())
const list = wrapper.querySelector('.list')

const TYPES = {
  card: 'card',
  title: 'title',
  default: 'default',
}

const renderCards = (text) => {
  const abstractFactory = new AbstractFactory()
  
  wrapper.prepend(text)
  
  catsListData.forEach((cat => {
    const card = abstractFactory
      .create(TYPES.title, cat)
      .create(TYPES.card, cat)
    
    render(list, card)
  }))
}


/*
Паттерн строитель
выступает как обёртка
При вызове задаёт текст, метод его создающий возвращает ссылку снова на строителя
и позволяет запустить рендер, в котором в коллбэке уже есть текст
* */
export const Builder = {
  promoText: '',
  
  setPromo: (text) => {
    Builder.promoText = text
    return Builder
  },
  
  render: (callback) => {
    return callback(Builder.promoText)
  },
}

Builder
  .setPromo('Акция! Подробности по телефону!')
  .render(renderCards)

/*
Например, если акция прошла, то можно просто её убрать и всё продолжит работать,
а когда она снова понадобится - раскомментировать её.

Builder
  .setPromo('Акция! Подробности по телефону!')
  .render(renderCards)
*/


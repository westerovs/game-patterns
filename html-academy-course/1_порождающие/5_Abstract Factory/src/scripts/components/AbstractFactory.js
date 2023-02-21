import CatCard from './cat-card.js'
import {CatCardSpecial} from './cat-card-special.js'

// «Абстрактная фабрика» состоит из двух обычных.
// И теперь мы подошли к моменту, почему же она называется «абстрактной».
// Дело в том, что созданные нами ранее методы никогда не будут вызываться вне структуры AbstractFactory.
// Каждая фабрика будет вызываться исключительно через метод create.

class AbstractFactory {
  // вспомогательный атрибут, который мы будем использовать в обеих фабриках.
  title = null
  
  // это фабрика для производства заголовка, который располагается внутри карточки
  factoryTitle(props) {
    console.log(props.name)
    
    switch (props.type) {
      case 'special':
        this.title = `Редкий ${props.name}`
        return this
      default:
        this.title = `${props.name}`
        return this
    }
  }
  
  // в отдельном виде представляет собой паттерн Фабричный метод
  // фабрика для контейнера, в котором содержится вся информация о питомце;
  factoryCard(props) {
    if (this.title) props.name = this.title
  
    switch (props.type) {
      case 'special':
        return new CatCard(props).render()
      default:
        return CatCardSpecial(props)
    }
  }
  
  create(type, props) {
    switch (type) {
      case 'card':
        return this.factoryCard(props)
      case 'title':
        return this.factoryTitle(props)
      default:
        return this
    }
  }
}

export default AbstractFactory

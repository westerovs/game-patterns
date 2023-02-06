import CatCard from './cat-card.js'
import {CatCardSpecial} from './cat-card-special.js'

// Абстрактная Фабрика
// const AbstractFactory = {
//   title: null,
//
//   factoryTitle(props) {
//     switch (props.type) {
//       case 'special':
//         this.title = `Редкий ${props.name}`
//         return this
//       default:
//         this.title = `${props.name}`
//         return this
//     }
//   },
//
//   // в отдельном виде представляет собой паттерн Фабричный метод
//   factoryCard(props) {
//     switch (props.type) {
//       case 'special':
//         props.name = this.title
//         return new CatCard(props).render()
//       default:
//         return CatCardSpecial(props)
//     }
//   },
//
//   create(type, props) {
//     switch (type) {
//       case 'card':
//         return this.factoryCard(props)
//       case 'title':
//         return this.factoryTitle(props)
//       default:
//         return this
//     }
//   },
// }

class AbstractFactory {
  title = null
  
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

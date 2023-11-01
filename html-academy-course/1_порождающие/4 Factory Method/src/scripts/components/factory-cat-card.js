import CatCard from './cat-card.js'
import {CatCardSpecial} from './cat-card-special.js'

// Фабричный метод для производства карточек с котами
const FactoryCatCard = (props) => {
  switch (props.type) {
    case "special":
      return new CatCard(props).render()
    default:
      return CatCardSpecial(props)
  }
}

export default FactoryCatCard

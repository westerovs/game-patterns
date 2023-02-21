import ButtonStandard from './buttons/ButtonStandard.js'
import ButtonAnimate from './buttons/ButtonAnimate.js'
import ButtonBorder from './buttons/ButtonBorder.js'

export default class Fabric {
  create(type) {
    switch (type) {
      case 'Двойная':
        return new ButtonStandard().create('Двойная');
      case 'C анимированной иконкой':
        return new ButtonAnimate().get('Анимированная');
      case 'Кнопка-рамка':
        return new ButtonBorder().render('Кнопка-рамка');
      default:
        return null;
    }
  }
}

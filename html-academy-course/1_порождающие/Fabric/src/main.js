import {render} from './scripts/utils/utils.js'
import Fabric from './scripts/components/Fabric.js'

const BUTTON_LIST = ['Двойная', 'C анимированной иконкой', 'Кнопка-рамка']
const ROOT = document.querySelector('.wrapper')

BUTTON_LIST.forEach((buttonName) => {
  const fabric = new Fabric();
  render(ROOT, fabric.create(buttonName))
});


import {initLang} from './const.js'

const translateTitle = (lang) => {
  const title = document.querySelector('.title')
  
  switch (lang) {
    case 'ru': title.innerHTML = 'ПРИВЕТ МИР!'
      break
    case 'en': title.innerHTML = 'HELLO WORLD !'
      break
  }
}

// перевод при загрузке страницы
translateTitle(initLang)

// слушатель изменения языка
document.addEventListener('change-lang', function (event) {
  const initLang = event.detail.initLang
  
  switch (initLang) {
    case 'ru': translateTitle(initLang)
      break
    case 'en': translateTitle(initLang)
      break
  }
})



















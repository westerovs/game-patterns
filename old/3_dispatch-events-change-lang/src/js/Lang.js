import {LANGUAGES, initLang} from './const.js'

export default class Lang {
  constructor() {
    this.rowLang    = document.querySelector('.row-lang')
    this.btnsLocale = Array.from(document.querySelectorAll('.button'))
    this.btnRu      = document.querySelector('.button[data-lang="ru"]')
    this.btnEn      = document.querySelector('.button[data-lang="en"]')
    this.initLang   = initLang
  }
  
  setInitLang = () => {
    this.btnsLocale.find(lang => {
      if (lang.dataset.lang === this.initLang) lang.classList.add('is-active')
    })
  }
  
  rowLangHandler = (event) => {
    const target = event.target
    
    if (target.dataset.lang === LANGUAGES.RU) {
      this.initLang = LANGUAGES.RU
      
      this.btnRu.classList.add('is-active')
      this.btnEn.classList.remove('is-active')
    }
    if (target.dataset.lang === LANGUAGES.EN) {
      this.initLang = LANGUAGES.EN
      
      this.btnRu.classList.remove('is-active')
      this.btnEn.classList.add('is-active')
    }
    
    this.rowLang.dispatchEvent(new CustomEvent('change-lang', {
      bubbles: true,
      detail: {
        initLang: this.initLang
      }
    }))
  }
  
  init = () => {
    this.setInitLang()
    
    this.rowLang.addEventListener('pointerdown', this.rowLangHandler)
    this.rowLang.addEventListener('keydown', (event) => {
      if (event.code === 'Space') this.rowLangHandler(event)
    })
  }
}
new Lang().init()

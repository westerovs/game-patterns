'use-strict'
const getDataRandom = () => Math.floor(Math.random() * 1000)

// пример двустороннего датабиндинга
class Data {
    constructor() {
        this._value = null
        this.button = document.querySelector('.user__random-name')
        this.input = document.querySelector('.user__name')
        this.pic = document.querySelector('.user__pic')

        this.callback = {}
    }

    get value() {
        return this._value
    }

    set value(newValue) {
        this._value = newValue
        this.input.value = newValue
        this.pic.src = `https://avatars.dicebear.com/api/bottts/${ this.value }.svg`
        console.log('set: ', this._value)
    }

    _onHandler = () => {
        this.value = this.callback.click()
    }

    onSetHandler(type, element, callback) {
        this.callback.click = callback
        element.addEventListener(type, this._onHandler)
    }

    removeListeners() {
        this.button.removeEventListener('click', this._onHandler)
        this.input.removeEventListener('input', this._onHandler)
        console.log('remove')
    }

    init() {
        console.log('init')
        this.onSetHandler('click', this.button, getDataRandom)
        this.onSetHandler('input', this.input, getDataRandom)
    }
}

const firstExemplar = new Data()
firstExemplar.init()

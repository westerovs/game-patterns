export const observer = {
    // ключ в котором хранятся observer`Ы (т.е слушатели)
    _observers: [],
    
    // метод добавляющий слушателей
    addObserver(cb) {
        this._observers.push(cb)
    },
    
    // метод уведомляющий всех
    notify() {
        this._observers.forEach(item => item())
    },
    
    // метод удаляющий слушателей
    removeObserver(cb) {
        this._observers = this._observers.filter(item => item !== cb)
    },
}

// const func1 = () => console.log('function 1')
// const func2 = () => console.log('function 2')
//
// observer.addObserver(func1)
// observer.addObserver(func2)
//

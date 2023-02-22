// observer
export default class Observer {
  constructor() {
    this.news = ''
    this.subscribers = [] // массив подписчиков
  }
  
  // принимает строковое значение новости
  setNews(text) {
    this.news = text
    this.notifyAll()
  }
  
  notifyAll() {
    /* проходит по массивам подписчиков и вызывает метод inform
     внутрь которого передаёт контекст this
     this нужен для того, что бы внутри класса подписчика, у него был доступ
     к свойству news
    */
    return this.subscribers.forEach(item => item.inform(this))
  }
  
  // подписка
  register(observer) {
    this.subscribers.push(observer)
  }
  
  // отписка
  unregister(observer) {
    this.subscribers = this.subscribers.filter(item => !(item instanceof observer))
  }
}

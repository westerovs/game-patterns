import Observer from './abstract/observer.js'
import Gleb from './users/gleb.js'
import Paul from './users/paul.js'

class News extends Observer {
  constructor() {
    super()
    this.newsText = document.querySelector('.news-text')
  }
  
  createNews() {
    this.newsText.innerHTML = this.news
  }
}

const autoNews = new News()
const textNews = 'Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consectetur Mур'

const ivan = new Paul() // create users
autoNews.register(ivan) // register users

const gleb = new Gleb() // create users
autoNews.register(gleb) // register users

autoNews.setNews(textNews)
autoNews.createNews()


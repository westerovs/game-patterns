import messageView from './components/message.js'
import Observable  from './abstract/observable.js'

const observable = new Observable()

const pushText = (text) => {
  return () => new messageView().create(text)
}

const messageNew  = pushText('New message !')
const messageChat = pushText('Новое сообщение в чате !')

observable.add(messageNew)
observable.add(messageChat)
// observable.remove(messageNew)

const button = document.querySelector('.button')
button.addEventListener('click', () => observable.notify())


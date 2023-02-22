export default class User {
  constructor() {
    this.wrapper = document.querySelector('.wrapper')
  }
  
  createUser(name, text) {
    const user = document.createElement('div')
    user.classList.add('user')
    
    const userName = document.createElement('div')
    userName.classList.add('user-name')
    userName.innerHTML = name
    
    const userText = document.createElement('div')
    userText.classList.add('user-text')
    userText.innerHTML = text
    
    user.append(userName)
    user.append(userText)
    this.wrapper.append(user)
  }
}

export default class message {
  constructor() {
    this.text = null
    this.messageElement = null
    this.time = 1500
  }
  
  create(text) {
    this.text = text
    
    this.messageElement = document.createElement('div')
    this.messageElement.classList.add('message')
    this.messageElement.innerHTML = this.text
  
    const wrapper = document.querySelector('.wrapper')
    wrapper.append(this.messageElement)
    
    this.destroy()
  }
  
  destroy() {
    setTimeout(() => {
      this.messageElement.remove()
      this.messageElement = null
    }, this.time)
  }
}

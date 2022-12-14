// 1 simple realisation
class Hero {
  constructor() {
    document.addEventListener('keydown', this.inputHandler)
  }
  
  jump = () => {
    console.log('jump')
  }
  
  fireGun = () => {
    console.log('fire')
  }
  
  swapWeapon = () => {
    console.log('swap Weapon')
  }
  
  lurchIneffectively = () => {
    console.log('lurch')
  }
  
  inputHandler = (e) => {
    const button = e.key
    
    if (button.toLowerCase() === 'w') this.lurchIneffectively()
    else if (button.toLowerCase() === 's') this.jump()
    else if (button.toLowerCase() === 'a') this.swapWeapon()
    else if (button.toLowerCase() === 'd') this.fireGun()
  }
}

new Hero()

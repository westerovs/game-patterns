class Command {
  execute(command) {
    command()
  }
}

// -----------------

class jumpCommand extends Command {
  jump = () => {
    console.log('jump')
  }

  execute() {
    super.execute(this.jump)
  }
}

class fireGunCommand extends Command {
  fireGun = () => console.log('fire')
  
  execute() {
    super.execute(this.fireGun)
  }
}

class swapWeaponCommand extends Command {
  swapWeapon = () => console.log('swap Weapon')
  
  execute() {
    super.execute(this.swapWeapon)
  }
}

class lurchIneffectivelyCommand extends Command {
  lurchIneffectively = () => console.log('lurch')
  
  execute() {
    super.execute(this.lurchIneffectively)
  }
}

class InputHandler {
  constructor() {
    this.Buttons = {
      w: (button)=> button === 'w',
      s: (button)=> button === 's',
      a: (button)=> button === 'a',
      d: (button)=> button === 'd',
    }
  
    this.init()
  }
  
  init = () => {
    document.addEventListener('keydown', this.handleInput)
  }

  handleInput = (e) => {
    const button = e.key.toLowerCase()

    if (this.Buttons.w(button)) new jumpCommand().execute()
    if (this.Buttons.s(button)) new fireGunCommand().execute()
    if (this.Buttons.a(button)) new swapWeaponCommand().execute()
    if (this.Buttons.d(button)) new lurchIneffectivelyCommand().execute()
  }
}

new InputHandler()


import User from './user.js';

export default class Paul extends User {
    constructor() {
        super()
        this._name = 'Пауль'
    }
    
    inform(message) {
        this.createUser(this._name, message.news)
    }
}

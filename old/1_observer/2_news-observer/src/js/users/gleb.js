import User from './user.js';

export default class Gleb extends User {
    constructor() {
        super()
        this._name = 'Глеб'
    }
    
    inform(message) {
        this.createUser(this._name, message.news)
    }
}

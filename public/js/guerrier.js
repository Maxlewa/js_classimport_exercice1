import {Humain} from './humain.js'

class Guerrier extends Humain {
    constructor (nom, age, force, vie) {
        super (nom, age)
        this.force = force
        this.vie = vie
    }
}

let guerrier1 = new Guerrier ("Alex", 23, 98, 92)
let guerrier2 = new Guerrier ("Momo", 24, 95, 100)

console.log(guerrier1);
console.log(guerrier2);
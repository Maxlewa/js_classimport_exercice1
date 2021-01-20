import {Humain} from './humain.js'

class Archer extends Humain {
    constructor (nom, age, fleches) {
        super (nom, age)
        this.fleches = fleches
    }
}

let archer1 = new Archer ("Alex", 23, 28)
let archer2 = new Archer ("Momo", 24, 26)

console.log(archer1);
console.log(archer2);
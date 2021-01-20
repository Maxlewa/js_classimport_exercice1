import {Humain} from './humain.js'

class Mage extends Humain {
    constructor (nom, age, magie) {
        super (nom, age)
        this.magie = magie
    }
}

let mage1 = new Mage ("Alex", 23, "magie noire")
let mage2 = new Mage ("Momo", 24, "magie noire")

console.log(mage1);
console.log(mage2);
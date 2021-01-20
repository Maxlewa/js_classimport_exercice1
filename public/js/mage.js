import {Humain, humain1, humain2} from './humain'

class Mage extends Humain {
    constructor (nom, age, magie) {
        super (nom, age)
        this.magie = magie
    }
}

humain1 = new Archer ("Alex", 23, "magie noire")
humain2 = new Archer ("Momo", 24, "magie noire")
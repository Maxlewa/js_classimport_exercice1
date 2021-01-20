import {Humain, humain1, humain2} from './humain'

class Archer extends Humain {
    constructor (nom, age, fleches) {
        super (nom, age)
        this.fleches = fleches
    }
}

humain1 = new Archer ("Alex", 23, 28)
humain2 = new Archer ("Momo", 24, 26)
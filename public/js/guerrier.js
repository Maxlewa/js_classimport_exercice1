import {Humain, humain1, humain2} from './humain'

class Guerrier extends Humain {
    constructor (nom, age, force, vie) {
        super (nom, age)
        this.force = force
        this.vie = vie
    }
}

humain1 = new Guerrier ("Alex", 23, 98, 92)
humain2 = new Guerrier ("Momo", 24, 95, 100)
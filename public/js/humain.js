class Humain {
    constructor (nom, age) {
        this.nom = nom
        this.age = age
    }
}

let humain1 = new Humain ("Alex", 23)
let humain2 = new Humain ("Momo", 24)

console.log(humain1);
console.log(humain2);

export {Humain, humain1, humain2}
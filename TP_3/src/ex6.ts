//1. Crée une classe Person avec les propriétés name et age, et une méthode greet().
class Personne {
    name:string;
    age:number;
    constructor(name:string, age:number) {  
        this.name = name;
        this.age = age;
    };
    greet():void {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    };
};
//2. Crée une classe Student qui hérite de Person et ajoute une propriété school.
class Student extends Personne {
    shcool:string;
    constructor(name:string,age:number,shcool:string) {
        super(name,age);
        this.shcool=shcool;
    }
};
//3. Crée une classe abstraite Shape avec une méthode abstraite area(), puis implémente Circle et Rectangle.
abstract class Shape {
    abstract area():number;
};
class Circle extends Shape {
    rayon:number;
    constructor(rayon:number) {
        super();
        this.rayon=rayon;
    };
    area(): number {
        return Math.PI * (this.rayon ** 2);
    };
};
class Rectangle extends Shape {
    largeur:number;
    longueur:number;
    constructor(largeur:number,longueur:number) {
        super();
        this.largeur=largeur;
        this.longueur=longueur;
    };
    area(): number {
        return this.largeur * this.longueur;
    };
};
//4. Crée une interface Drivable avec une méthode drive(), puis une classe Car qui l’implémente.
interface Drivable {
    drive():void;
};
class Car implements Drivable {
    drive():void {
        console.log("La voiture roule.");
    };
};
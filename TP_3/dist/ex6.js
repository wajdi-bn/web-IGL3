"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Crée une classe Person avec les propriétés name et age, et une méthode greet().
class Personne {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    greet() {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
    ;
}
;
//2. Crée une classe Student qui hérite de Person et ajoute une propriété school.
class Student extends Personne {
    shcool;
    constructor(name, age, shcool) {
        super(name, age);
        this.shcool = shcool;
    }
}
;
//3. Crée une classe abstraite Shape avec une méthode abstraite area(), puis implémente Circle et Rectangle.
class Shape {
}
;
class Circle extends Shape {
    rayon;
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    ;
    area() {
        return Math.PI * (this.rayon ** 2);
    }
    ;
}
;
class Rectangle extends Shape {
    largeur;
    longueur;
    constructor(largeur, longueur) {
        super();
        this.largeur = largeur;
        this.longueur = longueur;
    }
    ;
    area() {
        return this.largeur * this.longueur;
    }
    ;
}
;
;
class Car {
    drive() {
        console.log("La voiture roule.");
    }
    ;
}
;
//# sourceMappingURL=ex6.js.map
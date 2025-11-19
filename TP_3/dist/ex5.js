"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Crée une fonction add(a: number, b: number): number.
function add(a, b) {
    return a + b;
}
;
//2. Crée une fonction greet(name: string, age?: number) qui affiche un message différent selon si l’âge est fourni ou non.
function greet(name, age) {
    if (typeof age === 'number') {
        console.log(`Bonjour, je m'appelle ${name} et j'ai ${age} ans.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${name}.`);
    }
}
;
//3. Crée une fonction power(base: number, exp: number = 2) qui calcule une puissance avec un exposant par défaut.
function power(base, exp = 2) {
    return base ** exp;
}
;
function combine(x, y) {
    return x + y;
}
;
//# sourceMappingURL=ex5.js.map
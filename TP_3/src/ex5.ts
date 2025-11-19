//1. Crée une fonction add(a: number, b: number): number.
function add(a:number,b:number):number {
    return a+b;
};
//2. Crée une fonction greet(name: string, age?: number) qui affiche un message différent selon si l’âge est fourni ou non.
function greet(name:string,age?:number):void {
    if (typeof age === 'number') {
        console.log(`Bonjour, je m'appelle ${name} et j'ai ${age} ans.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${name}.`);
    }
};
//3. Crée une fonction power(base: number, exp: number = 2) qui calcule une puissance avec un exposant par défaut.
function power(base:number,exp:number=2):number {
    return base**exp;
};
//4. Crée une fonction combine qui soit peut additionner deux nombres, soit concaténer deux chaînes (surcharge).
function combine(x:number,y:number):number;
function combine(x:string,y:string):string;
function combine(x:any,y:any):any {
    return x+y;
};
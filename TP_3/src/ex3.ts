//1. Crée une variable id qui peut être soit un number, soit un string.
let id : number | string;
//2. Crée deux types A et B, puis fais-en une intersection.
type A = { 
    couleur : string,
    model : string
};
type B = { 
    prix : number,
    taille : number
};
type C = A & B;
//3. Crée un alias Status qui peut valoir "pending", "done" ou "canceled".
type status = "pending" | "done" | "cancelled";
//4. Déclare une variable unknown et utilise une assertion de type pour accéder à sa longueur si c’est une chaîne.
let x:unknown;
if (typeof x === "string") {
    console.log(x.length);
};
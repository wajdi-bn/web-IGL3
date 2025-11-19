//1. Crée une interface User avec les propriétés id: number, name: string, email?: string (optionnelle), et isAdmin: boolean en lecture seule.
interface user {
    id: number,
    name: string,
    email?: string,
    readonly isAdmin:boolean
};
//2. Crée un objet user1 conforme à cette interface.
let user1 = {
    id:1,
    name: "wajdi",
    email: "wadii3wajdi@gmail.com",
    isAdmin: true
};
//3. Crée une interface Admin qui hérite de User et ajoute une propriété permissions: string[].
interface Admin extends user {
    permissions: string[]
};
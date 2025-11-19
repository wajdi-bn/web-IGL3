//1. Crée une fonction générique identity<T>(value: T): T.
function identity<T>(value:T):T {
    return value;
};
//2. Crée une fonction générique getFirst<T>(arr: T[]): T qui retourne le premier élément d’un tableau.
function getFirst <T>(arr:T[]):T {
    return arr[0]!;
};
//3. Crée une classe générique Repository<T> avec les méthodes add, remove et getAll.
class Repository<T> {
    items: T[]=[];
    add(item:T):void {
        this.items.push(item);
    };
    remove(item:T):void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        };
    };
    getAll():T[] {
        return this.items;
    };
};
//4. Crée une interface générique ApiResponse<T> avec les propriétés data: T et error?: string.
interface ApiResponse<T> { 
    data: T,
    error?: string
};
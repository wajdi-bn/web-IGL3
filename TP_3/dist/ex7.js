"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Crée une fonction générique identity<T>(value: T): T.
function identity(value) {
    return value;
}
;
//2. Crée une fonction générique getFirst<T>(arr: T[]): T qui retourne le premier élément d’un tableau.
function getFirst(arr) {
    return arr[0];
}
;
//3. Crée une classe générique Repository<T> avec les méthodes add, remove et getAll.
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    ;
    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        ;
    }
    ;
    getAll() {
        return this.items;
    }
    ;
}
;
;
//# sourceMappingURL=ex7.js.map
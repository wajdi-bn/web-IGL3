//3. Crée un fichier index.ts qui ré-exporte plusieurs fonctions (add, subtract).
export = {
    add: function(a: number, b: number): number {
        return a + b;
    },
    subtract: function(a: number, b: number): number {
        return a - b;
    }
};
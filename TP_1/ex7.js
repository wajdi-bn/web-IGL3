const notes = [12, 5, 17, 9, 20];
const moyenne=notes.reduce((somme, note) => somme + note, 0) / notes.length;
console.log("Moyenne :", moyenne);
const trie=notes.sort((a,b)=>b-a)
console.log(trie)
const filtre=notes.filter(n=>n>=10)
console.log(filtre)

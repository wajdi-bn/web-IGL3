//2. Importe cette fonction dans main.ts et teste-la.
import add = require("./math");
console.log(add(2,3));
//4. Utilise import type pour importer uniquement des types depuis un fichier types.ts.
import type { User } from "./types";
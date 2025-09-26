const key = "taches"; 
let taches = []; 

const ul = document.getElementById("todolist");
const input = document.getElementById("tache");
const btnAjouter = document.getElementById("ajouter");
const compteurSpan = document.getElementById("compteur");
const btnClearAll = document.getElementById("clearAll");

// --- utilitaires de stockage ---
function saveTaches() {
  localStorage.setItem(key, JSON.stringify(taches));
}

function loadTaches() {
  const raw = localStorage.getItem(key);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) taches = parsed;
  } catch (e) {
    console.warn("Impossible de parser les tâches depuis localStorage:", e);
  }
}

// --- rendu ---
function render() {
  ul.innerHTML = "";
  taches.forEach((t, index) => {
    const li = document.createElement("li");
    if (t.done) li.classList.add("checked");

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = t.text;
    span.addEventListener("click", () => {
      toggleDone(index);
    });

    const actions = document.createElement("div");
    actions.className = "action-buttons";

    const btnDone = document.createElement("button");
    btnDone.textContent = t.done ? "Annuler" : "Terminer";
    btnDone.addEventListener("click", () => toggleDone(index));

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Supprimer";
    btnDelete.addEventListener("click", () => supprimerTache(index));

    actions.appendChild(btnDone);
    actions.appendChild(btnDelete);

    li.appendChild(span);
    li.appendChild(actions);
    ul.appendChild(li);
  });

  updateCompteur();
}

// --- opérations ---
function ajouterTache(text) {
  if (!text || !text.trim()) {
    alert("Tâche vide !");
    return;
  }
  taches.push({ text: text.trim(), done: false });
  saveTaches();
  render();
}

function supprimerTache(index) {
  if (index < 0 || index >= taches.length) return;
  taches.splice(index, 1);
  saveTaches();
  render();
}

function toggleDone(index) {
  if (index < 0 || index >= taches.length) return;
  taches[index].done = !taches[index].done;
  saveTaches();
  render();
}

function clearAll() {
  if (!confirm("Supprimer toutes les tâches ?")) return;
  taches = [];
  saveTaches();
  render();
}

function updateCompteur() {
  const total = taches.length;
  const termines = taches.filter(t => t.done).length;
  compteurSpan.textContent = `${total} tâche(s) — ${termines} terminée(s)`;
}

// --- gestion des événements UI ---
btnAjouter.addEventListener("click", () => {
  ajouterTache(input.value);
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ajouterTache(input.value);
    input.value = "";
  }
});

btnClearAll.addEventListener("click", clearAll);

// --- initialisation ---
loadTaches();
render();
console.log("Bienvenue dans votre gestionnaire de tâches !");

/**
 * Code pour construire une simple application interactive qui affiche aléatoirement un mot à l'envers depuis une liste
 */

//Liste de mots
var wordList = [
  "maison",
  "chien",
  "chat",
  "avion",
  "lettre",
  "marionette",
  "chaise",
  "école",
  "mathématique",
  "livre",
  "français",
  "géographie",
  "cahier",
  "stylo"
];

//Fonction pour enverser le mot
function reverseWord(init) {
  //Renvoyer le mot inversée en utilisant l'aglorithme que nous avons créé
  return init
    .split("")
    .reverse()
    .join("");
}

//Fonction pour récupérer un mot aléatoire
function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

//Ajouter le gestionnaire d'événement au bouton
document.querySelector("#randomWordBtn").addEventListener("click", function() {
  var randomWord = getRandomWord();
  var reverse = reverseWord(randomWord);
  document.querySelector("#targetWord").textContent = reverse;
});

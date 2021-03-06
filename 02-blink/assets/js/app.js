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

//Fonction pour récupérer un mot aléatoire
function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

//Ajouter le gestionnaire d'événement au bouton
document.querySelector("#randomWordBtn").addEventListener("click", function () {
  //Sélectionner un mot aléatoire
  var randomWord = getRandomWord();

  //Associr le mot aléatoire au placeholder
  var targetWord = document.querySelector("#targetWord");
  targetWord.textContent = randomWord;

  //Afficher le mot s'il est caché
  var wordContainer = document.querySelector(".showWord");
  wordContainer.style.display = "block";


  //Démarrer un timer qui cache le mot après 200ms
  setTimeout(function () {
    wordContainer.style.display = "none";
  }, 200)
});
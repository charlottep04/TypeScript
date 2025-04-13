import * as Color from "../modules/color.js";
import * as Value from "../modules/value.js";
import * as Actions from "../modules/actionsv2.js";
import * as Placement from "../modules/placement.js";
import * as Win from "../modules/win.js";
//import * as GridLimits from "../modules/grid_limits.js";


let redlist = [];
// Ajouter chaque chiffre de 1 à 9 deux fois
for (let i = 1; i <= 9; i++) {
    redlist.push(i);
    redlist.push(i);
}
let greenlist = [...redlist];
let yellowlist = [...redlist];
let bluelist = [...redlist];  

// Initialiser les joueurs et leurs couleurs
const players = [
    { color: 'red', list: redlist },
    { color: 'green', list: greenlist },
    { color: 'yellow', list: yellowlist },
    { color: 'blue', list: bluelist }
];

let currentPlayerIndex = 0;
let gameWon = false;
let currentCard = null; // Variable globale pour stocker la carte actuelle



// Fonction pour gérer le clic sur une cellule
function clickOnCell(cell) {
    if (gameWon) return; // Ne rien faire si le jeu est déjà gagné
    // Récupère l'index de la ligne de la cellule cliquée
    let row = cell.parentNode.rowIndex;
    // Récupère l'index de la colonne de la cellule cliquée
    let col = cell.cellIndex;
    // Affiche une alerte avec les coordonnées de la cellule cliquée
    console.log('Coordonnées : (' + row + ', ' + col + ')');
    
    // Appeler une autre fonction avec les coordonnées
    handleCellClick(row, col);
}

  // Fonction pour ajouter un écouteur de clic de souris à chaque cellule du tableau
  function SetListener() {
    let table = document.getElementById('grille');
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].addEventListener('click', function() {
          clickOnCell(this);
        });
      }
    }
  }

// Fonction pour afficher la carte actuelle
function displayCurrentCard() {
    const player = players[currentPlayerIndex];
    currentCard = Actions.getAndRemoveRandomCard(player.list);
    console.log("Carte actuelle pour le joueur " + player.color + ": " + currentCard);
}


function handleCellClick(row, col) {
    const player = players[currentPlayerIndex];
    playCard(player, row, col, currentCard);
}



function playCard(player, row, col, card) {

    // Vérifier si le placement est correct
    if (Placement.isCorrectPlacement(row, col, card)) {
        // Placer la carte sur la grille
        Value.setValue(row, col, card);
        Color.setColor(row, col, player.color);
        console.log("Après:", player.list);
        
        // Vérifier si le joueur a gagné
        if (Win.hasWin(player.color)) {
            console.log("Le joueur " + player.color + "a gagné !");
            gameWon = true; // Marquer le jeu comme gagné
            return; // Arrêter le jeu si un joueur a gagné
        }

        // Passer au joueur suivant
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        displayCurrentCard(); // Afficher la carte pour le joueur suivant
        console.log("C'est au tour du joueur " + players[currentPlayerIndex].color + " Cliquez sur une case pour jouer.");
    } else {
       console.log("Placement incorrect. Essayez une autre case.");
    }
}

//redplayer joue en premier
function tour1() {
    let redplayer = players[0];
    let row = 5;
    let col = 5;
    let card = Actions.getAndRemoveRandomCard(redplayer.list);
    Value.setValue(row, col, card);
    Color.setColor(row, col, redplayer.color);
    currentPlayerIndex = 1;
}



// Fonction principale pour démarrer le jeu
function main() {
    tour1();
    SetListener();
    displayCurrentCard(); // Afficher la carte pour le premier joueur
    console.log("C'est au tour du joueur " + players[currentPlayerIndex].color + "Cliquez sur une case pour jouer.");

}

// Appeler la fonction main pour démarrer le jeu
main();







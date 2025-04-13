// Fonction pour gérer le clic sur une cellule
function clickOnCell(cell) {
    // Récupère l'index de la ligne de la cellule cliquée
    let row = cell.parentNode.rowIndex;
    // Récupère l'index de la colonne de la cellule cliquée
    let col = cell.cellIndex;
    // Affiche une alerte avec les coordonnées de la cellule cliquée
    console.log('Coordonnées : (' + row + ', ' + col + ')');
        // Mise à jour des variables globales
    globalRow = row;
    globalCol = col;
    
    return { row, col };
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
    };
  }

// Fonction pour obtenir et retirer une carte au hasard d'une liste
function getAndRemoveRandomCard(list) {
    if (list.length === 0) {
        throw new Error("La liste est vide");
    }
    // Choisir un index au hasard
    let randomIndex = Math.floor(Math.random() * list.length);
    // Obtenir la valeur de la carte à cet index
    let card = list[randomIndex];
    // Retirer la carte de la liste
    list.splice(randomIndex, 1);
    // Retourner la valeur de la carte
    return card;
  }

  let test_list = [];

  // Ajouter chaque chiffre de 1 à 9 deux fois
  for (let i = 1; i <= 9; i++) {
      test_list.push(i);
      test_list.push(i);
  }

// Fonction de test pour getAndRemoveRandomCard
function testGetAndRemoveRandomCard() {
    console.log("Test getAndRemoveRandomCard:");
  
    // Tester avec test_list
    console.log("Avant:", test_list);
    let card1 = getAndRemoveRandomCard(test_list);
    console.log("Carte retirée:", card1);
    console.log("Après:", test_list);
  }

export { SetListener, getAndRemoveRandomCard, testGetAndRemoveRandomCard, globalRow, globalCol };
  
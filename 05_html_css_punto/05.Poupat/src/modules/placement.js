import * as Value from "../modules/value.js";



// Fonction pour vérifier si une cellule est vide
function isEmpty(i, j) {
    return Value.getValue(i, j) === "&nbsp;";
  }
  
  // Fonction pour vérifier si la case (i, j) est adjacente à une autre case qui possède une valeur
  function isCorrectAgency(i, j) {
    let table = document.getElementById('grille');
    let rows = table.rows.length;
    let cols = table.rows[0].cells.length;
  
    // Vérifier les cases adjacentes
    if (i > 0 && !isEmpty(i - 1, j)) return true; // Case au-dessus
    if (i < rows - 1 && !isEmpty(i + 1, j)) return true; // Case en-dessous
    if (j > 0 && !isEmpty(i, j - 1)) return true; // Case à gauche
    if (j < cols - 1 && !isEmpty(i, j + 1)) return true; // Case à droite
  
        // Vérifier les cases adjacentes en diagonale
        if (i > 0 && j > 0 && !isEmpty(i - 1, j - 1)) return true; // Case en haut-gauche
        if (i > 0 && j < cols - 1 && !isEmpty(i - 1, j + 1)) return true; // Case en haut-droit
        if (i < rows - 1 && j > 0 && !isEmpty(i + 1, j - 1)) return true; // Case en bas-gauche
        if (i < rows - 1 && j < cols - 1 && !isEmpty(i + 1, j + 1)) return true; // Case en bas-droit
    
        return false;
  }
  
  // Fonction pour vérifier si le placement est correct
 /* function isCorrectPlacement(i, j, value) {
    let cellValue = Value.getValue(i, j);
    if (isCorrectAgency(i, j)) {
        return true;
    }
    if (cellValue !== "&nbsp;" && parseFloat(value) > parseFloat(cellValue)) {
        return true;
    }
    return false;
  } */

    function isCorrectPlacement(i, j, value) {
      let cellValue = Value.getValue(i, j);
      if (isCorrectAgency(i, j)) {  
        if (cellValue !== "&nbsp;" ) {
          if (parseFloat(value) > parseFloat(cellValue)) {
            return true;
          }
        }
        else {
          return true;
        }
      }    
      return false;
    }


// Fonction de test pour isEmpty
function testIsEmpty() {
    Value.setValue(3, 3, 6);
    console.log("Test isEmpty for (4,4):  " + isEmpty(0, 0)); // Devrait afficher false si la cellule (4, 4) a une valeur, true sinon
    console.log("Test isEmpty for (3,3):  " + isEmpty(3, 3));
  }
  
  
  
  // Fonction de test pour isCorrectAgency
  function testIsCorrectAgency() {
    console.log("Test isCorrectAgency: (6,6)  " + isCorrectAgency(6, 6)); 
    console.log("Test isCorrectAgency: (3,4)  " + isCorrectAgency(3, 4));
    console.log("Test isCorrectAgency: (1,8)  " + isCorrectAgency(1, 8));
    console.log("Test isCorrectAgency: (2,8)  " + isCorrectAgency(2, 8));
  }
  
  // Fonction de test pour isCorrectPlacement
  function testIsCorrectPlacement() {
    console.log("Test isCorrectPlacement:  " + isCorrectPlacement(3, 3, 3)); // Devrait afficher true
  }

export { isEmpty, isCorrectAgency, isCorrectPlacement, testIsEmpty, testIsCorrectAgency, testIsCorrectPlacement };
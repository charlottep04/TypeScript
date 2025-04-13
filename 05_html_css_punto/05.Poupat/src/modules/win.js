import * as Color from "../modules/color.js";

// Fonction pour vérifier si une couleur a gagné
function hasWin(color) {
    let table = document.getElementById('grille');
    let rows = table.rows.length;
    let cols = table.rows[0].cells.length;
  
    // Vérifier les alignements horizontaux
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            if (Color.getColor(i, j) === color && Color.getColor(i, j + 1) === color && Color.getColor(i, j + 2) === color && Color.getColor(i, j + 3) === color) {
                //console.log(Color.getColor(i, j) + " " + Color.getColor(i, j + 1) + " " + Color.getColor(i, j + 2) + " " + Color.getColor(i, j + 3));
                return true;
            }
        }
    }
  
    // Vérifier les alignements verticaux
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            if (Color.getColor(i, j) === color && Color.getColor(i + 1, j) === color && Color.getColor(i + 2, j) === color && Color.getColor(i + 3, j) === color) {
                //console.log(getColor(i, j) + " " + getColor(i + 1, j) + " " + getColor(i + 2, j) + " " + getColor(i + 3, j));
                return true;
            }
        }
    }
  
    // Vérifier les alignements verticaux
    for (let i = 0; i <= rows - 4; i++) {
      for (let j = 0; j < cols; j++) {
          if (Color.getColor(i, j) === color && Color.getColor(i + 1, j) === color && Color.getColor(i + 2, j) === color && Color.getColor(i + 3, j) === color) {
            //console.log(getColor(i, j) + " " + getColor(i + 1, j) + " " + getColor(i + 2, j) + " " + getColor(i + 3, j));
            return true;
            }
        }
    }
  
    // Vérifier les alignements diagonaux (haut-gauche à bas-droit)
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            if (Color.getColor(i, j) === color && Color.getColor(i + 1, j + 1) === color && Color.getColor(i + 2, j + 2) === color && Color.getColor(i + 3, j + 3) === color) {
                //console.log(getColor(i, j) + " " + getColor(i + 1, j + 1) + " " + getColor(i + 2, j + 2) + " " + getColor(i + 3, j + 3));
                return true;
            }
        }
    }
  
    // Vérifier les alignements diagonaux (bas-gauche à haut-droit)
    for (let i = 3; i < rows; i++) {
      for (let j = 0; j <= cols - 4; j++) {
          if (Color.getColor(i, j) === color && Color.getColor(i - 1, j + 1) === color && Color.getColor(i - 2, j + 2) === color && Color.getColor(i - 3, j + 3) === color) {
            //console.log(getColor(i, j) + " " + getColor(i - 1, j + 1) + " " + getColor(i - 2, j + 2) + " " + getColor(i - 3, j + 3)); 
            return true;
            }
        }
    }
  
    return false;
  }
  
  function testHasWin() {
    console.log("Test hasWin(red):  " + hasWin("red"));
    console.log("Test hasWin(green):  " + hasWin("green"));
    console.log("Test hasWin(yellow):  " + hasWin("yellow"));
    console.log("Test hasWin(blue):  " + hasWin("blue"));
  }

export { hasWin, testHasWin };
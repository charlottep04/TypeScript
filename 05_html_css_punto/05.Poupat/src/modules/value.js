// Fonction pour récupérer la valeur d'une cellule
function getValue(i, j) {
    let table = document.getElementById('grille');
    let cell = table.rows[i].cells[j];
    return cell.innerHTML.trim();
}

// Fonction pour définir la valeur d'une cellule
function setValue(i, j, value) {
    let table = document.getElementById('grille');
    let cell = table.rows[i].cells[j];
    cell.innerHTML = value;
    cell.classList.add('centered-cell');
}

// Fonction de test pour getValue
function testGetValue() {
    console.log("Test getValue:  " + getValue(3, 3)); // Devrait afficher la valeur de la cellule 
  }
  
// Fonction de test pour setValue
function testSetValue() {
    setValue(3, 3, 6);
    console.log("Test setValue for (3,3) " + getValue(3, 3)); // Devrait afficher "Test"
  }

export { getValue, setValue, testGetValue, testSetValue };
// Fonction pour récupérer la couleur de fond d'une cellule
function getColor(i, j) {
    let table = document.getElementById('grille');
    let cell = table.rows[i].cells[j];
    let rgbColor = window.getComputedStyle(cell).backgroundColor;

    // Table de correspondance des couleurs
    const colorNames = {
        "rgb(255, 0, 0)": "red",
        "rgb(0, 128, 0)": "green",
        "rgb(0, 100, 100)": "blue",
        "rgb(255, 255, 0)": "yellow",
        // Ajoutez d'autres couleurs si nécessaire
    };

    return colorNames[rgbColor] || rgbColor; 
    // permet de renvoyer le nom de la couleur si elle est définie dans colorNames, 
    // sinon elle renvoie la valeur RGB d'origine.
}

// Fonction pour définir la couleur de fond d'une cellule
function setColor(i, j, color) {
    let table = document.getElementById('grille');
    let cell = table.rows[i].cells[j];
    if (color === "blue") {
        color = "lightblue";
    } else if (color === "red") {
        color = "lightcoral"; // couleur plus claire pour le rouge
    } else if (color === "green") {
        color = "lightgreen"; // couleur plus claire pour le vert
    }
    cell.style.backgroundColor = color;
}

// Fonction de test pour getColor
function testGetColor() {
    console.log("Test getColor:  " + getColor(3, 3));
 // Devrait afficher la couleur de fond de la cellule 
  }

// Fonction de test pour setColor
function testSetColor() {
    setColor(3, 3, "red");
    setColor(2, 3, "red");
    setColor(3, 2, "red");
    console.log("Test setColor:  " + getColor(3, 3)); // Devrait afficher "red"
  }

export { getColor, setColor, testGetColor, testSetColor };
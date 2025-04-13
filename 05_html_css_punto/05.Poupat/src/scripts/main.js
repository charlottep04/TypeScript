import * as Color from "../modules/color.js";
import * as Value from "../modules/value.js";
import * as Actions from "../modules/actions.js";
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

console.log("redlist: " + redlist);
console.log("greenlist: " + greenlist);
console.log("yellowlist: " + yellowlist);
console.log("bluelist: " + bluelist);


function main() {
    Color.testGetColor();
    Color.testSetColor();
    Value.testGetValue();
    Value.testSetValue();
    Actions.SetListener();
    Placement.testIsEmpty();
    Placement.testIsCorrectAgency();
    Placement.testIsCorrectPlacement();
    Actions.testGetAndRemoveRandomCard();
    Win.testHasWin();
    //GridLimits.testIsWithinGrid();
    //GridLimits.testIsWithinLimits();
}
  








  // Appelle la fonction main à la fin du fichier
  main();

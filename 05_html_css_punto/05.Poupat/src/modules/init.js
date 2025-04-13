import * as Actions from './actions.js';
import * as Color from './color.js';
import * as Value from './value.js';


let redlist = [];
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

function tour1() {
    let redplayer = players[0];
    let row = 5;
    let col = 5;
    let card = Actions.getAndRemoveRandomCard(redplayer.list);
    Value.setValue(row, col, card);
    Color.setColor(row, col, redplayer.color);
    currentPlayerIndex = 1;
}

export { players, redlist, greenlist, yellowlist, bluelist, tour1 };
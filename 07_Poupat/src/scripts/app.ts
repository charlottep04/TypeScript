//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }

// Premier exemple avec instructions
const ajouter = (a: number, b: number): void => {
  const somme = a + b;
  console.log(`La somme est: ${somme}`);
};
ajouter(5, 3); // Affiche "La somme est: 8"

//avec expression
//(<paramètres> ...) => <expression>

// Deuxième exemple avec expression
const multiplier = (a: number, b: number): number => a * b;
console.log(multiplier(5, 3)); // Affiche "15"

//Troisième exemple de fonction fléchée qui ne prend pas de paramètre
//et qui est passée en paramètre de setTimeout et setInterval

//setTimeout déclenche une fonction une seule fois après x secondes
setTimeout(() => {
  console.log("4 secondes se sont écoulées");
}, 4000);

//setInterval déclenche une fonction toutes les x secondes
setInterval(() => {
  console.log("répétition: 9 secondes se sont écoulées");
}, 9000);

//quatrième exemple
//comment accéder à des variables extérieures depuis une fonction fléchée?

let x = 5;
let y = 3;
let z = 2;
//on peut accéder à des variables extérieures
const afficherVariables = () => {
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
};
afficherVariables(); // Affiche "x: 5, y: 3, z: 2"

//Cinquième exemple de passage de fonction en paramètre

const afficher = (
  a: number,
  b: number,
  operation: (a: number, b: number) => number
) => {
  console.log(`Le résultat est: ${operation(a, b)}`);
};

afficher(5, 3, multiplier); // Affiche "Le résultat est: 15"
//on ne peut pas faire afficher(5, 3, ajouter); car ajouter retourne void et non number
//on ne peut pas faire afficher(5, 3, (a: number, b: number) => { console.log(a + b); }); car cette fonction retourne void et non number
afficher(5, 3, (a: number, b: number) => a / b); // Affiche "Le résultat est: 1.6666666666666667"
afficher(5, 3, (a: number, b: number) => a % b); // Affiche "Le résultat est: 2"
afficher(5, 3, (a: number, b: number) => a ** b); // Affiche "Le résultat est: 125"
afficher(5, 3, (a: number, b: number) => Math.pow(a, b)); // Affiche "Le résultat est: 125"
//ici on va donner une fonction fléchée qui retourne le nombre composé de a fois le chiffre b
afficher(5, 3, (a: number, b: number) => {
  let resultat: string = "";
  for (let i = 0; i < a; i++) {
    resultat += b;
  }
  return parseInt(resultat);
});
// Affiche "Le résultat est: 33333"


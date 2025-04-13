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

export { getAndRemoveRandomCard}
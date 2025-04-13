#QCM webdev101
1. Quelle est la différence principale entre une expression et une instruction dans le contexte des fonctions fléchées en TypeScript ?
- Une expression retourne toujours une valeur, alors qu'une instruction effectue une action sans nécessairement retourner une valeur.
+ Une expression peut être utilisée sans accolades et retourne une valeur, tandis qu'une instruction nécessite des accolades et ne retourne pas forcément une valeur.
- Les expressions ne peuvent pas être utilisées dans les fonctions fléchées, contrairement aux instructions.
- Il n'y a aucune différence entre les deux dans le contexte des fonctions fléchées.

2. Quelle est la différence entre une fonction lambda avec instructions et une fonction lambda avec expression en TypeScript?
- Une fonction lambda avec instructions ne peut pas retourner de valeur
+ Une fonction lambda avec instructions utilise des accolades et peut contenir plusieurs instructions, tandis qu'une fonction lambda avec expression retourne directement le résultat d'une expression unique
- Une fonction lambda avec expression ne peut pas utiliser de paramètres
- Une fonction lambda avec instructions ne peut pas utiliser le mot-clé `const`

3. Quel est le résultat du code ci-dessus?
```typescript
setTimeout(() => {
  console.log("4");
}, 4000);

setInterval(() => {
  console.log("9");
}, 9000);
```
- Affiche "4" une fois après 4 secondes et "9" une fois après 4 secondes
+ Affiche "4" une fois après 4 secondes et "9" toutes les 9 secondes
- Affiche "4" toutes les 4 secondes et "9" une fois après 9 secondes
- Affiche "4" toutes les 4 secondes et "9" toutes les 9 secondes

4. Quel est le rôle de la fonction `saluer` dans ce code TypeScript?
```typescript
const saluer = (nom: string) => {
  return () => console.log(`Bonjour, ${nom}!`);
};
```
- Elle affiche un message de salutation avec le nom de l'utilisateur
- Elle retourne un message de salutation avec le nom de l'utilisateur
- Elle retourne une fonction qui prend en paramètre un nom
+ Elle retourne une fonction qui affiche un message de salutation avec le nom de l'utilisateur
- Elle retourne une fonction qui retourne un message de salutation



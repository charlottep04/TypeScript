# Fonctions sur les tableaux: map, reduce, filter, find et différence avec forEach

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/08_map_reduce_filter_find_foreach/README.md)

- `map` : Cette méthode crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau. Par exemple, `other_tab.map((x) => x * 2)` crée un nouveau tableau où chaque élément est le double de l'élément correspondant dans `other_tab`.
- `filter` : Cette méthode crée un nouveau tableau avec tous les éléments qui passent un test (fourni en tant que fonction). Par exemple, `other_tab.filter((x) => x > 2)` crée un nouveau tableau contenant seulement les éléments de `other_tab` qui sont supérieurs à 2.
- `reduce` : Cette méthode applique une fonction qui est un "réducteur" aux éléments du tableau, de gauche à droite, de manière à réduire le tableau à une seule valeur. Par exemple, `other_tab.reduce((acc, x) => acc + x, 0)` calcule la somme de tous les éléments de `other_tab`.
- `find` : Cette méthode renvoie la valeur du premier élément du tableau qui satisfait la fonction de test fournie. Par exemple, `other_tab.find((x) => x > 2)` renvoie le premier élément de `other_tab` qui est supérieur à 2.
- `forEach` : Cette méthode exécute une fonction donnée sur chaque élément du tableau. Contrairement à `map`, elle ne crée pas un nouveau tableau. Par exemple, `other_tab.forEach((x) => console.log(x))` affiche chaque élément de `other_tab` à la console.
- La différence entre `map` et `forEach` est que `map` crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau, tandis que `forEach` exécute simplement une fonction sur chaque élément du tableau sans créer un nouveau tableau.

Vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")


# lecture

09 Types basiques.pdf   partie 1 2 3 et 4

https://www.tutorialspoint.com/typescript/typescript_arrays.htm

# Exercice des fruits des fruits des fruits!

1. Créez un tableau de chaînes de caractères qui représentent des noms de fruits (la tableau initial): "pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"
2. A partir du tableau initial, utilisez la méthode `map` et une fonction fléchée pour créer un nouveau tableau où chaque fruit est écrit en majuscules.
3. A partir du tableau initial, utilisez la méthode `filter` et une fonction fléchée pour créer un nouveau tableau qui ne contient que les fruits qui commencent par la lettre 'p'.
4. A partir du tableau initial, utilisez la méthode `reduce` et une fonction fléchée pour obtenir une seule chaîne qui contient tous les noms de fruits séparés par des virgules.
5. A partir du tableau initial, utilisez la méthode `find` et une fonction fléchée pour trouver le premier fruit qui a plus de 5 lettres.

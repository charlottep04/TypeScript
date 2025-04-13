# FETCH en typescript

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/14_fetch/README.md)

La méthode `fetch` est souvent utilisée avec `async/await` car elle renvoie une promesse. L'utilisation de `async/await` permet de gérer ces promesses de manière plus lisible et plus facile à comprendre. Au lieu d'utiliser des callbacks ou des chaînes de `.then()`, vous pouvez écrire du code qui ressemble beaucoup à du code synchrone, mais qui fonctionne toujours de manière asynchrone.

Dans le code ci-dessous, `fetch` est utilisé pour faire une requête HTTP à une API. Cette opération est asynchrone car elle peut prendre un certain temps pour obtenir une réponse. En utilisant `await`, le code attend que la promesse renvoyée par `fetch` soit résolue (ou rejetée, dans ce cas le bloc `catch` est exécuté) avant de continuer.

Détails d'implémentation :
- `createElement` : Cette méthode du Document Object Model (DOM) est utilisée pour créer un nouvel élément HTML. Par exemple, `document.createElement("ul")` crée un nouvel élément `<ul>` (une liste non ordonnée).
- `appendChild` : Cette méthode du DOM est utilisée pour ajouter un nœud à la fin de la liste des enfants d'un nœud parent spécifié. Par exemple, `ul.appendChild(li)` ajoute l'élément `<li>` à la fin de l'élément `<ul>`.
- `toLocaleDateString` : Cette méthode de l'objet Date convertit une date en une chaîne de caractères, en utilisant les conventions de formatage de date locales. Vous pouvez spécifier un paramètre de localisation (par exemple, "fr-FR" pour le français) et un objet d'options pour personnaliser le format de la date. Dans le code, `toLocaleDateString` est utilisé pour formater la date de chaque tremblement de terre en utilisant le format de date français, avec des options spécifiques pour l'année, le mois, le jour, l'heure, la minute et le fuseau horaire.

vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# Lecture

pas de lecture en particulier, si ce n'est la documentation de l'API `fetch` de JavaScript (et non TypeScript) : https://developer.mozilla.org/en-US/docs/Web/API/fetch

# Exercice 1 

Ajoutez les lignes suivantes AU BON ENDROIT DANS LE CODE pour afficher les propriétés de chaque tremblement de terre dans le navigateur. Faites en sorte que le script s'exécute côté client et servi avec un serveur ASTRO.

```typescript
//première ligne à ajouter
const ul: HTMLUListElement = document.createElement("ul");
//deuxième ligne à ajouter
const li: HTMLLIElement = document.createElement("li");
//troisième ligne à ajouter
li.textContent = finalString;
//quatrième ligne à ajouter
ul.appendChild(li);
//cinquième ligne à ajouter
document.body.appendChild(ul);

```

# Exercice 2 : Création d'un service de recherche d'adresses en France

?> _Objectif_ Créer une application simple qui utilise l'API de recherche d'adresses en France

?> _Documentation de l'API_ https://adresse.data.gouv.fr/api-doc/adresse

?> _exemple de requête_ https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&limit=5

D'après la documentation, le retour est un geojson FeatureCollection respectant la spec GeoCodeJSON (trouvez les informations nécessaires pour extraire les données qui vous intéressent).

1. Créez une interface `Address` pour représenter un résultat de recherche d'adresse, nous sommes intéressés par le nom de la ville, le code postal, le nom de la rue, le numéro, le contexte (numéro du département, nom du département et de la région) ainsi que la latitude et la longitude. Cette interface doit donc contenir les propriétés suivantes : `city`, `postcode`, `street`, `housenumber`, `context`, `lat` et `lon`. Attention car ces propriétés ne sont pas directement accessibles à la racine de l'objet retourné par l'API, vous devrez les extraire du champ `properties` de chaque objet `Feature` du tableau `features` retourné par l'API.
2. Créez une nouvelle classe `AddressService` avec une méthode `searchAddress` qui doit accepter deux paramètres : `query` (une chaîne de caractères représentant l'adresse à rechercher) et `limit` (un nombre entier représentant le nombre maximum de résultats à retourner). La méthode `searchAddress` doit retourner une promesse (`Promise`) qui se résout avec les résultats de la recherche d'adresses. Faites en sorte que la `query` soit encodée pour être utilisée dans une URL, c'est à dire que les espaces et autres caractères spéciaux soient encodés en général avec des pourcentages. Par exemple, la chaîne "8 bd du port" doit être transformée en "8%20bd%20du%20port" pour être utilisée dans une URL. Vous pouvez utiliser la fonction prédéfinie `encodeURIComponent` pour cela. Utilisez `fetch` pour faire une requête GET à l'URL https://api-adresse.data.gouv.fr/search/. Ajoutez les paramètres `q` et `limit` à l'URL avec les valeurs fournies.
3. Créez une instance de `AddressService` et utilisez-la pour rechercher une adresse avec la chaine "8 bd du port". Ajoutez une méthode pour afficher les résultats dans la console ainsi que sur la page web, en particulier les propriétés `city`, `postcode`, `street`, `housenumber`, `context`, `lat` et `lon` de chaque résultat. Vous pouvez utiliser une liste HTML pour afficher les résultats.
4. Gérez les erreurs qui peuvent survenir lors de la réalisation de la requête à l'API.

# Fonctions anonymes, fonctions fléchées, lambdas

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/07_anonymous_functions/README.md)

Dans le code TypeScript ci-dessous, deux types de fonctions fléchées (ou lambdas ou fonctions anonymes) sont utilisés : avec instructions et avec expressions.

Avec instructions :
Dans ce cas, le corps de la fonction est entouré d'accolades {} et contient une série d'instructions. Ces instructions sont exécutées lorsque la fonction est appelée. Ici, la fonction ajouter prend deux nombres en paramètres, les additionne et affiche le résultat dans la console.

Avec expression :
Dans ce cas, le corps de la fonction est une expression simple qui est directement retournée par la fonction. Il n'y a pas de bloc d'instructions entouré de {}. Ici, la fonction multiplier prend aussi deux nombres en paramètres et retourne leur produit.

La principale différence entre les deux est que les fonctions avec instructions peuvent contenir plusieurs lignes de code et ne retournent pas automatiquement une valeur, tandis que les fonctions avec expressions sont plus courtes et retournent directement le résultat de l'expression.

Nous donnons aussi d'autres exemples: fonction fléchée qui ne prend pas de paramètre, appelée à intervalle régulier ou après un délai, avec accès à des variables extérieures,passée en paramètre d'une autre fonction.

Vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")

Pour aller plus vite dans cet exercice, ous pouvez exécuter le code TypeScript avec la commande suivante

```bash
bun app.ts
```

Attention, dans ce cas il n'y a pas de serveur Astro qui démarre et pas de navigateur qui s'ouvre. C'est juste pour tester le code TypeScript avec BUN. A partir du moment où un objet `document` est utilisé, il faut exécuter le code dans un navigateur (voir exercice 1 plus bas).

# lecture

19 Fonctions.pdf  partie  4. This et les fonctions fléchées   (la partie explicative de this sera comprise plus tard)

# Exercice 1 :

Faites un projet Astro et faites en sorte que le fichier `app.ts` soit exécuté dans le navigateur (côté client). Cela permet d'accéder à l'objet `document` qui représente la page web affichée dans le navigateur.

Ajoutez un addEventListener sur le document pour afficher les coordonnées du clic de la souris.

```typescript
document.addEventListener("click", (event: MouseEvent) => {
  console.log(`x: ${event.clientX}, y: ${event.clientY}`);
});

//ici la fonction fléchée reçoit un paramètre de type MouseEvent
//qui sera passé automatiquement par le navigateur lors du clic
//En fait, la fonction fléchée est un callback qui sera appelé par le navigateur
//à chaque clic sur la page. C'est pour cela qu'on dit qu'on "ajoute" un écouteur
//d'événement sur le document. On dit aussi qu'on "écoute" l'événement "click" sur le document.
//On dit aussi qu'on "souscrit" à l'événement "click" sur le document.
```

Testez et vérifiez qu'à chaque clic de la souris, les coordonnées du clic sont affichées dans la console du navigateur.

# Exercice 2 : Calculatrice simple

Faites une application de calculatrice.

Créez une fonction fléchée **additionner** qui prend deux nombres en paramètres et retourne leur somme. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **soustraire** qui prend deux nombres en paramètres et retourne leur différence. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **multiplier** qui prend deux nombres en paramètres et retourne leur produit. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **diviser** qui prend deux nombres en paramètres et retourne leur quotient. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée calculatrice qui prend trois paramètres : deux nombres et une opération sous forme de chaîne de caractères ("additionner", "soustraire", "multiplier", "diviser"). Cette fonction doit utiliser une instruction pour déterminer quelle opération effectuer, puis appeler la fonction appropriée et afficher le résultat.

Par exemple,

```typescript
calculatrice(5, 3, "additionner");
```

doit afficher "La somme est: 8".

# Exercice 3 : affichage des coordonnées de la souris toutes les secondes

Faites une application qui affiche les coordonnées de la souris toutes les secondes.
Vous pouvez vous aider de la documentation de l'objet `MouseEvent` : 
https://developer.mozilla.org/fr/docs/Web/API/MouseEvent


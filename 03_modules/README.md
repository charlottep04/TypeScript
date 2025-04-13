# 03 les modules

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/03_modules/README.md)

## lire et comprendre

vous devez lire et comprendre le code source des fichiers `pages/index.astro`  `src/scripts/app.ts` et `src/scripts/moduleMath.ts` en particulier les directives export et import qui permettent de gérer les modules en TypeScript.
Ici, nous avons le fichier `moduleMath.ts` qui exporte des variables et des fonctions et le fichier `app.ts` qui importe ces fonctions/variables pour les utiliser.

[pages/index.astro](src/pages/index.astro ":include :type=code html")

[src/scripts/app.ts](src/scripts/app.ts ":include :type=code typescript")

[src/scripts/moduleMath.ts](src/scripts/moduleMath.ts ":include :type=code typescript")

## démarrage du projet avec Astro

configurez un nouveau projet ASTRO avec les différents fichiers fournis puis démarrez le serveur.

# lectures

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules#diff%C3%A9rences_entre_les_modules_et_les_scripts_%C2%AB_classiques_%C2%BB 

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules#gestion_des_conflits_de_nommage

https://www.typescriptlang.org/fr/docs/handbook/2/modules.html#modules-en-typescript

lisez sur le site pédagogique la partie théorique 

06 L'architecture de TypeScript.pdf

# Exercice

1. Créez une application avec trois fichiers: `calculJours.ts` `moduleVacances.ts` et `moduleTravail.ts` qui utilisent des modules pour calculer le nombre de jours de vacances restants et le nombre de jours de travail restants pour un employé. 
2. Dans les deux modules `moduleVacances.ts` et `moduleTravail.ts` créez la fonction `calculerJoursRestants` avec le même nom dans les deux modules, qui prend en paramètre le nombre de jours de vacances ou de travail déjà pris et retourne le nombre de jours restants. Vous pouvez inventer les règles pour le calcul des jours de vacances et de travail restants. Exportez la fonction qui a le même nom avec `export` dans les deux modules.
3. Dans le fichier `calculJours.ts` importez les deux modules et utilisez la fonction `calculerJoursRestants` pour afficher le nombre de jours de vacances et de travail restants pour un employé. Vous devez résoudre le conflit de nom entre les deux modules (voir la partie "gestion des conflits de nommage" dans la lecture ci-dessus).
4. Affichez les résultats dans des balises `div` avec `createElement` et `appendChild`.

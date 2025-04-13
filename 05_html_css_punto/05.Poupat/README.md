# Jeu Punto

## PREREQUIS 
```text
Vous devez installer :
- L'IDE VSCode
- git Git
- Le runtime JavaScript Bun
- Le runtime NodeJs NodeJs
- Le gestionnaire de base de données PocketBase PocketBase - il suffit de télécharger un exécutable, pas besoin de l'installer.
- Le langage typescript globalement sur votre ordinateur en utilisant (en mode superutilisateur) bun install -g typescript qui fournira la commande tsc (typescript compiler)
- L'extension Astro de VSCode Astro Extension : directement dans VSCode, cliquez sur l'icône des extensions dans la barre latérale gauche, recherchez "Astro" et cliquez sur "Installer"
```

## RECUPERATION DU CODE
### ETAPE 1 : Téléchargement et décompression
Télécharger et décompresser "Punto_V4_POUPAT.zip" ce qui donne le fichier "Punto_V4_POUPAT"
### ETAPE 2 : VSCode
Dans VSCode faire "Ouvrir un nouveau dossier" et ouvrir le répertoire parent du fichier décompressé "Punto_V4_POUPAT"
### ETAPE 3 : Installation de ASTRO
Dans le terminal de VSCode, se placer au niveau de ce répertoire parent et installer ASTRO :

Initialiser le serveur astro local avec la commande `bun create astro@latest` dans le terminal.
**Attention** pour certains avec une architecture processeur ARM il faudra utiliser la commande : `npm create astro@latest`.

```bash
How would you like to start your new project? A basic, minimal starter
Install dependencies? Yes
Initialize a new git repository? No
Where should we create your new project? Jeu.Punto
```
### ETAPE 4 : Récupération du code dans "src"
Remplacer le répertoire `src` de votre dossier du projet ASTRO (dans l'exemple : `Jeu.Punto`) par le répertoire `src` du dossier `Punto_V4_POUPAT`.
**Remarque:** Astro est capable de relancer le serveur automatiquement lorsqu'un fichier est modifié. Vous pouvez voir dans le terminal que Astro a détecté un changement et a rechargé la page automatiquement.


### ETAPE 5 : Lancement du jeu
Dans le terminal, allez dans le dossier du projet ASTRO nouvellement créé (dans l'exemple : `Jeu.Punto`) et exécutez la commande :
```bash
bun dev
```
Le serveur astro est lancé et vous verrez dans le terminal:
```bash
 astro  v5.2.5 ready in 155 ms
┃ Local    http://localhost:4321/
```
Vous pouvez alors vous connecter à l'adresse http://localhost:4321/ dans votre navigateur pour voir votre application Astro en cours d'exécution.

### ETAPE 6 : Intéractions avec le jeu 
- Clic droit sur la page
- Cliquer sur `Inspecter` la page du jeu pour visualiser les messages et pour suivre le déroulement du jeu.

## HYPOHESES PRISES
```text
Pour mon jeu Punto, je suppose que c'est toujours le joueur rouge qui commence la partie.
Il pose sa 1ère carte au centre de la grille pour débuter.
```




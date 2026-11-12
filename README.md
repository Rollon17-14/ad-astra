# Ad astra — la langue latine, pas à pas

*Per aspera ad astra.*

Site statique d'entraînement au latin pour le lycée : leçons courtes, formes à écrire, analyses de cas,
traductions guidées mot à mot, atelier de déclinaison et de conjugaison, lexique, et une partie consacrée
au livre III des *Tristes* d'Ovide (Terminale, spécialité).
Aucun serveur, aucun compte : la progression est enregistrée dans le navigateur de l'élève.

## Mise en ligne sur GitHub Pages

1. Déposer le contenu de ce dossier à la racine d'un dépôt public.
2. Dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est disponible à l'adresse `https://<compte>.github.io/<dépôt>/`.

## Modifier le contenu

- `js/contenu1.js` à `js/contenu9.js` : les chapitres. Le format des étapes est décrit en tête de `contenu1.js`
  (et, pour les traductions guidées, en tête de `contenu6.js` et `contenu9.js`).
- `js/formes.js` : modèles de déclinaison et de conjugaison.
- `js/lexique.js` : le lexique.
- `js/app.js` : le moteur (navigation, exercices, profil, espace professeur).

Ajoutez les nouvelles étapes à la fin d'un chapitre : la progression est enregistrée par position.

## Suivi de classe

Dans sa page Profil, l'élève copie un « code pour mon professeur ». La page « Espace professeur »
(lien en bas de page) transforme les codes collés en tableau de classe, à copier au format CSV.

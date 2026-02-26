# Kasa - Application de location immobilière

Kasa est une application web de location immobilière développée avec **React**. Ce projet a été réalisé dans le cadre du parcours "Développeur Web bac+2" d'OpenClassrooms. L'objectif était de moderniser une ancienne plateforme (jQuery) en utilisant une architecture de composants moderne et performante.

## 🚀 Fonctionnalités

- **Galerie dynamique** : Affichage des logements à partir d'un fichier JSON.
- **Routage complexe** : Gestion des pages Accueil, À Propos, Fiche Logement et Erreur 404 via React Router.
- **Slideshow** : Carrousel d'images avec navigation (clavier et souris) et boucle infinie.
- **Accordéons (Collapse)** : Composants réutilisables pour les descriptions et équipements.
- **Responsive Design** : Interface entièrement adaptée du mobile au desktop.
- **Loaders & Data Router** : Gestion optimisée du chargement des données.

## 🛠️ Technologies utilisées

- **React** (v18+)
- **Vite** (Outil de build)
- **React Router** (v6.4+ - Data Router)
- **Sass** (Préprocesseur CSS pour un style modulaire)
- **JSDoc** (Documentation du code)

## 📦 Installation et lancement

1. **Cloner le projet**<br>
   Sur bash :<br>
   `git clone https://github.com/MathCod/projet-kasa.git`

2. **Installer les dépendances**

    `npm install`

3. **Lancer le serveur de développement**

    `npm run dev`

L'application sera disponible à l'adresse : http://localhost:5173

4. **Build pour la production**

    `npm run build`

## 📂 Structure du projet
```
src/
├── assets/        # Images, logos et icônes
├── components/    # Composants réutilisables (Header, Footer, Collapse...)
├── data/          # Fichier JSON des logements
├── pages/         # Composants pages (Home, About, Housing, Error)
├── styles/        # Fichiers SASS (Partials et Main)
├── App.jsx        # Configuration du Router et du Layout
└── main.jsx       # Point d'entrée de l'application
```
## ✒️ Auteur
Mathias - Développement Front-End Junior<br>
Lien vers mon profil [GitHub](https://github.com/MathCod)
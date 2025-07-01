
# 📅 Plan Jour par Jour – Générateur de Devis en React + TypeScript

## ⚙️ Objectif : Créer une application web interactive avec React + TypeScript qui permet à l'utilisateur de saisir des prestations, générer un devis structuré et le télécharger en JSON.

---

## ✅ Jour 1 – Initialiser le projet React avec TypeScript
- [ ] Créer un nouveau projet avec Vite : `npm create vite@latest devis-generator -- --template react-ts`
- [ x] Entrer dans le dossier : `cd devis-generator`
- [ x] Installer les dépendances : `npm install`
- [ x] Lancer le projet : `npm run dev`
- [ x] Nettoyer le projet de base (supprimer assets inutiles, `App.css`, etc.)
- [ x] Configurer un style de base (CSS ou Tailwind)

## ✅ Jour 2 – Créer la structure de base du formulaire
- [ x] Créer le composant `DevisForm`
- [x ] Ajouter champs : "Nom du client", "Date", "Numéro de devis"
- [ x] Utiliser `useState` pour gérer les valeurs saisies
- [x ] Créer un type `DevisMetadata` (nom, date, numéro)

## ✅ Jour 3 – Ajouter les lignes de devis dynamiques
- [ ] Créer un type `LigneDevis` avec `description`, `quantité`, `prixUnitaire`
- [ ] Ajouter un bouton "Ajouter une ligne"
- [ ] Gérer l’état des lignes avec un `useState<LigneDevis[]>`
- [ ] Afficher dynamiquement chaque ligne avec `map`
- [ ] Permettre la modification directe des champs

## ✅ Jour 4 – Calculs automatiques (totaux)
- [ ] Calculer le total de chaque ligne (`quantité * prix`)
- [ ] Afficher le total de la ligne en temps réel
- [ ] Calculer le total général automatiquement (somme des lignes)
- [ ] Créer une fonction utilitaire `calculerTotalLigne(ligne: LigneDevis): number`

## ✅ Jour 5 – Générer le devis complet (objet)
- [ ] Créer un type `Devis` avec `metadata`, `lignes`, `total`
- [ ] À chaque changement, générer un objet `Devis`
- [ ] Afficher un aperçu lisible dans un composant `DevisPreview`
- [ ] Ajouter un bouton "Voir devis généré" (en format JSON dans une modale ou console)

## ✅ Jour 6 – Télécharger le devis en fichier `.json`
- [ ] Créer une fonction `exporterDevis(devis: Devis)`
- [ ] Utiliser `Blob` + `URL.createObjectURL()` pour créer le fichier
- [ ] Ajouter un bouton "Télécharger JSON"
- [ ] Tester le téléchargement du fichier depuis le navigateur

## ✅ Jour 7 – Refactorisation + Typage strict
- [ ] Séparer les composants (`LigneDevisForm`, `Total`, `DevisPreview`)
- [ ] Vérifier et renforcer les types TypeScript
- [ ] Supprimer les `any`, ajouter des types explicites partout
- [ ] Factoriser les fonctions de calcul, d’ajout de ligne, etc.

## ✅ Jour 8 – Styliser l’application (CSS ou Tailwind)
- [ ] Appliquer une mise en page claire : formulaire à gauche, aperçu à droite
- [ ] Ajouter une interface agréable avec Tailwind (ou style CSS simple)
- [ ] Rendre le formulaire responsive

## ✅ Jour 9 – Sauvegarde locale + GitHub
- [ ] Ajouter une option "Sauvegarder localement" avec `localStorage`
- [ ] Restaurer les données si présentes au démarrage
- [ ] Initialiser un dépôt Git (`git init`)
- [ ] Ajouter `.gitignore`, committer, pousser sur GitHub

## ✅ Jour 10 – Bonus / Déploiement
- [ ] Ajouter validation de champs (quantité > 0, prix >= 0)
- [ ] Numéro de devis auto (timestamp ou incrément local)
- [ ] Déployer l’application avec GitHub Pages, Vercel ou Netlify

---

Tu peux suivre ce plan en 10 jours ou avancer à ton rythme. Chaque étape est un vrai pas de progression en React + TS.

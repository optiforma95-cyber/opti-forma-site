# OPTI FORMA — Brief Projet Site Web

## Contexte
Refonte complète du site **opti-forma.fr** en site statique HTML/CSS/JS.  
Nom de domaine : `opti-forma.fr` chez IONOS.  
Hébergement : **Cloudflare Pages** (gratuit) — déploiement automatique via GitHub.

---

## Stack technique

```
Claude Code (local)  →  GitHub (dépôt)  →  Cloudflare Pages (hébergement)
                                                      ↑
                                          opti-forma.fr (DNS IONOS)
```

- **Langages** : HTML5, CSS3, JavaScript vanilla (pas de framework)
- **Fonts** : Google Fonts (Syne + DM Sans)
- **Déploiement** : `git push` → Cloudflare déploie automatiquement en ~30s
- **HTTPS** : automatique via Cloudflare
- **Coût** : 0€/mois

---

## Design & Identité visuelle

### Couleurs
| Variable       | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| Teal Principal | `#30998D` | Boutons, accents, icônes, bordures hover   |
| Teal Foncé     | `#216e65` | Hover boutons, ombres, fonds CTA           |
| Teal Clair     | `#e8f5f3` | Fonds de sections, badges, arrière-plans   |
| Teal Mid       | `#c2e8e3` | Bordures outline, badges secondaires       |
| Sombre         | `#1a2e2c` | Footer, CTA block, éléments foncés         |
| Texte          | `#2d3f3d` | Corps de texte principal                   |
| Texte Muted    | `#6b8a87` | Descriptions, sous-titres, nav liens       |
| Fond blanc     | `#ffffff` | Fond principal des pages                   |
| Fond clair     | `#f7fafa` | Fond alternance sections                   |
| Bordure        | `#e0eeec` | Bordures cartes, séparateurs               |

> Règle d'accessibilité : texte blanc sur fond `#30998D` (ratio WCAG AA 4.5:1 respecté).

### Typographies (Google Fonts)
- **Titres** : `Syne` — Bold 700 / ExtraBold 800
- **Corps** : `DM Sans` — Regular 400 / Medium 500

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

| Élément        | Police   | Taille    | Graisse       | Couleur   |
|----------------|----------|-----------|---------------|-----------|
| H1 Hero        | Syne     | 3.8rem    | ExtraBold 800 | `#1a2e2c` |
| H2 Section     | Syne     | 2.6rem    | ExtraBold 800 | `#1a2e2c` |
| H3 Carte       | Syne     | 1.1rem    | Bold 700      | `#1a2e2c` |
| Corps          | DM Sans  | 1rem      | Regular 400   | `#2d3f3d` |
| Sous-titre     | DM Sans  | 1.05rem   | Regular 400   | `#6b8a87` |
| Label section  | DM Sans  | 0.72rem   | Bold 700      | `#30998D` |
| Bouton         | Syne     | 0.9rem    | Bold 700      | `#ffffff` |
| Navigation     | DM Sans  | 0.88rem   | Medium 500    | `#6b8a87` |

---

## Structure du site

```
opti-forma-site/
├── index.html          ← Accueil
├── formations.html     ← Catalogue formations
├── financement.html    ← Financement & modalités
├── qualiopi.html       ← Certification Qualiopi
├── contact.html        ← Formulaire de contact
├── css/
│   └── style.css       ← Styles communs
├── js/
│   └── main.js         ← Scripts communs
├── assets/
│   └── images/
└── opti-forma-preview.html  ← Design de référence validé
```

---

## Pages & Contenu

### `index.html` — Accueil
- **Nav** fixe : logo OPTIFORMA, liens (Nos formations / Pourquoi nous / Financement / Qualiopi), bouton CTA Contact
- **Hero** : fond blanc, bloc teal clair à droite (clip-path), badge "Certification Qualiopi", H1 "Devenez formateur compétent & reconnu", paragraphe intro, 2 boutons (Voir nos formations / Financement & modalités), stats (100% OPCO / Qualiopi / Terrain), carte formation flottante à droite
- **Pourquoi nous** : fond `#f7fafa`, 4 cartes (Pédagogie terrain / Qualiopi / Accompagnement personnalisé / Méthodes simples)
- **Aperçu formations** : 3 cartes formation
- **CTA band** : fond `#1a2e2c`, texte blanc, bouton teal
- **Footer** : fond `#1a2e2c`, logo, liens, copyright

### `formations.html` — Formations
- Header de page (titre + description)
- Grille 3 colonnes de cartes formations
- Chaque carte : numéro, titre, description, durée, tags, bouton "En savoir plus"

**Formations :**
1. Concevoir & Animer une Formation Professionnelle — 3 jours — Certifiante — OPCO/CPF
2. Évaluer & Améliorer ses Actions de Formation — 2 jours — Pratique — CPF
3. Devenir Formateur Interne en Entreprise — 2 jours — Inter/Intra — Plan de formation

### `financement.html` — Financement & Modalités
- 4 dispositifs : OPCO / CPF / Plan de compétences / Prise en charge individuelle
- CTA "Nous contacter pour étude de dossier"

### `qualiopi.html` — Qualiopi
- Présentation de la certification
- Ce que ça garantit (qualité pédagogique, accès financements publics)
- Critères du référentiel national qualité
- CTA vers contact

### `contact.html` — Contact
- Formulaire : Nom, Prénom, Email, Téléphone, Sujet (select), Message, bouton Envoyer
- Informations de contact
- Note délais de réponse

---

## Règles d'espacement

| Propriété               | Valeur        | Usage                            |
|-------------------------|---------------|----------------------------------|
| Padding horizontal      | 5rem (80px)   | Marge gauche/droite des sections |
| Padding vertical        | 6rem (96px)   | Haut et bas des sections         |
| Gap grille formations   | 1.5rem (24px) | Espacement entre les cartes      |
| Border-radius cartes    | 14px          | Arrondi des angles               |
| Border-radius boutons   | 6px           | Arrondi des boutons              |
| Max-width contenu       | 1280px        | Largeur maximale des sections    |

---

## Composants UI

### Bouton principal
```css
background: #30998D; color: white; font-family: Syne; font-weight: 700;
padding: 0.9rem 2rem; border-radius: 6px;
```

### Bouton outline
```css
border: 2px solid #c2e8e3; color: #30998D; background: transparent;
font-weight: 600; padding: 0.9rem 1.5rem; border-radius: 6px;
```

### Carte formation
```css
border: 1px solid #e0eeec; border-radius: 14px; padding: 2rem;
background: white; transition: border-color + box-shadow au hover;
```

### Badge/Tag teal
```css
background: #e8f5f3; border: 1px solid #c2e8e3; color: #216e65;
font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.7rem; border-radius: 100px;
```

---

## Navigation

Identique sur toutes les pages. Lien actif en `#30998D`.

```html
<nav>
  <div class="logo">OPTI<span>FORMA</span></div>
  <ul>
    <li><a href="formations.html">Nos formations</a></li>
    <li><a href="financement.html">Financement</a></li>
    <li><a href="qualiopi.html">Qualiopi</a></li>
    <li><a href="contact.html" class="nav-cta">Contact</a></li>
  </ul>
</nav>
```

---

## Responsive

- **Mobile** : navigation hamburger, grilles 1 colonne, hero en colonne unique
- **Tablette** : grilles 2 colonnes
- **Desktop** : grilles 3 colonnes, layout complet
- Breakpoints : `768px` (mobile) et `1024px` (tablette)

---

## Référence design

Le design validé est dans `opti-forma-preview.html` à la racine du projet.  
Respecter strictement : couleurs, typographies, espacements, style des cartes et boutons.

---

## Déploiement — GitHub + Cloudflare Pages

### Étape 1 — GitHub
1. Créer un compte sur [github.com](https://github.com)
2. Créer un nouveau dépôt : `opti-forma-site` (public)
3. Dans le dossier du projet :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_COMPTE/opti-forma-site.git
git push -u origin main
```

### Étape 2 — Cloudflare Pages
1. Créer un compte sur [pages.cloudflare.com](https://pages.cloudflare.com) (gratuit)
2. "Create a project" → connecter le compte GitHub
3. Sélectionner le dépôt `opti-forma-site`
4. Framework preset : **None** (site statique)
5. Build command : laisser vide
6. Build output directory : `/` (racine)
7. Déployer → Cloudflare génère une URL temporaire (ex: `opti-forma-site.pages.dev`)

### Étape 3 — Domaine custom IONOS → Cloudflare
1. Dans Cloudflare Pages → Custom domains → `opti-forma.fr`
2. Cloudflare fournit 2 enregistrements DNS à ajouter
3. Dans IONOS → Gestion DNS de `opti-forma.fr` → ajouter les enregistrements CNAME fournis
4. Propagation DNS : 5 à 30 minutes
5. HTTPS activé automatiquement ✅

### Mise à jour du site (workflow quotidien)
```bash
# Modifier les fichiers avec Claude Code, puis :
git add .
git commit -m "Description des modifications"
git push
# → Cloudflare redéploie automatiquement en ~30 secondes
```

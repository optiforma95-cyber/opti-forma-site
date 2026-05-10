# OPTI FORMA — Brief Projet Site Web
## Mis à jour le 11 mai 2026

---

## Stack technique

```
Claude Code (local) → GitHub (optiforma95-cyber/opti-forma-site) → Cloudflare Pages
                                                      ↑
                                          opti-forma.fr (DNS Cloudflare / IONOS)
```

- **Langages** : HTML5, CSS3, JavaScript vanilla
- **Fonts** : Google Fonts — Syne (titres) + DM Sans (corps)
- **Formulaire** : Formspree (https://formspree.io/f/mdabpngk) → contact@opti-forma.fr
- **Déploiement** : `git push` → Cloudflare redéploie en ~30s
- **HTTPS** : automatique via Cloudflare
- **Coût hébergement** : 0€/mois

---

## Informations légales Opti Forma

- **Raison sociale** : OPTIFORMA
- **Statut** : SASU au capital variable
- **SIRET** : 98840369700010
- **SIREN** : 988403697
- **Adresse** : 9 Chaussée Jules César, 95520 Osny
- **Email** : contact@opti-forma.fr
- **Téléphone** : 06 35 46 84 92
- **N° déclaration d'activité** : 11950956995 (auprès du préfet de région d'Île-de-France)
- **Code NAF** : 8559A — Formation continue d'adultes
- **Certification Qualiopi** : CAP2061 — CAPCERT — Accréditation COFRAC n°5-0638
- **Valide jusqu'au** : 10 septembre 2028
- **Hébergeur** : Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA

---

## Réseaux sociaux

- **Facebook** : https://facebook.com/share/19ywZobqVt
- **Instagram** : https://instagram.com/opti.formation
- **LinkedIn** : https://linkedin.com/in/opti-forma-77679a399
- **Avis Google** : https://g.page/r/CdV8Ojslu2euEAE/review

---

## Liens externes clés

- **Calendly** (réserver un appel 30 min) : https://calendly.com/optiforma95/30min
- **Avis Google** : https://g.page/r/CdV8Ojslu2euEAE/review

---

## Design & Identité visuelle

### Logo
- **Fichier** : `assets/images/optiforma-logo.svg`
- **Intégré dans** : navbar + footer de toutes les pages

### Favicon
- **Fichier** : `favicon.svg` (racine du projet)

### OG Image (réseaux sociaux)
- `assets/images/og-image.svg`
- `assets/images/og-image.jpg`

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

### Typographies
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```
- **Titres** : Syne Bold 700 / ExtraBold 800
- **Corps** : DM Sans Regular 400 / Medium 500

---

## Structure du site

```
opti-forma-site/
├── index.html                      ← Accueil
├── formations.html                 ← Catalogue 3 formations
├── financement.html                ← 4 dispositifs financement
├── qualiopi.html                   ← Certification + certificat CAP2061
├── contact.html                    ← Formulaire Formspree
├── a-propos.html                   ← Page À propos (Nadia, valeurs, stats)
├── cgv.html                        ← Conditions Générales de Vente (12 articles)
├── mentions-legales.html           ← Mentions légales
├── politique-confidentialite.html  ← Politique RGPD
├── 404.html                        ← Page d'erreur personnalisée
├── formation-rncp37275.html        ← Détail RNCP37275
├── formation-rs6490.html           ← Détail RS6490
├── favicon.svg                     ← Favicon
├── css/style.css                   ← Styles communs
├── js/main.js                      ← Scripts communs
└── assets/images/
    ├── optiforma-logo.svg          ← Logo officiel
    ├── og-image.svg                ← Image Open Graph
    └── og-image.jpg                ← Image Open Graph (format JPG)
```

---

## Formations

### Formation 01 — RNCP37275
- **Titre** : Formateur Professionnel d'Adultes
- **Certificateur** : Ministère du Travail, du Plein Emploi et de l'Insertion
- **Niveau** : 5 (Bac+2)
- **Valide jusqu'au** : 29 avril 2028
- **Durée** : 3 à 6 mois
- **Financement** : CPF, OPCO
- **4 CCP** :
  - CCP1 — Concevoir et préparer la formation
  - CCP2 — Animer une formation et évaluer les acquis
  - CCP3 — Accompagner les apprenants en formation
  - CCP4 — Inscrire sa pratique dans une démarche qualité et RSE
- **Lien** : https://www.francecompetences.fr/recherche/rncp/37275/

### Formation 02 — RS6490
- **Titre** : Animer une formation en situation professionnelle
- **Certificateur** : Manitude
- **Enregistré** : 21/12/2023
- **Valide jusqu'au** : 21 décembre 2028
- **Durée** : 4 à 5 jours (24h à 40h selon positionnement)
- **Financement** : CPF, OPCO, Plan de développement des compétences
- **Prérequis** : Expertise professionnelle d'au moins 3 ans
- **5 compétences** :
  - Concevoir l'action de formation sur son sujet d'expertise
  - Instaurer les conditions favorables à l'apprentissage
  - Conduire l'action de formation selon le programme pédagogique
  - Gérer les situations sensibles durant la formation
  - Évaluer le niveau d'acquisition des compétences
- **Lien** : https://www.francecompetences.fr/recherche/rs/6490/

### Formation 03 — SSCT *(à venir)*
- **Titre** : Santé, Sécurité et Conditions de Travail
- **Statut** : En cours d'agrément
- **Public** : Représentants du personnel, employeurs
- **Affichage** : Carte "Bientôt disponible" avec badge ambré

---

## Contenu index.html (sections)

| Section | Statut | Détail |
|---------|--------|--------|
| Hero | ✅ | Bouton Calendly intégré |
| Stats chiffrées | ✅ | Nombre d'apprenants, taux satisfaction, etc. |
| Pourquoi nous | ✅ | |
| Aperçu formations | ✅ | |
| Comment ça marche | ✅ | 5 étapes + bouton Calendly |
| Ils nous font confiance | ✅ | 6 badges + lien avis Google |
| FAQ | ✅ | 10 questions accordéon |
| CTA | ✅ | Bouton Calendly |

---

## Page À propos (a-propos.html)

- **Formatrice** : Nadia — 18 ans d'expérience
- **Contenu** : Parcours, valeurs, stats, engagement qualité
- **Photo** : ⏳ À ajouter (placeholder en place)
- **Lien nav** : Ajouté dans navbar + footer de toutes les pages

---

## SEO & Technique

- ✅ Meta tags (title, description, OG, Twitter Card) sur toutes les pages
- ✅ Favicon `favicon.svg`
- ✅ OG image `og-image.jpg` pour le partage réseaux sociaux
- ✅ Page 404 personnalisée
- ⏳ Google Search Console (à configurer)
- ⏳ Sitemap.xml (à créer et soumettre)

---

## Navigation & Footer

- ✅ Lien "À propos" dans navbar de toutes les pages
- ✅ Lien "À propos" dans footer de toutes les pages
- ✅ Lien "CGV" dans footer de toutes les pages
- ✅ Icônes réseaux sociaux (Facebook, Instagram, LinkedIn) dans footer de toutes les pages
- ✅ Logo SVG dans navbar + footer

---

## Conformité Qualiopi (Critère 1 — Indicateur 1)

Sur chaque fiche formation :
- ✅ Objectifs pédagogiques
- ✅ Prérequis
- ✅ Durée
- ✅ Modalités et délais d'accès (48h à 2 mois)
- ✅ Tarif (sur devis personnalisé)
- ✅ Méthodes pédagogiques
- ✅ Modalités d'évaluation
- ✅ Accessibilité handicap (contact@opti-forma.fr)
- ✅ Date de mise à jour (Mai 2025)

Sur toutes les pages (footer) :
- ✅ N° déclaration d'activité 11950956995
- ✅ Certificat Qualiopi CAP2061 affiché (page qualiopi.html)
- ✅ Mentions légales
- ✅ Politique de confidentialité
- ✅ CGV (cgv.html — 12 articles)

---

## Conformité RGPD

- ✅ Politique de confidentialité complète
- ✅ Case à cocher obligatoire sur le formulaire de contact
- ✅ Pas de cookies tiers, pas de tracking
- ✅ Droits RGPD mentionnés (accès, rectification, suppression)
- ✅ Autorité de contrôle : CNIL

---

## Espacement & Composants

| Propriété             | Valeur        |
|-----------------------|---------------|
| Padding horizontal    | 5rem (80px)   |
| Padding vertical      | 6rem (96px)   |
| Gap grille formations | 1.5rem (24px) |
| Border-radius cartes  | 14px          |
| Border-radius boutons | 6px           |
| Max-width contenu     | 1280px        |

---

## Déploiement

### Workflow mise à jour
```bash
git add .
git commit -m "Description des modifications"
git push
# Cloudflare redéploie automatiquement en ~30s
```

### Configuration DNS
- **Nameservers** : fatima.ns.cloudflare.com / luke.ns.cloudflare.com (configurés chez IONOS)
- **CNAME** opti-forma.fr → opti-forma-site.pages.dev (Cloudflare)
- **CNAME** www → opti-forma-site.pages.dev (Cloudflare)

---

## Mobile

- ✅ Menu hamburger corrigé
- ✅ Stats page À propos corrigées
- ⏳ Audit complet mobile à finaliser (hero, autres sections)

---

## À faire (prochaines étapes)

- [ ] **Blog** — structure + 4-5 articles (CPF, Qualiopi, RNCP vs RS, devenir formateur, OPCO)
- [ ] **Photo de Nadia** sur la page à-propos.html
- [ ] **Vrais avis clients** — remplacer placeholders section "Ils nous font confiance"
- [ ] **Formation SSCT** — compléter la fiche quand l'agrément sera obtenu
- [ ] **Google Search Console** — vérification du domaine + soumission sitemap
- [ ] **Sitemap.xml** — générer et soumettre
- [ ] **Résilier Durable** — une fois propagation DNS confirmée

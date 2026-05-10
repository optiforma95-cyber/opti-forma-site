# OPTI FORMA — Brief Projet Site Web
## Mis à jour le 9 mai 2025

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
- **Calendly** : https://calendly.com/optiforma95/30min (Appel découverte 30 min)
- **Avis Google** : https://g.page/r/CdV8Ojslu2euEAE/review
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

---

## Fondatrice

- **Prénom** : Nadia
- **Expérience** : 18 ans d'expérience professionnelle
- **Diplômes** : BTS, Licence, Titre Professionnel FPA (RNCP37275)
- **Zone** : Toute la France
- **Opti Forma** : Créé il y a moins d'un an, certifié Qualiopi dès la 1ère année

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
├── a-propos.html                   ← À propos / Nadia
├── mentions-legales.html           ← Mentions légales
├── politique-confidentialite.html  ← Politique RGPD
├── formation-rncp37275.html        ← Détail RNCP37275
├── formation-rs6490.html           ← Détail RS6490
├── css/style.css                   ← Styles communs
├── js/main.js                      ← Scripts communs
└── assets/images/
```

---

## Pages index.html — Sections dans l'ordre

1. **Hero** — Badge Qualiopi, H1, paragraphe, 3 boutons (Voir formations / Financement / Réserver appel Calendly), stats (100% OPCO / Qualiopi / Terrain), carte formation RNCP37275
2. **Pourquoi nous** — 4 cartes (Pédagogie terrain / Qualiopi / Accompagnement / Méthodes)
3. **Ils nous font confiance** — 6 badges (Qualiopi / CPF / OPCO / Ministère du Travail / Manitude / COFRAC) + bouton avis Google
4. **Comment ça marche** — 5 étapes (Contact & diagnostic / Positionnement / Financement / Formation / Certification) + bouton Calendly
5. **Nos formations** — 3 cartes (RNCP37275 / RS6490 / SSCT à venir)
6. **FAQ** — 10 questions en accordéon
7. **Financement** — Section teal avec 4 dispositifs
8. **CTA band** — Fond sombre, bouton contact + lien Calendly
9. **Footer** — Logo, réseaux sociaux, liens nav, NDA, mentions légales

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

## Conformité Qualiopi

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
- ✅ Certificat Qualiopi CAP2061 (page qualiopi.html)
- ✅ Mentions légales
- ✅ Politique de confidentialité
- ✅ Certificat Qualiopi lien vers capcertification.com

---

## Conformité RGPD

- ✅ Politique de confidentialité complète
- ✅ Case à cocher obligatoire sur le formulaire
- ✅ Pas de cookies tiers, pas de tracking
- ✅ Droits RGPD mentionnés
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
- **Nameservers** : fatima.ns.cloudflare.com / luke.ns.cloudflare.com
- **CNAME** opti-forma.fr → opti-forma-site.pages.dev (Cloudflare)
- **CNAME** www → opti-forma-site.pages.dev (Cloudflare)

---

## À faire

### Priorité haute
- [ ] Résilier **Durable** une fois propagation DNS confirmée partout
- [ ] Ajouter **meta tags SEO** sur toutes les pages (title, description, og:image)
- [ ] Vérifier et corriger **affichage mobile** complet

### Priorité moyenne
- [ ] Ajouter **vrais avis clients** quand disponibles
- [ ] Ajouter **logo définitif** quand il sera prêt
- [ ] Compléter fiche **SSCT** quand l'agrément sera obtenu
- [ ] Ajouter **CGV** si nécessaire
- [ ] Corriger description **Calendly** (bug à l'édition)

### Plus tard
- [ ] **Blog** / actualités pour le SEO
- [ ] **Newsletter**
- [ ] **Espace stagiaire** en ligne

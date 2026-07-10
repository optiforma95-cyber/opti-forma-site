# SITE WEB opti-forma.fr — Référence technique et graphique

> Objectif : source unique pour la stack, la charte v2.0, l'architecture des pages et les chantiers web
> Version : v1 — Dernière mise à jour : 04/07/2026 (consolidation commits `31bba28` → `36298b5`)
> À consulter quand : toute tâche 💻 WEB (page, CSS, contenu HTML, SEO, déploiement)
> Remplace : BRIEF.md (sections design, structure, déploiement) + AUDIT-OPTIFORMA-2026-07-01.md (sections 2, 3, 4, 6, 7, 8, 10)

---

## 1. Stack & workflow

- HTML5 / CSS3 / JS vanilla — pas de framework, pas de CMS. CSS inline dans `index.html`, `css/style.css` pour les autres pages.
- Repo GitHub `optiforma95-cyber/opti-forma-site` → Cloudflare Pages, déploiement auto sur push `main` (~30 s). HTTPS auto. Coût : 0 €/mois.
- Local : `C:\Users\lsifo\opti-forma-site` (VSCode + Claude Code).
- **Règle de production** : les modifications de code sont exécutées par Claude Code en local. Cette session claude.ai produit des prompts/blocs d'instructions copier-collables, jamais les fichiers HTML.
- ⚠️ Fins de ligne hétérogènes dans le repo (racine en CRLF, `blog/` en LF) : toute modification doit respecter la convention propre à chaque fichier.
- ⚠️ Vérification prod : le fetch de Claude peut servir une version en cache — la vérification qui fait foi est le hard refresh navigateur (Ctrl+F5).

```bash
git add . && git commit -m "..." && git push   # Cloudflare redéploie automatiquement
```

## 2. Charte graphique v2.0 (fait foi : `chartegraphiqueoptiformav2.pdf`)

### Couleurs (variables CSS)
```css
--teal:        #30998D  /* principal : boutons secondaires, accents, icônes */
--teal-dark:   #216e65  /* hover teal, ombres */
--teal-light:  #e8f5f3  /* fonds sections, badges */
--teal-mid:    #c2e8e3  /* bordures outline, badges secondaires */
--orange:      #F97316  /* accent : CTA principaux, stats, badges importants */
--orange-dark: #ea6a0a
--orange-light:#fff7f0  /* fonds cartes accent orange */
--dark:        #1a2e2c  /* hero, footer, fonds CTA */
--text:        #2d3f3d  /* corps de texte */
--muted:       #6b8a87  /* descriptions, sous-titres */
--border:      #e0eeec
--bg:          #fff
--bg-light:    #f7fafa  /* alternance sections */
```

### Typographie
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
- Titres H1–H3, logo, boutons : **Plus Jakarta Sans** 700/800
- Corps, navigation : **Inter** 400/500
- H1 hero `clamp(2rem,3.5vw,3.2rem)` 800 `#1a2e2c` · H2 section 2.6rem 800 · H3 carte 1.1rem 700 · corps Inter 1rem · sous-titre 1.05rem `#6b8a87` · label section 0.72rem 700 `#30998D` · nav 0.88rem 500

### Espacements & composants
```css
--py: clamp(2rem,4.5vw,4rem)   /* padding vertical sections (réduit le 01/07/2026) */
--px: clamp(1.25rem,5vw,5rem)
--max-w: 1280px
--r-card: 14px
--r-btn: 6px
```
- Hero : padding-top `clamp(2rem,4vw,4rem)`, image 360px, portrait circle 240px, img-pedagogy 260px. ⚠️ L'image portrait du hero est un hotlink Unsplash (pas un fichier du repo) — placeholder en attente de la photo réelle de Nadia.
- Nav sticky (`position: sticky`, PAS fixed) avec scroll shadow · footer 4 colonnes · bouton Calendly flottant (pulse orange) toutes pages · menu hamburger mobile (réutilise la même `<ul class="nav-links">`) · grille formations 2×2 (1 colonne ≤768px) · micro-animations scroll/hover
- ⚠️ Ne jamais ajouter de `<style>` inline imposant un `padding-top` sur `body` : la nav est sticky et `.article-wrapper` gère déjà l'espacement (cause du bug navbar mobile blog, corrigé au commit `31bba28`)
- Boutons : `.btn-primary` (fond orange, texte blanc) · `.btn-teal` · `.btn-outline` (bordure teal-mid) · badges "Bientôt disponible" ambrés

### Classes fiches formation (réutilisées partout)
`.page-header`, `.breadcrumb`, `.fd-intro-ref`, `.fd-section-wrap/-inner`, `.fd-content`, `.fd-sidebar`, `.fd-block/-title`, `.fd-objectives`, `.fd-program`, `.fd-day*`, `.fd-audience-grid/-card`, `.fd-infocard*`, `.fd-info-row/-label/-value`, `.fd-funding-card/-title/-tags/-note`, `.fd-access-card/-icon/-text`, `.fd-actions`, `.cta-section/.cta-inner`, `.tag/.tag.teal/.tag-orange`, `.badge-soon/.soon-badge`

### Blog
Structure d'article de référence : `blog/qualiopi-certification.html` (breadcrumb Accueil > Blog > titre, `.article-wrapper`, `.article-cta`). Tags de catégories : Métier, Financement, Qualité, Certification, Réglementation. Nouvel article = card en première position sur `blog.html` + entrée sitemap priority 0.7.

## 3. Architecture des pages

### Pages principales (actives)
`index.html` · `formations.html` (4 cards) · `financement.html` · `qualiopi.html` · `a-propos.html` · `contact.html` · `blog.html` · `mentions-legales.html` · `politique-confidentialite.html` · `cgv.html` · `404.html`

### Fiches formation
- `formation-rncp37275.html` — vente active
- `formation-rs6490.html` — vente active
- `formation-ssct.html` — vente active (créée 01/07/2026, conforme loi n°2026-403, Qualiopi C1/I1)
- `formation-sst.html` — pré-inscription uniquement (contenu au conditionnel, champ Formspree caché `formation = "SST - pré-inscription"`, mention « Aucune inscription ferme ni paiement à ce stade »)

### Blog (6 articles)
`blog/devenir-formateur-independant.html` · `blog/cpf-devenir-formateur.html` · `blog/opco-financement-formation.html` · `blog/qualiopi-certification.html` · `blog/rncp-vs-rs.html` · `blog/fin-agrement-ssct-cse-2026.html` (publié 04/07/2026, tag Réglementation — loi n°2026-403)

### Fichiers legacy non liés dans la nav (décision pendante — voir `SUIVI_DOSSIERS_v1.md`)
`formation-evaluer-ameliorer.html` · `formation-formateur-interne.html` · `opti-forma-preview.html`
⚠️ `opti-forma-preview.html` : footer à structure totalement différente (liste plate, `href="#"`), exclu des harmonisations footer et og:url — argument supplémentaire pour trancher la décision legacy.

## 4. Navbar & footer standards

Navbar identique toutes pages (y compris `blog/*.html`, chemins absolus depuis la racine) : logo `Opti<span>Forma</span>` + liens Formations / Financement / Qualiopi / **Blog** / Contact + burger + CTA teal « Demander un devis ».

Footer — bloc légal obligatoire (toutes les pages) :
```
© 2026 OPTIFORMA — SASU à capital variable · SIRET 98840369700010
NDA 11950956995 · Enregistré sous le numéro 11950956995.
Cet enregistrement ne vaut pas agrément de l'État. · Qualiopi CAP2061
```
Colonne « Formations » du footer — contenu standard sur les 22 pages actives (harmonisé au commit `36298b5`, référence : `index.html`) :
- RNCP37275 · RS6490 · Catalogue
- `formation-ssct.html` → « Formation SSCT — Élus CSE »
- `formation-sst.html` → « Formation SST (bientôt) »

Colonne « Organisme » du footer : inclut le lien « Blog » → `/blog.html` (toutes pages, commit `1f93faf`).

Bouton flottant toutes pages :
```html
<a href="https://calendly.com/optiforma95/30min" target="_blank" rel="noopener" class="calendly-float">📅 Réserver un appel</a>
```

## 5. SEO & sitemap

- **og:url** : canonique par page depuis le commit `f3835cf` (index → `https://opti-forma.fr/`, autres pages → URL propre). `index.html` ne porte que og:url (pas d'autres balises og: — à compléter si besoin un jour). `opti-forma-preview.html` exclu.
- **robots.txt** : présent et conforme (Allow: / + ligne Sitemap) — vérifié 04/07/2026.
- **sitemap.xml** : `/` 1.0 weekly · `formations.html` 0.9 weekly · fiches RNCP/RS6490/SSCT 0.9 monthly · `formation-sst.html` 0.7 · `financement.html` 0.8 · `qualiopi.html` 0.8 · `a-propos.html` 0.7 · `blog.html` 0.8 weekly · 6 articles blog 0.7 · `contact.html` 0.6 yearly · cgv / mentions / confidentialité 0.3 yearly

## 6. Chantiers web ouverts

- 🔍 Vérifier Google Search Console après les ajouts SSCT/SST/article n°6 (indexation, sitemap à jour côté GSC)
- 📄 Décision fichiers legacy (garder / rediriger / supprimer) — voir `SUIVI_DOSSIERS_v1.md`
- 📸 Photo réelle de Nadia (remplace le hotlink Unsplash du hero + a-propos) · ⭐ vrais avis clients · 📊 remplacer le « 98 % » illustratif par des stats réelles
- 🖼️ Logo définitif + slogan à intégrer dès disponibles
- 🔍 (Optionnel) compléter les balises og: d'`index.html` (og:title/description/image absentes, seul og:url présent)

## 7. Historique des corrections

- ✅ 03/07/2026 — commit `11ab601` : © 2026 sur les 22 pages HTML · footer légal d'`index.html` aligné sur le standard · intro section formations corrigée (SSCT en vente active). Origine : audit prod par fetch du 03/07/2026.
- ✅ 04/07/2026 — commit `31bba28` : bug navbar mobile des articles blog résolu (suppression du `<style>` inline `padding-top` sur `body` dans les 5 articles — incompatible avec la nav sticky).
- ✅ 04/07/2026 — commit `1f93faf` : lien « Blog » ajouté à la navbar (entre Qualiopi et Contact, burger inclus) et au footer colonne Organisme, sur les 22 pages — blog plus orphelin.
- ✅ 04/07/2026 — commit `f3835cf` : og:url canonique par page (15 pages corrigées, og:url ajouté sur index).
- ✅ 04/07/2026 — commit `b266cc7` : robots.txt vérifié conforme · SSCT ajoutée au footer de `cgv.html` · `mentions-legales.html` corrigé (« à capital variable » + formule agrément) · hero index élucidé : hotlink Unsplash (pas un src vide).
- ✅ 04/07/2026 — commit `f60eb9c` : 6e article blog publié (`blog/fin-agrement-ssct-cse-2026.html`, loi n°2026-403) + card blog.html + sitemap.
- ✅ 04/07/2026 — commit `36298b5` : colonne footer « Formations » harmonisée sur les 22 pages actives (liens + libellés SSCT/SST standard, vérifié grep).
- ✅ 06/07/2026 — commits `4fb0c5c` + `d2b65d8` : conformité CPF/EDOF — suppression de toute présentation du CPF comme financement actif sur 9 fichiers (index, formations, financement, fiches RNCP/RS6490, cgv, 3 articles blog) · bloc CPF de financement.html réécrit avec badge "Référencement EDOF en cours" · clause paiement CPF des CGV corrigée · bouton hero "Financement & CPF" → "Financement". Règle : aucune mention CPF actif tant qu'EDOF non validé.

# SUIVI DOSSIERS & ÉCHÉANCES — OPTIFORMA

> Objectif : source unique pour l'état des dossiers réglementaires en cours, les échéances et les décisions pendantes
> Version : v1 — Dernière mise à jour : 04/07/2026
> À consulter quand : question de statut ("où en est…"), planification, relance, préparation d'audit
> Remplace : AUDIT_HISTORIQUE_OPTIFORMA.md + AUDIT-OPTIFORMA-2026-07-01.md (sections 9 et 10)

---

## 1. DRIEETS — Agrément sessions d'examen RNCP37275

- **Dossier n°31264401**, déposé le 13/05/2026 sur demarches-simplifiees.fr — accusé de réception reçu
- Responsable : Nadia BELBOUAB — suppléante : Belinda MELIANI
- 3 sessions prévues : septembre 2026 · novembre 2026 · janvier 2027
- Pièces jointes : Kbis, bail commercial, planning, photos plateau technique et équipements, tampon — 14 engagements cochés
- **Réponse attendue : août–septembre 2026** (délai ~3 mois)
- ⚠️ Si compléments demandés : délai de réponse **1 mois** — surveiller contact@opti-forma.fr en continu
- Méthode utilisée : duplication adaptée du dossier LSI Académie (mêmes locaux/équipements)

## 2. EDOF / Mon Compte Formation — Référencement RS6490

- **Resoumission ENVOYÉE** (confirmé le 06/07/2026) — pièce complémentaire déposée, dossier en instruction CDC
- Points corrigés par rapport au premier dépôt :
  - Capacité pédagogique : Titre Pro FPA RNCP37275 comme pièce principale
  - Délai d'accès corrigé : « 11 jours ouvrés minimum »
  - Communication financement : suppression des mentions de prise en charge CPF à 100 %, référence aux options de cofinancement
- Rappel de périmètre : EDOF vérifie le référencement — la composition du jury RS6490 est un sujet **Manitude** (certificateur), à traiter séparément du dossier EDOF
- ⚠️ Tant que le référencement EDOF n'est pas validé : aucune communication présentant le CPF comme financement actif — site mis en conformité le 06/07/2026 (commits `4fb0c5c` + `d2b65d8`)
- Dès validation EDOF : opération inverse à planifier (réactiver les mentions CPF sur les 9 fichiers corrigés, retirer les badges "EDOF en cours")
- Surveillance : contact@opti-forma.fr + espace EDOF — toute demande de complément CDC a généralement un délai de réponse court

## 3. SST — Habilitation INRS / FORPREV

- Objectif : habiliter OPTIFORMA à délivrer la formation SST (initiale 2 j/14 h, MAC 1 j/7 h)
- Acquis : certificat **SST** de Nadia BELBOUAB (02/06/2026 → 02/06/2028, pièce `BELBOUAB_Nadia_SST.pdf`)
- Manquants : certificat **Formateur SST** + habilitation de l'organisme via FORPREV
- Aucun calendrier confirmé — chantier long terme
- Tant que non obtenu : `formation-sst.html` reste en pré-inscription (aucune vente ferme, aucune promesse de certificat)
- Dès obtention : activer la vente (retirer le formulaire de pré-inscription, publier programme complet + CTA devis, passer la card accueil en active)

## 4. SSCT — Acquis (pour mémoire)

- Vente active depuis le 01/07/2026 — loi n°2026-403 du 26/05/2026, art. 5 (en vigueur 28/05/2026) a supprimé l'agrément préfectoral ; seule la déclaration d'activité est requise (art. L.6351-1 à L.6351-8)
- OPTIFORMA intervient sur base NDA 11950956995 + Qualiopi CAP2061
- Ne plus jamais présenter la SSCT comme « en cours d'agrément »
- Article blog dédié publié le 04/07/2026 : `blog/fin-agrement-ssct-cse-2026.html`

## 5. Qualiopi — Audit de surveillance

- Échéance : **~mars 2027** (mi-parcours du cycle 11/09/2025 → 10/09/2028)
- Préparation à lancer dès l'**automne 2026** : preuves par indicateur, BPF, traçabilité des premières sessions
- Certificateur : CAPCERT — contact@capcertification.com

## 6. Décisions pendantes

- Fichiers legacy du repo (`formation-evaluer-ameliorer.html`, `formation-formateur-interne.html`, `opti-forma-preview.html`) : garder / rediriger / supprimer. Note : `opti-forma-preview.html` a un footer hors standard (liste plate, `href="#"`) et est exclu des harmonisations — pèse pour suppression/redirection.
-- Statut exact de la resoumission EDOF [À VÉRIFIER] (§2)
- Jury RS6490 : à traiter avec Manitude (hors EDOF)

✅ Résolu 03/07/2026 : année copyright footer — © 2026 sur tout le site (commit `11ab601`)
✅ Résolu 04/07/2026 : blog intégré à la navigation (navbar + footer, commit `1f93faf`) · bug navbar mobile articles blog (commit `31bba28`) · og:url canoniques (commit `f3835cf`) · CGV/mentions légales conformes (commit `b266cc7`) · footer Formations harmonisé 22 pages (commit `36298b5`) — détail dans `SITE_WEB_v1.md` §7

## 7. Calendrier consolidé

- **Août–sept. 2026** — réponse DRIEETS RNCP37275 (dossier n°31264401)
- **Sept. 2026** — 1re session RNCP37275 (si agrément obtenu)
- **Automne 2026** — lancement préparation audit de surveillance Qualiopi
- **Nov. 2026** — 2e session RNCP37275
- **Janv. 2027** — 3e session RNCP37275
- **Mars 2027** — audit de surveillance Qualiopi
- **02/06/2028** — fin de validité certificat SST de Nadia
- **10/09/2028** — fin de validité Qualiopi CAP2061 (renouvellement à anticiper)
- **21/12/2028** — fin de validité RS6490 · **29/04/2028** — fin de validité fiche RNCP37275

## 8. Workstream séparé (pour mémoire)

Projet Claude dédié « Nadia — Démission Reconversion » (système 2 agents) : processus réglementaire de transition de carrière — hors périmètre de ce projet.

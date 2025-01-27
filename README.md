# Installation de l'app

---

Dans cette version, Pensez à créer un `.env` à partir du `.env.example`.

---

`npm i && npm run dev`

## Workflow github

```bash
git checkout main
git status
git remote add prof git@github.com:O-clock-Quindim/S13-okanban-SPA.git
git fetch prof
git reset --hard prof/main
# Créer votre nouvelle branche
```

## S07E01 - Révisions DOM & Mise en place

### Architecture S06/S07

- Contrairement à la S05 où le backend s'occupe de calculer la vue HTML à partir des données et d'un fichier EJS, en S06/S07 on passe sur une archi client/serveur :
  - Notre navigateur récupère d'abord du code client qu'il charge et affiche (ie, une coquille vide)
  - Puis, la coquille vide se charge d'aller récupérer les données sur une API : notre backend.

![](../ressources/archi.png)

### Avantages

- SoC : séparation plus précise entre la responsabilité du frontend et du backend.

- Notre interface pour nos données est notre API. Donc si on veut faire 2 fronts différents (1 pour Mobile, 1 pour Desktop par exemple), c'est possible !

### Inconvénients

- Parfois, pas nécessaire pour certains projets "simples" (on évite l'over-engineering).

- Référencement (SEO) pas optimal :
  - vu qu'on envoie une coquille vide sans données, le navigateur n'a rien à se mettre sous la dent côté sémantique HTML. Il reçoit des `div` vide sans données, qui elles sont chargées en JS (donc non indexées).

- Prendre en compte le temps de réponse : on charge d'abord le front puis les données dans un second temps, donc potentiellement plus lent.

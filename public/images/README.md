# Où mettre vos photos

Le site fonctionne déjà avec de jolis emplacements "à venir" (fond dégradé + icône) tant
que les vraies photos ne sont pas ajoutées. Dès que vous déposez un fichier au bon
endroit **avec exactement le même nom**, la photo apparaît automatiquement sur le site
— aucune modification de code n'est nécessaire.

Format recommandé : `.jpg`, orientation paysage, minimum 1600×1000 px, poids < 500 Ko
(compressez sur squoosh.app ou tinypng.com avant import pour des temps de chargement rapides).

## `/images/hero/` — grandes photos d'ambiance

| Fichier | Utilisé sur |
|---|---|
| `hero-home.jpg` | Page d'accueil |
| `hero-hebergements.jpg` | Page Hébergements |
| `hero-voitures.jpg` | Page Voitures |
| `hero-quad.jpg` | Page Quad & Buggy |
| `hero-galerie.jpg` | Page Galerie |
| `hero-about.jpg` | Page À propos |
| `hero-contact.jpg` | Page Contact |
| `cta-desert.jpg` | Bandeau "Prêt à vivre l'expérience" |
| `about-team.jpg` | Page À propos (photo équipe) |

## `/images/hebergements/` — 3 photos par bien (`-1`, `-2`, `-3`)

`riad-al-manar-1.jpg` / `-2.jpg` / `-3.jpg`
`riad-jasmin-1.jpg` / `-2.jpg` / `-3.jpg`
`villa-atlas-view-1.jpg` / `-2.jpg` / `-3.jpg`
`villa-palmeraie-dune-1.jpg` / `-2.jpg` / `-3.jpg`
`appartement-gueliz-loft-1.jpg` / `-2.jpg` / `-3.jpg`
`appartement-medina-suite-1.jpg` / `-2.jpg` / `-3.jpg`

## `/images/voitures/` — 1 photo par véhicule

`dacia-sandero.jpg`, `renault-clio.jpg`, `volkswagen-golf.jpg`,
`hyundai-tucson.jpg`, `range-rover-evoque.jpg`, `mercedes-classe-v.jpg`

## `/images/quad-buggy/` — 1 photo par circuit

`quad-palmeraie.jpg`, `quad-desert-agafay.jpg`,
`buggy-agafay-sunset.jpg`, `buggy-extreme-ourika.jpg`

## `/images/gallery/` — photos additionnelles pour la page Galerie

`marrakech-1.jpg`, `marrakech-2.jpg`, `marrakech-3.jpg`

---

Pour ajouter, renommer ou retirer un bien/véhicule/circuit, modifiez le fichier
`src/lib/data.ts` — chaque élément possède un champ `image`/`images` qui pointe vers
ces chemins.

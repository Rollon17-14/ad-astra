/* ============================================================
   LE VOCABULAIRE DES TRISTES — 300 mots à connaître (Terminale).
   Dix listes de trente mots : mots-outils et mots usuels, puis le
   vocabulaire propre à l'exil. Sélection établie pour le site ;
   graphie u pour v, comme dans le texte étudié.
   Ce fichier se charge après lexique.js : il y ajoute ses mots.
   ============================================================ */
var PARTIE_VOCAB = (function () {
  const L = (titre, resume, mots) => ({ titre, resume, mots: mots.trim().split("\n").map(l => { const k = l.indexOf(" : "); return [l.slice(0, k).trim(), l.slice(k + 3).trim()]; }) });
  const LISTES = [
    L("Les mots de liaison", "Conjonctions et petits adverbes : ceux qui tiennent la phrase", `
et : et
-que : et (attaché à la fin du mot)
atque, ac : et, et aussi
sed : mais
nec, neque : et ne… pas, ni
aut : ou, ou bien
nam : car
enim : en effet
tamen : cependant, pourtant
si : si
nisi : si… ne… pas, sauf
cum (conjonction) : quand, comme, puisque
dum : pendant que, tant que
ut : quand, comme (+ indicatif) ; afin que, de sorte que (+ subjonctif)
ne : pour que… ne… pas
quod : parce que, le fait que
quia : parce que
quamuis : bien que, quoique
quoque : aussi
etiam : même, encore
iam : déjà, désormais
nunc : maintenant
tum, tunc : alors
saepe : souvent
semper : toujours
non : ne… pas
uix : à peine
tam : si, tellement
sic : ainsi
ita : ainsi, de cette façon`),
    L("Prépositions et adverbes", "Le lieu, le mouvement, la mesure", `
in (+ ablatif) : dans, sur (lieu où l'on est)
in (+ accusatif) : vers, dans, contre (lieu où l'on va)
ad (+ accusatif) : à, près de, jusqu'à
a, ab (+ ablatif) : de, loin de, par
e, ex (+ ablatif) : hors de, de
de (+ ablatif) : du haut de, au sujet de
per (+ accusatif) : à travers, par
cum (+ ablatif) : avec
sine (+ ablatif) : sans
sub (+ ablatif) : sous
inter (+ accusatif) : parmi, entre
ante (+ accusatif) : devant, avant
post (+ accusatif) : après, derrière
pro (+ ablatif) : pour, à la place de
procul : loin, au loin
hic (adverbe) : ici
huc : ici (avec mouvement)
illic : là-bas
inde : de là, ensuite
unde : d'où
ubi : où ; quand
quo : où (avec mouvement)
longe : loin, de loin
prope : près, presque
modo : seulement ; tout à l'heure
tantum : seulement ; autant
quam : que, combien
magis : plus, davantage
minus : moins
bene : bien`),
    L("Pronoms et déterminants", "Qui parle, de qui, de quoi", `
ego, mei : moi, je
tu, tui : toi, tu
nos, nostrum : nous
uos, uestrum : vous
se, sui : se, soi
meus, a, um : mon, le mien
tuus, a, um : ton, le tien
suus, a, um : son, le sien
noster, tra, trum : notre
uester, tra, trum : votre
hic, haec, hoc : celui-ci, ce… ci
ille, illa, illud : celui-là, ce… là
iste, ista, istud : celui-là, ce… (près de toi)
is, ea, id : il, elle ; ce, cet
ipse, ipsa, ipsum : lui-même, en personne
idem, eadem, idem : le même
qui, quae, quod : qui, que, lequel
quis, quid : qui ? quoi ?
quisquis, quidquid : quiconque, tout ce que
aliquis, aliquid : quelqu'un, quelque chose
nemo, neminis : personne
nihil, nil : rien
nullus, a, um : aucun
ullus, a, um : quelque (en phrase négative)
omnis, e : tout, chaque
alter, era, erum : l'autre (de deux)
alius, a, ud : autre, un autre
uterque, utraque, utrumque : l'un et l'autre
talis, e : tel
tantus, a, um : si grand`),
    L("Les verbes usuels", "Les verbes que l'on rencontre à chaque page", `
sum, es, esse, fui : être
possum, potes, posse, potui : pouvoir
do, das, dare, dedi, datum : donner
dico, is, ere, dixi, dictum : dire
facio, is, ere, feci, factum : faire
fero, fers, ferre, tuli, latum : porter, supporter
habeo, es, ere, habui, habitum : avoir, tenir
uideo, es, ere, uidi, uisum : voir
uenio, is, ire, ueni, uentum : venir
eo, is, ire, ii, itum : aller
uolo, uis, uelle, uolui : vouloir
nolo, non uis, nolle, nolui : ne pas vouloir
debeo, es, ere, debui, debitum : devoir
peto, is, ere, petiui, petitum : chercher à atteindre, demander
quaero, is, ere, quaesiui, quaesitum : chercher, demander
credo, is, ere, credidi, creditum : croire
puto, as, are, aui, atum : penser
scio, is, ire, sciui, scitum : savoir
iubeo, es, ere, iussi, iussum : ordonner
teneo, es, ere, tenui, tentum : tenir, retenir
mitto, is, ere, misi, missum : envoyer
capio, is, ere, cepi, captum : prendre
relinquo, is, ere, reliqui, relictum : laisser, abandonner
sequor, eris, i, secutus sum : suivre
loquor, eris, i, locutus sum : parler
uoco, as, are, aui, atum : appeler
lego, is, ere, legi, lectum : lire ; recueillir
scribo, is, ere, scripsi, scriptum : écrire
ago, is, ere, egi, actum : faire, mener
sto, as, are, steti, statum : se tenir debout`),
    L("Les verbes de l'exil", "Souffrir, craindre, prier, espérer le retour", `
careo, es, ere, carui (+ ablatif) : être privé de
doleo, es, ere, dolui : souffrir, s'affliger
fleo, es, ere, fleui, fletum : pleurer
queror, eris, i, questus sum : se plaindre
timeo, es, ere, timui : craindre
metuo, is, ere, metui : craindre, redouter
spero, as, are, aui, atum : espérer
precor, aris, ari, atus sum : prier, supplier
oro, as, are, aui, atum : prier, demander
rogo, as, are, aui, atum : demander, interroger
pereo, is, ire, perii, peritum : périr, être perdu
morior, eris, i, mortuus sum : mourir
uiuo, is, ere, uixi, uictum : vivre
patior, eris, i, passus sum : souffrir, supporter
cogo, is, ere, coegi, coactum : forcer, contraindre
pello, is, ere, pepuli, pulsum : chasser, repousser
fugio, is, ere, fugi, fugitum : fuir
erro, as, are, aui, atum : errer, se tromper
absum, abes, abesse, afui : être absent, être loin
desum, dees, deesse, defui : manquer
maneo, es, ere, mansi, mansum : rester
redeo, is, ire, redii, reditum : revenir
noceo, es, ere, nocui, nocitum (+ datif) : nuire à
laedo, is, ere, laesi, laesum : blesser, offenser
pecco, as, are, aui, atum : commettre une faute
mereor, eris, eri, meritus sum : mériter
ignosco, is, ere, ignoui, ignotum (+ datif) : pardonner
parco, is, ere, peperci, parsum (+ datif) : épargner
lenio, is, ire, iui, itum : adoucir, apaiser
iuuo, as, are, iuui, iutum : aider, faire plaisir`),
    L("L'exil, la faute, le destin", "Les noms du malheur d'Ovide", `
exilium, ii, n : l'exil
exul, ulis, m : l'exilé
fuga, ae, f : la fuite, l'exil
poena, ae, f : le châtiment, la peine
culpa, ae, f : la faute
crimen, inis, n : l'accusation, le grief
error, oris, m : l'erreur, l'égarement
ira, ae, f : la colère
Caesar, aris, m : César (l'empereur Auguste)
deus, i, m : le dieu
numen, inis, n : la puissance divine, la divinité
fatum, i, n : le destin
fortuna, ae, f : le sort, la fortune
sors, sortis, f : le sort, le lot
casus, us, m : le malheur, la chute, le hasard
malum, i, n : le malheur, le mal
dolor, oris, m : la douleur
lacrima, ae, f : la larme
luctus, us, m : le deuil, l'affliction
cura, ae, f : le souci, le soin
metus, us, m : la crainte
spes, spei, f : l'espoir
uotum, i, n : le vœu
preces, um, f pl : les prières
uenia, ae, f : le pardon, la grâce
mors, mortis, f : la mort
funus, eris, n : la mort, les funérailles
uita, ae, f : la vie
salus, utis, f : le salut, la santé
uulnus, eris, n : la blessure`),
    L("La mer, le voyage, le pays barbare", "De Rome à Tomes : la traversée, l'hiver, l'ennemi", `
mare, is, n : la mer
pontus, i, m : la mer ; le Pont (la mer Noire)
aequor, oris, n : la mer, la plaine liquide
unda, ae, f : la vague, l'onde
fluctus, us, m : la vague, le flot
uentus, i, m : le vent
hiems, hiemis, f : l'hiver, la tempête
frigus, oris, n : le froid
nix, niuis, f : la neige
glacies, ei, f : la glace
nauis, is, f : le navire
ratis, is, f : le navire, le radeau
puppis, is, f : le navire, la poupe
uia, ae, f : le chemin, la route
iter, itineris, n : le chemin, le voyage
terra, ae, f : la terre
tellus, uris, f : la terre, le sol
orbis, is, m : le monde, le cercle
locus, i, m : le lieu
litus, oris, n : le rivage
ripa, ae, f : le rivage, la rive (d'un fleuve)
Hister, tri, m : l'Hister (le Danube)
barbarus, a, um : barbare, étranger
hostis, is, m : l'ennemi
bellum, i, n : la guerre
arma, orum, n pl : les armes
telum, i, n : le trait, l'arme de jet
sagitta, ae, f : la flèche
equus, i, m : le cheval
ferus, a, um : sauvage, farouche`),
    L("Rome et les proches", "Ce qu'Ovide a laissé derrière lui", `
Roma, ae, f : Rome
urbs, urbis, f : la ville (souvent Rome)
patria, ae, f : la patrie
domus, us, f : la maison
tectum, i, n : la maison, le toit
limen, inis, n : le seuil
coniunx, iugis, m ou f : l'épouse, l'époux
uxor, oris, f : l'épouse
amicus, i, m : l'ami
sodalis, is, m : le compagnon, l'ami intime
comes, itis, m ou f : le compagnon (de route), la compagne
pater, tris, m : le père
mater, tris, f : la mère
frater, tris, m : le frère
natus, i, m : le fils
puer, pueri, m : l'enfant
uir, uiri, m : l'homme, le mari
homo, inis, m : l'homme, l'être humain
populus, i, m : le peuple
turba, ae, f : la foule
nomen, inis, n : le nom
fama, ae, f : la renommée, la rumeur
laus, laudis, f : la louange, la gloire
honor, oris, m : l'honneur, la charge
fides, ei, f : la fidélité, la confiance
pietas, atis, f : le sens du devoir, l'affection (envers les siens, les dieux)
amor, oris, m : l'amour
pectus, oris, n : la poitrine, le cœur
cor, cordis, n : le cœur
animus, i, m : l'esprit, le courage`),
    L("Le poète, le corps, le temps", "Le livre et celui qui l'écrit ; les jours qui passent", `
carmen, inis, n : le poème, le chant
uersus, us, m : le vers
liber, libri, m : le livre
libellus, i, m : le livre, le petit livre
opus, eris, n : l'œuvre, le travail
ars, artis, f : l'art, le savoir-faire
Musa, ae, f : la Muse
uates, is, m : le poète inspiré, le devin
poeta, ae, m : le poète
ingenium, ii, n : le talent, le génie
littera, ae, f : la lettre (de l'alphabet) ; au pluriel, une lettre, des écrits
uerbum, i, n : le mot, la parole
uox, uocis, f : la voix
os, oris, n : la bouche, le visage
manus, us, f : la main
oculus, i, m : l'œil
lumen, inis, n : la lumière ; au pluriel, les yeux
uultus, us, m : le visage, l'expression
corpus, oris, n : le corps
pes, pedis, m : le pied
tempus, oris, n : le temps, le moment
dies, ei, m ou f : le jour
nox, noctis, f : la nuit
annus, i, m : l'année
hora, ae, f : l'heure
lux, lucis, f : la lumière, le jour
sol, solis, m : le soleil
caelum, i, n : le ciel
sidus, eris, n : l'astre, l'étoile
ignis, is, m : le feu`),
    L("Les adjectifs", "Qualifier les lieux, les êtres, les jours", `
magnus, a, um : grand
paruus, a, um : petit
multus, a, um : nombreux, beaucoup de
longus, a, um : long
breuis, e : court, bref
nouus, a, um : nouveau
uetus, eris : vieux, ancien
primus, a, um : premier
ultimus, a, um : dernier, le plus éloigné
extremus, a, um : dernier, extrême
solus, a, um : seul
totus, a, um : tout entier
tristis, e : triste
miser, era, erum : malheureux
maestus, a, um : triste, affligé
laetus, a, um : joyeux
felix, icis : heureux
infelix, icis : malheureux, infortuné
dulcis, e : doux
durus, a, um : dur
saeuus, a, um : cruel
grauis, e : lourd, pénible
leuis, e : léger
carus, a, um : cher
pius, a, um : pieux, dévoué
dignus, a, um (+ ablatif) : digne de
tutus, a, um : en sûreté, sûr
aeger, gra, grum : malade, souffrant
fessus, a, um : fatigué, épuisé
similis, e : semblable`)
  ];
  const chapitres = LISTES.map((l, n) => {
    const num = 52 + n, a = n * 30 + 1;
    if (l.mots.length !== 30) console.error("Liste " + (n + 1) + " : " + l.mots.length + " mots");
    if (typeof LEXIQUE !== "undefined") l.mots.forEach(m => LEXIQUE.push({ ch: num, la: m[0], fr: m[1] }));
    const serie = k => ({ t: "mots", titre: `Mots ${a + k * 10} à ${a + k * 10 + 9}`, intro: "Que veut dire ce mot ? Les mots manqués reviennent à la fin.", mots: l.mots.slice(k * 10, k * 10 + 10), banque: l.mots });
    return { id: "c" + num, borne: `${a}-${a + 29}`, genre: "Vocabulaire, mots", titre: l.titre, resume: l.resume, etapes: [
      { t: "lecon", titre: "Les trente mots de la liste", texte: `<p>Lis la liste à voix haute, cache la colonne de droite et vérifie ce que tu retiens. Les trois séries suivantes reprennent ces mots dix par dix, puis un bilan les mélange tous.</p>
<div class="tab-wrap"><table class="donnees mots-liste"><thead><tr><th>Mot latin</th><th>Sens</th></tr></thead><tbody>${l.mots.map(m => `<tr><th lang="la">${m[0]}</th><td>${m[1]}</td></tr>`).join("")}</tbody></table></div>` },
      serie(0), serie(1), serie(2),
      { t: "mots", titre: "Bilan : les trente mots", intro: "Les trente mots de la liste, dans le désordre.", mots: l.mots, banque: l.mots }
    ] };
  });
  return [{ id: "p10", titre: "Le vocabulaire des Tristes : 300 mots à connaître",
    sous: "Terminale, spécialité. Dix listes de trente mots, des mots-outils au vocabulaire de l'exil. Pour chaque liste : la leçon, trois séries de dix mots et un bilan.",
    chapitres }];
})();

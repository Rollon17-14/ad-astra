/* CONTENU — Partie 3 (chapitres IX à XII), d'après les cours 9 à 12. Format décrit en tête de contenu1.js. */
const T_RELATIF = `<div class="tab-wrap"><table class="paradigme"><caption><i class="la">qui, quae, quod</i> : qui, que, dont…</caption>
<thead><tr><th rowspan="2">Cas</th><th colspan="3">Singulier</th><th colspan="3">Pluriel</th></tr><tr><th>Masc.</th><th>Fém.</th><th>Neutre</th><th>Masc.</th><th>Fém.</th><th>Neutre</th></tr></thead><tbody>
<tr><th>Nominatif</th><td class="la">qui</td><td class="la">quae</td><td class="la">quod</td><td class="la">qui</td><td class="la">quae</td><td class="la">quae</td></tr>
<tr><th>Accusatif</th><td class="la">quem</td><td class="la">quam</td><td class="la">quod</td><td class="la">quos</td><td class="la">quas</td><td class="la">quae</td></tr>
<tr><th>Génitif</th><td class="la">cuius</td><td class="la">cuius</td><td class="la">cuius</td><td class="la">quorum</td><td class="la">quarum</td><td class="la">quorum</td></tr>
<tr><th>Datif</th><td class="la">cui</td><td class="la">cui</td><td class="la">cui</td><td class="la">quibus</td><td class="la">quibus</td><td class="la">quibus</td></tr>
<tr><th>Ablatif</th><td class="la">quo</td><td class="la">qua</td><td class="la">quo</td><td class="la">quibus</td><td class="la">quibus</td><td class="la">quibus</td></tr></tbody></table></div>`;

var PARTIE3 = [{
  id: "p3", titre: "Élargir l'horizon", sous: "La troisième déclinaison, la relative, les temps du parfait, les dernières déclinaisons",
  chapitres: [
  {
    id: "c9", num: 9, titre: "La troisième déclinaison", resume: "La plus variée : parisyllabiques, imparisyllabiques et neutres",
    etapes: [
      { t: "lecon", titre: "Reconnaître un nom de la troisième déclinaison",
        texte: `<p>La troisième déclinaison est la plus variée : elle regroupe des noms masculins, féminins et neutres, avec des nominatifs très divers. Un seul repère, mais il est sûr : le <strong>génitif singulier en <i class="la">-is</i></strong>.</p>
<ul><li><i class="la">consul, consul<b class="des">is</b>, m</i> : le consul</li><li><i class="la">civis, civ<b class="des">is</b>, m</i> : le citoyen</li>
<li><i class="la">flumen, flumin<b class="des">is</b>, n</i> : le fleuve</li><li><i class="la">mare, mar<b class="des">is</b>, n</i> : la mer</li></ul>
<p>Le nominatif ne laisse pas toujours deviner le <strong>radical</strong>. On le trouve en retirant <i class="la">-is</i> au génitif : <i class="la">flumin-is</i> donne <i class="la">flumin-</i>, <i class="la">reg-is</i> donne <i class="la">reg-</i>.</p>
<aside class="retenir"><strong>À retenir.</strong> À la troisième déclinaison plus qu'ailleurs, on apprend un nom avec son génitif : <i class="la">rex, regis</i> ; <i class="la">miles, militis</i> ; <i class="la">corpus, corporis</i>.</aside>` },
      { t: "saisie", titre: "Trouver le radical", intro: "Écris le radical de chaque nom (le génitif sans <i class=\"la\">-is</i>).",
        items: [
          { q: "<i class=\"la\">rex, regis, m</i> : le roi", r: "reg" }, { q: "<i class=\"la\">miles, militis, m</i> : le soldat", r: "milit" },
          { q: "<i class=\"la\">flumen, fluminis, n</i> : le fleuve", r: "flumin" }, { q: "<i class=\"la\">corpus, corporis, n</i> : le corps", r: "corpor" },
          { q: "<i class=\"la\">nox, noctis, f</i> : la nuit", r: "noct" }, { q: "<i class=\"la\">civitas, civitatis, f</i> : la cité", r: "civitat" }
        ] },
      { t: "lecon", titre: "Parisyllabiques et imparisyllabiques",
        texte: `<p>On distingue deux groupes, ce qui permet de prévoir le <strong>génitif pluriel</strong>.</p>
<ul><li><strong>Imparisyllabiques</strong> (<i class="la">impar</i>, inégal) : le génitif singulier a <strong>une syllabe de plus</strong> que le nominatif. <i class="la">con-sul</i> (2), <i class="la">con-su-lis</i> (3). Génitif pluriel en <b class="des">-um</b> : <i class="la">consulum</i>.</li>
<li><strong>Parisyllabiques</strong> (<i class="la">par</i>, égal) : <strong>même nombre de syllabes</strong> aux deux cas. <i class="la">ci-vis</i> (2), <i class="la">ci-vis</i> (2). Génitif pluriel en <b class="des">-ium</b> : <i class="la">civium</i>.</li></ul>
<aside class="attention"><strong>Deux cas à surveiller.</strong>
<ul><li>Les noms dont le radical se termine par <strong>deux consonnes</strong> font aussi leur génitif pluriel en <i class="la">-ium</i> : <i class="la">urbs, urb-is</i> donne <i class="la">urbium</i> ; <i class="la">nox, noct-is</i> donne <i class="la">noctium</i>.</li>
<li>Quelques noms de la famille échappent à la règle : <i class="la">pater, mater, frater</i> ont un génitif pluriel en <i class="la">-um</i> (<i class="la">patrum</i>).</li></ul></aside>` },
      { t: "tri", titre: "Génitif pluriel en -um ou en -ium ?", q: "Compte les syllabes et regarde la fin du radical.",
        categories: ["-um", "-ium"],
        items: [
          { txt: "<i class=\"la\">hostis, hostis, m</i> : l'ennemi", cat: "-ium", expl: "Parisyllabique : <i class=\"la\">hostium</i>." }, { txt: "<i class=\"la\">flumen, fluminis, n</i> : le fleuve", cat: "-um", expl: "Imparisyllabique : <i class=\"la\">fluminum</i>." },
          { txt: "<i class=\"la\">nox, noctis, f</i> : la nuit", cat: "-ium", expl: "Radical <i class=\"la\">noct-</i>, deux consonnes : <i class=\"la\">noctium</i>." }, { txt: "<i class=\"la\">mons, montis, m</i> : la montagne", cat: "-ium", expl: "Radical <i class=\"la\">mont-</i> : <i class=\"la\">montium</i>." },
          { txt: "<i class=\"la\">labor, laboris, m</i> : le travail", cat: "-um", expl: "Imparisyllabique : <i class=\"la\">laborum</i>." }, { txt: "<i class=\"la\">civitas, civitatis, f</i> : la cité", cat: "-um", expl: "Imparisyllabique : <i class=\"la\">civitatum</i>." },
          { txt: "<i class=\"la\">turris, turris, f</i> : la tour", cat: "-ium", expl: "Parisyllabique : <i class=\"la\">turrium</i>." }, { txt: "<i class=\"la\">vulnus, vulneris, n</i> : la blessure", cat: "-um", expl: "Imparisyllabique : <i class=\"la\">vulnerum</i>." },
          { txt: "<i class=\"la\">miles, militis, m</i> : le soldat", cat: "-um", expl: "Imparisyllabique : <i class=\"la\">militum</i>." }, { txt: "<i class=\"la\">pater, patris, m</i> : le père", cat: "-um", expl: "L'exception : <i class=\"la\">patrum</i>." }
        ] },
      { t: "lecon", titre: "Les modèles masculins et féminins",
        texte: `${tDecl("consul", { titre: 'Imparisyllabique : <i class="la">consul, consulis, m</i> (le consul)' })}${tDecl("civis", { titre: 'Parisyllabique : <i class="la">civis, civis, m</i> (le citoyen)' })}
<p>Les deux modèles ne diffèrent qu'au nominatif singulier et au génitif pluriel. Partout ailleurs, les terminaisons sont les mêmes : <i class="la">-em, -is, -i, -e</i> au singulier ; <i class="la">-es, -es, -es, -(i)um, -ibus, -ibus</i> au pluriel.</p>` },
      { t: "tableau", titre: "Décliner miles", intro: "Un imparisyllabique, sur le modèle de <i class=\"la\">consul</i>. Le radical est <i class=\"la\">milit-</i>.", modele: "consul", rad: "milit", nomSg: "miles", mot: "miles, militis, m", sens: "le soldat" },
      { t: "lecon", titre: "Les modèles neutres",
        texte: `<p>La règle des neutres s'applique toujours : nominatif, vocatif et accusatif identiques, et pluriel en <i class="la">-a</i>.</p>
${tDecl("corpus", { titre: 'Imparisyllabique : <i class="la">corpus, corporis, n</i> (le corps)' })}${tDecl("mare", { titre: 'Neutre en -e : <i class="la">mare, maris, n</i> (la mer)' })}
<p>Les neutres en <i class="la">-e</i>, <i class="la">-al</i> et <i class="la">-ar</i> (<i class="la">mare</i> ; <i class="la">animal, animalis, n</i>) ont trois particularités : ablatif singulier en <b class="des">-i</b>, pluriel en <b class="des">-ia</b>, génitif pluriel en <b class="des">-ium</b>.</p>
<p>Les neutres imparisyllabiques comme <i class="la">corpus</i>, <i class="la">flumen</i> ou <i class="la">tempus</i> gardent l'ablatif en <i class="la">-e</i>, le pluriel en <i class="la">-a</i> et le génitif pluriel en <i class="la">-um</i>.</p>` },
      { t: "tableau", titre: "Décliner flumen", intro: "Un neutre imparisyllabique, sur le modèle de <i class=\"la\">corpus</i>. Le radical est <i class=\"la\">flumin-</i>.", modele: "corpus", rad: "flumin", nomSg: "flumen", mot: "flumen, fluminis, n", sens: "le fleuve" },
      { t: "analyse", titre: "Reconnaître les cas",
        items: [
          { forme: "consulibus", mot: "consul, consulis, m", bons: ["Dp", "Bp"] }, { forme: "maria", mot: "mare, maris, n", bons: ["Np", "Vp", "Ap"] },
          { forme: "civem", mot: "civis, civis, m", bons: ["As"] }, { forme: "consule", mot: "consul, consulis, m", bons: ["Bs"] },
          { forme: "urbium", mot: "urbs, urbis, f", bons: ["Gp"] }, { forme: "tempus", mot: "tempus, temporis, n", bons: ["Ns", "Vs", "As"] },
          { forme: "milites", mot: "miles, militis, m", bons: ["Np", "Vp", "Ap"] }, { forme: "mari", mot: "mare, maris, n", bons: ["Ds", "Bs"] }
        ] },
      { t: "saisie", titre: "Mettre au cas demandé", intro: "Attention au type de nom pour le génitif pluriel et l'ablatif singulier.",
        items: [
          { q: "<i class=\"la\">miles, militis, m</i> (le soldat) : accusatif singulier", r: "militem" },
          { q: "<i class=\"la\">nomen, nominis, n</i> (le nom) : nominatif pluriel", r: "nomina" },
          { q: "<i class=\"la\">ars, artis, f</i> (l'art ; radical <i class=\"la\">art-</i>) : génitif pluriel", r: "artium" },
          { q: "<i class=\"la\">vectigal, vectigalis, n</i> (l'impôt) : ablatif singulier", r: "vectigali" },
          { q: "<i class=\"la\">ignis, ignis, m</i> (le feu) : datif pluriel", r: "ignibus" },
          { q: "<i class=\"la\">corpus, corporis, n</i> (le corps) : accusatif pluriel", r: "corpora" },
          { q: "<i class=\"la\">civis, civis, m</i> (le citoyen) : génitif pluriel", r: "civium" },
          { q: "<i class=\"la\">lex, legis, f</i> (la loi) : ablatif pluriel", r: "legibus" },
          { q: "<i class=\"la\">rex, regis, m</i> (le roi) : datif singulier", r: "regi" }
        ] },
      { t: "tri", titre: "Révision : trois déclinaisons", q: "À quelle déclinaison appartient chaque nom ?",
        categories: ["1re", "2e", "3e"],
        items: [
          { txt: "<i class=\"la\">rosa, ae, f</i>", cat: "1re" }, { txt: "<i class=\"la\">pater, patris, m</i>", cat: "3e" }, { txt: "<i class=\"la\">bellum, i, n</i>", cat: "2e" },
          { txt: "<i class=\"la\">hostis, hostis, m</i>", cat: "3e" }, { txt: "<i class=\"la\">poeta, ae, m</i>", cat: "1re" }, { txt: "<i class=\"la\">ager, agri, m</i>", cat: "2e" },
          { txt: "<i class=\"la\">tempus, temporis, n</i>", cat: "3e", expl: "Nominatif en <i class=\"la\">-us</i>, mais génitif en <i class=\"la\">-is</i>." }, { txt: "<i class=\"la\">filius, ii, m</i>", cat: "2e" },
          { txt: "<i class=\"la\">virtus, virtutis, f</i>", cat: "3e" }, { txt: "<i class=\"la\">donum, i, n</i>", cat: "2e" }
        ] },
      { t: "analyse", titre: "Révision : reconnaître les cas", intro: "Les trois déclinaisons sont mélangées : identifie d'abord la déclinaison grâce au génitif.",
        items: [
          { forme: "rosae", mot: "rosa, ae, f", bons: ["Gs", "Ds", "Np", "Vp"] }, { forme: "pueri", mot: "puer, pueri, m", bons: ["Gs", "Np", "Vp"] },
          { forme: "legem", mot: "lex, legis, f", bons: ["As"] }, { forme: "dona", mot: "donum, i, n", bons: ["Np", "Vp", "Ap"] },
          { forme: "corporis", mot: "corpus, corporis, n", bons: ["Gs"] }, { forme: "poetis", mot: "poeta, ae, m", bons: ["Dp", "Bp"] },
          { forme: "patre", mot: "pater, patris, m", bons: ["Bs"] }, { forme: "reges", mot: "rex, regis, m", bons: ["Np", "Vp", "Ap"] }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>3e déclinaison : génitif singulier en <i class="la">-is</i> ; radical = génitif sans <i class="la">-is</i>.</li>
<li>Imparisyllabiques : génitif pluriel en <i class="la">-um</i>. Parisyllabiques et radicaux à deux consonnes : <i class="la">-ium</i>.</li>
<li>Neutres en <i class="la">-e, -al, -ar</i> : ablatif singulier en <i class="la">-i</i>, pluriel en <i class="la">-ia</i>, <i class="la">-ium</i>.</li></ul>
${tDecl("consul")}${tDecl("civis")}${tDecl("corpus")}${tDecl("mare")}` }
    ]
  },
  {
    id: "c10", num: 10, titre: "La proposition relative", resume: "Le pronom qui, quae, quod : accord avec l'antécédent, cas selon la fonction",
    etapes: [
      { t: "lecon", titre: "Qu'est-ce qu'une proposition relative ?",
        texte: `<p>En français, la proposition subordonnée relative est introduite par un <strong>pronom relatif</strong> (qui, que, dont, où, lequel…). Elle apporte une précision sur un mot de la principale, son <strong>antécédent</strong>.</p>
<blockquote class="latin" style="font-style:normal">Le soldat, <b>qui a combattu courageusement</b>, est loué.</blockquote>
<p>« qui » est le pronom relatif ; « le soldat » est son antécédent.</p>
<p>En latin, le principe est le même. La relative :</p>
<ul><li>est introduite par un pronom relatif ;</li><li>précise un nom ou un pronom de la principale ;</li><li>possède son propre verbe.</li></ul>` },
      { t: "lecon", titre: "Le pronom relatif qui, quae, quod",
        texte: `${T_RELATIF}
<aside class="retenir"><strong>Les deux règles.</strong>
<ol><li>Le relatif prend le <strong>genre</strong> et le <strong>nombre</strong> de son <strong>antécédent</strong>.</li>
<li>Son <strong>cas</strong> dépend de sa <strong>fonction dans la relative</strong>.</li></ol></aside>
<ul><li>Sujet, donc nominatif : <i class="la">Puer, <b>qui</b> legit, studiosus est.</i> L'enfant, qui lit, est studieux.</li>
<li>COD, donc accusatif : <i class="la">Liber, <b>quem</b> legis, novus est.</i> Le livre que tu lis est neuf.</li>
<li>Complément du nom, donc génitif : <i class="la">Amicus, <b>cuius</b> filium video, adest.</i> L'ami dont je vois le fils est présent.</li>
<li>COI, donc datif : <i class="la">Miles, <b>cui</b> dux praemium dat, fortis est.</i> Le soldat à qui le chef donne une récompense est courageux.</li></ul>` },
      { t: "saisie", titre: "Décliner le relatif", intro: "Écris la forme demandée de <i class=\"la\">qui, quae, quod</i>.",
        items: [
          { q: "Masculin, accusatif singulier", r: "quem" }, { q: "Féminin, accusatif pluriel", r: "quas" }, { q: "Neutre, nominatif pluriel", r: "quae" },
          { q: "Génitif singulier (trois genres)", r: "cuius" }, { q: "Datif pluriel (trois genres)", r: "quibus" }, { q: "Féminin, ablatif singulier", r: "qua" }, { q: "Féminin, génitif pluriel", r: "quarum" }
        ] },
      { t: "quiz", titre: "Choisir le bon relatif", intro: "Cherche l'antécédent (genre, nombre), puis la fonction du relatif dans la relative (cas).",
        questions: [
          { q: "<i class=\"la\">Vir, … clamat, iratus est.</i> L'homme qui crie est en colère.", choix: ["<i class=\"la\">qui</i>", "<i class=\"la\">quem</i>", "<i class=\"la\">quae</i>"], bon: 0, expl: "Antécédent masculin singulier ; sujet de <i class=\"la\">clamat</i> : nominatif." },
          { q: "<i class=\"la\">Femina, … cantat, laeta est.</i> La femme qui chante est joyeuse.", choix: ["<i class=\"la\">quae</i>", "<i class=\"la\">quam</i>", "<i class=\"la\">qui</i>"], bon: 0, expl: "Féminin singulier, sujet de <i class=\"la\">cantat</i>." },
          { q: "<i class=\"la\">Urbs, … vides, Roma est.</i> La ville que tu vois est Rome.", choix: ["<i class=\"la\">quam</i>", "<i class=\"la\">quae</i>", "<i class=\"la\">quod</i>"], bon: 0, expl: "Féminin singulier, COD de <i class=\"la\">vides</i> : accusatif." },
          { q: "<i class=\"la\">Donum, … amo, pulchrum est.</i> Le cadeau que j'aime est beau.", choix: ["<i class=\"la\">quod</i>", "<i class=\"la\">quem</i>", "<i class=\"la\">quam</i>"], bon: 0, expl: "Neutre singulier, COD de <i class=\"la\">amo</i>." },
          { q: "<i class=\"la\">Pueri, … pater abest, ludunt.</i> Les enfants dont le père est absent jouent.", choix: ["<i class=\"la\">quorum</i>", "<i class=\"la\">cuius</i>", "<i class=\"la\">qui</i>"], bon: 0, expl: "Masculin pluriel, complément du nom <i class=\"la\">pater</i> : génitif pluriel." },
          { q: "<i class=\"la\">Milites, … dux laudat, fortes sunt.</i> Les soldats que le chef loue sont courageux.", choix: ["<i class=\"la\">quos</i>", "<i class=\"la\">qui</i>", "<i class=\"la\">quibus</i>"], bon: 0, expl: "Masculin pluriel, COD de <i class=\"la\">laudat</i>." }
        ] },
      { t: "quiz", titre: "Cas et fonction du relatif", intro: "Pour chaque relatif en gras, trouve son cas et sa fonction dans la relative.",
        questions: [
          { q: "<i class=\"la\">Femina, <b>quae</b> cantat, laeta est.</i>", choix: ["Nominatif : sujet de <i class=\"la\">cantat</i>", "Accusatif : COD de <i class=\"la\">cantat</i>", "Génitif : complément du nom"], bon: 0, expl: "La femme, qui chante, est joyeuse." },
          { q: "<i class=\"la\">Urbs, <b>quam</b> vides, Roma est.</i>", choix: ["Accusatif : COD de <i class=\"la\">vides</i>", "Nominatif : sujet de <i class=\"la\">vides</i>", "Ablatif : complément circonstanciel"], bon: 0, expl: "La ville que tu vois est Rome." },
          { q: "<i class=\"la\">Miles, <b>cui</b> dux praemium dat, fortis est.</i>", choix: ["Datif : COI de <i class=\"la\">dat</i>", "Génitif : complément du nom <i class=\"la\">dux</i>", "Nominatif : sujet de <i class=\"la\">dat</i>"], bon: 0, expl: "Le soldat à qui le chef donne une récompense." },
          { q: "<i class=\"la\">Pueri, <b>quorum</b> pater abest, ludunt.</i>", choix: ["Génitif : complément du nom <i class=\"la\">pater</i>", "Accusatif : COD de <i class=\"la\">abest</i>", "Datif : COI"], bon: 0, expl: "Les enfants dont le père est absent." },
          { q: "<i class=\"la\">Flumen, in <b>quo</b> navigamus, latum est.</i>", choix: ["Ablatif : complément de lieu, après <i class=\"la\">in</i>", "Accusatif : COD de <i class=\"la\">navigamus</i>", "Datif : COI"], bon: 0, expl: "Le fleuve sur lequel nous naviguons est large." }
        ] },
      { t: "version", titre: "Traduire des relatives",
        vocab: ["accepi : j'ai reçu (parfait de accipio)", "attentus, a, um : attentif", "canis, is, m : le chien", "carus, a, um : cher", "curro, is, ere, cucurri, cursum : courir", "epistula, ae, f : la lettre", "hortus, i, m : le jardin", "iter facere : faire route, voyager", "libertas, atis, f : la liberté", "narro, as, are, avi, atum : raconter", "procul : loin", "regnum, i, n : le royaume", "scripsisti : tu as écrit (parfait de scribo)", "vastus, a, um : vaste"],
        phrases: [
          { la: "puella quam amas", fr: "la jeune fille que tu aimes" },
          { la: "templum quod magnum est", fr: "le temple qui est grand" },
          { la: "civibus quibus libertas cara est", fr: "aux citoyens à qui la liberté est chère", aide: "<i class=\"la\">civibus</i> : datif ou ablatif pluriel." },
          { la: "Canis, qui in horto currit, meus est.", fr: "Le chien qui court dans le jardin est à moi." },
          { la: "Epistulam, quam scripsisti, accepi.", fr: "J'ai reçu la lettre que tu as écrite." },
          { la: "Rex, cuius regnum vastum erat, a populo amabatur.", fr: "Le roi, dont le royaume était vaste, était aimé du peuple." },
          { la: "Discipuli, quibus magister fabulam narrat, attenti sunt.", fr: "Les élèves à qui le maître raconte une histoire sont attentifs." },
          { la: "Oppidum, ad quod iter facimus, procul abest.", fr: "La ville vers laquelle nous faisons route est loin." }
        ] },
      { t: "version", titre: "Version : l'exploit d'Horatius Coclès", intro: "En 508 av. J.-C., les Étrusques attaquent Rome. Un seul pont de bois, le pont Sublicius, leur permettrait de franchir le Tibre. Les formes au parfait (<i class=\"la\">cucurrit, pugnavit…</i>) se traduisent par un passé simple ; elles seront étudiées au chapitre suivant.",
        vocab: ["afficio, is, ere, affeci, affectum : frapper, affecter", "cum… fractus esset : alors que… était brisé", "desiluit : il sauta (parfait de desilio)", "ei : à lui, lui (datif)", "eius : de lui, son", "Etrusci, orum, m pl : les Étrusques", "flumen, inis, n : le fleuve", "gratus, a, um : reconnaissant", "hostis, is, m : l'ennemi", "multitudo, inis, f : la foule", "oppugno, as, are, avi, atum : attaquer", "paene : presque", "pons, pontis, m : le pont", "post tergum : derrière le dos", "rescindo, is, ere, rescidi, rescissum : couper", "servaverat : il avait sauvé", "solus, a, um : seul", "sui, orum, m pl : les siens", "terror, oris, m : la terreur", "Tiberis, is, m : le Tibre (accusatif Tiberim)", "tranavit : il traversa à la nage", "transire : traverser", "unicus, a, um : unique", "virtus, utis, f : le courage", "voco, as, are, avi, atum : appeler", "volebant : ils voulaient"],
        phrases: [
          { la: "Horatius Cocles vir Romanus magnae virtutis erat.", fr: "Horatius Coclès était un Romain d'un grand courage.", aide: "<i class=\"la\">magnae virtutis</i> : génitif de qualité." },
          { la: "Hostes, qui Etrusci vocabantur, Romam oppugnabant.", fr: "Les ennemis, qu'on appelait Étrusques, attaquaient Rome." },
          { la: "Etrusci flumen Tiberim transire volebant per pontem Sublicium, qui unicus erat.", fr: "Les Étrusques voulaient traverser le Tibre par le pont Sublicius, qui était le seul pont." },
          { la: "Horatius, qui periculum videbat, ad pontem cucurrit.", fr: "Horatius, qui voyait le danger, courut au pont." },
          { la: "Solus contra multitudinem hostium, quos terrore afficiebat, pugnavit.", fr: "Seul contre la foule des ennemis, qu'il frappait de terreur, il combattit." },
          { la: "Romani post tergum eius pontem rescindebant.", fr: "Derrière lui, les Romains coupaient le pont." },
          { la: "Horatius, cum pons paene fractus esset, in Tiberim desiluit et ad suos tranavit.", fr: "Horatius, alors que le pont était presque brisé, sauta dans le Tibre et rejoignit les siens à la nage." },
          { la: "Urbs, quam servaverat, ei grata fuit.", fr: "La ville, qu'il avait sauvée, lui fut reconnaissante." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Le relatif prend le <strong>genre et le nombre de l'antécédent</strong>.</li><li>Son <strong>cas</strong> vient de sa <strong>fonction dans la relative</strong>.</li>
<li>Méthode : 1. je repère le relatif et son verbe ; 2. je cherche l'antécédent ; 3. je traduis la relative à part ; 4. je l'insère dans la principale.</li></ul>${T_RELATIF}` }
    ]
  },
  {
    id: "c11", num: 11, titre: "Les temps du parfait à l'actif", resume: "Parfait, plus-que-parfait et futur antérieur, sur les traces d'Hannibal",
    etapes: [
      { t: "lecon", titre: "Le radical du parfait",
        texte: `<p>Le parfait, le plus-que-parfait et le futur antérieur forment le système du <strong>perfectum</strong>. Tous trois se construisent sur le <strong>radical du parfait</strong>.</p>
<p>Ce radical se lit dans le <strong>4e temps primitif</strong> : on retire le <i class="la">-i</i> final.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Temps primitifs</th><th>Radical du parfait</th></tr></thead><tbody>
<tr><td><i class="la">amo, as, are, <b>amav</b>i, atum</i></td><th><i class="la">amav-</i></th></tr>
<tr><td><i class="la">moneo, es, ere, <b>monu</b>i, monitum</i></td><th><i class="la">monu-</i></th></tr>
<tr><td><i class="la">lego, is, ere, <b>leg</b>i, lectum</i></td><th><i class="la">leg-</i></th></tr>
<tr><td><i class="la">capio, is, ere, <b>cep</b>i, captum</i></td><th><i class="la">cep-</i></th></tr>
<tr><td><i class="la">audio, is, ire, <b>audiv</b>i, auditum</i></td><th><i class="la">audiv-</i></th></tr></tbody></table></div>
<aside class="retenir"><strong>Bonne nouvelle.</strong> Une fois le radical connu, les terminaisons sont les mêmes pour tous les verbes, quelle que soit leur conjugaison. C'est pourquoi il faut apprendre les temps primitifs.</aside>` },
      { t: "saisie", titre: "Trouver le radical du parfait", intro: "Écris le radical du parfait de chaque verbe.",
        items: [
          { q: "<i class=\"la\">duco, is, ere, duxi, ductum</i> : conduire", r: "dux" }, { q: "<i class=\"la\">video, es, ere, vidi, visum</i> : voir", r: "vid" },
          { q: "<i class=\"la\">vinco, is, ere, vici, victum</i> : vaincre", r: "vic" }, { q: "<i class=\"la\">mitto, is, ere, misi, missum</i> : envoyer", r: "mis" },
          { q: "<i class=\"la\">do, das, dare, dedi, datum</i> : donner", r: "ded" }, { q: "<i class=\"la\">habeo, es, ere, habui, habitum</i> : avoir", r: "habu" },
          { q: "<i class=\"la\">sum, es, esse, fui</i> : être", r: "fu" }
        ] },
      { t: "lecon", titre: "Le parfait de l'indicatif",
        texte: `<p>Le parfait exprime une action <strong>achevée</strong> dans le passé. On le traduit par le passé simple (« j'aimai ») ou le passé composé (« j'ai aimé »).</p>
<aside class="retenir"><strong>Formation.</strong> Radical du parfait + <b class="des">-i, -isti, -it, -imus, -istis, -erunt</b>.</aside>
${tConj("parfait")}
<aside class="attention"><strong>Présent ou parfait ?</strong> Pour quelques verbes, deux formes s'écrivent de la même façon : <i class="la">legit</i> (il lit, il a lu), <i class="la">venit</i> (il vient, il est venu). Le contexte tranche.</aside>` },
      { t: "saisie", titre: "Conjuguer au parfait",
        items: [
          { q: "<i class=\"la\">duco</i> (parfait <i class=\"la\">duxi</i>) : 2e personne du singulier (tu as conduit)", r: "duxisti" },
          { q: "<i class=\"la\">video</i> (<i class=\"la\">vidi</i>) : 2e personne du pluriel (vous avez vu)", r: "vidistis" },
          { q: "<i class=\"la\">do</i> (<i class=\"la\">dedi</i>) : 3e personne du pluriel (ils ont donné)", r: "dederunt" },
          { q: "<i class=\"la\">habeo</i> (<i class=\"la\">habui</i>) : 1re personne du pluriel (nous avons eu)", r: "habuimus" },
          { q: "<i class=\"la\">vinco</i> (<i class=\"la\">vici</i>) : 3e personne du singulier (il a vaincu)", r: "vicit" },
          { q: "<i class=\"la\">sum</i> (<i class=\"la\">fui</i>) : 3e personne du pluriel (ils ont été)", r: "fuerunt" }
        ] },
      { t: "lecon", titre: "Le plus-que-parfait et le futur antérieur",
        texte: `<p>Le <strong>plus-que-parfait</strong> exprime une action achevée <strong>avant une autre action passée</strong> : « j'avais aimé ».</p>
<aside class="retenir"><strong>Formation.</strong> Radical du parfait + <b class="des">-era-</b> + <i class="la">-m, -s, -t, -mus, -tis, -nt</i>.</aside>
${tConj("pqp")}
<p>Le <strong>futur antérieur</strong> exprime une action qui sera achevée <strong>avant une autre action future</strong> : « j'aurai aimé ».</p>
<aside class="retenir"><strong>Formation.</strong> Radical du parfait + <b class="des">-ero, -eris, -erit, -erimus, -eritis, -erint</b>.</aside>
${tConj("futant")}
<aside class="attention"><strong>Ne pas confondre</strong> <i class="la">amav<b class="des">erunt</b></i> (parfait, ils ont aimé), <i class="la">amav<b class="des">erant</b></i> (plus-que-parfait, ils avaient aimé) et <i class="la">amav<b class="des">erint</b></i> (futur antérieur, ils auront aimé).</aside>` },
      { t: "saisie", titre: "Conjuguer au plus-que-parfait et au futur antérieur",
        items: [
          { q: "<i class=\"la\">vinco</i> (<i class=\"la\">vici</i>) : plus-que-parfait, 3e personne du pluriel (ils avaient vaincu)", r: "vicerant" },
          { q: "<i class=\"la\">capio</i> (<i class=\"la\">cepi</i>) : plus-que-parfait, 1re personne du pluriel (nous avions pris)", r: "ceperamus" },
          { q: "<i class=\"la\">pugno</i> (<i class=\"la\">pugnavi</i>) : plus-que-parfait, 2e personne du singulier (tu avais combattu)", r: "pugnaveras" },
          { q: "<i class=\"la\">venio</i> (<i class=\"la\">veni</i>) : futur antérieur, 1re personne du singulier (je serai venu)", r: "venero" },
          { q: "<i class=\"la\">audio</i> (<i class=\"la\">audivi</i>) : futur antérieur, 2e personne du pluriel (vous aurez entendu)", r: "audiveritis" },
          { q: "<i class=\"la\">sum</i> (<i class=\"la\">fui</i>) : futur antérieur, 3e personne du singulier (il aura été)", r: "fuerit" }
        ] },
      { t: "tri", titre: "Quel temps ?", q: "Classe chaque forme.",
        categories: ["Parfait", "Plus-que-parfait", "Futur antérieur"],
        items: [
          { txt: "<i class=\"la\">vicerant</i>", cat: "Plus-que-parfait", expl: "ils avaient vaincu" }, { txt: "<i class=\"la\">duxisti</i>", cat: "Parfait", expl: "tu as conduit" },
          { txt: "<i class=\"la\">fuerit</i>", cat: "Futur antérieur", expl: "il aura été" }, { txt: "<i class=\"la\">ceperamus</i>", cat: "Plus-que-parfait", expl: "nous avions pris" },
          { txt: "<i class=\"la\">vidistis</i>", cat: "Parfait", expl: "vous avez vu" }, { txt: "<i class=\"la\">venero</i>", cat: "Futur antérieur", expl: "je serai venu" },
          { txt: "<i class=\"la\">dederunt</i>", cat: "Parfait", expl: "ils ont donné" }, { txt: "<i class=\"la\">pugnaveras</i>", cat: "Plus-que-parfait", expl: "tu avais combattu" },
          { txt: "<i class=\"la\">habuimus</i>", cat: "Parfait", expl: "nous avons eu" }, { txt: "<i class=\"la\">audiveritis</i>", cat: "Futur antérieur", expl: "vous aurez entendu" }
        ] },
      { t: "quiz", titre: "Traduire les formes",
        questions: [
          { q: "<i class=\"la\">vicerant</i>", choix: ["ils avaient vaincu", "ils ont vaincu", "ils auront vaincu"], bon: 0, expl: "<i class=\"la\">-era-</i> : plus-que-parfait." },
          { q: "<i class=\"la\">duxisti</i>", choix: ["tu as conduit", "tu avais conduit", "vous avez conduit"], bon: 0, expl: "<i class=\"la\">-isti</i> : parfait, 2e personne du singulier." },
          { q: "<i class=\"la\">fuerit</i>", choix: ["il aura été", "il avait été", "il a été"], bon: 0, expl: "<i class=\"la\">-erit</i> : futur antérieur." },
          { q: "<i class=\"la\">venero</i>", choix: ["je serai venu", "j'étais venu", "je viendrai"], bon: 0, expl: "<i class=\"la\">-ero</i> : futur antérieur, 1re personne du singulier." },
          { q: "<i class=\"la\">dederunt</i>", choix: ["ils ont donné", "ils avaient donné", "ils donneront"], bon: 0, expl: "<i class=\"la\">-erunt</i> : parfait, 3e personne du pluriel." },
          { q: "<i class=\"la\">Si viceris, magnam gloriam habebis.</i>", choix: ["Si tu es vainqueur, tu auras une grande gloire.", "Si tu avais vaincu, tu aurais une grande gloire.", "Si tu vaincs, tu as une grande gloire."], bon: 0, expl: "Mot à mot : « si tu auras vaincu ». Le latin marque l'antériorité par le futur antérieur ; le français emploie le présent ou le passé composé." }
        ] },
      { t: "version", titre: "Phrases : la deuxième guerre punique",
        vocab: ["celeriter : rapidement", "colligo, is, ere, collegi, collectum : rassembler", "copiae, arum, f pl : les troupes", "defendo, is, ere, defendi, defensum : défendre", "deleo, es, ere, delevi, deletum : détruire", "do, das, dare, dedi, datum : donner", "duco, is, ere, duxi, ductum : conduire", "dux, ducis, m : le chef", "elephantus, i, m : l'éléphant", "exercitus, us, m : l'armée", "fortis, e : courageux", "legio, onis, f : la légion", "miles, militis, m : le soldat", "mons, montis, m : la montagne", "signum, i, n : le signal", "venio, is, ire, veni, ventum : venir", "vinco, is, ere, vici, victum : vaincre"],
        phrases: [
          { la: "Hannibal magnas copias in Italiam duxit.", fr: "Hannibal conduisit de grandes troupes en Italie." },
          { la: "Milites, qui urbem defenderant, fortes fuerunt.", fr: "Les soldats qui avaient défendu la ville furent courageux.", aide: "<i class=\"la\">defenderant</i> : plus-que-parfait, action antérieure." },
          { la: "Post bellum Romani Carthaginem deleverunt.", fr: "Après la guerre, les Romains détruisirent Carthage." },
          { la: "Dux, quem vidistis, signum dederat.", fr: "Le chef que vous avez vu avait donné le signal." },
          { la: "Scipio in Africa exercitum celeriter collegit.", fr: "Scipion rassembla rapidement une armée en Afrique." },
          { la: "Hannibal elephantos per montes duxerat.", fr: "Hannibal avait conduit des éléphants à travers les montagnes." },
          { la: "Legiones, quae venerant, hostes vicerunt.", fr: "Les légions qui étaient venues vainquirent les ennemis." },
          { la: "Milites nostri fortiter pugnaverunt.", fr: "Nos soldats combattirent courageusement.", aide: "<i class=\"la\">fortiter</i> : courageusement." }
        ] },
      { t: "version", titre: "Version : Hannibal ad portas", intro: "« Hannibal est aux portes » : c'est le cri d'effroi des Romains pendant la deuxième guerre punique (218-201 av. J.-C.).",
        vocab: ["aeternus, a, um : éternel", "Alpes, ium, f pl : les Alpes", "Cannensis, e : de Cannes (en Apulie)", "capio, is, ere, cepi, captum : prendre", "Carthaginienses, ium, m pl : les Carthaginois", "descendo, is, ere, descendi, descensum : descendre", "Hispania, ae, f : l'Espagne", "iuro, as, are, avi, atum : jurer", "obtineo, es, ere, obtinui, obtentum : obtenir", "odium, ii, n : la haine", "pugna, ae, f : la bataille", "supero, as, are, avi, atum : vaincre", "tandem : enfin", "transeo, is, ire, transii, transitum : traverser"],
        phrases: [
          { la: "Hannibal, dux Carthaginiensium, odium Romanorum habuit.", fr: "Hannibal, chef des Carthaginois, éprouva de la haine pour les Romains.", note: "<i class=\"la\">odium Romanorum</i> : mot à mot « la haine des Romains », c'est-à-dire la haine qu'il a pour eux." },
          { la: "Puer aeternum bellum iuraverat.", fr: "Enfant, il avait juré une guerre éternelle.", aide: "<i class=\"la\">puer</i> est apposé au sujet : « quand il était enfant »." },
          { la: "Ex Hispania cum multis militibus et elephantis venit.", fr: "Il vint d'Espagne avec de nombreux soldats et des éléphants." },
          { la: "Alpes transiit et in Italiam descendit.", fr: "Il traversa les Alpes et descendit en Italie." },
          { la: "Romanos in pugna Cannensi vicit, sed Romam non cepit.", fr: "Il vainquit les Romains à la bataille de Cannes, mais il ne prit pas Rome." },
          { la: "Tandem Scipio Hannibalem in Africa superavit et gloriam obtinuit.", fr: "Enfin Scipion vainquit Hannibal en Afrique et obtint la gloire." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<p>Radical du parfait = 4e temps primitif sans <i class="la">-i</i> (<i class="la">amav-, monu-, leg-, cep-, audiv-</i>).</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Temps</th><th>Terminaisons</th><th>Traduction</th></tr></thead><tbody>
<tr><th>Parfait</th><td><i class="la">-i, -isti, -it, -imus, -istis, -erunt</i></td><td>j'aimai, j'ai aimé</td></tr>
<tr><th>Plus-que-parfait</th><td><i class="la">-eram, -eras, -erat, -eramus, -eratis, -erant</i></td><td>j'avais aimé</td></tr>
<tr><th>Futur antérieur</th><td><i class="la">-ero, -eris, -erit, -erimus, -eritis, -erint</i></td><td>j'aurai aimé</td></tr></tbody></table></div>` }
    ]
  },
  {
    id: "c12", num: 12, titre: "Les déclinaisons 4 et 5", resume: "Manus, cornu et res : les deux dernières déclinaisons, puis la révision des cinq",
    etapes: [
      { t: "lecon", titre: "La quatrième déclinaison",
        texte: `<p>Moins fréquente que les trois premières, la quatrième déclinaison se reconnaît à son <strong>génitif singulier en <i class="la">-us</i></strong>. Le nominatif est en <i class="la">-us</i> (masculins et féminins) ou en <i class="la">-u</i> (neutres).</p>
<ul><li><i class="la">manus, us, f</i> : la main ; <i class="la">exercitus, us, m</i> : l'armée ; <i class="la">cornu, us, n</i> : la corne ; <i class="la">genu, us, n</i> : le genou.</li></ul>
${tDecl("manus")}${tDecl("cornu")}
<p>La plupart des noms en <i class="la">-us</i> sont masculins (<i class="la">exercitus, impetus, metus, portus</i>). <i class="la">manus</i> et <i class="la">domus</i> (la maison) sont féminins.</p>
<aside class="attention"><strong>Ne pas confondre</strong> avec la deuxième déclinaison : <i class="la">dominus, <b class="des">i</b></i> mais <i class="la">exercitus, <b class="des">us</b></i>. Seul le génitif permet de trancher.</aside>` },
      { t: "tableau", titre: "Décliner exercitus", intro: "Sur le modèle de <i class=\"la\">manus</i>.", modele: "manus", rad: "exercit", mot: "exercitus, us, m", sens: "l'armée" },
      { t: "analyse", titre: "Reconnaître les cas (4e déclinaison)",
        items: [
          { forme: "cornua", mot: "cornu, us, n", bons: ["Np", "Vp", "Ap"] }, { forme: "manui", mot: "manus, us, f", bons: ["Ds"] },
          { forme: "manuum", mot: "manus, us, f", bons: ["Gp"] }, { forme: "manibus", mot: "manus, us, f", bons: ["Dp", "Bp"] },
          { forme: "manus", mot: "manus, us, f", bons: ["Ns", "Vs", "Gs", "Np", "Vp", "Ap"], expl: "Six possibilités : la forme la plus ambiguë de la déclinaison." }
        ] },
      { t: "saisie", titre: "Mettre au cas demandé (4e déclinaison)",
        items: [
          { q: "<i class=\"la\">exercitus, us, m</i> (l'armée) : accusatif singulier", r: "exercitum" }, { q: "<i class=\"la\">genu, us, n</i> (le genou) : génitif pluriel", r: "genuum" },
          { q: "<i class=\"la\">impetus, us, m</i> (l'assaut) : datif singulier", r: "impetui" }, { q: "<i class=\"la\">portus, us, m</i> (le port) : nominatif pluriel", r: "portus" },
          { q: "<i class=\"la\">gelu, us, n</i> (le gel) : ablatif singulier", r: "gelu" }, { q: "<i class=\"la\">fructus, us, m</i> (le fruit) : ablatif pluriel", r: "fructibus" }
        ] },
      { t: "lecon", titre: "La cinquième déclinaison",
        texte: `<p>La cinquième déclinaison compte peu de noms, mais deux d'entre eux sont partout : <i class="la">res</i> et <i class="la">dies</i>. On la reconnaît à son nominatif en <i class="la">-es</i> et à son <strong>génitif singulier en <i class="la">-ei</i></strong>.</p>
${tDecl("res")}
<ul><li><i class="la">res, rei, f</i> prend de nombreux sens selon le contexte : la chose, l'affaire, l'événement, la situation. <i class="la">res publica</i> : la chose publique, l'État, la République.</li>
<li><i class="la">dies, diei, m</i> : le jour ; <i class="la">fides, fidei, f</i> : la confiance, la loyauté ; <i class="la">spes, spei, f</i> : l'espoir ; <i class="la">acies, aciei, f</i> : la ligne de bataille.</li>
<li>Presque tous ces noms sont féminins. Seuls <i class="la">res</i> et <i class="la">dies</i> ont un pluriel complet.</li></ul>` },
      { t: "tableau", titre: "Décliner dies", intro: "Sur le modèle de <i class=\"la\">res</i>. Le radical est <i class=\"la\">di-</i>.", modele: "res", rad: "di", mot: "dies, diei, m", sens: "le jour" },
      { t: "analyse", titre: "Reconnaître les cas (5e déclinaison)",
        items: [
          { forme: "rerum", mot: "res, rei, f", bons: ["Gp"] }, { forme: "diei", mot: "dies, diei, m", bons: ["Gs", "Ds"] },
          { forme: "diebus", mot: "dies, diei, m", bons: ["Dp", "Bp"] }, { forme: "re", mot: "res, rei, f", bons: ["Bs"] },
          { forme: "res", mot: "res, rei, f", bons: ["Ns", "Vs", "Np", "Vp", "Ap"] }
        ] },
      { t: "saisie", titre: "Mettre au cas demandé (5e déclinaison)",
        items: [
          { q: "<i class=\"la\">fides, fidei, f</i> (la confiance) : accusatif singulier", r: "fidem" }, { q: "<i class=\"la\">species, speciei, f</i> (l'aspect) : génitif singulier", r: "speciei" },
          { q: "<i class=\"la\">dies, diei, m</i> (le jour) : ablatif pluriel", r: "diebus" }, { q: "<i class=\"la\">res, rei, f</i> (l'affaire) : datif singulier", r: "rei" },
          { q: "<i class=\"la\">acies, aciei, f</i> (la ligne de bataille) : nominatif pluriel", r: "acies" }, { q: "<i class=\"la\">spes, spei, f</i> (l'espoir) : ablatif singulier", r: "spe" }
        ] },
      { t: "lecon", titre: "Les cinq déclinaisons d'un coup d'œil",
        texte: `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Déclinaison</th><th>Masculin ou féminin</th><th>Neutre</th><th>Génitif singulier</th></tr></thead><tbody>
<tr><th>1re</th><td><i class="la">rosa, ae, f</i></td><td>(pas de neutre)</td><td><b class="des">-ae</b></td></tr>
<tr><th>2e</th><td><i class="la">dominus, i, m</i></td><td><i class="la">templum, i, n</i></td><td><b class="des">-i</b></td></tr>
<tr><th>3e imparisyllabique</th><td><i class="la">consul, consulis, m</i></td><td><i class="la">corpus, corporis, n</i></td><td><b class="des">-is</b></td></tr>
<tr><th>3e parisyllabique</th><td><i class="la">civis, civis, m</i></td><td><i class="la">mare, maris, n</i></td><td><b class="des">-is</b></td></tr>
<tr><th>4e</th><td><i class="la">manus, us, f</i></td><td><i class="la">cornu, us, n</i></td><td><b class="des">-us</b></td></tr>
<tr><th>5e</th><td><i class="la">res, rei, f</i></td><td>(pas de neutre)</td><td><b class="des">-ei</b></td></tr></tbody></table></div>
<aside class="retenir"><strong>Le réflexe.</strong> Devant un nom inconnu, on ne regarde pas le nominatif : on regarde le génitif.</aside>` },
      { t: "tri", titre: "Cinq déclinaisons : niveau recrue", q: "Indique la déclinaison de chaque nom.",
        categories: ["1re", "2e", "3e", "4e", "5e"],
        items: [
          { txt: "<i class=\"la\">mensa, mensae, f</i> : la table", cat: "1re" }, { txt: "<i class=\"la\">fructus, fructus, m</i> : le fruit", cat: "4e" },
          { txt: "<i class=\"la\">puer, pueri, m</i> : l'enfant", cat: "2e" }, { txt: "<i class=\"la\">facies, faciei, f</i> : le visage", cat: "5e" },
          { txt: "<i class=\"la\">miles, militis, m</i> : le soldat", cat: "3e" }, { txt: "<i class=\"la\">cornu, cornus, n</i> : la corne", cat: "4e" },
          { txt: "<i class=\"la\">fides, fidei, f</i> : la confiance", cat: "5e" }, { txt: "<i class=\"la\">nomen, nominis, n</i> : le nom", cat: "3e" },
          { txt: "<i class=\"la\">equus, equi, m</i> : le cheval", cat: "2e" }, { txt: "<i class=\"la\">pax, pacis, f</i> : la paix", cat: "3e" }
        ] },
      { t: "tri", titre: "Cinq déclinaisons : niveau expert", q: "Ici les nominatifs se ressemblent. Garde ton sang-froid : seul le génitif compte.",
        categories: ["2e", "3e", "4e", "5e"],
        items: [
          { txt: "<i class=\"la\">corpus, corporis, n</i> : le corps", cat: "3e" }, { txt: "<i class=\"la\">servus, servi, m</i> : l'esclave", cat: "2e" },
          { txt: "<i class=\"la\">civis, civis, m</i> : le citoyen", cat: "3e" }, { txt: "<i class=\"la\">genu, genus, n</i> : le genou", cat: "4e" },
          { txt: "<i class=\"la\">virtus, virtutis, f</i> : le courage", cat: "3e" }, { txt: "<i class=\"la\">dies, diei, m</i> : le jour", cat: "5e" },
          { txt: "<i class=\"la\">exercitus, exercitus, m</i> : l'armée", cat: "4e" }, { txt: "<i class=\"la\">opus, operis, n</i> : l'œuvre", cat: "3e" },
          { txt: "<i class=\"la\">spiritus, spiritus, m</i> : le souffle", cat: "4e" }, { txt: "<i class=\"la\">vulgus, vulgi, n</i> : la foule", cat: "2e" }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>4e déclinaison : génitif en <i class="la">-us</i> ; datif singulier en <i class="la">-ui</i>, génitif pluriel en <i class="la">-uum</i>, <i class="la">-ibus</i>.</li>
<li>5e déclinaison : génitif en <i class="la">-ei</i> ; génitif pluriel en <i class="la">-erum</i>, <i class="la">-ebus</i>.</li></ul>
${tDecl("manus")}${tDecl("cornu")}${tDecl("res")}` }
    ]
  }]
}];

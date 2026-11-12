/* CONTENU — Partie « Traduisons le livre III des Tristes d'Ovide » (Terminale, spécialité).
   Une section d'ouverture (c28), puis une section par élégie (c29 à c42), étiquetées « III, 1 » à « III, 14 ».
   Texte latin : celui de l'édition utilisée en classe (graphie u pour v). Les traductions sont propres au site.
   Dans une traduction guidée, « / » marque la fin d'un vers ; « cas » donne le cas de chaque mot
   (N V A G D B, I = invariable, X = verbe) ; « construction » remet les mots dans l'ordre de la traduction. */
const K = (q, clic, marque, expl, indice) => ({ q, clic, marque, expl, indice });
const Q = (q, choix, expl) => ({ q, choix, bon: 0, expl });
const la = s => `<i class="la">${s}</i>`;

var PARTIE_TRISTES = [{
  id: "p7", titre: "Traduisons le livre III des Tristes d'Ovide", sous: "Terminale, spécialité. Une section par élégie : le résumé du poème, puis des distiques en traduction guidée, mot à mot.",
  chapitres: [
  {
    id: "c28", borne: "Intro", genre: "Tristes,", titre: "Ovide en exil : entrer dans le livre III", resume: "Le contexte, le distique élégiaque et les habitudes de la langue poétique",
    etapes: [
      { t: "lecon", titre: "Un poète relégué au bout du monde",
        texte: `<p>En <strong>8 ap. J.-C.</strong>, Ovide a cinquante ans. Il est le poète le plus célèbre de Rome : on lui doit <em>Les Amours</em>, <em>L'Art d'aimer</em>, et il achève <em>Les Métamorphoses</em>. Un édit d'<strong>Auguste</strong> le relègue brutalement à <strong>Tomes</strong> (<i class="la">Tomis</i>), sur la mer Noire, aux confins de l'Empire.</p>
<p>Ovide donne lui-même deux causes à sa disgrâce : <i class="la">carmen et error</i>, « un poème et une erreur ». Le poème est <em>L'Art d'aimer</em>, jugé immoral. L'erreur, il ne la dira jamais : il a « vu » quelque chose qu'il n'aurait pas dû voir.</p>
<p>De Tomes, il envoie à Rome cinq livres de <em>Tristes</em> (<i class="la">Tristia</i>), puis les <em>Pontiques</em>. Il mourra en exil, vers 17 ou 18 ap. J.-C., sans avoir été rappelé.</p>
<aside class="retenir"><strong>Le livre III</strong> est le premier entièrement composé à Tomes. Ses quatorze élégies sont des lettres en vers : à sa femme, à des amis qu'il ne nomme pas pour ne pas les compromettre, à un ennemi, à une jeune poétesse. Le livre lui-même prend la parole dans la première.</aside>` },
      { t: "lecon", titre: "Lire des vers latins",
        texte: `<p><strong>Le distique élégiaque.</strong> Les <em>Tristes</em> sont écrits en distiques : un vers long (hexamètre) suivi d'un vers plus court (pentamètre). Chaque distique forme en général une unité de sens : c'est par distiques que nous traduirons.</p>
<p><strong>Cinq habitudes de la langue poétique</strong> à connaître avant de commencer :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Habitude</th><th>Exemple</th><th>Comment lire</th></tr></thead><tbody>
<tr><th>Les mots qui vont ensemble sont séparés</th><td><i class="la">da <b>placidam</b> fesso, lector amice, <b>manum</b></i></td><td>L'adjectif et son nom se répondent souvent du milieu à la fin du vers. On les réunit grâce à l'accord.</td></tr>
<tr><th>« Nous » pour « je »</th><td><i class="la">in fatis <b>nostris</b></i></td><td>Pluriel poétique : « dans mon destin ».</td></tr>
<tr><th>Parfait en <i class="la">-ere</i></th><td><i class="la">fug<b>ere</b>, ded<b>ere</b></i></td><td>= <i class="la">fugerunt, dederunt</i>. Ne pas confondre avec un infinitif.</td></tr>
<tr><th>Formes contractées</th><td><i class="la">amasti</i></td><td>= <i class="la">amavisti</i>.</td></tr>
<tr><th>Verbe <i class="la">sum</i> sous-entendu</th><td><i class="la">locus dictus</i></td><td>= <i class="la">dictus est</i>.</td></tr></tbody></table></div>
<aside class="attention"><strong>La graphie de l'édition.</strong> Le texte étudié en classe écrit <i class="la">u</i> pour <i class="la">v</i> : <i class="la">uenio, uersus, uiuere</i>, et <i class="la">V</i> en majuscule (<i class="la">Vrbe</i>). Dans le dictionnaire, cherche <i class="la">venio, versus, vivere</i>. Le vocabulaire donné ici suit le dictionnaire.</aside>
<p>Le <strong>code couleur</strong> des cas t'accompagne dans toutes les traductions guidées, et la ligne « Ordre pour traduire » remet les mots dans l'ordre du français.</p>
<p class="legende-cas"><span class="cas c-N">nominatif</span><span class="cas c-V">vocatif</span><span class="cas c-A">accusatif</span><span class="cas c-G">génitif</span><span class="cas c-D">datif</span><span class="cas c-B">ablatif</span><span class="cas c-I">invariable</span><span class="cas c-X">verbe</span></p>` },
      { t: "quiz", titre: "Avant de commencer",
        questions: [
          Q("Où Ovide est-il relégué en 8 ap. J.-C. ?", ["À Tomes, sur la mer Noire", "À Athènes", "En Sicile"], "Aujourd'hui Constanța, en Roumanie."),
          Q("<i class=\"la\">carmen et error</i> : quelles sont les deux causes que le poète donne à son exil ?", ["Un poème et une erreur", "Un crime et un complot", "Une lettre et un mensonge"], "Le poème est <em>L'Art d'aimer</em> ; l'erreur reste secrète."),
          Q("Dans <i class=\"la\">cuncti metu fugere</i>, <i class=\"la\">fugere</i> est…", ["un parfait, 3e personne du pluriel : « ils ont fui »", "un infinitif présent : « fuir »", "un impératif"], "<i class=\"la\">fugere</i> = <i class=\"la\">fugerunt</i>. L'infinitif s'écrit de la même façon : seul le sens tranche."),
          Q("Dans <i class=\"la\">da placidam fesso, lector amice, manum</i>, avec quel nom s'accorde <i class=\"la\">placidam</i> ?", ["<i class=\"la\">manum</i>", "<i class=\"la\">lector</i>", "<i class=\"la\">fesso</i>"], "Accusatif féminin singulier tous les deux : « une main bienveillante »."),
          Q("Ton édition porte <i class=\"la\">uiuere</i>. Sous quelle entrée cherches-tu ce verbe ?", ["<i class=\"la\">vivo</i>", "<i class=\"la\">uiuo</i>", "<i class=\"la\">vivere</i>"], "1re personne du présent, avec <i class=\"la\">v</i>.")
        ] }
    ]
  },
  {
    id: "c29", borne: "III, 1", titre: "Élégie 1 : le livre arrive à Rome", resume: "Le livre prend la parole et demande l'hospitalité au lecteur (v. 1-4 et 9-10)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>82 vers.</strong> C'est le <strong>livre lui-même</strong> qui parle. Envoyé par son maître, il entre dans Rome en étranger timide et demande au lecteur de le guider.</p>
<ul><li>Il s'excuse de son aspect : pas d'ornements, des ratures qui sont les larmes du poète, un latin peut-être devenu barbare.</li>
<li>Un passant lui fait traverser la ville : les forums, la Voie sacrée, le temple de Vesta, le Palatin, la maison d'Auguste aux lauriers.</li>
<li>Il monte au temple d'Apollon et à sa bibliothèque : on le chasse. Les autres bibliothèques publiques lui sont fermées aussi.</li>
<li>Il ne lui reste qu'un refuge : les mains des particuliers.</li></ul>
<p><strong>Notre passage</strong> : les quatre premiers vers, où le livre se présente, puis les vers 9-10.</p>` },
      { t: "guide", titre: "Vers 1-2 : « J'entre avec crainte »", cas: "N I A X I N G A X A D V V A",
        vocab: ["amicus, a, um : ami, amical", "do, das, dare, dedi, datum : donner", "exul, exulis, m : l'exilé", "fessus, a, um : épuisé", "lector, oris, m : le lecteur", "liber, libri, m : le livre", "manus, us, f : la main", "mitto, is, ere, misi, missum : envoyer", "placidus, a, um : bienveillant, apaisant", "timide : avec crainte", "urbs, urbis, f : la ville (ici : Rome)", "venio, is, ire, veni, ventum : venir"],
        la: "Missus in hanc uenio timide liber exulis urbem: / da placidam fesso, lector amice, manum;",
        pas: [
          K("Premier vers : où est le verbe conjugué ?", [3], "verbe", `Verbe : ${la("uenio")}, 1re personne du singulier. Celui qui dit « je » va se nommer.`),
          K("Quel nom au nominatif désigne celui qui parle ?", [5], "sujet", `${la("liber")} : c'est le livre qui parle. Le mot est apposé au sujet « je ».`),
          Q(`Quelle est la fonction de ${la("exulis")} ?`, [`Génitif, complément du nom ${la("liber")} : « le livre d'un exilé »`, "Nominatif, second sujet", `Datif, COI de ${la("uenio")}`], `${la("exulis")} : génitif de ${la("exul")}, complément du nom.`),
          K("Touche les trois mots du complément de lieu. Ils sont séparés.", [1, 2, 7], "complément de lieu", `${la("in hanc… urbem")} : ${la("in")} + accusatif, « dans cette ville ». Le démonstratif et le nom encadrent le vers.`, `La préposition ${la("in")}, puis les deux mots à l'accusatif féminin singulier.`),
          Q(`${la("Missus")} est un participe parfait passif au nominatif. À qui se rapporte-t-il ?`, [`À ${la("liber")} : « envoyé »`, `À ${la("exulis")}`, `À ${la("urbem")}`], `${la("Missus")} : participe apposé à ${la("liber")}.`),
          K("Second vers : où est le verbe ?", [8], "verbe", `${la("da")} : impératif de ${la("do")}, « donne ».`),
          K("À qui le livre s'adresse-t-il ? Touche les deux mots.", [11, 12], "apostrophe", `${la("lector amice")} : vocatif, « ami lecteur ».`),
          K("Touche les deux mots du COD. Ils sont séparés.", [9, 13], "COD", `${la("placidam… manum")} : « une main bienveillante ».`),
          Q(`${la("fesso")} est un datif. Que désigne-t-il ?`, ["Le livre lui-même, épuisé par le voyage", "Le lecteur", "L'exilé"], `${la("fesso")} : adjectif employé comme nom, « à celui qui est épuisé ».`)
        ],
        construction: "Liber exulis, missus, timide uenio in hanc urbem : lector amice, da manum placidam fesso.",
        fr: "Envoyé dans cette ville, moi, le livre d'un exilé, j'y entre avec crainte : tends, ami lecteur, une main bienveillante à qui est à bout de forces." },
      { t: "guide", titre: "Vers 3-4 : « Aucun vers n'enseigne à aimer »", cas: "I X I X D I D N I B B N X X",
        vocab: ["charta, ae, f : la feuille de papyrus, la page", "doceo, es, ere, docui, doctum : enseigner", "forte : par hasard", "neve : et ne… pas", "pudor, oris, m : la honte", "reformido, as, are : redouter", "versus, us, m : le vers"],
        la: "Neue reformida ne sim tibi forte pudori: / nullus in hac charta uersus amare docet.",
        pas: [
          K("Premier vers : touche les deux verbes.", [1, 3], null, `${la("reformida")} : impératif ; ${la("sim")} : subjonctif présent de ${la("sum")}.`),
          Q(`${la("Neue reformida")} : comment traduire ?`, ["« Et ne redoute pas »", "« Et redoute »", "« Ou bien redoute »"], `${la("neue")} + impératif : défense, tournure poétique.`),
          Q(`Après un verbe de crainte, ${la("ne")} + subjonctif signifie…`, ["« que » : « ne redoute pas que je sois… »", "« pour que… ne… pas »", "« si »"], `${la("ne sim")} : « que je sois ».`),
          K("Touche les deux datifs du premier vers.", [4, 6], null, `${la("tibi… pudori")} : double datif. Mot à mot « être à honte pour toi », c'est-à-dire « te faire honte ».`),
          K("Second vers : touche le groupe sujet. Deux mots séparés.", [7, 11], "sujet", `${la("nullus… uersus")} : « aucun vers ».`),
          K("Touche le complément de lieu.", [8, 9, 10], "complément de lieu", `${la("in hac charta")} : « sur cette page ».`),
          Q(`${la("amare docet")} : quelle est la fonction de l'infinitif ?`, [`COD de ${la("docet")} : « enseigne à aimer »`, "Sujet", "Complément de but"], `Allusion à ${la("Ars amatoria")}, le poème qui a perdu Ovide.`)
        ],
        construction: "Neue reformida ne forte tibi pudori sim : nullus uersus in hac charta amare docet.",
        fr: "Et ne redoute pas que je te fasse honte : sur ces pages, aucun vers n'enseigne à aimer." },
      { t: "version", titre: "À toi : vers 9-10",
        vocab: ["carmen, inis, n : le poème, les vers", "convenio, is, ire : s'accorder avec (+ datif)", "inspicio, is, ere : regarder de près", "nisi : sinon, excepté", "porto, as, are : porter", "tempus, oris, n : le moment, les circonstances", "tristis, e : triste"],
        phrases: [
          { la: "Inspice quid portem ! nihil hic nisi triste uidebis,", fr: "Regarde ce que je porte : tu ne verras ici rien que de triste,", aide: `${la("quid portem")} : interrogative indirecte au subjonctif.` },
          { la: "carmine temporibus conueniente suis.", fr: "des vers accordés aux circonstances qui les ont fait naître.", note: `Ablatif absolu : ${la("carmine… conueniente")}, « le poème s'accordant » ; ${la("temporibus suis")} est au datif.` }
        ] }
    ]
  },
  {
    id: "c30", borne: "III, 2", titre: "Élégie 2 : « C'était donc mon destin »", resume: "Le poète délicat face à la Scythie, et le désir de mourir (v. 1-4 et 29-30)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>30 vers.</strong> Ovide s'étonne de son propre sort. Lui, le poète du loisir, peu fait pour l'effort, a supporté la mer et les routes tant que le voyage l'occupait.</p>
<ul><li>Arrivé au terme, il n'a plus que ses larmes : Rome, sa maison, ceux qu'il aime lui reviennent en mémoire.</li>
<li>Il regrette d'avoir échappé à tant de dangers.</li><li>Il supplie les dieux de laisser enfin s'ouvrir pour lui les portes de la mort.</li></ul>
<p><strong>Notre passage</strong> : l'ouverture (v. 1-4) et le cri des vers 29-30.</p>` },
      { t: "guide", titre: "Vers 1-2 : la Scythie", cas: "I X I B A I X B N B N I B X",
        vocab: ["axis, is, m : l'axe du ciel, le pôle", "ergo : donc", "fatum, i, n : le destin", "iaceo, es, ere : être étendu, se trouver", "Lycaonius, a, um : de Lycaon (père de Callisto, changée en Grande Ourse)", "Scythia, ae, f : la Scythie", "terra, ae, f : la terre", "viso, is, ere : aller voir, visiter"],
        la: "Ergo erat in fatis Scythiam quoque uisere nostris, / quaeque Lycaonio terra sub axe iacet!",
        pas: [
          K("Premier vers : où est le verbe conjugué ?", [1], "verbe", `${la("erat")} : imparfait de ${la("sum")}. « Il était… »`),
          K("Touche les trois mots du complément introduit par une préposition.", [2, 3, 7], "complément", `${la("in fatis… nostris")} : « dans mon destin ». ${la("nostris")} est un pluriel poétique.`, `${la("in")}, puis deux mots à l'ablatif pluriel.`),
          Q(`Quel est le sujet de ${la("erat")} ?`, [`L'infinitif ${la("uisere")} : « voir… était dans mon destin »`, `${la("Scythiam")}`, `${la("fatis")}`], `${la("uisere")} est sujet ; ${la("Scythiam")} en est le COD.`),
          Q(`Second vers : ${la("quaeque")} se décompose en…`, [`${la("quae")} + ${la("-que")} : « et (la terre) qui »`, `un seul mot : « chacune »`, `${la("qua")} + ${la("eque")}`], `${la("-que")} coordonne ; ${la("quae")} est un relatif dont l'antécédent, ${la("terra")}, est placé dans la relative.`),
          K("Touche le sujet et le verbe de la relative.", [10, 13], null, `${la("terra… iacet")} : « la terre s'étend ».`),
          K("Touche le complément de lieu de la relative. Trois mots.", [9, 11, 12], "complément de lieu", `${la("Lycaonio… sub axe")} : « sous le pôle de Lycaon », c'est-à-dire sous la Grande Ourse, au nord.`)
        ],
        construction: "Ergo in fatis nostris erat uisere Scythiam quoque et terram quae sub Lycaonio axe iacet !",
        fr: "Il était donc écrit dans mon destin que je verrais aussi la Scythie, et la terre qui s'étend sous le pôle de Lycaon !" },
      { t: "guide", titre: "Vers 29-30 : « Pourquoi ai-je survécu ? »", cas: "I N I A X I N X A N N A",
        vocab: ["caput, itis, n : la tête", "cur : pourquoi", "fugio, is, ere, fugi : fuir, échapper à", "gladius, ii, m : le glaive", "infelix, icis : malheureux", "minor, aris, ari, atus sum : menacer", "obruo, is, ere, obrui : écraser, engloutir", "procella, ae, f : la tempête", "tot : tant de", "totiens : tant de fois"],
        la: "Cur ego tot gladios fugi totiensque minata / obruit infelix nulla procella caput?",
        pas: [
          K("Touche les deux verbes conjugués.", [4, 7], null, `${la("fugi")} : parfait, 1re personne ; ${la("obruit")} : parfait, 3e personne.`),
          K(`Touche le COD de ${la("fugi")}.`, [3], "COD", `${la("tot gladios")} : « tant de glaives ». ${la("tot")} est invariable.`),
          K(`Second verbe : touche le groupe sujet de ${la("obruit")}. Deux mots.`, [9, 10], "sujet", `${la("nulla procella")} : « aucune tempête ».`),
          Q(`${la("minata")} est le participe d'un verbe déponent. Il s'accorde avec…`, [`${la("procella")} : « qui m'a menacé »`, `${la("gladios")}`, `${la("caput")}`], `${la("totiens minata")} : « qui m'a si souvent menacé ».`),
          K(`Touche les deux mots du COD de ${la("obruit")}. Ils sont séparés.`, [8, 11], "COD", `${la("infelix… caput")} : « ma tête infortunée ». ${la("caput")} est neutre.`)
        ],
        construction: "Cur ego tot gladios fugi, et (cur) nulla procella, totiens minata, infelix caput obruit ?",
        fr: "Pourquoi ai-je échappé à tant de glaives ? Pourquoi aucune tempête, après m'avoir tant de fois menacé, n'a-t-elle englouti ma tête infortunée ?" },
      { t: "version", titre: "À toi : vers 3-4",
        vocab: ["doctus, a, um : savant", "fero, fers, ferre, tuli, latum : porter", "Letoius, a, um : de Latone (mère d'Apollon)", "ops, opis, f : l'aide (opem ferre : porter secours)", "Pierides, um, f pl : les Piérides, les Muses", "sacerdos, otis, m : le prêtre", "stirps, stirpis, f : le rejeton, le fils", "turba, ae, f : la troupe"],
        phrases: [
          { la: "Nec uos, Pierides, nec stirps Letoia, uestro", fr: "Ni vous, Piérides, ni toi, fils de Latone,", aide: `${la("stirps Letoia")} : Apollon. ${la("uestro")} s'accorde avec ${la("sacerdoti")}, au vers suivant.` },
          { la: "docta sacerdoti turba tulistis opem.", fr: "troupe savante, vous n'avez porté secours à votre prêtre.", note: "Le poète se dit le prêtre des Muses et d'Apollon : ses dieux l'ont abandonné." }
        ] }
    ]
  },
  {
    id: "c31", borne: "III, 3", titre: "Élégie 3 : lettre d'un malade à sa femme", resume: "Ovide dicte sa lettre et compose sa propre épitaphe (v. 1-2 et 73-76)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>88 vers.</strong> Malade, Ovide dicte une lettre à sa femme, restée à Rome.</p>
<ul><li>Ici, ni climat supportable, ni médecin, ni ami pour le distraire. Dans sa fièvre, c'est elle qu'il appelle.</li>
<li>Il craint de mourir sur une terre inconnue, sans les gestes des siens. Il demande que ses cendres soient rapportées à Rome.</li>
<li>Il dicte l'inscription de son tombeau, mais ajoute que ses livres seront un monument plus durable.</li></ul>
<p><strong>Notre passage</strong> : l'épitaphe, quatre vers parmi les plus célèbres du recueil.</p>` },
      { t: "guide", titre: "Vers 73-74 : l'épitaphe (1)", cas: "I N N X G N G B X N N B",
        vocab: ["amor, oris, m : l'amour", "hic : ici", "iaceo, es, ere : être étendu, reposer", "ingenium, ii, n : le talent", "lusor, oris, m : celui qui joue, le poète léger", "Naso, onis, m : Nason (surnom d'Ovide)", "pereo, is, ire, perii : périr", "poeta, ae, m : le poète", "tener, era, erum : tendre"],
        la: "Hic ego qui iaceo tenerorum lusor amorum / ingenio perii Naso poeta meo.",
        pas: [
          K("Touche les deux verbes conjugués.", [3, 8], null, `${la("iaceo")} : présent ; ${la("perii")} : parfait. Tous deux à la 1re personne.`),
          K("Touche les deux mots de la relative.", [2, 3], "relative", `${la("qui iaceo")} : « moi qui repose ». L'antécédent est ${la("ego")}.`),
          K(`Touche le complément du nom ${la("lusor")}. Deux mots séparés.`, [4, 6], "complément du nom", `${la("tenerorum… amorum")} : génitif pluriel, « des tendres amours ».`),
          Q(`${la("lusor")}, ${la("Naso")} et ${la("poeta")} sont au nominatif. Quelle est leur fonction ?`, [`Ils sont apposés au sujet ${la("ego")}`, "Ce sont trois sujets différents", "Ce sont des attributs du COD"], `« Moi… le chantre… Nason le poète ».`),
          K(`Touche le complément de ${la("perii")}. Deux mots séparés.`, [7, 11], "complément de cause", `${la("ingenio… meo")} : ablatif de cause, « par mon propre talent ».`)
        ],
        construction: "Ego, qui hic iaceo, lusor tenerorum amorum, Naso poeta, ingenio meo perii.",
        fr: "Moi qui repose ici, moi qui chantais en me jouant les tendres amours, Nason le poète, c'est mon talent qui m'a perdu." },
      { t: "guide", titre: "Vers 75-76 : l'épitaphe (2)", cas: "I D N X I X N N X X G I N X",
        vocab: ["at : mais", "cubo, as, are : être couché, reposer", "gravis, e : lourd, pénible", "molliter : mollement, doucement", "os, ossis, n : l'os", "quisquis : qui que tu sois qui", "transeo, is, ire : passer"],
        la: "At tibi qui transis ne sit graue, quisquis amasti, / dicere: Nasonis molliter ossa cubent.",
        pas: [
          K("Touche les deux mots de la première relative.", [2, 3], "relative", `${la("qui transis")} : « toi qui passes ». L'épitaphe s'adresse au passant.`),
          Q(`${la("ne sit graue")} : subjonctif présent précédé de ${la("ne")} dans une indépendante. Quel sens ?`, ["Un souhait négatif : « qu'il ne soit pas pénible »", "Un but : « pour qu'il ne soit pas pénible »", "Une crainte"], `${la("graue")} est un attribut au neutre.`),
          K(`Quel infinitif est le sujet de ${la("sit")} ?`, [9], null, `${la("dicere")} : « qu'il ne te soit pas pénible de dire ».`),
          Q(`${la("amasti")} est une forme contractée. Laquelle ?`, [`${la("amavisti")} : « tu as aimé »`, `${la("amas")} : « tu aimes »`, `${la("amabis")} : « tu aimeras »`], `${la("quisquis amasti")} : « toi, qui que tu sois, qui as aimé ».`),
          K("Dernière phrase : touche le sujet et le verbe.", [12, 13], null, `${la("ossa cubent")} : subjonctif de souhait, « que les os reposent ».`),
          K(`Touche le complément du nom ${la("ossa")}.`, [10], "complément du nom", `${la("Nasonis")} : génitif, « de Nason ».`)
        ],
        construction: "At tibi qui transis, quisquis amasti, ne graue sit dicere : ossa Nasonis molliter cubent.",
        fr: "Mais toi qui passes, si tu as aimé, qui que tu sois, qu'il ne te coûte pas de dire : que les os de Nason reposent doucement." },
      { t: "version", titre: "À toi : vers 1-2",
        vocab: ["aeger, gra, grum : malade", "alter, era, erum : un autre", "casu : par hasard", "digitus, i, m : le doigt", "epistula, ae, f : la lettre", "miror, aris, ari : s'étonner", "quare : pourquoi", "scribo, is, ere, scripsi, scriptum : écrire"],
        phrases: [
          { la: "Haec mea si casu miraris epistula quare", fr: "Si par hasard tu t'étonnes que cette lettre de moi", aide: `${la("haec mea… epistula")} est le sujet de ${la("scripta sit")}, au vers suivant.` },
          { la: "alterius digitis scripta sit, aeger eram.", fr: "soit écrite de la main d'un autre, c'est que j'étais malade.", note: `${la("quare… scripta sit")} : interrogative indirecte ; ${la("alterius")} : génitif de ${la("alter")}.` }
        ] }
    ]
  },
  {
    id: "c32", borne: "III, 4", titre: "Élégie 4 : « Vis caché »", resume: "Conseils à un ami : fuir les grands et rester à sa place (v. 3-6 et 25-26)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>78 vers</strong>, que ton édition répartit en deux pièces (4 et 4 b).</p>
<ul><li><strong>Première partie.</strong> Instruit par son malheur, Ovide conseille à un ami fidèle de vivre loin des puissants. La foudre frappe ce qui s'élève : Icare volait trop haut, Dédale est resté prudent.</li>
<li><strong>Seconde partie.</strong> Le corps est à Tomes, l'esprit à Rome : il revoit sa maison, sa femme, ses amis, qu'il n'ose pas nommer de peur de leur nuire.</li></ul>
<p><strong>Notre passage</strong> : le conseil des vers 3-6, puis la maxime des vers 25-26.</p>` },
      { t: "guide", titre: "Vers 3-4 : « Fuis les grands noms »", cas: "B D I A X D X D I I A A X",
        vocab: ["credo, is, ere : croire, faire confiance à (+ datif)", "edoceo, es, ere, edocui, edoctum : instruire à fond", "fugio, is, ere : fuir", "longe : de loin", "nomen, inis, n : le nom", "quicquam : quelque chose, en quoi que ce soit", "usus, us, m : l'expérience", "vivo, is, ere : vivre"],
        la: "Vsibus edocto si quicquam credis amico, / uiue tibi et longe nomina magna fuge!",
        pas: [
          K("Premier vers : où est le verbe conjugué ?", [4], "verbe", `${la("credis")} : « tu crois ». Il se construit avec le datif.`),
          K(`Touche les deux mots au datif qui dépendent de ${la("credis")}.`, [1, 5], "COI", `${la("edocto… amico")} : « à un ami instruit ».`),
          Q(`${la("Vsibus")} est un ablatif. Il complète…`, [`le participe ${la("edocto")} : « instruit par l'expérience »`, `le verbe ${la("credis")}`, `le nom ${la("amico")}`], `${la("usibus edocto")} : « que l'expérience a instruit ».`),
          K("Second vers : touche les deux impératifs.", [6, 12], null, `${la("uiue")} et ${la("fuge")} : « vis » et « fuis ».`),
          Q(`${la("uiue tibi")} : quel est le sens du datif ?`, ["« Vis pour toi-même »", "« Vis avec toi »", "« Vis chez toi »"], "Datif d'intérêt."),
          K(`Touche le COD de ${la("fuge")}.`, [10, 11], "COD", `${la("nomina magna")} : « les grands noms », c'est-à-dire les puissants.`)
        ],
        construction: "Si quicquam credis amico usibus edocto, uiue tibi et longe fuge nomina magna !",
        fr: "Si tu fais un peu confiance à un ami que l'expérience a instruit, vis pour toi-même et fuis de loin les grands noms." },
      { t: "guide", titre: "Vers 25-26 : la maxime", cas: "X D I N X I X I I A X N X A",
        vocab: ["debeo, es, ere : devoir", "fortuna, ae, f : la condition, le sort", "intra + accusatif : à l'intérieur de", "lateo, es, ere, latui : être caché", "maneo, es, ere : rester", "quisque : chacun"],
        la: "Crede mihi, bene qui latuit bene uixit, et intra / fortunam debet quisque manere suam.",
        pas: [
          K("Touche l'impératif et son complément au datif.", [0, 1], null, `${la("Crede mihi")} : « crois-moi ».`),
          K("Touche les deux verbes au parfait.", [4, 6], null, `${la("latuit")} et ${la("uixit")}. Le parfait exprime ici une vérité générale.`),
          Q(`${la("bene qui latuit")} : quel est l'antécédent de ${la("qui")} ?`, ["Il est sous-entendu : « celui qui »", `${la("mihi")}`, `${la("bene")}`], `La relative est le sujet de ${la("uixit")} : « qui s'est bien caché a bien vécu ».`),
          K("Second vers : touche le sujet et le verbe conjugué.", [10, 11], null, `${la("debet quisque")} : « chacun doit ».`),
          K("Touche les trois mots du complément de lieu. Il enjambe les deux vers.", [8, 9, 13], "complément de lieu", `${la("intra fortunam… suam")} : « dans les limites de sa condition ».`)
        ],
        construction: "Crede mihi : qui bene latuit, bene uixit, et quisque debet manere intra fortunam suam.",
        fr: "Crois-moi : qui a bien su se cacher a bien vécu, et chacun doit rester dans les limites de sa condition." },
      { t: "version", titre: "À toi : vers 5-6",
        vocab: ["fulmen, inis, n : la foudre", "ignis, is, m : le feu", "praelustris, e : très brillant, très en vue", "quantum : autant que", "saevus, a, um : cruel", "vito, as, are : éviter"],
        phrases: [
          { la: "Viue tibi, quantumque potes, praelustria uita :", fr: "Vis pour toi et, autant que tu le peux, évite ce qui brille trop :", aide: `${la("uita")} est ici l'impératif de ${la("uito")}, et non le nom « la vie ».` },
          { la: "saeuum praelustri fulmen ab igne uenit.", fr: "c'est d'un feu trop éclatant que tombe la foudre cruelle.", note: "La foudre désigne la colère d'Auguste, souvent comparé à Jupiter." }
        ] }
    ]
  },
  {
    id: "c33", borne: "III, 5", titre: "Élégie 5 : l'ami des mauvais jours", resume: "Hommage à un ami récent qui n'a pas fui (v. 1-2 et 5-8)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>56 vers.</strong> Ovide remercie un ami qu'il connaissait à peine avant sa chute.</p>
<ul><li>Quand tous se détournaient, celui-là est venu, a pleuré avec lui, l'a soutenu.</li>
<li>Le poète tait son nom, mais lui promet sa reconnaissance.</li>
<li>Il espère la clémence d'Auguste : les grands cœurs, comme le lion, épargnent celui qui est à terre.</li>
<li>Il le répète : sa faute fut une erreur, non un crime. Ses yeux ont vu sans le vouloir.</li></ul>
<p><strong>Notre passage</strong> : le début du poème, une seule longue phrase.</p>` },
      { t: "guide", titre: "Vers 5-6 : « Quand je suis tombé »", cas: "I X N B X A A D A X D",
        vocab: ["amicitia, ae, f : l'amitié", "cado, is, ere, cecidi : tomber", "cunctus, a, um : tout entier (cuncti : tous)", "do, das, dare, dedi : donner (terga dare : tourner le dos)", "metus, us, m : la peur", "ruina, ae, f : l'écroulement, le désastre", "tergum, i, n : le dos", "ut + indicatif : quand", "verto, is, ere, verti, versum : tourner"],
        la: "Vt cecidi cunctique metu fugere ruinam / uersaque amicitiae terga dedere meae,",
        pas: [
          Q(`${la("Vt")} est suivi de l'indicatif (${la("cecidi")}). Quel est son sens ?`, ["« Quand, dès que »", "« Pour que »", "« Si bien que »"], `${la("ut cecidi")} : « quand je suis tombé ».`),
          K("Touche les trois verbes au parfait.", [1, 4, 9], null, `${la("cecidi")}, puis ${la("fugere")} et ${la("dedere")}, qui valent ${la("fugerunt")} et ${la("dederunt")}.`, `Deux d'entre eux sont en ${la("-ere")}.`),
          K(`Touche le sujet de ${la("fugere")}.`, [2], "sujet", `${la("cuncti")} : « tous ». Le ${la("-que")} le relie à ce qui précède.`),
          Q(`${la("metu")} est un ablatif. Il exprime…`, ["la cause : « par peur »", "le moyen", "le lieu"], "Ablatif de cause."),
          K(`Second vers : touche les deux mots du COD de ${la("dedere")}.`, [6, 8], "COD", `${la("uersa… terga")} : « des dos tournés ». L'expression ${la("terga dare")} signifie « tourner le dos, fuir ».`),
          K("Touche les deux mots au datif. Ils sont séparés.", [7, 10], "COI", `${la("amicitiae… meae")} : « à mon amitié ».`)
        ],
        construction: "Vt cecidi, cunctique metu ruinam fugere et terga uersa amicitiae meae dedere,",
        fr: "Quand je suis tombé, que tous, de peur, ont fui l'écroulement et tourné le dos à mon amitié," },
      { t: "guide", titre: "Vers 7-8 : « Tu as osé »", cas: "X X B G A X A I G A X G",
        vocab: ["adeo, is, ire : aller vers, franchir", "audeo, es, ere, ausus sum : oser", "corpus, oris, n : le corps", "deploro, as, are, avi, atum : pleurer comme perdu", "domus, us, f : la maison", "ignis, is, m : le feu", "Iuppiter, Iovis, m : Jupiter", "limen, inis, n : le seuil", "percutio, is, ere, percussi, percussum : frapper", "tango, is, ere : toucher"],
        la: "ausus es igne Iouis percussum tangere corpus / et deploratae limen adire domus;",
        pas: [
          K("Le verbe principal est en deux mots. Touche-les.", [0, 1], "verbe", `${la("ausus es")} : parfait de ${la("audeo")}, verbe semi-déponent. « Tu as osé ».`),
          K(`Touche les deux infinitifs qui dépendent de ${la("ausus es")}.`, [5, 10], null, `${la("tangere")} et ${la("adire")} : « toucher » et « franchir ».`),
          K(`Touche les deux mots du COD de ${la("tangere")}. Ils sont séparés.`, [4, 6], "COD", `${la("percussum… corpus")} : « un corps frappé ».`),
          K("Par quoi ce corps a-t-il été frappé ? Touche les deux mots.", [2, 3], "complément de moyen", `${la("igne Iouis")} : « par le feu de Jupiter », la foudre. Jupiter, c'est Auguste.`),
          K(`Second vers : touche le COD de ${la("adire")}.`, [9], "COD", `${la("limen")} : « le seuil ».`),
          K(`Touche le complément du nom ${la("limen")}. Deux mots séparés.`, [8, 11], "complément du nom", `${la("deploratae… domus")} : génitif, « d'une maison que l'on pleurait déjà », comme celle d'un mort.`)
        ],
        construction: "ausus es tangere corpus igne Iouis percussum et adire limen domus deploratae ;",
        fr: "tu as osé toucher un corps frappé par le feu de Jupiter et franchir le seuil d'une maison que l'on pleurait déjà." },
      { t: "version", titre: "À toi : vers 1-2",
        vocab: ["aegre : avec peine", "dissimulo, as, are : dissimuler, renier", "parvus, a, um : petit", "usus, us, m : la pratique, la fréquentation"],
        phrases: [
          { la: "Vsus amicitiae tecum mihi paruus, ut illam", fr: "J'avais peu pratiqué ton amitié, si bien que tu aurais pu", aide: `${la("usus… paruus… fuit")} : le verbe est à la fin du vers suivant. ${la("mihi")} : datif de possession.` },
          { la: "non aegre posses dissimulare, fuit,", fr: "sans peine la renier,", note: `${la("ut… posses")} : subordonnée de conséquence au subjonctif imparfait.` }
        ] }
    ]
  },
  {
    id: "c34", borne: "III, 6", titre: "Élégie 6 : le secret d'une faute", resume: "À l'ami le plus proche : ce que mes yeux ont vu, je ne puis le dire (v. 23-28)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>38 vers.</strong> Ovide écrit à son ami le plus intime, celui à qui il confiait tout.</p>
<ul><li>Tout, sauf une chose : celle qui l'a perdu. S'il l'avait confiée, les conseils de son ami l'auraient peut-être sauvé.</li>
<li>Il demande à cet ami de prier pour que la colère du prince s'adoucisse et que le lieu de l'exil soit changé.</li>
<li>Sa faute, il la désigne sans la dire : ses yeux ont été témoins d'un mal. Il ajoute qu'il y eut de la peur, et une erreur.</li></ul>
<p><strong>Notre passage</strong> : les six vers où il effleure le secret.</p>` },
      { t: "guide", titre: "Vers 23-24 : la prière demandée", cas: "G I G X N N B N X N N B",
        intro: "L'ami doit prier les dieux, et le prince…",
        vocab: ["fio, fis, fieri : devenir", "ira, ae, f : la colère", "laedo, is, ere, laesi, laesum : blesser, offenser", "locus, i, m : le lieu", "mansuetus, a, um : doux (comparatif mansuetior)", "minor, minus : moindre", "muto, as, are, avi, atum : changer", "numen, inis, n : la puissance divine, le dieu", "poena, ae, f : la peine"],
        la: "Numinis ut laesi fiat mansuetior ira, / mutatoque minor sit mea poena loco,",
        pas: [
          Q(`${la("ut")} est suivi de deux subjonctifs (${la("fiat")}, ${la("sit")}). Quel est son sens ?`, ["« Pour que »", "« Quand »", "« Comme »"], "Subordonnée de but."),
          K(`Touche le sujet de ${la("fiat")}.`, [5], "sujet", `${la("ira")} : « la colère ».`),
          K(`Touche le complément du nom ${la("ira")}. Deux mots séparés par ${la("ut")}.`, [0, 2], "complément du nom", `${la("Numinis… laesi")} : « du dieu offensé ». Auguste est traité en divinité.`),
          Q(`${la("mansuetior")} est…`, [`un comparatif, attribut de ${la("ira")} : « plus douce »`, "un superlatif", "un génitif"], `${la("fiat mansuetior")} : « devienne plus douce ».`),
          K("Second vers : touche le groupe sujet et son attribut. Trois mots.", [7, 9, 10], "sujet", `${la("mea poena")} est le sujet, ${la("minor")} l'attribut : « que ma peine soit moindre ».`),
          K("Touche l'ablatif absolu. Deux mots séparés.", [6, 11], "ablatif absolu", `${la("mutato… loco")} : « le lieu ayant été changé », c'est-à-dire « par un changement de lieu ».`)
        ],
        construction: "ut ira numinis laesi mansuetior fiat, et, loco mutato, poena mea minor sit,",
        fr: "pour que la colère du dieu offensé s'adoucisse et que ma peine soit allégée par un changement de lieu," },
      { t: "guide", titre: "Vers 27-28 : « Mes yeux ont vu »", cas: "I N I N B X N X B N G N X G",
        vocab: ["brevis, e : bref", "casus, us, m : le hasard, l'accident", "conscius, a, um : témoin, complice de (+ génitif)", "funestus, a, um : funeste", "lumen, inis, n : la lumière ; au pluriel, les yeux", "malum, i, n : le mal", "tutus, a, um : sûr, sans danger"],
        la: "Nec breue nec tutum quo sint mea dicere casu / lumina funesti conscia facta mali;",
        pas: [
          Q(`${la("Nec breue nec tutum")} : quel verbe est sous-entendu ?`, [`${la("est")} : « il n'est ni bref ni sûr »`, `${la("sunt")}`, `${la("erat")}`], `Les deux adjectifs sont au neutre, attributs de l'infinitif.`),
          K(`Quel infinitif est le sujet de ce ${la("est")} sous-entendu ?`, [7], null, `${la("dicere")} : « il n'est ni bref ni sûr de dire ».`),
          K(`Que faudrait-il dire ? Touche les deux mots qui ouvrent l'interrogative indirecte.`, [4, 8], "complément", `${la("quo… casu")} : « par quel hasard ».`, "Un interrogatif et un nom à l'ablatif, séparés."),
          K("Le verbe de l'interrogative est en deux mots. Touche-les.", [5, 12], "verbe", `${la("sint… facta")} : subjonctif parfait passif de ${la("facio")}, « soient devenus ».`),
          K("Touche les deux mots du sujet.", [6, 9], "sujet", `${la("mea… lumina")} : « mes yeux ».`),
          K(`Touche le complément de ${la("conscia")}. Deux mots séparés.`, [10, 13], "complément du nom", `${la("funesti… mali")} : génitif, « d'un mal funeste ».`)
        ],
        construction: "Nec breue nec tutum (est) dicere quo casu lumina mea conscia funesti mali facta sint ;",
        fr: "Il ne serait ni bref ni prudent de dire par quel hasard mes yeux sont devenus les témoins d'un mal funeste." },
      { t: "version", titre: "À toi : vers 25-26",
        vocab: ["crimen, inis, n : le grief, la faute", "error, oris, m : l'erreur", "pectus, oris, n : la poitrine, le cœur", "principium, ii, n : l'origine", "scelus, eris, n : le crime"],
        phrases: [
          { la: "Idque ita, si nullum scelus est in pectore nostro", fr: "Et cela, à condition qu'il n'y ait aucun crime dans mon cœur", aide: `${la("nostro")} : pluriel poétique.` },
          { la: "principiumue mei criminis error habet.", fr: "et qu'une erreur soit à l'origine de ma faute.", note: `Mot à mot : « ou si une erreur tient le commencement de ma faute ». On retrouve l'${la("error")} de ${la("carmen et error")}.` }
        ] }
    ]
  },
  {
    id: "c35", borne: "III, 7", titre: "Élégie 7 : à Perilla", resume: "Lettre à une jeune poétesse : seul le talent échappe à la mort et à César (v. 43-48)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>54 vers.</strong> Ovide confie sa lettre au papyrus : qu'elle aille saluer <strong>Perilla</strong>, une jeune femme dont il a guidé les premiers vers.</p>
<ul><li>Écrit-elle encore ? Qu'elle ne se laisse pas décourager par l'exemple de son maître : ses vers à elle n'enseignent pas l'amour.</li>
<li>La beauté passera, la fortune peut être reprise.</li>
<li>Seuls les biens de l'esprit sont hors d'atteinte. Lui-même en est la preuve : on lui a tout pris, sauf son talent. Tant que Rome dominera le monde, il sera lu.</li></ul>
<p><strong>Notre passage</strong> : le cœur de l'argument, l'un des textes les plus fiers du recueil.</p>` },
      { t: "guide", titre: "Vers 43-44 : « Rien qui ne soit mortel »", cas: "A I X A I A X G B G B",
        vocab: ["bonum, i, n : le bien", "excipio, is, ere, excepi, exceptum : excepter", "ingenium, ii, n : l'esprit, le talent", "mortalis, e : mortel", "nil = nihil : rien", "pectus, oris, n : le cœur", "refero, fers, ferre : rapporter", "singuli, ae, a : un à un (singula : le détail)", "teneo, es, ere : tenir, posséder"],
        la: "Singula ne referam, nil non mortale tenemus / pectoris exceptis ingeniique bonis.",
        pas: [
          Q(`${la("ne referam")} : ${la("ne")} + subjonctif en tête de phrase exprime…`, ["le but : « pour ne pas entrer dans le détail »", "une défense", "une crainte"], `${la("Singula")} est le COD de ${la("referam")}.`),
          K("Où est le verbe principal ?", [6], "verbe", `${la("tenemus")} : « nous possédons ».`),
          K(`Touche les deux mots du COD de ${la("tenemus")}.`, [3, 5], "COD", `${la("nil… mortale")} : « rien de mortel ».`, `${la("nil")} et l'adjectif neutre qui s'accorde avec lui.`),
          Q(`${la("nil non mortale")} : deux négations. Quel est le sens ?`, ["« Rien qui ne soit mortel » : tout est mortel", "« Rien n'est mortel »", "« Ce n'est pas rien »"], "Les deux négations s'annulent pour renforcer l'affirmation."),
          K("Second vers : touche l'ablatif absolu. Deux mots séparés.", [8, 10], "ablatif absolu", `${la("exceptis… bonis")} : « les biens étant exceptés », « à l'exception des biens ».`),
          K(`Touche les deux génitifs qui complètent ${la("bonis")}.`, [7, 9], "complément du nom", `${la("pectoris ingeniique")} : « du cœur et de l'esprit ».`)
        ],
        construction: "Ne singula referam, nil non mortale tenemus, bonis pectoris ingeniique exceptis.",
        fr: "Sans entrer dans le détail, nous ne possédons rien qui ne soit mortel, hormis les biens du cœur et de l'esprit." },
      { t: "guide", titre: "Vers 47-48 : « César n'y peut rien »", cas: "B I N B X X N I B X G X A",
        vocab: ["comito, as, are : accompagner (au passif comitor : être accompagné de, + ablatif)", "fruor, eris, i : jouir de (+ ablatif)", "habeo, es, ere : avoir", "ipse, a, um : moi-même", "ius, iuris, n : le droit", "tamen : pourtant"],
        la: "Ingenio tamen ipse meo comitorque fruorque: / Caesar in hoc potuit iuris habere nihil.",
        pas: [
          K("Premier vers : touche les deux verbes, à la 1re personne.", [4, 5], null, `${la("comitor")} : passif, « je suis accompagné » ; ${la("fruor")} : déponent, « je jouis ». Tous deux se construisent avec l'ablatif.`),
          K("Touche leur complément commun. Deux mots séparés.", [0, 3], "complément", `${la("Ingenio… meo")} : « de mon talent ».`),
          Q(`À quoi sert ${la("ipse")} ?`, ["À insister sur le sujet « je » : « moi, pour ma part »", `C'est le COD`, `Il s'accorde avec ${la("ingenio")}`], `${la("ipse")} : nominatif, apposé au sujet.`),
          K("Second vers : touche le sujet, le verbe conjugué et l'infinitif.", [6, 9, 11], null, `${la("Caesar… potuit… habere")} : « César a pu avoir ».`),
          K(`Touche le COD de ${la("habere")} et son complément au génitif.`, [10, 12], "COD", `${la("iuris… nihil")} : « rien de droit », c'est-à-dire « aucun droit ». Génitif partitif.`),
          Q(`${la("in hoc")} : à quoi renvoie ${la("hoc")} ?`, ["Au talent : « sur lui »", "À César", "À l'exil"], `${la("hoc")} : ablatif neutre, reprend ${la("ingenio")}.`)
        ],
        construction: "Tamen ipse ingenio meo comitor et fruor : in hoc Caesar nihil iuris habere potuit.",
        fr: "mon talent, pourtant, ne me quitte pas, et j'en jouis : sur lui, César n'a pu avoir aucun droit." },
      { t: "version", titre: "À toi : vers 45-46",
        vocab: ["adimo, is, ere : ôter", "careo, es, ere : être privé de (+ ablatif)", "cum + subjonctif : alors que, bien que", "en : voici, vois", "rapio, is, ere, rapui, raptum : ravir"],
        phrases: [
          { la: "En ego, cum caream patria uobisque domoque,", fr: "Vois : moi qui suis privé de ma patrie, de vous, de ma maison,", aide: `${la("cum caream")} : ${la("cum")} + subjonctif, sens concessif.` },
          { la: "raptaque sint adimi quae potuere mihi,", fr: "moi à qui l'on a ravi tout ce qui pouvait m'être ôté,", note: `${la("potuere")} = ${la("potuerunt")}. L'antécédent de ${la("quae")} est sous-entendu : « (les choses) qui ».` }
        ] }
    ]
  },
  {
    id: "c36", borne: "III, 8", titre: "Élégie 8 : des ailes pour rentrer", resume: "Le rêve de s'envoler vers Rome, aussitôt brisé (v. 1-2, 7-8 et 11-12)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>42 vers.</strong> Ovide rêve de moyens fabuleux pour revoir sa patrie : le char de Triptolème, les dragons de Médée, les ailes de Persée ou de Dédale.</p>
<ul><li>Il se reprend aussitôt : ce sont des vœux d'enfant. Un seul dieu peut le ramener, Auguste.</li>
<li>Qu'il lui accorde au moins un autre lieu d'exil : ici, le ciel, l'eau, la terre, l'air lui sont contraires.</li>
<li>Depuis son arrivée, il est malade, amaigri, sans sommeil.</li></ul>
<p><strong>Notre passage</strong> : le rêve, puis le réveil.</p>` },
      { t: "guide", titre: "Vers 1-2 : le char de Triptolème", cas: "I N G X X B X I A N A A A",
        vocab: ["consisto, is, ere : se tenir, prendre place", "cupio, is, ere : désirer", "currus, us, m : le char", "humus, i, f : le sol", "ignotus, a, um : inconnu, qui ignore", "rudis, e : brut, nouveau", "semen, inis, n : la semence", "Triptolemus, i, m : Triptolème (il reçut de Cérès le blé et un char ailé)"],
        la: "Nunc ego Triptolemi cuperem consistere curru, / misit in ignotam qui rude semen humum;",
        pas: [
          K("Premier vers : touche le verbe conjugué et l'infinitif qui en dépend.", [3, 4], null, `${la("cuperem consistere")} : « je voudrais me tenir ». Subjonctif imparfait : c'est un souhait irréalisable.`),
          K("Touche les deux mots du complément de lieu.", [2, 5], "complément de lieu", `${la("Triptolemi… curru")} : « sur le char de Triptolème ». Ablatif sans préposition, tour poétique.`),
          K("Second vers : touche le relatif et son verbe.", [6, 9], null, `${la("qui… misit")} : « lui qui jeta ». L'antécédent est ${la("Triptolemi")}.`),
          K(`Touche les deux mots du COD de ${la("misit")}.`, [10, 11], "COD", `${la("rude semen")} : « la semence nouvelle », le blé encore inconnu des hommes.`),
          K("Touche les trois mots du complément de lieu. Ils sont séparés.", [7, 8, 12], "complément de lieu", `${la("in ignotam… humum")} : ${la("in")} + accusatif. ${la("humus")} est féminin : « dans un sol qui ne la connaissait pas ».`)
        ],
        construction: "Nunc ego cuperem consistere curru Triptolemi, qui rude semen in ignotam humum misit ;",
        fr: "Je voudrais à présent prendre place sur le char de Triptolème, lui qui jeta dans un sol qui l'ignorait la semence nouvelle ;" },
      { t: "guide", titre: "Vers 7-8 : « Revoir le sol de ma patrie »", cas: "I B D B D B X G A I A",
        intro: "…ou encore les ailes de Persée, celles de Dédale,",
        vocab: ["aspicio, is, ere : apercevoir", "aura, ae, f : l'air, la brise", "cedo, is, ere : céder à (+ datif)", "dulcis, e : doux", "repente : soudain", "solum, i, n : le sol", "tener, era, erum : tendre, léger", "volatus, us, m : le vol"],
        la: "ut tenera nostris cedente uolatibus aura / aspicerem patriae dulce repente solum",
        pas: [
          K("Où est le verbe conjugué ?", [6], "verbe", `${la("aspicerem")} : subjonctif imparfait. ${la("ut")} + subjonctif : « pour que je voie ».`),
          K("Premier vers : touche l'ablatif absolu. Trois mots.", [1, 3, 5], "ablatif absolu", `${la("tenera… cedente… aura")} : « l'air léger cédant ». Le participe présent est à l'ablatif.`, "Un adjectif, un participe présent et un nom, tous à l'ablatif féminin singulier."),
          K(`${la("cedere")} se construit avec le datif. Touche les deux mots.`, [2, 4], "COI", `${la("nostris… uolatibus")} : « à mon vol ». Pluriel poétique.`),
          K(`Second vers : touche les deux mots du COD de ${la("aspicerem")}.`, [8, 10], "COD", `${la("dulce… solum")} : « le doux sol ».`),
          K(`Touche le complément du nom ${la("solum")}.`, [7], "complément du nom", `${la("patriae")} : « de ma patrie ».`)
        ],
        construction: "ut, tenera aura uolatibus nostris cedente, repente aspicerem dulce solum patriae",
        fr: "pour que, l'air léger s'ouvrant à mon vol, je voie soudain le doux sol de ma patrie" },
      { t: "version", titre: "À toi : vers 11-12",
        vocab: ["dies, diei, m ou f : le jour", "frustra : en vain", "opto, as, are : souhaiter", "puerilis, e : d'enfant", "stultus, a, um : sot, insensé", "votum, i, n : le vœu"],
        phrases: [
          { la: "Stulte, quid haec frustra uotis puerilibus optas,", fr: "Insensé, pourquoi souhaiter en vain, par des vœux d'enfant, ces choses", aide: `${la("Stulte")} : vocatif. Le poète s'adresse à lui-même.` },
          { la: "quae non ulla tulit fertque feretque dies ?", fr: "qu'aucun jour n'a apportées, n'apporte ni n'apportera ?", note: `Le même verbe ${la("fero")} à trois temps : parfait, présent, futur.` }
        ] }
    ]
  },
  {
    id: "c37", borne: "III, 9", titre: "Élégie 9 : pourquoi Tomes s'appelle Tomes", resume: "Une légende noire pour expliquer un nom : Médée et son frère (v. 1-2 et 33-34)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>34 vers.</strong> Ici aussi, s'étonne Ovide, il y a des villes grecques : des colons de Milet se sont établis chez les Gètes. Mais le nom de Tomes est plus ancien, et il vient d'un crime.</p>
<ul><li><strong>Médée</strong>, fuyant la Colchide avec Jason et la Toison d'or, voit approcher les navires de son père.</li>
<li>Pour le retarder, elle tue son frère Absyrtos et disperse ses membres : le père s'arrêtera pour les recueillir.</li>
<li>En grec, <em>tomos</em> signifie « coupure ». Le lieu en a gardé le nom.</li></ul>
<p>Le poète savant reparaît : comme dans <em>Les Métamorphoses</em>, il explique le monde par une légende. Mais ici la légende dit la sauvagerie du lieu où il vit.</p>` },
      { t: "guide", titre: "Vers 1-2 : des villes grecques, ici ?", cas: "I I X I N N X N I G A G",
        vocab: ["barbaria, ae, f : la barbarie, le pays barbare", "Graius, a, um : grec", "hic : ici", "igitur : donc", "inhumanus, a, um : inhumain, sauvage", "inter + accusatif : parmi", "nomen, inis, n : le nom"],
        la: "Hic quoque sunt igitur Graiae (quis crederet?) urbes / inter inhumanae nomina barbariae;",
        pas: [
          K("Où est le verbe principal ?", [2], "verbe", `${la("sunt")} : ici, « il y a ».`),
          K("Touche les deux mots du sujet. Une parenthèse les sépare.", [4, 7], "sujet", `${la("Graiae… urbes")} : « des villes grecques ».`),
          K("Touche les deux mots de la parenthèse.", [5, 6], null, `${la("quis crederet ?")} : subjonctif imparfait, « qui le croirait ? ».`),
          K("Second vers : touche la préposition et le nom qu'elle commande.", [8, 10], "complément de lieu", `${la("inter… nomina")} : « parmi des noms ».`),
          K(`Touche le complément du nom ${la("nomina")}. Deux mots séparés.`, [9, 11], "complément du nom", `${la("inhumanae… barbariae")} : génitif, « d'une barbarie inhumaine ».`)
        ],
        construction: "Hic quoque igitur sunt urbes Graiae (quis crederet ?) inter nomina inhumanae barbariae ;",
        fr: "Ici aussi, donc, il y a des villes grecques (qui le croirait ?), parmi les noms d'une barbarie sauvage ;" },
      { t: "guide", titre: "Vers 33-34 : l'origine du nom", cas: "I N X N N I X I B A N G X G",
        vocab: ["conseco, as, are, consecui, consectum : couper en morceaux", "dico, is, ere, dixi, dictum : dire, nommer", "fero, fers, ferre : porter ; fertur : on rapporte que", "frater, tris, m : le frère", "inde : de là", "membrum, i, n : le membre", "soror, oris, f : la sœur"],
        la: "Inde Tomis dictus locus hic, quia fertur in illo / membra soror fratris consecuisse sui.",
        pas: [
          Q(`${la("dictus")} : quel mot est sous-entendu ?`, [`${la("est")} : « a été appelé »`, `${la("sunt")}`, `${la("erit")}`], `${la("dictus (est)")} : parfait passif de ${la("dico")}.`),
          K("Touche les deux mots du sujet.", [3, 4], "sujet", `${la("locus hic")} : « ce lieu ».`),
          Q(`Quelle est la fonction de ${la("Tomis")} ?`, ["Attribut du sujet, au nominatif : « a été appelé Tomes »", "COD", "Complément de lieu"], "Avec un verbe « appeler » au passif, le nom donné est au nominatif."),
          K("Dans la subordonnée de cause, où est le verbe conjugué ?", [6], "verbe", `${la("fertur")} : passif de ${la("fero")}, « on rapporte que ».`),
          K(`Touche le sujet de ${la("fertur")} et l'infinitif qui en dépend.`, [10, 12], null, `${la("soror fertur… consecuisse")} : mot à mot « une sœur est dite avoir coupé ». Le sujet reste au nominatif.`),
          K(`Touche le COD de ${la("consecuisse")}.`, [9], "COD", `${la("membra")} : « les membres ».`),
          K(`Touche le complément du nom ${la("membra")}. Deux mots séparés.`, [11, 13], "complément du nom", `${la("fratris… sui")} : « de son propre frère ».`)
        ],
        construction: "Inde locus hic Tomis dictus (est), quia soror in illo fertur membra fratris sui consecuisse.",
        fr: "De là vient que ce lieu fut appelé Tomes : c'est là, dit-on, qu'une sœur découpa les membres de son frère." }
    ]
  },
  {
    id: "c38", borne: "III, 10", titre: "Élégie 10 : l'hiver à Tomes", resume: "Le Danube gelé, le vin que l'on casse, l'ennemi qui passe sur la glace (v. 1-4 et 23-24)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>78 vers.</strong> Si quelqu'un, à Rome, se souvient encore de lui, qu'il sache où il vit. C'est le grand tableau du recueil.</p>
<ul><li>Autour de lui, des Sarmates, des Besses, des Gètes. Tant que l'air est tiède, le Danube les tient à distance.</li>
<li>Puis vient l'hiver : la neige ne fond plus, les barbes blanchissent de givre, le vin gèle dans les jarres, le fleuve et la mer se figent.</li>
<li>Sur la glace, les cavaliers ennemis passent, pillent, incendient, emmènent les paysans.</li>
<li>Ici, ni vigne ni verger : une terre nue, où un homme heureux ne devrait jamais venir.</li></ul>
<p><strong>Notre passage</strong> : l'adresse initiale, puis l'image du vin gelé.</p>` },
      { t: "guide", titre: "Vers 1-2 : « Si quelqu'un se souvient »", cas: "I N I I X G G I X I B N I B N",
        vocab: ["adhuc : encore", "adimo, is, ere, ademi, ademptum : enlever", "istic : là-bas (où tu es)", "memini, isse : se souvenir de (+ génitif)", "sine + ablatif : sans", "supersum, es, esse : rester, survivre", "Vrbs, Vrbis, f : la Ville, Rome"],
        la: "Si quis adhuc istic meminit Nasonis adempti / et superest sine me nomen in Vrbe meum,",
        pas: [
          K("Touche les deux verbes conjugués.", [4, 8], null, `${la("meminit")} et ${la("superest")}, tous deux dans la subordonnée introduite par ${la("si")}.`),
          K(`Touche le sujet de ${la("meminit")}.`, [1], "sujet", `${la("quis")} : après ${la("si")}, ${la("quis")} vaut ${la("aliquis")}, « quelqu'un ».`),
          K(`${la("memini")} se construit avec le génitif. Touche les deux mots.`, [5, 6], "complément", `${la("Nasonis adempti")} : « de Nason qui a été enlevé ». Le participe se dit aussi de ceux que la mort emporte.`),
          K(`Second vers : touche les deux mots du sujet de ${la("superest")}. Ils sont séparés.`, [11, 14], "sujet", `${la("nomen… meum")} : « mon nom ».`),
          K("Touche les deux compléments introduits par une préposition.", [9, 10, 12, 13], "complément", `${la("sine me")}, « sans moi », et ${la("in Vrbe")}, « dans la Ville ». Le nom est resté ; l'homme a disparu.`, "Deux prépositions, chacune suivie d'un ablatif.")
        ],
        construction: "Si quis istic adhuc meminit Nasonis adempti, et (si) nomen meum sine me in Vrbe superest,",
        fr: "Si quelqu'un, là-bas, se souvient encore de Nason qu'on lui a enlevé, et si mon nom survit sans moi dans la Ville," },
      { t: "guide", titre: "Vers 3-4 : « Au cœur de la barbarie »", cas: "A D I D A A X I B X B",
        vocab: ["aequor, oris, n : la mer", "medius, a, um : qui est au milieu", "scio, is, ire : savoir", "stella, ae, f : l'étoile", "suppono, is, ere, supposui, suppositum : placer sous (+ datif)", "tango, is, ere : toucher"],
        la: "subpositum stellis nunquam tangentibus aequor / me sciat in media uiuere barbaria.",
        pas: [
          K("Où est le verbe principal ?", [6], "verbe", `${la("sciat")} : subjonctif présent, « qu'il sache ».`),
          K(`Après ${la("sciat")}, une proposition infinitive. Touche son sujet et son verbe.`, [5, 9], null, `${la("me… uiuere")} : « que je vis ». Sujet à l'accusatif, verbe à l'infinitif.`),
          K("Touche les trois mots du complément de lieu. Ils sont séparés.", [7, 8, 10], "complément de lieu", `${la("in media… barbaria")} : « au milieu de la barbarie ». ${la("medius")} s'accorde avec le nom.`),
          Q(`Premier vers : ${la("subpositum")} est à l'accusatif. Avec quel mot s'accorde-t-il ?`, [`${la("me")} : « moi qui suis placé sous… »`, `${la("aequor")}`, `${la("stellis")}`], `Participe apposé au sujet de l'infinitive.`),
          K(`Touche les deux mots au datif qui dépendent de ${la("subpositum")}.`, [1, 3], "COI", `${la("stellis… tangentibus")} : « sous des étoiles qui touchent ».`),
          K(`Touche le COD du participe ${la("tangentibus")}.`, [4], "COD", `${la("aequor")} : « la mer ». Les étoiles du Nord ne se couchent jamais : elles ne plongent pas dans la mer.`)
        ],
        construction: "sciat me, subpositum stellis aequor nunquam tangentibus, in media barbaria uiuere.",
        fr: "qu'il sache que je vis au cœur de la barbarie, sous des étoiles qui ne touchent jamais la mer." },
      { t: "version", titre: "À toi : vers 23-24",
        vocab: ["bibo, is, ere : boire", "consisto, is, ere : se tenir debout", "forma, ae, f : la forme", "frustum, i, n : le morceau", "haurio, is, ire, hausi, haustum : puiser", "merum, i, n : le vin pur", "nudus, a, um : nu", "servo, as, are : conserver", "testa, ae, f : la jarre de terre cuite", "vinum, i, n : le vin"],
        phrases: [
          { la: "Nudaque consistunt formam seruantia testae", fr: "Le vin se tient debout, à nu, gardant la forme de la jarre ;", aide: `Le sujet, ${la("uina")}, est rejeté au vers suivant. ${la("nuda")} et ${la("seruantia")} s'accordent avec lui.` },
          { la: "uina, nec hausta meri, sed data frusta bibunt.", fr: "on ne boit pas du vin que l'on puise, mais des morceaux que l'on distribue.", note: `Mot à mot : « ils boivent non des gorgées puisées de vin pur, mais des morceaux donnés ».` }
        ] }
    ]
  },
  {
    id: "c39", borne: "III, 11", titre: "Élégie 11 : à un ennemi acharné", resume: "Contre celui qui piétine un homme à terre (v. 7-10 et 25-26)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>74 vers.</strong> Quelqu'un, à Rome, s'acharne sur l'exilé et l'accuse encore. Ovide ne le nomme pas.</p>
<ul><li>Il faut être né d'un rocher pour insulter un tel malheur. Que manque-t-il à sa peine ?</li>
<li>Abattre ce qui tient debout est un exploit ; fouler ce qui est tombé est à la portée d'un lâche.</li>
<li>Il n'est plus qu'une ombre de lui-même, comme Hector traîné derrière un char n'était plus Hector.</li>
<li>Même les tyrans les plus cruels de la légende seraient émus. Que son ennemi cesse de rouvrir ses blessures.</li></ul>
<p><strong>Notre passage</strong> : le tableau de sa misère, puis le cri des vers 25-26.</p>` },
      { t: "guide", titre: "Vers 7-8 : sous le regard de l'Ourse", cas: "N A N I N N G I B B N N X",
        vocab: ["barbarus, a, um : barbare", "Boreas, ae, m : Borée, le vent du nord", "inhospitus, a, um : inhospitalier", "litus, oris, n : le rivage", "Maenalis, idis : du Ménale (montagne d'Arcadie, patrie de Callisto)", "Pontus, i, m : le Pont, la mer Noire", "tellus, uris, f : la terre", "ursa, ae, f : l'ourse"],
        la: "Barbara me tellus et inhospita litora Ponti / cumque suo Borea Maenalis ursa uidet.",
        pas: [
          K("Où est le verbe ? Il n'y en a qu'un pour tout le distique.", [12], "verbe", `${la("uidet")} : au singulier, accordé avec le sujet le plus proche.`),
          K("Touche le COD.", [1], "COD", `${la("me")} : placé au milieu de ce qui l'entoure.`),
          K("Premier sujet : touche les deux mots.", [0, 2], "sujet", `${la("Barbara… tellus")} : « une terre barbare ». ${la("tellus")} est féminin.`),
          K("Deuxième sujet : touche les deux mots, puis son complément au génitif.", [4, 5, 6], "sujet", `${la("inhospita litora Ponti")} : « les rivages inhospitaliers du Pont ».`),
          K("Troisième sujet, au second vers : touche les deux mots.", [10, 11], "sujet", `${la("Maenalis ursa")} : « l'Ourse du Ménale », la Grande Ourse, c'est-à-dire le Nord.`),
          K("Touche le complément d'accompagnement. Trois mots.", [7, 8, 9], "complément", `${la("cum… suo Borea")} : « avec son Borée ». Le ${la("-que")} relie ce troisième sujet aux deux premiers.`)
        ],
        construction: "Barbara tellus et inhospita litora Ponti et Maenalis ursa cum suo Borea me uidet.",
        fr: "Une terre barbare, les rivages inhospitaliers du Pont et l'Ourse du Ménale, avec son Borée, ont les yeux sur moi." },
      { t: "guide", titre: "Vers 25-26 : « Je ne suis plus celui que j'étais »", cas: "I X N N X I A X A I A B A A X",
        vocab: ["bustum, i, n : le bûcher, le tombeau", "cinis, eris, m : la cendre", "inanis, e : vide, vain", "peto, is, ere : attaquer", "protero, is, ere : piétiner", "quid : pourquoi", "saxum, i, n : la pierre", "umbra, ae, f : l'ombre"],
        la: "Non sum ego qui fueram. Quid inanem proteris umbram? / Quid cinerem saxis bustaque nostra petis?",
        pas: [
          K("Première phrase : touche les deux formes du verbe « être ».", [1, 4], null, `${la("sum")} : présent ; ${la("fueram")} : plus-que-parfait, « j'avais été ».`),
          Q(`${la("qui fueram")} : quelle est la fonction de la relative ?`, [`Attribut du sujet ${la("ego")} : « celui que j'avais été »`, "COD", "Complément de temps"], `L'antécédent est sous-entendu : « je ne suis pas (celui) que j'avais été ».`),
          K(`Deuxième phrase : touche le verbe et les deux mots de son COD.`, [6, 7, 8], null, `${la("inanem proteris umbram")} : « tu piétines une ombre vaine ». L'adjectif et le nom encadrent le verbe.`),
          Q(`${la("Quid")}, en tête de phrase, signifie ici…`, ["« Pourquoi »", "« Quoi »", "« Qui »"], "Accusatif neutre employé comme adverbe interrogatif."),
          K(`Second vers : touche les COD de ${la("petis")}. Trois mots.`, [10, 12, 13], "COD", `${la("cinerem")} et ${la("busta nostra")} : « ma cendre et mon tombeau ». Il se décrit comme un mort.`),
          K("Touche le complément de moyen.", [11], "complément de moyen", `${la("saxis")} : ablatif, « à coups de pierres ».`)
        ],
        construction: "Non sum ego qui fueram. Quid proteris inanem umbram ? Quid saxis petis cinerem et busta nostra ?",
        fr: "Je ne suis plus celui que j'étais. Pourquoi piétiner une ombre vaine ? Pourquoi t'en prendre à coups de pierres à ma cendre et à mon tombeau ?" },
      { t: "version", titre: "À toi : vers 9-10",
        vocab: ["commercium, ii, n : l'échange", "ferus, a, um : sauvage", "gens, gentis, f : le peuple", "lingua, ae, f : la langue", "metus, us, m : la crainte", "plenus, a, um : plein de (+ génitif)", "sollicitus, a, um : inquiet"],
        phrases: [
          { la: "Nulla mihi cum gente fera commercia linguae ;", fr: "Je n'ai aucun échange de paroles avec ce peuple sauvage ;", aide: `Le verbe ${la("sunt")} est sous-entendu ; ${la("mihi")} : datif de possession.` },
          { la: "omnia solliciti sunt loca plena metus ;", fr: "tous les lieux sont pleins d'une crainte inquiète.", note: `${la("solliciti… metus")} : génitif, complément de ${la("plena")}.` }
        ] }
    ]
  },
  {
    id: "c40", borne: "III, 12", titre: "Élégie 12 : le printemps… des autres", resume: "Le printemps revient, mais c'est à Rome qu'il se fête (v. 1-2, 5-6 et 25-26)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>54 vers.</strong> L'hiver s'achève : c'est le premier printemps d'Ovide à Tomes.</p>
<ul><li>Il décrit le printemps tel qu'il est ailleurs : les violettes que cueillent les enfants, les prés en fleurs, l'hirondelle, la vigne qui bourgeonne. Mais ici, ni vigne ni arbre.</li>
<li>À Rome, c'est la saison des jeux, des exercices au Champ de Mars, du théâtre.</li>
<li>Ici, le printemps n'est que la neige qui fond. Des navires viendront peut-être : il guettera un marin qui parle latin et lui donne des nouvelles.</li></ul>
<p><strong>Notre passage</strong> : le premier distique, les violettes, puis l'exclamation centrale.</p>` },
      { t: "guide", titre: "Vers 1-2 : « Déjà les Zéphyrs »", cas: "A I N X B B N B X N N",
        vocab: ["annus, i, m : l'année", "antiquus, a, um : ancien, précédent", "frigus, oris, n : le froid", "hiems, hiemis, f : l'hiver", "Maeotis, idis : méotide (du lac Méotide, la mer d'Azov)", "minuo, is, ere : diminuer", "perago, is, ere, peregi, peractum : achever", "videor, eris, eri, visus sum : sembler", "Zephyrus, i, m : le Zéphyr, vent d'ouest"],
        la: "Frigora iam Zephyri minuunt, annoque peracto / longior antiquis uisa Maeotis hiems,",
        pas: [
          K("Premier vers : touche le verbe, son sujet et son COD.", [0, 2, 3], null, `${la("Zephyri minuunt frigora")} : « les Zéphyrs diminuent le froid ». ${la("frigora")} est un neutre pluriel à l'accusatif.`, "Le sujet est un nominatif masculin pluriel."),
          K("Touche l'ablatif absolu.", [4, 5], "ablatif absolu", `${la("anno peracto")} : « l'année étant achevée ». Un an s'est écoulé depuis son arrivée.`),
          Q(`Second vers : ${la("uisa")} est le participe de ${la("uideor")}. Quel mot est sous-entendu ?`, [`${la("est")} : « a semblé »`, `${la("sunt")}`, `${la("erat")}`], `${la("uisa (est)")} : parfait d'un verbe déponent.`),
          K(`Touche les deux mots du sujet de ${la("uisa est")}.`, [9, 10], "sujet", `${la("Maeotis hiems")} : « l'hiver méotide », l'hiver de ces contrées.`),
          Q(`${la("longior antiquis")} : quelle est la fonction de ${la("antiquis")} ?`, ["Ablatif de comparaison : « plus long que les précédents »", "Datif", "Complément de lieu"], `${la("longior")} : comparatif, attribut du sujet. Sous-entendu : ${la("hiemibus")}.`)
        ],
        construction: "Iam Zephyri frigora minuunt et, anno peracto, Maeotis hiems longior antiquis uisa (est),",
        fr: "Déjà les Zéphyrs adoucissent le froid et, l'année révolue, l'hiver méotide m'a paru plus long que tous ceux d'autrefois," },
      { t: "guide", titre: "Vers 25-26 : « Heureux qui jouit de la Ville »", cas: "I I I I I X X A I B D X B X",
        vocab: ["beatus, a, um : heureux", "fruor, eris, i : jouir de (+ ablatif)", "interdico, is, ere, interdixi, interdictum : interdire", "licet : il est permis (+ datif)", "numero, as, are : compter", "quater : quatre fois", "quotiens : autant de fois que"],
        la: "O quater et quotiens non est numerare beatum, / non interdicta cui licet Vrbe frui!",
        pas: [
          K("Touche l'adjectif qui porte l'exclamation.", [7], null, `${la("beatum")} : accusatif d'exclamation. « Heureux… ! »`),
          Q(`${la("quotiens non est numerare")} : comment comprendre ${la("est")} + infinitif ?`, ["« Il est possible de » : « autant de fois qu'on ne peut le compter »", "« Il est en train de »", "« Il doit »"], `${la("non est numerare")} : « il n'est pas possible de compter ».`),
          K("Second vers : touche le relatif et le verbe dont il dépend.", [10, 11], null, `${la("cui licet")} : « à qui il est permis ». L'antécédent sous-entendu est « celui ».`),
          K(`Touche l'infinitif sujet de ${la("licet")}.`, [13], null, `${la("frui")} : infinitif du déponent ${la("fruor")}, « jouir de ».`),
          K(`${la("fruor")} se construit avec l'ablatif. Touche les deux mots, séparés.`, [9, 12], "complément", `${la("interdicta… Vrbe")} : « de la Ville interdite ». Avec ${la("non")} : « de la Ville, sans qu'elle lui soit interdite ».`)
        ],
        construction: "O beatum quater et quotiens numerare non est, cui licet frui Vrbe non interdicta !",
        fr: "Ô quatre fois heureux, heureux plus de fois qu'on ne saurait le compter, celui à qui il est permis de jouir de la Ville sans qu'elle lui soit interdite !" },
      { t: "version", titre: "À toi : vers 5-6",
        vocab: ["hilaris, e : joyeux", "lego, is, ere : cueillir", "nascor, eris, i, natus sum : naître", "rusticus, a, um : de la campagne, rustique", "sero, is, ere : semer", "viola, ae, f : la violette"],
        phrases: [
          { la: "Iam uiolam puerique legunt hilaresque puellae", fr: "Déjà les garçons et les jeunes filles joyeuses cueillent la violette,", aide: `${la("lego")} a ici son premier sens : « cueillir ».` },
          { la: "rustica quae nullo nata serente uenit,", fr: "qui pousse dans la campagne sans que personne l'ait semée,", note: `${la("nullo… serente")} : ablatif absolu, « personne ne la semant ».` }
        ] }
    ]
  },
  {
    id: "c41", borne: "III, 13", titre: "Élégie 13 : un anniversaire en exil", resume: "Le poète accueille son jour de naissance par des reproches (v. 1-6)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>28 vers.</strong> Le jour anniversaire d'Ovide (son <i class="la">natalis</i>, que les Romains honoraient comme un dieu) revient pour la première fois à Tomes. Le poète s'adresse à lui.</p>
<ul><li>Pourquoi venir ? Il aurait mieux fait de l'abandonner aux portes de Rome, comme ses amis.</li>
<li>Attend-il les honneurs d'usage : la toge blanche, l'autel couronné de fleurs, l'encens, le gâteau ? Le temps n'est pas à la fête.</li>
<li>Ce qui lui convient, c'est un autel funèbre. Qu'il ne revienne plus tant que le Pont le retiendra.</li></ul>
<p><strong>Notre passage</strong> : les six premiers vers.</p>` },
      { t: "guide", titre: "Vers 1-2 : « Le voici, bien inutile »", cas: "I N I I X N X I A N A N X",
        vocab: ["adsum, ades, adesse : être présent, arriver", "ecce : voici que", "enim : en effet", "gigno, is, ere : engendrer (gigni : naître)", "natalis, is, m : le jour anniversaire", "supervacuus, a, um : superflu, inutile", "tempus, oris, n : le moment, la date", "utilis, e : utile"],
        la: "Ecce superuacuus (quid enim fuit utile gigni?) / ad sua natalis tempora noster adest.",
        pas: [
          K("Où est le verbe de la phrase principale ?", [12], "verbe", `${la("adest")} : « il est là ».`),
          K("Touche les deux mots du sujet. Ils sont au second vers.", [9, 11], "sujet", `${la("natalis… noster")} : « mon anniversaire ». Pluriel poétique.`),
          Q(`${la("superuacuus")} est au nominatif. Quelle est sa fonction ?`, [`Il est apposé au sujet ${la("natalis")} : « bien inutile »`, "C'est le sujet", "C'est un COD"], "Rejeté en tête du distique, il donne le ton."),
          K("Touche les trois mots du complément de temps.", [7, 8, 10], "complément de temps", `${la("ad sua… tempora")} : « à sa date ».`),
          K("Dans la parenthèse, touche le verbe conjugué et l'infinitif sujet.", [4, 6], null, `${la("fuit… gigni")} : « naître a été ». ${la("gigni")} est un infinitif passif.`),
          Q(`${la("quid… utile")} : comment traduire ?`, ["« En quoi (m')a-t-il été utile de naître ? »", "« Qui a été utile ? »", "« Qu'est-ce qui est né d'utile ? »"], `${la("quid")} : « en quoi ». ${la("utile")} : attribut au neutre.`)
        ],
        construction: "Ecce natalis noster, superuacuus (quid enim utile fuit gigni ?), ad tempora sua adest.",
        fr: "Voici que mon anniversaire, bien inutile (à quoi m'a-t-il servi de naître ?), revient à sa date." },
      { t: "guide", titre: "Vers 3-4 : « Cruel, pourquoi venais-tu ? »", cas: "V I I A X G A X D X A",
        vocab: ["debeo, es, ere, debui : devoir", "durus, a, um : dur, cruel", "exul, exulis, m : l'exilé", "impono, is, ere, imposui : imposer, mettre à (+ datif)", "miser, era, erum : malheureux", "modus, i, m : la limite, le terme"],
        la: "Dure, quid ad miseros ueniebas exulis annos? / Debueras illis imposuisse modum.",
        pas: [
          K("À qui le poète s'adresse-t-il ? Touche le mot.", [0], "apostrophe", `${la("Dure")} : vocatif. Il parle à son jour de naissance.`),
          K("Premier vers : où est le verbe ?", [4], "verbe", `${la("ueniebas")} : imparfait, « tu venais ».`),
          K("Touche les trois mots du complément introduit par la préposition. Ils sont séparés.", [2, 3, 6], "complément", `${la("ad miseros… annos")} : « vers les malheureuses années », « t'ajouter aux tristes années ».`),
          K(`Touche le complément du nom ${la("annos")}.`, [5], "complément du nom", `${la("exulis")} : « d'un exilé ».`),
          K("Second vers : touche le verbe conjugué et l'infinitif.", [7, 9], null, `${la("Debueras… imposuisse")} : plus-que-parfait, « tu aurais dû mettre ». Le latin emploie l'indicatif.`),
          K(`Touche le COD de ${la("imposuisse")}, puis le datif.`, [8, 10], null, `${la("modum")} : « un terme » ; ${la("illis")} : « à elles », aux années.`)
        ],
        construction: "Dure, quid ueniebas ad miseros annos exulis ? Debueras modum illis imposuisse.",
        fr: "Cruel, pourquoi venais-tu t'ajouter aux tristes années d'un exilé ? Tu aurais dû y mettre un terme." },
      { t: "version", titre: "À toi : vers 5-6",
        vocab: ["cura, ae, f : le souci", "insum, ines, inesse : être dans (+ datif)", "pudor, oris, m : la pudeur, le sens de l'honneur", "sequor, eris, i : suivre", "ullus, a, um : quelque, aucun", "ultra + accusatif : au-delà de"],
        phrases: [
          { la: "Si tibi cura mei, uel si pudor ullus inesset,", fr: "Si tu avais eu quelque souci de moi, ou la moindre pudeur,", aide: `${la("mei")} : génitif de ${la("ego")}. ${la("inesset")} : subjonctif imparfait, irréel.` },
          { la: "non ultra patriam me sequerere meam,", fr: "tu ne me suivrais pas au-delà de ma patrie.", note: `${la("sequerere")} = ${la("sequereris")} : subjonctif imparfait du déponent ${la("sequor")}.` }
        ] }
    ]
  },
  {
    id: "c42", borne: "III, 14", titre: "Élégie 14 : épilogue, à l'ami qui garde ses livres", resume: "Protège mon œuvre, et pardonne à ce livre né chez les barbares (v. 1-2 et 47-50)",
    etapes: [
      { t: "lecon", titre: "L'élégie en bref",
        texte: `<p><strong>52 vers.</strong> Le livre se referme sur une lettre à un ami lettré, protecteur des poètes, qui veille à Rome sur l'œuvre d'Ovide.</p>
<ul><li>L'homme est exilé, pas ses livres : qu'on leur garde une place dans la Ville. Ils sont ses enfants, nés de lui seul.</li>
<li>Il recommande aussi <em>Les Métamorphoses</em>, privées de la dernière main.</li>
<li>Que le lecteur soit indulgent pour ce recueil : il a été écrit sans livres, sans auditeur, parmi des gens qui ne comprennent pas le latin.</li>
<li>Le poète craint d'avoir désappris sa langue.</li></ul>
<p><strong>Notre passage</strong> : l'apostrophe initiale, puis l'aveu final.</p>` },
      { t: "guide", titre: "Vers 1-2 : « Toi, l'ami de mon talent »", cas: "V I V G V G A X D I V D",
        vocab: ["antistes, itis, m : le prêtre, le protecteur", "cultor, oris, m : celui qui honore, qui cultive", "doctus, a, um : savant", "facio, is, ere : faire (quid facis ? : que deviens-tu ?)", "ingenium, ii, n : le talent", "sanctus, a, um : vénérable", "semper : toujours"],
        la: "Cultor et antistes doctorum sancte uirorum, / quid facis, ingenio semper amice meo?",
        pas: [
          K("Le premier vers est une longue apostrophe. Touche les trois mots au vocatif.", [0, 2, 4], "apostrophe", `${la("Cultor et antistes… sancte")} : « toi qui honores et protèges…, homme vénérable ».`, `Deux noms reliés par ${la("et")}, et un adjectif en ${la("-e")}.`),
          K("Touche le complément de ces deux noms. Deux mots séparés.", [3, 5], "complément du nom", `${la("doctorum… uirorum")} : génitif pluriel, « des hommes de savoir ».`),
          K("Second vers : touche le verbe et son COD.", [6, 7], null, `${la("quid facis ?")} : mot à mot « que fais-tu ? », c'est-à-dire « que deviens-tu ? ».`),
          K("Touche le dernier vocatif.", [10], "apostrophe", `${la("amice")} : « ami ».`),
          K(`Touche les deux mots au datif qui complètent ${la("amice")}. Ils sont séparés.`, [8, 11], "COI", `${la("ingenio… meo")} : « de mon talent ». L'ami n'aime pas seulement l'homme, mais le poète.`)
        ],
        construction: "Cultor et antistes sancte doctorum uirorum, quid facis, semper amice ingenio meo ?",
        fr: "Toi qui honores et protèges les hommes de savoir, homme vénérable, que deviens-tu, toi l'ami de toujours de mon talent ?" },
      { t: "guide", titre: "Vers 47-48 : « Je pourrais écrire en gète »", cas: "B B I X B I X B X X B",
        vocab: ["circumsono, as, are : faire retentir autour ; au passif, être assourdi de", "fere : presque", "Geticus, a, um : gète", "modus, i, m : la mesure, le rythme (au pluriel : les vers)", "os, oris, n : la bouche, le langage", "Scythicus, a, um : scythe", "Threicius, a, um : thrace", "videor, eris, eri : sembler"],
        la: "Threicio Scythicoque fere circumsonor ore / et uideor Geticis scribere posse modis.",
        pas: [
          K("Touche les deux verbes conjugués.", [3, 6], null, `${la("circumsonor")} : présent passif, 1re personne ; ${la("uideor")} : « il me semble que je… ».`),
          K(`Premier vers : touche le complément de ${la("circumsonor")}. Trois mots.`, [0, 1, 4], "complément de moyen", `${la("Threicio Scythicoque… ore")} : « par une bouche thrace et scythe », « de parlers thraces et scythes ».`),
          K(`Second vers : touche les deux infinitifs qui dépendent de ${la("uideor")}.`, [8, 9], null, `${la("uideor… posse scribere")} : « il me semble que je pourrais écrire ».`),
          K("Touche le complément de manière. Deux mots séparés.", [7, 10], "complément de manière", `${la("Geticis… modis")} : « en vers gètes ».`),
          Q("Quel effet produit ce distique à la fin du livre ?", ["L'ironie amère : le plus grand poète latin se voit devenir un poète barbare", "La fierté d'avoir appris une langue", "L'indifférence"], "L'exil menace jusqu'à la langue, c'est-à-dire l'identité même du poète.")
        ],
        construction: "Fere circumsonor ore Threicio Scythicoque, et uideor posse scribere modis Geticis.",
        fr: "Je n'entends presque autour de moi que des parlers thraces et scythes, et il me semble que je pourrais écrire en vers gètes." },
      { t: "version", titre: "À toi : vers 49-50",
        vocab: ["immisceo, es, ere, immiscui, immixtum : mêler à (+ datif)", "Ponticus, a, um : du Pont", "scriptum, i, n : l'écrit", "timeo, es, ere : craindre", "verbum, i, n : le mot"],
        phrases: [
          { la: "Crede mihi, timeo ne sint inmixta Latinis", fr: "Crois-moi, je crains que ne se soient mêlés aux mots latins", aide: `${la("timeo ne")} + subjonctif : « je crains que ». Le sujet, ${la("Pontica uerba")}, est au vers suivant.` },
          { la: "inque meis scriptis Pontica uerba legas.", fr: "des mots du Pont, et que tu ne les lises dans mes écrits.", note: `${la("legas")} dépend lui aussi de ${la("timeo ne")}.` }
        ] }
    ]
  }]
}];

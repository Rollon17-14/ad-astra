/* CONTENU — Partie 2 (chapitres V à VIII), d'après les cours 5 à 8. Format décrit en tête de contenu1.js. */
var PARTIE2 = [{
  id: "p2", titre: "Construire la phrase", sous: "Le présent, les compléments circonstanciels, l'adjectif, l'imparfait et le futur",
  chapitres: [
  {
    id: "c5", num: 5, titre: "Le présent actif et passif, le verbe sum", resume: "Conjuguer les cinq modèles au présent, à l'actif et au passif, et connaître sum",
    etapes: [
      { t: "lecon", titre: "Le présent de l'indicatif actif",
        texte: `<p>Le présent exprime une action qui se déroule au moment où l'on parle, une habitude ou une vérité générale.</p>
<p>On le forme avec le <strong>radical du présent</strong> et les <strong>désinences personnelles actives</strong> :</p>
<blockquote class="latin">-o, -s, -t, -mus, -tis, -nt</blockquote>
${tConj("present", "actif")}
<aside class="attention"><strong>La voyelle de liaison.</strong> Pour <i class="la">lego</i> et <i class="la">capio</i>, une voyelle <i class="la">-i-</i> s'intercale (<i class="la">leg-i-s</i>). À la 3e personne du pluriel, on trouve <i class="la">-u-</i> : <i class="la">leg-u-nt</i>, <i class="la">capi-u-nt</i>, <i class="la">audi-u-nt</i>.</aside>` },
      { t: "saisie", titre: "Conjuguer au présent actif", intro: "Écris la forme demandée. Pense au verbe modèle de la même conjugaison.",
        items: [
          { q: "<i class=\"la\">laudo, as, are, avi, atum</i> (louer) : 2e personne du singulier", r: "laudas" },
          { q: "<i class=\"la\">laudo</i> : 3e personne du pluriel", r: "laudant" },
          { q: "<i class=\"la\">habeo, es, ere, habui, habitum</i> (avoir) : 1re personne du pluriel", r: "habemus" },
          { q: "<i class=\"la\">mitto, is, ere, misi, missum</i> (envoyer) : 3e personne du singulier", r: "mittit" },
          { q: "<i class=\"la\">mitto</i> : 3e personne du pluriel", r: "mittunt" },
          { q: "<i class=\"la\">facio, is, ere, feci, factum</i> (faire) : 3e personne du pluriel", r: "faciunt" },
          { q: "<i class=\"la\">venio, is, ire, veni, ventum</i> (venir) : 2e personne du pluriel", r: "venitis" }
        ] },
      { t: "lecon", titre: "Le présent de l'indicatif passif",
        texte: `<p>À la voix passive, le sujet <strong>subit</strong> l'action : <i class="la">amor</i>, « je suis aimé(e) ». On garde le même radical, et on change de désinences :</p>
<blockquote class="latin">-or, -ris, -tur, -mur, -mini, -ntur</blockquote>
${tConj("present", "passif")}
<p>Remarque la 2e personne du singulier de <i class="la">lego</i> et <i class="la">capio</i> : la voyelle de liaison devient <i class="la">-e-</i> (<i class="la">leg-e-ris, cap-e-ris</i>).</p>
<aside class="retenir"><strong>Le complément d'agent.</strong> Celui qui fait l'action se met à l'ablatif, précédé de <i class="la">a</i> ou <i class="la">ab</i> s'il s'agit d'une personne : <i class="la">Pueri <b>a magistro</b> monentur</i>, « les enfants sont avertis par le maître ».</aside>` },
      { t: "tri", titre: "Actif ou passif ?", q: "Classe chaque forme selon sa voix.",
        categories: ["Actif", "Passif"],
        items: [
          { txt: "<i class=\"la\">amatur</i>", cat: "Passif", expl: "il est aimé" }, { txt: "<i class=\"la\">monent</i>", cat: "Actif", expl: "ils avertissent" },
          { txt: "<i class=\"la\">legitur</i>", cat: "Passif", expl: "il est lu" }, { txt: "<i class=\"la\">audimus</i>", cat: "Actif", expl: "nous entendons" },
          { txt: "<i class=\"la\">audimur</i>", cat: "Passif", expl: "nous sommes entendus" }, { txt: "<i class=\"la\">capimini</i>", cat: "Passif", expl: "vous êtes pris" },
          { txt: "<i class=\"la\">capitis</i>", cat: "Actif", expl: "vous prenez" }, { txt: "<i class=\"la\">moneris</i>", cat: "Passif", expl: "tu es averti" },
          { txt: "<i class=\"la\">legunt</i>", cat: "Actif", expl: "ils lisent" }, { txt: "<i class=\"la\">amor</i>", cat: "Passif", expl: "je suis aimé" }
        ] },
      { t: "saisie", titre: "De l'actif au passif", intro: "Mets chaque forme au passif, sans changer la personne.",
        items: [
          { q: "<i class=\"la\">amat</i> (il aime)", r: "amatur" }, { q: "<i class=\"la\">monent</i> (ils avertissent)", r: "monentur" },
          { q: "<i class=\"la\">legis</i> (tu lis)", r: "legeris" }, { q: "<i class=\"la\">capimus</i> (nous prenons)", r: "capimur" },
          { q: "<i class=\"la\">auditis</i> (vous entendez)", r: "audimini" }, { q: "<i class=\"la\">laudo</i> (je loue)", r: "laudor" }
        ] },
      { t: "lecon", titre: "Le verbe sum et ses composés",
        texte: `<p><i class="la">sum, es, esse, fui</i> (être) est le plus important des verbes irréguliers. Son présent s'apprend par cœur :</p>
<div class="tab-wrap"><table class="paradigme"><thead><tr><th>Personne</th><th>Forme</th><th>Traduction</th></tr></thead><tbody>
<tr><th>1re sg.</th><td class="la">sum</td><td>je suis</td></tr><tr><th>2e sg.</th><td class="la">es</td><td>tu es</td></tr><tr><th>3e sg.</th><td class="la">est</td><td>il, elle est</td></tr>
<tr><th>1re pl.</th><td class="la">sumus</td><td>nous sommes</td></tr><tr><th>2e pl.</th><td class="la">estis</td><td>vous êtes</td></tr><tr><th>3e pl.</th><td class="la">sunt</td><td>ils, elles sont</td></tr></tbody></table></div>
<p>Ses <strong>composés</strong> se conjuguent comme lui, précédés d'un préfixe :</p>
<ul><li><i class="la">adsum</i> : être présent (<i class="la">ades, adest…</i>) ; <i class="la">absum</i> : être absent (<i class="la">abes, abest…</i>) ; <i class="la">desum</i> : manquer ; <i class="la">insum</i> : être dans.</li>
<li><i class="la">possum, potes, posse, potui</i> : pouvoir. Le radical est <i class="la">pot-</i>, qui devient <i class="la">pos-</i> devant un <i class="la">s</i> : <i class="la">possum, potes, potest, possumus, potestis, possunt</i>.</li>
<li><i class="la">prosum, prodes, prodesse, profui</i> : être utile. Un <i class="la">-d-</i> s'intercale devant une voyelle : <i class="la">prosum, prodes, prodest, prosumus, prodestis, prosunt</i>.</li></ul>` },
      { t: "saisie", titre: "Sum et compagnie", intro: "Traduis en latin par une seule forme verbale.",
        items: [
          { q: "nous sommes", r: "sumus" }, { q: "ils sont", r: "sunt" }, { q: "vous êtes", r: "estis" }, { q: "tu peux", r: "potes" },
          { q: "ils peuvent", r: "possunt" }, { q: "il est absent", r: "abest" }, { q: "tu es utile", r: "prodes" }, { q: "nous sommes présents", r: "adsumus" }
        ] },
      { t: "quiz", titre: "Identifier et traduire",
        questions: [
          { q: "<i class=\"la\">monent</i>", choix: ["ils avertissent", "ils sont avertis", "il avertit"], bon: 0, expl: "3e personne du pluriel, actif." },
          { q: "<i class=\"la\">legitur</i>", choix: ["il est lu", "il lit", "ils sont lus"], bon: 0, expl: "3e personne du singulier, passif." },
          { q: "<i class=\"la\">potest</i>", choix: ["il peut", "vous pouvez", "il est présent"], bon: 0, expl: "<i class=\"la\">possum</i>, 3e personne du singulier." },
          { q: "<i class=\"la\">audimur</i>", choix: ["nous sommes entendus", "nous entendons", "vous êtes entendus"], bon: 0, expl: "1re personne du pluriel, passif : <i class=\"la\">-mur</i>." },
          { q: "<i class=\"la\">capimini</i>", choix: ["vous êtes pris", "vous prenez", "nous sommes pris"], bon: 0, expl: "2e personne du pluriel, passif : <i class=\"la\">-mini</i>." },
          { q: "<i class=\"la\">moneris</i>", choix: ["tu es averti", "tu avertis", "il est averti"], bon: 0, expl: "2e personne du singulier, passif : <i class=\"la\">-ris</i>." }
        ] },
      { t: "version", titre: "Phrases simples",
        vocab: ["amicus, i, m : l'ami", "bonus, a, um : bon", "consilium, ii, n : le conseil", "discipulus, i, m : l'élève", "fabula, ae, f : l'histoire, la fable", "liber, libri, m : le livre", "magister, tri, m : le maître", "meus, a, um : mon", "poeta, ae, m : le poète", "tuus, a, um : ton", "verbum, i, n : la parole"],
        phrases: [
          { la: "Puella rosam amat.", fr: "La jeune fille aime la rose." },
          { la: "Pueri a magistro monentur.", fr: "Les enfants sont avertis par le maître.", aide: "<i class=\"la\">a magistro</i> : complément d'agent." },
          { la: "Librum bonum legis.", fr: "Tu lis un bon livre." },
          { la: "Amici tui absunt.", fr: "Tes amis sont absents." },
          { la: "Verba mea auditis.", fr: "Vous entendez mes paroles.", aide: "<i class=\"la\">verba</i> : neutre pluriel." },
          { la: "Fabula a poeta legitur.", fr: "L'histoire est lue par le poète." },
          { la: "Consilium tuum prodest.", fr: "Ton conseil est utile." },
          { la: "Discipuli magistrum audiunt.", fr: "Les élèves écoutent le maître." }
        ] },
      { t: "version", titre: "Version : Romulus fonde Rome",
        vocab: ["altus, a, um : haut", "civis, is, m : le citoyen (cives : les citoyens)", "condo, is, ere, condidi, conditum : fonder", "deus, i, m : le dieu", "diligo, is, ere, dilexi, dilectum : chérir", "eos : eux, les (accusatif pluriel)", "geminus, i, m : le jumeau", "laudo, as, are, avi, atum : louer", "lupa, ae, f : la louve", "malus, a, um : mauvais", "moenia : les remparts (neutre pluriel)", "neco, as, are, avi, atum : tuer", "novus, a, um : nouveau", "postea : ensuite", "rego, is, ere, rexi, rectum : diriger", "rex : le roi", "servo, as, are, avi, atum : sauver", "urbem : la ville (accusatif singulier)", "video, es, ere, vidi, visum : voir", "vult : il veut"],
        phrases: [
          { la: "Romulus et Remus gemini sunt.", fr: "Romulus et Rémus sont jumeaux." },
          { la: "Amulius, rex malus, eos necare vult.", fr: "Amulius, un mauvais roi, veut les tuer." },
          { la: "Sed pueri a lupa servantur.", fr: "Mais les enfants sont sauvés par une louve." },
          { la: "Postea Romulus urbem Romam condit.", fr: "Ensuite Romulus fonde la ville de Rome." },
          { la: "Roma a Romulo amatur et regitur.", fr: "Rome est aimée et dirigée par Romulus." },
          { la: "Moenia alta videntur.", fr: "On voit de hauts remparts.", note: "Mot à mot : « de hauts remparts sont vus ». Le passif latin se rend souvent par « on »." },
          { la: "Cives Romani deos laudant et urbem novam diligunt.", fr: "Les citoyens romains louent les dieux et chérissent leur nouvelle ville." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Désinences actives : <i class="la">-o, -s, -t, -mus, -tis, -nt</i>.</li><li>Désinences passives : <i class="la">-or, -ris, -tur, -mur, -mini, -ntur</i>.</li>
<li>Complément d'agent : <i class="la">a, ab</i> + ablatif.</li><li><i class="la">sum, es, est, sumus, estis, sunt</i> ; <i class="la">possum, potes, potest, possumus, potestis, possunt</i>.</li></ul>
${tConj("present", "actif")}${tConj("present", "passif")}` }
    ]
  },
  {
    id: "c6", num: 6, titre: "Les compléments circonstanciels", resume: "Exprimer le moyen, la manière, la cause, le temps et le lieu, avec ou sans préposition",
    etapes: [
      { t: "lecon", titre: "L'ablatif sans préposition",
        texte: `<p>Les compléments circonstanciels précisent les circonstances de l'action. L'<strong>ablatif</strong> est le cas qui les exprime le plus souvent, et il se passe volontiers de préposition.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Circonstance</th><th>Question</th><th>Exemple</th></tr></thead><tbody>
<tr><th>Moyen</th><td>avec quoi ?</td><td><i class="la">Miles <b>gladio</b> pugnat.</i><br>Le soldat combat avec son glaive.</td></tr>
<tr><th>Manière</th><td>comment ?</td><td><i class="la">Puer <b>magna voce</b> clamat.</i><br>L'enfant crie d'une voix forte.</td></tr>
<tr><th>Cause</th><td>à cause de quoi ?</td><td><i class="la">Rex <b>timore</b> fugit.</i><br>Le roi s'enfuit par crainte.</td></tr>
<tr><th>Temps (date)</th><td>quand ?</td><td><i class="la"><b>Nocte</b> lupos video.</i><br>La nuit, je vois les loups.</td></tr>
</tbody></table></div>
<aside class="attention"><strong>La manière.</strong> Elle s'exprime avec <i class="la">cum</i> + ablatif (<i class="la">cum cura</i>, « avec soin »), mais <i class="la">cum</i> peut disparaître quand le nom est accompagné d'un adjectif : <i class="la">magna cura</i>, « avec un grand soin ».</aside>` },
      { t: "lecon", titre: "Durée, lieu et qualité",
        texte: `<p><strong>L'accusatif sans préposition</strong> exprime :</p>
<ul><li>la <strong>durée</strong> (pendant combien de temps ?) : <i class="la"><b>Multos annos</b> regnavit</i>, « il a régné pendant de nombreuses années » ;</li>
<li>le <strong>lieu où l'on va</strong>, pour les noms de villes et pour <i class="la">domus</i> (la maison) et <i class="la">rus</i> (la campagne) : <i class="la"><b>Romam</b> eo</i>, « je vais à Rome ».</li></ul>
<p><strong>Le locatif</strong> exprime le <strong>lieu où l'on est</strong>, pour ces mêmes noms : <i class="la"><b>Romae</b> sum</i>, « je suis à Rome » ; <i class="la"><b>domi</b> maneo</i>, « je reste à la maison ».</p>
<p><strong>La qualité</strong> s'exprime au génitif ou à l'ablatif, toujours avec un adjectif : <i class="la">vir <b>magni ingenii</b></i>, « un homme d'un grand talent » ; <i class="la">puer <b>pulchra facie</b></i>, « un enfant au beau visage ».</p>
<aside class="retenir"><strong>Deux fois « à Rome ».</strong> <i class="la">Romam</i> : on y va (accusatif). <i class="la">Romae</i> : on y est (locatif).</aside>` },
      { t: "tri", titre: "Quelle circonstance ?", q: "Que précise le groupe en gras ?",
        categories: ["Moyen", "Manière", "Cause", "Temps", "Lieu"],
        items: [
          { txt: "<i class=\"la\">Romani <b>gladiis</b> pugnant.</i>", cat: "Moyen", expl: "avec des glaives" }, { txt: "<i class=\"la\">Populus <b>magna cura</b> audit.</i>", cat: "Manière", expl: "avec une grande attention" },
          { txt: "<i class=\"la\">Rex <b>timore</b> fugit.</i>", cat: "Cause", expl: "par crainte" }, { txt: "<i class=\"la\">Tyrannus <b>prima umbra</b> fugit.</i>", cat: "Temps", expl: "au crépuscule" },
          { txt: "<i class=\"la\">Tarquinius <b>multos annos</b> regnat.</i>", cat: "Temps", expl: "pendant de nombreuses années (durée)" }, { txt: "<i class=\"la\">Lucretia <b>domi</b> manet.</i>", cat: "Lieu", expl: "à la maison (locatif)" },
          { txt: "<i class=\"la\">Maritus <b>Romam</b> venit.</i>", cat: "Lieu", expl: "à Rome (on y va)" }, { txt: "<i class=\"la\">Viri <b>magno animo</b> pugnant.</i>", cat: "Manière", expl: "avec un grand courage" }
        ] },
      { t: "lecon", titre: "Avec une préposition",
        texte: `<p>Une préposition latine est toujours suivie d'un nom à l'<strong>accusatif</strong> ou à l'<strong>ablatif</strong>.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>+ accusatif (mouvement, direction)</th><th>+ ablatif (lieu où l'on est, origine, accompagnement)</th></tr></thead><tbody>
<tr><td><i class="la">ad</i> : vers, près de<br><i class="la">in</i> : dans, sur (on y va)<br><i class="la">per</i> : à travers<br><i class="la">post</i> : derrière, après<br><i class="la">contra</i> : contre<br><i class="la">propter</i> : à cause de</td>
<td><i class="la">a, ab</i> : de, depuis, par<br><i class="la">e, ex</i> : hors de<br><i class="la">de</i> : du haut de, au sujet de<br><i class="la">in</i> : dans, sur (on y est)<br><i class="la">cum</i> : avec<br><i class="la">sine</i> : sans<br><i class="la">pro</i> : devant, pour</td></tr></tbody></table></div>
<aside class="attention"><strong><i class="la">in</i> a deux constructions.</strong> <i class="la">in oppidum</i> (accusatif) : on entre dans la place forte. <i class="la">in oppido</i> (ablatif) : on s'y trouve.</aside>` },
      { t: "tri", titre: "Accusatif ou ablatif ?", q: "Quel cas suit chacune de ces prépositions ?",
        categories: ["Accusatif", "Ablatif"],
        items: [
          { txt: "<i class=\"la\">ad</i> : vers", cat: "Accusatif" }, { txt: "<i class=\"la\">cum</i> : avec", cat: "Ablatif" }, { txt: "<i class=\"la\">per</i> : à travers", cat: "Accusatif" },
          { txt: "<i class=\"la\">sine</i> : sans", cat: "Ablatif" }, { txt: "<i class=\"la\">e, ex</i> : hors de", cat: "Ablatif" }, { txt: "<i class=\"la\">contra</i> : contre", cat: "Accusatif" },
          { txt: "<i class=\"la\">post</i> : après", cat: "Accusatif" }, { txt: "<i class=\"la\">pro</i> : pour, devant", cat: "Ablatif" }, { txt: "<i class=\"la\">propter</i> : à cause de", cat: "Accusatif" }, { txt: "<i class=\"la\">a, ab</i> : par, depuis", cat: "Ablatif" }
        ] },
      { t: "saisie", titre: "Après la préposition", intro: "Écris le nom entre parenthèses au cas voulu par la préposition.",
        items: [
          { q: "<i class=\"la\">cum (amicus, i, m)</i> : avec un ami", r: "amico" }, { q: "<i class=\"la\">contra (tyrannus, i, m)</i> : contre le tyran", r: "tyrannum" },
          { q: "<i class=\"la\">sine (amici)</i> : sans amis", r: "amicis" }, { q: "<i class=\"la\">ex (oppidum, i, n)</i> : hors de la place forte", r: "oppido" },
          { q: "<i class=\"la\">propter (iniuria, ae, f)</i> : à cause de l'injustice", r: "iniuriam" }, { q: "<i class=\"la\">pro (populus, i, m)</i> : pour le peuple", r: "populo" },
          { q: "<i class=\"la\">per (silva, ae, f)</i> : à travers la forêt", r: "silvam" }
        ] },
      { t: "lecon", titre: "Un peu d'histoire : la fin des rois",
        texte: `<p>Les exercices qui suivent racontent un épisode fondateur. En <strong>509 av. J.-C.</strong>, Rome est gouvernée par <strong>Tarquin le Superbe</strong>, son dernier roi, un tyran.</p>
<p>Son fils Sextus fait subir un grave outrage à <strong>Lucrèce</strong>, épouse de Collatin, réputée pour sa vertu. Lucrèce révèle le crime à son mari et à son père, puis elle meurt.</p>
<p><strong>Lucius Junius Brutus</strong>, parent de Collatin, appelle alors le peuple à se révolter. Les Tarquins sont chassés de Rome : c'est la fin de la royauté et la naissance de la <strong>République</strong>, dont Brutus et Collatin deviennent les premiers consuls.</p>` },
      { t: "quiz", titre: "Traduire des compléments", intro: "Choisis la bonne traduction.",
        questions: [
          { q: "<i class=\"la\">magna ira</i>", choix: ["avec une grande colère", "contre une grande colère", "la grande colère (sujet)"], bon: 0, expl: "Ablatif de manière, sans <i class=\"la\">cum</i> grâce à l'adjectif." },
          { q: "<i class=\"la\">Romam</i>", choix: ["à Rome (on y va)", "à Rome (on y est)", "de Rome"], bon: 0, expl: "Accusatif sans préposition pour un nom de ville." },
          { q: "<i class=\"la\">Romae</i>", choix: ["à Rome (on y est)", "à Rome (on y va)", "vers Rome"], bon: 0, expl: "Locatif." },
          { q: "<i class=\"la\">multos annos</i>", choix: ["pendant de nombreuses années", "il y a de nombreuses années", "après de nombreuses années"], bon: 0, expl: "Accusatif de durée." },
          { q: "<i class=\"la\">prima umbra</i>", choix: ["au crépuscule", "dans l'ombre", "avec la première ombre"], bon: 0, expl: "Ablatif de temps : « à la première ombre », à la tombée de la nuit." },
          { q: "<i class=\"la\">domi</i>", choix: ["à la maison (on y est)", "vers la maison", "hors de la maison"], bon: 0, expl: "Locatif de <i class=\"la\">domus</i>. « Vers la maison » se dit <i class=\"la\">domum</i>." },
          { q: "<i class=\"la\">post mortem Lucretiae</i>", choix: ["après la mort de Lucrèce", "à cause de la mort de Lucrèce", "avant la mort de Lucrèce"], bon: 0, expl: "<i class=\"la\">post</i> + accusatif : après." }
        ] },
      { t: "version", titre: "Phrases : l'expulsion de Tarquin",
        vocab: ["animus, i, m : le courage", "Brutus, i, m : Brutus", "Collatinus, i, m : Collatin", "expello, is, ere, expuli, expulsum : chasser", "filius, ii, m : le fils", "fugio, is, ere, fugi, fugitum : fuir", "gladius, ii, m : le glaive", "iniuria, ae, f : l'injustice, l'offense", "ira, ae, f : la colère", "maestus, a, um : triste", "maneo, es, ere, mansi, mansum : rester", "oppidum, i, n : la place forte, la ville", "patria, ae, f : la patrie", "populus, i, m : le peuple", "pugno, as, are, avi, atum : combattre", "regno, as, are, avi, atum : régner", "Tarquinius, ii, m : Tarquin", "tyrannus, i, m : le tyran", "umbra, ae, f : l'ombre", "venio, is, ire, veni, ventum : venir", "vir, viri, m : l'homme"],
        phrases: [
          { la: "Filius tyranni domum venit.", fr: "Le fils du tyran vient à la maison." },
          { la: "Populus pro patria pugnat.", fr: "Le peuple combat pour la patrie." },
          { la: "Romani gladiis pugnant.", fr: "Les Romains combattent avec des glaives." },
          { la: "Brutus tyrannum ex oppido expellit.", fr: "Brutus chasse le tyran hors de la ville." },
          { la: "Tarquinius multos annos regnat.", fr: "Tarquin règne pendant de nombreuses années." },
          { la: "Viri Romani magno animo pugnant.", fr: "Les hommes romains combattent avec un grand courage." },
          { la: "Collatinus propter iniuriam maestus est.", fr: "Collatin est triste à cause de l'offense." },
          { la: "Tyrannus prima umbra fugit.", fr: "Le tyran s'enfuit au crépuscule." },
          { la: "Lucretia domi manet.", fr: "Lucrèce reste à la maison." },
          { la: "Post iniuriam ira populi magna est.", fr: "Après l'offense, la colère du peuple est grande." }
        ] },
      { t: "version", titre: "Trois compléments par phrase", intro: "Chaque phrase contient trois compléments circonstanciels : repère-les avant de traduire.",
        vocab: ["ager, agri, m : le champ, la terre", "amicus, i, m : l'ami", "superbia, ae, f : l'orgueil", "suus, a, um : son, ses", "violentia, ae, f : la violence"],
        phrases: [
          { la: "Prima umbra filius tyranni domum cum amicis suis venit.", fr: "À la tombée de la nuit, le fils du tyran vient à la maison avec ses amis.", aide: "Temps, lieu, accompagnement." },
          { la: "Propter iniuriam populus Romanus pro agris suis gladiis pugnat.", fr: "À cause de l'offense, le peuple romain combat pour ses terres avec des glaives.", aide: "Cause, but, moyen." },
          { la: "Romae viri tyrannum ex oppido violentia expellunt.", fr: "À Rome, les hommes chassent le tyran hors de la ville par la violence.", aide: "Lieu où l'on est, lieu d'où l'on vient, manière." },
          { la: "Multos annos Tarquinius Romae magna superbia regnat.", fr: "Pendant de nombreuses années, Tarquin règne à Rome avec un grand orgueil.", aide: "Durée, lieu, manière." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Sans préposition</th><th>Emploi</th></tr></thead><tbody>
<tr><th>Ablatif</th><td>moyen (<i class="la">gladio</i>), manière avec adjectif (<i class="la">magna voce</i>), cause (<i class="la">timore</i>), date (<i class="la">nocte</i>)</td></tr>
<tr><th>Accusatif</th><td>durée (<i class="la">multos annos</i>), lieu où l'on va pour les villes, <i class="la">domus, rus</i> (<i class="la">Romam, domum</i>)</td></tr>
<tr><th>Locatif</th><td>lieu où l'on est (<i class="la">Romae, domi</i>)</td></tr></tbody></table></div>
<ul><li>+ accusatif : <i class="la">ad, in</i> (mouvement), <i class="la">per, post, contra, propter</i>.</li>
<li>+ ablatif : <i class="la">a/ab, e/ex, de, in</i> (sans mouvement), <i class="la">cum, sine, pro</i>.</li></ul>` }
    ]
  },
  {
    id: "c7", num: 7, titre: "Les adjectifs de la première classe", resume: "Décliner bonus, a, um et accorder l'adjectif avec le nom",
    etapes: [
      { t: "lecon", titre: "Qu'est-ce qu'un adjectif de la première classe ?",
        texte: `<p>Les adjectifs de la première classe ne demandent aucune terminaison nouvelle : ils empruntent celles des deux premières déclinaisons.</p>
<ul><li>Au <strong>masculin</strong>, ils se déclinent comme <i class="la">dominus</i> (ou <i class="la">puer</i>).</li>
<li>Au <strong>féminin</strong>, comme <i class="la">rosa</i>.</li><li>Au <strong>neutre</strong>, comme <i class="la">templum</i>.</li></ul>
<p>Le dictionnaire les présente par leurs trois nominatifs singuliers :</p>
<blockquote class="latin">bonus, a, um : bon</blockquote>
<p>Autres exemples : <i class="la">magnus, a, um</i> (grand), <i class="la">malus, a, um</i> (mauvais), et, avec un masculin en <i class="la">-er</i>, <i class="la">pulcher, chra, chrum</i> (beau) ou <i class="la">miser, era, erum</i> (malheureux).</p>
<p>Le radical se lit sur le féminin : <i class="la">bon-a</i> donne <i class="la">bon-</i>, <i class="la">pulchr-a</i> donne <i class="la">pulchr-</i>.</p>` },
      { t: "lecon", titre: "La déclinaison de bonus, a, um",
        texte: `${tAdj()}
<aside class="retenir"><strong>À retenir.</strong>
<ul><li>Vocatif masculin singulier en <i class="la">-e</i> : <i class="la">bone</i>, comme <i class="la">domine</i>.</li>
<li>Au neutre, nominatif, vocatif et accusatif sont identiques ; au pluriel, ils sont en <i class="la">-a</i>.</li>
<li>Datif et ablatif pluriels : <i class="la">bonis</i> aux trois genres.</li></ul></aside>` },
      { t: "saisie", titre: "Décliner malus, a, um", intro: "Mets l'adjectif <i class=\"la\">malus, a, um</i> (mauvais) à la forme demandée.",
        items: [
          { q: "Féminin, accusatif singulier", r: "malam" }, { q: "Neutre, génitif pluriel", r: "malorum" }, { q: "Masculin, vocatif singulier", r: "male" },
          { q: "Féminin, ablatif pluriel", r: "malis" }, { q: "Neutre, nominatif singulier", r: "malum" }, { q: "Masculin, accusatif pluriel", r: "malos" }, { q: "Neutre, accusatif pluriel", r: "mala" }
        ] },
      { t: "lecon", titre: "L'accord de l'adjectif",
        texte: `<aside class="retenir"><strong>La règle d'or.</strong> L'adjectif s'accorde en <strong>genre</strong>, en <strong>nombre</strong> et en <strong>cas</strong> avec le nom auquel il se rapporte.</aside>
<ul><li><i class="la">servus bonus</i> : le bon esclave (nominatif masculin singulier)</li>
<li><i class="la">rosam pulchram</i> : la belle rose (accusatif féminin singulier)</li>
<li><i class="la">templa magna</i> : les grands temples (nominatif ou accusatif neutre pluriel)</li>
<li><i class="la">amicorum bonorum</i> : des bons amis (génitif masculin pluriel)</li></ul>
<aside class="attention"><strong>Accord ne veut pas dire même terminaison.</strong> <i class="la">nauta</i> est masculin : « le bon marin » se dit <i class="la">nauta bon<b class="des">us</b></i>, et « des bons marins », <i class="la">nautarum bon<b class="des">orum</b></i>.</aside>` },
      { t: "saisie", titre: "Accorder bonus", intro: "Écris la forme de <i class=\"la\">bonus, a, um</i> qui s'accorde avec le nom.",
        items: [
          { q: "<i class=\"la\">puellae</i> (datif singulier) : à la bonne jeune fille", r: "bonae" }, { q: "<i class=\"la\">agrorum</i> (génitif pluriel) : des bons champs", r: "bonorum" },
          { q: "<i class=\"la\">oppidum</i> (accusatif singulier) : la bonne place forte", r: "bonum" }, { q: "<i class=\"la\">reginas</i> (accusatif pluriel) : les bonnes reines", r: "bonas" },
          { q: "<i class=\"la\">viro</i> (ablatif singulier) : avec l'homme bon", r: "bono" }, { q: "<i class=\"la\">poetam</i> (accusatif singulier, masculin) : le bon poète", r: "bonum" },
          { q: "<i class=\"la\">agricolae</i> (nominatif pluriel, masculin) : les bons paysans", r: "boni" }
        ] },
      { t: "tri", titre: "Bien accordé ?", q: "L'adjectif est-il correctement accordé avec le nom ?",
        categories: ["Accord correct", "Accord fautif"],
        items: [
          { txt: "<i class=\"la\">servus bonus</i>", cat: "Accord correct" }, { txt: "<i class=\"la\">templa magnos</i>", cat: "Accord fautif", expl: "Neutre pluriel : <i class=\"la\">templa magna</i>." },
          { txt: "<i class=\"la\">rosam pulchram</i>", cat: "Accord correct" }, { txt: "<i class=\"la\">nauta bona</i>", cat: "Accord fautif", expl: "<i class=\"la\">nauta</i> est masculin : <i class=\"la\">nauta bonus</i>." },
          { txt: "<i class=\"la\">puellis miseris</i>", cat: "Accord correct" }, { txt: "<i class=\"la\">oppidum parvus</i>", cat: "Accord fautif", expl: "Neutre singulier : <i class=\"la\">oppidum parvum</i>." },
          { txt: "<i class=\"la\">poetae boni</i>", cat: "Accord correct", expl: "Génitif singulier ou nominatif pluriel masculin." }, { txt: "<i class=\"la\">amicos malis</i>", cat: "Accord fautif", expl: "Accusatif pluriel : <i class=\"la\">amicos malos</i>." }
        ] },
      { t: "quiz", titre: "Une forme, plusieurs analyses", intro: "Avec <i class=\"la\">magnus, a, um</i> (grand).",
        questions: [
          { q: "<i class=\"la\">magni</i> peut être…", choix: ["génitif singulier masculin ou neutre", "nominatif pluriel masculin", "datif singulier masculin", "nominatif pluriel féminin"], bons: [0, 1], expl: "Comme <i class=\"la\">domini</i> et <i class=\"la\">templi</i> ; c'est aussi un vocatif pluriel masculin." },
          { q: "<i class=\"la\">magna</i> peut être…", choix: ["nominatif singulier féminin", "ablatif singulier féminin", "nominatif ou accusatif pluriel neutre", "accusatif singulier féminin"], bons: [0, 1, 2], expl: "Comme <i class=\"la\">rosa</i> et comme <i class=\"la\">templa</i>. L'accusatif singulier féminin est <i class=\"la\">magnam</i>." },
          { q: "<i class=\"la\">magno</i> peut être…", choix: ["datif singulier masculin ou neutre", "ablatif singulier masculin ou neutre", "ablatif singulier féminin"], bons: [0, 1], expl: "L'ablatif singulier féminin est <i class=\"la\">magna</i>." },
          { q: "Comment traduire <i class=\"la\">verba mala</i> ?", choix: ["les mauvaises paroles", "la mauvaise parole", "de la mauvaise parole"], bon: 0, expl: "<i class=\"la\">verbum, i, n</i> : neutre pluriel en <i class=\"la\">-a</i>." },
          { q: "Comment traduire <i class=\"la\">ancillae bonae</i>, au génitif singulier ?", choix: ["de la bonne servante", "les bonnes servantes", "aux bonnes servantes"], bon: 0, expl: "La même forme pourrait être un nominatif pluriel : ici, l'énoncé précise le cas." }
        ] },
      { t: "version", titre: "Phrases : patriciens et plébéiens",
        vocab: ["altus, a, um : haut", "ambulo, as, are, avi, atum : marcher", "auxilium, ii, n : l'aide", "capio, is, ere, cepi, captum : prendre, former (un plan)", "consilium, ii, n : le plan, la décision", "diu : longtemps", "durus, a, um : dur, pénible", "hodie : aujourd'hui", "iniquus, a, um : injuste", "iratus, a, um : en colère", "iura : les lois, les droits (accusatif neutre pluriel)", "laborem : le travail (accusatif singulier)", "miser, era, erum : malheureux", "murus, i, m : le mur", "novus, a, um : nouveau", "nunc : maintenant", "parvus, a, um : petit", "patricius, ii, m : le patricien", "periculum, i, n : le danger", "peto, is, ere, petivi, petitum : chercher, demander", "scribo, is, ere, scripsi, scriptum : écrire", "socius, ii, m : le compagnon, l'allié", "spe : l'espoir (ablatif singulier)", "superbus, a, um : orgueilleux", "sustineo, es, ere, sustinui, sustentum : supporter", "teneo, es, ere, tenui, tentum : tenir, retenir", "vastus, a, um : vaste, désert", "villa, ae, f : la ferme, la propriété"],
        phrases: [
          { la: "Populus magnus iratus in forum magnum ambulat.", fr: "Le grand peuple, en colère, marche vers le grand forum.", aide: "<i class=\"la\">in</i> + accusatif : mouvement." },
          { la: "Patricii superbi iura iniqua nunc scribunt.", fr: "Les patriciens orgueilleux écrivent maintenant des lois injustes." },
          { la: "Boni amici auxilium novum petunt.", fr: "Les bons amis cherchent une aide nouvelle." },
          { la: "Periculum novum ad muros altos oppidi hodie venit.", fr: "Un danger nouveau arrive aujourd'hui près des hauts murs de la place forte." },
          { la: "Multa oppida parva consilia magna capiunt.", fr: "Beaucoup de petites villes forment de grands plans.", aide: "Deux groupes au neutre pluriel : lequel est sujet ? Le sens tranche." },
          { la: "Socii miseri in agro vasto laborem durum sine spe sustinent.", fr: "Les malheureux alliés supportent sans espoir un dur travail dans un champ désert." },
          { la: "Dominus superbus et malus servos miseros diu in villa tenet.", fr: "Le maître, orgueilleux et mauvais, retient longtemps les malheureux esclaves dans sa propriété." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li><i class="la">bonus, a, um</i> : masculin sur <i class="la">dominus</i>, féminin sur <i class="la">rosa</i>, neutre sur <i class="la">templum</i>.</li>
<li>L'adjectif s'accorde en genre, en nombre et en cas avec son nom, même si les terminaisons diffèrent (<i class="la">nauta bonus</i>).</li></ul>${tAdj()}` }
    ]
  },
  {
    id: "c8", num: 8, titre: "L'imparfait et le futur", resume: "Reconnaître et former ces deux temps, à l'actif et au passif",
    etapes: [
      { t: "lecon", titre: "L'imparfait de l'indicatif",
        texte: `<p>L'imparfait exprime une action passée qui dure, qui se répète, ou une description : « je lisais ».</p>
<aside class="retenir"><strong>Formation.</strong> Radical du présent + suffixe <b class="des">-ba-</b> + désinences personnelles. À la 1re personne du singulier, la désinence active est <i class="la">-m</i> (et non <i class="la">-o</i>).</aside>
${tConj("imparfait", "actif")}
<p>Pour <i class="la">lego</i>, <i class="la">capio</i> et <i class="la">audio</i>, un <i class="la">-e-</i> précède le suffixe : <i class="la">leg-e-bam, capi-e-bam, audi-e-bam</i>.</p>
<p>Au passif, on garde <i class="la">-ba-</i> et on prend les désinences passives <i class="la">-r, -ris, -tur, -mur, -mini, -ntur</i> :</p>
${tConj("imparfait", "passif")}` },
      { t: "saisie", titre: "Former l'imparfait",
        items: [
          { q: "<i class=\"la\">amo</i> : imparfait actif, 3e personne du pluriel (ils aimaient)", r: "amabant" },
          { q: "<i class=\"la\">moneo</i> : imparfait actif, 1re personne du pluriel (nous avertissions)", r: "monebamus" },
          { q: "<i class=\"la\">lego</i> : imparfait actif, 2e personne du singulier (tu lisais)", r: "legebas" },
          { q: "<i class=\"la\">capio</i> : imparfait passif, 3e personne du singulier (il était pris)", r: "capiebatur" },
          { q: "<i class=\"la\">audio</i> : imparfait passif, 3e personne du pluriel (ils étaient entendus)", r: "audiebantur" },
          { q: "<i class=\"la\">pugno, as, are</i> (combattre) : imparfait actif, 3e personne du singulier", r: "pugnabat" },
          { q: "<i class=\"la\">mitto, is, ere</i> (envoyer) : imparfait actif, 3e personne du pluriel", r: "mittebant" }
        ] },
      { t: "lecon", titre: "Le futur de l'indicatif",
        texte: `<p>Le futur exprime une action à venir : « je lirai ». Il se forme de <strong>deux façons</strong>, selon la conjugaison.</p>
<p><strong>1re et 2e conjugaisons</strong> : radical du présent + <b class="des">-b-</b> (<i class="la">-bo, -bi-, -bu-</i>) + désinences.</p>
${tConj("futur", "actif", ["amo", "moneo"], "Futur actif : 1re et 2e conjugaisons")}
<p><strong>3e, 3e mixte et 4e conjugaisons</strong> : radical + <b class="des">-a-</b> à la 1re personne du singulier, <b class="des">-e-</b> aux autres + désinences.</p>
${tConj("futur", "actif", ["lego", "capio", "audio"], "Futur actif : 3e, 3e mixte et 4e conjugaisons")}
<p>Au passif, mêmes suffixes et désinences passives. Attention à la 2e personne du singulier : <i class="la">ama<b class="des">beris</b></i>, « tu seras aimé ».</p>
${tConj("futur", "passif", ["amo", "moneo"], "Futur passif : 1re et 2e conjugaisons")}
${tConj("futur", "passif", ["lego", "capio", "audio"], "Futur passif : 3e, 3e mixte et 4e conjugaisons")}` },
      { t: "saisie", titre: "Former le futur",
        items: [
          { q: "<i class=\"la\">amo</i> : futur actif, 2e personne du singulier (tu aimeras)", r: "amabis" },
          { q: "<i class=\"la\">moneo</i> : futur actif, 3e personne du pluriel (ils avertiront)", r: "monebunt" },
          { q: "<i class=\"la\">lego</i> : futur actif, 1re personne du singulier (je lirai)", r: "legam" },
          { q: "<i class=\"la\">lego</i> : futur actif, 3e personne du pluriel (ils liront)", r: "legent" },
          { q: "<i class=\"la\">capio</i> : futur passif, 1re personne du singulier (je serai pris)", r: "capiar" },
          { q: "<i class=\"la\">audio</i> : futur passif, 3e personne du pluriel (ils seront entendus)", r: "audientur" },
          { q: "<i class=\"la\">do, das, dare</i> (donner) : futur actif, 3e personne du singulier", r: "dabit" },
          { q: "<i class=\"la\">mitto, is, ere</i> (envoyer) : futur actif, 3e personne du singulier", r: "mittet" }
        ] },
      { t: "tri", titre: "Imparfait ou futur ?", q: "Classe chaque forme.",
        categories: ["Imparfait", "Futur"],
        items: [
          { txt: "<i class=\"la\">legebamus</i>", cat: "Imparfait", expl: "nous lisions" }, { txt: "<i class=\"la\">amaberis</i>", cat: "Futur", expl: "tu seras aimé" },
          { txt: "<i class=\"la\">monebuntur</i>", cat: "Futur", expl: "ils seront avertis" }, { txt: "<i class=\"la\">audiebat</i>", cat: "Imparfait", expl: "il entendait" },
          { txt: "<i class=\"la\">capiar</i>", cat: "Futur", expl: "je serai pris" }, { txt: "<i class=\"la\">legebantur</i>", cat: "Imparfait", expl: "ils étaient lus" },
          { txt: "<i class=\"la\">amabis</i>", cat: "Futur", expl: "tu aimeras" }, { txt: "<i class=\"la\">monebamus</i>", cat: "Imparfait", expl: "nous avertissions" },
          { txt: "<i class=\"la\">audientur</i>", cat: "Futur", expl: "ils seront entendus" }, { txt: "<i class=\"la\">capiebas</i>", cat: "Imparfait", expl: "tu prenais" },
          { txt: "<i class=\"la\">legent</i>", cat: "Futur", expl: "ils liront" }, { txt: "<i class=\"la\">amabatur</i>", cat: "Imparfait", expl: "il était aimé" }
        ] },
      { t: "quiz", titre: "Les pièges du futur", intro: "Une même terminaison ne dit pas la même chose selon la conjugaison.",
        questions: [
          { q: "<i class=\"la\">mones</i> (de <i class=\"la\">moneo, es, ere</i>) est…", choix: ["un présent : tu avertis", "un futur : tu avertiras"], bon: 0, expl: "2e conjugaison : le <i class=\"la\">-e-</i> appartient au radical. Le futur est <i class=\"la\">monebis</i>." },
          { q: "<i class=\"la\">leges</i> (de <i class=\"la\">lego, is, ere</i>) est…", choix: ["un futur : tu liras", "un présent : tu lis"], bon: 0, expl: "3e conjugaison : le présent est <i class=\"la\">legis</i>, le futur <i class=\"la\">leges</i>." },
          { q: "<i class=\"la\">mittet</i> (de <i class=\"la\">mitto, is, ere</i>) signifie…", choix: ["il enverra", "il envoie", "il envoyait"], bon: 0, expl: "Présent : <i class=\"la\">mittit</i> ; futur : <i class=\"la\">mittet</i> ; imparfait : <i class=\"la\">mittebat</i>." },
          { q: "<i class=\"la\">dabitur</i> (de <i class=\"la\">do, das, dare</i>) signifie…", choix: ["il sera donné", "il était donné", "il donnera"], bon: 0, expl: "<i class=\"la\">-bi-</i> : futur ; <i class=\"la\">-tur</i> : passif." },
          { q: "<i class=\"la\">gerebatur</i> (de <i class=\"la\">gero, is, ere</i>, mener) signifie…", choix: ["il était mené", "il sera mené", "il menait"], bon: 0, expl: "<i class=\"la\">-ba-</i> : imparfait ; <i class=\"la\">-tur</i> : passif." }
        ] },
      { t: "version", titre: "Phrases à l'imparfait et au futur", intro: "Analyse d'abord le verbe (temps, voix, personne), puis traduis.",
        vocab: ["a, ab + ablatif : par", "appello, as, are, avi, atum : appeler", "bellum, i, n : la guerre", "Caesare : César (ablatif)", "consilium, ii, n : le plan", "decretum, i, n : le décret", "do, das, dare, dedi, datum : donner", "ducem : le chef (accusatif)", "fugio, is, ere, fugi, fugitum : s'enfuir", "gero, is, ere, gessi, gestum : mener", "hostibus : les ennemis (ablatif pluriel)", "insidiae, arum, f pl : les pièges", "longus, a, um : long", "maneo, es, ere, mansi, mansum : rester", "occupo, as, are, avi, atum : occuper", "palam : publiquement", "pecunia, ae, f : l'argent", "provincia, ae, f : la province", "semper : toujours", "socius, ii, m : l'allié"],
        phrases: [
          { la: "Vir Romanus in foro amicum appellabat.", fr: "Un homme romain appelait un ami sur le forum.", aide: "<i class=\"la\">appellabat</i> : imparfait actif, 3e sg." },
          { la: "Populus Romanus bonum ducem semper amabit.", fr: "Le peuple romain aimera toujours un bon chef.", aide: "<i class=\"la\">amabit</i> : futur actif, 3e sg." },
          { la: "Bellum longum ab hostibus gerebatur.", fr: "Une longue guerre était menée par les ennemis.", aide: "<i class=\"la\">gerebatur</i> : imparfait passif, 3e sg." },
          { la: "Provincia nova a Caesare occupabitur.", fr: "Une nouvelle province sera occupée par César.", aide: "<i class=\"la\">occupabitur</i> : futur passif, 3e sg." },
          { la: "Duo socii in agris magnis manebant.", fr: "Deux alliés restaient dans de grands champs." },
          { la: "Vir magnus ad Asiam fugiet.", fr: "Le grand homme s'enfuira vers l'Asie.", aide: "<i class=\"la\">fugiet</i> : futur (3e mixte)." },
          { la: "Decretum malum palam in foro legebatur.", fr: "Un mauvais décret était lu publiquement sur le forum." },
          { la: "Nova pecunia a bonis viris dabitur.", fr: "De l'argent frais sera donné par des hommes de bien." },
          { la: "Viri populum Romanum de insidiis monebant.", fr: "Des hommes avertissaient le peuple romain au sujet des pièges." },
          { la: "Consilia mala a duobus amicis gerebantur.", fr: "De mauvais plans étaient menés par deux amis." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Temps</th><th>Marque</th><th>Exemples</th></tr></thead><tbody>
<tr><th>Imparfait</th><td><b class="des">-ba-</b></td><td><i class="la">amabam, monebam, legebam, capiebam, audiebam</i></td></tr>
<tr><th>Futur, 1re et 2e conj.</th><td><b class="des">-b-</b> (<i class="la">-bo, -bis… -bunt</i>)</td><td><i class="la">amabo, monebo</i></td></tr>
<tr><th>Futur, 3e, 3e mixte, 4e</th><td><b class="des">-a-</b> puis <b class="des">-e-</b></td><td><i class="la">legam, leges ; capiam, capies ; audiam, audies</i></td></tr></tbody></table></div>
<ul><li>Actif : <i class="la">-m</i> (ou <i class="la">-o</i>), <i class="la">-s, -t, -mus, -tis, -nt</i>. Passif : <i class="la">-r, -ris, -tur, -mur, -mini, -ntur</i>.</li>
<li>Ne pas confondre <i class="la">legis</i> (tu lis), <i class="la">leges</i> (tu liras) et <i class="la">mones</i> (tu avertis).</li></ul>` }
    ]
  }]
}];

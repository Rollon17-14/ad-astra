/* CONTENU — Partie 4 (chapitres XIII et XIV), d'après les cours sur les participes, l'ablatif absolu et la proposition infinitive. */
var PARTIE4 = [{
  id: "p4", titre: "Vers les textes d'auteurs", sous: "Les participes, l'ablatif absolu et la proposition infinitive",
  chapitres: [
  {
    id: "c13", num: 13, titre: "Les participes et l'ablatif absolu", resume: "Trois participes, et une tournure très latine pour exprimer une circonstance",
    etapes: [
      { t: "lecon", titre: "Le participe, entre verbe et adjectif",
        texte: `<p>Le participe « participe » de deux natures. Comme un <strong>verbe</strong>, il exprime une action et peut avoir des compléments. Comme un <strong>adjectif</strong>, il s'accorde en genre, en nombre et en cas avec un nom.</p>
<p>Le latin possède trois participes principaux :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Participe</th><th>Exemple</th><th>Sens</th><th>Par rapport au verbe principal</th></tr></thead><tbody>
<tr><th>Présent actif</th><td><i class="la">amans, amantis</i></td><td>aimant, qui aime</td><td>action simultanée</td></tr>
<tr><th>Parfait passif</th><td><i class="la">amatus, a, um</i></td><td>aimé, ayant été aimé</td><td>action antérieure</td></tr>
<tr><th>Futur actif</th><td><i class="la">amaturus, a, um</i></td><td>sur le point d'aimer</td><td>action postérieure</td></tr></tbody></table></div>` },
      { t: "lecon", titre: "Le participe présent actif",
        texte: `<p><strong>Formation.</strong> Radical du présent + <b class="des">-ns</b> au nominatif singulier, <b class="des">-ntis</b> au génitif.</p>
<ul><li><i class="la">amo</i> : <i class="la">ama<b class="des">ns</b>, ama<b class="des">ntis</b></i> (aimant)</li><li><i class="la">moneo</i> : <i class="la">monens, monentis</i> (avertissant)</li>
<li><i class="la">lego</i> : <i class="la">legens, legentis</i> (lisant)</li><li><i class="la">capio</i> : <i class="la">capiens, capientis</i> (prenant)</li><li><i class="la">audio</i> : <i class="la">audiens, audientis</i> (entendant)</li></ul>
<p>Il se décline sur la troisième déclinaison, avec un génitif pluriel en <i class="la">-ium</i> :</p>
<div class="tab-wrap"><table class="paradigme"><thead><tr><th>Cas</th><th>Sg. masc. et fém.</th><th>Sg. neutre</th><th>Pl. masc. et fém.</th><th>Pl. neutre</th></tr></thead><tbody>
<tr><th>Nominatif</th><td class="la">amans</td><td class="la">amans</td><td class="la">amant<b class="des">es</b></td><td class="la">amant<b class="des">ia</b></td></tr>
<tr><th>Vocatif</th><td class="la">amans</td><td class="la">amans</td><td class="la">amant<b class="des">es</b></td><td class="la">amant<b class="des">ia</b></td></tr>
<tr><th>Accusatif</th><td class="la">amant<b class="des">em</b></td><td class="la">amans</td><td class="la">amant<b class="des">es</b></td><td class="la">amant<b class="des">ia</b></td></tr>
<tr><th>Génitif</th><td class="la">amant<b class="des">is</b></td><td class="la">amant<b class="des">is</b></td><td class="la">amant<b class="des">ium</b></td><td class="la">amant<b class="des">ium</b></td></tr>
<tr><th>Datif</th><td class="la">amant<b class="des">i</b></td><td class="la">amant<b class="des">i</b></td><td class="la">amant<b class="des">ibus</b></td><td class="la">amant<b class="des">ibus</b></td></tr>
<tr><th>Ablatif</th><td class="la">amant<b class="des">e</b></td><td class="la">amant<b class="des">e</b></td><td class="la">amant<b class="des">ibus</b></td><td class="la">amant<b class="des">ibus</b></td></tr></tbody></table></div>
<p><strong>Traduction.</strong> « aimant », « qui aime », « en aimant ». Le participe peut simplement être <strong>apposé</strong> à un nom, avec lequel il s'accorde :</p>
<ul><li><i class="la">Miles <b>pugnans</b> cecidit.</i> Le soldat qui combattait tomba. (nominatif, comme <i class="la">miles</i>)</li>
<li><i class="la">Vidi puerum <b>ludentem</b>.</i> J'ai vu un enfant qui jouait. (accusatif, comme <i class="la">puerum</i>)</li></ul>` },
      { t: "saisie", titre: "Former le participe présent",
        items: [
          { q: "<i class=\"la\">navigo, as, are</i> (naviguer) : participe présent, nominatif singulier", r: "navigans" },
          { q: "<i class=\"la\">venio, is, ire</i> (venir) : participe présent, nominatif singulier", r: "veniens" },
          { q: "<i class=\"la\">moneo, es, ere</i> (avertir) : participe présent, nominatif singulier", r: "monens" },
          { q: "<i class=\"la\">navigans</i> : génitif singulier", r: "navigantis" },
          { q: "<i class=\"la\">veniens</i> : ablatif singulier", r: "veniente" },
          { q: "<i class=\"la\">navigans</i> : ablatif pluriel", r: "navigantibus" }
        ] },
      { t: "lecon", titre: "Le participe parfait passif et le participe futur actif",
        texte: `<p>Ces deux participes se forment sur le <strong>supin</strong>, le 5e temps primitif. On retire <i class="la">-um</i> pour obtenir le radical : <i class="la">amat-um</i> donne <i class="la">amat-</i>.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Supin</th><th>Participe parfait passif<br><b class="des">-us, -a, -um</b></th><th>Participe futur actif<br><b class="des">-urus, -ura, -urum</b></th></tr></thead><tbody>
<tr><th><i class="la">amatum</i></th><td><i class="la">amatus, a, um</i> : aimé</td><td><i class="la">amaturus, a, um</i> : sur le point d'aimer</td></tr>
<tr><th><i class="la">monitum</i></th><td><i class="la">monitus, a, um</i> : averti</td><td><i class="la">moniturus, a, um</i></td></tr>
<tr><th><i class="la">lectum</i></th><td><i class="la">lectus, a, um</i> : lu</td><td><i class="la">lecturus, a, um</i></td></tr>
<tr><th><i class="la">captum</i></th><td><i class="la">captus, a, um</i> : pris</td><td><i class="la">capturus, a, um</i></td></tr>
<tr><th><i class="la">auditum</i></th><td><i class="la">auditus, a, um</i> : entendu</td><td><i class="la">auditurus, a, um</i></td></tr></tbody></table></div>
<p>Tous deux se déclinent comme <i class="la">bonus, a, um</i>.</p>
<ul><li>Le <strong>participe parfait passif</strong> exprime une action <strong>antérieure</strong> et <strong>subie</strong> : « aimé », « ayant été aimé ».</li>
<li>Le <strong>participe futur actif</strong> exprime une action <strong>imminente</strong> : « sur le point de », « qui va », « destiné à ».</li></ul>` },
      { t: "saisie", titre: "Former les participes sur le supin", intro: "Écris le nominatif masculin singulier.",
        items: [
          { q: "<i class=\"la\">rapio, is, ere, rapui, raptum</i> (enlever) : participe parfait passif", r: "raptus" },
          { q: "<i class=\"la\">vinco, is, ere, vici, victum</i> (vaincre) : participe parfait passif", r: "victus" },
          { q: "<i class=\"la\">invenio, is, ire, inveni, inventum</i> (trouver) : participe parfait passif", r: "inventus" },
          { q: "<i class=\"la\">supero, as, are, avi, atum</i> (surmonter) : participe parfait passif", r: "superatus" },
          { q: "<i class=\"la\">lego, is, ere, legi, lectum</i> (lire) : participe futur actif", r: "lecturus" },
          { q: "<i class=\"la\">venio, is, ire, veni, ventum</i> (venir) : participe futur actif", r: "venturus" },
          { q: "<i class=\"la\">fero, fers, ferre, tuli, latum</i> (porter) : participe futur actif", r: "laturus" }
        ] },
      { t: "tri", titre: "Quel participe ?", q: "Classe chaque forme.",
        categories: ["Présent actif", "Parfait passif", "Futur actif"],
        items: [
          { txt: "<i class=\"la\">amans</i>", cat: "Présent actif", expl: "aimant" }, { txt: "<i class=\"la\">monitus</i>", cat: "Parfait passif", expl: "averti" },
          { txt: "<i class=\"la\">lecturus</i>", cat: "Futur actif", expl: "sur le point de lire" }, { txt: "<i class=\"la\">capientem</i>", cat: "Présent actif", expl: "prenant (accusatif)" },
          { txt: "<i class=\"la\">audita</i>", cat: "Parfait passif", expl: "entendue" }, { txt: "<i class=\"la\">venturus</i>", cat: "Futur actif", expl: "sur le point de venir" },
          { txt: "<i class=\"la\">pugnantibus</i>", cat: "Présent actif", expl: "combattant (datif ou ablatif pluriel)" }, { txt: "<i class=\"la\">victis</i>", cat: "Parfait passif", expl: "vaincus (datif ou ablatif pluriel)" },
          { txt: "<i class=\"la\">missura</i>", cat: "Futur actif", expl: "sur le point d'envoyer (féminin)" }, { txt: "<i class=\"la\">capto</i>", cat: "Parfait passif", expl: "pris (datif ou ablatif singulier)" }
        ] },
      { t: "lecon", titre: "L'ablatif absolu",
        texte: `<p>L'ablatif absolu est une petite proposition qui exprime une <strong>circonstance</strong> (temps, cause, concession, condition) en deux mots, tous deux <strong>à l'ablatif</strong> :</p>
<ul><li>un <strong>nom</strong> (ou un pronom), qui en est le sujet ;</li><li>un <strong>participe</strong> accordé avec lui.</li></ul>
<blockquote class="latin"><b>Urbe capta</b>, hostes discesserunt.</blockquote>
<p><i class="la">urbe</i> : ablatif singulier de <i class="la">urbs, urbis, f</i> ; <i class="la">capta</i> : participe parfait passif de <i class="la">capio</i>, à l'ablatif féminin singulier. Mot à mot : « la ville ayant été prise ».</p>
<aside class="retenir"><strong>« Absolu »</strong> vient de <i class="la">absolutus</i>, « détaché ». Le nom de l'ablatif absolu n'a aucune fonction dans la principale : il n'en est ni le sujet ni le complément.</aside>
<p><strong>Comment traduire ?</strong> Le contexte donne la nuance.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Nuance</th><th>Exemple</th><th>Traduction</th></tr></thead><tbody>
<tr><th>Temps, avec un participe parfait</th><td><i class="la">Urbe capta, hostes discesserunt.</i></td><td>Une fois la ville prise, les ennemis partirent.</td></tr>
<tr><th>Temps, avec un participe présent</th><td><i class="la">Sole oriente, aves canunt.</i></td><td>Quand le soleil se lève, les oiseaux chantent.</td></tr>
<tr><th>Cause</th><td><i class="la">Hostibus victis, cives laeti erant.</i></td><td>Parce que les ennemis avaient été vaincus, les citoyens étaient joyeux.</td></tr></tbody></table></div>
<p><strong>Sans participe.</strong> Le verbe <i class="la">sum</i> n'a pas de participe présent : deux noms, ou un nom et un adjectif, suffisent. <i class="la">Cicerone consule</i>, « Cicéron étant consul », « sous le consulat de Cicéron ».</p>` },
      { t: "quiz", titre: "Traduire des ablatifs absolus", intro: "Sur le mythe de la Toison d'or : Jason et les Argonautes partent en Colchide, où un dragon garde la toison.",
        vocab: ["Argonauta, ae, m : l'Argonaute", "caecus, a, um : aveugle", "Creon, ontis, m : Créon", "draco, onis, m : le dragon", "dux, ducis, m : le chef", "Iason, onis, m : Jason", "interficio, is, ere, feci, fectum : tuer", "Pelias, ae, m : Pélias", "periculum, i, n : le danger", "Phineus, i, m : Phinée", "rapio, is, ere, rapui, raptum : enlever, dérober", "rex, regis, m : le roi", "sopio, is, ire, ivi, itum : endormir", "supero, as, are, avi, atum : surmonter", "vellus, eris, n : la toison"],
        questions: [
          { q: "<i class=\"la\">Argonautis navigantibus</i>", choix: ["pendant que les Argonautes naviguaient", "après que les Argonautes eurent navigué", "les Argonautes sur le point de naviguer"], bon: 0, expl: "Participe présent : action simultanée." },
          { q: "<i class=\"la\">Dracone sopito</i>", choix: ["une fois le dragon endormi", "pendant que le dragon dort", "le dragon qui endort"], bon: 0, expl: "Participe parfait passif : action antérieure et subie." },
          { q: "<i class=\"la\">Vellere rapto</i>", choix: ["après le vol de la toison", "en dérobant la toison", "pour dérober la toison"], bon: 0, expl: "Mot à mot : « la toison ayant été dérobée »." },
          { q: "<i class=\"la\">Medea veniente</i>", choix: ["au moment où Médée arrivait", "Médée étant venue", "Médée devant venir"], bon: 0, expl: "Participe présent de <i class=\"la\">venio</i> à l'ablatif." },
          { q: "<i class=\"la\">Pelia interfecto</i>", choix: ["après la mort de Pélias", "en tuant Pélias", "pendant que Pélias tuait"], bon: 0, expl: "Mot à mot : « Pélias ayant été tué »." },
          { q: "<i class=\"la\">Creonte rege</i>", choix: ["sous le règne de Créon", "avec le roi Créon", "Créon ayant été roi"], bon: 0, expl: "Deux noms à l'ablatif, sans participe : « Créon étant roi »." },
          { q: "<i class=\"la\">Iasone duce</i>", choix: ["sous la conduite de Jason", "Jason ayant été conduit", "le chef de Jason"], bon: 0, expl: "« Jason étant chef »." },
          { q: "<i class=\"la\">Phineo caeco</i>", choix: ["Phinée étant aveugle", "Phinée ayant été aveuglé", "avec l'aveugle Phinée"], bon: 0, expl: "Un nom et un adjectif à l'ablatif." }
        ] },
      { t: "tri", titre: "Ablatif absolu ou participe apposé ?", q: "Le groupe en gras est-il un ablatif absolu, ou un participe simplement accordé à un mot de la phrase ?",
        categories: ["Ablatif absolu", "Participe apposé"],
        items: [
          { txt: "<i class=\"la\"><b>Urbe capta</b>, hostes discesserunt.</i>", cat: "Ablatif absolu", expl: "<i class=\"la\">urbe</i> n'a pas de fonction dans la principale." },
          { txt: "<i class=\"la\">Miles <b>pugnans</b> cecidit.</i>", cat: "Participe apposé", expl: "<i class=\"la\">pugnans</i> est au nominatif, accordé au sujet <i class=\"la\">miles</i>." },
          { txt: "<i class=\"la\"><b>Sole oriente</b>, aves canunt.</i>", cat: "Ablatif absolu", expl: "Quand le soleil se lève…" },
          { txt: "<i class=\"la\">Vidi puerum <b>ludentem</b>.</i>", cat: "Participe apposé", expl: "Accusatif, accordé au COD <i class=\"la\">puerum</i>." },
          { txt: "<i class=\"la\">Medea, Iasoni auxilium <b>latura</b>, carmina cantaverat.</i>", cat: "Participe apposé", expl: "Participe futur au nominatif, accordé au sujet <i class=\"la\">Medea</i>." },
          { txt: "<i class=\"la\"><b>Hostibus superatis</b>, Iason Corinthum venit.</i>", cat: "Ablatif absolu", expl: "Les ennemis une fois vaincus…" }
        ] },
      { t: "version", titre: "Phrases avec ablatif absolu",
        vocab: ["aureus, a, um : d'or", "auxilium ferre + datif : porter secours à", "avis, is, f : l'oiseau", "cano, is, ere, cecini, cantum : chanter", "carmen, inis, n : le chant, l'incantation", "Colchis, idis, f : la Colchide", "discedo, is, ere, discessi, discessum : partir", "invenio, is, ire, inveni, inventum : trouver", "laetus, a, um : joyeux", "omnis, e : tout", "orior : se lever (participe présent oriens, orientis)", "relinquo, is, ere, reliqui, relictum : quitter", "sol, solis, m : le soleil", "vinco, is, ere, vici, victum : vaincre"],
        phrases: [
          { la: "Urbe capta, hostes discesserunt.", fr: "Une fois la ville prise, les ennemis partirent." },
          { la: "Sole oriente, aves canunt.", fr: "Quand le soleil se lève, les oiseaux chantent." },
          { la: "Hostibus victis, cives laeti erant.", fr: "Comme les ennemis avaient été vaincus, les citoyens étaient joyeux." },
          { la: "Iasone monente, Argonautae non omnia verba audiebant.", fr: "Alors que Jason les avertissait, les Argonautes n'écoutaient pas toutes ses paroles." },
          { la: "Dracone sopito, Iason vellus aureum rapuit.", fr: "Une fois le dragon endormi, Jason déroba la Toison d'or." },
          { la: "Vellere aureo invento, Argonautae Colchidem reliquerunt.", fr: "Après avoir trouvé la Toison d'or, les Argonautes quittèrent la Colchide.", note: "Mot à mot : « la Toison d'or ayant été trouvée »." },
          { la: "Hostibus superatis, Iason et Medea Corinthum venerunt.", fr: "Les ennemis une fois vaincus, Jason et Médée vinrent à Corinthe.", aide: "<i class=\"la\">Corinthum</i> : accusatif de lieu, sans préposition (nom de ville)." },
          { la: "Medea, Iasoni auxilium latura, carmina magica cantaverat.", fr: "Médée, sur le point de porter secours à Jason, avait chanté des incantations magiques.", note: "Pas d'ablatif absolu ici : <i class=\"la\">latura</i> est apposé au sujet." }
        ] },
      { t: "version", titre: "Version : Jason et Médée",
        vocab: ["ars, artis, f : l'art", "Colchi, orum, m pl : les Colchiens", "Corinthus, i, f : Corinthe", "fugio, is, ere, fugi, fugitum : fuir", "in matrimonium ducere : épouser", "ira, ae, f : la colère", "iubeo, es, ere, iussi, iussum : ordonner", "magicus, a, um : magique", "moveo, es, ere, movi, motum : émouvoir, pousser", "peto, is, ere, petivi, petitum : chercher à atteindre", "relinquo, is, ere, reliqui, relictum : abandonner", "ubi : où", "voluit : il voulut"],
        phrases: [
          { la: "Iason, Pelia rege iubente, vellus aureum petivit.", fr: "Jason, sur l'ordre du roi Pélias, partit chercher la Toison d'or.", aide: "<i class=\"la\">Pelia rege iubente</i> : « le roi Pélias l'ordonnant »." },
          { la: "Argonautis navigantibus, multa pericula fuerunt.", fr: "Pendant que les Argonautes naviguaient, il y eut de nombreux dangers." },
          { la: "Medea, filia regis Colchorum, Iasonem amavit.", fr: "Médée, la fille du roi des Colchiens, aima Jason." },
          { la: "Dracone arte magica sopito, Iason vellus rapuit.", fr: "Le dragon ayant été endormi par un art magique, Jason déroba la toison.", aide: "<i class=\"la\">arte magica</i> : ablatif de moyen, à l'intérieur de l'ablatif absolu." },
          { la: "Vellere rapto, Iason et Medea e Colchide fugerunt.", fr: "Après le vol de la toison, Jason et Médée s'enfuirent de Colchide." },
          { la: "Postea Corinthum venerunt, ubi Creon rex erat.", fr: "Ensuite ils vinrent à Corinthe, où Créon était roi." },
          { la: "Iason, Medea relicta, filiam regis in matrimonium ducere voluit.", fr: "Jason, après avoir abandonné Médée, voulut épouser la fille du roi.", note: "Mot à mot : « Médée ayant été abandonnée »." },
          { la: "Medea, ira mota, e Corintho fugit.", fr: "Médée, poussée par la colère, s'enfuit de Corinthe.", note: "Piège : <i class=\"la\">mota</i> est au nominatif, apposé à <i class=\"la\">Medea</i> ; <i class=\"la\">ira</i> est un ablatif de cause. Ce n'est pas un ablatif absolu." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Participe</th><th>Formation</th><th>Se décline comme</th><th>Sens</th></tr></thead><tbody>
<tr><th>Présent actif</th><td>radical du présent + <i class="la">-ns, -ntis</i></td><td>3e déclinaison</td><td>aimant (simultané)</td></tr>
<tr><th>Parfait passif</th><td>radical du supin + <i class="la">-us, -a, -um</i></td><td><i class="la">bonus, a, um</i></td><td>aimé (antérieur)</td></tr>
<tr><th>Futur actif</th><td>radical du supin + <i class="la">-urus, -ura, -urum</i></td><td><i class="la">bonus, a, um</i></td><td>sur le point d'aimer</td></tr></tbody></table></div>
<ul><li><strong>Ablatif absolu</strong> : nom à l'ablatif + participe à l'ablatif, détachés du reste de la phrase.</li>
<li>Traductions : « une fois… », « après que… », « pendant que… », « comme… », « bien que… ».</li>
<li>Sans participe : <i class="la">Cicerone consule</i>, « sous le consulat de Cicéron ».</li></ul>` }
    ]
  },
  {
    id: "c14", num: 14, titre: "La proposition infinitive", resume: "Dire, savoir, penser que… : un sujet à l'accusatif, un verbe à l'infinitif",
    etapes: [
      { t: "lecon", titre: "Une subordonnée sans mot de liaison",
        texte: `<p>En français, après un verbe comme « dire », « savoir » ou « penser », on emploie « que » : « Je dis <strong>que</strong> la vie est courte. »</p>
<p>Le latin n'emploie aucun mot de liaison. Il utilise une <strong>proposition infinitive</strong>, qui est le COD du verbe principal :</p>
<blockquote class="latin">Dico <b>vitam brevem esse</b>.</blockquote>
<aside class="retenir"><strong>Construction.</strong>
<ul><li>Le <strong>sujet</strong> de la subordonnée est à l'<strong>accusatif</strong> : <i class="la">vitam</i>.</li>
<li>Son <strong>verbe</strong> est à l'<strong>infinitif</strong> : <i class="la">esse</i>.</li>
<li>L'<strong>attribut</strong> s'accorde avec le sujet, donc à l'accusatif : <i class="la">brevem</i>.</li></ul></aside>
<p>On la rencontre après les verbes de <strong>déclaration</strong> (<i class="la">dico</i>, dire), de <strong>perception</strong> (<i class="la">video</i>, voir ; <i class="la">audio</i>, entendre), de <strong>pensée</strong> (<i class="la">puto</i>, penser ; <i class="la">credo</i>, croire ; <i class="la">scio</i>, savoir) et de volonté.</p>` },
      { t: "quiz", titre: "Reconnaître la construction",
        questions: [
          { q: "Dans <i class=\"la\">Dico vitam brevem esse</i>, quel mot est le sujet de l'infinitive ?", choix: ["<i class=\"la\">vitam</i>", "<i class=\"la\">dico</i>", "<i class=\"la\">brevem</i>"], bon: 0, expl: "À l'accusatif, bien qu'il soit sujet : c'est toute la particularité de la tournure." },
          { q: "Pourquoi <i class=\"la\">brevem</i> est-il à l'accusatif ?", choix: ["Il est attribut du sujet <i class=\"la\">vitam</i> et s'accorde avec lui", "Il est COD de <i class=\"la\">dico</i>", "Il est complément circonstanciel"], bon: 0, expl: "L'attribut suit le cas du sujet." },
          { q: "Par quel mot traduit-on le lien entre la principale et l'infinitive ?", choix: ["que", "qui", "pour"], bon: 0, expl: "« Je dis que la vie est courte. »" }
        ] },
      { t: "lecon", titre: "Les temps de l'infinitif",
        texte: `<p>Le temps de l'infinitif ne situe pas l'action dans le passé ou le futur : il la situe <strong>par rapport au verbe principal</strong>.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Infinitif</th><th>Rapport</th><th>Exemple</th><th>Traduction</th></tr></thead><tbody>
<tr><th>Présent</th><td>action simultanée</td><td><i class="la">Dico vitam brevem <b>esse</b>.</i></td><td>Je dis que la vie est courte.</td></tr>
<tr><th>Parfait</th><td>action antérieure</td><td><i class="la">Dico vitam brevem <b>fuisse</b>.</i></td><td>Je dis que la vie a été courte.</td></tr>
<tr><th>Futur</th><td>action postérieure</td><td><i class="la">Dico vitam brevem <b>futuram esse</b>.</i></td><td>Je dis que la vie sera courte.</td></tr></tbody></table></div>
<p><strong>Former l'infinitif parfait actif.</strong> Radical du parfait + <b class="des">-isse</b> : <i class="la">amav<b class="des">isse</b></i> (avoir aimé), <i class="la">cep<b class="des">isse</b></i> (avoir pris), <i class="la">fu<b class="des">isse</b></i> (avoir été).</p>
<p><strong>Former l'infinitif futur actif.</strong> Participe futur à l'accusatif + <i class="la">esse</i> : <i class="la">amat<b class="des">urum</b> esse</i>. Le participe s'accorde avec le sujet de l'infinitive : <i class="la">cives… defensur<b class="des">os</b> esse</i>.</p>` },
      { t: "saisie", titre: "Former l'infinitif parfait", intro: "Écris l'infinitif parfait actif (radical du parfait + <i class=\"la\">-isse</i>).",
        items: [
          { q: "<i class=\"la\">amo, as, are, avi, atum</i> : aimer", r: "amavisse" }, { q: "<i class=\"la\">sum, es, esse, fui</i> : être", r: "fuisse" },
          { q: "<i class=\"la\">capio, is, ere, cepi, captum</i> : prendre", r: "cepisse" }, { q: "<i class=\"la\">maneo, es, ere, mansi, mansum</i> : rester", r: "mansisse" },
          { q: "<i class=\"la\">fugio, is, ere, fugi, fugitum</i> : fuir", r: "fugisse" }, { q: "<i class=\"la\">video, es, ere, vidi, visum</i> : voir", r: "vidisse" }
        ] },
      { t: "tri", titre: "Simultanée, antérieure ou postérieure ?", q: "Que dit chaque infinitif par rapport au verbe principal ?",
        categories: ["Simultanée", "Antérieure", "Postérieure"],
        items: [
          { txt: "<i class=\"la\">esse</i>", cat: "Simultanée", expl: "infinitif présent" }, { txt: "<i class=\"la\">fuisse</i>", cat: "Antérieure", expl: "infinitif parfait" },
          { txt: "<i class=\"la\">futuram esse</i>", cat: "Postérieure", expl: "infinitif futur" }, { txt: "<i class=\"la\">venire</i>", cat: "Simultanée", expl: "infinitif présent" },
          { txt: "<i class=\"la\">cepisse</i>", cat: "Antérieure", expl: "avoir pris" }, { txt: "<i class=\"la\">deleturum esse</i>", cat: "Postérieure", expl: "devoir détruire" },
          { txt: "<i class=\"la\">mansisse</i>", cat: "Antérieure", expl: "être resté" }, { txt: "<i class=\"la\">defensuros esse</i>", cat: "Postérieure", expl: "devoir défendre" },
          { txt: "<i class=\"la\">pugnare</i>", cat: "Simultanée", expl: "infinitif présent" }
        ] },
      { t: "lecon", titre: "Deux points de vigilance",
        texte: `<aside class="attention"><strong>1. Le sujet de l'infinitive est toujours exprimé</strong>, même s'il est le même que celui du verbe principal. On emploie alors un pronom à l'accusatif :
<ul><li><i class="la">Scio <b>me</b> errare.</i> Je sais que je me trompe.</li>
<li><i class="la">Cicero dicit <b>se</b> veritatem dicturum esse.</i> Cicéron dit qu'il dira la vérité.</li></ul>
<i class="la">se</i> est le pronom réfléchi : il renvoie au sujet du verbe principal (ici Cicéron).</aside>
<aside class="attention"><strong>2. Deux accusatifs peuvent se suivre.</strong> Dans <i class="la">Putamus cives libertatem defensuros esse</i>, <i class="la">cives</i> est le sujet de l'infinitive et <i class="la">libertatem</i> son COD. Le sens et l'accord du participe (<i class="la">defensuros</i>, masculin pluriel) aident à trancher.</aside>` },
      { t: "quiz", titre: "Repérer le sujet et le verbe", intro: "Dans chaque phrase, trouve le sujet de la proposition infinitive.",
        vocab: ["fur, furis, m : le voleur", "improbus, a, um : malhonnête", "iudex, icis, m : le juge", "orator, oris, m : l'orateur", "reus, i, m : l'accusé", "Verres, is, m : Verrès"],
        questions: [
          { q: "<i class=\"la\">Cicero dicit Verrem improbum esse.</i>", choix: ["<i class=\"la\">Verrem</i>", "<i class=\"la\">Cicero</i>", "<i class=\"la\">improbum</i>"], bon: 0, expl: "Cicéron dit que Verrès est malhonnête. Infinitif présent : <i class=\"la\">esse</i>." },
          { q: "<i class=\"la\">Iudices sciunt reum furem fuisse.</i>", choix: ["<i class=\"la\">reum</i>", "<i class=\"la\">furem</i>", "<i class=\"la\">iudices</i>"], bon: 0, expl: "Les juges savent que l'accusé a été un voleur. <i class=\"la\">furem</i> est attribut ; infinitif parfait : <i class=\"la\">fuisse</i>." },
          { q: "<i class=\"la\">Populus videt oratorem venire.</i>", choix: ["<i class=\"la\">oratorem</i>", "<i class=\"la\">populus</i>", "<i class=\"la\">venire</i>"], bon: 0, expl: "Le peuple voit que l'orateur vient." },
          { q: "<i class=\"la\">Catilina putat se urbem deleturum esse.</i>", choix: ["<i class=\"la\">se</i>", "<i class=\"la\">urbem</i>", "<i class=\"la\">Catilina</i>"], bon: 0, expl: "Catilina pense qu'il détruira la ville. <i class=\"la\">se</i> renvoie à Catilina ; <i class=\"la\">urbem</i> est le COD de <i class=\"la\">deleturum esse</i>." }
        ] },
      { t: "version", titre: "Traduire en respectant le temps", intro: "Demande-toi chaque fois si l'action de l'infinitive est simultanée, antérieure ou postérieure.",
        vocab: ["coniuratus, i, m : le conjuré", "credo, is, ere, credidi, creditum : croire", "defendo, is, ere, defendi, defensum : défendre", "erro, as, are, avi, atum : se tromper", "lex, legis, f : la loi", "libertas, atis, f : la liberté", "maneo, es, ere, mansi, mansum : rester", "puto, as, are, avi, atum : penser", "scio, is, ire, ivi, itum : savoir", "senator, oris, m : le sénateur"],
        phrases: [
          { la: "Credimus leges bonas esse.", fr: "Nous croyons que les lois sont bonnes.", note: "Action simultanée." },
          { la: "Auditis senatores contra hostes pugnare.", fr: "Vous entendez dire que les sénateurs combattent les ennemis.", note: "Action simultanée." },
          { la: "Cicero scit coniuratos in urbe mansisse.", fr: "Cicéron sait que les conjurés sont restés dans la ville.", note: "Action antérieure." },
          { la: "Putamus cives libertatem defensuros esse.", fr: "Nous pensons que les citoyens défendront la liberté.", note: "Action postérieure." },
          { la: "Scio me errare.", fr: "Je sais que je me trompe." }
        ] },
      { t: "saisie", titre: "Thème : du français au latin", intro: "Traduis en latin. Commence par le verbe principal, puis le sujet de l'infinitive, et termine par l'infinitif.",
        vocab: ["audio, is, ire, ivi, itum : écouter", "Cicero, onis, m : Cicéron", "dico, is, ere, dixi, dictum : dire", "fugio, is, ere, fugi, fugitum : fuir", "iudex, icis, m : le juge", "iustus, a, um : juste", "lex, legis, f : la loi", "patria, ae, f : la patrie", "puto, as, are, avi, atum : penser", "reus, i, m : l'accusé", "scio, is, ire, ivi, itum : savoir", "servo, as, are, avi, atum : sauver", "video, es, ere, vidi, visum : voir"],
        items: [
          { q: "Je sais que le juge écoute.", r: ["Scio iudicem audire", "Iudicem audire scio"] },
          { q: "Tu dis que l'accusé a fui.", r: ["Dicis reum fugisse", "Reum fugisse dicis"] },
          { q: "Nous voyons que les lois sont justes.", r: ["Videmus leges iustas esse", "Leges iustas esse videmus", "Videmus iustas leges esse"] },
          { q: "Ils pensent que Cicéron sauvera la patrie.", r: ["Putant Ciceronem patriam servaturum esse", "Ciceronem patriam servaturum esse putant", "Putant Ciceronem servaturum esse patriam"] }
        ] },
      { t: "version", titre: "Lecture : le procès de Verrès", intro: "En 70 av. J.-C., Cicéron accuse Verrès, ancien gouverneur de Sicile, d'avoir pillé la province. Repère les cinq propositions infinitives.",
        vocab: ["crudelis, e : cruel", "homo, inis, m : l'homme", "iste, ista, istud : cet individu (péjoratif)", "oratio, onis, f : le discours", "paro, as, are, avi, atum : préparer", "poenas dare : être puni (« payer sa peine »)", "quod : parce que", "Sicilia, ae, f : la Sicile", "statua, ae, f : la statue", "veritas, atis, f : la vérité"],
        phrases: [
          { la: "Cicero orationem parat.", fr: "Cicéron prépare son discours." },
          { la: "Scit Verrem multas statuas in Sicilia cepisse.", fr: "Il sait que Verrès a pris de nombreuses statues en Sicile." },
          { la: "Iudices vident istum hominem crudelem esse.", fr: "Les juges voient que cet individu est cruel." },
          { la: "Cicero dicit se veritatem dicturum esse.", fr: "Cicéron dit qu'il dira la vérité." },
          { la: "Cives putant Verrem poenas daturum esse.", fr: "Les citoyens pensent que Verrès sera puni." },
          { la: "Verres fugit, quod scit se furem fuisse.", fr: "Verrès s'enfuit, parce qu'il sait qu'il a été un voleur." }
        ] },
      { t: "lecon", titre: "Devoir : raconte ta vie en latin",
        texte: `<p>Un travail d'écriture, à faire avec une carte personnage distribuée en classe.</p>
<ol><li>Demande à une IA de rédiger <strong>quatre phrases en latin</strong> qui racontent le quotidien, les pensées, les espoirs ou les peurs de ton personnage, en utilisant des <strong>propositions infinitives</strong>.</li>
<li>Sur une première fiche bristol, note ta demande (ton « prompt ») et la réponse en latin.</li>
<li>Sur une seconde fiche, écris le corrigé : la <strong>traduction</strong> des phrases et leur <strong>analyse grammaticale</strong> (verbe principal, sujet à l'accusatif, infinitif et son temps).</li></ol>
<p>Exemple de demande : « Je suis Cornelia, la fille d'un grand sénateur. Je vois tout ce qui se passe dans la <i class="la">domus</i>. Raconte ma vie de jeune noble en quatre phrases latines qui utilisent des propositions infinitives. »</p>
<p>Quelques personnages : Livia, jeune esclave à la campagne ; Iunia, novice chez les Vestales ; Flavia, marchande de fruits ; Marcus, soldat à l'entraînement ; Lucius, né à Athènes et vivant à Rome ; Publius, copiste chez un riche sénateur.</p>
<aside class="attention"><strong>Garde l'esprit critique.</strong> Une IA peut se tromper en latin. Vérifie chaque phrase avec ce que tu sais : le sujet est-il bien à l'accusatif ? le verbe à l'infinitif ? le temps est-il le bon ?</aside>` },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Après un verbe de déclaration, de perception ou de pensée : <strong>sujet à l'accusatif + verbe à l'infinitif</strong>, sans mot de liaison. On traduit par « que ».</li>
<li>Le sujet est toujours exprimé (<i class="la">me, te, se…</i>) ; l'attribut est à l'accusatif.</li></ul>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Infinitif</th><th>Formation</th><th>Rapport</th></tr></thead><tbody>
<tr><th>Présent</th><td><i class="la">amare, esse</i></td><td>simultanée</td></tr>
<tr><th>Parfait</th><td>radical du parfait + <i class="la">-isse</i> : <i class="la">amavisse, fuisse</i></td><td>antérieure</td></tr>
<tr><th>Futur</th><td>participe futur à l'accusatif + <i class="la">esse</i> : <i class="la">amaturum esse</i></td><td>postérieure</td></tr></tbody></table></div>` }
    ]
  }]
}];

/* CONTENU — suite des chapitres complémentaires :
   c26 L'impératif, le gérondif et l'adjectif verbal ; c25 Le subjonctif (tous deux après la proposition infinitive) ;
   c27 Lire les auteurs (à la fin de la partie « Apprendre à traduire »). */
PARTIE4[0].sous = "Les participes, l'ablatif absolu, la proposition infinitive, l'impératif, le gérondif et le subjonctif";

insererApres("c14", {
  id: "c26", titre: "L'impératif, le gérondif et l'adjectif verbal", resume: "Donner un ordre, puis employer le verbe comme un nom ou comme un adjectif",
  etapes: [
    { t: "lecon", titre: "L'impératif présent",
      texte: `<p>L'impératif sert à donner un <strong>ordre</strong>. Il n'a que deux personnes.</p>
<ul><li><strong>2e personne du singulier</strong> : le radical du présent, sans désinence.</li><li><strong>2e personne du pluriel</strong> : on ajoute <b class="des">-te</b>.</li></ul>
${T("Impératif présent actif", ["", "amo", "moneo", "lego", "capio", "audio"], [["2e sg.", "ama", "mone", "lege", "cape", "audi"], ["2e pl.", "ama<b class=\"des\">te</b>", "mone<b class=\"des\">te</b>", "legi<b class=\"des\">te</b>", "capi<b class=\"des\">te</b>", "audi<b class=\"des\">te</b>"]])}
<aside class="attention"><strong>Quatre impératifs sans voyelle finale</strong> : <i class="la">dic</i> (dis), <i class="la">duc</i> (conduis), <i class="la">fac</i> (fais), <i class="la">fer</i> (porte). Et aussi : <i class="la">es, este</i> (sois, soyez) ; <i class="la">i, ite</i> (va, allez).</aside>
<p>La personne à qui l'on s'adresse est au <strong>vocatif</strong> : <i class="la">Audi, Marce !</i> « Écoute, Marcus ! »</p>` },
    { t: "saisie", titre: "Former l'impératif",
      items: [
        { q: "<i class=\"la\">laudo, as, are</i> : impératif singulier (loue !)", r: "lauda" }, { q: "<i class=\"la\">video, es, ere</i> : impératif pluriel (voyez !)", r: "videte" },
        { q: "<i class=\"la\">scribo, is, ere</i> : impératif singulier (écris !)", r: "scribe" }, { q: "<i class=\"la\">scribo</i> : impératif pluriel (écrivez !)", r: "scribite" },
        { q: "<i class=\"la\">venio, is, ire</i> : impératif pluriel (venez !)", r: "venite" }, { q: "<i class=\"la\">dico, is, ere</i> : impératif singulier (dis !)", r: "dic" },
        { q: "<i class=\"la\">facio, is, ere</i> : impératif singulier (fais !)", r: "fac" }, { q: "<i class=\"la\">eo, is, ire</i> : impératif pluriel (allez !)", r: "ite" }
      ] },
    { t: "lecon", titre: "La défense",
      texte: `<p>Pour <strong>interdire</strong>, le latin n'emploie pas l'impératif avec une négation. Il utilise l'impératif du verbe <i class="la">nolo</i>, suivi de l'<strong>infinitif</strong> :</p>
<ul><li><i class="la"><b>Noli</b> timere.</i> Ne crains pas. (mot à mot : « refuse de craindre »)</li><li><i class="la"><b>Nolite</b> clamare.</i> Ne criez pas.</li></ul>
<p>Beaucoup d'expressions passées en français sont des impératifs : <i class="la">Carpe diem</i> (cueille le jour), <i class="la">Cave canem</i> (prends garde au chien), <i class="la">Vade mecum</i> (viens avec moi), <i class="la">Festina lente</i> (hâte-toi lentement).</p>` },
    { t: "quiz", titre: "Comprendre un ordre",
      questions: [
        { q: "<i class=\"la\">Audite, cives !</i>", choix: ["Écoutez, citoyens !", "Écoute, citoyen !", "Les citoyens écoutent."], bon: 0, expl: "<i class=\"la\">-te</i> : pluriel ; <i class=\"la\">cives</i> : vocatif pluriel." },
        { q: "<i class=\"la\">Noli me tangere.</i> (<i class=\"la\">tango</i> : toucher)", choix: ["Ne me touche pas.", "Touche-moi.", "Je ne veux pas te toucher."], bon: 0, expl: "<i class=\"la\">noli</i> + infinitif : la défense." },
        { q: "<i class=\"la\">Dic mihi veritatem.</i>", choix: ["Dis-moi la vérité.", "Il me dit la vérité.", "Dites-moi la vérité."], bon: 0, expl: "<i class=\"la\">dic</i> : impératif singulier irrégulier de <i class=\"la\">dico</i>." },
        { q: "<i class=\"la\">Cave canem.</i>", choix: ["Prends garde au chien.", "Le chien garde la maison.", "Méfiez-vous du chien."], bon: 0, expl: "<i class=\"la\">cave</i> : impératif singulier de <i class=\"la\">caveo, es, ere</i>." },
        { q: "<i class=\"la\">Nolite timere.</i>", choix: ["N'ayez pas peur.", "N'aie pas peur.", "Ils ne veulent pas craindre."], bon: 0, expl: "<i class=\"la\">nolite</i> : pluriel." }
      ] },
    { t: "lecon", titre: "Le gérondif : le verbe employé comme un nom",
      texte: `<p>En français, l'infinitif peut être sujet ou COD : « <strong>Lire</strong> est utile. » Mais comment dire « l'art <strong>de lire</strong> » ou « <strong>en lisant</strong> » ? Le latin décline l'infinitif grâce au <strong>gérondif</strong>.</p>
<p><strong>Formation.</strong> Radical du présent + <b class="des">-nd-</b> + terminaisons de la 2e déclinaison au neutre singulier.</p>
${T("Le gérondif", ["Cas", "amo", "moneo", "lego", "capio", "audio"], [["Accusatif (après <i>ad</i>)", "amandum", "monendum", "legendum", "capiendum", "audiendum"], ["Génitif", "amandi", "monendi", "legendi", "capiendi", "audiendi"], ["Datif", "amando", "monendo", "legendo", "capiendo", "audiendo"], ["Ablatif", "amando", "monendo", "legendo", "capiendo", "audiendo"]])}
${T("Ses emplois", ["Cas", "Exemple", "Traduction"], [["Génitif", "ars scribendi", "l'art d'écrire"], ["Accusatif avec <i>ad</i>", "ad pugnandum parati", "prêts à combattre, pour combattre"], ["Ablatif", "docendo discimus", "c'est en enseignant qu'on apprend"]])}
<aside class="retenir"><strong>À retenir.</strong> Le gérondif n'a ni nominatif ni pluriel : au nominatif, c'est l'infinitif qui sert (<i class="la">legere utile est</i>).</aside>` },
    { t: "saisie", titre: "Former le gérondif",
      items: [
        { q: "<i class=\"la\">lego</i> : gérondif au génitif (de lire)", r: "legendi" }, { q: "<i class=\"la\">pugno, as, are</i> : gérondif à l'accusatif (après <i class=\"la\">ad</i>)", r: "pugnandum" },
        { q: "<i class=\"la\">audio</i> : gérondif à l'ablatif (en écoutant)", r: "audiendo" }, { q: "<i class=\"la\">capio</i> : gérondif au génitif (de prendre)", r: "capiendi" },
        { q: "<i class=\"la\">doceo, es, ere</i> : gérondif à l'ablatif (en enseignant)", r: "docendo" }, { q: "<i class=\"la\">scribo, is, ere</i> : gérondif au génitif (d'écrire)", r: "scribendi" }
      ] },
    { t: "lecon", titre: "L'adjectif verbal",
      texte: `<p>L'adjectif verbal se forme comme le gérondif, mais il se décline aux trois genres comme <i class="la">bonus</i> : <i class="la">ama<b class="des">ndus, a, um</b></i>. Il a un sens passif. Il sert à deux choses.</p>
<p><strong>1. Remplacer le gérondif quand celui-ci aurait un COD.</strong> Le latin évite « <i class="la">ad capiendum urbem</i> ». Il met le nom au cas voulu et accorde l'adjectif verbal avec lui :</p>
<blockquote class="latin">ad urbem capiendam : pour prendre la ville</blockquote>
<p>De même : <i class="la">spes regni recuperandi</i>, « l'espoir de recouvrer le royaume ».</p>
<p><strong>2. Exprimer l'obligation, avec le verbe <i class="la">sum</i>.</strong></p>
<blockquote class="latin">Carthago delenda est : Carthage doit être détruite.</blockquote>
<p>La personne qui doit agir se met au <strong>datif</strong> : <i class="la"><b>Mihi</b> liber legendus est</i>, « je dois lire le livre » (mot à mot : un livre est à lire pour moi).</p>
<aside class="savoir"><strong>Le savais-tu ?</strong> Agenda (« ce qui doit être fait »), légende (« ce qui doit être lu »), dividende, référendum : ce sont d'anciens adjectifs verbaux.</aside>` },
    { t: "tri", titre: "Gérondif ou adjectif verbal ?", q: "Le mot en <i class=\"la\">-nd-</i> est-il un gérondif (employé seul, comme un nom) ou un adjectif verbal (accordé avec un nom) ?",
      categories: ["Gérondif", "Adjectif verbal"],
      items: [
        { txt: "<i class=\"la\">ars <b>amandi</b></i>", cat: "Gérondif", expl: "l'art d'aimer" }, { txt: "<i class=\"la\">Carthago <b>delenda</b> est</i>", cat: "Adjectif verbal", expl: "Accordé avec <i class=\"la\">Carthago</i> : obligation." },
        { txt: "<i class=\"la\">ad pacem <b>petendam</b></i>", cat: "Adjectif verbal", expl: "Accordé avec <i class=\"la\">pacem</i> : pour demander la paix." }, { txt: "<i class=\"la\"><b>docendo</b> discimus</i>", cat: "Gérondif", expl: "en enseignant" },
        { txt: "<i class=\"la\">ad <b>pugnandum</b> parati</i>", cat: "Gérondif", expl: "prêts à combattre" }, { txt: "<i class=\"la\">liber <b>legendus</b></i>", cat: "Adjectif verbal", expl: "un livre à lire" },
        { txt: "<i class=\"la\">cupidus <b>videndi</b></i>", cat: "Gérondif", expl: "désireux de voir" }, { txt: "<i class=\"la\">ad urbem <b>capiendam</b></i>", cat: "Adjectif verbal", expl: "pour prendre la ville" }
      ] },
    { t: "version", titre: "Phrases : ordres, gérondifs, obligations",
      vocab: ["defendo, is, ere, defendi, defensum : défendre", "deleo, es, ere, delevi, deletum : détruire", "disco, is, ere, didici : apprendre", "discipulus, i, m : l'élève", "doceo, es, ere, docui, doctum : enseigner", "paratus, a, um : prêt", "timeo, es, ere, timui : craindre"],
      phrases: [
        { la: "Legite libros, discipuli !", fr: "Lisez des livres, élèves !" },
        { la: "Noli timere, puer.", fr: "N'aie pas peur, mon enfant." },
        { la: "Milites ad pugnandum parati erant.", fr: "Les soldats étaient prêts à combattre." },
        { la: "Caesar ad urbem capiendam venit.", fr: "César vint pour prendre la ville.", note: "Adjectif verbal accordé avec <i class=\"la\">urbem</i>, à la place d'un gérondif avec COD." },
        { la: "Carthago delenda est.", fr: "Carthage doit être détruite.", note: "Phrase attribuée à Caton l'Ancien." },
        { la: "Docendo discimus.", fr: "C'est en enseignant qu'on apprend." },
        { la: "Nobis patria defendenda est.", fr: "Nous devons défendre la patrie.", aide: "<i class=\"la\">nobis</i> : datif, celui qui doit agir." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li>Impératif : <i class="la">ama, amate</i> ; <i class="la">lege, legite</i> ; <i class="la">dic, duc, fac, fer</i>. Défense : <i class="la">noli, nolite</i> + infinitif.</li>
<li>Gérondif (radical + <i class="la">-nd-</i>) : <i class="la">ad legendum</i> (pour lire), <i class="la">legendi</i> (de lire), <i class="la">legendo</i> (en lisant).</li>
<li>Adjectif verbal (<i class="la">-ndus, a, um</i>) : remplace le gérondif suivi d'un COD (<i class="la">ad urbem capiendam</i>) ; avec <i class="la">sum</i>, exprime l'obligation (<i class="la">Carthago delenda est</i>), l'agent au datif.</li></ul>` }
  ]
});

insererApres("c26", {
  id: "c25", titre: "Le subjonctif", resume: "Former les quatre temps du subjonctif, puis comprendre ut, ne, cum et l'interrogative indirecte",
  etapes: [
    { t: "lecon", titre: "Le subjonctif présent",
      texte: `<p>L'indicatif présente un fait comme réel. Le <strong>subjonctif</strong> présente une action comme souhaitée, possible, ou dépendante d'une autre. Il a quatre temps : présent, imparfait, parfait, plus-que-parfait.</p>
<p><strong>Au présent, on change la voyelle</strong> :</p>
<ul><li>1re conjugaison : <b class="des">-e-</b> (<i class="la">amo</i> donne <i class="la">amem</i>) ;</li><li>toutes les autres : <b class="des">-a-</b> (<i class="la">moneam, legam, capiam, audiam</i>).</li></ul>
${T("Subjonctif présent actif", ["Personne", "amo", "moneo", "lego", "capio", "audio", "sum"], [["1re sg.", "amem", "moneam", "legam", "capiam", "audiam", "sim"], ["2e sg.", "ames", "moneas", "legas", "capias", "audias", "sis"], ["3e sg.", "amet", "moneat", "legat", "capiat", "audiat", "sit"], ["1re pl.", "amemus", "moneamus", "legamus", "capiamus", "audiamus", "simus"], ["2e pl.", "ametis", "moneatis", "legatis", "capiatis", "audiatis", "sitis"], ["3e pl.", "ament", "moneant", "legant", "capiant", "audiant", "sint"]])}
<p>Au passif, on prend les désinences passives : <i class="la">amer, ameris, ametur</i>…</p>
<aside class="attention"><strong>Ne pas confondre.</strong> <i class="la">amat</i> (indicatif) et <i class="la">amet</i> (subjonctif) ; <i class="la">leget</i> (futur) et <i class="la">legat</i> (subjonctif) ; et <i class="la">legam</i>, qui est à la fois un futur et un subjonctif présent.</aside>` },
    { t: "lecon", titre: "Les trois autres temps",
      texte: `<p><strong>L'imparfait</strong> est le plus facile : <strong>infinitif présent + désinences</strong>.</p>
${T("Subjonctif imparfait actif", ["Personne", "amo", "lego", "sum"], [["1re sg.", "amare<b class=\"des\">m</b>", "legere<b class=\"des\">m</b>", "esse<b class=\"des\">m</b>"], ["2e sg.", "amare<b class=\"des\">s</b>", "legere<b class=\"des\">s</b>", "esse<b class=\"des\">s</b>"], ["3e sg.", "amare<b class=\"des\">t</b>", "legere<b class=\"des\">t</b>", "esse<b class=\"des\">t</b>"], ["1re pl.", "amare<b class=\"des\">mus</b>", "legere<b class=\"des\">mus</b>", "esse<b class=\"des\">mus</b>"], ["2e pl.", "amare<b class=\"des\">tis</b>", "legere<b class=\"des\">tis</b>", "esse<b class=\"des\">tis</b>"], ["3e pl.", "amare<b class=\"des\">nt</b>", "legere<b class=\"des\">nt</b>", "esse<b class=\"des\">nt</b>"]])}
<p><strong>Le parfait</strong> : radical du parfait + <b class="des">-erim, -eris, -erit, -erimus, -eritis, -erint</b> (<i class="la">amaverim</i>).</p>
<p><strong>Le plus-que-parfait</strong> : <strong>infinitif parfait + désinences</strong> (<i class="la">amavisse-m, amavisse-s</i>… ; <i class="la">fuissem</i>).</p>
<p>Au passif, les deux derniers se forment avec le participe : <i class="la">amatus sim</i>, <i class="la">amatus essem</i>.</p>
<aside class="retenir"><strong>Deux recettes.</strong> Imparfait : infinitif présent + <i class="la">-m, -s, -t</i>… Plus-que-parfait : infinitif parfait + <i class="la">-m, -s, -t</i>…</aside>` },
    { t: "saisie", titre: "Former le subjonctif",
      items: [
        { q: "<i class=\"la\">amo</i> : subjonctif présent, 3e personne du singulier", r: "amet" }, { q: "<i class=\"la\">lego</i> : subjonctif présent, 3e personne du pluriel", r: "legant" },
        { q: "<i class=\"la\">video, es, ere</i> : subjonctif présent, 1re personne du pluriel", r: "videamus" }, { q: "<i class=\"la\">sum</i> : subjonctif présent, 3e personne du singulier", r: "sit" },
        { q: "<i class=\"la\">sum</i> : subjonctif imparfait, 3e personne du singulier", r: "esset" }, { q: "<i class=\"la\">capio</i> (infinitif <i class=\"la\">capere</i>) : subjonctif imparfait, 3e personne du pluriel", r: "caperent" },
        { q: "<i class=\"la\">venio</i> (infinitif <i class=\"la\">venire</i>) : subjonctif imparfait, 1re personne du singulier", r: "venirem" },
        { q: "<i class=\"la\">amo</i> (parfait <i class=\"la\">amavi</i>) : subjonctif plus-que-parfait, 3e personne du singulier", r: "amavisset" },
        { q: "<i class=\"la\">venio</i> (parfait <i class=\"la\">veni</i>) : subjonctif plus-que-parfait, 3e personne du singulier", r: "venisset" }
      ] },
    { t: "tri", titre: "Indicatif ou subjonctif ?", q: "Classe chaque forme.",
      categories: ["Indicatif", "Subjonctif"],
      items: [
        { txt: "<i class=\"la\">amat</i>", cat: "Indicatif", expl: "présent" }, { txt: "<i class=\"la\">amet</i>", cat: "Subjonctif", expl: "présent" },
        { txt: "<i class=\"la\">monet</i>", cat: "Indicatif", expl: "présent : le <i class=\"la\">-e-</i> appartient au radical" }, { txt: "<i class=\"la\">moneat</i>", cat: "Subjonctif", expl: "présent" },
        { txt: "<i class=\"la\">leget</i>", cat: "Indicatif", expl: "futur" }, { txt: "<i class=\"la\">legat</i>", cat: "Subjonctif", expl: "présent" },
        { txt: "<i class=\"la\">erat</i>", cat: "Indicatif", expl: "imparfait" }, { txt: "<i class=\"la\">esset</i>", cat: "Subjonctif", expl: "imparfait" },
        { txt: "<i class=\"la\">veniebant</i>", cat: "Indicatif", expl: "imparfait" }, { txt: "<i class=\"la\">venirent</i>", cat: "Subjonctif", expl: "imparfait : infinitif + <i class=\"la\">-nt</i>" },
        { txt: "<i class=\"la\">sunt</i>", cat: "Indicatif", expl: "présent" }, { txt: "<i class=\"la\">sint</i>", cat: "Subjonctif", expl: "présent" }
      ] },
    { t: "lecon", titre: "Les emplois : souhait, but, conséquence",
      texte: `<p><strong>Dans une phrase indépendante</strong>, le subjonctif exprime un souhait, un ordre ou une exhortation :</p>
<ul><li><i class="la">Gaudeamus !</i> Réjouissons-nous !</li><li><i class="la">Requiescat in pace.</i> Qu'il repose en paix.</li><li><i class="la">Fiat lux.</i> Que la lumière soit.</li></ul>
<p><strong>Dans une subordonnée</strong>, il suit certaines conjonctions :</p>
${T("", ["Conjonction", "Sens", "Exemple"], [["ut", "pour que (but)", "Venit <b>ut</b> te videat. Il vient pour te voir."], ["ne", "pour que… ne… pas", "Pugnant <b>ne</b> urbs capiatur. Ils combattent pour que la ville ne soit pas prise."], ["tam… ut", "si… que (conséquence)", "<b>Tam</b> laetus erat <b>ut</b> cantaret. Il était si joyeux qu'il chantait."], ["ut, après un verbe de volonté", "que", "Imperat <b>ut</b> taceant. Il ordonne qu'ils se taisent."]])}
<aside class="retenir"><strong>Le temps du subjonctif suit celui du verbe principal.</strong> Principal au présent ou au futur : subjonctif présent. Principal au passé : subjonctif imparfait. <i class="la">Venit ut videat</i> ; <i class="la">venit ut videret</i> (il vint pour voir).</aside>` },
    { t: "lecon", titre: "Les emplois : cum et l'interrogative indirecte",
      texte: `<p><strong><i class="la">cum</i> + subjonctif.</strong> Suivi d'un subjonctif imparfait ou plus-que-parfait, <i class="la">cum</i> signifie « <strong>comme</strong>, <strong>alors que</strong> » : il donne à la fois le moment et la cause.</p>
<ul><li><i class="la"><b>Cum</b> hostes appropinquarent, cives timebant.</i> Comme les ennemis approchaient, les citoyens avaient peur.</li>
<li><i class="la"><b>Cum</b> Caesar venisset, hostes fugerunt.</i> César étant arrivé, les ennemis s'enfuirent.</li></ul>
${T("Trois <i>cum</i> à distinguer", ["Construction", "Sens", "Exemple"], [["cum + ablatif", "avec (préposition)", "cum amicis"], ["cum + indicatif", "quand, lorsque", "cum venit, gaudeo"], ["cum + subjonctif", "comme, alors que, puisque, bien que", "cum veniret…"]])}
<p><strong>L'interrogative indirecte.</strong> Une question rapportée après un verbe comme « demander » ou « savoir » se met au subjonctif :</p>
<ul><li>Question directe : <i class="la">Quid facis ?</i> Que fais-tu ?</li><li>Question indirecte : <i class="la">Nescio quid faci<b class="des">a</b>s.</i> Je ne sais pas ce que tu fais.</li></ul>
<p>En français, on traduit par un indicatif.</p>` },
    { t: "quiz", titre: "Reconnaître l'emploi",
      questions: [
        { q: "<i class=\"la\">Venio <b>ut</b> te videam.</i>", choix: ["But : je viens pour te voir", "Conséquence : je viens si bien que je te vois", "Interrogative indirecte"], bon: 0, expl: "<i class=\"la\">ut</i> + subjonctif : pour que." },
        { q: "<i class=\"la\"><b>Tam</b> fortis erat <b>ut</b> omnes eum timerent.</i>", choix: ["Conséquence : il était si courageux que tous le craignaient", "But : il était courageux pour que tous le craignent", "Souhait"], bon: 0, expl: "<i class=\"la\">tam</i> annonce la conséquence." },
        { q: "<i class=\"la\"><b>Cum</b> Caesar venisset, hostes fugerunt.</i>", choix: ["« Comme César était arrivé… »", "« Avec César… »", "« Pour que César vienne… »"], bon: 0, expl: "<i class=\"la\">cum</i> + subjonctif plus-que-parfait." },
        { q: "<i class=\"la\"><b>Cum</b> amicis venit.</i>", choix: ["« Il vient avec ses amis. »", "« Comme ses amis viennent… »", "« Quand il vient vers ses amis… »"], bon: 0, expl: "<i class=\"la\">cum</i> + ablatif : c'est la préposition." },
        { q: "<i class=\"la\">Nescio ubi <b>sit</b>.</i>", choix: ["Interrogative indirecte : je ne sais pas où il est", "But : je ne sais pas pour qu'il soit là", "Souhait : qu'il soit là !"], bon: 0, expl: "Question rapportée : subjonctif en latin, indicatif en français." },
        { q: "<i class=\"la\">Gaudeamus igitur !</i>", choix: ["Exhortation : réjouissons-nous donc !", "Nous nous réjouissons donc.", "Pour que nous nous réjouissions."], bon: 0, expl: "Subjonctif dans une indépendante." }
      ] },
    { t: "version", titre: "Phrases au subjonctif",
      vocab: ["appropinquo, as, are, avi, atum : approcher", "canto, as, are, avi, atum : chanter", "desilio, is, ire, desilui : sauter", "impero, as, are, avi, atum : ordonner", "legatus, i, m : l'ambassadeur", "lux, lucis, f : la lumière", "nescio, is, ire, ivi, itum : ne pas savoir", "pax, pacis, f : la paix", "taceo, es, ere, tacui : se taire", "timeo, es, ere, timui : craindre"],
      phrases: [
        { la: "Legati venerunt ut pacem peterent.", fr: "Les ambassadeurs vinrent pour demander la paix.", aide: "Principal au passé : subjonctif imparfait." },
        { la: "Milites pugnant ne urbs capiatur.", fr: "Les soldats combattent pour que la ville ne soit pas prise." },
        { la: "Cum hostes appropinquarent, cives timebant.", fr: "Comme les ennemis approchaient, les citoyens avaient peur." },
        { la: "Horatius, cum pons paene fractus esset, in Tiberim desiluit.", fr: "Horatius, alors que le pont était presque brisé, sauta dans le Tibre.", note: "La phrase de la version d'Horatius Coclès : <i class=\"la\">fractus esset</i> est un subjonctif plus-que-parfait passif." },
        { la: "Tam laetus erat ut cantaret.", fr: "Il était si joyeux qu'il chantait." },
        { la: "Magister imperat ut discipuli taceant.", fr: "Le maître ordonne que les élèves se taisent." },
        { la: "Nescio quid dicas.", fr: "Je ne sais pas ce que tu dis." },
        { la: "Fiat lux.", fr: "Que la lumière soit.", aide: "Subjonctif présent de <i class=\"la\">fio</i>." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `${T("Former le subjonctif", ["Temps", "Recette", "Exemple"], [["Présent", "voyelle <b>-e-</b> (1re conj.) ou <b>-a-</b> (les autres)", "amem, moneam, legam, audiam ; sim"], ["Imparfait", "infinitif présent + désinences", "amarem, legerem, essem"], ["Parfait", "radical du parfait + -erim", "amaverim"], ["Plus-que-parfait", "infinitif parfait + désinences", "amavissem, fuissem"]])}
<ul><li>Indépendante : souhait, ordre (<i class="la">Gaudeamus</i>).</li><li><i class="la">ut</i> : pour que ; <i class="la">ne</i> : pour que… ne… pas ; <i class="la">tam… ut</i> : si… que.</li>
<li><i class="la">cum</i> + subjonctif : comme, alors que. Interrogative indirecte : subjonctif en latin, indicatif en français.</li></ul>` }
  ]
});

PARTIE_TRAD[0].sous = "Une méthode en six étapes, de la phrase simple aux textes d'auteurs. Chaque chapitre indique ce qu'il faut connaître avant de commencer.";
insererApres("c20", {
  id: "c27", titre: "Lire les auteurs", resume: "César, Phèdre, Catulle, Cicéron : de vrais textes, avec la méthode et le dictionnaire. L'aboutissement du parcours.",
  etapes: [
    { t: "lecon", titre: "Devant un vrai texte",
      texte: `<p>Les phrases des auteurs sont plus longues et plus libres que celles des exercices, mais la méthode reste la même. Trois conseils s'y ajoutent.</p>
<ol><li><strong>Lis ce qui entoure le texte</strong> : le titre, l'auteur, l'introduction en français. Savoir de quoi il est question évite la moitié des contresens.</li>
<li><strong>Avance proposition par proposition.</strong> Compte les verbes, repère les subordonnants, mets les subordonnées entre crochets.</li>
<li><strong>Ouvre le dictionnaire en dernier</strong>, pour les mots qui manquent, et lis l'article en entier.</li></ol>
${T("Les auteurs de ce chapitre", ["Auteur", "Époque", "Texte"], [["César", "I<sup>er</sup> siècle av. J.-C.", "<i>La Guerre des Gaules</i>, première phrase"], ["Phèdre", "I<sup>er</sup> siècle ap. J.-C.", "<i>Le Loup et l'Agneau</i>, début de la fable"], ["Catulle", "I<sup>er</sup> siècle av. J.-C.", "Poème 85"], ["Cicéron", "I<sup>er</sup> siècle av. J.-C.", "<i>Première Catilinaire</i>, première phrase"]])}` },
    { t: "guide", titre: "César : la Gaule en une phrase", intro: "C'est la première phrase de <i>La Guerre des Gaules</i>, le récit que César fait de sa conquête (58-51 av. J.-C.).",
      vocab: ["divido, is, ere, divisi, divisum : diviser", "Gallia, ae, f : la Gaule", "in + accusatif : en, dans", "omnis, e : tout, tout entier", "pars, partis, f : la partie", "tres, tria : trois"],
      la: "Gallia est omnis divisa in partes tres.", cas: "N X N X I A A",
      pas: [
        { q: "Le verbe est en deux mots : un participe et l'auxiliaire. Touche-les.", clic: [1, 3], marque: "verbe", expl: "Verbe : <i class=\"la\">est… divisa</i>, de <i class=\"la\">divido</i>. Les deux mots sont séparés, ce qui est fréquent.", indice: "L'auxiliaire <i class=\"la\">est</i> et le participe en <i class=\"la\">-a</i>." },
        { q: "<i class=\"la\">divisa est</i> : comment traduire ici ?", choix: ["« est divisée » : le participe décrit un état", "« divise »", "« divisera »"], bon: 0, expl: "César décrit un état de fait : « est divisée ». Le participe <i class=\"la\">divisa</i> est au féminin, comme le sujet." },
        { q: "Touche tous les mots du groupe sujet.", clic: [0, 2], marque: "sujet", expl: "Sujet : <i class=\"la\">Gallia omnis</i>, « la Gaule dans son ensemble ». L'adjectif <i class=\"la\">omnis</i> s'accorde avec <i class=\"la\">Gallia</i>.", indice: "Un nom au nominatif féminin singulier et un adjectif de la 2e classe accordé avec lui." },
        { q: "Touche le complément circonstanciel.", clic: [4, 5, 6], marque: "complément", expl: "<i class=\"la\">in partes tres</i> : <i class=\"la\">in</i> + accusatif, « en trois parties »." }
      ],
      motamot: "la Gaule / est / tout entière / divisée / en parties trois", fr: "La Gaule, dans son ensemble, est divisée en trois parties." },
    { t: "version", titre: "César : la suite de la phrase", intro: "César nomme ensuite les trois peuples. Les verbes sous-entendus sont à rétablir.",
      vocab: ["alius, a, ud : autre, un autre", "appello, as, are, avi, atum : appeler", "Aquitani, orum, m pl : les Aquitains", "Belgae, arum, m pl : les Belges", "Celtae, arum, m pl : les Celtes", "Galli, orum, m pl : les Gaulois", "incolo, is, ere, incolui : habiter", "ipse, ipsa, ipsum : lui-même", "lingua, ae, f : la langue", "noster, tra, trum : notre", "tertius, a, um : troisième", "unus, a, um : un, l'un"],
      phrases: [
        { la: "quarum unam incolunt Belgae,", fr: "dont les Belges habitent l'une,", aide: "<i class=\"la\">quarum</i> : relatif au génitif féminin pluriel, antécédent <i class=\"la\">partes</i>. <i class=\"la\">Belgae</i> : sujet, placé après le verbe." },
        { la: "aliam Aquitani,", fr: "les Aquitains une autre,", aide: "Le verbe <i class=\"la\">incolunt</i> est sous-entendu." },
        { la: "tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.", fr: "et la troisième, ceux qui sont appelés Celtes dans leur propre langue, Gaulois dans la nôtre.", note: "<i class=\"la\">ipsorum lingua</i> et <i class=\"la\">nostra</i> (sous-entendu <i class=\"la\">lingua</i>) sont des ablatifs : « dans la langue d'eux-mêmes », « dans la nôtre ». <i class=\"la\">appellantur</i> : présent passif." }
      ] },
    { t: "guide", titre: "Phèdre : le loup et l'agneau", intro: "Phèdre a mis en vers latins les fables d'Ésope. La Fontaine s'en est inspiré.",
      vocab: ["ad + accusatif : vers, à", "agnus, i, m : l'agneau", "compello, is, ere, compuli, compulsum : pousser", "idem, eadem, idem : le même", "lupus, i, m : le loup", "rivus, i, m : le ruisseau", "sitis, is, f : la soif"],
      la: "Ad rivum eundem lupus et agnus venerant, siti compulsi.", cas: "I A A N I N X B N",
      pas: [
        { q: "Où est le verbe conjugué ?", clic: [6], marque: "verbe", expl: "Verbe : <i class=\"la\">venerant</i>.", indice: "<i class=\"la\">compulsi</i> est un participe." },
        { q: "Analyse <i class=\"la\">venerant</i>.", choix: ["Plus-que-parfait, 3e personne du pluriel : « ils étaient venus »", "Parfait, 3e personne du pluriel : « ils vinrent »", "Imparfait, 3e personne du pluriel : « ils venaient »"], bon: 0, expl: "<i class=\"la\">venerant</i> : plus-que-parfait (<i class=\"la\">-era-</i>), 3e personne du pluriel." },
        { q: "Touche tous les mots du groupe sujet.", clic: [3, 4, 5], marque: "sujet", expl: "Sujet : <i class=\"la\">lupus et agnus</i>, deux nominatifs coordonnés, d'où le verbe au pluriel." },
        { q: "Touche le complément de lieu.", clic: [0, 1, 2], marque: "complément de lieu", expl: "<i class=\"la\">ad rivum eundem</i> : « au même ruisseau ». <i class=\"la\">eundem</i> est l'accusatif de <i class=\"la\">idem</i>." },
        { q: "<i class=\"la\">compulsi</i> est un participe parfait passif au nominatif pluriel. À quoi se rapporte-t-il ?", choix: ["Au sujet, <i class=\"la\">lupus et agnus</i> : c'est un participe apposé", "À <i class=\"la\">siti</i> : c'est un ablatif absolu", "À <i class=\"la\">rivum</i>"], bon: 0, expl: "<i class=\"la\">compulsi</i> : participe apposé au sujet, « poussés ». Ce n'est pas un ablatif absolu, puisqu'il est au nominatif." },
        { q: "Quelle est la fonction de <i class=\"la\">siti</i> ?", choix: ["Ablatif de cause : « par la soif »", "Datif : « à la soif »", "Génitif : « de la soif »"], bon: 0, expl: "<i class=\"la\">siti</i> : ablatif de <i class=\"la\">sitis</i>, complément de cause du participe." }
      ],
      motamot: "au ruisseau même / le loup et l'agneau / étaient venus / par la soif / poussés", fr: "Un loup et un agneau étaient venus au même ruisseau, poussés par la soif." },
    { t: "version", titre: "Phèdre : la suite",
      vocab: ["inferior, ius : plus bas (comparatif)", "longe : loin, de loin", "-que : et (se colle au mot qu'il relie)", "sto, as, are, steti, statum : se tenir debout", "superior, ius : plus haut (comparatif)"],
      phrases: [
        { la: "Superior stabat lupus,", fr: "Le loup se tenait en amont,", aide: "<i class=\"la\">superior</i> : comparatif au nominatif, accordé avec <i class=\"la\">lupus</i>. Mot à mot : « plus haut »." },
        { la: "longeque inferior agnus.", fr: "et l'agneau bien plus bas.", note: "<i class=\"la\">longeque</i> = <i class=\"la\">et longe</i>. Le verbe <i class=\"la\">stabat</i> est sous-entendu. L'eau coule donc du loup vers l'agneau : retiens-le pour la suite de la fable." }
      ] },
    { t: "version", titre: "Catulle : deux vers", intro: "Catulle résume en deux vers la passion qui le lie à celle qu'il appelle Lesbia. C'est l'un des poèmes les plus célèbres de la littérature latine.",
      vocab: ["excrucio, as, are, avi, atum : torturer", "facio, is, ere, feci, factum : faire", "fio, fis, fieri, factus sum : se produire, arriver", "fortasse : peut-être", "nescio, is, ire, ivi, itum : ne pas savoir", "odi, odisse : haïr (parfait à sens présent)", "quare : pourquoi", "requiro, is, ere, requisivi, requisitum : demander", "sentio, is, ire, sensi, sensum : sentir"],
      phrases: [
        { la: "Odi et amo.", fr: "Je hais et j'aime.", note: "<i class=\"la\">odi</i> a la forme d'un parfait, mais le sens d'un présent." },
        { la: "Quare id faciam, fortasse requiris.", fr: "Pourquoi je le fais, tu le demandes peut-être.", aide: "<i class=\"la\">quare id faciam</i> : interrogative indirecte, d'où le subjonctif <i class=\"la\">faciam</i>. <i class=\"la\">id</i> : neutre de <i class=\"la\">is</i>, « cela »." },
        { la: "Nescio, sed fieri sentio et excrucior.", fr: "Je ne sais pas, mais je sens que cela se produit, et je suis à la torture.", note: "<i class=\"la\">fieri sentio</i> : proposition infinitive, « je sens que cela arrive ». <i class=\"la\">excrucior</i> : présent passif, 1re personne." }
      ] },
    { t: "version", titre: "Cicéron et César : deux phrases célèbres", intro: "En 63 av. J.-C., le consul Cicéron dénonce devant le sénat le complot de Catilina. La première phrase de son discours est restée fameuse.",
      vocab: ["abutor, eris, i, abusus sum (+ ablatif) : abuser de", "patientia, ae, f : la patience", "quo usque : jusqu'où, jusqu'à quand", "tandem : enfin, donc", "vinco, is, ere, vici, victum : vaincre"],
      phrases: [
        { la: "Quo usque tandem abutere, Catilina, patientia nostra ?", fr: "Jusqu'à quand enfin, Catilina, abuseras-tu de notre patience ?", note: "<i class=\"la\">abutere</i> = <i class=\"la\">abuteris</i> : futur, 2e personne, d'un verbe déponent qui se construit avec l'ablatif (<i class=\"la\">patientia nostra</i>). <i class=\"la\">Catilina</i> : vocatif." },
        { la: "Veni, vidi, vici.", fr: "Je suis venu, j'ai vu, j'ai vaincu.", note: "Trois parfaits à la 1re personne. D'après Suétone, César résuma ainsi une victoire éclair, en 47 av. J.-C." }
      ] },
    { t: "quiz", titre: "Retour sur les textes", intro: "Tout ce que tu as appris dans le parcours se retrouve dans ces quelques lignes.",
      questions: [
        { q: "Dans <i class=\"la\">quarum unam incolunt Belgae</i>, quel est le sujet de <i class=\"la\">incolunt</i> ?", choix: ["<i class=\"la\">Belgae</i>", "<i class=\"la\">unam</i>", "<i class=\"la\">quarum</i>"], bon: 0, expl: "Nominatif pluriel, placé après le verbe. <i class=\"la\">unam</i> est le COD." },
        { q: "Dans la fable, pourquoi <i class=\"la\">siti compulsi</i> n'est-il pas un ablatif absolu ?", choix: ["<i class=\"la\">compulsi</i> est au nominatif, accordé avec le sujet", "Il n'y a pas de virgule", "<i class=\"la\">siti</i> est au datif"], bon: 0, expl: "Un ablatif absolu réunit un nom et un participe tous deux à l'ablatif." },
        { q: "Chez Catulle, pourquoi <i class=\"la\">faciam</i> est-il au subjonctif ?", choix: ["C'est une interrogative indirecte, après <i class=\"la\">requiris</i>", "C'est un souhait", "C'est un futur"], bon: 0, expl: "« Tu demandes pourquoi je le fais. »" },
        { q: "Chez Cicéron, <i class=\"la\">patientia nostra</i> est à l'ablatif parce que…", choix: ["<i class=\"la\">abutor</i> se construit avec l'ablatif", "c'est un complément de lieu", "c'est le sujet"], bon: 0, expl: "Le dictionnaire l'indique : <i class=\"la\">abutor</i> + ablatif." },
        { q: "<i class=\"la\">Veni, vidi, vici</i> : à quel temps sont ces trois verbes ?", choix: ["Au parfait", "Au présent", "À l'imparfait"], bon: 0, expl: "1re personne du singulier du parfait : le 4e temps primitif." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li>Je lis le <strong>titre et l'introduction</strong> avant le latin.</li><li>Je <strong>découpe</strong> : un verbe conjugué, une proposition.</li>
<li>Je me méfie des <strong>mots séparés</strong> (<i class="la">est omnis divisa</i>) et des <strong>mots sous-entendus</strong> (<i class="la">aliam Aquitani</i>).</li>
<li>Je vérifie le <strong>cas</strong> d'un participe avant de parler d'ablatif absolu.</li><li>J'ouvre le <strong>dictionnaire</strong> pour la construction autant que pour le sens (<i class="la">abutor</i> + ablatif).</li></ul>
<aside class="retenir"><strong>Ad astra.</strong> Tu lis maintenant César, Phèdre, Catulle et Cicéron dans le texte. La suite du voyage, ce sont les textes eux-mêmes.</aside>` }
  ]
});

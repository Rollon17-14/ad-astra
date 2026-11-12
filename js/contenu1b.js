/* CONTENU — chapitre « Les fonctions et les cas », inséré juste après l'introduction (identifiant c17).
   Les numéros affichés suivent l'ordre du parcours ; l'identifiant, lui, ne change jamais. */
PARTIE1[0].chapitres.splice(1, 0, {
  id: "c17", titre: "Les fonctions et les cas", resume: "Réviser les fonctions en français, puis découvrir les six cas qui les expriment en latin",
  etapes: [
    { t: "lecon", titre: "Pourquoi réviser les fonctions ?",
      texte: `<p>En français, c'est la <strong>place</strong> des mots qui dit qui fait quoi. Compare :</p>
<blockquote class="latin" style="font-style:normal">Le loup voit l'agneau. &nbsp;/&nbsp; L'agneau voit le loup.</blockquote>
<p>Les mots sont les mêmes ; l'ordre a changé, et le sens aussi.</p>
<p>En latin, c'est la <strong>terminaison</strong> de chaque mot qui indique sa fonction. L'ordre des mots est donc libre :</p>
<blockquote class="latin">Lupus agnum videt. &nbsp;/&nbsp; Agnum lupus videt.</blockquote>
<p>Ces deux phrases veulent dire la même chose : « le loup voit l'agneau ». <i class="la">lup<b class="des">us</b></i> porte la marque du sujet, <i class="la">agn<b class="des">um</b></i> celle du COD, où qu'ils soient placés.</p>
<aside class="retenir"><strong>Conséquence.</strong> Pour traduire du latin, il faut savoir reconnaître les fonctions sans hésiter. On les révise donc d'abord en français.</aside>` },
    { t: "lecon", titre: "Révision : le sujet et l'attribut du sujet",
      texte: `<p><strong>Le sujet</strong> fait ou subit l'action exprimée par le verbe, et commande son accord. On le trouve en posant la question « <strong>qui est-ce qui</strong> » ou « <strong>qu'est-ce qui</strong> » devant le verbe.</p>
<ul><li><b>Les soldats</b> défendent la ville. Qui est-ce qui défend ? Les soldats.</li>
<li>Dans la forêt vivait <b>un vieux loup</b>. Qui est-ce qui vivait ? Un vieux loup. Le sujet peut être placé après le verbe.</li></ul>
<p><strong>L'attribut du sujet</strong> exprime une qualité ou une identité du sujet, par l'intermédiaire d'un <strong>verbe d'état</strong> : être, paraître, sembler, devenir, rester, demeurer.</p>
<ul><li>Rome est <b>grande</b>. Cicéron devient <b>consul</b>.</li></ul>
<aside class="attention"><strong>Attribut ou COD ?</strong> « Cicéron devient consul » : consul et Cicéron sont la même personne, c'est un attribut. « Cicéron salue le consul » : ce sont deux personnes différentes, c'est un COD.</aside>` },
    { t: "quiz", titre: "Trouver le sujet", intro: "Quel est le sujet du verbe en gras ?",
      questions: [
        { q: "Chaque matin, les marchands <b>ouvrent</b> leurs boutiques.", choix: ["les marchands", "leurs boutiques", "chaque matin"], bon: 0, expl: "Qui est-ce qui ouvre ? Les marchands." },
        { q: "Sur la colline <b>se dresse</b> un temple magnifique.", choix: ["un temple magnifique", "la colline", "magnifique"], bon: 0, expl: "Sujet placé après le verbe : qu'est-ce qui se dresse ? Un temple magnifique." },
        { q: "Les lettres que le messager <b>apporte</b> viennent de Rome.", choix: ["le messager", "les lettres", "Rome"], bon: 0, expl: "Qui est-ce qui apporte ? Le messager. « Les lettres » est sujet de « viennent »." },
        { q: "Dans « Ce général <b>semble</b> courageux », « courageux » est…", choix: ["attribut du sujet", "COD", "sujet"], bon: 0, expl: "« Sembler » est un verbe d'état : « courageux » qualifie le sujet." },
        { q: "Dans laquelle de ces phrases « consul » est-il attribut du sujet ?", choix: ["Marius reste consul.", "Marius écoute le consul.", "Marius parle au consul."], bon: 0, expl: "Marius et le consul sont la même personne, reliés par un verbe d'état." }
      ] },
    { t: "lecon", titre: "Révision : le COD et le COI",
      texte: `<p>Ce sont les compléments <strong>essentiels</strong> du verbe : on ne peut ni les supprimer ni les déplacer librement.</p>
<p><strong>Le complément d'objet direct (COD)</strong> se rattache au verbe <strong>sans préposition</strong>. Question : verbe + « <strong>qui ?</strong> » ou « <strong>quoi ?</strong> ».</p>
<ul><li>Le poète raconte <b>une histoire</b>. Il raconte quoi ? Une histoire.</li><li>Le maître <b>les</b> félicite. Il félicite qui ? Les (eux).</li></ul>
<p><strong>Le complément d'objet indirect (COI)</strong> se rattache au verbe <strong>par une préposition</strong>, le plus souvent « à » ou « de ». Question : verbe + « <strong>à qui ? à quoi ? de qui ? de quoi ?</strong> ».</p>
<ul><li>Le sénat obéit <b>au consul</b>. Il obéit à qui ? Au consul.</li>
<li>Le maître donne un livre <b>à l'élève</b>. « Un livre » est COD, « à l'élève » est COI (on dit aussi complément d'objet second).</li>
<li>Il <b>lui</b> parle. Le pronom cache la préposition : il parle à lui.</li></ul>
<aside class="attention"><strong>Le piège de « de ».</strong> « Il mange <b>du pain</b> » : il mange quoi ? Du pain. C'est un COD, car « du » est ici un article et non une préposition.</aside>` },
    { t: "tri", titre: "COD, COI ou attribut ?", q: "Quelle est la fonction du groupe en gras ?",
      categories: ["COD", "COI", "Attribut du sujet"],
      items: [
        { txt: "Les Romains construisent <b>des routes</b>.", cat: "COD", expl: "Ils construisent quoi ?" }, { txt: "Les enfants obéissent <b>à leur père</b>.", cat: "COI", expl: "Ils obéissent à qui ?" },
        { txt: "César est <b>un grand général</b>.", cat: "Attribut du sujet", expl: "Verbe d'état : César = un grand général." }, { txt: "Le messager <b>lui</b> remet une lettre.", cat: "COI", expl: "Il remet à qui ? À lui." },
        { txt: "Le peuple <b>les</b> acclame.", cat: "COD", expl: "Il acclame qui ? Eux." }, { txt: "La ville paraît <b>déserte</b>.", cat: "Attribut du sujet", expl: "« Paraître » est un verbe d'état." },
        { txt: "Le vieil homme se souvient <b>de sa jeunesse</b>.", cat: "COI", expl: "Il se souvient de quoi ?" }, { txt: "Les soldats boivent <b>du vin</b>.", cat: "COD", expl: "Ils boivent quoi ? « du » est un article." },
        { txt: "Le consul donne des ordres <b>aux soldats</b>.", cat: "COI", expl: "Il donne à qui ?" }, { txt: "Romulus devient <b>roi</b>.", cat: "Attribut du sujet", expl: "« Devenir » est un verbe d'état." }
      ] },
    { t: "lecon", titre: "Révision : le complément du nom, les compléments circonstanciels, l'apostrophe",
      texte: `<p><strong>Le complément du nom</strong> précise un <strong>nom</strong> (et non le verbe). Il est le plus souvent introduit par « de ».</p>
<ul><li>les murailles <b>de Rome</b> ; le fils <b>du roi</b> ; la colère <b>du peuple</b>.</li></ul>
<p><strong>Les compléments circonstanciels (CC)</strong> précisent les <strong>circonstances</strong> de l'action. On peut en général les <strong>supprimer</strong> ou les <strong>déplacer</strong>.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Circonstance</th><th>Question</th><th>Exemple</th></tr></thead><tbody>
<tr><th>Lieu</th><td>où ?</td><td>Il habite <b>à Rome</b>.</td></tr><tr><th>Temps</th><td>quand ? combien de temps ?</td><td>Il part <b>le matin</b>.</td></tr>
<tr><th>Manière</th><td>comment ?</td><td>Il parle <b>avec calme</b>.</td></tr><tr><th>Moyen</th><td>avec quoi ?</td><td>Il combat <b>avec un glaive</b>.</td></tr>
<tr><th>Cause</th><td>pourquoi ?</td><td>Il tremble <b>de peur</b>.</td></tr><tr><th>Accompagnement</th><td>avec qui ?</td><td>Il vient <b>avec ses amis</b>.</td></tr></tbody></table></div>
<p><strong>L'apostrophe</strong> sert à interpeller quelqu'un. Elle est détachée par une virgule : « <b>Marcus</b>, écoute-moi ! »</p>
<aside class="attention"><strong>Trois « de » différents.</strong> Le livre <b>de Marcus</b> : complément du nom « livre ». Il parle <b>de Marcus</b> : COI du verbe « parle ». Il revient <b>de Rome</b> : complément circonstanciel de lieu.</aside>` },
    { t: "tri", titre: "Complément du nom, COI ou complément circonstanciel ?", q: "Quelle est la fonction du groupe en gras ?",
      categories: ["Complément du nom", "COI", "Complément circonstanciel"],
      items: [
        { txt: "Le temple <b>de Jupiter</b> domine la ville.", cat: "Complément du nom", expl: "Précise le nom « temple »." }, { txt: "Les ambassadeurs reviennent <b>de Carthage</b>.", cat: "Complément circonstanciel", expl: "Lieu : d'où reviennent-ils ?" },
        { txt: "Le sénat doute <b>de sa parole</b>.", cat: "COI", expl: "Il doute de quoi ?" }, { txt: "Les soldats marchent <b>pendant trois jours</b>.", cat: "Complément circonstanciel", expl: "Temps : combien de temps ?" },
        { txt: "La voix <b>de l'orateur</b> est forte.", cat: "Complément du nom", expl: "Précise le nom « voix »." }, { txt: "Le général parle <b>à ses troupes</b>.", cat: "COI", expl: "Il parle à qui ?" },
        { txt: "Les esclaves travaillent <b>dans les champs</b>.", cat: "Complément circonstanciel", expl: "Lieu : où ?" }, { txt: "Il a vaincu <b>par la ruse</b>.", cat: "Complément circonstanciel", expl: "Moyen ou manière : comment ?" },
        { txt: "Le courage <b>des Romains</b> est célèbre.", cat: "Complément du nom", expl: "Précise le nom « courage »." }, { txt: "Elle écrit une lettre <b>avec soin</b>.", cat: "Complément circonstanciel", expl: "Manière : comment ?" }
      ] },
    { t: "lecon", titre: "Les six cas du latin",
      texte: `<p>En latin, un nom change de terminaison selon sa fonction. Chaque forme s'appelle un <strong>cas</strong>, et l'ensemble des formes d'un nom s'appelle sa <strong>déclinaison</strong>.</p>
<p>Il y a six cas. Ce tableau est à connaître par cœur :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Cas</th><th>Fonction en français</th><th>Exemple</th></tr></thead><tbody>
<tr><th>Nominatif</th><td>Sujet, attribut du sujet</td><td><i class="la"><b>Roma</b> magna est.</i><br>Rome est grande.</td></tr>
<tr><th>Vocatif</th><td>Apostrophe</td><td><i class="la">O <b>Roma</b>, urbs aeterna !</i><br>Ô Rome, ville éternelle !</td></tr>
<tr><th>Accusatif</th><td>Complément d'objet direct (COD)</td><td><i class="la">Multi <b>Romam</b> viderunt.</i><br>Beaucoup ont vu Rome.</td></tr>
<tr><th>Génitif</th><td>Complément du nom (« de »)</td><td><i class="la">Moenia <b>Romae</b> alta sunt.</i><br>Les murailles de Rome sont hautes.</td></tr>
<tr><th>Datif</th><td>Complément d'objet indirect (« à », « pour »)</td><td><i class="la">Dei <b>Romae</b> favent.</i><br>Les dieux sont favorables à Rome.</td></tr>
<tr><th>Ablatif</th><td>Compléments circonstanciels (« par », « avec », « dans », « de »…)</td><td><i class="la">Legati a <b>Roma</b> missi sunt.</i><br>Des ambassadeurs ont été envoyés de Rome.</td></tr>
</tbody></table></div>
<aside class="retenir"><strong>À retenir.</strong> La terminaison donne le cas, et le cas donne la fonction. Dans ce site comme en cours, les cas sont toujours présentés dans cet ordre.</aside>
<p><strong>Le code couleur.</strong> Dans les tableaux et dans les analyses de phrases, chaque cas a sa couleur. Les mots invariables (prépositions, conjonctions, adverbes) sont en jaune, et les verbes sont écrits en rouge.</p>
<p class="legende-cas"><span class="cas c-N">nominatif</span><span class="cas c-V">vocatif</span><span class="cas c-A">accusatif</span><span class="cas c-G">génitif</span><span class="cas c-D">datif</span><span class="cas c-B">ablatif</span><span class="cas c-I">invariable</span><span class="cas c-X">verbe</span></p>` },
    { t: "tri", titre: "À chaque fonction son cas", q: "Quel cas latin exprime chacune de ces fonctions ?",
      categories: ["Nominatif", "Vocatif", "Accusatif", "Génitif", "Datif", "Ablatif"],
      items: [
        { txt: "Sujet", cat: "Nominatif" }, { txt: "Complément d'objet direct", cat: "Accusatif" }, { txt: "Complément du nom", cat: "Génitif" },
        { txt: "Complément d'objet indirect", cat: "Datif" }, { txt: "Complément circonstanciel", cat: "Ablatif" }, { txt: "Apostrophe", cat: "Vocatif" },
        { txt: "Attribut du sujet", cat: "Nominatif", expl: "Il désigne la même chose que le sujet : il prend le même cas." }
      ] },
    { t: "quiz", titre: "Du français au cas latin", intro: "Pour chaque groupe en gras, trouve sa fonction, donc le cas qu'il aurait en latin.",
      questions: [
        { q: "<b>La langue latine</b> a profondément influencé le français.", choix: ["Sujet : nominatif", "COD : accusatif", "Complément du nom : génitif"], bon: 0, expl: "C'est elle qui fait l'action d'influencer." },
        { q: "La langue latine a influencé <b>le français, l'espagnol et l'italien</b>.", choix: ["COD : accusatif", "Sujet : nominatif", "COI : datif"], bon: 0, expl: "Elle a influencé quoi ?" },
        { q: "De nombreux termes <b>de la science moderne</b> proviennent du latin.", choix: ["Complément du nom : génitif", "Complément circonstanciel : ablatif", "COD : accusatif"], bon: 0, expl: "Le groupe complète le nom « termes »." },
        { q: "De nombreux termes de la science moderne proviennent <b>du latin</b>.", choix: ["Complément circonstanciel (origine) : ablatif", "Complément du nom : génitif", "COI : datif"], bon: 0, expl: "L'origine s'exprime à l'ablatif, souvent avec <i class=\"la\">a/ab, e/ex</i> ou <i class=\"la\">de</i>." },
        { q: "<b>Aux étudiants</b>, les professeurs expliquent l'histoire de Rome.", choix: ["COI : datif", "Sujet : nominatif", "Apostrophe : vocatif"], bon: 0, expl: "Ils expliquent à qui ?" },
        { q: "Les professeurs expliquent l'histoire <b>de Rome</b>.", choix: ["Complément du nom : génitif", "COD : accusatif", "Complément circonstanciel : ablatif"], bon: 0, expl: "« De Rome » complète le nom « histoire »." },
        { q: "Le latin classique était <b>la langue de Cicéron</b>.", choix: ["Attribut du sujet : nominatif", "COD : accusatif", "Complément du nom : génitif"], bon: 0, expl: "Verbe « être » : le groupe désigne la même chose que le sujet." },
        { q: "<b>Citoyens</b>, écoutez le consul !", choix: ["Apostrophe : vocatif", "Sujet : nominatif", "COD : accusatif"], bon: 0, expl: "On interpelle les citoyens." }
      ] },
    { t: "lecon", titre: "Lire une phrase latine",
      texte: `<p>Puisque l'ordre des mots est libre, on ne traduit pas une phrase latine mot après mot. On la <strong>construit</strong> :</p>
<ol><li>je repère le <strong>verbe</strong> (souvent en fin de phrase) ;</li>
<li>je cherche le <strong>nominatif</strong> : c'est le sujet ;</li>
<li>je cherche l'<strong>accusatif</strong> : c'est le COD ;</li>
<li>je rattache les autres mots selon leur cas (génitif à un nom, datif et ablatif au verbe).</li></ol>
<p>Trois terminaisons suffisent pour s'exercer dès maintenant :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Terminaison</th><th>Cas</th><th>Exemple</th></tr></thead><tbody>
<tr><th><b class="des">-a</b></th><td>nominatif</td><td><i class="la">puella</i> : la jeune fille (sujet)</td></tr>
<tr><th><b class="des">-am</b></th><td>accusatif</td><td><i class="la">puellam</i> : la jeune fille (COD)</td></tr>
<tr><th><b class="des">-ae</b></th><td>génitif ou datif</td><td><i class="la">puellae</i> : de la jeune fille, à la jeune fille</td></tr></tbody></table></div>
<p><i class="la">Puella rosam amat</i> et <i class="la">Rosam puella amat</i> : dans les deux cas, <i class="la">puell<b class="des">a</b></i> est sujet, <i class="la">ros<b class="des">am</b></i> est COD. « La jeune fille aime la rose. »</p>` },
    { t: "quiz", titre: "Qui fait quoi ?", intro: "Appuie-toi sur les terminaisons, pas sur l'ordre des mots. <i class=\"la\">amat</i> : aime ; <i class=\"la\">videt</i> : voit ; <i class=\"la\">vocat</i> : appelle ; <i class=\"la\">dat</i> : donne.",
      questions: [
        { q: "<i class=\"la\">Rosam puella amat.</i>", choix: ["La jeune fille aime la rose.", "La rose aime la jeune fille."], bon: 0, expl: "<i class=\"la\">puella</i> : nominatif, sujet ; <i class=\"la\">rosam</i> : accusatif, COD." },
        { q: "<i class=\"la\">Puellam regina videt.</i> (<i class=\"la\">regina</i> : la reine)", choix: ["La reine voit la jeune fille.", "La jeune fille voit la reine."], bon: 0, expl: "Le premier mot est à l'accusatif : c'est le COD, bien qu'il soit en tête." },
        { q: "<i class=\"la\">Regina puellam vocat.</i>", choix: ["La reine appelle la jeune fille.", "La jeune fille appelle la reine."], bon: 0, expl: "<i class=\"la\">regina</i> : nominatif ; <i class=\"la\">puellam</i> : accusatif." },
        { q: "<i class=\"la\">Filiam reginae puella videt.</i> (<i class=\"la\">filia</i> : la fille)", choix: ["La jeune fille voit la fille de la reine.", "La fille de la reine voit la jeune fille.", "La reine voit la fille de la jeune fille."], bon: 0, expl: "<i class=\"la\">puella</i> sujet ; <i class=\"la\">filiam</i> COD ; <i class=\"la\">reginae</i> génitif, complément du nom <i class=\"la\">filiam</i>." },
        { q: "<i class=\"la\">Puella reginae rosam dat.</i>", choix: ["La jeune fille donne une rose à la reine.", "La reine donne une rose à la jeune fille.", "La jeune fille donne la reine à la rose."], bon: 0, expl: "<i class=\"la\">reginae</i> est ici au datif : COI de <i class=\"la\">dat</i>." }
      ] },
    { t: "saisie", titre: "Roma au bon cas", intro: "Écris la forme de <i class=\"la\">Roma, ae, f</i> qui convient : <i class=\"la\">Roma</i> (nominatif, vocatif, ablatif), <i class=\"la\">Romam</i> (accusatif), <i class=\"la\">Romae</i> (génitif, datif).",
      items: [
        { q: "<i class=\"la\">… in Italia sita est.</i> Rome est située en Italie. (sujet)", r: "Roma" },
        { q: "<i class=\"la\">Multi peregrini … visere volunt.</i> Beaucoup d'étrangers veulent visiter Rome. (COD)", r: "Romam" },
        { q: "<i class=\"la\">Fama … per orbem terrarum diffusa est.</i> La renommée de Rome s'est répandue dans le monde entier. (complément du nom)", r: "Romae" },
        { q: "<i class=\"la\">Dei … favent.</i> Les dieux sont favorables à Rome. (COI)", r: "Romae" },
        { q: "<i class=\"la\">Poetae antiqui de … saepe canebant.</i> Les poètes anciens chantaient souvent au sujet de Rome. (complément circonstanciel, après <i class=\"la\">de</i>)", r: "Roma" },
        { q: "<i class=\"la\">O …, urbs aeterna !</i> Ô Rome, ville éternelle ! (apostrophe)", r: "Roma" }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Fonction</th><th>Question à poser</th><th>Cas latin</th></tr></thead><tbody>
<tr><th>Sujet</th><td>qui est-ce qui ? + verbe</td><td>Nominatif</td></tr>
<tr><th>Attribut du sujet</th><td>après être, sembler, devenir…</td><td>Nominatif</td></tr>
<tr><th>Apostrophe</th><td>on interpelle quelqu'un</td><td>Vocatif</td></tr>
<tr><th>COD</th><td>verbe + qui ? quoi ?</td><td>Accusatif</td></tr>
<tr><th>Complément du nom</th><td>précise un nom (« de »)</td><td>Génitif</td></tr>
<tr><th>COI</th><td>verbe + à qui ? à quoi ?</td><td>Datif</td></tr>
<tr><th>Complément circonstanciel</th><td>où ? quand ? comment ? avec quoi ? pourquoi ?</td><td>Ablatif</td></tr></tbody></table></div>
<ul><li>En latin, l'ordre des mots est libre : c'est la terminaison qui indique la fonction.</li>
<li>Pour construire une phrase : le verbe, puis le nominatif, puis l'accusatif, puis le reste.</li></ul>` }
  ]
});

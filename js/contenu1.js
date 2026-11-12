/* ============================================================
   CONTENU — Partie 1 (chapitres I à IV), d'après les cours 1 à 4.

   Types d'étapes :
     lecon   : { t, titre, texte (HTML), synthese? }
     qcm     : { t, titre, q, doc?, choix:[…], bon | bons:[…], expl, fixe? (ne pas mélanger) }
     quiz    : { t, titre, intro?, doc?, vocab?, questions:[{ q, choix, bon | bons, expl }] }
     tri     : { t, titre, q, categories:[…], items:[{ txt, cat, expl? }] }
     ordre   : { t, titre, q, lignes:[… dans le bon ordre], expl? }
     saisie  : { t, titre, intro?, vocab?, items:[{ q, r: "forme" | ["forme1", "forme2"] }] }
     tableau : { t, titre, intro?, modele (clé de MODELES), rad, nomSg?, mot, sens }
     analyse : { t, titre, intro?, items:[{ forme, mot, bons:["Ns","Gp"…] }] }
               codes : N V A G D B (B = ablatif) + s (singulier) ou p (pluriel)
     version : { t, titre, intro?, vocab?:["mot : sens"], phrases:[{ la, fr, aide?, note? }] }

   Ajoutez les nouvelles étapes À LA FIN d'un chapitre : la progression est enregistrée par position.
   ============================================================ */
var PARTIE1 = [{
  id: "p1", titre: "Entrer dans la langue", sous: "Les fonctions et les cas, les deux premières déclinaisons et la carte d'identité du verbe",
  chapitres: [
  {
    id: "c1", num: 1, titre: "La langue latine : histoire et héritage", resume: "D'où vient le latin et où on le retrouve aujourd'hui",
    facultatif: true, notePasser: "Ce chapitre d'introduction est facultatif : la langue elle-même commence au chapitre suivant, avec les cas.",
    etapes: [
      { t: "lecon", titre: "Un peu d'histoire",
        texte: `<p>Le latin est né dans le <strong>Latium</strong>, la région qui entoure Rome. C'est d'abord la langue d'une petite communauté. Avec l'expansion de la République puis de l'Empire romain, il devient la langue de l'administration, du droit, de la littérature et de la science dans une grande partie du monde méditerranéen.</p>
<p>Après la chute de l'Empire romain d'Occident, en <strong>476 ap. J.-C.</strong>, le latin évolue différemment selon les régions. Il donne naissance aux <strong>langues romanes</strong> : le français, l'espagnol, l'italien, le portugais, le roumain…</p>
<p>Le latin classique reste pourtant, pendant des siècles, la langue des lettrés, de l'Église et de la science en Europe. Aujourd'hui encore, on le retrouve dans le vocabulaire scientifique et juridique, et son étude aide à mieux comprendre notre propre langue.</p>
<aside class="savoir"><strong>Le savais-tu ?</strong> Le mot « roman » vient de <i class="la">romanice loqui</i>, « parler à la manière des Romains ».</aside>` },
      { t: "ordre", titre: "Remettre l'histoire dans l'ordre", q: "Range ces étapes de la plus ancienne à la plus récente.",
        lignes: ["Le latin est parlé par une petite communauté du Latium", "Rome s'étend : le latin devient la langue de l'administration et du droit", "L'Empire romain d'Occident tombe, en 476", "Le latin parlé se transforme en langues romanes", "Le latin survit dans le vocabulaire des sciences et du droit"],
        expl: "Une langue locale, devenue langue d'empire, puis mère des langues romanes." },
      { t: "lecon", titre: "Le latin dans notre langue",
        texte: `<p>Nous employons chaque jour des expressions latines sans y penser. En voici dix parmi les plus courantes :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Expression</th><th>Sens</th></tr></thead><tbody>
<tr><th><i class="la">et cetera</i> (etc.)</th><td>« et les autres choses », et ainsi de suite</td></tr>
<tr><th><i class="la">a priori</i></th><td>au premier abord, avant tout examen</td></tr>
<tr><th><i class="la">a posteriori</i></th><td>après coup, à partir de l'expérience</td></tr>
<tr><th><i class="la">a fortiori</i></th><td>à plus forte raison</td></tr>
<tr><th><i class="la">grosso modo</i></th><td>en gros, approximativement</td></tr>
<tr><th><i class="la">de facto</i></th><td>dans les faits (s'oppose à <i class="la">de jure</i>, « en droit »)</td></tr>
<tr><th><i class="la">in extremis</i></th><td>au dernier moment, de justesse</td></tr>
<tr><th><i class="la">ad hoc</i></th><td>« pour cela », qui convient exactement à un usage</td></tr>
<tr><th><i class="la">ex nihilo</i></th><td>à partir de rien</td></tr>
<tr><th><i class="la">alter ego</i></th><td>« un autre moi-même », un ami très proche</td></tr>
</tbody></table></div>
<p>Et aussi : <i class="la">carpe diem, mea culpa, curriculum vitae</i> (CV), <i class="la">nota bene</i> (N.B.), <i class="la">sine qua non, vice versa</i>…</p>` },
      { t: "quiz", titre: "Que veulent dire ces expressions ?",
        questions: [
          { q: "Il a rendu son devoir <i class=\"la\">in extremis</i>. Il l'a rendu…", choix: ["de justesse, au dernier moment", "en avance", "sans l'avoir relu"], bon: 0, expl: "<i class=\"la\">In extremis</i> : à la toute dernière limite." },
          { q: "Une commission <i class=\"la\">ad hoc</i> est une commission…", choix: ["créée spécialement pour cette question", "permanente", "secrète"], bon: 0, expl: "<i class=\"la\">Ad hoc</i> signifie « pour cela »." },
          { q: "« Il fait froid en octobre, <i class=\"la\">a fortiori</i> en janvier. » <i class=\"la\">A fortiori</i> signifie…", choix: ["à plus forte raison", "au premier abord", "par exception"], bon: 0, expl: "L'argument vaut encore davantage pour janvier." },
          { q: "Créer une entreprise <i class=\"la\">ex nihilo</i>, c'est la créer…", choix: ["à partir de rien", "à l'étranger", "avec un associé"], bon: 0, expl: "<i class=\"la\">Ex</i> : hors de ; <i class=\"la\">nihilo</i> : rien." },
          { q: "Laquelle de ces expressions signifie « dans les faits » ?", choix: ["<i class=\"la\">de facto</i>", "<i class=\"la\">a priori</i>", "<i class=\"la\">grosso modo</i>"], bon: 0, expl: "<i class=\"la\">De facto</i> s'oppose à <i class=\"la\">de jure</i>, « selon le droit »." }
        ] },
      { t: "lecon", titre: "Du latin aux États-Unis",
        texte: `<p>Le latin n'est pas resté en Europe. On le lit sur les billets, les sceaux et les frontons américains :</p>
<ul>
<li><strong><i class="la">E pluribus unum</i></strong>, « de plusieurs, un seul » : devise traditionnelle des États-Unis, gravée sur le Grand Sceau et sur la monnaie.</li>
<li><strong><i class="la">Semper fidelis</i></strong>, « toujours fidèle » : devise du corps des Marines.</li>
<li><strong><i class="la">Habeas corpus</i></strong>, littéralement « que tu aies le corps » : le recours qui protège contre une détention illégale.</li>
<li><strong>A.M.</strong> et <strong>P.M.</strong> : <i class="la">ante meridiem</i>, « avant midi », et <i class="la">post meridiem</i>, « après midi ».</li>
<li><strong><i class="la">Sic semper tyrannis</i></strong>, « il en va toujours ainsi des tyrans » : devise de l'État de Virginie.</li>
<li><strong><i class="la">Veritas</i></strong>, « vérité » : devise de l'université Harvard.</li>
<li><strong><i class="la">Si quaeris peninsulam amoenam, circumspice</i></strong>, « si tu cherches une péninsule agréable, regarde autour de toi » : devise du Michigan.</li>
</ul>` },
      { t: "qcm", titre: "Une devise sur un billet", q: "Sur un billet d'un dollar, on lit <i class=\"la\">E pluribus unum</i>. Que symbolise cette devise ?",
        choix: ["L'unité d'une nation formée de nombreux États", "La fidélité des soldats à leur pays", "La liberté de chaque citoyen face aux juges"], bon: 0,
        expl: "« De plusieurs, un seul » : une seule nation à partir de plusieurs États. La fidélité, c'est <i class=\"la\">semper fidelis</i> ; la protection face aux juges, c'est l'<i class=\"la\">habeas corpus</i>." },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Le latin est né dans le <strong>Latium</strong>, autour de Rome ; il s'est répandu avec la République puis l'Empire.</li>
<li>Après <strong>476</strong>, le latin parlé a donné les <strong>langues romanes</strong> : français, espagnol, italien, portugais, roumain.</li>
<li>Il vit encore dans nos expressions (<i class="la">a priori, in extremis, ad hoc</i>…), dans des devises (<i class="la">E pluribus unum</i>) et dans le vocabulaire des sciences et du droit.</li></ul>` }
    ]
  },
  {
    id: "c2", num: 2, titre: "La première déclinaison", resume: "Reconnaître la déclinaison d'un nom et décliner sur le modèle de rosa",
    etapes: [
      { t: "lecon", titre: "Identifier la déclinaison d'un nom",
        texte: `<p>Il existe <strong>cinq déclinaisons</strong>. Pour savoir à laquelle appartient un nom, on regarde comment le dictionnaire le présente. Un nom latin est toujours donné avec trois informations :</p>
<blockquote class="latin">rosa, ae, f : la rose</blockquote>
<ul><li>le <strong>nominatif singulier</strong> : <i class="la">rosa</i> ;</li>
<li>la terminaison du <strong>génitif singulier</strong> : <i class="la">-ae</i>, donc <i class="la">rosae</i> ;</li>
<li>le <strong>genre</strong> : m (masculin), f (féminin) ou n (neutre).</li></ul>
<p>C'est le <strong>génitif singulier</strong> qui révèle la déclinaison :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Déclinaison</th><th>Génitif singulier</th><th>Exemple</th></tr></thead><tbody>
<tr><th>1re</th><td><b class="des">-ae</b></td><td><i class="la">puella, puell<b class="des">ae</b>, f</i> : la jeune fille</td></tr>
<tr><th>2e</th><td><b class="des">-i</b></td><td><i class="la">dominus, domin<b class="des">i</b>, m</i> : le maître</td></tr>
<tr><th>3e</th><td><b class="des">-is</b></td><td><i class="la">rex, reg<b class="des">is</b>, m</i> : le roi</td></tr>
<tr><th>4e</th><td><b class="des">-us</b></td><td><i class="la">fructus, fruct<b class="des">us</b>, m</i> : le fruit</td></tr>
<tr><th>5e</th><td><b class="des">-ei</b></td><td><i class="la">res, r<b class="des">ei</b>, f</i> : la chose</td></tr>
</tbody></table></div>` },
      { t: "tri", titre: "Quelle déclinaison ?", q: "Regarde le génitif singulier et classe chaque nom.",
        categories: ["1re", "2e", "3e", "4e", "5e"],
        items: [
          { txt: "<i class=\"la\">silva, silvae, f</i> : la forêt", cat: "1re" }, { txt: "<i class=\"la\">ager, agri, m</i> : le champ", cat: "2e" },
          { txt: "<i class=\"la\">consul, consulis, m</i> : le consul", cat: "3e" }, { txt: "<i class=\"la\">manus, manus, f</i> : la main", cat: "4e" },
          { txt: "<i class=\"la\">dies, diei, m</i> : le jour", cat: "5e" }, { txt: "<i class=\"la\">templum, templi, n</i> : le temple", cat: "2e" },
          { txt: "<i class=\"la\">civitas, civitatis, f</i> : la cité", cat: "3e" }, { txt: "<i class=\"la\">portus, portus, m</i> : le port", cat: "4e" },
          { txt: "<i class=\"la\">poeta, poetae, m</i> : le poète", cat: "1re", expl: "Masculin, mais génitif en -ae : 1re déclinaison." }, { txt: "<i class=\"la\">flumen, fluminis, n</i> : le fleuve", cat: "3e" }
        ] },
      { t: "lecon", titre: "Le modèle : rosa, ae, f",
        texte: `<p>La première déclinaison regroupe surtout des noms <strong>féminins</strong>. Le nominatif singulier est en <i class="la">-a</i>, le génitif singulier en <i class="la">-ae</i>.</p>
${tDecl("rosa", { fonctions: true })}
<p>Le <strong>radical</strong> s'obtient en retirant la terminaison du génitif singulier : <i class="la">ros-ae</i> donne <i class="la">ros-</i>. On ajoute ensuite les terminaisons à ce radical.</p>
<aside class="attention"><strong>Formes identiques.</strong> <i class="la">rosa</i> : nominatif, vocatif et ablatif singuliers. <i class="la">rosae</i> : génitif et datif singuliers, nominatif et vocatif pluriels. <i class="la">rosis</i> : datif et ablatif pluriels. C'est le reste de la phrase qui permet de trancher.</aside>` },
      { t: "tableau", titre: "Décliner stella", intro: "Complète toute la déclinaison, sur le modèle de <i class=\"la\">rosa</i>.", modele: "rosa", rad: "stell", mot: "stella, ae, f", sens: "l'étoile" },
      { t: "analyse", titre: "Reconnaître les cas", intro: "Toutes ces formes viennent de <i class=\"la\">puella, ae, f</i> (la jeune fille).",
        items: [
          { forme: "puellam", mot: "puella, ae, f", bons: ["As"] }, { forme: "puellarum", mot: "puella, ae, f", bons: ["Gp"] },
          { forme: "puellis", mot: "puella, ae, f", bons: ["Dp", "Bp"] }, { forme: "puella", mot: "puella, ae, f", bons: ["Ns", "Vs", "Bs"] },
          { forme: "puellae", mot: "puella, ae, f", bons: ["Gs", "Ds", "Np", "Vp"] }
        ] },
      { t: "saisie", titre: "Donner la forme demandée", intro: "Mets <i class=\"la\">stella, ae, f</i> (l'étoile) à la forme demandée.",
        items: [
          { q: "Accusatif singulier", r: "stellam" }, { q: "Génitif pluriel", r: "stellarum" }, { q: "Datif singulier", r: "stellae" },
          { q: "Nominatif pluriel", r: "stellae" }, { q: "Ablatif singulier", r: "stella" }, { q: "Accusatif pluriel", r: "stellas" }, { q: "Datif pluriel", r: "stellis" }
        ] },
      { t: "lecon", titre: "Particularités : masculins et locatif",
        texte: `<p><strong>Des noms masculins.</strong> Quelques noms de la première déclinaison sont masculins : ils désignent souvent des métiers ou des rôles.</p>
<ul><li><i class="la">nauta, ae, m</i> : le marin</li><li><i class="la">agricola, ae, m</i> : le paysan</li><li><i class="la">poeta, ae, m</i> : le poète</li>
<li><i class="la">incola, ae, m</i> : l'habitant</li><li><i class="la">auriga, ae, m</i> : le cocher</li><li><i class="la">pirata, ae, m</i> : le pirate</li>
<li><i class="la">scriba, ae, m</i> : le scribe</li><li><i class="la">conviva, ae, m</i> : le convive</li>
<li>des noms propres d'hommes (<i class="la">Sulla, ae, m</i>) et de fleuves (<i class="la">Garumna, ae, m</i> : la Garonne).</li></ul>
<p>Ils se déclinent exactement comme <i class="la">rosa</i>, mais l'adjectif qui les accompagne se met au masculin.</p>
<p><strong>Le locatif.</strong> Pour les noms de villes, un cas supplémentaire indique le lieu où l'on est. À la première déclinaison, au singulier, il a la forme du génitif : <i class="la">Romae</i>, « à Rome ».</p>` },
      { t: "quiz", titre: "Attention aux exceptions",
        questions: [
          { q: "Lequel de ces noms est masculin ?", choix: ["<i class=\"la\">agricola, ae</i> : le paysan", "<i class=\"la\">silva, ae</i> : la forêt", "<i class=\"la\">fabula, ae</i> : l'histoire"], bon: 0, expl: "Un nom de métier : masculin, mais décliné comme <i class=\"la\">rosa</i>." },
          { q: "Quel est l'accusatif pluriel de <i class=\"la\">nauta, ae, m</i> ?", choix: ["<i class=\"la\">nautas</i>", "<i class=\"la\">nautos</i>", "<i class=\"la\">nautae</i>"], bon: 0, expl: "Le genre ne change rien aux terminaisons : <i class=\"la\">nautas</i>, comme <i class=\"la\">rosas</i>." },
          { q: "<i class=\"la\">Romae sum.</i> Que signifie cette phrase ?", choix: ["Je suis à Rome.", "Je suis de Rome.", "Je vais à Rome."], bon: 0, expl: "<i class=\"la\">Romae</i> est ici un locatif : le lieu où l'on est." }
        ] },
      { t: "saisie", titre: "Compléter les phrases", intro: "Écris le nom entre parenthèses au cas voulu par sa fonction.",
        items: [
          { q: "<i class=\"la\">(Silva) magna est.</i> La forêt est grande. (sujet)", r: "silva" },
          { q: "<i class=\"la\">Poeta (fabula) narrat.</i> Le poète raconte une histoire. (COD)", r: "fabulam" },
          { q: "<i class=\"la\">Agricola (terra) amat.</i> Le paysan aime la terre. (COD)", r: "terram" },
          { q: "<i class=\"la\">Regina (corona) portat.</i> La reine porte une couronne. (COD)", r: "coronam" },
          { q: "<i class=\"la\">Puellae epistulas (magistra) dant.</i> Les jeunes filles donnent des lettres à la maîtresse. (COI)", r: "magistrae" }
        ] },
      { t: "analyse", titre: "Comme au devoir", intro: "Voici le type d'analyse demandé en devoir de morphologie : pour chaque forme, tous les cas possibles.",
        items: [
          { forme: "rosarum", mot: "rosa, ae, f : la rose", bons: ["Gp"] }, { forme: "aquam", mot: "aqua, ae, f : l'eau", bons: ["As"] },
          { forme: "nautae", mot: "nauta, ae, m : le marin", bons: ["Gs", "Ds", "Np", "Vp"] }, { forme: "agricolas", mot: "agricola, ae, m : le paysan", bons: ["Ap"] },
          { forme: "patriis", mot: "patria, ae, f : la patrie", bons: ["Dp", "Bp"] }, { forme: "fortuna", mot: "fortuna, ae, f : la fortune", bons: ["Ns", "Vs", "Bs"] }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Un nom se présente ainsi : <i class="la">rosa, ae, f</i> (nominatif, génitif, genre).</li>
<li>Le <strong>génitif singulier</strong> donne la déclinaison : <i class="la">-ae</i> (1re), <i class="la">-i</i> (2e), <i class="la">-is</i> (3e), <i class="la">-us</i> (4e), <i class="la">-ei</i> (5e).</li>
<li>Radical : génitif singulier moins sa terminaison (<i class="la">ros-</i>).</li>
<li>Noms surtout féminins ; quelques masculins (<i class="la">nauta, agricola, poeta</i>…). Locatif : <i class="la">Romae</i>, « à Rome ».</li></ul>
${tDecl("rosa")}` }
    ]
  },
  {
    id: "c3", num: 3, titre: "La deuxième déclinaison", resume: "Les masculins comme dominus, les neutres comme templum, et une première version",
    etapes: [
      { t: "lecon", titre: "Les masculins : dominus, i, m",
        texte: `<p>La deuxième déclinaison se reconnaît à son <strong>génitif singulier en <i class="la">-i</i></strong>. Elle comprend des noms <strong>masculins</strong> et des noms <strong>neutres</strong>.</p>
<p>Les masculins ont en général un nominatif en <i class="la">-us</i>. Quelques-uns sont en <i class="la">-er</i> (<i class="la">puer, pueri, m</i> : l'enfant ; <i class="la">ager, agri, m</i> : le champ) ou en <i class="la">-ir</i> (<i class="la">vir, viri, m</i> : l'homme).</p>
${tDecl("dominus")}
<aside class="attention"><strong>Le vocatif en -e.</strong> C'est le seul cas, dans toutes les déclinaisons, où le vocatif singulier diffère du nominatif : <i class="la">domine !</i> « maître ! ». Pour les noms en <i class="la">-er</i> et <i class="la">-ir</i>, le vocatif reste identique au nominatif : <i class="la">puer !</i></aside>
<p>Radical : <i class="la">domin-i</i> donne <i class="la">domin-</i>. Pour <i class="la">ager, agri</i>, le radical est <i class="la">agr-</i> : il faut donc toujours partir du génitif.</p>` },
      { t: "tableau", titre: "Décliner servus", intro: "Complète la déclinaison, sur le modèle de <i class=\"la\">dominus</i>.", modele: "dominus", rad: "serv", mot: "servus, i, m", sens: "l'esclave" },
      { t: "lecon", titre: "Les neutres : templum, i, n",
        texte: `<p>Les neutres de la deuxième déclinaison ont un nominatif singulier en <i class="la">-um</i>.</p>
${tDecl("templum")}
<aside class="retenir"><strong>La règle des neutres</strong>, valable dans toutes les déclinaisons :
<ul><li>nominatif, vocatif et accusatif sont <strong>identiques</strong> ;</li><li>au pluriel, ces trois cas sont en <strong><i class="la">-a</i></strong>.</li></ul></aside>
<p>Aux autres cas, <i class="la">templum</i> se décline comme <i class="la">dominus</i>.</p>` },
      { t: "tableau", titre: "Décliner bellum", intro: "Complète la déclinaison, sur le modèle de <i class=\"la\">templum</i>.", modele: "templum", rad: "bell", mot: "bellum, i, n", sens: "la guerre" },
      { t: "analyse", titre: "Reconnaître les cas", intro: "Aide-toi des modèles <i class=\"la\">dominus</i> et <i class=\"la\">templum</i>.",
        items: [
          { forme: "templa", mot: "templum, i, n", bons: ["Np", "Vp", "Ap"] }, { forme: "domino", mot: "dominus, i, m", bons: ["Ds", "Bs"] },
          { forme: "dominorum", mot: "dominus, i, m", bons: ["Gp"] }, { forme: "templum", mot: "templum, i, n", bons: ["Ns", "Vs", "As"] },
          { forme: "domini", mot: "dominus, i, m", bons: ["Gs", "Np", "Vp"] }, { forme: "dominis", mot: "dominus, i, m", bons: ["Dp", "Bp"] }
        ] },
      { t: "saisie", titre: "Mettre au cas demandé",
        items: [
          { q: "<i class=\"la\">servus, i, m</i> (l'esclave) : accusatif pluriel", r: "servos" },
          { q: "<i class=\"la\">bellum, i, n</i> (la guerre) : génitif singulier", r: "belli" },
          { q: "<i class=\"la\">amicus, i, m</i> (l'ami) : vocatif singulier", r: "amice" },
          { q: "<i class=\"la\">donum, i, n</i> (le cadeau) : datif pluriel", r: "donis" },
          { q: "<i class=\"la\">hortus, i, m</i> (le jardin) : ablatif singulier", r: "horto" },
          { q: "<i class=\"la\">forum, i, n</i> (la place publique) : nominatif pluriel", r: "fora" },
          { q: "<i class=\"la\">ager, agri, m</i> (le champ) : accusatif singulier", r: "agrum" }
        ] },
      { t: "qcm", titre: "Une forme, plusieurs analyses", q: "<i class=\"la\">lupi</i>, de <i class=\"la\">lupus, i, m</i> (le loup), peut être…",
        choix: ["un génitif singulier", "un nominatif pluriel", "un vocatif pluriel", "un datif singulier", "un accusatif pluriel"], bons: [0, 1, 2],
        expl: "<i class=\"la\">lupi</i> : « du loup », « les loups » (sujet) ou « loups ! ». Le datif singulier serait <i class=\"la\">lupo</i>, l'accusatif pluriel <i class=\"la\">lupos</i>." },
      { t: "saisie", titre: "Compléter les phrases", intro: "Écris le nom entre parenthèses à la forme demandée.",
        items: [
          { q: "<i class=\"la\">(Ager) magnus est.</i> Le champ est grand. (nominatif singulier)", r: "ager" },
          { q: "<i class=\"la\">Magister (puer) laudat.</i> Le maître loue les enfants. (accusatif pluriel de <i class=\"la\">puer, pueri, m</i>)", r: "pueros" },
          { q: "<i class=\"la\">In (oppidum) sunt multae viae.</i> Dans la place forte, il y a beaucoup de rues. (ablatif singulier de <i class=\"la\">oppidum, i, n</i>)", r: "oppido" },
          { q: "<i class=\"la\">Pericula (bellum) magna sunt.</i> Les dangers de la guerre sont grands. (génitif singulier)", r: "belli" }
        ] },
      { t: "tri", titre: "Première ou deuxième déclinaison ?", q: "Ces noms sont tirés de la version qui suit. Classe-les.",
        categories: ["1re déclinaison", "2e déclinaison"],
        items: [
          { txt: "<i class=\"la\">filia, ae, f</i> : la fille", cat: "1re déclinaison" }, { txt: "<i class=\"la\">filius, ii, m</i> : le fils", cat: "2e déclinaison" },
          { txt: "<i class=\"la\">regnum, i, n</i> : le royaume", cat: "2e déclinaison" }, { txt: "<i class=\"la\">unda, ae, f</i> : l'onde, le flot", cat: "1re déclinaison" },
          { txt: "<i class=\"la\">fluvius, ii, m</i> : le fleuve", cat: "2e déclinaison" }, { txt: "<i class=\"la\">lupa, ae, f</i> : la louve", cat: "1re déclinaison" },
          { txt: "<i class=\"la\">avunculus, i, m</i> : l'oncle", cat: "2e déclinaison" }, { txt: "<i class=\"la\">gloria, ae, f</i> : la gloire", cat: "1re déclinaison" },
          { txt: "<i class=\"la\">triumphus, i, m</i> : le triomphe", cat: "2e déclinaison" }, { txt: "<i class=\"la\">populus, i, m</i> : le peuple", cat: "2e déclinaison" }
        ] },
      { t: "version", titre: "Version : la fondation de Rome", intro: "Traduis phrase par phrase. Repère d'abord le verbe, puis le sujet (nominatif), puis le COD (accusatif).",
        vocab: ["avunculus, i, m : l'oncle maternel", "condunt : ils fondent", "curat : elle soigne", "desiderat : il désire", "educat : il élève", "filius, ii, m : le fils", "fluvius, ii, m : le fleuve", "geminus, a, um : jumeau", "gloria, ae, f : la gloire", "habet : elle a", "iacit : il jette", "in + accusatif : dans (avec mouvement)", "in + ablatif : dans, en (sans mouvement)", "invenit : elle trouve", "lupa, ae, f : la louve", "multus, a, um : nombreux", "parat : elle procure", "pastor : le berger", "populus, i, m : le peuple", "postea : ensuite", "puer, pueri, m : l'enfant", "regnum, i, n : le royaume", "sed : mais", "triumphus, i, m : le triomphe", "unda, ae, f : le flot"],
        phrases: [
          { la: "Rhea Silvia geminos filios habet : Romulum et Remum.", fr: "Rhéa Silvia a des fils jumeaux : Romulus et Rémus.", aide: "<i class=\"la\">filios</i> : accusatif pluriel, COD de <i class=\"la\">habet</i>." },
          { la: "Amulius, avunculus puerorum, regnum desiderat.", fr: "Amulius, l'oncle des enfants, désire le royaume.", aide: "<i class=\"la\">puerorum</i> : génitif pluriel, complément du nom <i class=\"la\">avunculus</i>." },
          { la: "Amulius pueros in undas fluvii iacit.", fr: "Amulius jette les enfants dans les flots du fleuve." },
          { la: "Sed lupa pueros invenit et curat.", fr: "Mais une louve trouve les enfants et les soigne." },
          { la: "Postea Faustulus pastor pueros educat.", fr: "Ensuite le berger Faustulus élève les enfants." },
          { la: "Romulus et Remus Romam in Italia condunt.", fr: "Romulus et Rémus fondent Rome en Italie." },
          { la: "Roma gloriam et triumphos multis populis parat.", fr: "Rome procure gloire et triomphes à de nombreux peuples.", aide: "<i class=\"la\">multis populis</i> : datif pluriel, COI de <i class=\"la\">parat</i>." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>2e déclinaison : génitif singulier en <i class="la">-i</i> ; masculins en <i class="la">-us</i> (ou <i class="la">-er, -ir</i>), neutres en <i class="la">-um</i>.</li>
<li>Vocatif singulier des noms en <i class="la">-us</i> : <i class="la">-e</i> (<i class="la">domine</i>).</li>
<li>Neutres : nominatif = vocatif = accusatif ; au pluriel, ces trois cas sont en <i class="la">-a</i>.</li></ul>
${tDecl("dominus")}${tDecl("templum")}` }
    ]
  },
  {
    id: "c4", num: 4, titre: "La conjugaison latine : notions de base", resume: "Les temps primitifs et les cinq conjugaisons",
    etapes: [
      { t: "lecon", titre: "Un verbe, des désinences",
        texte: `<p>En français, le verbe change de forme selon la personne, le nombre, le temps et le mode : je chant<b>e</b>, tu chant<b>es</b>, nous chant<b>ons</b>…</p>
<p>En latin, c'est pareil, et c'est encore la <strong>terminaison</strong> qui porte ces informations. Les terminaisons qui indiquent la personne s'appellent les <strong>désinences personnelles</strong>. Comme elles suffisent à identifier la personne, le latin n'exprime en général pas le pronom sujet : <i class="la">amo</i> signifie à lui seul « j'aime ».</p>` },
      { t: "lecon", titre: "Les temps primitifs, carte d'identité du verbe",
        texte: `<p>Pour conjuguer un verbe, il faut connaître ses <strong>temps primitifs</strong> : cinq formes de base, toujours données dans le même ordre, à partir desquelles on fabrique toutes les autres.</p>
<blockquote class="latin">amo, as, are, avi, atum : aimer</blockquote>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Forme</th><th>Ce qu'elle est</th><th>Traduction</th></tr></thead><tbody>
<tr><th><i class="la">amo</i></th><td>1re personne du singulier du présent</td><td>j'aime</td></tr>
<tr><th><i class="la">amas</i></th><td>2e personne du singulier du présent</td><td>tu aimes</td></tr>
<tr><th><i class="la">amare</i></th><td>infinitif présent</td><td>aimer</td></tr>
<tr><th><i class="la">amavi</i></th><td>1re personne du singulier du parfait</td><td>j'aimai, j'ai aimé</td></tr>
<tr><th><i class="la">amatum</i></th><td>supin</td><td>(sert à former le participe passé)</td></tr>
</tbody></table></div>
<p>Les trois premières formes permettent de classer le verbe dans une <strong>conjugaison</strong>. La quatrième sert aux temps du parfait, la cinquième aux participes.</p>` },
      { t: "ordre", titre: "Dans l'ordre du dictionnaire", q: "Remets les temps primitifs dans l'ordre où le dictionnaire les donne.",
        lignes: ["1re personne du singulier du présent (<i class=\"la\">amo</i>)", "2e personne du singulier du présent (<i class=\"la\">amas</i>)", "Infinitif présent (<i class=\"la\">amare</i>)", "1re personne du singulier du parfait (<i class=\"la\">amavi</i>)", "Supin (<i class=\"la\">amatum</i>)"] },
      { t: "lecon", titre: "Les cinq conjugaisons",
        texte: `<p>Les verbes latins se répartissent en cinq groupes, selon leur infinitif et la voyelle qui précède les désinences.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Conjugaison</th><th>Début des temps primitifs</th><th>Verbe modèle</th></tr></thead><tbody>
<tr><th>1re</th><td><i class="la">-o, -as, -are</i></td><td><i class="la">amo, as, are, avi, atum</i> : aimer</td></tr>
<tr><th>2e</th><td><i class="la">-eo, -es, -ere</i> (e long)</td><td><i class="la">moneo, es, ere, monui, monitum</i> : avertir</td></tr>
<tr><th>3e</th><td><i class="la">-o, -is, -ere</i> (e bref)</td><td><i class="la">lego, is, ere, legi, lectum</i> : lire</td></tr>
<tr><th>3e mixte</th><td><i class="la">-io, -is, -ere</i> (e bref)</td><td><i class="la">capio, is, ere, cepi, captum</i> : prendre</td></tr>
<tr><th>4e</th><td><i class="la">-io, -is, -ire</i></td><td><i class="la">audio, is, ire, ivi, itum</i> : entendre</td></tr>
</tbody></table></div>
<aside class="retenir"><strong>La méthode.</strong>
<ol><li>Infinitif en <i class="la">-are</i> : 1re. En <i class="la">-ire</i> : 4e.</li>
<li>Infinitif en <i class="la">-ere</i> : regarde la 1re forme. En <i class="la">-eo</i> : 2e. En <i class="la">-io</i> : 3e mixte. En <i class="la">-o</i> : 3e.</li></ol></aside>
<p>La 3e mixte porte bien son nom : son infinitif ressemble à celui de la 3e (<i class="la">capere</i>), mais sa première personne ressemble à celle de la 4e (<i class="la">capio</i>).</p>` },
      { t: "tri", titre: "À quelle conjugaison ? (1)", q: "Classe chaque verbe d'après ses temps primitifs.",
        categories: ["1re", "2e", "3e", "3e mixte", "4e"],
        items: [
          { txt: "<i class=\"la\">canto, as, are, avi, atum</i> : chanter", cat: "1re" }, { txt: "<i class=\"la\">video, es, ere, vidi, visum</i> : voir", cat: "2e" },
          { txt: "<i class=\"la\">scribo, is, ere, scripsi, scriptum</i> : écrire", cat: "3e" }, { txt: "<i class=\"la\">venio, is, ire, veni, ventum</i> : venir", cat: "4e" },
          { txt: "<i class=\"la\">facio, is, ere, feci, factum</i> : faire", cat: "3e mixte" }, { txt: "<i class=\"la\">navigo, as, are, avi, atum</i> : naviguer", cat: "1re" },
          { txt: "<i class=\"la\">doceo, es, ere, docui, doctum</i> : enseigner", cat: "2e" }, { txt: "<i class=\"la\">duco, is, ere, duxi, ductum</i> : conduire", cat: "3e" },
          { txt: "<i class=\"la\">dormio, is, ire, ivi, itum</i> : dormir", cat: "4e" }, { txt: "<i class=\"la\">iacio, is, ere, ieci, iactum</i> : jeter", cat: "3e mixte" }
        ] },
      { t: "tri", titre: "À quelle conjugaison ? (2)", q: "Même exercice, avec dix nouveaux verbes.",
        categories: ["1re", "2e", "3e", "3e mixte", "4e"],
        items: [
          { txt: "<i class=\"la\">pugno, as, are, avi, atum</i> : combattre", cat: "1re" }, { txt: "<i class=\"la\">terreo, es, ere, terrui, territum</i> : effrayer", cat: "2e" },
          { txt: "<i class=\"la\">mitto, is, ere, misi, missum</i> : envoyer", cat: "3e" }, { txt: "<i class=\"la\">audio, is, ire, ivi, itum</i> : entendre", cat: "4e" },
          { txt: "<i class=\"la\">fugio, is, ere, fugi, fugitum</i> : fuir", cat: "3e mixte" }, { txt: "<i class=\"la\">clamo, as, are, avi, atum</i> : crier", cat: "1re" },
          { txt: "<i class=\"la\">habeo, es, ere, habui, habitum</i> : avoir", cat: "2e" }, { txt: "<i class=\"la\">credo, is, ere, credidi, creditum</i> : croire", cat: "3e" },
          { txt: "<i class=\"la\">sentio, is, ire, sensi, sensum</i> : sentir", cat: "4e" }, { txt: "<i class=\"la\">rapio, is, ere, rapui, raptum</i> : enlever", cat: "3e mixte" }
        ] },
      { t: "saisie", titre: "Retrouver l'infinitif", intro: "Écris en entier l'infinitif présent de chaque verbe (la 3e forme des temps primitifs).",
        items: [
          { q: "<i class=\"la\">laudo, as, are, avi, atum</i> : louer", r: "laudare" }, { q: "<i class=\"la\">habeo, es, ere, habui, habitum</i> : avoir", r: "habere" },
          { q: "<i class=\"la\">mitto, is, ere, misi, missum</i> : envoyer", r: "mittere" }, { q: "<i class=\"la\">venio, is, ire, veni, ventum</i> : venir", r: "venire" },
          { q: "<i class=\"la\">facio, is, ere, feci, factum</i> : faire", r: "facere" }
        ] },
      { t: "quiz", titre: "Faire le point",
        questions: [
          { q: "Dans <i class=\"la\">moneo, es, ere, monui, monitum</i>, quelle forme est le parfait ?", choix: ["<i class=\"la\">monui</i>", "<i class=\"la\">monere</i>", "<i class=\"la\">monitum</i>"], bon: 0, expl: "La 4e forme : 1re personne du singulier du parfait, « j'avertis, j'ai averti »." },
          { q: "<i class=\"la\">lego</i> et <i class=\"la\">capio</i> ont tous deux un infinitif en <i class=\"la\">-ere</i>. Qu'est-ce qui les distingue ?", choix: ["La 1re forme : <i class=\"la\">-o</i> pour l'un, <i class=\"la\">-io</i> pour l'autre", "Le supin", "La 2e forme"], bon: 0, expl: "<i class=\"la\">lego</i> : 3e conjugaison ; <i class=\"la\">capio</i> : 3e mixte. Leur 2e forme est la même (<i class=\"la\">-is</i>)." },
          { q: "Un verbe en <i class=\"la\">-eo, -es, -ere</i> appartient à la…", choix: ["2e conjugaison", "3e conjugaison", "3e conjugaison mixte"], bon: 0, expl: "Comme <i class=\"la\">moneo, es, ere</i>." },
          { q: "À quoi sert le supin (<i class=\"la\">amatum</i>) ?", choix: ["À former le participe passé et les formes qui en dépendent", "À former l'imparfait", "À donner l'infinitif"], bon: 0, expl: "On le retrouvera avec les participes, dans la dernière partie du parcours." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Temps primitifs : <i class="la">amo, as, are, avi, atum</i> = présent 1re sg., présent 2e sg., infinitif, parfait 1re sg., supin.</li>
<li>Cinq conjugaisons, cinq verbes modèles à connaître :</li></ul>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Conjugaison</th><th>Modèle</th></tr></thead><tbody>
<tr><th>1re (<i class="la">-are</i>)</th><td><i class="la">amo, as, are, avi, atum</i> : aimer</td></tr>
<tr><th>2e (<i class="la">-eo, -ere</i>)</th><td><i class="la">moneo, es, ere, monui, monitum</i> : avertir</td></tr>
<tr><th>3e (<i class="la">-o, -ere</i>)</th><td><i class="la">lego, is, ere, legi, lectum</i> : lire</td></tr>
<tr><th>3e mixte (<i class="la">-io, -ere</i>)</th><td><i class="la">capio, is, ere, cepi, captum</i> : prendre</td></tr>
<tr><th>4e (<i class="la">-ire</i>)</th><td><i class="la">audio, is, ire, ivi, itum</i> : entendre</td></tr></tbody></table></div>` }
    ]
  }]
}];

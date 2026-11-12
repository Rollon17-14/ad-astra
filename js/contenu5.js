/* CONTENU — Partie 5 (chapitres XV et XVI) : apprendre à utiliser le dictionnaire Gaffiot.
   Les articles cités sont volontairement simplifiés, « à la manière du Gaffiot ». Format décrit en tête de contenu1.js. */
const ART = {
  rosa: `<div class="article-dico"><b>rŏsa</b>, ae, f., <span class="sens">¶ 1</span> rose [fleur] : <span class="aut">Cic.</span>, <span class="aut">Hor.</span> <span class="sens">¶ 2</span> rosier : <span class="aut">Virg.</span> <span class="sens">¶ 3</span> [terme de tendresse] : <i>mea rosa</i> <span class="aut">Pl.</span>, ma rose.</div>`,
  amo: `<div class="article-dico"><b>ămō</b>, āvī, ātum, āre, tr., <span class="sens">¶ 1</span> aimer, avoir de l'affection pour : <i>aliquem</i> <span class="aut">Cic.</span>, aimer qqn <span class="sens">¶ 2</span> être amoureux : <span class="aut">Pl.</span>, <span class="aut">Ter.</span> <span class="sens">¶ 3</span> [avec inf.] aimer à, se plaire à : <span class="aut">Hor.</span></div>`,
  peto: `<div class="article-dico"><b>pĕtō</b>, īvī ou ĭī, ītum, ĕre, tr., <span class="sens">¶ 1</span> chercher à atteindre, se diriger vers : <i>locum</i> <span class="aut">Caes.</span>, gagner un lieu <span class="sens">¶ 2</span> attaquer, assaillir : <i>aliquem gladio</i> <span class="aut">Cic.</span>, attaquer qqn avec une épée <span class="sens">¶ 3</span> chercher à obtenir, demander : <i>aliquid ab aliquo</i> <span class="aut">Cic.</span>, demander qqch à qqn ; <i>pacem</i> <span class="aut">Caes.</span>, demander la paix <span class="sens">¶ 4</span> briguer [une magistrature] : <i>consulatum</i> <span class="aut">Cic.</span>, être candidat au consulat.</div>`,
  copia: `<div class="article-dico"><b>cōpĭa</b>, ae, f., <span class="sens">¶ 1</span> abondance : <i>frumenti</i> <span class="aut">Caes.</span>, abondance de blé <span class="sens">¶ 2</span> ressources, richesses <span class="sens">¶ 3</span> [surtout au pl.] troupes, forces militaires : <span class="aut">Caes.</span> <span class="sens">¶ 4</span> faculté, possibilité : <i>alicujus rei</i>, de qqch.</div>`
};

var PARTIE5 = [{
  id: "p5", titre: "La boîte à outils : le Gaffiot", sous: "Chercher un mot dans le dictionnaire latin-français et lire son article. À faire dès que tu connais les déclinaisons 1 et 2 et les temps primitifs.",
  chapitres: [
  {
    id: "c15", num: 15, titre: "Chercher un mot dans le Gaffiot", resume: "Passer de la forme lue dans le texte à l'entrée du dictionnaire",
    etapes: [
      { t: "lecon", titre: "Le Gaffiot, qu'est-ce que c'est ?",
        texte: `<p>Le <strong>Gaffiot</strong> est le dictionnaire latin-français de référence. Il porte le nom de son auteur, le latiniste <strong>Félix Gaffiot</strong> (1870-1937), et il a paru en <strong>1934</strong> sous le titre <em>Dictionnaire illustré latin-français</em>.</p>
<p>On le trouve aujourd'hui sous trois formes : le grand dictionnaire, une version abrégée plus légère, et des versions numériques que l'on peut consulter gratuitement en ligne.</p>
<p>Un dictionnaire latin ne s'utilise pas comme un dictionnaire français. Il faut savoir deux choses, qui font l'objet de ces deux chapitres :</p>
<ol><li><strong>où chercher</strong> : la forme lue dans le texte n'est presque jamais celle qui figure dans le dictionnaire ;</li>
<li><strong>comment lire l'article</strong> : il est écrit dans un code très dense, plein d'abréviations.</li></ol>
<aside class="attention"><strong>Le bon réflexe.</strong> On n'ouvre pas le dictionnaire au premier mot inconnu. On analyse d'abord la phrase (verbe, sujet, cas), puis on cherche ce qui manque. Le Gaffiot répond à des questions précises ; il ne traduit pas à ta place.</aside>` },
      { t: "lecon", titre: "L'entrée : la forme sous laquelle un mot est rangé",
        texte: `<p>Un mot latin change de forme selon son cas ou sa personne. Le dictionnaire ne peut pas ranger toutes ces formes : il n'en retient qu'une, l'<strong>entrée</strong>.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Nature du mot</th><th>Entrée du dictionnaire</th><th>Dans le texte</th><th>À chercher</th></tr></thead><tbody>
<tr><th>Nom</th><td>nominatif singulier</td><td><i class="la">rosarum</i></td><td><i class="la"><b>rosa</b>, ae, f</i></td></tr>
<tr><th>Adjectif</th><td>nominatif masculin singulier</td><td><i class="la">bonae</i></td><td><i class="la"><b>bonus</b>, a, um</i></td></tr>
<tr><th>Verbe</th><td>1re personne du singulier du présent</td><td><i class="la">amabant</i></td><td><i class="la"><b>amo</b></i></td></tr>
<tr><th>Mot invariable</th><td>le mot lui-même</td><td><i class="la">semper</i></td><td><i class="la"><b>semper</b></i></td></tr></tbody></table></div>
<aside class="retenir"><strong>À retenir.</strong> Un verbe latin ne se cherche pas à l'infinitif, comme en français, mais à la 1re personne du singulier du présent : <i class="la">amo</i>, et non <i class="la">amare</i>.</aside>` },
      { t: "quiz", titre: "Sous quelle entrée ?", intro: "Pour chaque forme, choisis l'entrée à chercher.",
        questions: [
          { q: "<i class=\"la\">dominos</i>", choix: ["<i class=\"la\">dominus</i>", "<i class=\"la\">domino</i>", "<i class=\"la\">dominos</i>"], bon: 0, expl: "Un nom se cherche au nominatif singulier." },
          { q: "<i class=\"la\">templa</i>", choix: ["<i class=\"la\">templum</i>", "<i class=\"la\">templa</i>", "<i class=\"la\">templus</i>"], bon: 0, expl: "Neutre pluriel en <i class=\"la\">-a</i> : le nominatif singulier est en <i class=\"la\">-um</i>." },
          { q: "<i class=\"la\">magnarum</i>", choix: ["<i class=\"la\">magnus</i>", "<i class=\"la\">magna</i>", "<i class=\"la\">magnarum</i>"], bon: 0, expl: "Un adjectif se cherche au nominatif masculin singulier, même s'il est au féminin dans le texte." },
          { q: "<i class=\"la\">monebitur</i>", choix: ["<i class=\"la\">moneo</i>", "<i class=\"la\">monere</i>", "<i class=\"la\">monebo</i>"], bon: 0, expl: "1re personne du singulier du présent actif, quels que soient le temps et la voix du texte." },
          { q: "<i class=\"la\">audiebamus</i>", choix: ["<i class=\"la\">audio</i>", "<i class=\"la\">audire</i>", "<i class=\"la\">audiebam</i>"], bon: 0, expl: "On retire la marque de l'imparfait et la désinence : <i class=\"la\">audi-</i>, donc <i class=\"la\">audio</i>." },
          { q: "<i class=\"la\">postea</i>", choix: ["<i class=\"la\">postea</i>", "<i class=\"la\">posteus</i>", "<i class=\"la\">posteo</i>"], bon: 0, expl: "Adverbe invariable : on le cherche tel quel." }
        ] },
      { t: "lecon", titre: "Remonter d'un nom à son nominatif",
        texte: `<p><strong>La méthode en trois temps.</strong></p>
<ol><li>J'isole la <strong>désinence</strong> : <i class="la">puell-as</i>, <i class="la">agr-os</i>, <i class="la">reg-em</i>.</li>
<li>Je fais une <strong>hypothèse</strong> sur la déclinaison : <i class="la">-as</i> fait penser à <i class="la">rosas</i> ; <i class="la">-em</i> à <i class="la">consulem</i>.</li>
<li>Je cherche le nominatif, et je <strong>vérifie avec le génitif</strong> que donne le dictionnaire.</li></ol>
<p>Pour les deux premières déclinaisons, c'est presque mécanique : <i class="la">puellas</i> mène à <i class="la">puella, ae</i> ; <i class="la">bella</i> à <i class="la">bellum, i</i>.</p>
<aside class="attention"><strong>La troisième déclinaison.</strong> Le nominatif ne ressemble pas toujours au radical : <i class="la">reg-em</i> vient de <i class="la">rex</i>, <i class="la">milit-ibus</i> de <i class="la">miles</i>, <i class="la">corpor-a</i> de <i class="la">corpus</i>. L'astuce : ouvre le dictionnaire aux premières lettres du radical (<i class="la">reg-</i>, <i class="la">mil-</i>, <i class="la">corp-</i>) et parcours les entrées voisines en lisant leur <strong>génitif</strong>. Quand tu lis <i class="la">rex, <b>regis</b></i>, tu as trouvé.</aside>
<p>Attention aussi aux noms en <i class="la">-er</i> de la deuxième déclinaison : <i class="la">agr-os</i> vient de <i class="la">ager, agri</i>.</p>` },
      { t: "saisie", titre: "Écrire l'entrée d'un nom", intro: "Écris le nominatif singulier sous lequel tu chercherais chaque forme.",
        items: [
          { q: "<i class=\"la\">puellas</i>", r: "puella" }, { q: "<i class=\"la\">servorum</i>", r: "servus" }, { q: "<i class=\"la\">bella</i> (les guerres)", r: "bellum" },
          { q: "<i class=\"la\">agros</i> (les champs)", r: "ager" }, { q: "<i class=\"la\">regem</i> (le roi)", r: "rex" }, { q: "<i class=\"la\">militum</i> (des soldats)", r: "miles" },
          { q: "<i class=\"la\">fluminis</i> (du fleuve)", r: "flumen" }, { q: "<i class=\"la\">urbium</i> (des villes)", r: "urbs" }, { q: "<i class=\"la\">manuum</i> (des mains)", r: "manus" }, { q: "<i class=\"la\">rebus</i> (aux choses)", r: "res" }
        ] },
      { t: "lecon", titre: "Remonter d'un verbe à son entrée",
        texte: `<p><strong>Temps formés sur le radical du présent</strong> (présent, imparfait, futur). On retire la marque du temps et la désinence, puis on retrouve la 1re personne :</p>
<ul><li><i class="la">ama-ba-t</i> : radical <i class="la">ama-</i>, entrée <i class="la">amo</i> ;</li><li><i class="la">mone-bu-nt</i> : entrée <i class="la">moneo</i> ;</li><li><i class="la">capi-e-ba-nt</i> : entrée <i class="la">capio</i>.</li></ul>
<p><strong>Temps formés sur le radical du parfait.</strong> C'est plus délicat, car ce radical peut être très différent de celui du présent :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Dans le texte</th><th>Radical du parfait</th><th>Entrée</th></tr></thead><tbody>
<tr><td><i class="la">duxerunt</i></td><td><i class="la">dux-</i></td><th><i class="la">duco</i></th></tr>
<tr><td><i class="la">ceperat</i></td><td><i class="la">cep-</i></td><th><i class="la">capio</i></th></tr>
<tr><td><i class="la">misit</i></td><td><i class="la">mis-</i></td><th><i class="la">mitto</i></th></tr>
<tr><td><i class="la">vicerunt</i></td><td><i class="la">vic-</i></td><th><i class="la">vinco</i></th></tr>
<tr><td><i class="la">tulit</i></td><td><i class="la">tul-</i></td><th><i class="la">fero</i></th></tr></tbody></table></div>
<aside class="retenir"><strong>Trois aides.</strong>
<ul><li>Les <strong>temps primitifs</strong> appris par cœur : c'est exactement à cela qu'ils servent.</li>
<li>Les <strong>renvois</strong> du Gaffiot pour les parfaits les plus déroutants. Si tu cherches <i class="la">tuli</i>, tu lis : « <i class="la">tŭlī</i>, parf. de <i class="la">fero</i> ».</li>
<li>Les entrées voisines : en cherchant <i class="la">dux-</i>, on tombe près de <i class="la">duco</i>, dont l'article donne le parfait <i class="la">duxi</i>.</li></ul></aside>
<p>Les <strong>participes</strong> se cherchent aussi au verbe : <i class="la">captus</i> à <i class="la">capio</i>, <i class="la">missus</i> à <i class="la">mitto</i>.</p>` },
      { t: "saisie", titre: "Écrire l'entrée d'un verbe", intro: "Écris la 1re personne du singulier du présent sous laquelle tu chercherais chaque forme.",
        items: [
          { q: "<i class=\"la\">amabat</i>", r: "amo" }, { q: "<i class=\"la\">monebunt</i>", r: "moneo" }, { q: "<i class=\"la\">legitur</i>", r: "lego" },
          { q: "<i class=\"la\">capiebant</i>", r: "capio" }, { q: "<i class=\"la\">audiemus</i>", r: "audio" }, { q: "<i class=\"la\">duxerunt</i> (ils conduisirent)", r: "duco" },
          { q: "<i class=\"la\">vidistis</i> (vous avez vu)", r: "video" }, { q: "<i class=\"la\">ceperat</i> (il avait pris)", r: "capio" }, { q: "<i class=\"la\">misit</i> (il envoya)", r: "mitto" }, { q: "<i class=\"la\">fuerunt</i> (ils furent)", r: "sum" }
        ] },
      { t: "lecon", titre: "Les pièges de l'ordre alphabétique",
        texte: `<p><strong>1. Les lettres <i class="la">j</i> et <i class="la">v</i>.</strong> Les Romains écrivaient I et V pour la voyelle comme pour la consonne. Les éditions modernes impriment souvent <i class="la">iam</i>, <i class="la">iustus</i>, parfois <i class="la">uia</i>. Le Gaffiot, lui, distingue <i class="la">i</i> et <i class="la">j</i>, <i class="la">u</i> et <i class="la">v</i> :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Dans le texte</th><th>Dans le Gaffiot</th></tr></thead><tbody>
<tr><td><i class="la">iam</i></td><th><i class="la">jam</i></th></tr><tr><td><i class="la">iacio</i></td><th><i class="la">jacio</i></th></tr>
<tr><td><i class="la">iniuria</i></td><th><i class="la">injuria</i></th></tr><tr><td><i class="la">iuuenis</i></td><th><i class="la">juvenis</i></th></tr></tbody></table></div>
<p>Si tu ne trouves pas un mot commençant par <i class="la">i</i> suivi d'une voyelle, cherche-le à la lettre J.</p>
<p><strong>2. Les homonymes.</strong> Deux mots différents peuvent s'écrire de la même façon. Le Gaffiot les numérote, et les signes de quantité (˘ pour une voyelle brève, ¯ pour une longue) montrent qu'ils ne se prononçaient pas pareil :</p>
<ul><li><i class="la">lĭber, brī, m.</i> : le livre ; <i class="la">līber, ĕra, ĕrum</i> : libre.</li>
<li><i class="la">pŏpŭlus, ī, m.</i> : le peuple ; <i class="la">pōpŭlus, ī, f.</i> : le peuplier.</li>
<li><i class="la">mălum, ī, n.</i> : le mal ; <i class="la">mālum, ī, n.</i> : la pomme.</li></ul>
<p>C'est la suite de l'entrée (génitif, genre, nature) et le sens de la phrase qui permettent de choisir.</p>
<p><strong>3. Les formes ambiguës.</strong> Une même forme peut venir de deux mots : <i class="la">legis</i> est le génitif de <i class="la">lex</i> (la loi) ou la 2e personne de <i class="la">lego</i> (tu lis). Seule l'analyse de la phrase tranche.</p>` },
      { t: "ordre", titre: "Dans l'ordre du dictionnaire", q: "Range ces entrées dans l'ordre alphabétique, comme dans le Gaffiot.",
        lignes: ["<i class=\"la\">ager</i>", "<i class=\"la\">agricola</i>", "<i class=\"la\">amicus</i>", "<i class=\"la\">amo</i>", "<i class=\"la\">aqua</i>", "<i class=\"la\">audio</i>"],
        expl: "On compare lettre à lettre : <i class=\"la\">ag-e</i> avant <i class=\"la\">ag-r</i>, <i class=\"la\">am-i</i> avant <i class=\"la\">am-o</i>." },
      { t: "quiz", titre: "Déjouer les pièges",
        questions: [
          { q: "Ton texte porte <i class=\"la\">iacit</i>. Quelle entrée cherches-tu dans le Gaffiot ?", choix: ["<i class=\"la\">jacio</i>", "<i class=\"la\">iaco</i>", "<i class=\"la\">iacit</i>"], bon: 0, expl: "Le verbe est <i class=\"la\">iacio, is, ere</i>, rangé à la lettre J : <i class=\"la\">jacio</i>." },
          { q: "<i class=\"la\">legis</i> peut se trouver sous quelles entrées ?", choix: ["<i class=\"la\">lex</i> (la loi)", "<i class=\"la\">lego</i> (lire)", "<i class=\"la\">legis</i>", "<i class=\"la\">legio</i> (la légion)"], bons: [0, 1], expl: "Génitif singulier de <i class=\"la\">lex, legis</i>, ou 2e personne du singulier de <i class=\"la\">lego</i>." },
          { q: "<i class=\"la\">Magister librum legit.</i> Quelle entrée est la bonne pour <i class=\"la\">librum</i> ?", choix: ["<i class=\"la\">lĭber, brī, m.</i> : le livre", "<i class=\"la\">līber, ĕra, ĕrum</i> : libre"], bon: 0, expl: "Le radical <i class=\"la\">libr-</i> correspond au génitif <i class=\"la\">libri</i> ; l'adjectif ferait <i class=\"la\">liberum</i>." },
          { q: "Tu cherches <i class=\"la\">cepi</i> et tu lis « parf. de <i class=\"la\">capio</i> ». Que fais-tu ?", choix: ["Je vais lire l'article <i class=\"la\">capio</i>", "Je traduis <i class=\"la\">cepi</i> par « parfait »", "Je cherche <i class=\"la\">cepo</i>"], bon: 0, expl: "C'est un renvoi : le sens se trouve à l'entrée du verbe." },
          { q: "<i class=\"la\">iniuriam</i> : sous quelle entrée ?", choix: ["<i class=\"la\">injuria</i>", "<i class=\"la\">iniurius</i>", "<i class=\"la\">iniuriam</i>"], bon: 0, expl: "Nominatif singulier, avec un <i class=\"la\">j</i> dans le Gaffiot." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Nom : <strong>nominatif singulier</strong>. Adjectif : <strong>nominatif masculin singulier</strong>. Verbe : <strong>1re personne du singulier du présent</strong>.</li>
<li>Méthode : j'isole la désinence, je fais une hypothèse, je vérifie avec le génitif ou les temps primitifs.</li>
<li>3e déclinaison et parfaits : je cherche au début du radical et je lis les entrées voisines ; je suis les renvois (« parf. de… »).</li>
<li>Je pense à la lettre <strong>J</strong> pour un <i class="la">i</i> consonne, et je me méfie des homonymes.</li></ul>` }
    ]
  },
  {
    id: "c16", num: 16, titre: "Lire un article du Gaffiot", resume: "Décoder l'en-tête, les abréviations, les sens numérotés, et choisir le bon sens",
    etapes: [
      { t: "lecon", titre: "L'article d'un nom",
        texte: `<p>Voici un article simplifié, à la manière du Gaffiot :</p>${ART.rosa}
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Élément</th><th>Ce qu'il t'apprend</th></tr></thead><tbody>
<tr><th><b>rŏsa</b></th><td>L'entrée, au nominatif singulier. Le signe ˘ marque une voyelle brève, le signe ¯ une voyelle longue.</td></tr>
<tr><th>ae</th><td>La terminaison du génitif singulier : <i class="la">rosae</i>. Elle donne la déclinaison (ici la 1re).</td></tr>
<tr><th>f.</th><td>Le genre : m. (masculin), f. (féminin), n. (neutre).</td></tr>
<tr><th><span style="color:var(--pourpre)">¶ 1, ¶ 2…</span></th><td>Les différents sens, numérotés, du plus courant ou du plus concret au plus particulier.</td></tr>
<tr><th>[fleur]</th><td>Entre crochets : une précision de l'auteur du dictionnaire, qui ne fait pas partie de la traduction.</td></tr>
<tr><th>Cic., Hor.</th><td>Les auteurs latins chez qui on trouve ce sens (Cicéron, Horace).</td></tr>
<tr><th><i>mea rosa</i></th><td>En italique : un exemple latin, suivi de sa traduction.</td></tr></tbody></table></div>
<aside class="retenir"><strong>À retenir.</strong> L'en-tête <i class="la">rosa, ae, f</i> est exactement la présentation de tes listes de vocabulaire : le Gaffiot te donne toujours de quoi décliner le nom.</aside>` },
      { t: "quiz", titre: "Lire l'en-tête d'un nom",
        questions: [
          { q: "« <b>rēx</b>, rēgis, m. » : à quelle déclinaison appartient ce nom ?", choix: ["3e : génitif en <i class=\"la\">-is</i>", "2e : génitif en <i class=\"la\">-i</i>", "5e : nominatif en <i class=\"la\">-ex</i>"], bon: 0, expl: "Quand le radical change, le Gaffiot écrit le génitif en entier : <i class=\"la\">regis</i>." },
          { q: "« <b>mănŭs</b>, ūs, f. » : que signifie « ūs » ?", choix: ["Le génitif singulier est <i class=\"la\">manus</i> : 4e déclinaison", "Le nom est au pluriel", "Le nom est masculin"], bon: 0, expl: "Génitif en <i class=\"la\">-us</i> (u long) : 4e déclinaison. Et « f. » : féminin." },
          { q: "« <b>tĕmplum</b>, ī, n. » : quel est l'accusatif pluriel de ce nom ?", choix: ["<i class=\"la\">templa</i>", "<i class=\"la\">templos</i>", "<i class=\"la\">templi</i>"], bon: 0, expl: "2e déclinaison, neutre : pluriel en <i class=\"la\">-a</i>." },
          { q: "« <b>bŏnus</b>, a, um » : quelle est la nature de ce mot ?", choix: ["Un adjectif : trois terminaisons pour trois genres", "Un nom de la 2e déclinaison", "Un verbe"], bon: 0, expl: "Masculin, féminin, neutre : c'est un adjectif de la première classe." }
        ] },
      { t: "lecon", titre: "L'article d'un verbe : attention à l'ordre",
        texte: `${ART.amo}
<p>Le Gaffiot ne donne pas les temps primitifs dans l'ordre que tu as appris. Il ne donne pas la 2e personne, et il place l'<strong>infinitif à la fin</strong> :</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody>
<tr><th>En cours</th><td><i class="la">amo</i><br>présent</td><td><i class="la">as</i><br>2e pers.</td><td><i class="la">are</i><br>infinitif</td><td><i class="la">avi</i><br>parfait</td><td><i class="la">atum</i><br>supin</td></tr>
<tr><th>Dans le Gaffiot</th><td><i class="la">ămō</i><br>présent</td><td><i class="la">āvī</i><br>parfait</td><td><i class="la">ātum</i><br>supin</td><td><i class="la">āre</i><br>infinitif</td><td>tr.</td></tr></tbody></table></div>
<p>Après l'infinitif vient la <strong>construction</strong> du verbe : <strong>tr.</strong> (transitif : il a un COD à l'accusatif) ou <strong>intr.</strong> (intransitif : pas de COD).</p>
<aside class="attention"><strong>2e ou 3e conjugaison ?</strong> Les deux ont un infinitif en <i class="la">-ere</i>. Le signe de quantité les distingue : <i class="la">mŏnĕō, ŭī, ĭtum, <b>ēre</b></i> (e long : 2e) ; <i class="la">lĕgō, lēgī, lēctum, <b>ĕre</b></i> (e bref : 3e). Et si l'entrée est en <i class="la">-io</i> avec un infinitif en <i class="la">-ĕre</i>, c'est la 3e mixte : <i class="la">căpĭō, cēpī, captum, ĕre</i>.</aside>` },
      { t: "quiz", titre: "Lire l'en-tête d'un verbe", intro: "En-tête du Gaffiot : « <b>mittō</b>, mīsī, missum, ĕre, tr. »",
        questions: [
          { q: "Quelle forme est le parfait ?", choix: ["<i class=\"la\">mīsī</i>", "<i class=\"la\">missum</i>", "<i class=\"la\">ĕre</i>"], bon: 0, expl: "Juste après l'entrée : le parfait, 1re personne du singulier." },
          { q: "À quelle conjugaison appartient ce verbe ?", choix: ["3e : entrée en <i class=\"la\">-o</i>, infinitif en <i class=\"la\">-ĕre</i> bref", "2e : infinitif en <i class=\"la\">-ere</i>", "1re : entrée en <i class=\"la\">-o</i>"], bon: 0, expl: "<i class=\"la\">mitto, is, ere, misi, missum</i>." },
          { q: "Que t'apprend « tr. » ?", choix: ["Le verbe se construit avec un COD à l'accusatif", "Le verbe est très rare", "Le verbe n'a pas de passif"], bon: 0, expl: "Transitif : <i class=\"la\">epistulam mittit</i>, il envoie une lettre." },
          { q: "Quelle forme du texte ce verbe explique-t-il ?", choix: ["<i class=\"la\">miserunt</i>", "<i class=\"la\">miserum</i>", "<i class=\"la\">mirantur</i>"], bon: 0, expl: "Radical du parfait <i class=\"la\">mis-</i> + <i class=\"la\">-erunt</i> : ils envoyèrent. <i class=\"la\">miserum</i> vient de l'adjectif <i class=\"la\">miser</i>." }
        ] },
      { t: "saisie", titre: "Du Gaffiot à l'ordre du cours", intro: "Réécris chaque en-tête dans l'ordre appris en cours, sur le modèle <i class=\"la\">amo, as, are, avi, atum</i>. Les signes de quantité ne sont pas nécessaires.",
        items: [
          { q: "<i class=\"la\">laudō, āvī, ātum, āre</i> (louer)", r: ["laudo, as, are, avi, atum", "laudo, laudas, laudare, laudavi, laudatum"] },
          { q: "<i class=\"la\">vĭdĕō, vīdī, vīsum, ēre</i> (voir)", r: ["video, es, ere, vidi, visum", "video, vides, videre, vidi, visum"] },
          { q: "<i class=\"la\">dūcō, dūxī, ductum, ĕre</i> (conduire)", r: ["duco, is, ere, duxi, ductum", "duco, ducis, ducere, duxi, ductum"] },
          { q: "<i class=\"la\">căpĭō, cēpī, captum, ĕre</i> (prendre)", r: ["capio, is, ere, cepi, captum", "capio, capis, capere, cepi, captum"] },
          { q: "<i class=\"la\">vĕnĭō, vēnī, ventum, īre</i> (venir)", r: ["venio, is, ire, veni, ventum", "venio, venis, venire, veni, ventum"] }
        ] },
      { t: "lecon", titre: "Le code des abréviations",
        texte: `<p>Le Gaffiot économise la place. Voici les abréviations qu'on rencontre sans cesse.</p>
<div class="tab-wrap"><table class="donnees"><caption>Grammaire</caption><thead><tr><th>Abréviation</th><th>Sens</th></tr></thead><tbody>
<tr><th>m., f., n.</th><td>masculin, féminin, neutre</td></tr><tr><th>sg., pl.</th><td>singulier, pluriel</td></tr>
<tr><th>adj., adv., prép., conj.</th><td>adjectif, adverbe, préposition, conjonction</td></tr>
<tr><th>tr., intr.</th><td>transitif, intransitif</td></tr><tr><th>abs. ou abst</th><td>absolument : employé sans complément</td></tr>
<tr><th>acc., gén., dat., abl.</th><td>les cas</td></tr><tr><th>inf., subj.</th><td>infinitif, subjonctif</td></tr>
<tr><th>fig.</th><td>au sens figuré</td></tr><tr><th>cf., v.</th><td>comparer avec, voir (renvoi à un autre article)</td></tr>
<tr><th>qqn, qqch</th><td>quelqu'un, quelque chose</td></tr></tbody></table></div>
<div class="tab-wrap"><table class="donnees"><caption>Constructions : le pronom <i class="la">aliquis</i> sert de modèle</caption><thead><tr><th>Dans l'article</th><th>Cas</th><th>À comprendre</th></tr></thead><tbody>
<tr><th><i class="la">aliquem</i></th><td>accusatif</td><td>quelqu'un (COD)</td></tr><tr><th><i class="la">aliquid</i></th><td>accusatif neutre</td><td>quelque chose (COD)</td></tr>
<tr><th><i class="la">alicui</i></th><td>datif</td><td>à quelqu'un</td></tr><tr><th><i class="la">alicujus</i></th><td>génitif</td><td>de quelqu'un</td></tr>
<tr><th><i class="la">aliqua re</i></th><td>ablatif</td><td>par, avec quelque chose</td></tr><tr><th><i class="la">ab aliquo</i></th><td>ablatif</td><td>de la part de quelqu'un</td></tr></tbody></table></div>
<div class="tab-wrap"><table class="donnees"><caption>Auteurs les plus cités</caption><thead><tr><th>Abréviation</th><th>Auteur</th><th>Abréviation</th><th>Auteur</th></tr></thead><tbody>
<tr><th>Cic.</th><td>Cicéron</td><th>Caes.</th><td>César</td></tr><tr><th>Virg.</th><td>Virgile</td><th>Liv.</th><td>Tite-Live</td></tr>
<tr><th>Hor.</th><td>Horace</td><th>Ov.</th><td>Ovide</td></tr><tr><th>Sall.</th><td>Salluste</td><th>Sen.</th><td>Sénèque</td></tr>
<tr><th>Pl.</th><td>Plaute</td><th>Tac.</th><td>Tacite</td></tr></tbody></table></div>
<p>Le nom de l'auteur est souvent suivi de l'œuvre abrégée et de numéros : « Caes. <i>G.</i> 1, 2 » renvoie à la <em>Guerre des Gaules</em>, livre 1, chapitre 2. La liste complète figure au début du dictionnaire.</p>` },
      { t: "quiz", titre: "Décoder les abréviations",
        questions: [
          { q: "Dans un article, « intr. » signifie que le verbe…", choix: ["n'a pas de COD", "est irrégulier", "se conjugue au passif"], bon: 0, expl: "Intransitif. Exemple : <i class=\"la\">venio</i>, venir." },
          { q: "« <i class=\"la\">alicui</i> » dans une construction indique…", choix: ["un complément au datif : à quelqu'un", "un COD : quelqu'un", "un complément à l'ablatif"], bon: 0, expl: "Datif de <i class=\"la\">aliquis</i>." },
          { q: "« <i>dare aliquid alicui</i> » se comprend…", choix: ["donner quelque chose à quelqu'un", "donner quelqu'un à quelque chose", "donner avec quelque chose"], bon: 0, expl: "<i class=\"la\">aliquid</i> : accusatif (COD) ; <i class=\"la\">alicui</i> : datif (COI)." },
          { q: "« Caes. » renvoie à…", choix: ["César", "Cicéron", "Caton"], bon: 0, expl: "Cicéron s'abrège « Cic. »." },
          { q: "« fig. » devant une traduction signale…", choix: ["un sens figuré", "une illustration", "une forme rare"], bon: 0, expl: "Par exemple « chaleur » au sens de « passion »." },
          { q: "Que contiennent les crochets, comme dans « rose [fleur] » ?", choix: ["Une précision qui ne se traduit pas", "La traduction la plus fréquente", "Un mot latin"], bon: 0, expl: "On ne recopie pas le contenu des crochets dans sa traduction." }
        ] },
      { t: "lecon", titre: "Choisir le bon sens",
        texte: `<p>Un mot courant a souvent plusieurs sens. La faute classique consiste à prendre <strong>le premier sens</strong> sans lire la suite.</p>${ART.peto}
<aside class="retenir"><strong>La méthode.</strong>
<ol><li>Je lis <strong>tout l'article</strong> avant de choisir.</li>
<li>Je regarde la <strong>construction</strong> dans mon texte : quel cas suit le verbe ? y a-t-il une préposition ? Je cherche le sens qui a la même construction.</li>
<li>Je regarde le <strong>contexte</strong> : qui fait l'action ? de quoi parle le texte (guerre, politique, vie quotidienne) ?</li>
<li>Je vérifie que ma traduction <strong>a du sens</strong> dans la phrase entière.</li></ol></aside>
<p>Avec <i class="la">peto</i> : devant <i class="la">pacem <b>a Romanis</b> petunt</i>, la construction « <i>aliquid ab aliquo</i> » du ¶ 3 saute aux yeux : « ils demandent la paix aux Romains ».</p>` },
      { t: "quiz", titre: "Quel sens pour peto ?", intro: "Relis l'article et choisis la traduction qui convient.", doc: ART.peto,
        questions: [
          { q: "<i class=\"la\">Legati pacem a Romanis petunt.</i>", choix: ["Les ambassadeurs demandent la paix aux Romains.", "Les ambassadeurs attaquent la paix des Romains.", "Les ambassadeurs se dirigent vers la paix."], bon: 0, expl: "¶ 3 : <i>aliquid ab aliquo</i>, demander qqch à qqn." },
          { q: "<i class=\"la\">Cicero consulatum petit.</i>", choix: ["Cicéron est candidat au consulat.", "Cicéron attaque le consulat.", "Cicéron gagne le consulat."], bon: 0, expl: "¶ 4 : briguer une magistrature. Il ne l'a pas encore obtenue." },
          { q: "<i class=\"la\">Miles hostem gladio petit.</i>", choix: ["Le soldat attaque l'ennemi avec son glaive.", "Le soldat demande un glaive à l'ennemi.", "Le soldat se dirige vers l'ennemi du glaive."], bon: 0, expl: "¶ 2 : <i>aliquem gladio</i>. « Demander à » exigerait <i class=\"la\">ab hoste</i>." },
          { q: "<i class=\"la\">Naves portum petunt.</i> (<i class=\"la\">navis, is, f</i> : le navire)", choix: ["Les navires gagnent le port.", "Les navires demandent un port.", "Les navires attaquent le port."], bon: 0, expl: "¶ 1 : se diriger vers un lieu. Le contexte (des navires, un port) guide le choix." }
        ] },
      { t: "quiz", titre: "Singulier et pluriel : un sens peut en cacher un autre", intro: "Certains noms changent de sens au pluriel. Le Gaffiot le signale par « [pl.] » ou « au pl. ».", doc: ART.copia,
        questions: [
          { q: "<i class=\"la\">Hannibal magnas copias in Italiam duxit.</i>", choix: ["de grandes troupes", "de grandes abondances", "de grandes possibilités"], bon: 0, expl: "Au pluriel, dans un contexte militaire : ¶ 3." },
          { q: "<i class=\"la\">In agris magna copia frumenti est.</i>", choix: ["une grande abondance de blé", "une grande troupe de blé", "une grande richesse du blé"], bon: 0, expl: "Au singulier, avec un génitif : ¶ 1." },
          { q: "<i class=\"la\">littera, ae, f</i> : « lettre de l'alphabet ; [pl.] lettre, missive ». <i class=\"la\">Litteras tuas accepi</i> signifie…", choix: ["J'ai reçu ta lettre.", "J'ai reçu tes lettres de l'alphabet.", "J'ai reçu tes livres."], bon: 0, expl: "Le pluriel <i class=\"la\">litterae</i> désigne une seule lettre (un courrier)." },
          { q: "<i class=\"la\">castra, orum, n. pl.</i> : « camp ». <i class=\"la\">Milites in castra veniunt</i> signifie…", choix: ["Les soldats viennent dans le camp.", "Les soldats viennent dans les camps.", "Les soldats viennent des camps."], bon: 0, expl: "Nom toujours pluriel en latin, singulier en français. <i class=\"la\">in</i> + accusatif : on y entre." }
        ] },
      { t: "version", titre: "À toi de chercher", intro: "Voici de courts articles, comme dans le dictionnaire. Pour chaque phrase, retrouve l'entrée, choisis le sens, puis traduis.",
        doc: `<div class="article-dico"><b>cōpĭa</b>, ae, f., <span class="sens">¶ 1</span> abondance <span class="sens">¶ 2</span> [pl.] troupes.<br><b>dūcō</b>, dūxī, ductum, ĕre, tr., <span class="sens">¶ 1</span> conduire, mener <span class="sens">¶ 2</span> <i>in matrimonium</i>, épouser <span class="sens">¶ 3</span> estimer, juger.<br><b>lēgātus</b>, ī, m., <span class="sens">¶ 1</span> ambassadeur <span class="sens">¶ 2</span> lieutenant [d'un général].<br><b>littĕra</b>, ae, f., <span class="sens">¶ 1</span> lettre de l'alphabet <span class="sens">¶ 2</span> [pl.] lettre, missive.<br><b>pĕtō</b>, īvī, ītum, ĕre, tr., <span class="sens">¶ 1</span> se diriger vers <span class="sens">¶ 2</span> attaquer <span class="sens">¶ 3</span> demander : <i>aliquid ab aliquo</i>.<br><b>castra</b>, ōrum, n. pl., camp.</div>`,
        phrases: [
          { la: "Consul magnas copias in castra duxit.", fr: "Le consul conduisit de grandes troupes dans le camp.", note: "<i class=\"la\">duxit</i> : parfait de <i class=\"la\">duco</i>, ¶ 1 ; <i class=\"la\">copias</i> : pluriel, ¶ 2." },
          { la: "Legati pacem a Caesare petiverunt.", fr: "Les ambassadeurs demandèrent la paix à César.", note: "<i class=\"la\">peto</i> ¶ 3, à cause de <i class=\"la\">a Caesare</i> ; <i class=\"la\">legati</i> ¶ 1 : ce sont eux qui négocient." },
          { la: "Milites litteras ducis legerunt.", fr: "Les soldats lurent la lettre du chef.", note: "<i class=\"la\">litteras</i> : pluriel, ¶ 2. <i class=\"la\">ducis</i> : génitif de <i class=\"la\">dux</i>, et non une forme de <i class=\"la\">duco</i>." },
          { la: "Hostes oppidum petunt.", fr: "Les ennemis marchent sur la place forte.", note: "¶ 1 ou ¶ 2 : « se dirigent vers » ou « attaquent ». Les deux se défendent ; « marcher sur » réunit les deux idées." },
          { la: "Caesar legatum cum copiis in Galliam misit.", fr: "César envoya son lieutenant en Gaule avec des troupes.", note: "<i class=\"la\">legatum</i> ¶ 2 : on n'envoie pas un ambassadeur à la tête de troupes. <i class=\"la\">misit</i> : parfait de <i class=\"la\">mitto</i>." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li><strong>Nom</strong> : entrée, génitif, genre (<i class="la">rosa, ae, f.</i>). <strong>Adjectif</strong> : trois terminaisons (<i class="la">bonus, a, um</i>).</li>
<li><strong>Verbe</strong> : présent, <strong>parfait, supin, infinitif</strong>, puis tr. ou intr. (<i class="la">amo, avi, atum, are, tr.</i>).</li>
<li>˘ voyelle brève, ¯ voyelle longue : <i class="la">-ēre</i> (2e conjugaison), <i class="la">-ĕre</i> (3e).</li>
<li>¶ 1, ¶ 2… : les sens. [ ] : précisions à ne pas traduire. <i>Italique</i> : exemples. Cic., Caes.… : auteurs.</li>
<li><i class="la">aliquem, aliquid, alicui, aliqua re</i> : la construction, c'est-à-dire le cas des compléments.</li></ul>
<aside class="retenir"><strong>Avant de recopier un sens</strong> : ai-je lu tout l'article ? la construction correspond-elle à ma phrase ? le sens convient-il au contexte ? ma phrase française veut-elle dire quelque chose ?</aside>` }
    ]
  }]
}];

/* CONTENU — chapitres complémentaires, insérés à leur place logique dans le parcours :
   c22 Les pronoms (après l'imparfait et le futur), c23 Adjectifs de la 2e classe, comparatif, superlatif (après la 3e déclinaison),
   c21 Parfait passif et déponents (après les temps du parfait), c24 Verbes irréguliers (après les déclinaisons 4 et 5).
   La suite (c26, c25, c27) est dans contenu8.js. */
function insererApres(id, chap) {
  for (const P of [PARTIE1, PARTIE2, PARTIE3, PARTIE4, PARTIE_TRAD, PARTIE5]) for (const pa of P) {
    const k = pa.chapitres.findIndex(c => c.id === id);
    if (k >= 0) { pa.chapitres.splice(k + 1, 0, chap); return; }
  }
}
/* Tableau de formes : T(légende, [en-têtes], [[intitulé de ligne, forme, forme…], …]) */
function T(legende, tetes, lignes) {
  return `<div class="tab-wrap"><table class="paradigme">${legende ? `<caption>${legende}</caption>` : ""}<thead><tr>${tetes.map(t => `<th>${t}</th>`).join("")}</tr></thead><tbody>${lignes.map(l => `<tr><th>${l[0]}</th>${l.slice(1).map(f => `<td class="la">${f}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
const G6 = ["Cas", "Masc. sg.", "Fém. sg.", "Neutre sg.", "Masc. pl.", "Fém. pl.", "Neutre pl."];
PARTIE2[0].sous = "Le présent, les compléments circonstanciels, l'adjectif, l'imparfait et le futur, les pronoms";
PARTIE3[0].sous = "La troisième déclinaison et ses adjectifs, la relative, les temps du parfait, les dernières déclinaisons, les verbes irréguliers";

/* ---------- Les pronoms ---------- */
insererApres("c8", {
  id: "c22", titre: "Les pronoms", resume: "is, hic, ille, iste, les pronoms personnels et les possessifs",
  etapes: [
    { t: "lecon", titre: "Le pronom de rappel : is, ea, id",
      texte: `<p><i class="la">is, ea, id</i> est le pronom le plus fréquent du latin. Il <strong>rappelle</strong> quelqu'un ou quelque chose dont on vient de parler : « il, elle, le, la, lui, celui-ci ». Employé avec un nom, il est adjectif : <i class="la">is vir</i>, « cet homme ».</p>
${T('<i class="la">is, ea, id</i>', G6, [["Nominatif", "is", "ea", "id", "ei (ii)", "eae", "ea"], ["Accusatif", "eum", "eam", "id", "eos", "eas", "ea"], ["Génitif", "eius", "eius", "eius", "eorum", "earum", "eorum"], ["Datif", "ei", "ei", "ei", "eis (iis)", "eis (iis)", "eis (iis)"], ["Ablatif", "eo", "ea", "eo", "eis (iis)", "eis (iis)", "eis (iis)"]])}
<aside class="retenir"><strong>La marque des pronoms.</strong> Au singulier, le génitif est en <b class="des">-ius</b> et le datif en <b class="des">-i</b>, aux trois genres. Le reste ressemble à <i class="la">bonus, a, um</i>.</aside>
<p><strong><i class="la">eius, eorum, earum</i></strong> servent de possessif quand le possesseur n'est pas le sujet : <i class="la">patrem eius video</i>, « je vois son père » (mot à mot : le père de lui).</p>` },
    { t: "saisie", titre: "Décliner is, ea, id",
      items: [
        { q: "Masculin, accusatif singulier", r: "eum" }, { q: "Féminin, accusatif singulier", r: "eam" }, { q: "Génitif singulier (trois genres)", r: "eius" },
        { q: "Datif singulier (trois genres)", r: "ei" }, { q: "Masculin, accusatif pluriel", r: "eos" }, { q: "Féminin, génitif pluriel", r: "earum" }, { q: "Neutre, nominatif singulier", r: "id" }
      ] },
    { t: "quiz", titre: "Traduire is, ea, id", intro: "Ces phrases viennent des versions des chapitres précédents.",
      questions: [
        { q: "<i class=\"la\">Amulius <b>eos</b> necare vult.</i>", choix: ["Amulius veut les tuer.", "Amulius veut le tuer.", "Amulius veut leur mort."], bon: 0, expl: "<i class=\"la\">eos</i> : accusatif masculin pluriel, COD." },
        { q: "<i class=\"la\">Romani post tergum <b>eius</b> pontem rescindebant.</i>", choix: ["derrière son dos (à lui)", "derrière leur dos", "derrière ce dos"], bon: 0, expl: "<i class=\"la\">eius</i> : génitif singulier, « de lui »." },
        { q: "<i class=\"la\">Urbs <b>ei</b> grata fuit.</i>", choix: ["La ville lui fut reconnaissante.", "La ville les remercia.", "Cette ville fut reconnaissante."], bon: 0, expl: "<i class=\"la\">ei</i> : datif singulier, « à lui »." },
        { q: "<i class=\"la\">Magister <b>eam</b> laudat.</i>", choix: ["Le maître la loue.", "Le maître le loue.", "Le maître les loue."], bon: 0, expl: "<i class=\"la\">eam</i> : accusatif féminin singulier." }
      ] },
    { t: "lecon", titre: "Les démonstratifs : hic, iste, ille",
      texte: `<p>Le latin a trois démonstratifs, qui situent par rapport à celui qui parle :</p>
<ul><li><strong><i class="la">hic, haec, hoc</i></strong> : celui-ci, près de <strong>moi</strong> ;</li>
<li><strong><i class="la">iste, ista, istud</i></strong> : celui-là, près de <strong>toi</strong> (souvent méprisant : « cet individu ») ;</li>
<li><strong><i class="la">ille, illa, illud</i></strong> : celui-là, <strong>éloigné</strong> (parfois admiratif : « ce fameux »).</li></ul>
${T('<i class="la">hic, haec, hoc</i>', G6, [["Nominatif", "hic", "haec", "hoc", "hi", "hae", "haec"], ["Accusatif", "hunc", "hanc", "hoc", "hos", "has", "haec"], ["Génitif", "huius", "huius", "huius", "horum", "harum", "horum"], ["Datif", "huic", "huic", "huic", "his", "his", "his"], ["Ablatif", "hoc", "hac", "hoc", "his", "his", "his"]])}
${T('<i class="la">ille, illa, illud</i>', G6, [["Nominatif", "ille", "illa", "illud", "illi", "illae", "illa"], ["Accusatif", "illum", "illam", "illud", "illos", "illas", "illa"], ["Génitif", "illius", "illius", "illius", "illorum", "illarum", "illorum"], ["Datif", "illi", "illi", "illi", "illis", "illis", "illis"], ["Ablatif", "illo", "illa", "illo", "illis", "illis", "illis"]])}
<aside class="savoir"><strong>Astuce.</strong> Apprends d'abord <i class="la">ille</i>. <i class="la">iste</i> se décline exactement de la même façon : il suffit de remplacer <i class="la">ill-</i> par <i class="la">ist-</i> (<i class="la">istum, istius, isti…</i>).</aside>
<p><strong><i class="la">idem, eadem, idem</i></strong>, « le même », est <i class="la">is, ea, id</i> suivi de <i class="la">-dem</i> : <i class="la">eundem, eandem, eiusdem, eodem</i>…</p>` },
    { t: "saisie", titre: "Décliner les démonstratifs",
      items: [
        { q: "<i class=\"la\">hic</i> : masculin, accusatif singulier", r: "hunc" }, { q: "<i class=\"la\">hic</i> : datif singulier", r: "huic" },
        { q: "<i class=\"la\">hic</i> : neutre, nominatif pluriel", r: "haec" }, { q: "<i class=\"la\">ille</i> : génitif singulier", r: "illius" },
        { q: "<i class=\"la\">ille</i> : datif singulier", r: "illi" }, { q: "<i class=\"la\">ille</i> : féminin, accusatif pluriel", r: "illas" },
        { q: "<i class=\"la\">iste</i> : neutre, accusatif singulier", r: "istud" }, { q: "<i class=\"la\">idem</i> : masculin, accusatif singulier", r: "eundem" }
      ] },
    { t: "lecon", titre: "Les pronoms personnels et les possessifs",
      texte: `${T("Pronoms personnels", ["Cas", "je", "tu", "nous", "vous", "réfléchi (3e pers.)"], [["Nominatif", "ego", "tu", "nos", "vos", "—"], ["Accusatif", "me", "te", "nos", "vos", "se"], ["Génitif", "mei", "tui", "nostri, nostrum", "vestri, vestrum", "sui"], ["Datif", "mihi", "tibi", "nobis", "vobis", "sibi"], ["Ablatif", "me", "te", "nobis", "vobis", "se"]])}
<ul><li>Le nominatif ne s'emploie que pour <strong>insister</strong> : <i class="la">ego laboro, tu dormis</i>, « moi, je travaille ; toi, tu dors ».</li>
<li>Avec <i class="la">cum</i>, la préposition se colle après le pronom : <i class="la">mecum, tecum, nobiscum, vobiscum, secum</i>.</li>
<li>Le <strong>réfléchi</strong> <i class="la">se</i> renvoie au sujet du verbe : <i class="la">se laudat</i>, « il se loue lui-même ».</li></ul>
<p><strong>Les possessifs</strong> sont des adjectifs de la première classe : <i class="la">meus, a, um</i> (mon) ; <i class="la">tuus, a, um</i> (ton) ; <i class="la">noster, tra, trum</i> (notre) ; <i class="la">vester, tra, trum</i> (votre) ; <i class="la">suus, a, um</i> (son, leur).</p>
<aside class="attention"><strong><i class="la">suus</i> ou <i class="la">eius</i> ?</strong> <i class="la">Pater filium <b>suum</b> amat</i> : le père aime <strong>son propre</strong> fils (le possesseur est le sujet). <i class="la">Pater filium <b>eius</b> amat</i> : le père aime le fils <strong>de quelqu'un d'autre</strong>.</aside>` },
    { t: "quiz", titre: "Personnels et possessifs",
      questions: [
        { q: "<i class=\"la\">Da <b>mihi</b> librum.</i> (<i class=\"la\">da</i> : donne)", choix: ["Donne-moi le livre.", "Donne-lui le livre.", "Donne mon livre."], bon: 0, expl: "<i class=\"la\">mihi</i> : datif de <i class=\"la\">ego</i>." },
        { q: "<i class=\"la\">Dominus <b>vobiscum</b>.</i>", choix: ["Le Seigneur soit avec vous.", "Le Seigneur est à nous.", "Votre seigneur."], bon: 0, expl: "<i class=\"la\">vobis</i> + <i class=\"la\">cum</i>." },
        { q: "<i class=\"la\">Scio <b>me</b> errare.</i>", choix: ["Je sais que je me trompe.", "Je sais qu'il se trompe.", "Je sais te tromper."], bon: 0, expl: "<i class=\"la\">me</i> : accusatif, sujet de la proposition infinitive." },
        { q: "<i class=\"la\">Marcus amicum videt et patrem <b>eius</b> salutat.</i>", choix: ["…et salue le père de cet ami.", "…et salue son propre père.", "…et salue leur père."], bon: 0, expl: "<i class=\"la\">eius</i> renvoie à l'ami. « Son propre père » se dirait <i class=\"la\">patrem suum</i>." },
        { q: "<i class=\"la\">Nostri milites fortiter pugnabant.</i>", choix: ["Nos soldats combattaient courageusement.", "Vos soldats combattaient courageusement.", "Leurs soldats combattaient courageusement."], bon: 0, expl: "<i class=\"la\">noster, tra, trum</i> : notre." }
      ] },
    { t: "version", titre: "Phrases avec pronoms",
      vocab: ["dies, diei, m : le jour", "fortis, e : courageux", "homo, hominis, m : l'homme", "laudo, as, are, avi, atum : louer", "liber, libri, m : le livre", "miles, militis, m : le soldat", "saluto, as, are, avi, atum : saluer"],
      phrases: [
        { la: "Hic liber meus est, ille tuus.", fr: "Ce livre-ci est le mien, celui-là est le tien." },
        { la: "Magister ei librum dat.", fr: "Le maître lui donne un livre." },
        { la: "Illi milites fortes sunt.", fr: "Ces soldats-là sont courageux." },
        { la: "Cicero istum hominem non amat.", fr: "Cicéron n'aime pas cet individu.", note: "<i class=\"la\">iste</i> a ici sa nuance méprisante." },
        { la: "Pater filium suum laudat.", fr: "Le père loue son fils.", note: "<i class=\"la\">suum</i> : le fils du sujet." },
        { la: "Amicus mecum Romam venit.", fr: "Mon ami vient à Rome avec moi." },
        { la: "Eodem die Romam veniunt.", fr: "Ils viennent à Rome le même jour.", aide: "<i class=\"la\">eodem</i> : ablatif de <i class=\"la\">idem</i> ; <i class=\"la\">die</i> : ablatif de temps." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li>Marque des pronoms : génitif singulier en <i class="la">-ius</i>, datif singulier en <i class="la">-i</i>.</li>
<li><i class="la">is, ea, id</i> : rappel (il, le, lui) ; <i class="la">eius</i> = son, quand le possesseur n'est pas le sujet.</li>
<li><i class="la">hic</i> (près de moi), <i class="la">iste</i> (près de toi, péjoratif), <i class="la">ille</i> (éloigné, emphatique) ; <i class="la">idem</i> (le même).</li>
<li><i class="la">ego, tu, nos, vos, se</i> ; <i class="la">mecum, tecum</i> ; <i class="la">meus, tuus, suus, noster, vester</i>.</li></ul>` }
  ]
});

/* ---------- Adjectifs de la 2e classe, comparatif, superlatif ---------- */
insererApres("c9", {
  id: "c23", titre: "Les adjectifs de la 2e classe, le comparatif et le superlatif", resume: "fortis, ingens, puis fortior et fortissimus",
  etapes: [
    { t: "lecon", titre: "Les adjectifs de la deuxième classe",
      texte: `<p>Les adjectifs de la deuxième classe se déclinent sur la <strong>troisième déclinaison</strong>. Le dictionnaire les présente de trois façons :</p>
<ul><li><i class="la">fortis, e</i> (courageux) : une forme pour le masculin et le féminin, une pour le neutre ;</li>
<li><i class="la">ingens, ingentis</i> (immense) : une seule forme au nominatif, suivie du génitif ;</li>
<li><i class="la">acer, acris, acre</i> (vif) : trois formes, plus rare.</li></ul>
${T('<i class="la">fortis, e</i> : courageux', ["Cas", "Masc. et fém. sg.", "Neutre sg.", "Masc. et fém. pl.", "Neutre pl."], [["Nominatif", "fortis", "forte", "fortes", "fortia"], ["Vocatif", "fortis", "forte", "fortes", "fortia"], ["Accusatif", "fortem", "forte", "fortes", "fortia"], ["Génitif", "fortis", "fortis", "fortium", "fortium"], ["Datif", "forti", "forti", "fortibus", "fortibus"], ["Ablatif", "forti", "forti", "fortibus", "fortibus"]])}
<aside class="retenir"><strong>Trois marques à retenir</strong> : ablatif singulier en <b class="des">-i</b>, génitif pluriel en <b class="des">-ium</b>, neutre pluriel en <b class="des">-ia</b>.</aside>
<p><i class="la">ingens</i> suit le même schéma sur le radical <i class="la">ingent-</i> : <i class="la">ingentem, ingentis, ingenti</i> ; pluriel <i class="la">ingentes, ingentia, ingentium, ingentibus</i>.</p>
<p>L'accord reste la règle : <i class="la">puellam fortem</i>, <i class="la">templum ingens</i>, <i class="la">omnia bella</i> (<i class="la">omnis, e</i> : tout).</p>` },
    { t: "saisie", titre: "Décliner fortis et omnis",
      items: [
        { q: "<i class=\"la\">fortis</i> : masculin, accusatif singulier", r: "fortem" }, { q: "<i class=\"la\">fortis</i> : ablatif singulier", r: "forti" },
        { q: "<i class=\"la\">fortis</i> : neutre, nominatif singulier", r: "forte" }, { q: "<i class=\"la\">fortis</i> : neutre, nominatif pluriel", r: "fortia" },
        { q: "<i class=\"la\">fortis</i> : génitif pluriel", r: "fortium" }, { q: "<i class=\"la\">omnis</i> : féminin, accusatif pluriel", r: "omnes" },
        { q: "<i class=\"la\">omnis</i> : neutre, accusatif pluriel", r: "omnia" }, { q: "<i class=\"la\">ingens</i> : datif pluriel", r: "ingentibus" }
      ] },
    { t: "tri", titre: "Bien accordé ?", q: "L'adjectif est-il correctement accordé ?",
      categories: ["Accord correct", "Accord fautif"],
      items: [
        { txt: "<i class=\"la\">miles fortis</i>", cat: "Accord correct" }, { txt: "<i class=\"la\">puellam fortem</i>", cat: "Accord correct", expl: "Deux déclinaisons différentes, mais même cas, même genre, même nombre." },
        { txt: "<i class=\"la\">templa ingentes</i>", cat: "Accord fautif", expl: "Neutre pluriel : <i class=\"la\">templa ingentia</i>." }, { txt: "<i class=\"la\">viro forte</i>", cat: "Accord fautif", expl: "Ablatif ou datif singulier : <i class=\"la\">viro forti</i>." },
        { txt: "<i class=\"la\">omnia bella</i>", cat: "Accord correct" }, { txt: "<i class=\"la\">omnium civium</i>", cat: "Accord correct" },
        { txt: "<i class=\"la\">templum ingentem</i>", cat: "Accord fautif", expl: "Neutre singulier : <i class=\"la\">templum ingens</i>." }, { txt: "<i class=\"la\">milites fortes</i>", cat: "Accord correct" }
      ] },
    { t: "lecon", titre: "Le comparatif",
      texte: `<p>Pour dire « plus courageux », le latin ajoute un suffixe au radical de l'adjectif : <b class="des">-ior</b> au masculin et au féminin, <b class="des">-ius</b> au neutre.</p>
<ul><li><i class="la">alt-us</i> donne <i class="la">alt<b class="des">ior</b>, alt<b class="des">ius</b></i> : plus haut ;</li><li><i class="la">fort-is</i> donne <i class="la">fort<b class="des">ior</b>, fort<b class="des">ius</b></i> : plus courageux.</li></ul>
${T('<i class="la">fortior, fortius</i> : plus courageux', ["Cas", "Masc. et fém. sg.", "Neutre sg.", "Masc. et fém. pl.", "Neutre pl."], [["Nominatif", "fortior", "fortius", "fortiores", "fortiora"], ["Accusatif", "fortiorem", "fortius", "fortiores", "fortiora"], ["Génitif", "fortioris", "fortioris", "fortiorum", "fortiorum"], ["Datif", "fortiori", "fortiori", "fortioribus", "fortioribus"], ["Ablatif", "fortiore", "fortiore", "fortioribus", "fortioribus"]])}
<p>Il se décline comme un imparisyllabique (<i class="la">consul</i>, <i class="la">corpus</i>) : ablatif en <i class="la">-e</i>, génitif pluriel en <i class="la">-um</i>, neutre pluriel en <i class="la">-a</i>.</p>
<aside class="retenir"><strong>« Que… »</strong> se dit de deux façons :
<ul><li><i class="la">quam</i> + le même cas : <i class="la">Marcus fortior est <b>quam Lucius</b></i> ;</li><li>l'ablatif seul : <i class="la">Marcus <b>Lucio</b> fortior est</i>.</li></ul>
Les deux phrases signifient : « Marcus est plus courageux que Lucius. »</aside>
<p>Sans complément, le comparatif signifie « assez » ou « trop » : <i class="la">via longior</i>, « une route assez longue, trop longue ».</p>` },
    { t: "lecon", titre: "Le superlatif et les formes irrégulières",
      texte: `<p>Le superlatif se forme avec <b class="des">-issimus, a, um</b> et se décline comme <i class="la">bonus</i> : <i class="la">alt<b class="des">issimus</b></i>, <i class="la">fort<b class="des">issimus</b></i>.</p>
<ul><li>Adjectifs en <i class="la">-er</i> : <b class="des">-errimus</b>. <i class="la">pulcher</i> donne <i class="la">pulcherrimus</i> ; <i class="la">miser</i>, <i class="la">miserrimus</i>.</li>
<li>Quelques adjectifs en <i class="la">-ilis</i> : <b class="des">-illimus</b>. <i class="la">facilis</i> donne <i class="la">facillimus</i>.</li></ul>
<p>Il a deux sens : « <strong>très</strong> courageux » (sans complément) ou « <strong>le plus</strong> courageux » (avec un complément au génitif : <i class="la">fortissimus <b>omnium</b></i>, « le plus courageux de tous »).</p>
${T("Les irréguliers, à savoir par cœur", ["Positif", "Comparatif", "Superlatif"], [["bonus : bon", "melior, melius", "optimus"], ["malus : mauvais", "peior, peius", "pessimus"], ["magnus : grand", "maior, maius", "maximus"], ["parvus : petit", "minor, minus", "minimus"], ["multus : nombreux", "plus (pluriel plures)", "plurimus"]])}
<aside class="savoir"><strong>Le savais-tu ?</strong> Optimiste, pessimiste, majeur, mineur, maximum, minimum : le français a gardé ces formes telles quelles.</aside>` },
    { t: "saisie", titre: "Former comparatifs et superlatifs", intro: "Écris le nominatif masculin singulier, sauf indication contraire.",
      items: [
        { q: "<i class=\"la\">altus, a, um</i> (haut) : comparatif", r: "altior" }, { q: "<i class=\"la\">fortis, e</i> : comparatif", r: "fortior" },
        { q: "<i class=\"la\">fortis, e</i> : comparatif neutre", r: "fortius" }, { q: "<i class=\"la\">altus, a, um</i> : superlatif", r: "altissimus" },
        { q: "<i class=\"la\">pulcher, chra, chrum</i> (beau) : superlatif", r: "pulcherrimus" }, { q: "<i class=\"la\">bonus</i> : comparatif", r: "melior" },
        { q: "<i class=\"la\">magnus</i> : superlatif", r: "maximus" }, { q: "<i class=\"la\">malus</i> : superlatif", r: "pessimus" }, { q: "<i class=\"la\">parvus</i> : comparatif", r: "minor" }
      ] },
    { t: "tri", titre: "Positif, comparatif ou superlatif ?", q: "À quel degré est chaque adjectif ?",
      categories: ["Positif", "Comparatif", "Superlatif"],
      items: [
        { txt: "<i class=\"la\">fortis</i>", cat: "Positif" }, { txt: "<i class=\"la\">altior</i>", cat: "Comparatif" }, { txt: "<i class=\"la\">maximus</i>", cat: "Superlatif" },
        { txt: "<i class=\"la\">pulcherrima</i>", cat: "Superlatif" }, { txt: "<i class=\"la\">melius</i>", cat: "Comparatif", expl: "Neutre de <i class=\"la\">melior</i>." }, { txt: "<i class=\"la\">omnis</i>", cat: "Positif" },
        { txt: "<i class=\"la\">peiorem</i>", cat: "Comparatif" }, { txt: "<i class=\"la\">optimi</i>", cat: "Superlatif" }, { txt: "<i class=\"la\">ingens</i>", cat: "Positif" }, { txt: "<i class=\"la\">minimum</i>", cat: "Superlatif" }
      ] },
    { t: "version", titre: "Phrases : comparer",
      vocab: ["civis, is, m : le citoyen", "defendo, is, ere, defendi, defensum : défendre", "dux, ducis, m : le chef", "ingens, entis : immense", "longus, a, um : long", "nihil : rien", "omnis, e : tout", "pax, pacis, f : la paix", "via, ae, f : la route"],
      phrases: [
        { la: "Marcus fortior est quam Lucius.", fr: "Marcus est plus courageux que Lucius." },
        { la: "Marcus Lucio fortior est.", fr: "Marcus est plus courageux que Lucius.", note: "Même sens : <i class=\"la\">Lucio</i> est un ablatif de comparaison." },
        { la: "Hannibal fortissimus ducum erat.", fr: "Hannibal était le plus courageux des chefs.", aide: "<i class=\"la\">ducum</i> : génitif pluriel." },
        { la: "Haec via longior est.", fr: "Cette route est assez longue.", note: "Ou « trop longue » : comparatif sans complément." },
        { la: "Optimi cives patriam defendunt.", fr: "Les meilleurs citoyens défendent la patrie." },
        { la: "Omnes milites ingentem urbem vident.", fr: "Tous les soldats voient une ville immense." },
        { la: "Templum pulcherrimum in foro est.", fr: "Il y a sur le forum un temple très beau." },
        { la: "Nihil pace melius est.", fr: "Rien n'est meilleur que la paix.", aide: "<i class=\"la\">melius</i> : neutre, accordé avec <i class=\"la\">nihil</i> ; <i class=\"la\">pace</i> : ablatif." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li>2e classe (<i class="la">fortis, e</i> ; <i class="la">ingens, entis</i>) : 3e déclinaison, avec <i class="la">-i</i> à l'ablatif singulier, <i class="la">-ium</i>, <i class="la">-ia</i>.</li>
<li>Comparatif : <i class="la">-ior, -ius</i>, génitif <i class="la">-ioris</i> ; complément avec <i class="la">quam</i> ou à l'ablatif.</li>
<li>Superlatif : <i class="la">-issimus</i> (<i class="la">-errimus, -illimus</i>) ; « très » ou « le plus », complément au génitif.</li>
<li><i class="la">bonus, melior, optimus</i> ; <i class="la">malus, peior, pessimus</i> ; <i class="la">magnus, maior, maximus</i> ; <i class="la">parvus, minor, minimus</i>.</li></ul>` }
  ]
});

/* ---------- Parfait passif et verbes déponents ---------- */
insererApres("c11", {
  id: "c21", titre: "Le parfait passif et les verbes déponents", resume: "amatus sum, puis les verbes de forme passive et de sens actif",
  etapes: [
    { t: "lecon", titre: "Les temps du parfait au passif",
      texte: `<p>Au passif, les temps du parfait se forment en <strong>deux mots</strong> : le <strong>participe parfait passif</strong> (formé sur le supin : <i class="la">amat-um</i> donne <i class="la">amatus, a, um</i>) et le verbe <i class="la">sum</i>.</p>
${T("Le passif des temps du parfait", ["Temps", "Formation", "Exemple", "Traduction"], [["Parfait", "participe + sum", "amatus sum", "j'ai été aimé, je fus aimé"], ["Plus-que-parfait", "participe + eram", "amatus eram", "j'avais été aimé"], ["Futur antérieur", "participe + ero", "amatus ero", "j'aurai été aimé"]])}
${T("Parfait passif de <i class=\"la\">amo</i>", ["Personne", "Forme", "Traduction"], [["1re sg.", "amatus, a sum", "j'ai été aimé(e)"], ["2e sg.", "amatus, a es", "tu as été aimé(e)"], ["3e sg.", "amatus, a, um est", "il, elle a été aimé(e)"], ["1re pl.", "amati, ae sumus", "nous avons été aimé(e)s"], ["2e pl.", "amati, ae estis", "vous avez été aimé(e)s"], ["3e pl.", "amati, ae, a sunt", "ils, elles ont été aimé(e)s"]])}
<aside class="retenir"><strong>Le participe s'accorde avec le sujet</strong>, en genre et en nombre : <i class="la">urbs capt<b class="des">a</b> est</i> (la ville a été prise), <i class="la">milites capt<b class="des">i</b> sunt</i>, <i class="la">templum delet<b class="des">um</b> est</i>.</aside>
<aside class="attention"><strong>Le faux ami.</strong> <i class="la">amatus est</i> ne veut pas dire « il est aimé » (c'est <i class="la">amatur</i>), mais « il <strong>a été</strong> aimé ». Le temps est donné par l'ensemble participe + <i class="la">sum</i>.</aside>` },
    { t: "saisie", titre: "Former le passif des temps du parfait", intro: "Écris les deux mots, participe puis auxiliaire. Pense à l'accord avec le sujet indiqué.",
      items: [
        { q: "<i class=\"la\">capio</i> (supin <i class=\"la\">captum</i>) : parfait passif, 3e sg., sujet masculin", r: "captus est" },
        { q: "<i class=\"la\">capio</i> : parfait passif, 3e sg., sujet <i class=\"la\">urbs</i> (féminin)", r: "capta est" },
        { q: "<i class=\"la\">capio</i> : parfait passif, 3e pl., sujet <i class=\"la\">milites</i> (masculin)", r: "capti sunt" },
        { q: "<i class=\"la\">mitto</i> (supin <i class=\"la\">missum</i>) : parfait passif, 3e pl., sujet <i class=\"la\">epistulae</i> (féminin)", r: "missae sunt" },
        { q: "<i class=\"la\">deleo</i> (supin <i class=\"la\">deletum</i>) : plus-que-parfait passif, 3e sg., sujet <i class=\"la\">Carthago</i> (féminin)", r: "deleta erat" },
        { q: "<i class=\"la\">video</i> (supin <i class=\"la\">visum</i>) : parfait passif, 3e sg., sujet <i class=\"la\">templum</i> (neutre)", r: "visum est" },
        { q: "<i class=\"la\">vinco</i> (supin <i class=\"la\">victum</i>) : parfait passif, 3e pl., sujet <i class=\"la\">hostes</i> (masculin)", r: "victi sunt" }
      ] },
    { t: "tri", titre: "Quel temps du passif ?", q: "Classe chaque forme.",
      categories: ["Présent passif", "Parfait passif", "Plus-que-parfait passif"],
      items: [
        { txt: "<i class=\"la\">capitur</i>", cat: "Présent passif", expl: "il est pris" }, { txt: "<i class=\"la\">capta est</i>", cat: "Parfait passif", expl: "elle a été prise" },
        { txt: "<i class=\"la\">missi erant</i>", cat: "Plus-que-parfait passif", expl: "ils avaient été envoyés" }, { txt: "<i class=\"la\">laudantur</i>", cat: "Présent passif", expl: "ils sont loués" },
        { txt: "<i class=\"la\">victi sunt</i>", cat: "Parfait passif", expl: "ils ont été vaincus" }, { txt: "<i class=\"la\">deleta erat</i>", cat: "Plus-que-parfait passif", expl: "elle avait été détruite" },
        { txt: "<i class=\"la\">monetur</i>", cat: "Présent passif", expl: "il est averti" }, { txt: "<i class=\"la\">auditi sumus</i>", cat: "Parfait passif", expl: "nous avons été entendus" }
      ] },
    { t: "quiz", titre: "Traduire le passif",
      questions: [
        { q: "<i class=\"la\">Urbs capta est.</i>", choix: ["La ville a été prise.", "La ville est prise (en ce moment).", "La ville avait été prise."], bon: 0, expl: "Parfait passif. « La ville est en train d'être prise » se dirait <i class=\"la\">urbs capitur</i>." },
        { q: "<i class=\"la\">Epistula scribitur.</i>", choix: ["On écrit la lettre.", "La lettre a été écrite.", "La lettre avait été écrite."], bon: 0, expl: "Présent passif." },
        { q: "<i class=\"la\">Carthago deleta erat.</i>", choix: ["Carthage avait été détruite.", "Carthage a été détruite.", "Carthage était en train d'être détruite."], bon: 0, expl: "Plus-que-parfait passif : participe + <i class=\"la\">erat</i>." },
        { q: "<i class=\"la\">Milites a duce laudati sunt.</i>", choix: ["Les soldats ont été loués par leur chef.", "Les soldats sont loués par leur chef.", "Les soldats ont loué leur chef."], bon: 0, expl: "<i class=\"la\">a duce</i> : complément d'agent." }
      ] },
    { t: "lecon", titre: "Les verbes déponents",
      texte: `<p>Certains verbes ont une <strong>forme passive</strong> mais un <strong>sens actif</strong>. On les appelle déponents : ils ont « déposé » leur sens passif.</p>
<p><i class="la">loquitur</i> a les terminaisons de <i class="la">legitur</i>, mais signifie « il parle », et non « il est parlé ».</p>
<p>Le dictionnaire les donne avec trois formes seulement, toutes passives : le présent, la 2e personne, l'infinitif, puis le parfait.</p>
${T("Déponents courants", ["Temps primitifs", "Sens"], [["hortor, aris, ari, hortatus sum", "exhorter, encourager"], ["vereor, eris, eri, veritus sum", "craindre"], ["loquor, eris, i, locutus sum", "parler"], ["sequor, eris, i, secutus sum", "suivre"], ["proficiscor, eris, i, profectus sum", "partir"], ["morior, eris, i, mortuus sum", "mourir"], ["patior, eris, i, passus sum", "supporter, souffrir"], ["utor, eris, i, usus sum (+ ablatif)", "se servir de"], ["dominor, aris, ari, dominatus sum", "dominer, être le maître"]])}
<ul><li>Ils se conjuguent comme un passif : <i class="la">loquor, loqueris, loquitur</i> ; <i class="la">loquebatur</i> (il parlait) ; <i class="la">loquetur</i> (il parlera).</li>
<li>Leur parfait se forme comme un parfait passif : <i class="la">locutus est</i>, « il a parlé ».</li>
<li>Leur participe parfait a donc un sens <strong>actif</strong> : <i class="la">locutus</i>, « ayant parlé ».</li></ul>
<aside class="attention"><strong>Comment les reconnaître ?</strong> Par le dictionnaire, et seulement par lui : une entrée en <i class="la">-or</i> suivie d'un parfait en deux mots signale un déponent.</aside>` },
    { t: "tri", titre: "Déponent ou passif ?", q: "Le verbe a-t-il un sens actif (déponent) ou passif ? Aide-toi des verbes que tu connais.",
      categories: ["Déponent : sens actif", "Passif"],
      items: [
        { txt: "<i class=\"la\">loquitur</i>", cat: "Déponent : sens actif", expl: "il parle" }, { txt: "<i class=\"la\">amatur</i>", cat: "Passif", expl: "il est aimé" },
        { txt: "<i class=\"la\">sequuntur</i>", cat: "Déponent : sens actif", expl: "ils suivent" }, { txt: "<i class=\"la\">monentur</i>", cat: "Passif", expl: "ils sont avertis" },
        { txt: "<i class=\"la\">hortatur</i>", cat: "Déponent : sens actif", expl: "il exhorte" }, { txt: "<i class=\"la\">capitur</i>", cat: "Passif", expl: "il est pris" },
        { txt: "<i class=\"la\">moritur</i>", cat: "Déponent : sens actif", expl: "il meurt" }, { txt: "<i class=\"la\">auditur</i>", cat: "Passif", expl: "il est entendu" },
        { txt: "<i class=\"la\">proficiscuntur</i>", cat: "Déponent : sens actif", expl: "ils partent" }, { txt: "<i class=\"la\">leguntur</i>", cat: "Passif", expl: "ils sont lus" }
      ] },
    { t: "quiz", titre: "Traduire les déponents",
      questions: [
        { q: "<i class=\"la\">loquitur</i>", choix: ["il parle", "il est dit", "il a parlé"], bon: 0, expl: "Présent, sens actif." },
        { q: "<i class=\"la\">secuti sunt</i>", choix: ["ils ont suivi", "ils ont été suivis", "ils suivent"], bon: 0, expl: "Parfait de <i class=\"la\">sequor</i>." },
        { q: "<i class=\"la\">hortabatur</i>", choix: ["il exhortait", "il était exhorté", "il exhortera"], bon: 0, expl: "Imparfait de <i class=\"la\">hortor</i>." },
        { q: "<i class=\"la\">profectus est</i>", choix: ["il est parti", "il a été parti", "il part"], bon: 0, expl: "Parfait de <i class=\"la\">proficiscor</i>." },
        { q: "<i class=\"la\">sequentur</i>", choix: ["ils suivront", "ils suivent", "ils seront suivis"], bon: 0, expl: "Futur : <i class=\"la\">sequor</i> est de la 3e conjugaison, futur en <i class=\"la\">-e-</i>. Le présent est <i class=\"la\">sequuntur</i>." },
        { q: "<i class=\"la\">mortuus est</i>", choix: ["il est mort", "il meurt", "il a été tué"], bon: 0, expl: "Parfait de <i class=\"la\">morior</i>." }
      ] },
    { t: "version", titre: "Phrases : passif et déponents",
      vocab: ["a, ab + ablatif : par", "consul, consulis, m : le consul", "dux, ducis, m : le chef", "hostis, is, m : l'ennemi", "maritus, i, m : le mari", "pro + ablatif : devant, pour", "pugna, ae, f : la bataille", "servus, i, m : l'esclave"],
      phrases: [
        { la: "Urbs ab hostibus capta est.", fr: "La ville a été prise par les ennemis." },
        { la: "Hannibal a Scipione victus est.", fr: "Hannibal a été vaincu par Scipion." },
        { la: "Epistulae a servo missae erant.", fr: "Les lettres avaient été envoyées par l'esclave." },
        { la: "Brutus pro populo loquitur.", fr: "Brutus parle devant le peuple.", note: "Déponent : sens actif." },
        { la: "Lucretia cum marito suo locuta est.", fr: "Lucrèce a parlé avec son mari.", aide: "<i class=\"la\">locuta</i> : accord au féminin." },
        { la: "Milites ducem secuti sunt.", fr: "Les soldats ont suivi leur chef.", aide: "<i class=\"la\">ducem</i> : accusatif, COD d'un verbe de sens actif." },
        { la: "Tarquinius multos annos dominatus est.", fr: "Tarquin a été le maître pendant de nombreuses années." },
        { la: "Consul Roma profectus est.", fr: "Le consul est parti de Rome.", aide: "<i class=\"la\">Roma</i> : ablatif sans préposition, lieu d'où l'on vient (nom de ville)." },
        { la: "Multi milites in pugna mortui sunt.", fr: "De nombreux soldats sont morts dans la bataille." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li>Passif des temps du parfait : participe parfait passif + <i class="la">sum</i> (parfait), <i class="la">eram</i> (plus-que-parfait), <i class="la">ero</i> (futur antérieur).</li>
<li>Le participe s'accorde avec le sujet : <i class="la">urbs capta est</i>, <i class="la">milites capti sunt</i>.</li>
<li><i class="la">captus est</i> : « il a été pris », et non « il est pris » (<i class="la">capitur</i>).</li>
<li>Déponents : forme passive, sens actif. <i class="la">loquitur</i>, il parle ; <i class="la">locutus est</i>, il a parlé.</li></ul>` }
  ]
});

/* ---------- Verbes irréguliers ---------- */
insererApres("c12", {
  id: "c24", titre: "Les verbes irréguliers", resume: "eo, fero, volo, nolo, malo et fio",
  etapes: [
    { t: "lecon", titre: "Aller : eo, is, ire, ii, itum",
      texte: `<p>Le verbe <i class="la">eo</i> a un radical très court : <b class="des">i-</b>, qui devient <b class="des">e-</b> devant <i class="la">a, o, u</i>.</p>
${T('<i class="la">eo, is, ire, ii, itum</i> : aller', ["Personne", "Présent", "Imparfait", "Futur", "Parfait"], [["1re sg.", "eo", "ibam", "ibo", "ii"], ["2e sg.", "is", "ibas", "ibis", "isti"], ["3e sg.", "it", "ibat", "ibit", "iit"], ["1re pl.", "imus", "ibamus", "ibimus", "iimus"], ["2e pl.", "itis", "ibatis", "ibitis", "istis"], ["3e pl.", "eunt", "ibant", "ibunt", "ierunt"]])}
<p>Ses <strong>composés</strong> sont très fréquents et se conjuguent comme lui : <i class="la">abeo</i> (s'en aller), <i class="la">adeo</i> (aller vers), <i class="la">exeo</i> (sortir), <i class="la">redeo</i> (revenir), <i class="la">transeo</i> (traverser), <i class="la">pereo</i> (périr).</p>` },
    { t: "saisie", titre: "Conjuguer eo et ses composés",
      items: [
        { q: "<i class=\"la\">eo</i> : présent, 3e personne du pluriel (ils vont)", r: "eunt" }, { q: "<i class=\"la\">eo</i> : imparfait, 3e personne du singulier (il allait)", r: "ibat" },
        { q: "<i class=\"la\">eo</i> : futur, 1re personne du singulier (j'irai)", r: "ibo" }, { q: "<i class=\"la\">redeo</i> : présent, 3e personne du singulier (il revient)", r: "redit" },
        { q: "<i class=\"la\">exeo</i> : présent, 3e personne du pluriel (ils sortent)", r: "exeunt" }, { q: "<i class=\"la\">transeo</i> : parfait, 3e personne du singulier (il traversa)", r: "transiit" }
      ] },
    { t: "lecon", titre: "Porter : fero, fers, ferre, tuli, latum",
      texte: `<p><i class="la">fero</i> ressemble à <i class="la">lego</i>, mais il perd sa voyelle de liaison à quelques formes : <i class="la">fer-s, fer-t, fer-tis, fer-re</i>. Son parfait et son supin viennent d'autres radicaux.</p>
${T('<i class="la">fero</i> : porter, supporter', ["Personne", "Présent actif", "Présent passif"], [["1re sg.", "fero", "feror"], ["2e sg.", "fers", "ferris"], ["3e sg.", "fert", "fertur"], ["1re pl.", "ferimus", "ferimur"], ["2e pl.", "fertis", "ferimini"], ["3e pl.", "ferunt", "feruntur"]])}
<ul><li>Imparfait : <i class="la">ferebam</i>. Futur : <i class="la">feram, feres</i>. Parfait : <i class="la">tuli, tulisti</i>…</li>
<li>Composés : <i class="la">affero</i> (apporter), <i class="la">aufero, abstuli, ablatum</i> (emporter), <i class="la">effero</i> (porter dehors), <i class="la">refero</i> (rapporter), <i class="la">confero</i> (rassembler, comparer).</li></ul>` },
    { t: "lecon", titre: "Vouloir : volo, nolo, malo",
      texte: `${T("Présent", ["Personne", "volo : vouloir", "nolo : ne pas vouloir", "malo : préférer"], [["1re sg.", "volo", "nolo", "malo"], ["2e sg.", "vis", "non vis", "mavis"], ["3e sg.", "vult", "non vult", "mavult"], ["1re pl.", "volumus", "nolumus", "malumus"], ["2e pl.", "vultis", "non vultis", "mavultis"], ["3e pl.", "volunt", "nolunt", "malunt"]])}
<ul><li>Infinitifs : <i class="la">velle, nolle, malle</i>.</li><li>Imparfait : <i class="la">volebam, nolebam, malebam</i>. Futur : <i class="la">volam, voles</i>…</li><li>Parfait : <i class="la">volui, nolui, malui</i>.</li></ul>
<p>Ces verbes se construisent avec un <strong>infinitif</strong> : <i class="la">Romam ire volo</i>, « je veux aller à Rome ». <i class="la">malo… quam</i> : « je préfère… plutôt que ».</p>
<aside class="savoir"><strong>Le savais-tu ?</strong> <i class="la">nolo</i> vient de <i class="la">non volo</i>, et <i class="la">malo</i> de <i class="la">magis volo</i>, « je veux plus ».</aside>` },
    { t: "saisie", titre: "Conjuguer fero, volo, nolo, malo",
      items: [
        { q: "<i class=\"la\">volo</i> : présent, 3e personne du singulier (il veut)", r: "vult" }, { q: "<i class=\"la\">volo</i> : présent, 2e personne du singulier (tu veux)", r: "vis" },
        { q: "<i class=\"la\">volo</i> : infinitif présent (vouloir)", r: "velle" }, { q: "<i class=\"la\">nolo</i> : présent, 1re personne du pluriel", r: "nolumus" },
        { q: "<i class=\"la\">malo</i> : présent, 3e personne du singulier (il préfère)", r: "mavult" }, { q: "<i class=\"la\">fero</i> : présent, 2e personne du singulier (tu portes)", r: "fers" },
        { q: "<i class=\"la\">fero</i> : présent passif, 3e personne du singulier", r: "fertur" }, { q: "<i class=\"la\">fero</i> : parfait, 3e personne du singulier (il porta)", r: "tulit" }
      ] },
    { t: "lecon", titre: "Devenir : fio, fis, fieri, factus sum",
      texte: `<p><i class="la">fio</i> signifie « devenir », « se produire », « être fait ». Il sert de <strong>passif à <i class="la">facio</i></strong> pour le présent, l'imparfait et le futur.</p>
${T('<i class="la">fio</i>', ["Personne", "Présent", "Imparfait", "Futur"], [["1re sg.", "fio", "fiebam", "fiam"], ["2e sg.", "fis", "fiebas", "fies"], ["3e sg.", "fit", "fiebat", "fiet"], ["1re pl.", "fimus", "fiebamus", "fiemus"], ["2e pl.", "fitis", "fiebatis", "fietis"], ["3e pl.", "fiunt", "fiebant", "fient"]])}
<ul><li>Infinitif : <i class="la">fieri</i>. Parfait : <i class="la">factus sum</i> (c'est le parfait passif de <i class="la">facio</i>).</li>
<li>Avec un attribut au nominatif : <i class="la">Cicero consul fit</i>, « Cicéron devient consul ».</li></ul>` },
    { t: "tri", titre: "De quel verbe vient cette forme ?", q: "Rattache chaque forme à son verbe.",
      categories: ["eo", "fero", "volo", "fio"],
      items: [
        { txt: "<i class=\"la\">it</i>", cat: "eo", expl: "il va" }, { txt: "<i class=\"la\">fert</i>", cat: "fero", expl: "il porte" }, { txt: "<i class=\"la\">vult</i>", cat: "volo", expl: "il veut" },
        { txt: "<i class=\"la\">fit</i>", cat: "fio", expl: "il devient" }, { txt: "<i class=\"la\">eunt</i>", cat: "eo", expl: "ils vont" }, { txt: "<i class=\"la\">tulit</i>", cat: "fero", expl: "il porta" },
        { txt: "<i class=\"la\">ibant</i>", cat: "eo", expl: "ils allaient" }, { txt: "<i class=\"la\">velle</i>", cat: "volo", expl: "vouloir" }, { txt: "<i class=\"la\">fiunt</i>", cat: "fio", expl: "ils deviennent" },
        { txt: "<i class=\"la\">vis</i>", cat: "volo", expl: "tu veux" }, { txt: "<i class=\"la\">ferunt</i>", cat: "fero", expl: "ils portent" }, { txt: "<i class=\"la\">fieri</i>", cat: "fio", expl: "devenir, être fait" }
      ] },
    { t: "version", titre: "Phrases avec verbes irréguliers",
      vocab: ["arma, orum, n pl : les armes", "cibus, i, m : la nourriture", "domum : à la maison (avec mouvement)", "hortus, i, m : le jardin", "neco, as, are, avi, atum : tuer", "para : prépare (impératif)", "pax, pacis, f : la paix", "servus, i, m : l'esclave"],
      phrases: [
        { la: "Pueri in hortum eunt.", fr: "Les enfants vont dans le jardin." },
        { la: "Hannibal Alpes transiit.", fr: "Hannibal traversa les Alpes." },
        { la: "Amulius pueros necare vult.", fr: "Amulius veut tuer les enfants." },
        { la: "Milites arma ferunt.", fr: "Les soldats portent leurs armes." },
        { la: "Servi cibum in villam ferebant.", fr: "Les esclaves portaient la nourriture dans la propriété." },
        { la: "Cicero consul factus est.", fr: "Cicéron est devenu consul.", aide: "<i class=\"la\">consul</i> : attribut du sujet, au nominatif." },
        { la: "Domum redire nolumus.", fr: "Nous ne voulons pas rentrer à la maison." },
        { la: "Si vis pacem, para bellum.", fr: "Si tu veux la paix, prépare la guerre." }
      ] },
    { t: "lecon", synthese: true, titre: "Fiche synthèse",
      texte: `<ul><li><i class="la">eo, is, it, imus, itis, eunt</i> ; <i class="la">ibam, ibo, ii</i>. Composés : <i class="la">exeo, redeo, transeo</i>…</li>
<li><i class="la">fero, fers, fert, ferimus, fertis, ferunt</i> ; parfait <i class="la">tuli</i>, supin <i class="la">latum</i>.</li>
<li><i class="la">volo, vis, vult, volumus, vultis, volunt</i> ; <i class="la">velle, nolle, malle</i> ; + infinitif.</li>
<li><i class="la">fio, fis, fit</i> ; <i class="la">fieri</i> ; <i class="la">factus sum</i> : devenir, être fait.</li></ul>` }
  ]
});

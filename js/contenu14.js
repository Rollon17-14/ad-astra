/* ============================================================
   CERTIFICATION ELEX (Euroclassica) — partie à part du site.
   Présentation, puis deux préparations distinctes : Vestibulum
   (niveau 1, texte mythologique) et Ianua (niveau 2, texte
   historique). Programme d'après « ECCL : ELEX, general lay-out
   and required knowledge » (2026). Les sujets officiels ne sont
   pas reproduits : le site fournit la grille de réponses et le
   corrigé. Les sujets d'entraînement sont propres au site.
   ============================================================ */
var PARTIE_ELEX = (function () {
  const la = s => `<i class="la">${s}</i>`;
  const lien = (id, t) => `<a href="#${id}">${t}</a>`;
  const T = (legende, tetes, lignes) => `<div class="tab-wrap"><table class="donnees">${legende ? `<caption>${legende}</caption>` : ""}<thead><tr>${tetes.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${lignes.map(l => `<tr>${l.map((x, k) => k ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  /* Question : [énoncé, [choix], rang de la bonne réponse, explication] */
  /* La place de la bonne réponse est répartie également entre A, B, C et D (rotation des choix). */
  const CIBLES = [2, 0, 3, 1, 1, 3, 0, 2, 3, 1, 2, 0, 0, 2, 1, 3];
  let rang = 0;
  const tourner = ([q, choix, bon, expl]) => { const d = (bon - CIBLES[rang++ % CIBLES.length] + choix.length * 4) % choix.length; return { q, choix: choix.map((x, k) => choix[(k + d) % choix.length]), bon: (bon - d + choix.length) % choix.length, expl: expl || "" }; };
  const Qs = l => l.map(tourner);
  const quiz = (titre, intro, l) => ({ t: "quiz", titre, intro, questions: l.map(x => Object.assign(tourner(x), { fixe: true })) });
  const texte = lignes => `<ol>${lignes.map(l => `<li lang="la">${l}</li>`).join("")}</ol>`;
  const EURO = "https://www.euroclassica.eu/portale/euroclassica/eccl.html";
  const SECT = ["I. Morphologie", "II. Syntaxe", "III. Compréhension et vocabulaire", "IV. Civilisation"];
  /* Sujet d'entraînement : quatre séries de dix questions */
  const sujet = (titre, intro, lignes, vocab, m, s, c, v) => ({ t: "examen", titre, intro, texte: texte(lignes), voc: vocab, duree: 45,
    sections: [m, s, c, v].map((l, k) => ({ titre: SECT[k], questions: Qs(l) })) });
  /* Sujet officiel : grille A-D ; rep = "DCCA…", expl = courtes justifications */
  const officiel = (titre, intro, sections, rep, expl, duree) => { let k = 0; return { t: "examen", grille: true, titre, intro, duree,
    sections: sections.map(([t, n]) => ({ titre: t, questions: Array.from({ length: n }, () => { const j = k++; return { bon: "ABCD".indexOf(rep[j]), expl: expl[j] || "" }; }) })) }; };

  /* ================= PRÉSENTATION ================= */
  const presentation = { id: "c62", borne: "ELEX", genre: "Certification,", titre: "La certification européenne ELEX", resume: "Ce qu'est l'examen, comment il se passe, ce qu'il rapporte",
    etapes: [
      { t: "lecon", titre: "ELEX et EGEX : de quoi s'agit-il ?",
        texte: `<p><strong>Euroclassica</strong> est la fédération européenne des associations de professeurs de langues anciennes. Elle propose chaque année un <strong>certificat européen de langues anciennes</strong> (ECCL, <em>European Certificate for Classics</em>) :</p>
<ul><li><strong>ELEX</strong> (<em>European Latin Exam</em>) pour le latin ;</li><li><strong>EGEX</strong> (<em>European Greek Exam</em>) pour le grec ancien.</li></ul>
<p>Le même sujet est passé la même année dans une trentaine de pays d'Europe, traduit en anglais, en allemand et en français. Il est gratuit, se passe au lycée, et c'est ton professeur qui l'organise et le corrige.</p>
${T("Les deux niveaux", ["Niveau", "Nom", "Le texte", "Pour qui ?"], [
  ["1", la("Vestibulum") + " (« le vestibule »)", "un récit <strong>mythologique</strong>, une phrase par ligne", "les débutants : les bases de la langue"],
  ["2", la("Ianua") + " (« la porte »)", "un texte <strong>historique</strong>, souvent adapté d'un auteur", "les latinistes confirmés : toute la grammaire usuelle"]])}
<aside class="retenir"><p><strong>À retenir.</strong> ${la("Vestibulum")} et ${la("Ianua")} sont les deux premiers paliers d'un parcours européen qui en compte davantage : on entre par le vestibule, puis on passe la porte.</p></aside>` },
      { t: "lecon", titre: "Le déroulement de l'épreuve",
        texte: `${T("L'épreuve en chiffres", ["", ""], [
  ["Durée", "45 minutes"], ["Documents", "aucun : le dictionnaire n'est pas autorisé"], ["Le sujet", "un texte latin, puis 40 questions à choix multiples (4 propositions, une seule bonne réponse)"],
  ["Barème", "1 point par bonne réponse, pas de point retiré en cas d'erreur"]])}
${T("Les 40 questions", ["Domaine", "Questions", "Exemples de ce qu'on te demande"], [
  ["Morphologie", "10", "le cas d'un nom, le temps d'un verbe, la forme de base (" + la("vicerunt") + " vient de " + la("vinco") + "), le singulier ou le pluriel au même cas"],
  ["Syntaxe", "10", "la fonction d'un mot, l'emploi d'un ablatif, l'accord d'un adjectif, le sujet d'un verbe, le type d'une subordonnée"],
  ["Compréhension et vocabulaire", "10", "à qui renvoie un pronom, ce que dit un passage, le sens d'un mot dans le contexte, un mot français issu du latin"],
  ["Civilisation", "10", "mythologie, histoire de Rome, monuments, héritage de l'Antiquité"]])}
${T("Les médailles", ["Score", "Récompense"], [["36 à 40", "médaille d'or"], ["30 à 35", "médaille d'argent"], ["24 à 29", "médaille de bronze"]])}
<p>Les lauréats reçoivent un <strong>diplôme d'Euroclassica</strong>. Il n'y a rien à perdre : en dessous de 24, on retente l'année suivante.</p>
<aside class="attention"><p><strong>Attention.</strong> Les mots que tu n'es pas censé connaître sont <strong>donnés</strong> avec le sujet. Au niveau ${la("Vestibulum")}, tout le vocabulaire est fourni, par ordre alphabétique. Au niveau ${la("Ianua")}, il est fourni dans l'ordre du texte, <strong>sauf</strong> le vocabulaire de base, qu'il faut savoir.</p></aside>` },
      { t: "lecon", titre: "Pourquoi la passer ? Et où s'informer ?",
        texte: `<ul><li>Un <strong>diplôme européen</strong> à joindre à un dossier (Parcoursup, mobilité, candidature).</li><li>La preuve que tes années de latin correspondent à un niveau reconnu au-delà du lycée.</li><li>Un défi commun : des élèves de toute l'Europe planchent sur le même texte que toi.</li></ul>
<h3>Comment se préparer sur ce site</h3>
<ol><li>Choisis ton niveau : ${lien("c63", "Vestibulum")} ou ${lien("c68", "Ianua")}.</li><li>Suis le <strong>programme de révisions</strong> : chaque attendu renvoie au chapitre du site qui le traite.</li><li>Entraîne-toi sur les <strong>sujets des années précédentes</strong>, puis sur les <strong>sujets d'entraînement</strong>, en 45 minutes.</li></ol>
<h3>Pour en savoir plus</h3>
<ul><li><a href="${EURO}" target="_blank" rel="noopener">Euroclassica : la page du certificat ECCL (ELEX et EGEX)</a></li>
<li><a href="https://www.euroclassica.eu/portale/euroclassica.html" target="_blank" rel="noopener">Euroclassica : le site de la fédération</a></li>
<li><a href="https://www.cnarela.fr" target="_blank" rel="noopener">CNARELA : la coordination des associations françaises de langues anciennes</a></li></ul>
<p>Les dates de passation et les inscriptions sont annoncées par ton professeur.</p>` },
      quiz("As-tu bien compris l'épreuve ?", "", [
        ["Combien de temps dure l'épreuve ?", ["30 minutes", "45 minutes", "1 heure 30", "2 heures"], 1],
        ["Le dictionnaire est-il autorisé ?", ["Oui, le Gaffiot", "Oui, mais seulement au niveau Ianua", "Non", "Seulement un lexique personnel"], 2, "Les mots à ne pas connaître sont donnés avec le sujet."],
        ["À partir de combien de points obtient-on une médaille ?", ["20", "24", "30", "36"], 1, "Bronze dès 24, argent dès 30, or dès 36."],
        ["Quel type de texte tombe au niveau Vestibulum ?", ["un texte historique", "un discours", "un récit mythologique", "un poème"], 2],
        ["Que désigne le sigle EGEX ?", ["l'examen européen de grec ancien", "l'examen de latin pour les étudiants", "le niveau 3 de l'ELEX", "le nom du diplôme"], 0]])
    ] };

  /* ================= VESTIBULUM ================= */
  const vProg = { id: "c63", borne: "Prog.", genre: "Vestibulum,", titre: "Programme et révisions de langue", resume: "Ce qu'il faut savoir en morphologie et en syntaxe, avec les chapitres du site à revoir",
    etapes: [
      { t: "lecon", titre: "Le programme de morphologie",
        texte: `<p>Au niveau ${la("Vestibulum")}, aucun vocabulaire n'est exigé, et toute forme hors programme est traduite ou expliquée. Voici ce que tu dois reconnaître seul, et où le réviser.</p>
${T("Morphologie : ce qui est attendu", ["Attendu", "Modèles", "À revoir sur le site"], [
  ["Noms de la 1re déclinaison", la("mensa") + " (comme " + la("rosa") + ")", lien("c2", "La première déclinaison")],
  ["Noms de la 2e déclinaison", la("avus") + " (comme " + la("dominus") + ")", lien("c3", "La deuxième déclinaison")],
  ["Noms de la 3e déclinaison", la("rex, nomen, urbs, animal"), lien("c9", "La troisième déclinaison")],
  ["Adjectifs", la("bonus, liber, pulcher"), lien("c7", "Les adjectifs de la première classe")],
  ["Pronoms personnels et possessifs", la("ego, tu, nos, vos ; meus, tuus, suus"), lien("c22", "Les pronoms")],
  ["Mots invariables", "adverbes, conjonctions, prépositions", lien("c6", "Les compléments circonstanciels")],
  ["Numéraux de 1 à 10", "cardinaux et ordinaux", "la leçon suivante"],
  ["Les quatre conjugaisons", la("amo, moneo, lego / capio, audio"), lien("c4", "La conjugaison latine")],
  [la("sum") + " et ses composés", la("adsum, absum, possum"), lien("c5", "Le présent ; sum")],
  ["Temps : présent, imparfait, parfait", "à l'indicatif, voix active", lien("c5", "présent") + ", " + lien("c8", "imparfait") + ", " + lien("c11", "parfait")],
  ["Modes : indicatif, impératif, infinitif présent", la("ama ! amate ! amare"), lien("c26", "L'impératif")]])}
<aside class="retenir"><p><strong>À retenir.</strong> Le passif, le subjonctif, le futur et les participes ne sont <strong>pas</strong> au programme de ce niveau : s'ils apparaissent dans le texte, ils sont traduits dans le vocabulaire.</p></aside>` },
      { t: "lecon", titre: "Les numéraux de 1 à 10",
        texte: `${T("Cardinaux et ordinaux", ["", "Cardinal", "Ordinal"], [["1", la("unus, a, um"), la("primus, a, um")], ["2", la("duo, duae, duo"), la("secundus")], ["3", la("tres, tria"), la("tertius")], ["4", la("quattuor"), la("quartus")], ["5", la("quinque"), la("quintus")],
  ["6", la("sex"), la("sextus")], ["7", la("septem"), la("septimus")], ["8", la("octo"), la("octavus")], ["9", la("novem"), la("nonus")], ["10", la("decem"), la("decimus")]])}
<p>Seuls ${la("unus")}, ${la("duo")} et ${la("tres")} se déclinent ; les ordinaux se déclinent comme ${la("bonus")}. Pense au français : <em>octobre</em>, <em>décembre</em>, <em>quinquennat</em>, <em>septuor</em>.</p>` },
      { t: "lecon", titre: "Le programme de syntaxe",
        texte: `${T("Syntaxe : ce qui est attendu", ["Attendu", "Exemple", "À revoir"], [
  ["Ordre des mots : sujet, objet, verbe", la("Lupa pueros invenit."), lien("c18", "La méthode en six étapes")],
  ["Pas d'article ; sujet souvent non exprimé", la("Pugnat.") + " : il combat.", lien("c18", "La méthode")],
  ["Nominatif : sujet, attribut", la("Numitor rex est."), lien("c17", "Les fonctions et les cas")],
  ["Génitif : possession", la("filia Numitoris"), lien("c17", "Les fonctions et les cas")],
  ["Datif : attribution, intérêt ; après certains verbes", la("servis imperat ; feminis placet"), lien("c17", "Les fonctions et les cas")],
  ["Accusatif : objet ; après préposition", la("in flumen ; ad uxorem"), lien("c6", "Les compléments circonstanciels")],
  ["Ablatif : cause, instrument, temps, lieu ; après préposition", la("gladio necat ; e Troia fugit"), lien("c6", "Les compléments circonstanciels")],
  ["Vocatif", la("Vos, miserae !"), lien("c17", "Les fonctions et les cas")],
  ["Indicatif et impératif ; infinitif complément", la("navigare non placet ; aedificare constituunt"), lien("c26", "L'impératif")]])}
<aside class="attention"><p><strong>Attention.</strong> Dans les questions, « justifiez l'emploi de cet ablatif » attend une de ces réponses : après une préposition, complément de moyen, de manière, de cause, de temps ou de lieu. Regarde d'abord s'il y a une préposition devant le mot.</p></aside>` },
      quiz("Dans l'esprit de l'examen : morphologie", "Douze questions du type de celles de l'épreuve, sur des formes isolées.", [
        [la("in silva") + " : quel est le cas de " + la("silva") + " ?", ["nominatif", "génitif", "accusatif", "ablatif"], 3, "Après " + la("in") + " (lieu où l'on est)."],
        [la("regis") + " : quel est le cas ?", ["nominatif", "génitif", "datif", "accusatif"], 1, la("rex, regis") + " : 3e déclinaison."],
        [la("urbes") + " : quel est le singulier au même cas (accusatif) ?", ["urbs", "urbis", "urbem", "urbe"], 2],
        [la("nomina") + " : quel est le nominatif singulier ?", ["nomen", "nominus", "nomina", "nominis"], 0, "Neutre de la 3e déclinaison."],
        [la("amabat") + " : quel est le temps ?", ["présent", "imparfait", "parfait", "futur"], 1, "Suffixe " + la("-ba-") + "."],
        [la("misit") + " : quelle est la 1re personne du présent ?", ["misceo", "mitto", "minuo", "miror"], 1, la("mitto, is, ere, misi, missum") + "."],
        [la("fuerunt") + " : de quel verbe vient cette forme ?", ["fugio", "fero", "sum", "facio"], 2, "Parfait de " + la("sum") + "."],
        [la("venite") + " : de quelle forme s'agit-il ?", ["infinitif", "impératif", "indicatif présent", "parfait"], 1, "Impératif pluriel : « venez ! »."],
        [la("pulchrae") + " : quelle analyse est impossible ?", ["génitif singulier", "datif singulier", "nominatif pluriel", "ablatif pluriel"], 3],
        [la("nobis") + " : de quel pronom s'agit-il ?", ["ego", "tu", "nos", "vos"], 2],
        [la("septimus") + " : que signifie ce mot ?", ["sept", "septième", "six", "sixième"], 1],
        [la("fortiter") + " : à quelle catégorie ce mot appartient-il ?", ["adjectif", "adverbe", "nom", "verbe"], 1, "Les adverbes en " + la("-ter") + " viennent des adjectifs de la 2e classe."]]),
      quiz("Dans l'esprit de l'examen : syntaxe", "Lis la phrase, puis réponds.", [
        [la("Puella matri donum dat.") + " Quelle est la fonction de " + la("matri") + " ?", ["sujet", "COD", "complément d'attribution (COI)", "complément du nom"], 2, "Datif."],
        [la("Puella matri donum dat.") + " Quel est le COD ?", ["puella", "matri", "donum", "dat"], 2],
        [la("Miles hostem gladio necat.") + " Justifiez l'emploi de l'ablatif " + la("gladio") + ".", ["après une préposition", "complément de moyen", "complément de lieu", "COI"], 1],
        [la("Romulus rex est.") + " Quelle est la fonction de " + la("rex") + " ?", ["sujet", "attribut du sujet", "COD", "apposition"], 1],
        [la("In templo deae ignis est.") + " De quel mot " + la("deae") + " est-il complément ?", ["in", "templo", "ignis", "est"], 1, "Génitif de possession : « le temple de la déesse »."],
        [la("Viri magna cum cura laborant.") + " Avec quel mot " + la("magna") + " s'accorde-t-il ?", ["viri", "cura", "laborant", "cum"], 1],
        [la("Prima hora discipuli veniunt.") + " Justifiez l'emploi de l'ablatif " + la("hora") + ".", ["complément de temps", "complément de moyen", "complément de cause", "après une préposition"], 0],
        [la("Pueri ludere cupiunt.") + " Quelle est la fonction de " + la("ludere") + " ?", ["sujet", "infinitif complément de cupiunt", "impératif", "attribut"], 1],
        [la("Feminae, quod timent, fugiunt.") + " Quelle est la valeur de la subordonnée ?", ["cause", "but", "condition", "concession"], 0, la("quod") + " + indicatif : « parce que »."],
        [la("Ad urbem venit.") + " Quel est le sujet ?", ["ad", "urbem", "il n'est pas exprimé", "venit"], 2, "La désinence " + la("-t") + " suffit : « il vient »."]])
    ] };

  const vCiv = { id: "c64", borne: "Civ.", genre: "Vestibulum,", titre: "Civilisation : dieux, origines de Rome, édifices", resume: "Les dix questions de civilisation du niveau 1",
    etapes: [
      { t: "lecon", titre: "Les dieux : noms latins, noms grecs, domaines",
        texte: `${T("Les Olympiens, avec Bacchus, Neptune et Pluton", ["Nom latin", "Nom grec", "Domaine", "Attribut"], [
  ["Jupiter", "Zeus", "roi des dieux, ciel", "foudre, aigle"], ["Junon", "Héra", "mariage, reine des dieux", "paon"], ["Neptune", "Poséidon", "mer", "trident"], ["Pluton", "Hadès", "monde des morts", "Cerbère"],
  ["Minerve", "Athéna", "sagesse, guerre réfléchie, artisans", "chouette, casque"], ["Mars", "Arès", "guerre", "armes"], ["Vénus", "Aphrodite", "amour, beauté", "colombe"], ["Apollon", "Apollon", "lumière, musique, oracles", "lyre, laurier"],
  ["Diane", "Artémis", "chasse, lune", "arc, biche"], ["Mercure", "Hermès", "messager, voyageurs, commerce", "caducée, sandales ailées"], ["Vulcain", "Héphaïstos", "feu, forge", "marteau"], ["Cérès", "Déméter", "moissons", "épis de blé"],
  ["Vesta", "Hestia", "foyer", "feu sacré"], ["Bacchus", "Dionysos", "vin, théâtre", "vigne, thyrse"]])}
<aside class="retenir"><p><strong>À retenir.</strong> Les questions demandent souvent le <strong>nom grec</strong> d'un dieu romain, ou son <strong>domaine</strong>. Apollon garde le même nom dans les deux langues.</p></aside>` },
      { t: "lecon", titre: "Énée, Romulus et Rémus, les Sabines, les Vestales",
        texte: `<h3>Énée</h3><ul><li>Prince troyen, fils de <strong>Vénus</strong> et d'Anchise. Il fuit Troie en flammes en portant son père, avec son fils Ascagne (Iule).</li><li>À Carthage, la reine <strong>Didon</strong> s'éprend de lui ; il repart sur l'ordre des dieux.</li><li>Dans le <strong>Latium</strong>, il épouse Lavinia après avoir vaincu <strong>Turnus</strong>. Son histoire est racontée par <strong>Virgile</strong> dans l'<em>Énéide</em>.</li><li>La famille de César et d'<strong>Auguste</strong> prétend descendre de lui.</li></ul>
<h3>Romulus et Rémus</h3><ul><li>Fils de <strong>Mars</strong> et de la vestale <strong>Rhéa Silvia</strong>, abandonnés sur le <strong>Tibre</strong>, allaités par une <strong>louve</strong>, recueillis par le berger Faustulus.</li><li>Romulus fonde Rome sur le <strong>Palatin</strong> en <strong>753 av. J.-C.</strong> (date traditionnelle) et tue son frère.</li></ul>
<h3>Les Sabines</h3><p>Rome manque de femmes : Romulus invite ses voisins sabins à des jeux et fait enlever leurs filles. Quand les Sabins attaquent, les Sabines s'interposent entre leurs pères et leurs maris, et les deux peuples s'unissent.</p>
<h3>Les Vestales</h3><p>Prêtresses de <strong>Vesta</strong>, elles entretiennent le <strong>feu sacré</strong> de la cité, sur le Forum. Choisies enfants, elles servent trente ans et doivent rester chastes.</p>` },
      { t: "lecon", titre: "Les édifices romains",
        texte: `${T("Six types d'édifices", ["Édifice", "À quoi sert-il ?", "Exemple"], [
  ["théâtre", "pièces de théâtre ; gradins en demi-cercle", "théâtre de Marcellus, théâtre d'Orange"], ["amphithéâtre", "combats de gladiateurs, chasses ; gradins en ovale", "le Colisée, les arènes de Nîmes"],
  ["cirque (hippodrome)", "courses de chars", "le Circus Maximus"], ["temple", "demeure d'un dieu ; on sacrifie devant, sur l'autel", "le Panthéon, la Maison carrée"],
  [la("domus"), "maison de ville d'une famille aisée, autour de l'atrium", "les maisons de Pompéi"], [la("insula"), "immeuble de rapport à plusieurs étages, où loge le peuple", "les insulae d'Ostie"]])}` },
      quiz("Dans l'esprit de l'examen : civilisation", "", [
        ["Quel est le nom grec de Junon ?", ["Athéna", "Héra", "Aphrodite", "Artémis"], 1], ["Quel dieu règne sur la mer ?", ["Pluton", "Mars", "Neptune", "Vulcain"], 2],
        ["Quel est le domaine de Minerve ?", ["l'amour", "la sagesse", "les moissons", "le vin"], 1], ["Quel est le nom latin de Dionysos ?", ["Bacchus", "Mercure", "Apollon", "Vulcain"], 0],
        ["Qui est la mère d'Énée ?", ["Junon", "Minerve", "Vénus", "Diane"], 2], ["Qui est le père de Romulus et Rémus ?", ["Jupiter", "Mars", "Numitor", "Énée"], 1],
        ["Quelle reine s'éprend d'Énée à Carthage ?", ["Didon", "Lavinia", "Créuse", "Hélène"], 0], ["Pourquoi les Romains enlèvent-ils les Sabines ?", ["pour se venger d'une défaite", "parce que Rome manque de femmes", "pour obtenir une rançon", "sur l'ordre de Jupiter"], 1],
        ["Quel est le rôle des Vestales ?", ["rendre des oracles", "entretenir le feu sacré", "organiser les jeux", "garder le trésor"], 1], ["Dans quel édifice les gladiateurs combattent-ils ?", ["le théâtre", "le cirque", "l'amphithéâtre", "le temple"], 2],
        ["Qu'est-ce qu'une " + la("insula") + " ?", ["une maison de campagne", "un immeuble d'habitation", "un marché couvert", "un bain public"], 1], ["Sur quelle colline Romulus fonde-t-il Rome ?", ["le Capitole", "l'Aventin", "le Palatin", "le Quirinal"], 2]])
    ] };

  const SEC25 = [["I. Morphologie (questions 1 à 10)", 10], ["II. Syntaxe (questions 11 à 20)", 10], ["III. Compréhension et vocabulaire (questions 21 à 30)", 10], ["IV. Civilisation (questions 31 à 40)", 10]];
  const consignesOff = (an, niv, extra) => `<p>Le sujet officiel ${an} du niveau ${niv} appartient à Euroclassica : il n'est pas recopié ici. Ton professeur te le distribue, ou tu le trouves par la <a href="${EURO}" target="_blank" rel="noopener">page du certificat sur le site d'Euroclassica</a>.</p>
<ol><li>Prends le sujet (papier ou PDF) et lance le chrono.</li><li>Reporte tes réponses dans la <strong>grille</strong> de l'étape suivante : une lettre par question.</li><li>Rends ta copie : tu obtiens ton score, ta médaille et la justification de chaque réponse.</li></ol>${extra || ""}
<aside class="attention"><p><strong>Attention.</strong> Euroclassica ne publie pas de corrigé avec le sujet : les réponses de la grille ont été établies pour ce site. Si l'une d'elles te surprend, parles-en à ton professeur.</p></aside>`;

  const vOff = { id: "c65", borne: "2025", genre: "Vestibulum, sujet", titre: "Sujet officiel 2025 : Énée et la fondation de Rome", resume: "La grille de réponses et le corrigé du sujet de l'an dernier",
    etapes: [
      { t: "lecon", titre: "Comment faire ce sujet", texte: consignesOff(2025, la("Vestibulum"), `<p>Le texte raconte une version peu connue de l'arrivée d'Énée : les femmes troyennes, lasses de naviguer, mettent le feu au navire.</p><p>Deux questions citent des mots absents du texte (${la("patres")} à la question 13, ${la("matresque")} à la question 23) : réponds d'après le sens.</p>`) },
      officiel("Grille de réponses : Vestibulum 2025", "Coche la lettre choisie pour chaque question du sujet.", SEC25, "DCCAABCCDC" + "BADBBBDCAB" + "BDACABDABB" + "BDDDDDAABC", [
        la("in bello") + " : ablatif après " + la("in") + ".", la("vinco, is, ere, vici, victum") + ".", "Parfait de " + la("capio") + ".", "Génitif pluriel, complément de " + la("numero") + ".", "Sujet de " + la("sunt") + ", avec " + la("flores") + " et " + la("arbores") + ".",
        la("feminis placet") + " : datif pluriel, donc " + la("feminae") + " au singulier.", la("eritis") + " et " + la("feram") + " sont des futurs.", "Datif de " + la("ego") + ".", "Présent de " + la("cogo") + ".", "Participe parfait passif, accordé avec " + la("urbs") + ".",
        "Adverbe formé sur " + la("fortis") + ".", la("e Troia") + " : ablatif après la préposition " + la("e") + " (lieu d'où l'on vient).", "Ils trouvent un rivage : " + la("litus novum") + ".", "Trois neutres : " + la("iter, periculum, litus") + ".", "Participe au nominatif pluriel : il se rapporte au sujet.",
        la("una (ex his feminis)") + " : « l'une de ces femmes ».", la("magna voce") + " : « d'une voix forte », manière ou moyen.", la("flammam capit") + ".", la("quod") + " + indicatif : la cause.", la("urbs… nomen… cepit") + " : la ville a pris le nom.",
        "Énée s'est battu avec courage, mais les Grecs ont vaincu.", "Les fugitifs sont les compagnons d'Énée.", la("-que") + " = " + la("et") + ".", la("ibi") + " reprend " + la("litus novum") + ".", la("terram cognoscere cupientes") + " : désireux de connaître le pays.",
        la("vos") + " désigne les autres femmes ; les trois autres mots désignent Roma.", "Une voix « grande » est une voix forte.", "Elle ne veut plus affronter d'autres dangers.", "En brûlant le navire, elle force tout le monde à rester.", "Le récit explique d'où vient le nom de Rome.",
        "Didon, reine de Carthage.", "Virgile.", "Romulus.", "Le Tibre.", "Vénus, sa mère.", "Turnus, roi des Rutules.", "Auguste, par la famille des Iulii.", "Un amphithéâtre.", "753 av. J.-C. selon la tradition.", "Le Latium, en italien " + la("Lazio") + "."], 45)
    ] };

  const vSujet1 = { id: "c66", borne: "Sujet 1", genre: "Vestibulum,", titre: "Sujet d'entraînement 1 : Romulus et Rémus", resume: "Un sujet complet, dans le format de l'examen : 40 questions en 45 minutes",
    etapes: [
      { t: "lecon", titre: "Avant de commencer", texte: `<p>Ce sujet a été écrit pour le site, sur le modèle de l'épreuve : un récit mythologique, une phrase par ligne, tout le vocabulaire utile fourni, puis 40 questions (morphologie, syntaxe, compréhension, civilisation).</p><p>Lis le texte en entier avant de répondre. Les nombres entre parenthèses renvoient aux lignes. Tu ne vois la correction qu'après avoir rendu ta copie.</p>` },
      sujet("Romulus et Rémus", "Numitor, roi d'Albe, est chassé du trône par son frère Amulius. Sa fille Rhéa Silvia met au monde des jumeaux.",
        ["Numitor rex Albae Longae est, sed Amulius frater eum ex urbe expellit.", "Rhea Silvia, filia Numitoris, virgo Vestalis est et in templo deae ignem servat.", "Mars deus virginem amat; itaque Rhea Silvia duos filios parit, Romulum et Remum.",
         "Amulius iratus servis imperat: «Pueros in flumen iacite!»", "Servi autem pueros in ripa Tiberis relinquunt.", "Ibi lupa pueros invenit et lacte suo nutrit.", "Postea Faustulus pastor pueros videt et ad uxorem portat.",
         "Romulus et Remus inter pastores diu vivunt et corpora magnis laboribus exercent.", "Tandem fratres Amulium necant et avo regnum reddunt.", "Deinde novam urbem prope Tiberim aedificare constituunt.", "Sed Remus muros fratris ridet et transilit.",
         "Tum Romulus iratus fratrem gladio necavit et clamavit: «Sic pereunt hostes Romae!»", "Ita Romulus primus rex fuit et urbi nomen suum dedit."],
        "avus, i : le grand-père · exercere : exercer · expellere : chasser · ignis, is : le feu · iratus, a, um : en colère · labor, oris : le travail, l'effort · lac, lactis (n) : le lait · lupa, ae : la louve · nutrire : nourrir · parere : mettre au monde · pastor, oris : le berger · pereunt : ils périssent · regnum, i : le royaume, le trône · ripa, ae : la rive · sic : ainsi · tandem : enfin · transilire : sauter par-dessus · vivere : vivre",
        [[la("urbe") + " (1). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "ablatif"], 3, "Après " + la("ex") + "."],
         [la("expellit") + " (1). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 0],
         [la("Numitoris") + " (2). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "ablatif"], 1],
         [la("filios") + " (3). Donnez le singulier de ce nom au même cas.", ["filius", "filii", "filium", "filio"], 2, "Accusatif."],
         [la("iacite") + " (4). Analysez cette forme verbale.", ["indicatif présent", "impératif", "infinitif", "parfait"], 1, "Impératif pluriel de " + la("iacio") + "."],
         [la("servis") + " (4). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "vocatif"], 1, la("imperare") + " se construit avec le datif."],
         [la("corpora") + " (8). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "ablatif"], 2, "COD de " + la("exercent") + " ; neutre pluriel."],
         [la("necavit") + " (12). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 2],
         [la("fuit") + " (13). Quelle est la première personne du présent de ce verbe ?", ["fugio", "fio", "sum", "fero"], 2],
         [la("dedit") + " (13). Quelle est la première personne du présent de ce verbe ?", ["dico", "do", "duco", "doceo"], 1]],
        [[la("rex") + " (1). Quelle est la fonction de ce nom ?", ["sujet", "attribut du sujet", "COD", "complément du nom"], 1],
         [la("urbe") + " (1). Justifiez l'emploi de cet ablatif.", ["après une préposition", "complément de moyen", "complément de cause", "COI"], 0],
         [la("deae") + " (2). De quel mot ce génitif est-il complément ?", ["virgo", "templo", "ignem", "servat"], 1],
         [la("itaque") + " (3). À quelle catégorie grammaticale ce mot appartient-il ?", ["adjectif", "conjonction", "nom", "préposition"], 1],
         [la("relinquunt") + " (5). Quel est le sujet de ce verbe ?", ["servi", "pueros", "ripa", "Tiberis"], 0],
         [la("invenit") + " (6). Quel est le COD de ce verbe ?", ["lupa", "pueros", "lacte", "ibi"], 1],
         [la("lacte") + " (6). Justifiez l'emploi de cet ablatif.", ["après une préposition", "complément de lieu", "complément de moyen", "complément de temps"], 2],
         [la("magnis") + " (8). Avec quel mot cet adjectif s'accorde-t-il ?", ["pastores", "corpora", "laboribus", "fratres"], 2],
         [la("avo") + " (9). Quelle est la fonction de ce nom ?", ["sujet", "COD", "complément d'attribution (COI)", "complément de lieu"], 2, "Datif : ils rendent le trône à leur grand-père."],
         [la("aedificare") + " (10). De quel verbe cet infinitif est-il complément ?", ["necant (9)", "reddunt (9)", "constituunt (10)", "ridet (11)"], 2]],
        [[la("eum") + " (1). Qui ce pronom désigne-t-il ?", ["Numitor", "Amulius", "Mars", "Romulus"], 0],
         ["Pourquoi Amulius est-il " + la("iratus") + " (4) ?", ["Numitor est revenu", "Rhéa Silvia a eu deux fils", "les esclaves ont désobéi", "la louve a nourri les enfants"], 1],
         [la("autem") + " (5). Quelle opposition ce mot souligne-t-il ?", ["entre Amulius et Numitor", "entre l'ordre donné et ce que font les esclaves", "entre Romulus et Rémus", "entre le fleuve et la ville"], 1],
         ["Que désigne " + la("ibi") + " (6) ?", ["le temple", "la ville d'Albe", "la rive du Tibre", "la maison du berger"], 2],
         [la("suo") + " (6). À qui ce mot renvoie-t-il ?", ["aux enfants", "à la louve", "à Faustulus", "à Mars"], 1],
         [la("uxorem") + " (7). De qui s'agit-il ?", ["de la femme d'Amulius", "de la femme de Faustulus", "de Rhéa Silvia", "de la femme de Numitor"], 1],
         [la("avo") + " (9). Qui est ce grand-père ?", ["Amulius", "Mars", "Faustulus", "Numitor"], 3],
         ["Pourquoi Romulus tue-t-il son frère ?", ["Rémus veut régner sur Albe", "Rémus se moque de ses murs et les franchit", "Rémus a tué Faustulus", "Rémus refuse de bâtir la ville"], 1],
         ["Qu'explique la fin du texte ?", ["la mort d'Amulius", "l'origine du nom de Rome", "la naissance des jumeaux", "le rôle des Vestales"], 1],
         ["Quel mot français vient du latin " + la("urbs") + " ?", ["herbe", "orbite", "urbain", "urne"], 2]],
        [["Quel est le nom grec du dieu Mars ?", ["Arès", "Hermès", "Hadès", "Héphaïstos"], 0],
         ["Quelle était la fonction principale des Vestales ?", ["rendre la justice", "entretenir le feu sacré", "interpréter le vol des oiseaux", "organiser les jeux"], 1],
         ["Sur quelle colline Romulus fonde-t-il sa ville ?", ["le Capitole", "le Palatin", "l'Aventin", "l'Esquilin"], 1],
         ["Quelle est la date traditionnelle de la fondation de Rome ?", ["1184 av. J.-C.", "753 av. J.-C.", "509 av. J.-C.", "27 av. J.-C."], 1],
         ["Pourquoi les Romains enlèvent-ils les Sabines ?", ["Rome manque de femmes", "pour se venger d'une guerre", "sur l'ordre d'un oracle", "pour obtenir de l'or"], 0],
         ["De quel héros troyen Romulus descend-il ?", ["Hector", "Priam", "Énée", "Pâris"], 2],
         ["Quel dieu règne sur la mer ?", ["Pluton", "Neptune", "Vulcain", "Apollon"], 1],
         ["Qui est l'épouse de Jupiter ?", ["Minerve", "Vénus", "Diane", "Junon"], 3],
         ["Dans quel édifice ont lieu les courses de chars ?", ["l'amphithéâtre", "le théâtre", "le cirque", "le temple"], 2],
         ["Qu'est-ce qu'une " + la("domus") + " ?", ["un immeuble de plusieurs étages", "la maison de ville d'une famille aisée", "un marché", "un camp militaire"], 1]])
    ] };

  const vSujet2 = { id: "c67", borne: "Sujet 2", genre: "Vestibulum,", titre: "Sujet d'entraînement 2 : Cérès et Proserpine", resume: "Un second sujet complet, pour confirmer",
    etapes: [
      sujet("Cérès et Proserpine", "Un mythe qui explique pourquoi la terre est tantôt fleurie, tantôt froide et nue.",
        ["Ceres dea agrorum est et hominibus frumentum dat.", "Filia eius, Proserpina, cum amicis in Sicilia flores legit.", "Pluto, rex mortuorum, puellam pulchram videt et statim amat.", "Subito terra patet: deus puellam rapit et in regnum suum ducit.",
         "Proserpina magna voce matrem vocat, sed nemo clamorem audit.", "Ceres filiam per omnes terras diu quaerit neque invenit.", "Itaque dea irata est et agros non iam curat.", "Homines frumentum non habent et multi fame pereunt.",
         "Tandem Iuppiter Mercurium ad Plutonem mittit: «Redde matri filiam!»", "Sed Proserpina iam sex grana in regno mortuorum edit.", "Ob eam causam sex menses cum marito manere debet, sex menses apud matrem vivit.",
         "Dum filia abest, Ceres dolet et terra frigida est; ubi Proserpina redit, flores iterum florent."],
        "curare : s'occuper de · edit : elle a mangé · fames, is : la faim · florere : fleurir · frigidus, a, um : froid · frumentum, i : le blé · granum, i : le grain · iratus, a, um : en colère · iterum : de nouveau · legere : cueillir · maritus, i : le mari · mensis, is : le mois · ob (+ acc.) : à cause de · patet : s'ouvre · pereunt : ils périssent · regnum, i : le royaume · tandem : enfin · vivere : vivre",
        [[la("agrorum") + " (1). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "accusatif"], 1],
         [la("hominibus") + " (1). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "vocatif"], 1],
         [la("dat") + " (1). Quelle est la première personne du présent de ce verbe ?", ["dico", "doceo", "do", "duco"], 2],
         [la("videt") + " (3). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 0],
         [la("matrem") + " (5). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "accusatif"], 3],
         [la("omnes") + " (6). Quel est le nominatif masculin singulier de cet adjectif ?", ["omnis", "omnus", "omne", "omnes"], 0],
         [la("terras") + " (6). Donnez le singulier de ce nom au même cas.", ["terra", "terrae", "terram", "terris"], 2],
         [la("redde") + " (9). Analysez cette forme verbale.", ["indicatif présent", "impératif", "infinitif", "parfait"], 1],
         [la("regno") + " (10). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 3, "Après " + la("in") + " (lieu où l'on est)."],
         [la("debet") + " (11). Quel est l'infinitif de ce verbe ?", ["debere", "dare", "delere", "dicere"], 0]],
        [[la("dea") + " (1). Quelle est la fonction de ce nom ?", ["sujet", "attribut du sujet", "COD", "apostrophe"], 1],
         [la("amicis") + " (2). Justifiez l'emploi de cet ablatif.", ["après une préposition", "complément de moyen", "complément de cause", "complément de temps"], 0, la("cum") + " + ablatif : l'accompagnement."],
         [la("rex") + " (3). Quelle est la fonction de ce nom ?", ["sujet de videt", "apposition à Pluto", "COD", "attribut"], 1],
         [la("pulchram") + " (3). Avec quel mot cet adjectif s'accorde-t-il ?", ["Pluto", "rex", "puellam", "mortuorum"], 2],
         [la("rapit") + " (4). Quel est le sujet de ce verbe ?", ["terra", "deus", "puellam", "regnum"], 1],
         [la("voce") + " (5). Justifiez l'emploi de cet ablatif.", ["complément de lieu", "complément de manière", "COD", "après une préposition"], 1],
         [la("audit") + " (5). Quel est le sujet de ce verbe ?", ["Proserpina", "matrem", "nemo", "clamorem"], 2],
         [la("fame") + " (8). Justifiez l'emploi de cet ablatif.", ["complément de cause", "complément de lieu", "complément de temps", "après une préposition"], 0],
         [la("matri") + " (9). Quelle est la fonction de ce nom ?", ["sujet", "COD", "complément d'attribution (COI)", "complément du nom"], 2],
         [la("manere") + " (11). De quel verbe cet infinitif est-il complément ?", ["edit (10)", "debet (11)", "vivit (11)", "dolet (12)"], 1]],
        [[la("eius") + " (2). À qui ce mot renvoie-t-il ?", ["à Cérès", "à Proserpine", "à Pluton", "aux hommes"], 0],
         [la("suum") + " (4). De quel royaume s'agit-il ?", ["celui de Cérès", "celui de Jupiter", "celui de Pluton", "la Sicile"], 2],
         ["Que fait Cérès à la ligne 6 ?", ["elle punit Pluton", "elle cherche sa fille partout, sans la trouver", "elle demande l'aide de Jupiter", "elle retourne en Sicile"], 1],
         [la("itaque") + " (7). De quoi la colère de Cérès est-elle la conséquence ?", ["elle ne retrouve pas sa fille", "les hommes ne l'honorent plus", "Jupiter refuse de l'aider", "la terre est froide"], 0],
         ["Qu'arrive-t-il aux hommes (8) ?", ["ils quittent la Sicile", "ils meurent de faim", "ils font la guerre", "ils prient Pluton"], 1],
         ["Qui envoie Mercure chez Pluton ?", ["Cérès", "Proserpine", "Jupiter", "les hommes"], 2],
         ["Pourquoi Proserpine ne peut-elle pas revenir pour toujours ?", ["Pluton refuse d'obéir", "elle a mangé six grains chez les morts", "elle aime son mari", "Cérès est encore en colère"], 1],
         [la("puellam") + " (3). Quel mot du texte désigne la même personne ?", ["dea (1)", "filia (2)", "amicis (2)", "matrem (5)"], 1],
         ["Qu'explique ce mythe ?", ["l'origine du blé", "l'alternance des saisons", "la naissance de la Sicile", "la mort des hommes"], 1],
         ["Quel mot français vient du latin " + la("frigidus") + " ?", ["fragile", "frigo", "fruit", "frire"], 1]],
        [["Quel est le nom grec de Cérès ?", ["Héra", "Déméter", "Hestia", "Artémis"], 1],
         ["Quel est le nom grec de Pluton ?", ["Arès", "Hadès", "Hermès", "Poséidon"], 1],
         ["Quel est le rôle de Mercure ?", ["dieu de la guerre", "messager des dieux", "dieu de la forge", "dieu de la mer"], 1],
         ["Quel est le nom grec de Jupiter ?", ["Zeus", "Cronos", "Apollon", "Héphaïstos"], 0],
         ["Quel mot français vient du nom de Cérès ?", ["cerise", "céréale", "cérémonie", "cerveau"], 1],
         ["Sous quel nom les Grecs connaissent-ils Proserpine ?", ["Perséphone", "Pénélope", "Pandore", "Psyché"], 0],
         ["Quelle est la déesse de l'amour ?", ["Minerve", "Diane", "Vénus", "Junon"], 2],
         ["Quel est le dieu du vin ?", ["Bacchus", "Vulcain", "Mars", "Neptune"], 0],
         ["Dans quel édifice assistait-on aux combats de gladiateurs ?", ["le cirque", "l'amphithéâtre", "le temple", "la domus"], 1],
         ["Quel dieu forge les armes des dieux ?", ["Mars", "Apollon", "Vulcain", "Mercure"], 2]])
    ] };

  /* ================= IANUA ================= */
  const iProg = { id: "c68", borne: "Prog.", genre: "Ianua,", titre: "Programme et révisions de langue", resume: "Tout le programme Vestibulum, plus la grammaire du niveau 2, avec les chapitres à revoir",
    etapes: [
      { t: "lecon", titre: "Le programme de morphologie",
        texte: `<p>Le niveau ${la("Ianua")} suppose acquis tout le niveau ${lien("c63", "Vestibulum")}. Il y ajoute :</p>
${T("Morphologie : ce qui s'ajoute", ["Attendu", "Exemples", "À revoir sur le site"], [
  ["4e et 5e déclinaisons", la("manus, us ; res, rei"), lien("c12", "Les déclinaisons 4 et 5")],
  ["Degrés de l'adjectif", la("altus, altior, altissimus"), lien("c23", "Comparatif et superlatif")],
  ["Pronoms démonstratifs, relatifs, interrogatifs, réfléchis", la("hic, ille, is ; qui, quae, quod ; quis ? ; se"), lien("c22", "Les pronoms") + ", " + lien("c10", "La proposition relative")],
  ["Pronoms-adjectifs du type " + la("solus"), la("unus, solus, totus, nullus, alter") + " : génitif en " + la("-ius") + ", datif en " + la("-i"), "la leçon suivante"],
  [la("Romae, Romam, domi, domum"), "le lieu sans préposition", "la leçon suivante"],
  ["Voix passive et verbes déponents", la("amatur ; sequitur, hortatus est"), lien("c5", "Le présent passif") + ", " + lien("c21", "Le parfait passif et les déponents")],
  ["Plus-que-parfait, futur, futur antérieur", la("amaverat, amabit, amaverit"), lien("c8", "Le futur") + ", " + lien("c11", "Les temps du parfait")],
  ["Subjonctif", la("amet, amaret, amaverit, amavisset"), lien("c25", "Le subjonctif")],
  ["Participes", la("amans, amatus, amaturus"), lien("c13", "Les participes")],
  ["Infinitifs autres que le présent", la("amavisse, amari, amaturum esse"), lien("c14", "La proposition infinitive")],
  ["Gérondif et adjectif verbal", la("ad pugnandum ; Carthago delenda est"), lien("c26", "Le gérondif et l'adjectif verbal")],
  ["Verbes irréguliers", la("velle, nolle, malle, ferre, ire"), lien("c24", "Les verbes irréguliers")]])}` },
      { t: "lecon", titre: "Deux points à connaître : solus et domus",
        texte: `<h3>Les pronoms-adjectifs du type ${la("solus")}</h3><p>Ils se déclinent comme ${la("bonus")}, sauf au génitif et au datif singuliers, communs aux trois genres :</p>
${T("", ["", "Génitif sg.", "Datif sg."], [[la("unus") + " (un seul)", la("unius"), la("uni")], [la("solus") + " (seul)", la("solius"), la("soli")], [la("totus") + " (tout entier)", la("totius"), la("toti")], [la("nullus") + " (aucun)", la("nullius"), la("nulli")], [la("alter") + " (l'autre)", la("alterius"), la("alteri")], [la("alius") + " (autre)", la("alterius"), la("alii")]])}
<h3>Le lieu sans préposition</h3>
${T("Villes et domus", ["Question", "Forme", "Sens"], [["où l'on est", la("Romae, domi"), "à Rome, à la maison"], ["où l'on va", la("Romam, domum"), "à Rome, à la maison"], ["d'où l'on vient", la("Roma, domo"), "de Rome, de la maison"]])}
<aside class="attention"><p><strong>Attention.</strong> ${la("Romae")} peut donc être un génitif (« de Rome »), un datif ou un locatif (« à Rome ») : c'est le verbe qui tranche.</p></aside>` },
      { t: "lecon", titre: "Le programme de syntaxe",
        texte: `${T("Syntaxe : ce qui s'ajoute", ["Attendu", "Exemple", "À revoir"], [
  ["Subjonctif en principale et en subordonnée", la("ut… inferret") + " (but) ; " + la("tam… ut") + " (conséquence) ; " + la("cum… vidisset"), lien("c25", "Le subjonctif")],
  ["Rapports de temps des participes et des infinitifs", "parfait : antériorité ; présent : simultanéité ; futur : postériorité", lien("c13", "Les participes") + ", " + lien("c14", "L'infinitive")],
  ["Proposition infinitive (accusatif + infinitif)", la("Putabant neminem Alpes transire posse."), lien("c14", "La proposition infinitive")],
  ["Nominatif + infinitif", la("Haruspex dicitur praedixisse…") + " : « on dit que l'haruspice a prédit »", lien("c14", "La proposition infinitive")],
  ["Ablatif absolu, y compris sans participe", la("Sagunto capto ; Cicerone consule"), lien("c13", "L'ablatif absolu")],
  ["Ablatif de séparation", la("domo exire ; metu liberare"), lien("c6", "Les compléments circonstanciels")],
  ["Gérondif", la("ars scribendi ; ad pugnandum"), lien("c26", "Le gérondif")],
  ["Adjectif verbal : épithète, ou avec " + la("esse"), la("pater morandus est") + " : « il faut retarder le père »", lien("c26", "L'adjectif verbal")]])}
<aside class="retenir"><p><strong>À retenir.</strong> Les questions de syntaxe du niveau 2 demandent souvent de <strong>nommer une construction</strong> : ablatif absolu, proposition infinitive, nominatif + infinitif, ou le type d'une subordonnée (but, conséquence, cause, concession, temps, condition).</p></aside>` },
      quiz("Dans l'esprit de l'examen : morphologie", "", [
        [la("manuum") + " : quel est le cas ?", ["nominatif singulier", "génitif pluriel", "accusatif singulier", "datif pluriel"], 1, "4e déclinaison."],
        [la("rei") + " : quelle analyse est possible ?", ["nominatif pluriel", "génitif ou datif singulier", "accusatif singulier", "ablatif singulier"], 1],
        [la("fortissimus") + " : quel est le degré de cet adjectif ?", ["positif", "comparatif", "superlatif", "ce n'est pas un adjectif"], 2],
        [la("melior") + " : de quel adjectif est-ce le comparatif ?", ["magnus", "malus", "bonus", "multus"], 2],
        [la("mittar") + " : quelle analyse est possible ?", ["futur passif", "parfait actif", "imparfait passif", "infinitif"], 0, "Ou subjonctif présent passif : la forme est la même à la 1re personne."],
        [la("vicerat") + " : quel est le temps ?", ["parfait", "plus-que-parfait", "futur antérieur", "imparfait"], 1],
        [la("hortatus est") + " : quelle est la forme de base ?", ["horto", "hortor", "hortus", "horreo"], 1, "Verbe déponent."],
        [la("venissent") + " : quels sont le temps et le mode ?", ["indicatif plus-que-parfait", "subjonctif imparfait", "subjonctif plus-que-parfait", "futur antérieur"], 2],
        [la("delendam") + " : de quelle forme s'agit-il ?", ["participe présent", "gérondif", "adjectif verbal", "infinitif"], 2],
        [la("tulit") + " : quelle est la forme de base ?", ["tollo", "fero", "tueor", "tango"], 1],
        [la("nullius") + " : quel est le cas ?", ["nominatif", "génitif", "datif", "accusatif"], 1],
        [la("vult") + " : quel est l'infinitif ?", ["volare", "velle", "valere", "volvere"], 1]]),
      quiz("Dans l'esprit de l'examen : syntaxe", "", [
        [la("Urbe capta, milites redierunt.") + " Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un ablatif absolu", "un nominatif + infinitif", "un gérondif"], 1],
        [la("Cicerone consule coniuratio facta est.") + " Pourquoi " + la("consule") + " est-il à l'ablatif ?", ["complément de moyen", "après une préposition", "il fait partie d'un ablatif absolu", "complément de cause"], 2, "Ablatif absolu sans participe : « sous le consulat de Cicéron »."],
        [la("Dicunt Homerum caecum fuisse.") + " Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un ablatif absolu", "un nominatif + infinitif", "une relative"], 0],
        [la("Homerus caecus fuisse dicitur.") + " Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un ablatif absolu", "un nominatif + infinitif", "une interrogative indirecte"], 2],
        [la("Legatos misit, ut pacem peterent.") + " Quelle est la valeur de la subordonnée ?", ["cause", "but", "conséquence", "concession"], 1],
        [la("Tam fortiter pugnavit, ut omnes eum laudarent.") + " Quelle est la valeur de la subordonnée ?", ["cause", "but", "conséquence", "condition"], 2],
        [la("Cum hostes appropinquarent, cives fugerunt.") + " Quelle est la meilleure traduction de " + la("cum") + " ?", ["avec", "comme, alors que", "bien que", "pour que"], 1],
        [la("Caesar dixit se venturum esse.") + " Quel rapport de temps l'infinitif exprime-t-il ?", ["antériorité", "simultanéité", "postériorité", "aucun"], 2, "Infinitif futur."],
        [la("Mihi legendum est.") + " Que signifie cette phrase ?", ["J'ai lu.", "Je dois lire.", "Je suis en train de lire.", "On me lit."], 1, "Adjectif verbal + " + la("esse") + " : l'obligation."],
        [la("Romam venit.") + " Justifiez l'accusatif " + la("Romam") + ".", ["COD", "lieu où l'on va, sans préposition", "sujet d'une infinitive", "durée"], 1]])
    ] };

  const iCiv = { id: "c69", borne: "Civ.", genre: "Ianua,", titre: "Civilisation : vie romaine, forums, histoire de Rome", resume: "Les dix questions de civilisation du niveau 2, en plus de celles du niveau 1",
    etapes: [
      { t: "lecon", titre: "Vie publique et vie privée",
        texte: `${T("La vie publique sous la République", ["", ""], [
  ["Le Sénat", "assemblée des anciens magistrats ; il siège dans la <strong>curie</strong>, sur le Forum"], ["Les comices (" + la("comitia") + ")", "assemblées du peuple : elles votent les lois et élisent les magistrats"],
  ["Le " + la("cursus honorum"), "questeur, édile, préteur, puis <strong>consul</strong> : deux consuls, élus pour un an, donnent leur nom à l'année"], ["Le dictateur", "magistrat exceptionnel, nommé pour six mois en cas de danger"], ["Les tribuns de la plèbe", "ils défendent le peuple et peuvent opposer leur veto"]])}
${T("La vie privée", ["", ""], [["La " + la("familia"), "toute la maisonnée, sous l'autorité du " + la("pater familias") + " : épouse, enfants, esclaves"], ["Les noms", "prénom, nom de famille, surnom : " + la("Caius Iulius Caesar") + " ; prénoms abrégés (" + la("C., M., P., Ti.") + ")"],
  ["La journée", "salutation des clients le matin, affaires au forum, thermes l'après-midi, " + la("cena") + " le soir"], ["L'éducation", "le " + la("ludi magister") + ", puis le grammairien, puis le rhéteur"], ["Les loisirs", "thermes, théâtre, cirque, amphithéâtre"]])}` },
      { t: "lecon", titre: "Les forums et le Capitole",
        texte: `<ul><li>Le <strong>Forum romain</strong> est le cœur de la vie publique : curie, tribune des Rostres, basiliques (justice et affaires), temples (Saturne, Vesta, Castor et Pollux), Voie sacrée.</li>
<li>Le <strong>Capitole</strong> est la colline sacrée : temple de <strong>Jupiter Très Bon Très Grand</strong>, où s'achève le cortège du triomphe.</li>
<li>Le <strong>Palatin</strong> porte la ville de Romulus, puis les palais des empereurs.</li>
<li>Les <strong>forums impériaux</strong> (César, Auguste, Trajan) agrandissent le centre ; la colonne Trajane raconte la conquête de la Dacie.</li>
<li>Le <strong>Champ de Mars</strong>, hors des murs, accueille les exercices militaires, puis l'Autel de la Paix d'Auguste et le Panthéon.</li></ul>` },
      { t: "lecon", titre: "L'histoire de Rome, de la fondation à 476",
        texte: `${T("Les grandes dates", ["Date", "Événement"], [
  ["753 av. J.-C.", "fondation de Rome par Romulus (tradition) ; début de la royauté"], ["509 av. J.-C.", "expulsion de Tarquin le Superbe ; début de la République"], ["264-146 av. J.-C.", "guerres puniques contre Carthage ; Hannibal franchit les Alpes (218), Cannes (216), Zama (202), destruction de Carthage (146)"],
  ["58-51 av. J.-C.", "conquête de la Gaule par César ; Alésia (52)"], ["49 av. J.-C.", "César franchit le Rubicon : guerre civile contre Pompée"], ["44 av. J.-C.", "assassinat de César aux ides de mars"],
  ["31 av. J.-C.", "Actium : Octavien vainc Antoine et Cléopâtre ; l'Égypte devient romaine"], ["27 av. J.-C.", "Octavien reçoit le nom d'Auguste : début de l'Empire"], ["14 ap. J.-C.", "mort d'Auguste ; Tibère lui succède (dynastie julio-claudienne)"],
  ["64", "grand incendie de Rome sous Néron"], ["79", "éruption du Vésuve ; Pompéi ensevelie"], ["117", "mort de Trajan : l'Empire atteint sa plus grande étendue"],
  ["284-305", "Dioclétien réorganise l'Empire (tétrarchie)"], ["313", "Constantin autorise le christianisme ; Constantinople fondée en 330"], ["395", "partage définitif entre Orient et Occident, à la mort de Théodose"], ["476", "déposition de Romulus Augustule : fin de l'Empire d'Occident"]])}
<aside class="retenir"><p><strong>À retenir.</strong> Trois régimes : la <strong>royauté</strong> (753-509), la <strong>République</strong> (509-27), l'<strong>Empire</strong> (27 av. J.-C. - 476). Les dynasties à connaître : Julio-Claudiens, Flaviens, Antonins, Sévères.</p></aside>` },
      quiz("Dans l'esprit de l'examen : civilisation", "", [
        ["Quelle était la plus haute magistrature de la République ?", ["le consulat", "la questure", "le tribunat", "la censure"], 0], ["Où le Sénat se réunissait-il habituellement ?", ["au Capitole", "dans la curie, sur le Forum", "au Champ de Mars", "au Colisée"], 1],
        ["Quel dieu est honoré dans le grand temple du Capitole ?", ["Mars", "Apollon", "Jupiter", "Saturne"], 2], ["En quelle année la République est-elle fondée, selon la tradition ?", ["753 av. J.-C.", "509 av. J.-C.", "264 av. J.-C.", "27 av. J.-C."], 1],
        ["Contre quelle cité Rome mène-t-elle les guerres puniques ?", ["Athènes", "Carthage", "Alexandrie", "Syracuse"], 1], ["Quel général conquiert la Gaule ?", ["Pompée", "Scipion", "César", "Auguste"], 2],
        ["Qui est le premier empereur ?", ["César", "Auguste", "Tibère", "Néron"], 1], ["Sous quel empereur l'Empire atteint-il sa plus grande étendue ?", ["Auguste", "Néron", "Trajan", "Constantin"], 2],
        ["Que se passe-t-il en 476 ?", ["Rome est fondée", "l'Empire d'Occident prend fin", "César est assassiné", "Pompéi est détruite"], 1], ["Que désigne le " + la("cursus honorum") + " ?", ["une course de chars", "la carrière des magistratures", "le cortège du triomphe", "le chemin des aqueducs"], 1],
        ["Quel empereur autorise le christianisme en 313 ?", ["Dioclétien", "Constantin", "Théodose", "Marc Aurèle"], 1], ["Que signifie l'abréviation " + la("Ti.") + " devant un nom ?", ["Titus", "Tiberius", "Titianus", "Tullius"], 1]])
    ] };

  /* Vocabulaire de base (annexe officielle du programme Ianua), avec sa traduction */
  const BASE = `a, ab (+ abl) : de, par|absum, abes, abesse, afui : être absent|ac, atque : et|accipio, is, ere, accepi, acceptum : recevoir|acer, acris, acre : vif, violent|ad (+ acc) : vers, près de|adiuvo, as, are, adiuvi, adiutum : aider|adulescens, entis, m : le jeune homme|aedifico, as, are, avi, atum : construire|ager, agri, m : le champ|ago, is, ere, egi, actum : faire, mener|alienus, a, um : d'autrui, étranger|alius, a, ud : autre|alter, era, erum : l'autre (de deux)|altus, a, um : haut, profond|amicus, i, m : l'ami|amitto, is, ere, amisi, amissum : perdre|amo, as, are, avi, atum : aimer|amor, oris, m : l'amour|animal, alis, n : l'animal|animus, i, m : l'esprit, le courage|annus, i, m : l'année|ante (+ acc) : devant, avant|antiquus, a, um : ancien|appropinquo, as, are, avi, atum : s'approcher|apud (+ acc) : chez, auprès de|aqua, ae, f : l'eau|arbor, oris, f : l'arbre|arma, orum, n pl : les armes|ars, artis, f : l'art, le savoir-faire|audio, is, ire, ivi, itum : entendre, écouter|aut : ou|autem : mais, or|auxilium, ii, n : l'aide|bellum, i, n : la guerre|bene : bien|beneficium, ii, n : le bienfait|bonus, a, um : bon|brevis, e : court|cado, is, ere, cecidi, casum : tomber|caedes, is, f : le meurtre, le massacre|caelum, i, n : le ciel|canis, is, m : le chien|capio, is, ere, cepi, captum : prendre|caput, itis, n : la tête|carmen, inis, n : le poème, le chant|causa, ae, f : la cause|cedo, is, ere, cessi, cessum : s'en aller, céder|celer, eris, ere : rapide|cena, ae, f : le dîner|centum : cent|certe : certainement|ceteri, ae, a : tous les autres|clamo, as, are, avi, atum : crier|clamor, oris, m : le cri|clarus, a, um : célèbre, clair|cogito, as, are, avi, atum : penser|cognosco, is, ere, cognovi, cognitum : apprendre, reconnaître|cogo, is, ere, coegi, coactum : forcer, rassembler|comes, itis, m : le compagnon|committo, is, ere, commisi, commissum : confier ; engager (un combat)|consido, is, ere, consedi, consessum : s'asseoir|consilium, ii, n : le projet, le conseil|conspicio, is, ere, conspexi, conspectum : apercevoir|constituo, is, ere, constitui, constitutum : décider, établir|contendo, is, ere, contendi, contentum : se hâter ; lutter|copia, ae, f : l'abondance|copiae, arum, f pl : les troupes|corpus, oris, n : le corps|cras : demain|credo, is, ere, credidi, creditum : croire|culpa, ae, f : la faute|cum (+ abl) : avec|cum (conjonction) : quand, comme|cupio, is, ere, cupivi, cupitum : désirer|cur ? : pourquoi ?|cura, ae, f : le soin, le souci|de (+ abl) : du haut de, au sujet de|dea, ae, f : la déesse|debeo, es, ere, debui, debitum : devoir|decem : dix|deinde : ensuite|deleo, es, ere, delevi, deletum : détruire|denique : enfin|deus, i, m : le dieu|dico, is, ere, dixi, dictum : dire|dies, ei, m : le jour|difficilis, e : difficile|disciplina, ae, f : l'enseignement, la discipline|discipulus, i, m : l'élève|diu : longtemps|divitiae, arum, f pl : les richesses|do, das, dare, dedi, datum : donner|doceo, es, ere, docui, doctum : enseigner|doleo, es, ere, dolui : souffrir|dolor, oris, m : la douleur|domi : à la maison (sans mouvement)|domum : à la maison (avec mouvement)|domus, us, f : la maison|donum, i, n : le cadeau|dormio, is, ire, ivi, itum : dormir|duco, is, ere, duxi, ductum : conduire|dum : pendant que|duo, duae, duo : deux|e, ex (+ abl) : hors de|ego, mei : moi, je|enim : en effet|eo, is, ire, ii, itum : aller|equus, i, m : le cheval|et : et|etiam : aussi, même|exemplum, i, n : l'exemple|exeo, is, ire, exii, exitum : sortir|exspecto, as, are, avi, atum : attendre|fabula, ae, f : l'histoire, le récit|facile : facilement|facilis, e : facile|facinus, oris, n : l'acte, le crime|facio, is, ere, feci, factum : faire|familia, ae, f : la maisonnée, la famille|femina, ae, f : la femme|fero, fers, ferre, tuli, latum : porter, supporter|fides, ei, f : la confiance, la loyauté|filius, ii, m : le fils|filia, ae, f : la fille|flamma, ae, f : la flamme|fleo, es, ere, flevi, fletum : pleurer|flos, floris, m : la fleur|flumen, inis, n : le fleuve|forma, ae, f : la forme, la beauté|fortis, e : courageux|forum, i, n : la place publique, le forum|frater, tris, m : le frère|frustra : en vain|fugio, is, ere, fugi, fugitum : fuir|gaudeo, es, ere, gavisus sum : se réjouir|genus, eris, n : la race, le genre|gero, is, ere, gessi, gestum : porter ; faire (la guerre)|gladius, ii, m : le glaive|gloria, ae, f : la gloire|habeo, es, ere, habui, habitum : avoir|heri : hier|hic (adverbe) : ici|hic, haec, hoc : celui-ci, ce… ci|hodie : aujourd'hui|homo, inis, m : l'homme, l'être humain|honor, oris, m : l'honneur, la charge|hostis, is, m : l'ennemi|iacio, is, ere, ieci, iactum : jeter|iam : déjà, désormais|ibi : là|idem, eadem, idem : le même|igitur : donc|ille, illa, illud : celui-là, ce… là|immolo, as, are, avi, atum : sacrifier|impero, as, are, avi, atum : commander|in (+ acc) : vers, dans (mouvement)|in (+ abl) : dans, sur|iniuria, ae, f : l'injustice|inquit : dit-il, dit-elle|insula, ae, f : l'île ; l'immeuble|intellego, is, ere, intellexi, intellectum : comprendre|inter (+ acc) : parmi, entre|interficio, is, ere, interfeci, interfectum : tuer|intro, as, are, avi, atum : entrer|invenio, is, ire, inveni, inventum : trouver|ipse, ipsa, ipsum : lui-même|is, ea, id : il, elle ; ce|ita : ainsi|itaque : c'est pourquoi|iter, itineris, n : le chemin, le voyage|iubeo, es, ere, iussi, iussum : ordonner|iustus, a, um : juste|iuvo, as, are, iuvi, iutum : aider|laboro, as, are, avi, atum : travailler ; souffrir|laudo, as, are, avi, atum : louer|lego, is, ere, legi, lectum : lire ; cueillir|lex, legis, f : la loi|libenter : volontiers|liber, libera, liberum : libre|liberi, orum, m pl : les enfants|libero, as, are, avi, atum : libérer|licet, licere, licuit : il est permis|littera, ae, f : la lettre|litus, oris, n : le rivage|locus, i, m : le lieu|ludo, is, ere, lusi, lusum : jouer|lux, lucis, f : la lumière|magister, tri, m : le maître|magnus, a, um : grand|maior, maius : plus grand|malus, a, um : mauvais|maneo, es, ere, mansi, mansum : rester|manus, us, f : la main ; la troupe|mare, is, n : la mer|mater, tris, f : la mère|maxime : très, surtout|maximus, a, um : très grand|medius, a, um : qui est au milieu|meridies, ei, m : midi|metus, us, m : la crainte|meus, a, um : mon|miles, itis, m : le soldat|minime : très peu, pas du tout|miser, era, erum : malheureux|mitto, is, ere, misi, missum : envoyer|moneo, es, ere, monui, monitum : avertir|mons, montis, m : la montagne|mors, mortis, f : la mort|mortuus, a, um : mort|moveo, es, ere, movi, motum : mouvoir, émouvoir|mox : bientôt|multitudo, inis, f : la foule|multus, a, um : nombreux|murus, i, m : le mur|muto, as, are, avi, atum : changer|nam : car|narro, as, are, avi, atum : raconter|navigo, as, are, avi, atum : naviguer|navis, is, f : le navire|-ne : est-ce que… ?|nec, neque : et ne… pas|neco, as, are, avi, atum : tuer|nemo, neminis : personne|nihil : rien|nimis : trop|nomen, inis, n : le nom|non : ne… pas|nonne ? : est-ce que… ne… pas ?|nonnulli, ae, a : quelques-uns|nonus, a, um : neuvième|nos, nostri : nous|noster, tra, trum : notre|novem : neuf|novus, a, um : nouveau|nox, noctis, f : la nuit|nullus, a, um : aucun|numerus, i, m : le nombre|nunc : maintenant|nuntius, ii, m : le messager, la nouvelle|occido, is, ere, occidi, occisum : tuer|occupo, as, are, avi, atum : s'emparer de|octavus, a, um : huitième|octo : huit|odium, ii, n : la haine|officium, ii, n : le devoir|omnis, e : tout|oppidum, i, n : la place forte, la ville|opus, eris, n : l'œuvre, le travail|oratio, onis, f : le discours|otium, ii, n : le loisir|paratus, a, um : prêt|parentes, um, m pl : les parents|pareo, es, ere, parui : obéir|paro, as, are, avi, atum : préparer|pars, partis, f : la partie|parvus, a, um : petit|pater, tris, m : le père|patria, ae, f : la patrie|pauci, ae, a : peu nombreux|paulo post : peu après|pax, pacis, f : la paix|pensum, i, n : la tâche|per (+ acc) : à travers, par|periculum, i, n : le danger|perpetuus, a, um : perpétuel|peto, is, ere, petivi, petitum : chercher à atteindre, demander|placeo, es, ere, placui, placitum : plaire|plenus, a, um : plein|poena, ae, f : le châtiment|pono, is, ere, posui, positum : poser, placer|pons, pontis, m : le pont|populus, i, m : le peuple|porta, ae, f : la porte|porto, as, are, avi, atum : porter|possum, potes, posse, potui : pouvoir|post (+ acc) : après, derrière|postea : ensuite|potestas, atis, f : le pouvoir|pretium, ii, n : le prix|primo : d'abord|primus, a, um : premier|privatus, a, um : privé|pro (+ abl) : pour, devant|prohibeo, es, ere, prohibui, prohibitum : empêcher|promitto, is, ere, promisi, promissum : promettre|prope (+ acc) : près de|propero, as, are, avi, atum : se hâter|propter (+ acc) : à cause de|provincia, ae, f : la province|publicus, a, um : public|puella, ae, f : la jeune fille|puer, pueri, m : l'enfant|pugna, ae, f : le combat|pugno, as, are, avi, atum : combattre|pulcher, chra, chrum : beau|puto, as, are, avi, atum : penser|quaero, is, ere, quaesivi, quaesitum : chercher, demander|quam : que, combien|quartus, a, um : quatrième|quattuor : quatre|-que : et|qui, quae, quod : qui, que|quinque : cinq|quintus, a, um : cinquième|quis ? quid ? : qui ? quoi ?|quod : parce que|quomodo : comment|quoque : aussi|quot : combien de|rapio, is, ere, rapui, raptum : enlever|reddo, is, ere, reddidi, redditum : rendre|redeo, is, ire, redii, reditum : revenir|religio, onis, f : le scrupule religieux, la religion|relinquo, is, ere, reliqui, relictum : laisser, abandonner|res, rei, f : la chose, l'affaire|respondeo, es, ere, respondi, responsum : répondre|rex, regis, m : le roi|rideo, es, ere, risi, risum : rire|rogo, as, are, avi, atum : demander|sacer, sacra, sacrum : sacré|saepe : souvent|salve ! : salut !|satis : assez|schola, ae, f : l'école|scio, is, ire, scivi, scitum : savoir|scribo, is, ere, scripsi, scriptum : écrire|se, sui : se, soi|secundus, a, um : deuxième ; favorable|sed : mais|sedeo, es, ere, sedi, sessum : être assis|semper : toujours|septem : sept|septimus, a, um : septième|servo, as, are, avi, atum : conserver, sauver|servus, i, m : l'esclave|sex : six|sextus, a, um : sixième|si : si|simul : en même temps|sine (+ abl) : sans|socius, ii, m : l'allié, le compagnon|sol, solis, m : le soleil|solus, a, um : seul|statim : aussitôt|statua, ae, f : la statue|sto, as, are, steti, statum : se tenir debout|sub (+ abl) : sous|subito : soudain|sum, es, esse, fui : être|summus, a, um : le plus haut, très grand|supero, as, are, avi, atum : vaincre, franchir|suus, a, um : son, leur|tam : si, tellement|tamen : cependant|tango, is, ere, tetigi, tactum : toucher|taurus, i, m : le taureau|templum, i, n : le temple|tempus, oris, n : le temps|teneo, es, ere, tenui, tentum : tenir|terra, ae, f : la terre|terreo, es, ere, terrui, territum : effrayer|tertius, a, um : troisième|timeo, es, ere, timui : craindre|tolero, as, are, avi, atum : supporter|tollo, is, ere, sustuli, sublatum : soulever, enlever|totus, a, um : tout entier|trado, is, ere, tradidi, traditum : transmettre, livrer|tres, tria : trois|tu, tui : toi, tu|tum : alors|tuus, a, um : ton|ubi : où ; quand|ubique : partout|unus, a, um : un, un seul|urbs, urbis, f : la ville|uxor, oris, f : l'épouse|vendo, is, ere, vendidi, venditum : vendre|venio, is, ire, veni, ventum : venir|verbum, i, n : le mot|verto, is, ere, verti, versum : tourner|verus, a, um : vrai|vester, tra, trum : votre|via, ae, f : la route|video, es, ere, vidi, visum : voir|vinco, is, ere, vici, victum : vaincre|vir, viri, m : l'homme|virgo, inis, f : la jeune fille|virtus, utis, f : le courage, la valeur|vita, ae, f : la vie|voco, as, are, avi, atum : appeler|vos, vestri : vous|vox, vocis, f : la voix`
    .split("|").map(l => { const k = l.indexOf(" : "); return [l.slice(0, k), l.slice(k + 3)]; });
  const tranches = [["A à C", /^[a-c]/i], ["D à I", /^[d-i]/i], ["L à O", /^[l-o-]/i], ["P à R", /^[p-r]/i], ["S à V", /^[s-v]/i]];
  const iVoc = { id: "c70", borne: "Vocab.", genre: "Ianua,", titre: "Le vocabulaire de base à connaître", resume: `Les ${BASE.length} mots de l'annexe officielle : ils ne sont pas donnés avec le sujet`,
    etapes: [
      { t: "lecon", titre: "La liste officielle", texte: `<p>Au niveau ${la("Ianua")}, le sujet donne le vocabulaire dans l'ordre du texte, <strong>sauf</strong> les mots de cette liste, publiée par Euroclassica en annexe du programme. Les traductions sont celles du site.</p><p>S'y ajoutent les noms propres courants : ${la("Achilles, Aeneas, Agamemnon, Europa, Iuno, Iuppiter, Mercurius, Minerva, Prometheus, Remus, Romulus, Theseus, Ulixes ; Athenae, Creta, Gallia, Graecia, Italia, Roma, Sicilia, Tiberis, Troia")}.</p>
${tranches.map(([nom, re]) => `<h3>${nom}</h3><ul class="lex-fiche">${BASE.filter(m => re.test(m[0])).map(m => `<li>${la(m[0])} : ${m[1]}</li>`).join("")}</ul>`).join("")}` },
      ...tranches.map(([nom, re]) => ({ t: "mots", titre: `Vingt mots au hasard : de ${nom}`, intro: "Vingt mots tirés au sort dans cette partie de la liste. Refais la série : le tirage change à chaque fois.", mots: BASE.filter(m => re.test(m[0])), banque: BASE.filter(m => re.test(m[0])), tirage: 20 })),
      { t: "mots", titre: "Trente mots au hasard dans toute la liste", intro: "Le test final : trente mots tirés au sort.", mots: BASE, banque: BASE, tirage: 30 }
    ] };
  if (typeof LEXIQUE !== "undefined") BASE.forEach(m => LEXIQUE.push({ ch: 70, la: m[0], fr: m[1] }));

  const iOff25 = { id: "c71", borne: "2025", genre: "Ianua, sujet", titre: "Sujet officiel 2025 : les Res gestae d'Auguste", resume: "La grille de réponses et le corrigé du sujet de l'an dernier",
    etapes: [
      { t: "lecon", titre: "Comment faire ce sujet", texte: consignesOff(2025, la("Ianua"), `<p>Le texte réunit trois extraits de l'inscription où Auguste dresse le bilan de son action : la levée d'une armée à dix-neuf ans, la vengeance contre les assassins de César, la consécration de l'Autel de la Paix.</p>`) },
      officiel("Grille de réponses : Ianua 2025", "Coche la lettre choisie pour chaque question du sujet.", SEC25, "DBBCDDCCAB" + "DABBCBADCA" + "DDBBACADBC" + "AABCADCCCA", [
        la("privato consilio") + " : ablatif.", "Subjonctif parfait : " + la("comparaverim") + ".", "Génitif, complément de " + la("dominatione") + ".", "Nominatif (sujet de " + la("adlegit") + ") : le pluriel est " + la("senatus") + ".", la("do, das, dare, dedi, datum") + ".",
        "Ablatif de moyen, avec " + la("legitimis") + ".", "Génitif pluriel de " + la("is") + " : au singulier, " + la("eius") + ".", la("vinco, is, ere, vici, victum") + ".", "Infinitif présent passif.", "Indicatif parfait de " + la("iubeo") + ".",
        la("natus") + " se rapporte à « je », sujet de " + la("comparavi") + ".", la("privata impensa") + " : « à mes frais », moyen.", la("rempublicam… oppressam") + ".", la("eo nomine") + " équivaut à " + la("itaque") + " : la conséquence.", la("eos… inferentes") + " : « eux qui portaient la guerre ».",
        "Adverbe formé sur " + la("prosperus") + ".", la("rebus… prospere gestis") + " : ablatif absolu.", la("Ti. Nerone P. Quintilio consulibus") + " : ablatif absolu sans participe.", la("senatus… censuit") + ".", "Le même sujet : " + la("senatus") + ".",
        "Il lève une armée pour rendre la liberté à la République.", la("in ordinem suum") + " : l'ordre du Sénat.", la("meum") + " désigne Auguste ; les autres désignent les meurtriers.", "Son père adoptif, Jules César.", "Le crime des meurtriers : l'assassinat de César.",
        la("Cum… Romam redi") + " : « quand je revins à Rome ».", "Les deux consuls donnent leur nom à l'année.", la("ad Campum Martium") + ".", la("aram… in qua") + ".", "Le Sénat ordonne ; magistrats, prêtres et Vestales sacrifient.",
        "Le consulat.", "L'Égypte, après Actium.", la("augustus") + " : « vénérable, consacré ».", "Tibère.", "Par la famille des Iulii, descendants d'Iule, fils d'Énée. Auguste se disait aussi « fils du divin César ».",
        la("P.") + " = Publius, " + la("Ti.") + " = Tiberius.", "Les Julio-Claudiens.", "Romulus Augustule, déposé en 476.", la("Dux") + " n'est pas un titre impérial sur les monnaies.", "Tite-Live, contemporain d'Auguste."], 45)
    ] };
  const iOff24 = { id: "c72", borne: "2024", genre: "Ianua, sujet", titre: "Sujet officiel 2024 : Socrate devant la mort", resume: "La grille de réponses et le corrigé du sujet 2024",
    etapes: [
      { t: "lecon", titre: "Comment faire ce sujet", texte: consignesOff(2024, la("Ianua"), `<p>Le texte, d'après Cicéron, fait parler Socrate condamné : la mort est soit un sommeil sans rêves, soit un voyage vers un lieu où l'on rencontre de vrais juges.</p><p>Ce sujet suit un ordre un peu différent de celui d'aujourd'hui : compréhension, morphologie, syntaxe et style, puis civilisation. Sa durée était d'environ 50 minutes.</p>`) },
      officiel("Grille de réponses : Ianua 2024", "Coche la lettre choisie pour chaque question du sujet.", [["I. Compréhension (questions 1 à 10)", 10], ["II. Morphologie (questions 11 à 20)", 10], ["III. Syntaxe et style (questions 21 à 30)", 10], ["IV. Civilisation (questions 31 à 40)", 10]],
        "CBCDDCDBAC" + "CBABDCDCAC" + "BBBDCCDBCC" + "BCADABCDDC", [
        "Platon, disciple de Socrate.", "Il boit la ciguë.", la("Magna me spes tenet… bene mihi evenire") + " : il espère que la mort est un bien.", "La mort ôte toute sensation.", "On passe dans un autre lieu.",
        la("sine visis somniorum") + " : un sommeil sans rêves.", "Le séjour de ceux qui ont quitté la vie.", "Il échappe à ceux qui se prétendent juges.", "Ceux qui ont vécu avec justice et loyauté.", la("iudicio iniquo") + " : un jugement injuste.",
        "Apostrophe : vocatif.", "Forme de futur passif ; c'est aussi celle du subjonctif présent, qui convient au sens après " + la("quod") + ". La réponse attendue est le futur.", "Subjonctif présent, après " + la("ut") + ".", "Infinitif présent passif.", "Participe présent du déponent " + la("consequor") + ", au génitif.",
        "Comparatif de l'adjectif " + la("beatus") + ".", "Adverbe : « de beaucoup ».", "Adjectif de la 2e classe.", "Participe parfait passif.", "Subjonctif imparfait.",
        "Répétition du son m : allitération.", "Deux négations pour affirmer : litote.", "Exclamation qui grossit le trait : hyperbole.", "Relatif, d'antécédent " + la("dies") + ".", la("si") + " : conditionnelle.",
        "Accusatif + infinitif.", "Relatif, d'antécédent " + la("oras") + ".", "Faux juges contre vrais juges : antithèse.", "Exclamatif : « quel grand plaisir ! ».", la("alios… circumventos") + " sont séparés : hyperbate.",
        "Tite-Live.", "Catulle est un poète lyrique.", "Cicéron (106-43 av. J.-C.).", "Thétis, une Néréide.", "Constantin règne après Dioclétien.", "Néron, en 64.", "Les comices sont les assemblées du peuple.", la("patior") + " : supporter, endurer.", "Devise des Jeux olympiques modernes.", "Phèdre, auteur de fables."], 50)
    ] };

  const iSujet1 = { id: "c73", borne: "Sujet 1", genre: "Ianua,", titre: "Sujet d'entraînement 1 : Hannibal franchit les Alpes", resume: "Un sujet complet, dans le format de l'examen : 40 questions en 45 minutes",
    etapes: [
      { t: "lecon", titre: "Avant de commencer", texte: `<p>Ce sujet a été écrit pour le site, sur le modèle de l'épreuve : un texte historique, le vocabulaire donné dans l'ordre du texte (sauf le ${lien("c70", "vocabulaire de base")}), puis 40 questions.</p><p>Les nombres entre parenthèses renvoient aux lignes. Tu ne vois la correction qu'après avoir rendu ta copie.</p>` },
      sujet("Hannibal franchit les Alpes", "En 218 av. J.-C., le général carthaginois Hannibal décide d'attaquer Rome par le nord.",
        ["Hannibal, dux Carthaginiensium, iam puer patri iuraverat se semper hostem Romanorum", "futurum esse. Itaque, Sagunto capto, cum magno exercitu ex Hispania profectus est,", "ut bellum in Italiam ipsam inferret. Romani putabant neminem cum elephantis",
         "Alpes transire posse. Hannibal autem milites, qui montes altissimos timebant,", "hortatus est: «Nolite desperare! His montibus superatis, Italia nobis patebit.»", "Multi milites frigore et fame perierunt; tamen quinto decimo die in Italiam",
         "perventum est. Ibi tribus proeliis Romanos tam graviter vicit, ut Roma ipsa in", "summo periculo esse videretur. Sed Hannibal, cum urbem capere posset, occasione", "usus non est. Postea Scipio in Africam navigavit; quo cognito, Hannibal domum", "revocatus est et apud Zamam victus."],
        "dux, ducis : le chef, le général · iurare : jurer · Saguntum, i : Sagonte, ville d'Espagne alliée de Rome · exercitus, us : l'armée · proficisci, profectus sum : partir · bellum inferre : porter la guerre · elephantus, i : l'éléphant · transire : franchir · hortari : encourager · desperare : désespérer · patere : être ouvert · frigus, oris : le froid · fames, is : la faim · perire : périr · quinto decimo : quinzième · pervenire : arriver · proelium, ii : le combat · graviter : lourdement · occasio, onis : l'occasion · uti, usus sum (+ abl.) : profiter de · revocare : rappeler",
        [[la("iuraverat") + " (1). Quel est le temps de ce verbe ?", ["parfait", "plus-que-parfait", "futur antérieur", "imparfait"], 1],
         [la("futurum esse") + " (2). Analysez cette forme.", ["infinitif présent", "infinitif parfait", "infinitif futur", "participe futur seul"], 2],
         [la("exercitu") + " (2). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "ablatif"], 3, "4e déclinaison, après " + la("cum") + "."],
         [la("profectus est") + " (2). À quelle forme doit-on chercher ce verbe dans le dictionnaire ?", ["proficio", "proficiscor", "profiteor", "profero"], 1],
         [la("inferret") + " (3). Quels sont le temps et le mode de ce verbe ?", ["indicatif imparfait", "subjonctif présent", "subjonctif imparfait", "subjonctif plus-que-parfait"], 2],
         [la("altissimos") + " (4). Quel est le degré de cet adjectif ?", ["positif", "comparatif", "superlatif", "ce n'est pas un adjectif"], 2],
         [la("nolite") + " (5). Quel est l'infinitif de ce verbe ?", ["nolle", "noscere", "nocere", "negare"], 0],
         [la("patebit") + " (5). Quel est le temps de ce verbe ?", ["présent", "imparfait", "futur", "parfait"], 2],
         [la("die") + " (6). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 3, "5e déclinaison."],
         [la("usus") + " (9). De quelle forme s'agit-il ?", ["participe présent", "participe parfait", "gérondif", "adjectif verbal"], 1, "Participe parfait du déponent " + la("utor") + "."]],
        [[la("se… futurum esse") + " (1-2). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un nominatif + infinitif", "une relative"], 1],
         [la("Sagunto capto") + " (2). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un complément de lieu", "un gérondif"], 0],
         [la("ut… inferret") + " (3). Quelle est la valeur de cette subordonnée ?", ["cause", "but", "conséquence", "concession"], 1],
         [la("neminem") + " (3). Quelle est la fonction de ce mot ?", ["COD de putabant", "sujet de l'infinitif posse", "complément du nom", "attribut"], 1],
         [la("qui") + " (4). Quel est l'antécédent de ce pronom ?", ["Hannibal", "milites", "montes", "Romani"], 1],
         [la("superatis") + " (5). Quel rapport de temps ce participe exprime-t-il ?", ["antériorité", "simultanéité", "postériorité", "aucun"], 0, "Participe parfait : « une fois ces montagnes franchies »."],
         [la("frigore et fame") + " (6). Justifiez l'emploi de ces ablatifs.", ["après une préposition", "complément de cause", "complément de lieu", "ablatif absolu"], 1],
         [la("ut… videretur") + " (7-8). Quelle est la valeur de cette subordonnée ?", ["but", "cause", "conséquence", "condition"], 2, "Annoncée par " + la("tam") + "."],
         [la("Roma… esse videretur") + " (7-8). Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un nominatif + infinitif", "un ablatif absolu", "un adjectif verbal"], 1],
         [la("cum… posset") + " (8). Quelle est la meilleure traduction de " + la("cum") + " ?", ["avec", "parce que", "alors qu'il aurait pu", "afin que"], 2, "Valeur de concession."]],
        [["Qu'avait juré Hannibal dans son enfance ?", ["de conquérir l'Espagne", "d'être toujours l'ennemi des Romains", "de franchir les Alpes", "de venger son père"], 1],
         ["Pourquoi Hannibal quitte-t-il l'Espagne ?", ["pour fuir les Romains", "pour porter la guerre en Italie même", "pour rentrer à Carthage", "pour secourir Sagonte"], 1],
         ["Que pensaient les Romains ?", ["qu'Hannibal viendrait par la mer", "que nul ne pouvait franchir les Alpes avec des éléphants", "que les Alpes étaient faciles à franchir", "qu'Hannibal resterait en Espagne"], 1],
         ["Pourquoi Hannibal encourage-t-il ses soldats ?", ["ils ont faim", "ils craignent les montagnes", "ils veulent rentrer chez eux", "ils ont perdu une bataille"], 1],
         [la("nobis") + " (5). Qui ce pronom désigne-t-il ?", ["les Romains", "Hannibal et ses soldats", "les habitants des Alpes", "les éléphants"], 1],
         [la("tamen") + " (6). Quelle opposition ce mot souligne-t-il ?", ["entre les pertes subies et l'arrivée en Italie", "entre Hannibal et Scipion", "entre l'Espagne et l'Italie", "entre le froid et la faim"], 0],
         ["Que désigne " + la("ibi") + " (7) ?", ["les Alpes", "l'Espagne", "l'Italie", "l'Afrique"], 2],
         [la("occasione usus non est") + " (8-9). Que veut dire l'auteur ?", ["Hannibal n'a pas trouvé d'alliés", "Hannibal n'a pas pris Rome alors qu'il le pouvait", "Hannibal n'a pas livré bataille", "Hannibal a manqué de vivres"], 1],
         [la("quo cognito") + " (9). Qu'apprend Hannibal ?", ["que Rome est prise", "que Scipion a fait voile vers l'Afrique", "que ses soldats sont morts", "que Sagonte est tombée"], 1],
         ["Quel mot français vient du latin " + la("hostem") + " (1) ?", ["hôtel", "hostile", "hôte", "otage"], 1]],
        [["Dans quelle guerre Hannibal affronte-t-il Rome ?", ["la première guerre punique", "la deuxième guerre punique", "la guerre des Gaules", "la guerre sociale"], 1],
         ["Dans quel pays actuel se trouvait Carthage ?", ["l'Espagne", "la Libye", "la Tunisie", "la Sicile"], 2],
         ["Quelle grande défaite Hannibal inflige-t-il aux Romains en 216 av. J.-C. ?", ["Zama", "Cannes", "Alésia", "Actium"], 1],
         ["Quel général romain vainc Hannibal à Zama ?", ["Scipion l'Africain", "Fabius Maximus", "Marius", "Pompée"], 0],
         ["Qui répétait " + la("Carthago delenda est") + " ?", ["Cicéron", "Caton l'Ancien", "César", "Scipion"], 1],
         ["En quelle année Carthage est-elle détruite ?", ["202 av. J.-C.", "146 av. J.-C.", "44 av. J.-C.", "476 ap. J.-C."], 1],
         ["Après les guerres puniques, sur quoi Rome étend-elle sa domination ?", ["la Méditerranée occidentale", "la Germanie", "la Perse", "la Bretagne"], 0],
         ["Quel était le centre de la vie publique à Rome ?", ["le Colisée", "le Forum", "le Champ de Mars", "le Palatin"], 1],
         ["Sur quelle colline s'élevait le temple de Jupiter Très Bon Très Grand ?", ["l'Aventin", "le Capitole", "le Quirinal", "le Caelius"], 1],
         ["Quelle date marque traditionnellement la fin de l'Empire romain d'Occident ?", ["313", "395", "410", "476"], 3]])
    ] };

  const iSujet2 = { id: "c74", borne: "Sujet 2", genre: "Ianua,", titre: "Sujet d'entraînement 2 : les ides de mars", resume: "Un second sujet complet, pour confirmer",
    etapes: [
      sujet("Les ides de mars", "En 44 av. J.-C., Jules César est au sommet de sa puissance.",
        ["C. Iulius Caesar, Gallia victa et Pompeio superato, dictator perpetuus factus erat.", "Multi autem senatores timebant ne rex fieri vellet. Itaque Brutus et Cassius", "cum aliis coniuraverunt, ut rem publicam liberarent. Idibus Martiis Caesar,",
         "quamquam uxor eum monuerat ne domo exiret, in curiam venit. Dicitur etiam", "haruspex ei praedixisse magnum periculum instare. Coniurati Caesarem", "considentem circumsteterunt, quasi aliquid rogaturi; deinde eum tribus et",
         "viginti vulneribus confoderunt. Caesar, cum Brutum inter percussores vidisset,", "toga caput velavit neque iam se defendit. Caesare interfecto, senatores perterriti", "e curia fugerunt. Coniurati sperabant libertatem populo Romano reddi posse;", "sed bellum civile ortum est, quo confecto Octavianus solus rem publicam rexit."],
        "dictator perpetuus : dictateur à vie · fieri : devenir · coniurare : conspirer · Idus Martiae : les ides de mars (le 15 mars) · quamquam : bien que · curia, ae : la curie, salle du Sénat · haruspex, icis : l'haruspice, devin · praedicere : prédire · instare : menacer · coniurati, orum : les conjurés · circumstare, circumsteti : entourer · quasi : comme si · viginti : vingt · vulnus, eris (n) : la blessure · confodere : transpercer · percussor, oris : l'assassin · velare : voiler · defendere : défendre · perterritus, a, um : épouvanté · sperare : espérer · civilis, e : civil · oriri, ortus sum : naître, éclater · conficere, confectum : achever · regere, rexi : diriger",
        [[la("factus erat") + " (1). Quel est le temps de ce verbe ?", ["parfait", "plus-que-parfait", "futur antérieur", "imparfait"], 1],
         [la("vellet") + " (2). Quel est l'infinitif de ce verbe ?", ["velare", "velle", "vellere", "valere"], 1],
         [la("liberarent") + " (3). Quels sont le temps et le mode de ce verbe ?", ["indicatif imparfait", "subjonctif présent", "subjonctif imparfait", "indicatif futur"], 2],
         [la("domo") + " (4). Quel est le cas de ce nom ?", ["nominatif", "datif", "accusatif", "ablatif"], 3],
         [la("praedixisse") + " (5). Analysez cette forme.", ["infinitif présent", "infinitif parfait", "infinitif futur", "subjonctif plus-que-parfait"], 1],
         [la("considentem") + " (6). De quelle forme s'agit-il ?", ["participe présent", "participe parfait", "gérondif", "adjectif verbal"], 0],
         [la("rogaturi") + " (6). De quelle forme s'agit-il ?", ["participe présent", "participe parfait", "participe futur", "infinitif futur"], 2],
         [la("vulneribus") + " (7). Quel est le nominatif singulier de ce nom ?", ["vulner", "vulnus", "vulnis", "vulnera"], 1],
         [la("vidisset") + " (7). Quels sont le temps et le mode de ce verbe ?", ["indicatif plus-que-parfait", "subjonctif imparfait", "subjonctif parfait", "subjonctif plus-que-parfait"], 3],
         [la("solus") + " (10). Quel est le génitif singulier de ce mot ?", ["soli", "solius", "solis", "solo"], 1]],
        [[la("Gallia victa") + " (1). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un complément de lieu", "un nominatif + infinitif"], 0],
         [la("ne rex fieri vellet") + " (2). De quel verbe cette subordonnée dépend-elle ?", ["factus erat (1)", "timebant (2)", "coniuraverunt (3)", "liberarent (3)"], 1, "Après un verbe de crainte, " + la("ne") + " signifie « que »."],
         [la("ut… liberarent") + " (3). Quelle est la valeur de cette subordonnée ?", ["cause", "but", "conséquence", "concession"], 1],
         [la("Idibus Martiis") + " (3). Justifiez l'emploi de cet ablatif.", ["complément de temps", "complément de lieu", "complément de moyen", "ablatif absolu"], 0],
         [la("domo") + " (4). Justifiez l'emploi de cet ablatif.", ["complément de moyen", "ablatif de séparation : le lieu d'où l'on sort", "complément de temps", "après une préposition"], 1],
         [la("Dicitur… haruspex… praedixisse") + " (4-5). Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un ablatif absolu", "un nominatif + infinitif", "une interrogative indirecte"], 2],
         [la("magnum periculum instare") + " (5). Quelle construction reconnaissez-vous ?", ["une proposition infinitive", "un ablatif absolu", "un nominatif + infinitif", "un gérondif"], 0],
         [la("considentem") + " (6). Avec quel mot ce participe s'accorde-t-il ?", ["coniurati (5)", "Caesarem (5)", "aliquid (6)", "eum (6)"], 1],
         [la("toga") + " (8). Justifiez l'emploi de cet ablatif.", ["complément de moyen", "complément de lieu", "complément de cause", "ablatif absolu"], 0],
         [la("libertatem") + " (9). Quelle est la fonction de ce nom ?", ["COD de sperabant", "sujet de l'infinitif reddi", "complément du nom", "attribut"], 1]],
        [["Que craignent de nombreux sénateurs ?", ["que César quitte Rome", "que César veuille devenir roi", "que la Gaule se révolte", "que Pompée revienne"], 1],
         ["Quel est le but des conjurés ?", ["devenir dictateurs", "libérer la République", "venger Pompée", "s'emparer de la Gaule"], 1],
         [la("eum") + " (4). Qui ce pronom désigne-t-il ?", ["Brutus", "César", "l'haruspice", "Cassius"], 1],
         ["Que conseille l'épouse de César ?", ["de se rendre à la curie", "de ne pas sortir de chez lui", "de quitter Rome", "de se méfier de Brutus"], 1],
         [la("ei") + " (5). À qui l'haruspice s'adresse-t-il ?", ["à César", "à Brutus", "aux sénateurs", "à l'épouse de César"], 0],
         [la("quasi aliquid rogaturi") + " (6). Que font les conjurés ?", ["ils interrogent César sur ses projets", "ils font semblant de vouloir lui demander quelque chose", "ils demandent pardon", "ils réclament de l'argent"], 1],
         ["Comment César réagit-il en voyant Brutus ?", ["il appelle à l'aide", "il se voile la tête et ne se défend plus", "il frappe Brutus", "il s'enfuit de la curie"], 1],
         ["Qu'espèrent les conjurés (9) ?", ["rendre la liberté au peuple romain", "obtenir le pardon du Sénat", "partager le pouvoir", "fuir Rome"], 0],
         [la("sed") + " (10). Quelle opposition ce mot souligne-t-il ?", ["entre César et Brutus", "entre l'espoir des conjurés et la guerre civile qui suit", "entre le Sénat et le peuple", "entre Octavien et César"], 1],
         [la("quo") + " (10). À quoi ce pronom renvoie-t-il ?", ["populo (9)", "bellum civile (10)", "Octavianus (10)", "libertatem (9)"], 1]],
        [["En quelle année César est-il assassiné ?", ["63 av. J.-C.", "49 av. J.-C.", "44 av. J.-C.", "31 av. J.-C."], 2],
         ["Quel chef gaulois César vainc-il à Alésia ?", ["Brennus", "Vercingétorix", "Ambiorix", "Arioviste"], 1],
         ["Quel fleuve César franchit-il en 49 av. J.-C., déclenchant la guerre civile ?", ["le Tibre", "le Rhône", "le Rubicon", "le Rhin"], 2],
         ["Que devient Octavien en 27 av. J.-C. ?", ["dictateur à vie", "Auguste, le premier empereur", "roi de Rome", "consul unique"], 1],
         ["Où se trouve la curie, salle de réunion habituelle du Sénat ?", ["sur le Forum", "sur le Capitole", "au Champ de Mars", "sur le Palatin"], 0],
         ["Quelle phrase attribue-t-on à César franchissant le Rubicon ?", [la("Veni, vidi, vici"), la("Alea iacta est"), la("Carthago delenda est"), la("Carpe diem")], 1],
         ["Quelle était la plus haute magistrature ordinaire de la République ?", ["la questure", "l'édilité", "le consulat", "le tribunat"], 2],
         ["Quel mois doit son nom à Jules César ?", ["juin", "juillet", "août", "janvier"], 1],
         ["Où Octavien vainc-il Antoine et Cléopâtre en 31 av. J.-C. ?", ["Pharsale", "Philippes", "Actium", "Zama"], 2],
         ["De quel nom latin viennent les mots " + "« Kaiser » et « tsar » ?", ["Rex", "Caesar", "Augustus", "Imperator"], 1]])
    ] };

  /* ---------- Sujets 3 et 4 : compréhension plus exigeante (Vestibulum), textes adaptés d'auteurs (Ianua), une ou deux questions d'héritage moderne ---------- */
  const vSujet3 = { id: "c75", borne: "Sujet 3", genre: "Vestibulum,", titre: "Sujet d'entraînement 3 : Énée et Didon", resume: "Un sujet plus exigeant en compréhension : il faut lire entre les lignes",
    etapes: [
      sujet("Énée et Didon", "Après la chute de Troie, Énée cherche une nouvelle patrie. Une tempête le jette sur une côte inconnue.",
        ["Aeneas cum sociis diu per mare errat, quod Iuno Troianos non amat.", "Dea ventos vocat et magna tempestas naves delet.", "Pauci Troiani ad litus Africae perveniunt.", "Ibi Dido regina novam urbem aedificat, cui nomen Carthago est.",
         "Regina Troianos libenter accipit et magnam cenam parat.", "Aeneas reginae de bello Troiano et de morte uxoris narrat.", "Dido verba viri audit et mox Aeneam amat.", "Troiani in urbe manent et reginam adiuvant.",
         "Sed Iuppiter Mercurium ad Aeneam mittit: «Cur in Africa manes?", "Naviga in Italiam! Ibi novam patriam tuis invenire debes.»", "Aeneas deo paret et naves nocte parat, quamquam reginam relinquere dolet.",
         "Dido, ubi naves in mari videt, irata clamat: «Semper inter nostros populos bellum erit!»", "Deinde gladio Aeneae se necat.", "Ita Romani et Carthaginienses postea hostes fuerunt."],
        "Carthaginienses, ium : les Carthaginois · cui nomen est : qui a pour nom · erit : il y aura · errare : errer · iratus, a, um : en colère · pervenire : parvenir · quamquam : bien que · regina, ae : la reine · se necat : elle se tue · tempestas, atis : la tempête · tui, orum : les tiens · ventus, i : le vent",
        [[la("sociis") + " (1). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "ablatif"], 3, "Après " + la("cum") + "."],
         [la("errat") + " (1). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 0],
         [la("naves") + " (2). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 2, "COD de " + la("delet") + " : le sujet est " + la("tempestas") + "."],
         [la("Africae") + " (3). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 1],
         [la("cenam") + " (5). Donnez le pluriel de ce nom au même cas.", ["cenae", "cenarum", "cenas", "cenis"], 2],
         [la("morte") + " (6). Quel est le nominatif singulier de ce nom ?", ["mortis", "mors", "mortus", "morta"], 1],
         [la("audit") + " (7). Quel est l'infinitif de ce verbe ?", ["audere", "audire", "augere", "adire"], 1],
         [la("naviga") + " (10). Analysez cette forme verbale.", ["indicatif présent", "impératif", "infinitif", "nom à l'ablatif"], 1],
         [la("debes") + " (10). À quelle personne ce verbe est-il conjugué ?", ["1re du singulier", "2e du singulier", "3e du singulier", "2e du pluriel"], 1],
         [la("fuerunt") + " (14). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 2]],
        [[la("quod… amat") + " (1). Quelle est la valeur de cette subordonnée ?", ["cause", "but", "condition", "concession"], 0],
         [la("ventos") + " (2). Quelle est la fonction de ce nom ?", ["sujet", "COD", "attribut", "complément du nom"], 1],
         [la("magna") + " (2). Avec quel mot cet adjectif s'accorde-t-il ?", ["dea", "ventos", "tempestas", "naves"], 2],
         [la("reginae") + " (6). Quelle est la fonction de ce nom ?", ["sujet", "complément du nom bello", "complément d'attribution (COI)", "COD"], 2, "Il raconte à la reine."],
         [la("bello") + " (6). Justifiez l'emploi de cet ablatif.", ["après une préposition", "complément de moyen", "complément de temps", "complément de cause"], 0],
         [la("manent") + " (8). Quel est le sujet de ce verbe ?", ["Troiani", "urbe", "reginam", "Dido"], 0],
         [la("deo") + " (11). Pourquoi ce nom est-il au datif ?", ["c'est un complément de lieu", "le verbe paret se construit avec le datif", "c'est le sujet", "il dépend de naves"], 1],
         [la("nocte") + " (11). Justifiez l'emploi de cet ablatif.", ["complément de moyen", "complément de temps", "complément de cause", "après une préposition"], 1],
         [la("relinquere") + " (11). De quel verbe cet infinitif est-il complément ?", ["paret", "parat", "dolet", "videt"], 2],
         [la("gladio") + " (13). Justifiez l'emploi de cet ablatif.", ["complément de lieu", "complément de moyen", "complément de temps", "après une préposition"], 1]],
        [["Pourquoi les Troyens errent-ils si longtemps sur la mer ?", ["ils ont perdu leur chemin", "une déesse leur est hostile", "ils cherchent Didon", "ils fuient les Grecs"], 1],
         [la("dea") + " (2). De quelle déesse s'agit-il ?", ["Vénus", "Minerve", "Junon", "Didon"], 2],
         ["Que désigne " + la("ibi") + " (4) ?", ["la mer", "Troie", "le rivage d'Afrique", "l'Italie"], 2],
         ["Que nous apprend la ligne 6 sur Énée ?", ["il a gagné la guerre", "il a perdu sa femme", "il veut épouser Didon", "il a fondé Carthage"], 1],
         ["D'après la ligne 7, pourquoi Didon s'éprend-elle d'Énée ?", ["Jupiter le lui ordonne", "elle est touchée par son récit", "il lui offre des cadeaux", "il l'aide à bâtir sa ville"], 1],
         ["Que reproche Jupiter à Énée (9-10) ?", ["d'avoir détruit des navires", "d'oublier sa mission en restant en Afrique", "d'avoir menti à la reine", "de ne pas honorer les dieux"], 1],
         [la("tuis") + " (10). Qui ce mot désigne-t-il ?", ["les dieux", "les Carthaginois", "les Troyens, le peuple d'Énée", "les fils de Didon"], 2],
         ["Que révèle " + la("quamquam… dolet") + " (11) ?", ["Énée obéit à contrecœur", "Énée est heureux de partir", "Énée désobéit au dieu", "Énée a peur de la reine"], 0],
         ["Pourquoi Énée prépare-t-il ses navires de nuit ?", ["la mer est plus calme", "il veut partir sans être vu", "Mercure l'exige", "ses compagnons dorment le jour"], 1],
         ["Qu'explique la dernière ligne ?", ["la fondation de Carthage", "l'origine de la haine entre Rome et Carthage", "la mort d'Énée", "la victoire des Troyens"], 1]],
        [["Quel poète latin raconte cette histoire ?", ["Ovide", "Virgile", "Horace", "Catulle"], 1],
         ["Quel est le nom grec de Junon ?", ["Athéna", "Héra", "Artémis", "Déméter"], 1],
         ["Qui est la mère d'Énée ?", ["Junon", "Diane", "Vénus", "Cérès"], 2],
         ["Qui Énée porte-t-il sur ses épaules en fuyant Troie ?", ["son fils Ascagne", "son père Anchise", "le roi Priam", "sa femme Créuse"], 1],
         ["Quel roi Énée doit-il vaincre en Italie ?", ["Turnus", "Numitor", "Tarquin", "Porsenna"], 0],
         ["Quel est le rôle de Mercure auprès des dieux ?", ["forgeron", "messager", "juge des morts", "gardien du feu"], 1],
         ["Quel général carthaginois menacera Rome des siècles plus tard ?", ["Hannibal", "Pyrrhus", "Spartacus", "Vercingétorix"], 0],
         ["Dans quel pays actuel se trouvent les ruines de Carthage ?", ["l'Égypte", "le Maroc", "la Tunisie", "la Grèce"], 2],
         ["Quel compositeur anglais a écrit l'opéra « Didon et Énée » ?", ["Purcell", "Mozart", "Verdi", "Wagner"], 0],
         ["En informatique, qu'appelle-t-on un « cheval de Troie » ?", ["un ordinateur très rapide", "un logiciel malveillant caché dans un programme anodin", "un mot de passe", "un moteur de recherche"], 1]])
    ] };

  const vSujet4 = { id: "c76", borne: "Sujet 4", genre: "Vestibulum,", titre: "Sujet d'entraînement 4 : les Sabines", resume: "Un sujet plus exigeant en compréhension, sur un épisode du programme",
    etapes: [
      sujet("Les Sabines", "Romulus vient de fonder Rome, mais sa ville n'est peuplée que d'hommes.",
        ["Romulus urbem novam aedificat, sed in urbe feminae non sunt.", "Itaque rex nuntios ad populos finitimos mittit et uxores petit.", "Finitimi autem Romanos timent et filias non dant.", "Tum Romulus consilium capit: magnos ludos parat et Sabinos invitat.",
         "Sabini cum uxoribus liberisque libenter veniunt, quod urbem novam videre cupiunt.", "Dum omnes ludos spectant, Romulus signum dat.", "Statim iuvenes Romani virgines Sabinas rapiunt et domum portant.", "Parentes virginum fugiunt et deos testes vocant.",
         "Postea Sabini cum magnis copiis Romam oppugnant.", "In media pugna mulieres Sabinae inter viros et patres currunt.", "«Nolite pugnare!», clamant. «Si pugnatis, aut maritos aut patres amittimus.»", "Verba mulierum animos virorum movent: arma ponunt et pacem faciunt.",
         "Ita e duobus populis unus populus factus est."],
        "aut… aut : ou bien… ou bien · currere : courir · domum : chez eux · factus est : est né, a été fait · finitimus, a, um : voisin · invitare : inviter · iuvenis, is : le jeune homme · ludi, orum : les jeux · maritus, i : le mari · mulier, eris : la femme · nolite pugnare : ne combattez pas · oppugnare : attaquer · signum, i : le signal · spectare : regarder · testis, is : le témoin",
        [[la("urbe") + " (1). Quel est le cas de ce nom ?", ["génitif", "datif", "accusatif", "ablatif"], 3],
         [la("mittit") + " (2). Quelle est la première personne du présent de ce verbe ?", ["mitto", "misceo", "minuo", "mico"], 0],
         [la("filias") + " (3). Donnez le singulier de ce nom au même cas.", ["filia", "filiae", "filiam", "filiis"], 2],
         [la("capit") + " (4). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "futur"], 0],
         [la("ludos") + " (4). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 2],
         [la("uxoribus") + " (5). Quel est le nominatif singulier de ce nom ?", ["uxoris", "uxor", "uxora", "uxus"], 1],
         [la("videre") + " (5). Analysez cette forme verbale.", ["impératif", "infinitif", "parfait", "indicatif présent"], 1],
         [la("parentes") + " (8). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "ablatif"], 0, "Sujet de " + la("fugiunt") + "."],
         [la("virginum") + " (8). Quel est le cas de ce nom ?", ["nominatif singulier", "accusatif singulier", "génitif pluriel", "datif pluriel"], 2],
         [la("duobus") + " (13). De quel mot est-ce une forme ?", ["duo", "dux", "dum", "durus"], 0]],
        [[la("feminae") + " (1). Quelle est la fonction de ce nom ?", ["sujet", "complément du nom", "COI", "attribut"], 0, "Nominatif pluriel, sujet de " + la("sunt") + "."],
         [la("populos") + " (2). Pourquoi ce nom est-il à l'accusatif ?", ["c'est un COD", "il suit une préposition", "c'est un attribut", "il exprime la durée"], 1],
         [la("Romanos") + " (3). Quelle est la fonction de ce nom ?", ["sujet", "COD", "COI", "apostrophe"], 1],
         [la("magnos") + " (4). Avec quel mot cet adjectif s'accorde-t-il ?", ["Romulus", "consilium", "ludos", "Sabinos"], 2],
         [la("quod… cupiunt") + " (5). Quelle est la valeur de cette subordonnée ?", ["but", "cause", "condition", "concession"], 1],
         [la("videre") + " (5). De quel verbe cet infinitif est-il complément ?", ["veniunt", "cupiunt", "spectant", "dat"], 1],
         [la("dum… spectant") + " (6). Quelle est la valeur de cette subordonnée ?", ["temps", "cause", "but", "condition"], 0],
         [la("copiis") + " (9). Justifiez l'emploi de cet ablatif.", ["après une préposition", "complément de cause", "complément de temps", "COI"], 0],
         [la("mulierum") + " (12). De quel mot ce génitif est-il complément ?", ["verba", "animos", "virorum", "arma"], 0],
         [la("animos") + " (12). Quelle est la fonction de ce nom ?", ["sujet", "COD", "attribut", "complément du nom"], 1]],
        [["Quel problème la ligne 1 pose-t-elle pour l'avenir de Rome ?", ["la ville est trop petite", "sans femmes, la ville n'aura pas d'enfants", "les voisins l'attaquent", "le roi est trop jeune"], 1],
         ["Pourquoi les peuples voisins refusent-ils (3) ?", ["ils sont en guerre entre eux", "ils craignent les Romains", "ils n'ont pas de filles", "Romulus les a insultés"], 1],
         ["En quoi consiste le " + la("consilium") + " de Romulus (4) ?", ["faire la paix avec les Sabins", "attirer les Sabins par des jeux pour enlever leurs filles", "construire un théâtre", "épouser une princesse sabine"], 1],
         ["Pourquoi les Sabins viennent-ils volontiers ?", ["ils veulent voir la nouvelle ville", "ils espèrent marier leurs filles", "Romulus leur a promis de l'or", "ils préparent une attaque"], 0],
         ["Que déclenche le " + la("signum") + " (6) ?", ["le début des jeux", "l'enlèvement des jeunes filles", "la fuite des Romains", "un sacrifice"], 1],
         ["Pourquoi Romulus attend-il que tous regardent les jeux ?", ["pour honorer ses invités", "pour agir par surprise", "pour laisser partir les enfants", "pour obéir aux dieux"], 1],
         ["Que signifie " + la("deos testes vocant") + " (8) ?", ["ils offrent un sacrifice", "ils prennent les dieux à témoin de l'injustice", "ils appellent les dieux à la fête", "ils maudissent leurs filles"], 1],
         ["Quel dilemme les femmes expriment-elles (11) ?", ["rester à Rome ou rentrer chez elles", "perdre leurs maris ou leurs pères, quel que soit le vainqueur", "obéir à Romulus ou aux dieux", "se taire ou combattre"], 1],
         [la("ponunt") + " (12). Qui dépose les armes ?", ["les Romains seulement", "les Sabins seulement", "les Romains et les Sabins", "les femmes"], 2],
         ["Quel mot du texte s'oppose à " + la("pugna") + " (10) ?", ["arma (12)", "pacem (12)", "copiis (9)", "signum (6)"], 1]],
        [["Selon la légende, qui est le père de Romulus ?", ["Jupiter", "Mars", "Énée", "Numitor"], 1],
         ["Dans quel édifice les Romains assistaient-ils aux courses de chars ?", ["l'amphithéâtre", "le cirque", "le théâtre", "la basilique"], 1],
         ["Quel roi sabin règne ensuite aux côtés de Romulus ?", ["Titus Tatius", "Tarquin l'Ancien", "Porsenna", "Latinus"], 0],
         ["Quel roi, d'origine sabine, succède à Romulus ?", ["Numa Pompilius", "Tullus Hostilius", "Servius Tullius", "Ancus Marcius"], 0],
         ["Quelle déesse protège le mariage ?", ["Vénus", "Diane", "Junon", "Minerve"], 2],
         ["Quelle déesse les Vestales servent-elles ?", ["Vesta", "Cérès", "Minerve", "Vénus"], 0],
         ["Quel animal a nourri Romulus et Rémus ?", ["une chèvre", "une louve", "une ourse", "une biche"], 1],
         ["Dans quel édifice jouait-on tragédies et comédies ?", ["le cirque", "l'amphithéâtre", "le théâtre", "le temple"], 2],
         ["Quel peintre français a représenté, en 1799, les Sabines s'interposant entre les combattants ?", ["Claude Monet", "Jacques-Louis David", "Auguste Renoir", "Paul Cézanne"], 1],
         ["Quel animal figure sur l'emblème du club de football AS Roma ?", ["un aigle", "une louve", "un lion", "un taureau"], 1]])
    ] };

  const iSujet3 = { id: "c77", borne: "Sujet 3", genre: "Ianua,", titre: "Sujet d'entraînement 3 : Mucius Scaevola", resume: "Un texte adapté de Tite-Live, comme dans les sujets officiels",
    etapes: [
      sujet("Mucius Scaevola", "En 508 av. J.-C., le roi étrusque Porsenna assiège Rome. Un jeune Romain tente un coup d'audace. D'après Tite-Live, <em>Histoire romaine</em>, II, 12.",
        ["Cum Porsenna, rex Etruscorum, Romam obsideret, C. Mucius, adulescens nobilis,", "senatum adiit et dixit se in castra hostium intrare velle. Patribus probantibus,", "gladio sub veste abdito profectus est. Ubi eo venit, in turba prope regis tribunal",
         "constitit. Ibi stipendium militibus dabatur, et scriba cum rege sedens simili", "ornatu erat. Mucius, cum nesciret uter rex esset, scribam pro rege occidit.", "Comprehensus et ad regem tractus: «Romanus sum», inquit, «civis; hostis hostem",
         "occidere volui, nec ad mortem minus animi est quam fuit ad caedem.» Tum rex", "ira motus ignes circumdari iussit, nisi consilium statim aperiret. At ille dextram", "in ignem iniecit, quasi nihil sentiens. Quo miraculo attonitus, rex iuvenem", "dimitti iussit; Mucius postea Scaevola appellatus est, quia dextram amiserat."],
        "obsidere : assiéger · nobilis, e : noble · adire, adii : aller trouver · castra, orum : le camp · Patres : les sénateurs · probare : approuver · vestis, is : le vêtement · abdere, abditum : cacher · proficisci, profectus sum : partir · eo : là (avec mouvement) · turba, ae : la foule · tribunal, alis : l'estrade · consistere, constiti : se placer · stipendium, ii : la solde · scriba, ae (m) : le secrétaire · ornatus, us : la tenue · nescire : ne pas savoir · uter : lequel des deux · comprehendere, comprehensum : saisir · trahere, tractum : traîner · civis, is : le citoyen · minus animi : moins de courage · ignis, is : le feu · circumdare : placer autour · nisi : si… ne… pas · aperire : révéler · at : mais · dextra, ae : la main droite · inicere, inieci : jeter dans · quasi : comme si · sentire : sentir · miraculum, i : le prodige · attonitus, a, um : stupéfait · iuvenis, is : le jeune homme · dimittere : relâcher · appellare : appeler · Scaevola : « le Gaucher »",
        [[la("obsideret") + " (1). Quels sont le temps et le mode de ce verbe ?", ["indicatif imparfait", "subjonctif présent", "subjonctif imparfait", "indicatif futur"], 2],
         [la("adiit") + " (2). À quelle forme doit-on chercher ce verbe dans le dictionnaire ?", ["addo", "adeo", "audio", "adigo"], 1, "Composé de " + la("eo") + "."],
         [la("velle") + " (2). Quelle est la première personne du présent de ce verbe ?", ["volo", "vello", "valeo", "velo"], 0],
         [la("probantibus") + " (2). De quelle forme s'agit-il ?", ["participe présent", "participe parfait", "gérondif", "adjectif verbal"], 0],
         [la("veste") + " (3). Quel est le cas de ce nom ?", ["nominatif", "datif", "accusatif", "ablatif"], 3],
         [la("dabatur") + " (4). Analysez cette forme verbale.", ["imparfait actif", "imparfait passif", "futur passif", "subjonctif imparfait"], 1],
         [la("ornatu") + " (5). Quel est le cas de ce nom ?", ["nominatif", "génitif", "datif", "ablatif"], 3, "4e déclinaison."],
         [la("esset") + " (5). Quels sont le temps et le mode de ce verbe ?", ["indicatif imparfait", "subjonctif présent", "subjonctif imparfait", "infinitif"], 2],
         [la("dimitti") + " (10). Analysez cette forme.", ["infinitif présent actif", "infinitif présent passif", "infinitif parfait", "parfait actif"], 1],
         [la("amiserat") + " (10). Quel est le temps de ce verbe ?", ["parfait", "plus-que-parfait", "futur antérieur", "imparfait"], 1]],
        [[la("Cum… obsideret") + " (1). Quelle est la meilleure traduction de " + la("cum") + " ?", ["avec", "alors que", "afin que", "bien que"], 1],
         [la("se… intrare velle") + " (2). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un nominatif + infinitif", "une relative"], 1],
         [la("Patribus probantibus") + " (2). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un datif d'attribution", "un gérondif"], 0],
         [la("probantibus") + " (2). Quel rapport de temps ce participe exprime-t-il ?", ["antériorité", "simultanéité", "postériorité", "aucun"], 1],
         [la("militibus") + " (4). Quelle est la fonction de ce nom ?", ["sujet", "complément d'attribution (COI)", "complément d'agent", "complément de lieu"], 1],
         [la("sedens") + " (4). Avec quel mot ce participe s'accorde-t-il ?", ["stipendium", "scriba", "rege", "ornatu"], 1],
         [la("uter rex esset") + " (5). De quelle subordonnée s'agit-il ?", ["une relative", "une interrogative indirecte", "une subordonnée de but", "une conditionnelle"], 1],
         [la("ira") + " (8). Justifiez l'emploi de cet ablatif.", ["complément de cause", "complément de lieu", "complément de temps", "après une préposition"], 0],
         [la("iuvenem dimitti") + " (9-10). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un nominatif + infinitif", "un adjectif verbal"], 1],
         [la("quia… amiserat") + " (10). Quelle est la valeur de cette subordonnée ?", ["but", "conséquence", "cause", "concession"], 2]],
        [["Que veut faire Mucius ?", ["négocier la paix", "pénétrer dans le camp ennemi", "s'enfuir de Rome", "devenir sénateur"], 1],
         ["Que désigne " + la("eo") + " (3) ?", ["le Sénat", "le camp des Étrusques", "la ville de Rome", "le tribunal romain"], 1],
         ["Pourquoi Mucius se trompe-t-il de victime ?", ["il fait nuit", "le secrétaire est vêtu comme le roi", "le roi s'est caché", "on l'a mal renseigné"], 1],
         ["Pourquoi Mucius ne demande-t-il pas lequel est le roi ?", ["il ne parle pas la langue", "il se serait trahi", "il est trop loin", "il connaît déjà le roi"], 1],
         ["Que veut dire Mucius par " + la("hostis hostem occidere volui") + " ?", ["il regrette son geste", "il revendique un acte de guerre, non un crime", "il accuse le secrétaire", "il demande pardon"], 1],
         ["Que signifie " + la("nec ad mortem minus animi est") + " (7) ?", ["il a peur de mourir", "il a autant de courage pour mourir que pour tuer", "il veut mourir vite", "il n'a plus de courage"], 1],
         ["De quoi le roi menace-t-il Mucius ?", ["de l'exiler", "de le brûler s'il ne révèle pas son plan", "de tuer sa famille", "de détruire Rome"], 1],
         [la("ille") + " (8). Qui ce pronom désigne-t-il ?", ["le roi", "le secrétaire", "Mucius", "un soldat"], 2],
         ["Pourquoi le roi relâche-t-il le jeune homme ?", ["il a peur des Romains", "il admire son courage", "Mucius a tout avoué", "le Sénat l'exige"], 1],
         ["D'où vient le surnom " + la("Scaevola") + " ?", ["de sa ville natale", "il a perdu la main droite et reste gaucher", "du nom de son père", "du nom du roi"], 1]],
        [["Quel régime Rome vient-elle d'adopter au moment de ce récit ?", ["la royauté", "la République", "l'Empire", "la dictature"], 1],
         ["Quel roi les Romains viennent-ils de chasser ?", ["Romulus", "Numa Pompilius", "Tarquin le Superbe", "Servius Tullius"], 2],
         ["Quel autre héros défend seul un pont contre les Étrusques ?", ["Horatius Coclès", "Coriolan", "Camille", "Cincinnatus"], 0],
         ["Quelle jeune otage romaine s'échappe en traversant le Tibre ?", ["Lucrèce", "Clélie", "Virginie", "Tarpéia"], 1],
         ["Quel historien raconte ces épisodes dans son " + la("Ab Urbe condita") + " ?", ["Tacite", "Salluste", "Tite-Live", "Suétone"], 2],
         ["À quelle région actuelle d'Italie correspond le pays des Étrusques ?", ["la Sicile", "la Toscane", "la Vénétie", "les Pouilles"], 1],
         ["Qui sont les " + la("Patres") + " dans ce texte ?", ["les prêtres", "les sénateurs", "les pères des soldats", "les consuls"], 1],
         ["Que signifie l'abréviation " + la("C.") + " devant un nom romain ?", ["Cornelius", "Gaius (Caius)", "Claudius", "Cassius"], 1],
         ["Où le Sénat se réunissait-il habituellement ?", ["dans la curie", "au cirque", "au Champ de Mars", "dans le temple de Vesta"], 0],
         ["Quelle expression française rappelle le geste de Mucius ?", ["« franchir le Rubicon »", "« en mettre sa main au feu »", "« tomber de Charybde en Scylla »", "« une victoire à la Pyrrhus »"], 1]])
    ] };

  const iSujet4 = { id: "c78", borne: "Sujet 4", genre: "Ianua,", titre: "Sujet d'entraînement 4 : l'éruption du Vésuve", resume: "Un texte adapté de Pline le Jeune, comme dans les sujets officiels",
    etapes: [
      sujet("L'éruption du Vésuve", "Pline le Jeune raconte à un ami historien la mort de son oncle, Pline l'Ancien, lors de l'éruption du Vésuve. D'après Pline le Jeune, <em>Lettres</em>, VI, 16.",
        ["Avunculus meus Miseni erat classemque regebat. Nonum Kalendas Septembres mater", "mea ei nuntiavit nubem inusitatae magnitudinis apparere. Ille, ut erat vir", "doctissimus, rem propius cognoscendam esse putavit et navem parari iussit.",
         "Egredienti epistula allata est a Rectina, quae periculo territa orabat ut se", "servaret. Mutato igitur consilio, naves maiores deduxit, ut multis auxilium", "ferret. Eo properavit unde alii fugiebant; iam cinis navibus incidebat, calidior",
         "et densior, quo propius accedebant. Cum gubernator moneret ut reverteretur,", "«Fortes», inquit, «fortuna iuvat.» Stabias ad amicum pervenit, quem trepidantem", "hilaritate sua confirmavit. Postero die, cum flammae odorque sulpuris omnes in", "fugam verterent, ipse, duobus servis innitens, surrexit et statim concidit."],
        "avunculus, i : l'oncle · Misenum, i : Misène, port militaire · classis, is : la flotte · regere : commander · Nonum Kalendas Septembres : le 24 août · nuntiare : annoncer · nubes, is : le nuage · inusitatus, a, um : inhabituel · magnitudo, inis : la taille · apparere : apparaître · ut erat : en… qu'il était · doctus, a, um : savant · propius : de plus près · egredi : sortir · afferre, allatum : apporter · orare : supplier · deducere, deduxi : mettre à la mer · eo… unde : là… d'où · cinis, eris : la cendre · incidere (+ dat.) : tomber sur · calidus, a, um : chaud · densus, a, um : épais · quo propius : à mesure que… plus près · accedere : s'approcher · gubernator, oris : le pilote · reverti : faire demi-tour · fortuna, ae : la fortune · Stabiae, arum : Stabies · pervenire : arriver · trepidare : trembler · hilaritas, atis : la bonne humeur · confirmare : rassurer · posterus, a, um : suivant · odor, oris : l'odeur · sulpur, uris : le soufre · in fugam vertere : mettre en fuite · inniti (+ abl.) : s'appuyer sur · surgere, surrexi : se lever · concidere, concidi : s'effondrer",
        [[la("regebat") + " (1). Quel est le temps de ce verbe ?", ["présent", "imparfait", "parfait", "plus-que-parfait"], 1],
         [la("doctissimus") + " (3). Quel est le degré de cet adjectif ?", ["positif", "comparatif", "superlatif", "ce n'est pas un adjectif"], 2],
         [la("cognoscendam") + " (3). De quelle forme s'agit-il ?", ["participe présent", "participe parfait", "gérondif", "adjectif verbal"], 3],
         [la("parari") + " (3). Analysez cette forme.", ["infinitif présent actif", "infinitif présent passif", "infinitif parfait", "impératif"], 1],
         [la("allata est") + " (4). À quelle forme doit-on chercher ce verbe dans le dictionnaire ?", ["alo", "affero", "alligo", "allicio"], 1, "Composé de " + la("fero") + "."],
         [la("maiores") + " (5). De quel adjectif est-ce le comparatif ?", ["magnus", "malus", "multus", "bonus"], 0],
         [la("ferret") + " (6). Quel est l'infinitif de ce verbe ?", ["ferire", "ferre", "fervere", "fieri"], 1],
         [la("calidior") + " (6). Quel est le degré de cet adjectif ?", ["positif", "comparatif", "superlatif", "ce n'est pas un adjectif"], 1],
         [la("reverteretur") + " (7). Quels sont le temps et le mode de ce verbe ?", ["indicatif imparfait", "subjonctif présent", "subjonctif imparfait", "futur"], 2],
         [la("die") + " (9). Quel est le cas de ce nom ?", ["nominatif", "génitif", "accusatif", "ablatif"], 3]],
        [[la("Miseni") + " (1). Quelle est la valeur de cette forme ?", ["génitif de possession", "lieu où l'on est, sans préposition", "nominatif pluriel", "datif d'attribution"], 1],
         [la("nubem… apparere") + " (2). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un nominatif + infinitif", "une relative"], 1],
         [la("rem… cognoscendam esse") + " (3). Que signifie cette tournure ?", ["la chose avait été examinée", "il fallait examiner la chose", "la chose était en train d'être examinée", "la chose serait examinée"], 1, "Adjectif verbal + " + la("esse") + " : l'obligation."],
         [la("Egredienti") + " (4). À qui ce participe au datif se rapporte-t-il ?", ["à la mère", "à l'oncle", "à Rectina", "au pilote"], 1, "« À lui qui sortait, une lettre fut apportée »."],
         [la("ut se servaret") + " (4-5). Quel est le rôle de cette subordonnée ?", ["elle exprime la cause", "elle dit ce que demande Rectina", "elle exprime la conséquence", "elle exprime la concession"], 1],
         [la("Mutato… consilio") + " (5). Quelle construction reconnaissez-vous ?", ["un ablatif absolu", "une proposition infinitive", "un complément de moyen", "un gérondif"], 0],
         [la("ut… ferret") + " (5-6). Quelle est la valeur de cette subordonnée ?", ["cause", "but", "conséquence", "condition"], 1],
         [la("Stabias") + " (8). Justifiez l'emploi de cet accusatif.", ["COD", "lieu où l'on va, sans préposition", "sujet d'une infinitive", "durée"], 1],
         [la("cum… verterent") + " (9-10). Quelle est la meilleure traduction de " + la("cum") + " ?", ["avec", "comme, alors que", "afin que", "si"], 1],
         [la("servis") + " (10). De quel mot cet ablatif est-il complément ?", ["surrexit", "innitens", "concidit", "duobus"], 1]],
        [["Quelle est la fonction de l'oncle à Misène ?", ["il est médecin", "il commande la flotte", "il est gouverneur de la ville", "il enseigne"], 1],
         ["Pourquoi l'oncle veut-il d'abord s'approcher du nuage ?", ["pour sauver ses biens", "par curiosité de savant", "pour fuir par la mer", "sur l'ordre de l'empereur"], 1],
         ["Pourquoi change-t-il de projet ?", ["la mer est trop agitée", "une lettre lui demande du secours", "sa sœur l'en supplie", "le nuage disparaît"], 1],
         [la("se") + " (4). Qui ce pronom désigne-t-il ?", ["l'oncle", "la mère", "Rectina", "le pilote"], 2],
         ["Que souligne " + la("Eo properavit unde alii fugiebant") + " (6) ?", ["son imprudence de marin", "son courage : il va vers le danger que les autres fuient", "sa hâte de rentrer", "sa colère"], 1],
         ["Que se passe-t-il à mesure que les navires approchent ?", ["le vent tombe", "la cendre devient plus chaude et plus épaisse", "la mer se retire", "le nuage se dissipe"], 1],
         ["Que conseille le pilote ?", ["d'accoster plus loin", "de faire demi-tour", "d'attendre la nuit", "de jeter la cargaison"], 1],
         ["Que signifie " + la("Fortes fortuna iuvat") + " ?", ["la fortune rend fort", "la fortune sourit aux audacieux", "les forts font fortune", "la fortune est aveugle"], 1],
         ["Comment l'oncle rassure-t-il son ami ?", ["par des promesses", "par sa bonne humeur", "par des prières", "par des reproches"], 1],
         ["Que comprend-on à la dernière ligne ?", ["l'oncle s'enfuit avec les autres", "l'oncle meurt en tentant de se lever", "l'oncle sauve ses esclaves", "l'oncle s'endort"], 1]],
        [["En quelle année le Vésuve détruit-il Pompéi ?", ["44 av. J.-C.", "14 ap. J.-C.", "79 ap. J.-C.", "410 ap. J.-C."], 2],
         ["Quelle autre ville est ensevelie avec Pompéi ?", ["Capoue", "Herculanum", "Ostie", "Tarente"], 1],
         ["Quel grand ouvrage l'oncle, Pline l'Ancien, a-t-il écrit ?", ["l'" + "<em>Histoire naturelle</em>", "les " + "<em>Annales</em>", "l'" + "<em>Énéide</em>", "les " + "<em>Métamorphoses</em>"], 0],
         ["À quel historien Pline le Jeune adresse-t-il cette lettre ?", ["Tite-Live", "Tacite", "Suétone", "Salluste"], 1],
         ["Quel empereur règne au moment de l'éruption ?", ["Néron", "Titus", "Trajan", "Auguste"], 1],
         ["À quelle dynastie cet empereur appartient-il ?", ["les Julio-Claudiens", "les Flaviens", "les Antonins", "les Sévères"], 1],
         ["Quel monument de Rome est inauguré l'année suivante, en 80 ?", ["le Panthéon", "le Colisée", "la colonne Trajane", "l'Autel de la Paix"], 1],
         ["Que désignent les " + la("Kalendae") + " dans le calendrier romain ?", ["le premier jour du mois", "le milieu du mois", "le dernier jour du mois", "un jour de fête"], 0],
         ["Quel mot français vient du nom du dieu Vulcain ?", ["vulgaire", "volcan", "vulnérable", "voleur"], 1],
         ["Pourquoi les volcanologues parlent-ils d'éruption « plinienne » ?", ["Pline en a donné la première description précise", "Pline a découvert le Vésuve", "c'est le nom d'un volcan", "c'est le nom d'une roche"], 0]])
    ] };

  return [
    { id: "p11", elex: true, court: "Présentation", titre: "Présentation de la certification", sous: "Ce qu'est l'ELEX, comment se déroule l'épreuve, où trouver les informations officielles d'Euroclassica.", chapitres: [presentation] },
    { id: "p12", elex: true, court: "Niveau 1 : Vestibulum", titre: "Niveau 1 : Vestibulum", sous: "Texte mythologique. Le programme de révisions, le sujet officiel 2025, puis quatre sujets d'entraînement (les deux derniers sont plus exigeants en compréhension).", chapitres: [vProg, vCiv, vOff, vSujet1, vSujet2, vSujet3, vSujet4] },
    { id: "p13", elex: true, court: "Niveau 2 : Ianua", titre: "Niveau 2 : Ianua", sous: "Texte historique. Le programme de révisions, le vocabulaire de base, les sujets officiels 2024 et 2025, puis quatre sujets d'entraînement (les deux derniers sont adaptés de Tite-Live et de Pline le Jeune).", chapitres: [iProg, iCiv, iVoc, iOff25, iOff24, iSujet1, iSujet2, iSujet3, iSujet4] }
  ];
})();

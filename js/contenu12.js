/* ============================================================
   DEVOIRS ET EXAMENS — Terminale (TLLCAL1, 2026-2027).
   Préparer la version : Tristes, III, 9, « La ville de Tomes ».
   Texte latin de l'édition utilisée en classe (graphie u pour v).
   Les traductions sont propres au site.
   ============================================================ */
(function () {
  const la = s => `<i class="la">${s}</i>`;
  const K = (q, clic, marque, expl, indice) => ({ q, clic, marque, expl, indice });
  const Q = (q, choix, expl) => ({ q, choix, bon: 0, expl });
  const lex = l => `<ul class="lex-fiche">${l.map(x => `<li>${x.replace(/^([^:]+):/, (m, a) => la(a.trim()) + " :")}</li>`).join("")}</ul>`;
  const T = (legende, tetes, lignes) => `<div class="tab-wrap"><table class="donnees"><caption>${legende}</caption><thead><tr>${tetes.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${lignes.map(l => `<tr>${l.map((x, k) => k ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  /* Forme verbale : analyses "temps voix personne [mode]" séparées par ";" */
  function V(forme, mot, analyses, expl) {
    const a = analyses.split(";").map(s => { const [t, v, p, m] = s.trim().split(/\s+/); return { t, v, p: +p[0] - 1 + (p[1] === "p" ? 3 : 0), m: m || "ind" }; });
    return { forme, mot: la(mot), a, expl };
  }

  /* ---------- Le texte, vers par vers ---------- */
  const VERS = ["",
    "Hic quoque sunt igitur Graiae (quis crederet ?) urbes", "inter inhumanae nomina barbariae ;",
    "huc quoque Mileto missi uenere coloni,", "inque Getis Graias constituere domos.",
    "Sed uetus huic nomen, positaque antiquius urbe,", "constat ab Absyrti caede fuisse loco.",
    "Nam rate, quae cura pugnacis facta Mineruae", "per non temptatas prima cucurrit aquas,",
    "impia desertum fugiens Medea parentem", "dicitur his remos adplicuisse uadis.",
    "Quem procul ut uidit tumulo speculator ab alto,", "« Hospes, ait, nosco, Colchide, uela, uenit ! »",
    "Dum trepidant Minyae, dum soluitur aggere funis,", "dum sequitur celeres ancora tracta manus,",
    "conscia percussit meritorum pectora Colchis", "ausa atque ausura multa nefanda manu,",
    "et, quamquam superest ingens audacia menti,", "pallor in attonitae uirginis ore fuit.",
    "Ergo ubi prospexit uenientia uela : « Tenemur,", "et pater est aliqua fraude morandus », ait.",
    "Dum quid agat quaerit, dum uersat in omnia uultus,", "ad fratrem casu lumina flexa tulit.",
    "Cuius ut oblata est praesentia, « Vicimus, inquit ;", "hic mihi morte sua causa salutis erit. »",
    "Protinus ignari nec quicquam tale timentis", "innocuum rigido perforat ense latus,",
    "atque ita diuellit diuulsaque membra per agros", "dissipat in multis inuenienda locis.",
    "Neu pater ignoret, scopulo proponit in alto", "pallentesque manus sanguineumque caput,",
    "ut genitor luctuque nouo tardetur et, artus", "dum legit extinctos, triste moretur iter.",
    "Inde Tomis dictus locus hic, quia fertur in illo", "membra soror fratris consecuisse sui."];
  const vers = (a, b) => VERS.slice(a, b + 1).join("<br>");
  const texte = (a, b) => `<ol class="vers" start="${a}">${VERS.slice(a, b + 1).map(v => `<li lang="la">${v}</li>`).join("")}</ol>`;

  /* Traduction, unité par unité : [premier vers, dernier vers, traduction, note] */
  const UNITES = [
    [1, 2, "Ici aussi, donc, il y a des villes grecques (qui le croirait ?), parmi les noms d'une barbarie sauvage ;", `${la("sunt")} : « il y a ». ${la("crederet")} : subjonctif imparfait, « qui le croirait ? ».`],
    [3, 4, "ici aussi sont venus des colons envoyés de Milet, et ils ont établi chez les Gètes des demeures grecques.", `${la("uenere")}, ${la("constituere")} : parfaits en ${la("-ere")}, pour ${la("-erunt")}. ${la("Mileto")} : ablatif d'origine, sans préposition pour un nom de ville.`],
    [5, 6, "Mais il est établi que ce lieu portait un nom ancien, antérieur à la fondation de la ville, et qu'il le devait au meurtre d'Absyrtos.", `${la("constat")} + proposition infinitive ; ${la("huic… loco")} : datif de possession avec ${la("fuisse")}.`],
    [7, 10, "Car, sur le navire qui, construit par les soins de la belliqueuse Minerve, courut le premier sur des eaux que nul n'avait tentées, l'impie Médée, fuyant le père qu'elle avait abandonné, aborda, dit-on, à ce rivage.", `${la("Medea dicitur adplicuisse")} : mot à mot « Médée est dite avoir dirigé ses rames ». Le navire est l'Argo.`],
    [11, 12, "Dès que, du haut d'une éminence, le guetteur l'aperçut au loin : « Un étranger arrive de Colchide, dit-il, je reconnais ses voiles ! »", `${la("Quem")} : relatif de liaison, il reprend ${la("parentem")} (le père de Médée, Éétès). ${la("ut")} + indicatif : « quand, dès que ».`],
    [13, 16, "Tandis que les Minyens s'affairent, tandis qu'on détache l'amarre de la levée, tandis que l'ancre, tirée, suit les mains rapides, la Colchidienne, consciente de ce qu'elle avait fait, se frappa la poitrine de cette main qui avait osé et qui oserait encore tant de crimes,", `Les Minyens sont les Argonautes. ${la("sequitur")} : déponent, « suit ». ${la("ausa")} : participe parfait de sens actif ; ${la("ausura")} : participe futur.`],
    [17, 18, "et, bien qu'une immense audace demeurât en son cœur, la pâleur parut sur le visage de la jeune fille frappée de stupeur.", `${la("superest… menti")} : ${la("supersum")} + datif, « reste à son esprit ».`],
    [19, 20, "Aussi, dès qu'elle aperçut les voiles qui approchaient : « Nous sommes pris, dit-elle, et il faut retarder mon père par quelque ruse. »", `${la("est… morandus")} : adjectif verbal d'obligation, « doit être retardé ».`],
    [21, 22, "Tandis qu'elle cherche que faire, tandis qu'elle tourne son visage de tous côtés, elle porta par hasard sur son frère ses yeux détournés.", `${la("quid agat")} : interrogative indirecte au subjonctif. ${la("lumina")} : « les yeux », en poésie.`],
    [23, 24, "Dès que sa présence s'offrit à elle : « Nous avons gagné, dit-elle ; celui-ci, par sa mort, sera la cause de mon salut. »", `${la("Cuius")} : relatif de liaison, « de celui-ci ». ${la("hic")} est ici le pronom « celui-ci », et non l'adverbe « ici ».`],
    [25, 26, "Aussitôt, d'une épée inflexible, elle transperce le flanc innocent de ce frère qui ne sait rien et ne redoute rien de tel,", `${la("ignari… timentis")} : génitifs, compléments de ${la("latus")}. Les verbes passent au présent de narration.`],
    [27, 28, "puis elle le met en pièces et disperse à travers champs ses membres arrachés, qu'il faudra retrouver en bien des lieux.", `${la("inuenienda")} : adjectif verbal, « devant être retrouvés ».`],
    [29, 30, "Et pour que son père ne l'ignore pas, elle expose en haut d'un rocher les mains livides et la tête sanglante,", `${la("neu")} + subjonctif : « et pour que… ne… pas ».`],
    [31, 32, "afin que son père soit retardé par ce deuil inouï et que, le temps de recueillir ces membres sans vie, il ralentisse sa triste course.", `${la("ut")} + subjonctif : le but. ${la("moretur")} : déponent, « retarde ».`],
    [33, 34, "De là vient que ce lieu fut appelé Tomes : c'est là, dit-on, qu'une sœur découpa les membres de son frère.", `${la("dictus (est)")} ; ${la("soror fertur consecuisse")} : « une sœur est dite avoir coupé ».`]];
  const phrases = (a, b) => UNITES.filter(u => u[0] >= a && u[1] <= b).map(u => ({ la: vers(u[0], u[1]), aide: `v. ${u[0]}-${u[1]}`, fr: u[2], note: u[3] }));
  const extrait = (a, b) => ({ la: vers(a, b), aide: `v. ${a}-${b}`, fr: UNITES.filter(u => u[0] >= a && u[1] <= b).map(u => u[2]).join(" ") });

  /* ---------- Vocabulaire, passage par passage ---------- */
  const LEX1 = ["Absyrtus, i, m : Absyrtos, frère de Médée", "adplico, as, are, aui, atum (+ datif) : diriger vers, faire aborder à", "antiquus, a, um : ancien", "aqua, ae, f : l'eau", "barbaria, ae, f : le pays barbare, la barbarie",
    "caedes, is, f : le meurtre", "colonus, i, m : le colon", "constat : il est établi que", "constituo, is, ere, constitui, constitutum : établir", "credo, is, ere, credidi, creditum : croire", "cura, ae, f : le soin",
    "curro, is, ere, cucurri, cursum : courir", "desero, is, ere, deserui, desertum : abandonner", "dico, is, ere, dixi, dictum : dire", "domus, us, f : la maison", "facio, is, ere, feci, factum : faire", "fugio, is, ere, fugi, fugitum : fuir",
    "Getae, arum, m pl : les Gètes", "Graius, a, um : grec", "hic : ici", "huc : ici (avec mouvement)", "igitur : donc", "impius, a, um : impie", "inhumanus, a, um : inhumain, sauvage", "inter (+ accusatif) : parmi",
    "locus, i, m : le lieu", "Medea, ae, f : Médée", "Miletus, i, f : Milet", "Minerua, ae, f : Minerve", "mitto, is, ere, misi, missum : envoyer", "nam : car", "nomen, inis, n : le nom", "parens, entis, m : le père",
    "pono, is, ere, posui, positum : placer, fonder", "primus, a, um : premier", "pugnax, acis : belliqueux", "quoque : aussi", "ratis, is, f : le navire", "remus, i, m : la rame", "sed : mais",
    "tempto, as, are, aui, atum : tenter, essayer", "uadum, i, n : le bas-fond ; au pluriel, les eaux", "uenio, is, ire, ueni, uentum : venir", "uetus, eris : ancien", "urbs, urbis, f : la ville"];
  const LEX2 = ["agger, eris, m : la levée, le môle", "ago, is, ere, egi, actum : faire", "ait : dit-il, dit-elle", "aliqui, aliqua, aliquod : quelque", "altus, a, um : haut", "ancora, ae, f : l'ancre", "attonitus, a, um : frappé de stupeur",
    "audacia, ae, f : l'audace", "audeo, es, ere, ausus sum : oser", "casu : par hasard", "causa, ae, f : la cause", "celer, eris, ere : rapide", "Colchis, idis, f : la Colchide ; la Colchidienne (Médée)", "conscius, a, um (+ génitif) : conscient de",
    "dum : pendant que", "ergo : donc", "fero, fers, ferre, tuli, latum : porter", "flecto, is, ere, flexi, flexum : tourner, détourner", "frater, tris, m : le frère", "fraus, fraudis, f : la ruse", "funis, is, m : le câble, l'amarre",
    "hospes, itis, m : l'étranger", "ingens, entis : immense", "inquit : dit-il, dit-elle", "lumen, inis, n : la lumière ; au pluriel, les yeux", "manus, us, f : la main", "mens, mentis, f : l'esprit", "meritum, i, n : l'acte (bon ou mauvais)",
    "Minyae, arum, m pl : les Minyens, c'est-à-dire les Argonautes", "moror, aris, ari, atus sum : retarder", "mors, mortis, f : la mort", "multus, a, um : nombreux", "nefandus, a, um : abominable, criminel",
    "nosco, is, ere, noui, notum : reconnaître", "offero, fers, ferre, obtuli, oblatum : présenter, offrir", "omnis, e : tout", "os, oris, n : le visage", "pallor, oris, m : la pâleur", "pater, tris, m : le père",
    "pectus, oris, n : la poitrine", "percutio, is, ere, percussi, percussum : frapper", "praesentia, ae, f : la présence", "procul : au loin", "prospicio, is, ere, prospexi, prospectum : apercevoir au loin",
    "quaero, is, ere, quaesiui, quaesitum : chercher", "quamquam : bien que", "salus, utis, f : le salut", "sequor, eris, i, secutus sum : suivre", "soluo, is, ere, solui, solutum : détacher", "speculator, oris, m : le guetteur",
    "supersum, es, esse, superfui (+ datif) : rester à", "teneo, es, ere, tenui, tentum : tenir", "traho, is, ere, traxi, tractum : tirer", "trepido, as, are, aui, atum : s'agiter", "tumulus, i, m : la hauteur",
    "ubi : quand", "uelum, i, n : la voile", "uenio, is, ire, ueni, uentum : venir", "uerso, as, are, aui, atum : tourner en tous sens", "uideo, es, ere, uidi, uisum : voir", "uinco, is, ere, uici, uictum : vaincre",
    "uirgo, inis, f : la jeune fille", "uultus, us, m : le visage, le regard"];
  const LEX3 = ["ager, agri, m : le champ", "altus, a, um : haut", "artus, us, m : le membre", "caput, itis, n : la tête", "conseco, as, are, consecui, consectum : couper en morceaux", "dico, is, ere, dixi, dictum : dire, nommer",
    "dissipo, as, are, aui, atum : disperser", "diuello, is, ere, diuelli, diuulsum : mettre en pièces, arracher", "dum : pendant que", "ensis, is, m : l'épée", "extinctus, a, um : sans vie", "fertur : on rapporte que",
    "frater, tris, m : le frère", "genitor, oris, m : le père", "ignarus, a, um : qui ne sait pas", "ignoro, as, are, aui, atum : ignorer", "inde : de là", "innocuus, a, um : innocent", "inuenio, is, ire, inueni, inuentum : trouver",
    "ita : ainsi", "iter, itineris, n : le chemin, le voyage", "latus, eris, n : le flanc", "lego, is, ere, legi, lectum : ramasser, recueillir", "locus, i, m : le lieu", "luctus, us, m : le deuil", "manus, us, f : la main",
    "membrum, i, n : le membre", "moror, aris, ari, atus sum : retarder", "neu (+ subjonctif) : et pour que… ne… pas", "nouus, a, um : nouveau, inouï", "pallens, entis : pâle, livide", "pater, tris, m : le père",
    "perforo, as, are, aui, atum : transpercer", "propono, is, ere, proposui, propositum : exposer", "protinus : aussitôt", "quia : parce que", "quicquam : quelque chose ; nec quicquam : et rien", "rigidus, a, um : raide, inflexible",
    "sanguineus, a, um : sanglant", "scopulus, i, m : le rocher", "soror, oris, f : la sœur", "suus, a, um : son, sa", "talis, e : tel", "tardo, as, are, aui, atum : retarder", "timeo, es, ere, timui : craindre",
    "Tomis, idis, f : Tomes", "tristis, e : triste", "ut (+ subjonctif) : afin que"];
  const TOUT = [...new Set([...LEX1, ...LEX2, ...LEX3])].sort((a, b) => a.localeCompare(b));

  /* Les deux traductions guidées déjà présentes dans la partie « Tristes » (v. 1-2 et 33-34) */
  const c37 = PARTIE_TRISTES[0].chapitres.find(c => c.id === "c37"), g12 = c37.etapes[1], g3334 = c37.etapes[2];

  /* ---------- Fiche ---------- */
  const fiche = { id: "c47", borne: "Fiche", genre: "Version III, 9,", titre: "Préparer la version : méthode et repères", resume: "La méthode, le récit de Médée et les tournures qui reviennent dans l'élégie 9",
    etapes: [
      { t: "lecon", titre: "Le devoir et la méthode",
        texte: `<p>Le premier devoir de langue est une <strong>version</strong> : un extrait de l'élégie 9 du livre III des <em>Tristes</em>, « La ville de Tomes », à traduire en français. Tu ne sais pas quel passage tombera : cette partie te fait travailler <strong>les 34 vers</strong>, en trois passages, puis propose trois versions blanches.</p>
<h3>Six gestes, dans cet ordre</h3>
<ol><li><strong>Lis tout le passage</strong>, deux fois, sans rien écrire : qui parle, de qui, que se passe-t-il ?</li>
<li><strong>Délimite les phrases</strong> et repère les mots subordonnants : ${la("dum")}, ${la("ut")}, ${la("ubi")}, ${la("quamquam")}, ${la("quia")}, ${la("quae")}.</li>
<li><strong>Trouve les verbes conjugués</strong> : un par proposition. Analyse le temps, le mode, la voix, la personne.</li>
<li><strong>Cherche le sujet</strong> au nominatif, puis les compléments, cas par cas. En poésie, le nom et son adjectif sont souvent séparés : fie-toi aux terminaisons, pas à l'ordre des mots.</li>
<li><strong>Fais un mot à mot</strong>, proposition par proposition.</li>
<li><strong>Récris en bon français</strong>, puis relis : chaque mot latin est-il traduit ? Les temps sont-ils cohérents ?</li></ol>
<p>Dans cette élégie, le récit alterne <strong>parfait</strong> et <strong>présent de narration</strong> : tu peux tout rendre au passé, ou garder le présent, mais reste cohérent dans une même phrase.</p>` },
      { t: "lecon", titre: "Le récit : Médée et Absyrtos",
        texte: `<p>Ovide est relégué à <strong>Tomes</strong> (${la("Tomis")}), sur la mer Noire. Il s'étonne d'y trouver des villes grecques, fondées par des colons de <strong>Milet</strong> chez les <strong>Gètes</strong>. Puis il raconte d'où vient le nom du lieu.</p>
<ul><li><strong>Médée</strong>, fille du roi de Colchide Éétès, a aidé Jason à voler la Toison d'or. Elle fuit avec lui sur l'<strong>Argo</strong>, le premier navire, construit avec l'aide de Minerve. Les compagnons de Jason sont les <strong>Minyens</strong> (${la("Minyae")}), c'est-à-dire les Argonautes.</li>
<li>Ils font escale sur ce rivage. Un <strong>guetteur</strong> aperçoit au loin les voiles du père, lancé à leur poursuite.</li>
<li>Médée, prise de peur, cherche une ruse. Elle voit son jeune frère <strong>Absyrtos</strong>, le tue, le découpe et disperse ses membres : le père s'arrêtera pour les recueillir.</li>
<li>En grec, <em>tomos</em> veut dire « coupure », « morceau ». De là le nom de <strong>Tomes</strong>.</li></ul>
<p>Dans le texte, Médée est désignée de quatre façons : ${la("Medea")}, ${la("Colchis")} (la Colchidienne), ${la("uirgo")} (la jeune fille), ${la("soror")} (la sœur). Son père est ${la("parens")}, ${la("pater")}, ${la("genitor")}.</p>` },
      { t: "lecon", titre: "Les tournures de l'élégie 9",
        texte: `${T("À reconnaître du premier coup d'œil", ["Tournure", "Dans le texte", "Comment traduire"], [
  ["Parfait en " + la("-ere"), la("uenere") + " (v. 3), " + la("constituere") + " (v. 4)", "C'est une 3e personne du pluriel, pour " + la("-erunt") + " : « ils vinrent », « ils établirent ». Ne pas confondre avec un infinitif."],
  [la("constat") + " + proposition infinitive", la("constat… nomen fuisse") + " (v. 5-6)", "« Il est établi que le nom fut… »"],
  ["Passif personnel + infinitif", la("Medea dicitur adplicuisse") + " (v. 9-10), " + la("soror fertur consecuisse") + " (v. 33-34)", "Le sujet reste au nominatif. Traduire par « dit-on » ou « on raconte que »."],
  [la("ut") + " + indicatif", la("ut uidit") + " (v. 11), " + la("ut oblata est") + " (v. 23)", "« Quand, dès que »."],
  [la("ut") + ", " + la("neu") + " + subjonctif", la("neu… ignoret") + " (v. 29), " + la("ut… tardetur") + " (v. 31)", "Le but : « afin que », « et pour que… ne… pas »."],
  [la("dum") + " + présent", la("dum trepidant") + " (v. 13), " + la("dum quaerit") + " (v. 21), " + la("dum legit") + " (v. 32)", "« Pendant que ». Dans un récit au passé, on traduit par l'imparfait."],
  ["Relatif de liaison", la("Quem") + " (v. 11), " + la("Cuius") + " (v. 23)", "En tête de phrase, le relatif vaut un démonstratif : « celui-ci », « de celui-ci »."],
  ["Adjectif verbal en " + la("-ndus"), la("est… morandus") + " (v. 20), " + la("inuenienda") + " (v. 28)", "L'obligation : « doit être retardé », « devant être retrouvés »."],
  ["Participes", la("missi") + ", " + la("fugiens") + ", " + la("tracta") + ", " + la("uenientia") + ", " + la("ausa") + ", " + la("ausura") + ", " + la("diuulsa"), "Présent en " + la("-ns") + " : « fuyant » ; parfait passif : « envoyés » ; futur en " + la("-urus") + " : « qui osera »."],
  ["Verbes déponents", la("sequitur") + " (v. 14), " + la("ausa") + " (v. 16), " + la("moretur") + " (v. 32)", "Forme passive, sens actif : « suit », « ayant osé », « retarde »."],
  ["Interrogative indirecte", la("quid agat quaerit") + " (v. 21)", "Subjonctif en latin, indicatif ou infinitif en français : « elle cherche que faire »."],
  ["Datif avec " + la("sum"), la("huic… loco") + " (v. 5-6), " + la("superest… menti") + " (v. 17)", "Le possesseur : « ce lieu a un nom », « il reste à son esprit »."]])}
<p><strong>L'ordre des mots.</strong> Ovide sépare presque toujours le nom et son adjectif : ${la("inhumanae… barbariae")}, ${la("desertum… parentem")}, ${la("rigido… ense")}, ${la("innocuum… latus")}. Avant de traduire, relie-les par leur terminaison.</p>` },
      { t: "quiz", titre: "Reconnaître les tournures", intro: "Avant d'entrer dans le texte, vérifie que tu reconnais ses tournures.",
        questions: [
          Q(`${la("uenere")} (v. 3) est…`, ["un parfait, 3e personne du pluriel : « ils vinrent »", "un infinitif présent : « venir »", "un impératif : « viens »"], `${la("uenere")} = ${la("uenerunt")}. L'infinitif serait ${la("uenire")}.`),
          Q(`${la("Quem procul ut uidit… speculator")} (v. 11) : comment traduire ${la("ut uidit")} ?`, ["« dès qu'il vit »", "« afin qu'il voie »", "« comme s'il voyait »"], `${la("ut")} + indicatif : le temps.`),
          Q(`${la("ut genitor… tardetur")} (v. 31) : comment traduire ${la("ut")} ?`, ["« afin que »", "« quand »", "« comme »"], `${la("tardetur")} est au subjonctif : ${la("ut")} exprime le but.`),
          Q(`${la("pater est… morandus")} (v. 20) signifie…`, ["« mon père doit être retardé »", "« mon père est en train de s'attarder »", "« mon père a été retardé »"], `Adjectif verbal en ${la("-ndus")} + ${la("sum")} : l'obligation.`),
          Q(`En tête de phrase, ${la("Quem")} (v. 11) est…`, ["un relatif de liaison : « celui-ci » (le père)", "un interrogatif : « qui ? »", "le COD de " + la("ait")], `Il reprend ${la("parentem")} du vers 9 et il est COD de ${la("uidit")}.`),
          Q(`${la("Dum trepidant Minyae")} (v. 13) se traduit, dans un récit au passé, par…`, ["« tandis que les Minyens s'agitaient »", "« jusqu'à ce que les Minyens s'agitent »", "« pourvu que les Minyens s'agitent »"], `${la("dum")} + présent de l'indicatif : « pendant que ».`),
          Q(`${la("Medea dicitur adplicuisse")} (v. 9-10) : quel est le sens ?`, ["« Médée, dit-on, dirigea… »", "« On dit à Médée de diriger… »", "« Médée dit qu'elle a dirigé… »"], `Passif personnel : mot à mot « Médée est dite avoir dirigé ».`),
          Q(`${la("membra… inuenienda")} (v. 27-28) : comment traduire ${la("inuenienda")} ?`, ["« qui devront être retrouvés »", "« qui ont été retrouvés »", "« en retrouvant »"], `Adjectif verbal : l'obligation, tournée vers l'avenir.`)] }
    ] };

  /* ---------- Passage 1 : v. 1-10 ---------- */
  const p1 = { id: "c48", borne: "v. 1-10", genre: "Version III, 9,", titre: "Vers 1-10 : une ville grecque au bout du monde", resume: "Les colons de Milet, le nom ancien du lieu, l'arrivée de Médée sur l'Argo",
    etapes: [
      { t: "lecon", titre: "Le texte et son vocabulaire", texte: `<p>Lis le passage deux fois avant de commencer. Les colons grecs d'abord ; puis le nom du lieu, plus ancien que la ville ; enfin Médée, qui aborde ici en fuyant son père.</p>${texte(1, 10)}<h3>Vocabulaire</h3>${lex(LEX1)}` },
      { t: "verbe", niveau: 1, titre: "Les verbes du passage", intro: "Analyse chaque forme verbale conjuguée du passage : temps, mode, voix, personne.", vocab: LEX1, temps: ["present", "imparfait", "parfait"], modes: ["ind", "subj"],
        items: [V("sunt", "v. 1 : sum, es, esse, fui", "present a 3p"), V("crederet", "v. 1 : credo, is, ere, credidi, creditum", "imparfait a 3s subj", "« Qui le croirait ? » : subjonctif de l'éventualité."),
          V("uenere", "v. 3 : uenio, is, ire, ueni, uentum", "parfait a 3p", `${la("uenere")} = ${la("uenerunt")}.`), V("constituere", "v. 4 : constituo, is, ere, constitui, constitutum", "parfait a 3p", `${la("constituere")} = ${la("constituerunt")}.`),
          V("constat", "v. 6 : consto, as, are, constiti", "present a 3s"), V("cucurrit", "v. 8 : curro, is, ere, cucurri, cursum", "parfait a 3s", "Parfait à redoublement."), V("dicitur", "v. 10 : dico, is, ere, dixi, dictum", "present p 3s")] },
      g12,
      { t: "guide", titre: "Vers 5-6 : un nom plus ancien que la ville", cas: "I A D A B A B X I G B X D", vocab: LEX1,
        la: "Sed uetus huic nomen, positaque antiquius urbe, / constat ab Absyrti caede fuisse loco.",
        pas: [
          K("Où est le verbe principal ? Il ouvre le second vers.", [7], "verbe", `${la("constat")} : « il est établi que ». Ce verbe impersonnel est suivi d'une proposition infinitive.`),
          K("Touche l'infinitif de la proposition infinitive.", [11], null, `${la("fuisse")} : infinitif parfait de ${la("sum")}.`),
          K("Touche le sujet de cet infinitif et son adjectif : ils sont à l'accusatif.", [1, 3], "sujet de l'infinitif", `${la("uetus… nomen")} : « un nom ancien ». ${la("nomen")} est neutre.`, "Un nom neutre et son adjectif, dans le premier vers."),
          K("Touche les deux mots au datif : ils disent à qui appartient ce nom.", [2, 12], "datif de possession", `${la("huic… loco")} : avec ${la("sum")}, le datif désigne le possesseur. Mot à mot « un nom fut à ce lieu ».`, "Un démonstratif dans le premier vers, un nom à la fin du second."),
          Q(`${la("positaque antiquius urbe")} : quel est le rôle de l'ablatif ${la("posita… urbe")} ?`, [`Complément du comparatif ${la("antiquius")} : « plus ancien que la fondation de la ville »`, "Complément de lieu : « dans la ville »", "Complément d'agent : « par la ville »"], `Mot à mot « plus ancien que la ville fondée ». En français, c'est le participe qui porte l'idée : la fondation.`),
          K("Touche la préposition et le nom qui disent d'où vient ce nom.", [8, 10], "origine", `${la("ab… caede")} : « du meurtre ».`),
          K(`Touche le complément du nom ${la("caede")}.`, [9], "complément du nom", `${la("Absyrti")} : génitif, « d'Absyrtos ».`)],
        construction: "Sed constat huic loco fuisse nomen uetus, antiquiusque urbe posita, ab caede Absyrti.", fr: UNITES[2][2] },
      { t: "guide", titre: "Vers 9-10 : Médée aborde", cas: "N A N N A X D A X D", vocab: LEX1,
        intro: `La phrase commence au vers 7 : ${la("Nam rate, quae…")}, « Car, sur le navire qui… ». Voici sa proposition principale.`,
        la: "impia desertum fugiens Medea parentem / dicitur his remos adplicuisse uadis.",
        pas: [
          K("Où est le verbe conjugué ?", [5], "verbe", `${la("dicitur")} : présent passif, « est dite ». On traduira par « dit-on ».`),
          K("Touche le sujet et son adjectif.", [0, 3], "sujet", `${la("impia… Medea")} : « l'impie Médée ».`),
          Q(`Pourquoi ${la("Medea")} est-elle au nominatif, alors qu'elle fait l'action de l'infinitif ?`, [`Avec ${la("dicitur")} au passif, le sujet reste au nominatif`, "C'est une apostrophe", "Elle est attribut du sujet"], `${la("Medea dicitur adplicuisse")} : mot à mot « Médée est dite avoir dirigé ».`),
          K(`Touche l'infinitif qui dépend de ${la("dicitur")}.`, [8], null, `${la("adplicuisse")} : infinitif parfait de ${la("adplico")}.`),
          K("Touche le COD de cet infinitif.", [7], "COD", `${la("remos")} : « ses rames ».`),
          K("Touche les deux mots au datif : vers où dirige-t-elle ses rames ?", [6, 9], "complément au datif", `${la("his… uadis")} : ${la("adplicare")} + datif, « vers ces eaux ».`),
          K(`Touche le participe présent qui se rapporte à ${la("Medea")}.`, [2], null, `${la("fugiens")} : « fuyant ».`),
          K(`Touche le COD de ${la("fugiens")} et le participe qui l'accompagne.`, [1, 4], "COD", `${la("desertum… parentem")} : « son père abandonné ».`)],
        construction: "impia Medea, fugiens parentem desertum, dicitur remos adplicuisse his uadis.", fr: "l'impie Médée, fuyant le père qu'elle avait abandonné, aborda, dit-on, à ce rivage." },
      { t: "version", titre: "Traduire les vers 1-10", intro: "À toi, phrase par phrase. Écris ta traduction avant de regarder la proposition.", vocab: LEX1, phrases: phrases(1, 10) }
    ] };

  /* ---------- Passage 2 : v. 11-24 ---------- */
  const p2 = { id: "c49", borne: "v. 11-24", genre: "Version III, 9,", titre: "Vers 11-24 : l'alerte et la peur de Médée", resume: "Le guetteur donne l'alarme ; Médée cherche une ruse et aperçoit son frère",
    etapes: [
      { t: "lecon", titre: "Le texte et son vocabulaire", texte: `<p>Le guetteur aperçoit le père. Les Argonautes se hâtent de lever l'ancre. Médée pâlit, cherche une ruse, puis ses yeux tombent sur son frère. Repère les trois ${la("dum")} des vers 13-14 et les deux du vers 21.</p>${texte(11, 24)}<h3>Vocabulaire</h3>${lex(LEX2)}` },
      { t: "verbe", niveau: 1, titre: "Les verbes du passage", intro: "Analyse chaque forme : temps, mode, voix, personne. Certaines formes ont deux analyses possibles.", vocab: LEX2, temps: ["present", "futur", "parfait"], modes: ["ind", "subj"],
        items: [V("uidit", "v. 11 : uideo, es, ere, uidi, uisum", "parfait a 3s"), V("uenit", "v. 12 : uenio, is, ire, ueni, uentum", "present a 3s; parfait a 3s", "La forme est la même aux deux temps. Ici, c'est un présent : « il arrive »."),
          V("trepidant", "v. 13 : trepido, as, are, aui, atum", "present a 3p"), V("soluitur", "v. 13 : soluo, is, ere, solui, solutum", "present p 3s"), V("percussit", "v. 15 : percutio, is, ere, percussi, percussum", "parfait a 3s"),
          V("superest", "v. 17 : supersum, es, esse, superfui", "present a 3s"), V("fuit", "v. 18 : sum, es, esse, fui", "parfait a 3s"), V("tenemur", "v. 19 : teneo, es, ere, tenui, tentum", "present p 1p", "« Nous sommes pris »."),
          V("agat", "v. 21 : ago, is, ere, egi, actum", "present a 3s subj", "Subjonctif de l'interrogative indirecte."), V("tulit", "v. 22 : fero, fers, ferre, tuli, latum", "parfait a 3s"),
          V("oblata est", "v. 23 : offero, fers, ferre, obtuli, oblatum", "parfait p 3s"), V("uicimus", "v. 23 : uinco, is, ere, uici, uictum", "parfait a 1p"), V("erit", "v. 24 : sum, es, esse, fui", "futur a 3s")] },
      { t: "guide", titre: "Vers 15-16 : la main qui a osé", cas: "N X G A N B I B A A B", vocab: LEX2,
        intro: `Après les trois subordonnées en ${la("dum")}, voici la proposition principale.`,
        la: "conscia percussit meritorum pectora Colchis / ausa atque ausura multa nefanda manu,",
        pas: [
          K("Où est le verbe ?", [1], "verbe", `${la("percussit")} : parfait de ${la("percutio")}, « frappa ».`),
          K("Touche le sujet, à la fin du premier vers.", [4], "sujet", `${la("Colchis")} : « la Colchidienne », c'est-à-dire Médée.`),
          K("Touche le COD.", [3], "COD", `${la("pectora")} : pluriel poétique, « sa poitrine ».`),
          K(`Touche l'adjectif qui se rapporte à ${la("Colchis")}, puis son complément au génitif.`, [0, 2], null, `${la("conscia meritorum")} : « consciente de ses actes ». ${la("conscius")} se construit avec le génitif.`, "Le premier mot du vers et un génitif pluriel."),
          K("Touche le nom à l'ablatif qui dit avec quoi elle se frappe.", [10], "moyen", `${la("manu")} : « de sa main ».`),
          K(`Touche les deux participes qui se rapportent à ${la("manu")}.`, [5, 7], null, `${la("ausa")} : participe parfait de ${la("audeo")}, de sens actif, « qui a osé ». ${la("ausura")} : participe futur, « qui osera ».`),
          K("Touche le COD de ces deux participes : deux mots au neutre pluriel.", [8, 9], "COD", `${la("multa nefanda")} : « bien des crimes ».`)],
        construction: "Colchis, conscia meritorum, percussit pectora manu ausa atque ausura multa nefanda,",
        fr: "la Colchidienne, consciente de ce qu'elle avait fait, se frappa la poitrine de cette main qui avait osé et qui oserait encore tant de crimes,",
        note: `On peut aussi rattacher ${la("conscia")} à ${la("pectora")} : « sa poitrine consciente de ses actes ».` },
      { t: "guide", titre: "Vers 19-20 : « Nous sommes pris »", cas: "I I X A A X I N X B B N X", vocab: LEX2,
        la: "Ergo ubi prospexit uenientia uela: «Tenemur, / et pater est aliqua fraude morandus», ait.",
        pas: [
          K("Dans la subordonnée de temps, touche la conjonction et le verbe.", [1, 2], null, `${la("ubi prospexit")} : « quand elle aperçut ». Parfait de ${la("prospicio")}.`),
          K(`Touche le COD de ${la("prospexit")} : deux mots.`, [3, 4], "COD", `${la("uenientia uela")} : « les voiles qui approchaient ». ${la("uenientia")} est le participe présent de ${la("uenio")}, au neutre pluriel.`),
          K("Touche le verbe qui introduit les paroles de Médée.", [12], "verbe", `${la("ait")} : « dit-elle ».`),
          Q(`${la("Tenemur")} : quelle est cette forme ?`, ["Présent passif, 1re personne du pluriel : « nous sommes pris »", "Présent actif, 1re personne du pluriel : « nous tenons »", "Futur passif : « nous serons pris »"], `Désinence ${la("-mur")} : le passif. Médée parle pour elle et pour les Argonautes.`),
          K("Touche les deux mots qui forment l'adjectif verbal d'obligation.", [8, 11], null, `${la("est… morandus")} : « doit être retardé ».`, `Le verbe ${la("sum")} et une forme en ${la("-ndus")}.`),
          K("Touche son sujet.", [7], "sujet", `${la("pater")} : « mon père ».`),
          K("Touche les deux mots à l'ablatif : par quel moyen ?", [9, 10], "moyen", `${la("aliqua fraude")} : « par quelque ruse ».`)],
        construction: "Ergo ubi prospexit uela uenientia : « Tenemur, ait, et pater morandus est aliqua fraude. »", fr: UNITES[7][2] },
      { t: "version", titre: "Traduire les vers 11-24", intro: "À toi, phrase par phrase. Écris ta traduction avant de regarder la proposition.", vocab: LEX2, phrases: phrases(11, 24) }
    ] };

  /* ---------- Passage 3 : v. 25-34 ---------- */
  const p3 = { id: "c50", borne: "v. 25-34", genre: "Version III, 9,", titre: "Vers 25-34 : le meurtre et le nom de Tomes", resume: "Médée tue son frère, disperse ses membres, et le lieu en garde le nom",
    etapes: [
      { t: "lecon", titre: "Le texte et son vocabulaire", texte: `<p>Le récit passe au présent de narration : ${la("perforat")}, ${la("diuellit")}, ${la("dissipat")}, ${la("proponit")}. Puis deux subordonnées de but au subjonctif expliquent le calcul de Médée, et le dernier distique donne l'origine du nom.</p>${texte(25, 34)}<h3>Vocabulaire</h3>${lex(LEX3)}` },
      { t: "verbe", niveau: 1, titre: "Les verbes du passage", intro: "Indicatif ou subjonctif ? Analyse chaque forme : temps, mode, voix, personne.", vocab: LEX3, temps: ["present", "parfait"], modes: ["ind", "subj"],
        items: [V("perforat", "v. 26 : perforo, as, are, aui, atum", "present a 3s"), V("diuellit", "v. 27 : diuello, is, ere, diuelli, diuulsum", "present a 3s; parfait a 3s", "La forme est la même aux deux temps. Entouré de présents, c'est ici un présent de narration."),
          V("dissipat", "v. 28 : dissipo, as, are, aui, atum", "present a 3s"), V("ignoret", "v. 29 : ignoro, as, are, aui, atum", "present a 3s subj", `Après ${la("neu")} : le but.`),
          V("proponit", "v. 29 : propono, is, ere, proposui, propositum", "present a 3s"), V("tardetur", "v. 31 : tardo, as, are, aui, atum", "present p 3s subj", `Après ${la("ut")} : le but.`),
          V("legit", "v. 32 : lego, is, ere, legi, lectum", "present a 3s; parfait a 3s", `Après ${la("dum")}, « pendant que », c'est un présent.`), V("fertur", "v. 33 : fero, fers, ferre, tuli, latum", "present p 3s", "« On rapporte que »."),
          V("dictus est", "v. 33 : dico, is, ere, dixi, dictum", "parfait p 3s", `Dans le texte, ${la("est")} est sous-entendu.`)] },
      { t: "guide", titre: "Vers 25-26 : le coup d'épée", cas: "I G I A A G A B X B A", vocab: LEX3,
        la: "Protinus ignari nec quicquam tale timentis / innocuum rigido perforat ense latus,",
        pas: [
          K("Où est le verbe ?", [8], "verbe", `${la("perforat")} : présent de narration, « elle transperce ».`),
          K("Touche le COD : un nom neutre et son adjectif, séparés.", [6, 10], "COD", `${la("innocuum… latus")} : « le flanc innocent ».`, "Le premier et le dernier mot du second vers."),
          K("Touche les deux mots à l'ablatif : avec quoi ?", [7, 9], "moyen", `${la("rigido… ense")} : « d'une épée inflexible ».`),
          K("Dans le premier vers, touche les deux mots au génitif qui désignent le frère.", [1, 5], "complément du nom", `${la("ignari… timentis")} : un adjectif et un participe présent au génitif, compléments de ${la("latus")}. Mot à mot « le flanc de celui qui ignore et ne craint… ».`, `Un adjectif en ${la("-i")} et un participe en ${la("-ntis")}.`),
          K(`Touche le COD du participe ${la("timentis")} : deux mots.`, [3, 4], "COD", `${la("nec quicquam tale")} : « et rien de tel ».`)],
        construction: "Protinus perforat ense rigido latus innocuum (fratris) ignari nec quicquam tale timentis,", fr: UNITES[10][2] },
      { t: "guide", titre: "Vers 31-32 : le calcul de Médée", cas: "I N B B X I A I X A A X A", vocab: LEX3,
        la: "ut genitor luctuque nouo tardetur et, artus / dum legit extinctos, triste moretur iter.",
        pas: [
          Q(`${la("ut")} est suivi de ${la("tardetur")} et de ${la("moretur")}, au subjonctif. Quel est son sens ?`, ["Le but : « afin que »", "Le temps : « quand »", "La comparaison : « comme »"], `${la("ut")} + subjonctif : le but. Aux vers 11 et 23, ${la("ut")} + indicatif signifiait « quand ».`),
          K("Touche le sujet des deux verbes au subjonctif.", [1], "sujet", `${la("genitor")} : « le père ».`),
          K("Touche le premier verbe au subjonctif.", [4], "verbe", `${la("tardetur")} : subjonctif présent passif de ${la("tardo")}, « soit retardé ».`),
          K("Touche les deux mots à l'ablatif : par quoi est-il retardé ?", [2, 3], "cause", `${la("luctu… nouo")} : « par un deuil inouï ». Le ${la("-que")} annonce ${la("et")} : « à la fois… et… ».`),
          K("Touche le second verbe au subjonctif, dans le second vers.", [11], "verbe", `${la("moretur")} : subjonctif présent de ${la("moror")}, verbe déponent. Forme passive, sens actif : « retarde ».`),
          K(`Touche le COD de ${la("moretur")} : deux mots.`, [10, 12], "COD", `${la("triste… iter")} : « son triste voyage ». ${la("iter")} est neutre.`),
          K("Dans la subordonnée de temps, touche la conjonction et le verbe.", [7, 8], null, `${la("dum legit")} : « pendant qu'il recueille ».`),
          K(`Touche le COD de ${la("legit")} : deux mots, de part et d'autre de la fin du vers.`, [6, 9], "COD", `${la("artus… extinctos")} : « les membres sans vie ». ${la("artus")} est un accusatif pluriel de la 4e déclinaison.`)],
        construction: "ut genitor et luctu nouo tardetur et, dum legit artus extinctos, moretur iter triste.", fr: UNITES[13][2] },
      g3334,
      { t: "version", titre: "Traduire les vers 25-34", intro: "À toi, phrase par phrase. Écris ta traduction avant de regarder la proposition.", vocab: LEX3, phrases: phrases(25, 34) }
    ] };

  /* ---------- Versions blanches ---------- */
  const blanc = (titre, a, b) => ({ t: "version", titre, vocab: TOUT,
    intro: "Dans les conditions du devoir : traduis tout l'extrait d'une traite, sur une feuille ou dans le cadre, avec le seul vocabulaire. Compare ensuite avec la traduction proposée.", phrases: [extrait(a, b)] });
  const blanches = { id: "c51", borne: "Blanc", genre: "Version III, 9,", titre: "Versions blanches", resume: "Trois extraits à traduire d'une traite, comme le jour du devoir",
    etapes: [
      { t: "lecon", titre: "Comme au devoir", texte: `<p>Voici trois extraits possibles. Pour chacun, donne-toi le temps du devoir et applique les six gestes de la méthode.</p>
<ul><li>Lis tout l'extrait avant d'écrire.</li><li>Souligne les verbes conjugués et entoure les mots subordonnants.</li><li>Relie chaque adjectif à son nom.</li><li>Relis ta traduction en te demandant si un lecteur qui ne connaît pas le latin la comprendrait.</li></ul>
<p>Le vocabulaire de toute l'élégie est disponible sous le bouton « Vocabulaire ».</p>` },
      blanc("Version blanche 1 : vers 1-12", 1, 12), blanc("Version blanche 2 : vers 13-24", 13, 24), blanc("Version blanche 3 : vers 21-34", 21, 34)
    ] };

  PARTIE_BILAN.push({ id: "p9", devoir: "Terminale", titre: "Version : Tristes, III, 9, « La ville de Tomes » (TLLCAL1, 2026-2027)",
    sous: "Spécialité. Le premier devoir de langue est une version tirée de l'élégie 9 : la méthode, les 34 vers en trois passages (verbes, traductions guidées, traduction), puis trois versions blanches.",
    chapitres: [fiche, p1, p2, p3, blanches] });
})();

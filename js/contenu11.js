/* ============================================================
   RÉVISIONS DU DEVOIR BILAN — 1LLCAL1, semestre 1, 2026-2027.
   Trois entraînements bâtis comme le devoir (analyse verbale,
   analyse nominale et adjectivale, présent actif et passif en
   contexte, compléments circonstanciels), sur d'autres récits.
   ============================================================ */
var PARTIE_BILAN = (function () {
  const la = s => `<i class="la">${s}</i>`;
  const CC = ["N", "V", "A", "G", "D", "B"];
  const FONC = ["Lieu", "Temps", "Manière", "Moyen", "Agent", "Accompagnement"];

  /* Verbe au présent : V("conditur", "3s p", "condere", "il est fondé|…") */
  function V(forme, an, inf, fr) {
    const [p, v] = an.split(" ");
    return { forme, mot: "", a: [{ t: "present", m: "ind", v, p: +p[0] - 1 + (p[1] === "p" ? 3 : 0) }], inf, fr: fr.split("|") };
  }
  /* Cas possibles d'une forme sur un modèle ; nb = "s" ou "p" pour un mot qui n'a qu'un nombre */
  function casDe(forme, modele, rad, nomSg, nb) {
    const f = formesPlates(decliner(modele, rad, nomSg));
    return f.map((x, j) => x === forme && (!nb || nb === (j < 6 ? "s" : "p")) ? CC[j % 6] + (j < 6 ? "s" : "p") : null).filter(Boolean);
  }
  /* Nom : N("lupae", "rosa", "lup", "f", "lupa", "lupa, ae, f") */
  function N(forme, modele, rad, g, lemme, entree, o = {}) {
    const bons = casDe(forme, modele, rad, o.nomSg, o.nb);
    if (!bons.length) console.error("Forme absente du modèle : " + forme);
    return { forme, g, lemme, entree, bons, expl: o.expl };
  }
  /* Adjectif de la 1re classe : A("pulchra", "pulchr", "pulcher", "pulcher, pulchra, pulchrum") ; nomSg pour les adjectifs en -er */
  function A(forme, rad, lemme, entree, expl) {
    const er = /er$/.test(lemme);
    const bons = { m: casDe(forme, er ? "puer" : "dominus", rad, er ? lemme : null), f: casDe(forme, "rosa", rad), n: casDe(forme, "templum", rad) };
    if (!bons.m.length && !bons.f.length && !bons.n.length) console.error("Forme absente : " + forme);
    return { forme, adj: true, lemme, entree, bons, expl };
  }
  const voix = (lat, fr, v, note) => ({ la: lat, fr: `${fr} <b>(${v})</b>`, note });
  const cc = (lat, bon, fr, constr) => ({ q: la(lat), choix: FONC, fixe: true, bon: FONC.indexOf(bon), expl: `« ${fr} » ${constr}` });

  /* Un entraînement complet, sur le modèle du devoir */
  function entrainement(id, borne, titre, resume, recit, lex, verbes, noms, phrases, ccs) {
    const vocab = [...lex.verbes, ...lex.noms, ...lex.inv];
    const fiche = `<p>${recit}</p><p>Comme au devoir, tout le vocabulaire est dans la <strong>fiche de lexique</strong> ci-dessous. Tu la retrouves dans chaque exercice, sous le bouton « Vocabulaire ».</p>
<h3>Verbes</h3><ul class="lex-fiche">${lex.verbes.map(x => `<li>${x.replace(/^([^:]+):/, (m, a) => la(a.trim()) + " :")}</li>`).join("")}</ul>
<h3>Noms et adjectifs</h3><ul class="lex-fiche">${lex.noms.map(x => `<li>${x.replace(/^([^:]+):/, (m, a) => la(a.trim()) + " :")}</li>`).join("")}</ul>
<h3>Mots invariables</h3><ul class="lex-fiche">${lex.inv.map(x => `<li>${x.replace(/^([^:]+):/, (m, a) => la(a.trim()) + " :")}</li>`).join("")}</ul>`;
    return { id, borne, genre: "Devoir bilan,", titre, resume, etapes: [
      { t: "lecon", titre: "Le récit et la fiche de lexique", texte: fiche },
      { t: "verbe", niveau: 2, infinitif: true, titre: "I. Analyse verbale", vocab, lexInline: true,
        intro: "Tous les verbes sont au présent de l'indicatif. Pour chaque forme : la voix, la personne, l'infinitif du verbe, puis la traduction.", items: verbes },
      { t: "nominal", titre: "II. Analyse nominale et adjectivale", vocab, lexInline: true,
        intro: "Donne <b>toutes</b> les analyses possibles de chaque forme (cas, nombre, genre) et son nominatif singulier. Pour un adjectif, pense aux trois genres.", items: noms },
      { t: "version", titre: "III. Le présent actif et passif en contexte", vocab, lexInline: true,
        intro: "Traduis chaque phrase et note la voix du verbe (actif ou passif). Au passif, cherche le complément d'agent : " + la("a / ab") + " + ablatif.", phrases },
      { t: "quiz", titre: "IV. Les compléments circonstanciels : la fonction", vocab, lexInline: true,
        intro: "Quelle est la fonction précise du groupe souligné ? La correction donne la traduction et la construction.", questions: ccs.map(x => cc(...x)) },
      { t: "version", titre: "IV. Les compléments circonstanciels : la traduction", vocab, lexInline: true,
        intro: "Traduis maintenant ces mêmes phrases, en rendant bien le complément circonstanciel.",
        phrases: ccs.map(x => ({ la: x[0].replace(/<\/?u>/g, ""), fr: x[2], note: x[1] + " " + x[3] })) }
    ] };
  }

  const T = (legende, tetes, lignes) => `<div class="tab-wrap"><table class="donnees"><caption>${legende}</caption><thead><tr>${tetes.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${lignes.map(l => `<tr>${l.map((x, k) => k ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  const ficheRevision = { id: "c43", borne: "Fiche", genre: "Devoir bilan,", titre: "Ce qu'il faut savoir pour le devoir", resume: "Les quatre exercices du devoir, et les tableaux à connaître par cœur",
    etapes: [
      { t: "lecon", titre: "Le devoir, exercice par exercice",
        texte: `<p>Le devoir bilan du premier semestre compte <strong>quatre exercices</strong>, notés chacun sur 10. Le vocabulaire est fourni dans une fiche de lexique : inutile de l'apprendre, mais il faut savoir <strong>s'en servir</strong>.</p>
${T("Les quatre exercices", ["Exercice", "Ce qu'on te demande", "Le bon réflexe"], [
  ["I. Analyse verbale", "Personne, nombre, voix, infinitif du verbe, puis traduction de la forme. Tous les verbes sont au présent de l'indicatif.", "Regarde la désinence : " + la("-t") + " ou " + la("-tur") + " ? Puis cherche le verbe dans le lexique."],
  ["II. Analyse nominale et adjectivale", "Toutes les analyses possibles (cas, nombre, genre) et le nominatif singulier.", "Retrouve le mot dans le lexique : son génitif donne la déclinaison, puis récite le tableau."],
  ["III. Actif et passif en contexte", "Traduire la phrase et donner la voix du verbe.", "Au passif, le sujet subit l'action ; celui qui agit est à l'ablatif après " + la("a / ab") + "."],
  ["IV. Compléments circonstanciels", "Traduire et nommer la fonction du groupe souligné.", "Regarde la préposition et le cas : ils donnent la fonction."]])}
<p>Les trois entraînements qui suivent sont construits exactement de cette façon, sur d'autres récits. Fais-les avec la fiche de lexique, comme le jour du devoir.</p>` },
      { t: "lecon", titre: "Le présent de l'indicatif, actif et passif",
        texte: `<p>La désinence donne à la fois la <strong>personne</strong> et la <strong>voix</strong>.</p>
${T("Les désinences du présent", ["Personne", "Actif", "Passif"], [["1re sg.", la("-o"), la("-or")], ["2e sg.", la("-s"), la("-ris")], ["3e sg.", la("-t"), la("-tur")], ["1re pl.", la("-mus"), la("-mur")], ["2e pl.", la("-tis"), la("-mini")], ["3e pl.", la("-nt"), la("-ntur")]])}
${tConj("present", "actif")}${tConj("present", "passif")}
${T(la("sum, es, esse, fui") + " : être", ["Personne", "Forme", "Traduction"], [["1re sg.", la("sum"), "je suis"], ["2e sg.", la("es"), "tu es"], ["3e sg.", la("est"), "il, elle est"], ["1re pl.", la("sumus"), "nous sommes"], ["2e pl.", la("estis"), "vous êtes"], ["3e pl.", la("sunt"), "ils, elles sont"]])}
<p><strong>Traduire le passif</strong> : « être » au présent + participe passé. ${la("amatur")} : il est aimé ; ${la("amantur")} : ils sont aimés.</p>
<p><strong>Retrouver l'infinitif</strong> : c'est la troisième forme des temps primitifs. ${la("capio, is, ere")} : infinitif ${la("capere")} ; ${la("audio, is, ire")} : infinitif ${la("audire")}.</p>` },
      { t: "lecon", titre: "Les noms et les adjectifs des deux premières déclinaisons",
        texte: `${tDecl("rosa")}${tDecl("dominus")}${tDecl("puer")}${tDecl("templum")}${tAdj()}
<h3>Les terminaisons qui ont plusieurs analyses</h3>
${T("À connaître absolument", ["Terminaison", "Analyses possibles"], [
  [la("-ae") + " (1re décl.)", "génitif singulier, datif singulier, nominatif pluriel, vocatif pluriel"],
  [la("-a") + " (1re décl.)", "nominatif, vocatif, ablatif singulier"],
  [la("-a") + " (neutre)", "nominatif, vocatif, accusatif pluriel"],
  [la("-i") + " (2e décl.)", "génitif singulier ; nominatif et vocatif pluriel (au masculin)"],
  [la("-o"), "datif singulier, ablatif singulier"],
  [la("-um") + " (neutre)", "nominatif, vocatif, accusatif singulier"],
  [la("-is"), "datif pluriel, ablatif pluriel, aux trois genres"],
  [la("-e"), "vocatif singulier masculin, seulement pour les mots en " + la("-us")]])}
<p><strong>Pour un adjectif</strong>, cherche les analyses dans les trois genres : ${la("bona")} est un féminin singulier (nominatif, vocatif, ablatif) <em>et</em> un neutre pluriel (nominatif, vocatif, accusatif).</p>
<p><strong>Attention au nominatif singulier</strong> : certains mots sont en ${la("-er")} (${la("ager, agri")} ; ${la("pulcher, pulchra, pulchrum")}), et quelques noms en ${la("-a")} sont masculins (${la("agricola, ae, m")}).</p>` },
      { t: "lecon", titre: "Les compléments circonstanciels",
        texte: `${T("Reconnaître la fonction", ["Fonction", "Construction", "Exemple"], [
  ["Lieu (où l'on est)", la("in") + " + ablatif", la("in silva") + " : dans la forêt"],
  ["Lieu (où l'on va)", la("in") + " ou " + la("ad") + " + accusatif", la("ad agrum") + " : vers le champ"],
  ["Temps (date, moment)", "ablatif seul", la("prima hora") + " : à la première heure"],
  ["Temps (durée)", "accusatif seul", la("multos annos") + " : pendant de nombreuses années"],
  ["Manière", la("cum") + " + ablatif ; l'adjectif se place souvent avant " + la("cum"), la("magna cum audacia") + " : avec une grande audace"],
  ["Moyen", "ablatif seul (une chose, un outil)", la("gladio") + " : avec un glaive"],
  ["Agent", la("a / ab") + " + ablatif, avec un verbe passif (une personne)", la("a Romulo") + " : par Romulus"],
  ["Accompagnement", la("cum") + " + ablatif (une personne)", la("cum filiis") + " : avec ses fils"]])}
<p><strong>Trois confusions à éviter</strong> :</p>
<ul><li>${la("cum")} + une <strong>personne</strong> : accompagnement ; ${la("cum")} + un <strong>nom abstrait</strong> (audace, joie, colère) : manière.</li>
<li>Ablatif <strong>seul</strong> d'une chose : moyen ; ${la("a / ab")} + ablatif d'une personne, avec un verbe passif : agent.</li>
<li>Accusatif <strong>sans préposition</strong> d'un nom de temps : durée, et non COD.</li></ul>` }
    ] };

  /* ---------- Entraînement 1 : le cheval de Troie ---------- */
  const e1 = entrainement("c44", "Sujet 1", "Entraînement 1 : le cheval de Troie", "Les Grecs prennent Troie par la ruse",
    "Depuis de longues années, les Grecs assiègent Troie sans succès. Ils construisent alors un immense cheval de bois, y cachent des guerriers et font semblant de partir. Les Troyens, joyeux, tirent le cheval dans leur ville.",
    { verbes: ["aedifico, as, are, avi, atum : construire", "aperio, is, ire, aperui, apertum : ouvrir", "audio, is, ire, ivi, itum : écouter, entendre", "capio, is, ere, cepi, captum : prendre", "deleo, es, ere, delevi, deletum : détruire",
        "duco, is, ere, duxi, ductum : conduire", "maneo, es, ere, mansi, mansum : rester", "moneo, es, ere, monui, monitum : avertir", "occulto, as, are, avi, atum : cacher", "pugno, as, are, avi, atum : combattre",
        "relinquo, is, ere, reliqui, relictum : laisser, abandonner", "sum, es, esse, fui : être", "traho, is, ere, traxi, tractum : tirer, traîner", "video, es, ere, vidi, visum : voir", "vinco, is, ere, vici, victum : vaincre"],
      noms: ["altus, a, um : haut", "annus, i, m : l'année", "armatus, a, um : armé", "Asia, ae, f : l'Asie", "donum, i, n : le cadeau, l'offrande", "equus, i, m : le cheval", "flamma, ae, f : la flamme", "gaudium, ii, n : la joie",
        "gladius, ii, m : le glaive", "Graeci, orum, m pl : les Grecs", "laetus, a, um : joyeux", "ligneus, a, um : en bois", "magnus, a, um : grand", "Minerva, ae, f : Minerve", "multus, a, um : nombreux, beaucoup de",
        "murus, i, m : le mur, le rempart", "oppidum, i, n : la ville, la place forte", "porta, ae, f : la porte", "Troia, ae, f : Troie", "Troiani, orum, m pl : les Troyens", "vir, viri, m : l'homme, le guerrier"],
      inv: ["a / ab (+ ablatif) : par", "cum (+ ablatif) : avec", "et : et", "in (+ accusatif) : dans, vers", "in (+ ablatif) : dans, sur"] },
    [V("aedificatur", "3s p", "aedificare", "il est construit"), V("capimus", "1p a", "capere", "nous prenons"), V("delentur", "3p p", "delere", "ils sont détruits"), V("mones", "2s a", "monere", "tu avertis"),
     V("ducimur", "1p p", "ducere", "nous sommes conduits"), V("relinquitur", "3s p", "relinquere", "il est laissé|il est abandonné"), V("auditis", "2p a", "audire", "vous écoutez|vous entendez"),
     V("occultaris", "2s p", "occultare", "tu es caché"), V("estis", "2p a", "esse", "vous êtes"), V("aperiunt", "3p a", "aperire", "ils ouvrent")],
    [N("equi", "dominus", "equ", "m", "equus", "equus, i, m"), N("portas", "rosa", "port", "f", "porta", "porta, ae, f"), N("murum", "dominus", "mur", "m", "murus", "murus, i, m"),
     N("donorum", "templum", "don", "n", "donum", "donum, i, n"), N("dona", "templum", "don", "n", "donum", "donum, i, n"),
     N("Minervae", "rosa", "Minerv", "f", "Minerva", "Minerva, ae, f", { nb: "s", expl: "Un nom propre n'a pas de pluriel." }),
     A("lignea", "ligne", "ligneus", "ligneus, a, um"), A("altis", "alt", "altus", "altus, a, um"),
     N("viri", "puer", "vir", "m", "vir", "vir, viri, m", { nomSg: "vir" }), A("laete", "laet", "laetus", "laetus, a, um")],
    [voix("Equus ligneus a Graecis aedificatur.", "Un cheval de bois est construit par les Grecs.", "passif"),
     voix("Graeci viros armatos in equo occultant.", "Les Grecs cachent des guerriers armés dans le cheval.", "actif"),
     voix("Equus a Troianis in oppidum trahitur.", "Le cheval est traîné dans la ville par les Troyens.", "passif", "<i class=\"la\">in oppidum</i> : accusatif, le lieu où l'on va."),
     voix("Troiani laeti equum magnum vident.", "Les Troyens, joyeux, voient le grand cheval.", "actif"),
     voix("Troia a Graecis capitur et flammis deletur.", "Troie est prise par les Grecs et détruite par les flammes.", "passif", "Deux verbes au passif : <i class=\"la\">a Graecis</i> est l'agent, <i class=\"la\">flammis</i> le moyen.")],
    [["Graeci <u>multos annos</u> in Asia pugnant.", "Temps", "Les Grecs combattent en Asie pendant de nombreuses années.", "(durée : accusatif seul)"],
     ["Viri armati <u>in equo</u> manent.", "Lieu", "Les guerriers armés restent dans le cheval.", "(lieu où l'on est : " + "in + ablatif)"],
     ["Troiani <u>magno cum gaudio</u> equum in oppidum ducunt.", "Manière", "Les Troyens conduisent le cheval dans la ville avec une grande joie.", "(cum + ablatif, adjectif placé avant cum)"],
     ["Portae <u>a Graecis</u> aperiuntur.", "Agent", "Les portes sont ouvertes par les Grecs.", "(a + ablatif, avec un verbe passif)"],
     ["Graeci Troianos <u>gladiis</u> vincunt.", "Moyen", "Les Grecs vainquent les Troyens avec leurs glaives.", "(ablatif seul)"]]);

  /* ---------- Entraînement 2 : Mucius Scaevola et Clélie ---------- */
  const e2 = entrainement("c45", "Sujet 2", "Entraînement 2 : Mucius Scaevola et Clélie", "Deux héros romains face au roi étrusque Porsenna",
    "Le roi étrusque Porsenna assiège Rome. Le jeune Mucius entre dans son camp pour le tuer, mais se trompe de victime ; pour montrer son courage, il laisse brûler sa main droite. Plus tard Clélie, retenue en otage, s'enfuit avec ses compagnes en traversant le Tibre.",
    { verbes: ["accipio, is, ere, accepi, acceptum : recevoir, accueillir", "custodio, is, ire, ivi, itum : garder, surveiller", "fugio, is, ere, fugi, fugitum : fuir, s'enfuir", "intro, as, are, avi, atum : entrer dans",
        "laudo, as, are, avi, atum : louer", "libero, as, are, avi, atum : libérer", "mitto, is, ere, misi, missum : envoyer", "obsideo, es, ere, obsedi, obsessum : assiéger", "occido, is, ere, occidi, occisum : tuer",
        "pono, is, ere, posui, positum : placer", "sum, es, esse, fui : être", "teneo, es, ere, tenui, tentum : tenir", "trano, as, are, avi, atum : traverser à la nage, traverser"],
      noms: ["amicus, i, m : l'ami", "castra, orum, n pl : le camp", "Cloelia, ae, f : Clélie", "dextra, ae, f : la main droite", "equus, i, m : le cheval", "Etrusci, orum, m pl : les Étrusques", "flamma, ae, f : la flamme",
        "fluvius, ii, m : le fleuve", "gladius, ii, m : le glaive", "laetitia, ae, f : la joie", "liber, libera, liberum : libre", "magnus, a, um : grand", "Mucius, ii, m : Mucius", "Porsenna, ae, m : Porsenna",
        "puella, ae, f : la jeune fille", "Roma, ae, f : Rome", "Romani, orum, m pl : les Romains", "Romanus, a, um : romain", "sacer, sacra, sacrum : sacré ; via Sacra : la voie Sacrée", "scriba, ae, m : le secrétaire",
        "statua, ae, f : la statue", "via, ae, f : la route, la voie"],
      inv: ["a / ab (+ ablatif) : par", "cum (+ ablatif) : avec", "in (+ ablatif) : dans, sur"] },
    [V("obsidetur", "3s p", "obsidere", "il est assiégé"), V("intras", "2s a", "intrare", "tu entres"), V("occiditur", "3s p", "occidere", "il est tué"), V("mittimur", "1p p", "mittere", "nous sommes envoyés"),
     V("laudamini", "2p p", "laudare", "vous êtes loués"), V("fugiunt", "3p a", "fugere", "ils fuient|ils s'enfuient"), V("custodiris", "2s p", "custodire", "tu es gardé|tu es surveillé"),
     V("tenemus", "1p a", "tenere", "nous tenons"), V("sunt", "3p a", "esse", "ils sont"), V("liberantur", "3p p", "liberare", "ils sont libérés")],
    [N("castra", "templum", "castr", "n", ["castra"], "castra, orum, n pl", { nb: "p", expl: "Ce nom n'existe qu'au pluriel : son entrée dans le lexique est <i class=\"la\">castra</i>." }),
     N("puellis", "rosa", "puell", "f", "puella", "puella, ae, f"), N("scribam", "rosa", "scrib", "m", "scriba", "scriba, ae, m", { expl: "Un nom de la 1re déclinaison, mais masculin." }),
     N("flammae", "rosa", "flamm", "f", "flamma", "flamma, ae, f"), N("gladio", "dominus", "gladi", "m", "gladius", "gladius, ii, m"),
     N("Etruscorum", "dominus", "Etrusc", "m", ["Etrusci"], "Etrusci, orum, m pl", { nb: "p" }),
     A("Romana", "Roman", "Romanus", "Romanus, a, um"), A("liberi", "liber", "liber", "liber, libera, liberum", "Au génitif singulier, la forme vaut pour le masculin et pour le neutre."),
     N("equos", "dominus", "equ", "m", "equus", "equus, i, m"), N("amice", "dominus", "amic", "m", "amicus", "amicus, i, m")],
    [voix("Roma a Porsenna obsidetur.", "Rome est assiégée par Porsenna.", "passif", "<i class=\"la\">Porsenna</i> est un masculin de la 1re déclinaison : ablatif en <i class=\"la\">-a</i>."),
     voix("Mucius castra Etruscorum intrat.", "Mucius entre dans le camp des Étrusques.", "actif"),
     voix("Scriba a Mucio occiditur.", "Le secrétaire est tué par Mucius.", "passif"),
     voix("Mucius dextram in flammis tenet.", "Mucius tient sa main droite dans les flammes.", "actif"),
     voix("Puellae Romanae a Cloelia liberantur.", "Les jeunes filles romaines sont libérées par Clélie.", "passif")],
    [["Cloelia <u>cum puellis</u> fugit.", "Accompagnement", "Clélie s'enfuit avec les jeunes filles.", "(cum + ablatif d'une personne)"],
     ["Cloelia fluvium <u>equo</u> tranat.", "Moyen", "Clélie traverse le fleuve à cheval.", "(ablatif seul)"],
     ["Puellae <u>a Porsenna</u> custodiuntur.", "Agent", "Les jeunes filles sont gardées par Porsenna.", "(a + ablatif, avec un verbe passif)"],
     ["Statua Cloeliae <u>in via Sacra</u> ponitur.", "Lieu", "La statue de Clélie est placée sur la voie Sacrée.", "(lieu où l'on est : in + ablatif)"],
     ["Romani Cloeliam <u>magna cum laetitia</u> accipiunt.", "Manière", "Les Romains accueillent Clélie avec une grande joie.", "(cum + ablatif, adjectif placé avant cum)"]]);

  /* ---------- Entraînement 3 : la révolte de Spartacus ---------- */
  const e3 = entrainement("c46", "Sujet 3", "Entraînement 3 : la révolte de Spartacus", "Les esclaves gladiateurs se soulèvent contre Rome",
    "En 73 av. J.-C., le gladiateur Spartacus s'échappe de l'école de Capoue avec ses compagnons. Des milliers d'esclaves le rejoignent et battent plusieurs armées romaines, avant d'être écrasés par Crassus.",
    { verbes: ["convoco, as, are, avi, atum : rassembler", "duco, is, ere, duxi, ductum : conduire", "exerceo, es, ere, exercui, exercitum : entraîner, exercer", "fugio, is, ere, fugi, fugitum : fuir, s'enfuir",
        "maneo, es, ere, mansi, mansum : rester", "mitto, is, ere, misi, missum : envoyer", "pugno, as, are, avi, atum : combattre", "punio, is, ire, ivi, itum : punir", "rapio, is, ere, rapui, raptum : saisir, enlever",
        "rumpo, is, ere, rupi, ruptum : briser", "sum, es, esse, fui : être", "supero, as, are, avi, atum : vaincre, l'emporter sur", "terreo, es, ere, terrui, territum : effrayer", "vinco, is, ere, vici, victum : vaincre"],
      noms: ["annus, i, m : l'année", "arma, orum, n pl : les armes", "Capua, ae, f : Capoue", "copiae, arum, f pl : les troupes", "Crassus, i, m : Crassus", "dominus, i, m : le maître", "duo, duae, duo : deux",
        "ira, ae, f : la colère", "liber, libera, liberum : libre", "ludus, i, m : l'école (de gladiateurs)", "magnus, a, um : grand", "multus, a, um : nombreux, beaucoup de", "Romani, orum, m pl : les Romains",
        "Romanus, a, um : romain", "saevus, a, um : cruel", "saxum, i, n : la pierre", "servus, i, m : l'esclave", "socius, ii, m : le compagnon", "Spartacus, i, m : Spartacus", "validus, a, um : robuste, fort",
        "Vesuvius, ii, m : le Vésuve", "via, ae, f : la route ; via Appia : la voie Appienne", "vinculum, i, n : la chaîne, le lien"],
      inv: ["a / ab (+ ablatif) : par", "cum (+ ablatif) : avec ; pugnare cum : combattre contre", "et : et", "in (+ ablatif) : dans, sur"] },
    [V("exercentur", "3p p", "exercere", "ils sont entraînés|ils sont exercés"), V("rapis", "2s a", "rapere", "tu saisis|tu enlèves"), V("ducimini", "2p p", "ducere", "vous êtes conduits"),
     V("superamur", "1p p", "superare", "nous sommes vaincus"), V("mittit", "3s a", "mittere", "il envoie"), V("terreris", "2s p", "terrere", "tu es effrayé"), V("convocamus", "1p a", "convocare", "nous rassemblons"),
     V("punitur", "3s p", "punire", "il est puni"), V("es", "2s a", "esse", "tu es"), V("pugnant", "3p a", "pugnare", "ils combattent")],
    [N("servorum", "dominus", "serv", "m", "servus", "servus, i, m"), N("domino", "dominus", "domin", "m", "dominus", "dominus, i, m"),
     N("arma", "templum", "arm", "n", ["arma"], "arma, orum, n pl", { nb: "p", expl: "Ce nom n'existe qu'au pluriel." }),
     N("Capuam", "rosa", "Capu", "f", "Capua", "Capua, ae, f", { nb: "s" }), N("vincula", "templum", "vincul", "n", "vinculum", "vinculum, i, n"),
     N("copiis", "rosa", "copi", "f", ["copiae"], "copiae, arum, f pl", { nb: "p" }), A("saeve", "saev", "saevus", "saevus, a, um"), A("valida", "valid", "validus", "validus, a, um"),
     N("socii", "dominus", "soci", "m", "socius", "socius, ii, m"), A("liberum", "liber", "liber", "liber, libera, liberum", "Au masculin, seulement accusatif ; au neutre, nominatif, vocatif et accusatif.")],
    [voix("Servi in ludo a domino saevo exercentur.", "Les esclaves sont entraînés dans l'école par un maître cruel.", "passif"),
     voix("Spartacus arma rapit et cum sociis fugit.", "Spartacus saisit des armes et s'enfuit avec ses compagnons.", "actif"),
     voix("Multi servi a Spartaco convocantur.", "De nombreux esclaves sont rassemblés par Spartacus.", "passif"),
     voix("Spartacus copias Romanas superat.", "Spartacus vainc les troupes romaines.", "actif"),
     voix("Spartacus a Crasso vincitur.", "Spartacus est vaincu par Crassus.", "passif")],
    [["Spartacus <u>cum sociis</u> in Vesuvio manet.", "Accompagnement", "Spartacus reste sur le Vésuve avec ses compagnons.", "(cum + ablatif d'une personne)"],
     ["Servi <u>duos annos</u> cum Romanis pugnant.", "Temps", "Les esclaves combattent contre les Romains pendant deux ans.", "(durée : accusatif seul)"],
     ["Servi <u>magna cum ira</u> pugnant.", "Manière", "Les esclaves combattent avec une grande colère.", "(cum + ablatif, adjectif placé avant cum)"],
     ["Servi vincula <u>saxis</u> rumpunt.", "Moyen", "Les esclaves brisent leurs chaînes avec des pierres.", "(ablatif seul)"],
     ["Copiae Romanae <u>a servis</u> terrentur.", "Agent", "Les troupes romaines sont effrayées par les esclaves.", "(a + ablatif, avec un verbe passif)"],
     ["Multi servi <u>in via Appia</u> puniuntur.", "Lieu", "De nombreux esclaves sont punis sur la voie Appienne.", "(lieu où l'on est : in + ablatif)"]]);

  return [{ id: "p8", devoir: "Première", titre: "Devoir bilan du premier semestre (1LLCAL1, 2026-2027)",
    sous: "Spécialité. Une fiche de révision, puis trois entraînements construits comme le devoir : analyse verbale, analyse nominale, actif et passif, compléments circonstanciels.",
    chapitres: [ficheRevision, e1, e2, e3] }];
})();

/* ============================================================
   EXERCICES DE RECONNAISSANCE — comme au devoir de morphologie.
   Déclinaisons : pour une forme donnée, tous les cas possibles.
   Conjugaisons : niveau 1 (reconnaître la forme), niveau 2
   (reconnaître et traduire).
   Ces étapes remplacent, à la même place, les anciens exercices
   où l'on écrivait la forme.
   ============================================================ */
(function () {
  const TOUS = [...PARTIE1, ...PARTIE2, ...PARTIE3, ...PARTIE4, ...PARTIE_TRAD, ...PARTIE5].flatMap(p => p.chapitres);
  function remplacer(id, titre, etape) {
    const c = TOUS.find(x => x.id === id), k = c ? c.etapes.findIndex(e => e.titre === titre) : -1;
    if (k < 0) { console.error("Étape introuvable : " + id + " / " + titre); return; }
    c.etapes[k] = etape;
  }
  const la = s => `<i class="la">${s}</i>`;
  const CODES_CAS = ["N", "V", "A", "G", "D", "B"];

  /* Forme d'un nom : les cas possibles sont calculés sur le modèle de déclinaison. */
  function F(forme, modele, mot, rad, nomSg) {
    const f = formesPlates(decliner(modele, rad, nomSg));
    const bons = f.map((x, j) => x === forme ? CODES_CAS[j % 6] + (j < 6 ? "s" : "p") : null).filter(Boolean);
    if (!bons.length) console.error("Forme absente du modèle : " + forme);
    return { forme, mot: la(mot), bons };
  }
  /* Forme d'un pronom ou d'un adjectif : cas donnés à la main ("Ns As"). */
  const P = (forme, mot, bons) => ({ forme, mot, bons: bons.split(" ") });
  const cas = (titre, intro, items, expl) => ({ t: "analyse", titre, intro, items, expl });

  /* Forme verbale : analyses "temps voix personne [mode]" séparées par ";" ; traductions séparées par "|". */
  function V(forme, mot, analyses, fr, expl) {
    const a = analyses.split(";").map(s => { const [t, v, p, m] = s.trim().split(/\s+/); return { t, v, p: +p[0] - 1 + (p[1] === "p" ? 3 : 0), m: m || "ind" }; });
    return { forme, mot: la(mot), a, fr: fr ? fr.split("|") : null, expl };
  }
  const verbes = (niveau, titre, intro, o, items) => Object.assign({ t: "verbe", niveau, titre, intro, items }, o);

  /* ---------- Première déclinaison (c2) ---------- */
  const stella = ["rosa", "stella, ae, f : l'étoile", "stell"];
  remplacer("c2", "Décliner stella", cas("Reconnaître les cas de stella",
    `Comme au devoir : pour chaque forme de ${la("stella, ae, f")} (l'étoile), coche <b>tous</b> les cas possibles. Aide-toi du modèle ${la("rosa")}.`,
    ["stellam", "stellarum", "stellas", "stellis", "stella", "stellae"].map(f => F(f, ...stella))));
  remplacer("c2", "Donner la forme demandée", cas("Reconnaître les cas : noms mêlés",
    "Les noms changent, les terminaisons restent celles de la première déclinaison.",
    [F("epistulas", "rosa", "epistula, ae, f : la lettre", "epistul"), F("silvae", "rosa", "silva, ae, f : la forêt", "silv"), F("nautam", "rosa", "nauta, ae, m : le marin", "naut"),
     F("regina", "rosa", "regina, ae, f : la reine", "regin"), F("terrarum", "rosa", "terra, ae, f : la terre", "terr"), F("poetis", "rosa", "poeta, ae, m : le poète", "poet")],
    `Les terminaisons ${la("-ae")}, ${la("-a")} et ${la("-is")} sont ambiguës : seul le contexte de la phrase permet de trancher.`));

  /* ---------- Deuxième déclinaison (c3) ---------- */
  remplacer("c3", "Décliner servus", cas("Reconnaître les cas de servus",
    `Pour chaque forme de ${la("servus, i, m")} (l'esclave), coche tous les cas possibles. Aide-toi du modèle ${la("dominus")}.`,
    ["serve", "servum", "servi", "servo", "servos", "servorum", "servis"].map(f => F(f, "dominus", "servus, i, m : l'esclave", "serv")),
    `Le vocatif singulier en ${la("-e")} est la seule forme où le vocatif diffère du nominatif.`));
  remplacer("c3", "Décliner bellum", cas("Reconnaître les cas de bellum",
    `Pour chaque forme de ${la("bellum, i, n")} (la guerre), coche tous les cas possibles. Aide-toi du modèle ${la("templum")}.`,
    ["bellum", "belli", "bello", "bella", "bellorum", "bellis"].map(f => F(f, "templum", "bellum, i, n : la guerre", "bell")),
    "Au neutre, le nominatif, le vocatif et l'accusatif sont toujours identiques."));
  remplacer("c3", "Mettre au cas demandé", cas("Reconnaître les cas : noms mêlés",
    "Masculins et neutres sont mélangés : regarde d'abord le genre du nom.",
    [F("amice", "dominus", "amicus, i, m : l'ami", "amic"), F("dona", "templum", "donum, i, n : le cadeau", "don"), F("horto", "dominus", "hortus, i, m : le jardin", "hort"),
     F("fora", "templum", "forum, i, n : la place publique", "for"), F("agrum", "puer", "ager, agri, m : le champ", "agr", "ager"), F("pueri", "puer", "puer, pueri, m : l'enfant"),
     F("ager", "puer", "ager, agri, m : le champ", "agr", "ager"), F("populis", "dominus", "populus, i, m : le peuple", "popul")]));

  /* ---------- Adjectifs de la première classe (c7) ---------- */
  remplacer("c7", "Décliner malus, a, um", cas("Reconnaître les cas de malus, a, um",
    `Le genre est indiqué : coche tous les cas possibles de chaque forme de ${la("malus, a, um")} (mauvais).`,
    [F("malam", "rosa", "au féminin", "mal"), F("malorum", "templum", "au neutre", "mal"), F("male", "dominus", "au masculin", "mal"), F("malis", "rosa", "au féminin", "mal"),
     F("malum", "templum", "au neutre", "mal"), F("malos", "dominus", "au masculin", "mal"), F("mala", "templum", "au neutre", "mal"), F("mali", "dominus", "au masculin", "mal")],
    `Sans indication de genre, ${la("mala")} pourrait aussi être un féminin singulier : c'est le nom auquel l'adjectif se rapporte qui tranche.`));

  /* ---------- Pronoms (c22) ---------- */
  remplacer("c22", "Décliner is, ea, id", cas("Reconnaître les cas de is, ea, id",
    "Les pronoms n'ont pas de vocatif. Le genre est indiqué quand il change la réponse.",
    [P("eum", "masculin", "As"), P("eam", "féminin", "As"), P("eius", "les trois genres", "Gs"), P("ei", "au féminin", "Ds"), P("eos", "masculin", "Ap"),
     P("earum", "féminin", "Gp"), P("id", "neutre", "Ns As"), P("ea", "au neutre", "Np Ap"), P("eis", "les trois genres", "Dp Bp")]));
  remplacer("c22", "Décliner les démonstratifs", cas("Reconnaître les cas des démonstratifs",
    `Formes de ${la("hic, haec, hoc")}, ${la("ille, illa, illud")}, ${la("iste")} et ${la("idem")}. Le genre est indiqué quand il change la réponse.`,
    [P("hunc", la("hic") + ", masculin", "As"), P("huic", la("hic") + ", les trois genres", "Ds"), P("haec", la("hic") + ", au neutre", "Np Ap"), P("hoc", la("hic") + ", au masculin", "Bs"),
     P("illius", la("ille") + ", les trois genres", "Gs"), P("illi", la("ille") + ", au féminin", "Ds"), P("illas", la("ille") + ", féminin", "Ap"),
     P("istud", la("iste") + ", neutre", "Ns As"), P("eundem", la("idem") + ", masculin", "As")]));

  /* ---------- Troisième déclinaison (c9) ---------- */
  remplacer("c9", "Décliner miles", cas("Reconnaître les cas de miles",
    `Un imparisyllabique, sur le modèle de ${la("consul")}. Le radical est ${la("milit-")}.`,
    ["miles", "militem", "militis", "militi", "milite", "milites", "militum", "militibus"].map(f => F(f, "consul", "miles, militis, m : le soldat", "milit", "miles"))));
  remplacer("c9", "Décliner flumen", cas("Reconnaître les cas de flumen",
    `Un neutre imparisyllabique, sur le modèle de ${la("corpus")}. Le radical est ${la("flumin-")}.`,
    ["flumen", "fluminis", "flumini", "flumine", "flumina", "fluminum", "fluminibus"].map(f => F(f, "corpus", "flumen, fluminis, n : le fleuve", "flumin", "flumen"))));
  remplacer("c9", "Mettre au cas demandé", cas("Reconnaître les cas : noms mêlés",
    "Attention au type de nom : il change le génitif pluriel et, pour certains neutres, l'ablatif singulier.",
    [F("nomina", "corpus", "nomen, nominis, n : le nom", "nomin", "nomen"), F("artium", "urbs", "ars, artis, f : l'art", "art", "ars"), F("vectigali", "animal", "vectigal, vectigalis, n : l'impôt", "vectigal", "vectigal"),
     F("ignibus", "civis", "ignis, ignis, m : le feu", "ign"), F("corpora", "corpus", "corpus, corporis, n : le corps"), F("civium", "civis", "civis, civis, m : le citoyen"),
     F("regi", "consul", "rex, regis, m : le roi", "reg", "rex"), F("ignis", "civis", "ignis, ignis, m : le feu", "ign"), F("hostes", "civis", "hostis, hostis, m : l'ennemi", "host")]));

  /* ---------- Adjectifs de la deuxième classe (c23) ---------- */
  remplacer("c23", "Décliner fortis et omnis", cas("Reconnaître les cas de fortis et omnis",
    "Le genre est indiqué quand il change la réponse.",
    [P("fortem", la("fortis, e") + ", masculin ou féminin", "As"), P("forti", la("fortis, e") + ", les trois genres", "Ds Bs"), P("forte", la("fortis, e") + ", neutre", "Ns Vs As"),
     P("fortia", la("fortis, e") + ", neutre", "Np Vp Ap"), P("fortium", la("fortis, e") + ", les trois genres", "Gp"), P("fortis", la("fortis, e") + ", au masculin", "Ns Vs Gs"),
     P("omnes", la("omnis, e") + ", au féminin", "Np Vp Ap"), P("omnia", la("omnis, e") + ", neutre", "Np Vp Ap"), P("ingentibus", la("ingens, ingentis") + ", les trois genres", "Dp Bp")],
    `L'ablatif singulier en ${la("-i")} distingue ces adjectifs des noms comme ${la("civis")} (ablatif ${la("cive")}).`));

  /* ---------- Pronom relatif (c10) ---------- */
  remplacer("c10", "Décliner le relatif", cas("Reconnaître les cas du relatif",
    `Formes de ${la("qui, quae, quod")}. Le relatif n'a pas de vocatif ; le genre est indiqué quand il change la réponse.`,
    [P("quem", "masculin", "As"), P("quas", "féminin", "Ap"), P("quae", "au neutre", "Np Ap"), P("cuius", "les trois genres", "Gs"), P("cui", "les trois genres", "Ds"),
     P("quibus", "les trois genres", "Dp Bp"), P("qua", "féminin", "Bs"), P("quarum", "féminin", "Gp"), P("quod", "neutre", "Ns As")]));

  /* ---------- Quatrième et cinquième déclinaisons (c12) ---------- */
  remplacer("c12", "Décliner exercitus", cas("Reconnaître les cas de exercitus",
    `Sur le modèle de ${la("manus")}. Une des formes a six analyses possibles.`,
    ["exercitum", "exercitui", "exercitu", "exercituum", "exercitibus", "exercitus"].map(f => F(f, "manus", "exercitus, us, m : l'armée", "exercit"))));
  remplacer("c12", "Mettre au cas demandé (4e déclinaison)", cas("Reconnaître les cas : noms mêlés (4e déclinaison)", "",
    [F("genuum", "cornu", "genu, us, n : le genou", "gen"), F("impetui", "manus", "impetus, us, m : l'assaut", "impet"), F("portus", "manus", "portus, us, m : le port", "port"),
     F("genua", "cornu", "genu, us, n : le genou", "gen"), F("fructibus", "manus", "fructus, us, m : le fruit", "fruct"), F("gelu", "cornu", "gelu, us, n : le gel", "gel")]));
  remplacer("c12", "Décliner dies", cas("Reconnaître les cas de dies",
    `Sur le modèle de ${la("res")}. Le radical est ${la("di-")}.`,
    ["diem", "diei", "die", "dierum", "diebus", "dies"].map(f => F(f, "res", "dies, diei, m : le jour", "di"))));
  remplacer("c12", "Mettre au cas demandé (5e déclinaison)", cas("Reconnaître les cas : noms mêlés (5e déclinaison)", "",
    [F("fidem", "res", "fides, fidei, f : la confiance", "fid"), F("speciei", "res", "species, speciei, f : l'aspect", "speci"), F("rebus", "res", "res, rei, f : l'affaire"),
     F("acies", "res", "acies, aciei, f : la ligne de bataille", "aci"), F("spe", "res", "spes, spei, f : l'espoir", "sp"), F("rerum", "res", "res, rei, f : l'affaire")]));

  /* ============================================================
     CONJUGAISONS
     ============================================================ */
  const LAUDO = "laudo, as, are, avi, atum : louer", HABEO = "habeo, es, ere, habui, habitum : avoir", MITTO = "mitto, is, ere, misi, missum : envoyer",
    FACIO = "facio, is, ere, feci, factum : faire", VENIO = "venio, is, ire, veni, ventum : venir", SUMV = "sum, es, esse, fui : être",
    DUCO = "duco, is, ere, duxi, ductum : conduire", VIDEO = "video, es, ere, vidi, visum : voir", DO = "do, das, dare, dedi, datum : donner",
    VINCO = "vinco, is, ere, vici, victum : vaincre", PUGNO = "pugno, as, are, avi, atum : combattre";
  const tp = v => VERBES[v].tp + " : " + VERBES[v].fr;

  /* ---------- Présent, sum (c5) ---------- */
  remplacer("c5", "Conjuguer au présent actif", verbes(1, "Reconnaître les personnes du présent",
    "Toutes ces formes sont au présent de l'indicatif actif : indique la personne. Pense au verbe modèle de la même conjugaison.", { voix: false },
    [V("laudas", LAUDO, "present a 2s"), V("laudant", LAUDO, "present a 3p"), V("habemus", HABEO, "present a 1p"), V("mittit", MITTO, "present a 3s"),
     V("mittunt", MITTO, "present a 3p"), V("faciunt", FACIO, "present a 3p"), V("venitis", VENIO, "present a 2p"), V("habeo", HABEO, "present a 1s")]));
  remplacer("c5", "De l'actif au passif", verbes(2, "Reconnaître et traduire : actif ou passif",
    "Formes du présent de l'indicatif : indique la voix et la personne, puis traduis.", {},
    [V("amatur", tp("amo"), "present p 3s", "il est aimé"), V("monentur", tp("moneo"), "present p 3p", "ils sont avertis"), V("legeris", tp("lego"), "present p 2s", "tu es lu"),
     V("capimur", tp("capio"), "present p 1p", "nous sommes pris"), V("audimini", tp("audio"), "present p 2p", "vous êtes entendus"), V("laudor", LAUDO, "present p 1s", "je suis loué"),
     V("mittunt", MITTO, "present a 3p", "ils envoient"), V("habet", HABEO, "present a 3s", "il a")]));
  remplacer("c5", "Sum et compagnie", verbes(2, "Reconnaître et traduire : sum et ses composés",
    "Indique la personne, puis traduis en français.", { voix: false },
    [V("sumus", SUMV, "present a 1p", "nous sommes"), V("sunt", SUMV, "present a 3p", "ils sont"), V("estis", SUMV, "present a 2p", "vous êtes"),
     V("potes", "possum, potes, posse, potui : pouvoir", "present a 2s", "tu peux"), V("possunt", "possum, potes, posse, potui : pouvoir", "present a 3p", "ils peuvent"),
     V("abest", "absum, abes, abesse, afui : être absent", "present a 3s", "il est absent"), V("prodes", "prosum, prodes, prodesse, profui : être utile", "present a 2s", "tu es utile"),
     V("adsumus", "adsum, ades, adesse, adfui : être présent", "present a 1p", "nous sommes présents|nous sommes là")]));

  /* ---------- Imparfait et futur (c8) ---------- */
  remplacer("c8", "Former l'imparfait", verbes(1, "Reconnaître l'imparfait",
    `Repère le suffixe ${la("-ba-")} : indique le temps, la voix et la personne de chaque forme.`, { temps: ["present", "imparfait"] },
    [V("amabant", tp("amo"), "imparfait a 3p"), V("monebamus", tp("moneo"), "imparfait a 1p"), V("legebas", tp("lego"), "imparfait a 2s"), V("capiebatur", tp("capio"), "imparfait p 3s"),
     V("audiebantur", tp("audio"), "imparfait p 3p"), V("pugnabat", PUGNO, "imparfait a 3s"), V("amant", tp("amo"), "present a 3p"), V("monetur", tp("moneo"), "present p 3s")]));
  remplacer("c8", "Former le futur", verbes(2, "Reconnaître et traduire : présent, imparfait, futur",
    `Futur en ${la("-bo, -bis")} pour les 1re et 2e conjugaisons, en ${la("-am, -es")} pour les autres. Analyse, puis traduis.`, { temps: ["present", "imparfait", "futur"] },
    [V("amabis", tp("amo"), "futur a 2s", "tu aimeras"), V("monebunt", tp("moneo"), "futur a 3p", "ils avertiront"), V("legam", tp("lego"), "futur a 1s", "je lirai"),
     V("legent", tp("lego"), "futur a 3p", "ils liront"), V("capiar", tp("capio"), "futur p 1s", "je serai pris"), V("audientur", tp("audio"), "futur p 3p", "ils seront entendus"),
     V("dabit", DO, "futur a 3s", "il donnera"), V("mittet", MITTO, "futur a 3s", "il enverra"), V("monebant", tp("moneo"), "imparfait a 3p", "ils avertissaient"),
     V("legunt", tp("lego"), "present a 3p", "ils lisent")],
    `Ne confonds pas ${la("monebunt")} (futur) et ${la("monebant")} (imparfait), ni ${la("legent")} (futur) et ${la("legunt")} (présent).`));

  /* ---------- Temps du parfait, actif (c11) ---------- */
  remplacer("c11", "Conjuguer au parfait", verbes(2, "Reconnaître et traduire le parfait",
    "Le parfait se traduit par le passé composé ou le passé simple. Toutes les formes sont à l'actif.", { temps: ["present", "imparfait", "parfait"], voix: false },
    [V("duxisti", DUCO, "parfait a 2s", "tu as conduit|tu conduisis"), V("vidistis", VIDEO, "parfait a 2p", "vous avez vu|vous vîtes"), V("dederunt", DO, "parfait a 3p", "ils ont donné|ils donnèrent"),
     V("habuimus", HABEO, "parfait a 1p", "nous avons eu|nous eûmes"), V("vicit", VINCO, "parfait a 3s", "il a vaincu|il vainquit"), V("fuerunt", SUMV, "parfait a 3p", "ils ont été|ils furent"),
     V("ducit", DUCO, "present a 3s", "il conduit"), V("videbat", VIDEO, "imparfait a 3s", "il voyait")]));
  remplacer("c11", "Conjuguer au plus-que-parfait et au futur antérieur", verbes(2, "Reconnaître et traduire : parfait, plus-que-parfait, futur antérieur",
    "Trois temps bâtis sur le radical du parfait. Toutes les formes sont à l'actif.", { temps: ["parfait", "pqp", "futant"], voix: false },
    [V("vicerant", VINCO, "pqp a 3p", "ils avaient vaincu"), V("ceperamus", tp("capio"), "pqp a 1p", "nous avions pris"), V("pugnaveras", PUGNO, "pqp a 2s", "tu avais combattu"),
     V("venero", VENIO, "futant a 1s", "je serai venu"), V("audiveritis", tp("audio"), "futant a 2p", "vous aurez entendu"), V("fuerit", SUMV, "futant a 3s", "il aura été"),
     V("cepit", tp("capio"), "parfait a 3s", "il a pris|il prit"), V("fuerant", SUMV, "pqp a 3p", "ils avaient été")]));

  /* ---------- Temps du parfait, passif (c21) ---------- */
  remplacer("c21", "Former le passif des temps du parfait", verbes(2, "Reconnaître et traduire le passif des temps du parfait",
    `Deux mots : le participe, accordé avec le sujet, puis l'auxiliaire ${la("sum")}. Analyse, puis traduis.`, { temps: ["parfait", "pqp", "futant"] },
    [V("captus est", tp("capio"), "parfait p 3s", "il a été pris|il fut pris"), V("capta est", tp("capio"), "parfait p 3s", "elle a été prise|elle fut prise"),
     V("capti sunt", tp("capio"), "parfait p 3p", "ils ont été pris|ils furent pris"), V("missae sunt", MITTO, "parfait p 3p", "elles ont été envoyées|elles furent envoyées"),
     V("deleta erat", "deleo, es, ere, delevi, deletum : détruire", "pqp p 3s", "elle avait été détruite"), V("visum est", VIDEO, "parfait p 3s", "il a été vu|il fut vu|cela a été vu|cela fut vu"),
     V("victi sunt", VINCO, "parfait p 3p", "ils ont été vaincus|ils furent vaincus"), V("missus erit", MITTO, "futant p 3s", "il aura été envoyé"), V("cepit", tp("capio"), "parfait a 3s", "il a pris|il prit")],
    `${la("captus est")} ne signifie pas « il est pris » : l'auxiliaire au présent donne un <b>parfait</b>, « il a été pris ».`));

  /* ---------- Verbes irréguliers (c24) ---------- */
  const EO = "eo, is, ire, ii (ivi), itum : aller";
  remplacer("c24", "Conjuguer eo et ses composés", verbes(2, "Reconnaître et traduire eo et ses composés", "", { temps: ["present", "imparfait", "futur", "parfait"], voix: false },
    [V("eunt", EO, "present a 3p", "ils vont"), V("it", EO, "present a 3s", "il va"), V("ibat", EO, "imparfait a 3s", "il allait"), V("ibo", EO, "futur a 1s", "j'irai"),
     V("ibunt", EO, "futur a 3p", "ils iront"), V("redit", "redeo, is, ire, redii, reditum : revenir", "present a 3s", "il revient"),
     V("exeunt", "exeo, is, ire, exii, exitum : sortir", "present a 3p", "ils sortent"), V("transiit", "transeo, is, ire, transii, transitum : traverser", "parfait a 3s", "il a traversé|il traversa")]));
  const VOLO = "volo, vis, velle, volui : vouloir", FERO = "fero, fers, ferre, tuli, latum : porter";
  remplacer("c24", "Conjuguer fero, volo, nolo, malo", verbes(2, "Reconnaître et traduire fero, volo, nolo, malo", "", { temps: ["present", "parfait"] },
    [V("vult", VOLO, "present a 3s", "il veut"), V("vis", VOLO, "present a 2s", "tu veux"), V("volunt", VOLO, "present a 3p", "ils veulent"),
     V("nolumus", "nolo, non vis, nolle, nolui : ne pas vouloir", "present a 1p", "nous ne voulons pas|nous refusons"), V("mavult", "malo, mavis, malle, malui : préférer", "present a 3s", "il préfère|il aime mieux"),
     V("fers", FERO, "present a 2s", "tu portes"), V("fertur", FERO, "present p 3s", "il est porté"), V("tulit", FERO, "parfait a 3s", "il a porté|il porta")]));

  /* ---------- Impératif (c26) ---------- */
  const SCRIBO = "scribo, is, ere, scripsi, scriptum : écrire";
  remplacer("c26", "Former l'impératif", verbes(2, "Reconnaître et traduire l'impératif",
    "Indicatif ou impératif ? Toutes les formes sont au présent actif. Indique le mode et la personne, puis traduis.", { modes: ["ind", "imp"], voix: false },
    [V("lauda", LAUDO, "present a 2s imp", "loue"), V("videte", VIDEO, "present a 2p imp", "voyez"), V("scribe", SCRIBO, "present a 2s imp", "écris"), V("scribite", SCRIBO, "present a 2p imp", "écrivez"),
     V("scribitis", SCRIBO, "present a 2p ind", "vous écrivez"), V("venite", VENIO, "present a 2p imp", "venez"), V("dic", "dico, is, ere, dixi, dictum : dire", "present a 2s imp", "dis"),
     V("fac", FACIO, "present a 2s imp", "fais"), V("ite", EO, "present a 2p imp", "allez"), V("laudas", LAUDO, "present a 2s ind", "tu loues")]));

  /* ---------- Subjonctif (c25) ---------- */
  remplacer("c25", "Former le subjonctif", verbes(1, "Reconnaître le subjonctif",
    "Indicatif ou subjonctif ? Toutes les formes sont à l'actif. Indique le temps, le mode et la personne.", { temps: ["present", "imparfait", "futur", "pqp"], modes: ["ind", "subj"], voix: false },
    [V("amet", tp("amo"), "present a 3s subj"), V("amat", tp("amo"), "present a 3s ind"), V("legant", tp("lego"), "present a 3p subj"), V("legent", tp("lego"), "futur a 3p ind"),
     V("legam", tp("lego"), "futur a 1s ind; present a 1s subj", null, "Deux analyses sont possibles : seul le contexte tranche."), V("videamus", VIDEO, "present a 1p subj"),
     V("sit", SUMV, "present a 3s subj"), V("esset", SUMV, "imparfait a 3s subj"), V("caperent", tp("capio"), "imparfait a 3p subj"), V("amavisset", tp("amo"), "pqp a 3s subj")]));
})();

/* ============================================================
   DEVOIR DE MORPHOLOGIE — Terminale, les cinq déclinaisons.
   Sur le modèle du devoir « MORPHO D1-D2-D3 » : un vocabulaire
   (entrée du lexique), une forme latine, et l'analyse complète
   (tous les cas et nombres possibles).
   ============================================================ */
(function () {
  const la = s => `<i class="la">${s}</i>`;
  const CC = ["N", "V", "A", "G", "D", "B"], NOMC = ["nominatif", "vocatif", "accusatif", "génitif", "datif", "ablatif"];
  const casDe = (forme, modele, rad, nomSg) => formesPlates(decliner(modele, rad, nomSg)).map((x, j) => x === forme ? CC[j % 6] + (j < 6 ? "s" : "p") : null).filter(Boolean);
  const nomCode = c => NOMC[CC.indexOf(c[0])] + (c[1] === "s" ? " sg" : " pl");

  /* D("reges", "consul", "reg", "rex", "rex, regis, m", "le roi") */
  function D(forme, modele, rad, nomSg, entree, sens, expl) {
    const bons = casDe(forme, modele, rad, nomSg);
    if (!bons.length) console.error("Forme absente du modèle : " + forme);
    return { forme, mot: `(${entree} : ${sens})`, bons, modele, rad, nomSg, entree, sens,
      expl: "Réponse : " + bons.map(nomCode).join(", ") + "." + (expl ? " " + expl : "") };
  }

  /* Étape de saisie : écrire la forme demandée, à partir de l'entrée du lexique */
  function ecrire(items, codes) {
    return { t: "saisie", titre: "Écrire la forme demandée", intro: "Le lexique donne le mot ; écris la forme au cas et au nombre demandés. Pense au modèle de la même déclinaison.",
      items: items.map((it, k) => {
        const f = formesPlates(decliner(it.modele, it.rad, it.nomSg)), c = codes[k], j = CC.indexOf(c[0]) + (c[1] === "p" ? 6 : 0);
        return { q: `${la(it.entree)} (${it.sens}) : ${NOMC[CC.indexOf(c[0])]} ${c[1] === "s" ? "singulier" : "pluriel"}`, r: f[j] };
      }) };
  }

  function entrainement(id, borne, titre, resume, intro, items, codes) {
    return { id, borne, genre: "Morphologie,", titre, resume, etapes: [
      { t: "analyse", titre: "Analyse morphologique", intro, items },
      ecrire(items.filter((x, k) => k % 3 === 1 && !/^spes/.test(x.entree)).slice(0, 6), codes)
    ] };
  }
  const INTRO = "Comme au devoir : pour chaque forme, le vocabulaire est donné entre parenthèses. Coche <b>toutes</b> les analyses possibles (cas et nombre). Une même forme a souvent plusieurs analyses.";

  /* ---------- Fiche : les cinq déclinaisons et la méthode ---------- */
  const tab = (m, o) => tDecl(m, o);
  const fiche = {
    id: "c79", borne: "Fiche", genre: "Morphologie,", titre: "Les cinq déclinaisons : la méthode du devoir", resume: "Reconnaître le modèle, repérer la désinence, donner toutes les analyses",
    etapes: [
      { t: "lecon", titre: "Le devoir, exercice par exercice", texte: `<p>Le devoir de morphologie donne un tableau en trois colonnes : le <strong>vocabulaire</strong> (l'entrée du lexique), la <strong>forme latine</strong>, et l'<strong>analyse</strong> que tu dois écrire. Tu dois donner <strong>toutes</strong> les analyses possibles : cas et nombre.</p>
<aside class="retenir"><h4>La méthode en quatre temps</h4><ol>
<li><strong>Le génitif singulier</strong> donne la déclinaison : <i class="la">-ae</i> (1re), <i class="la">-i</i> (2e), <i class="la">-is</i> (3e), <i class="la">-us</i> (4e), <i class="la">-ei</i> (5e). Il est toujours dans l'entrée du lexique.</li>
<li><strong>Le radical</strong> : retire la désinence du génitif singulier. <i class="la">regis</i> → radical <i class="la">reg-</i>. Le nominatif n'est pas un bon guide : <i class="la">rex</i>, <i class="la">regis</i>.</li>
<li><strong>La désinence</strong> : isole ce qui reste dans la forme donnée, puis cherche-la dans le tableau de la déclinaison.</li>
<li><strong>Toutes les analyses</strong> : parcours le tableau et note chaque case où la désinence apparaît. Compte le <strong>genre</strong> pour le neutre.</li></ol></aside>
<aside class="retenir"><h4>Les formes qui reviennent</h4><ul>
<li>Le <strong>neutre</strong> a toujours le même nominatif, vocatif et accusatif ; au pluriel, ces trois cas finissent par <i class="la">-a</i> (ou <i class="la">-ia</i>).</li>
<li>Le <strong>vocatif</strong> est identique au nominatif, sauf pour les noms en <i class="la">-us</i> de la 2e déclinaison : <i class="la">domine</i>.</li>
<li>Le <strong>datif et l'ablatif pluriel</strong> sont toujours identiques.</li>
<li>Au <strong>génitif pluriel</strong> de la 3e : <i class="la">-um</i> ou <i class="la">-ium</i> ; c'est le tableau du modèle qui décide.</li></ul></aside>` },
      { t: "lecon", titre: "Les trois premières déclinaisons", texte: `<p>Les cas sont présentés dans l'ordre du cours : nominatif, vocatif, accusatif, génitif, datif, ablatif.</p>
${tab("rosa")}${tab("dominus")}${tab("puer")}${tab("templum")}
<h3>La troisième déclinaison</h3>
<p>Trois modèles pour le masculin et le féminin : les noms qui ont <strong>une syllabe de plus au génitif</strong> (<i class="la">consul, consulis</i>), ceux qui ont <strong>le même nombre de syllabes</strong> (<i class="la">civis, civis</i>), et ceux dont le radical se termine par <strong>deux consonnes</strong> (<i class="la">urbs, urbis</i>) : ces deux derniers font le génitif pluriel en <i class="la">-ium</i>.</p>
${tab("consul")}${tab("civis")}${tab("urbs")}
<p><strong>Les neutres</strong> : <i class="la">corpus, corporis</i> (génitif pluriel en <i class="la">-um</i>) ; <i class="la">mare, maris</i> et <i class="la">animal, animalis</i> (ablatif singulier en <i class="la">-i</i>, nominatif pluriel en <i class="la">-ia</i>, génitif pluriel en <i class="la">-ium</i>).</p>
${tab("corpus")}${tab("mare")}${tab("animal")}` },
      { t: "lecon", titre: "Les quatrième et cinquième déclinaisons", texte: `${tab("manus")}${tab("cornu")}${tab("res")}` }
    ] };

  const R = (f, rad, ns, e, s, x) => D(f, "consul", rad, ns, e, s, x);
  const M = (f, rad, e, s, x) => D(f, "manus", rad, null, e, s, x);
  const Rs = (f, rad, e, s, x) => D(f, "res", rad, null, e, s, x);
  /* Les trois entraînements suivants : vocabulaire des Tristes, formes régulières */
  const Ro = (f, rad, e, s) => D(f, "rosa", rad, null, e, s), Do = (f, rad, e, s) => D(f, "dominus", rad, null, e, s), Pu = (f, rad, ns, e, s) => D(f, "puer", rad, ns, e, s);
  const Te = (f, rad, e, s) => D(f, "templum", rad, null, e, s), Co = (f, rad, ns, e, s) => D(f, "corpus", rad, ns, e, s), Ci = (f, rad, e, s) => D(f, "civis", rad, null, e, s);
  const Ur = (f, rad, ns, e, s) => D(f, "urbs", rad, ns, e, s);

  /* ---------- Entraînement 1 : D1, D2, D3 (vocabulaire des Tristes) ---------- */
  const sA = [
    Ro("culpae", "culp", "culpa, ae, f", "la faute"), Ro("iram", "ir", "ira, ae, f", "la colère"), Ro("fortunam", "fortun", "fortuna, ae, f", "le sort, la fortune"),
    Ro("undis", "und", "unda, ae, f", "la vague, l'onde"), Ro("uiarum", "ui", "uia, ae, f", "le chemin, la route"), Ro("terrae", "terr", "terra, ae, f", "la terre"),
    Te("telo", "tel", "telum, i, n", "le trait, l'arme de jet"), Te("fato", "fat", "fatum, i, n", "le destin"), Te("uotorum", "uot", "uotum, i, n", "le vœu"),
    Te("malis", "mal", "malum, i, n", "le malheur, le mal"), Do("equos", "equ", "equus, i, m", "le cheval"), Do("amici", "amic", "amicus, i, m", "l'ami"),
    Do("populo", "popul", "populus, i, m", "le peuple"), R("patrem", "patr", "pater", "pater, tris, m", "le père"), R("fratri", "fratr", "frater", "frater, tris, m", "le frère"),
    Ur("mortis", "mort", "mors", "mors, mortis, f", "la mort"), Co("nominis", "nomin", "nomen", "nomen, inis, n", "le nom"), Co("funera", "funer", "funus", "funus, eris, n", "la mort, les funérailles"),
    Ro("turbae", "turb", "turba, ae, f", "la foule"), Ci("sodalium", "sodal", "sodalis, is, m", "le compagnon, l'ami intime")
  ];
  const cA = ["Ds", "Gp", "As", "Bp", "Np", "Gs"];

  /* ---------- Entraînement 2 : D1, D2, D3 ---------- */
  const s2 = [
    Ro("fugae", "fug", "fuga, ae, f", "la fuite, l'exil"), Te("exilio", "exili", "exilium, ii, n", "l'exil"), Ro("poenarum", "poen", "poena, ae, f", "le châtiment"),
    R("patri", "patr", "pater", "pater, tris, m", "le père"), R("dolores", "dolor", "dolor", "dolor, oris, m", "la douleur"), Ro("lacrimis", "lacrim", "lacrima, ae, f", "la larme"),
    Do("uentorum", "uent", "uentus, i, m", "le vent"), Ci("hostes", "host", "hostis, is, m", "l'ennemi"), Ci("naues", "nau", "nauis, is, f", "le navire"),
    Ur("mortem", "mort", "mors", "mors, mortis, f", "la mort"), Co("carmina", "carmin", "carmen", "carmen, inis, n", "le poème"), Co("uulneribus", "uulner", "uulnus", "uulnus, eris, n", "la blessure"),
    Te("bello", "bell", "bellum, i, n", "la guerre"), Do("natum", "nat", "natus, i, m", "le fils"), Pu("puero", "puer", "puer", "puer, pueri, m", "l'enfant"),
    Pu("libri", "libr", "liber", "liber, libri, m", "le livre"), Pu("uiri", "uir", "uir", "uir, uiri, m", "l'homme, le mari"), R("Caesaris", "Caesar", "Caesar", "Caesar, aris, m", "César"),
    Co("crimina", "crimin", "crimen", "crimen, inis, n", "l'accusation"), Ur("artes", "art", "ars", "ars, artis, f", "l'art")
  ];
  const c2 = ["Gp", "Ds", "Bp", "As", "Np", "Gs"];

  /* ---------- Entraînement 3 : D1 à D5 ---------- */
  const s3 = [
    M("luctus", "luct", "luctus, us, m", "le deuil"), M("metui", "met", "metus, us, m", "la crainte"), M("casum", "cas", "casus, us, m", "le malheur, la chute"),
    M("fluctibus", "fluct", "fluctus, us, m", "la vague"), M("uersuum", "uers", "uersus, us, m", "le vers"), M("uultu", "uult", "uultus, us, m", "le visage"),
    M("manibus", "man", "manus, us, f", "la main"), Rs("diei", "di", "dies, ei, m ou f", "le jour"), Rs("diebus", "di", "dies, ei, m ou f", "le jour"),
    Rs("fidem", "fid", "fides, ei, f", "la fidélité, la confiance"), Rs("spem", "sp", "spes, spei, f", "l'espoir"), Rs("glaciem", "glaci", "glacies, ei, f", "la glace"),
    Co("frigoris", "frigor", "frigus", "frigus, oris, n", "le froid"), Co("litora", "litor", "litus", "litus, oris, n", "le rivage"), Co("tempori", "tempor", "tempus", "tempus, oris, n", "le temps"),
    Ur("noctis", "noct", "nox", "nox, noctis, f", "la nuit"), Ci("ratibus", "rat", "ratis, is, f", "le navire, le radeau"), Ro("patriae", "patri", "patria, ae, f", "la patrie"),
    Do("pontum", "pont", "pontus, i, m", "la mer, le Pont"), Pu("Histri", "Histr", "Hister", "Hister, tri, m", "l'Hister, le Danube")
  ];
  const c3 = ["Ns", "Gs", "Bs", "Dp", "Ap", "Gp"];

  /* ---------- Entraînement 4 : D1 à D5 ---------- */
  const s4 = [
    Ur("sortem", "sort", "sors", "sors, sortis, f", "le sort, le lot"), Ur("laudes", "laud", "laus", "laus, laudis, f", "la louange, la gloire"), R("fratres", "fratr", "frater", "frater, tris, m", "le frère"),
    R("matris", "matr", "mater", "mater, tris, f", "la mère"), R("honori", "honor", "honor", "honor, oris, m", "l'honneur"), R("amoribus", "amor", "amor", "amor, oris, m", "l'amour"),
    R("exulum", "exul", "exul", "exul, ulis, m", "l'exilé"), R("hominem", "homin", "homo", "homo, inis, m", "l'homme"), R("comitibus", "comit", "comes", "comes, itis, m ou f", "le compagnon"),
    R("uxores", "uxor", "uxor", "uxor, oris, f", "l'épouse"), Co("pectora", "pector", "pectus", "pectus, oris, n", "la poitrine, le cœur"), Co("sidera", "sider", "sidus", "sidus, eris, n", "l'astre"),
    Co("operi", "oper", "opus", "opus, eris, n", "l'œuvre"), Co("numina", "numin", "numen", "numen, inis, n", "la divinité"), Co("lumine", "lumin", "lumen", "lumen, inis, n", "la lumière"),
    Do("oculis", "ocul", "oculus, i, m", "l'œil"), Te("uerba", "uerb", "uerbum, i, n", "le mot, la parole"), Te("caelo", "cael", "caelum, i, n", "le ciel"),
    Ro("Musae", "Mus", "Musa, ae, f", "la Muse"), Ro("poetae", "poet", "poeta, ae, m", "le poète")
  ];
  const c4 = ["Ap", "Ds", "Bp", "Gs", "Np", "Dp"];

  PARTIE_BILAN.push({ id: "p10", devoir: "Terminale", titre: "Morphologie : les cinq déclinaisons (TLLCAL1, 2026-2027)",
    sous: "Spécialité. Le devoir de morphologie donne un nom du lexique et une forme latine : tu analyses la forme, avec tous les cas et nombres possibles. Une fiche de méthode, puis quatre entraînements construits avec le vocabulaire des Tristes : deux sujets sur les trois premières déclinaisons (D1 à D3), puis deux sujets sur les cinq déclinaisons.",
    chapitres: [
      fiche,
      entrainement("c80", "Sujet A", "Entraînement 1 : 1re, 2e et 3e déclinaisons", "Le format du devoir, avec le vocabulaire des Tristes", INTRO, sA, cA),
      entrainement("c81", "Sujet B", "Entraînement 2 : 1re, 2e et 3e déclinaisons", "Un second sujet, avec le vocabulaire des Tristes", INTRO, s2, c2),
      entrainement("c82", "Sujet C", "Entraînement 3 : les cinq déclinaisons", "Les 4e et 5e déclinaisons s'ajoutent aux trois premières, avec le vocabulaire des Tristes", INTRO, s3, c3),
      entrainement("c83", "Sujet D", "Entraînement 4 : les cinq déclinaisons (suite)", "Encore des noms du vocabulaire des Tristes, sur les cinq déclinaisons", INTRO, s4, c4)
    ] });
})();

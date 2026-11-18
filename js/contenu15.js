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
<aside class="attention"><h4>Les formes qui reviennent</h4><ul>
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
      { t: "lecon", titre: "Les quatrième et cinquième déclinaisons", texte: `${tab("manus")}${tab("cornu")}${tab("res")}
<aside class="attention"><h4>Pièges à connaître</h4><ul>
<li><i class="la">manus</i> : la même forme sert pour le nominatif, le vocatif et le génitif singulier, et pour le nominatif, le vocatif et l'accusatif pluriel.</li>
<li><i class="la">res, rei</i> : le génitif et le datif singulier sont identiques (<i class="la">rei</i>). Un nom comme <i class="la">dies, diei</i> est masculin (parfois féminin).</li>
<li><i class="la">cornu</i> : un neutre de la 4e, avec un seul <i class="la">-u</i> au nominatif, vocatif, accusatif, datif et ablatif singulier.</li></ul></aside>` }
    ] };

  /* ---------- Sujet A : le sujet du devoir, tel que posé ---------- */
  const R = (f, rad, ns, e, s, x) => D(f, "consul", rad, ns, e, s, x);
  const sA = [
    R("reges", "reg", "rex", "rex, regis, m", "le roi"), D("ancillae", "rosa", "ancill", null, "ancilla, ae, f", "la servante"), D("agris", "puer", "agr", "ager", "ager, agri, m", "le champ"),
    R("matrem", "matr", "mater", "mater, matris, f", "la mère"), D("templo", "templum", "templ", null, "templum, i, n", "le temple"), D("nomini", "corpus", "nomin", "nomen", "nomen, nominis, n", "le nom"),
    D("poetam", "rosa", "poet", null, "poeta, ae, m", "le poète"), D("civium", "civis", "civ", null, "civis, is, m", "le citoyen"), D("bella", "templum", "bell", null, "bellum, i, n", "la guerre"),
    D("urbe", "urbs", "urb", "urbs", "urbs, urbis, f", "la ville"), D("dominos", "dominus", "domin", null, "dominus, i, m", "le maître"), D("capite", "corpus", "capit", "caput", "caput, capitis, n", "la tête"),
    D("viis", "rosa", "vi", null, "via, ae, f", "la route"), R("consulum", "consul", "consul", "consul, consulis, m", "le consul"), R("militibus", "milit", "miles", "miles, militis, m", "le soldat"),
    D("rosarum", "rosa", "ros", null, "rosa, ae, f", "la rose"), D("puero", "puer", "puer", "puer", "puer, pueri, m", "l'enfant"), R("leges", "leg", "lex", "lex, legis, f", "la loi"),
    D("anno", "dominus", "ann", null, "annus, i, m", "l'année"), D("flumina", "corpus", "flumin", "flumen", "flumen, fluminis, n", "le fleuve")
  ];
  const cA = ["Ns", "As", "Bs", "Dp", "Gp", "Np"];

  /* ---------- Entraînement 2 : D1, D2, D3 ---------- */
  const s2 = [
    D("ancillarum", "rosa", "ancill", null, "ancilla, ae, f", "la servante"), D("agros", "puer", "agr", "ager", "ager, agri, m", "le champ"), R("matri", "matr", "mater", "mater, matris, f", "la mère"),
    D("nominibus", "corpus", "nomin", "nomen", "nomen, nominis, n", "le nom"), D("templi", "templum", "templ", null, "templum, i, n", "le temple"), D("poetae", "rosa", "poet", null, "poeta, ae, m", "le poète"),
    D("civibus", "civis", "civ", null, "civis, is, m", "le citoyen"), D("bello", "templum", "bell", null, "bellum, i, n", "la guerre"), D("urbium", "urbs", "urb", "urbs", "urbs, urbis, f", "la ville"),
    D("domine", "dominus", "domin", null, "dominus, i, m", "le maître"), D("capita", "corpus", "capit", "caput", "caput, capitis, n", "la tête"), D("viam", "rosa", "vi", null, "via, ae, f", "la route"),
    R("consulis", "consul", "consul", "consul, consulis, m", "le consul"), R("milites", "milit", "miles", "miles, militis, m", "le soldat"), D("rosis", "rosa", "ros", null, "rosa, ae, f", "la rose"),
    D("pueri", "puer", "puer", "puer", "puer, pueri, m", "l'enfant"), R("legem", "leg", "lex", "lex, legis, f", "la loi"), D("anni", "dominus", "ann", null, "annus, i, m", "l'année"),
    D("flumine", "corpus", "flumin", "flumen", "flumen, fluminis, n", "le fleuve"), R("regum", "reg", "rex", "rex, regis, m", "le roi")
  ];
  const c2 = ["Gp", "Ds", "Bp", "As", "Np", "Gs"];

  /* ---------- Entraînement 3 : D1 à D5 ---------- */
  const M = (f, rad, e, s, x) => D(f, "manus", rad, null, e, s, x);
  const Rs = (f, rad, e, s, x) => D(f, "res", rad, null, e, s, x);
  const s3 = [
    M("manus", "man", "manus, us, f", "la main"), Rs("rei", "r", "res, rei, f", "la chose"), M("exercitui", "exercit", "exercitus, us, m", "l'armée"),
    Rs("dies", "di", "dies, diei, m", "le jour"), D("cornua", "cornu", "corn", null, "cornu, us, n", "la corne"), Rs("fidem", "fid", "fides, fidei, f", "la fidélité, la confiance"),
    D("mare", "mare", "mar", null, "mare, maris, n", "la mer"), D("maria", "mare", "mar", null, "mare, maris, n", "la mer"), D("animalia", "animal", "animal", "animal", "animal, animalis, n", "l'animal"),
    Rs("diebus", "di", "dies, diei, m", "le jour"), M("portus", "port", "portus, us, m", "le port"), Rs("rerum", "r", "res, rei, f", "la chose"),
    D("cornibus", "cornu", "corn", null, "cornu, us, n", "la corne"), D("noctem", "urbs", "noct", "nox", "nox, noctis, f", "la nuit"), D("nave", "civis", "nav", null, "navis, is, f", "le navire"),
    D("montium", "urbs", "mont", "mons", "mons, montis, m", "la montagne"), R("rege", "reg", "rex", "rex, regis, m", "le roi"), M("lacu", "lac", "lacus, us, m", "le lac"),
    Rs("aciei", "aci", "acies, ei, f", "la ligne de bataille"), D("domini", "dominus", "domin", null, "dominus, i, m", "le maître")
  ];
  const c3 = ["Ns", "Gs", "Bs", "Dp", "Ap", "Gp"];

  /* ---------- Entraînement 4 : D1 à D5, les pièges ---------- */
  const s4 = [
    D("nomina", "corpus", "nomin", "nomen", "nomen, nominis, n", "le nom"), D("corpori", "corpus", "corpor", "corpus", "corpus, corporis, n", "le corps"), D("tempora", "corpus", "tempor", "tempus", "tempus, temporis, n", "le temps"),
    D("itineris", "corpus", "itiner", "iter", "iter, itineris, n", "le chemin"), R("virtutes", "virtut", "virtus", "virtus, virtutis, f", "le courage"), R("patrum", "patr", "pater", "pater, patris, m", "le père"),
    M("fructus", "fruct", "fructus, us, m", "le fruit"), Rs("spei", "sp", "spes, ei, f", "l'espoir", "<i class=\"la\">spes</i> s'emploie surtout au singulier."), Rs("diei", "di", "dies, diei, m", "le jour"),
    D("maribus", "mare", "mar", null, "mare, maris, n", "la mer"), D("animali", "animal", "animal", "animal", "animal, animalis, n", "l'animal", "Les neutres en <i class=\"la\">-e</i>, <i class=\"la\">-al</i> font l'ablatif en <i class=\"la\">-i</i>."),
    D("cives", "civis", "civ", null, "civis, is, m", "le citoyen"), D("ancillis", "rosa", "ancill", null, "ancilla, ae, f", "la servante"), D("agrorum", "puer", "agr", "ager", "ager, agri, m", "le champ"),
    D("puerorum", "puer", "puer", "puer", "puer, pueri, m", "l'enfant"), D("librum", "puer", "libr", "liber", "liber, libri, m", "le livre"), D("templa", "templum", "templ", null, "templum, i, n", "le temple"),
    D("genu", "cornu", "gen", null, "genu, us, n", "le genou"), D("nocte", "urbs", "noct", "nox", "nox, noctis, f", "la nuit"), D("pedes", "civis", "ped", null, "pes, pedis, m", "le pied", "Un nom en <i class=\"la\">-es</i> peut être un nominatif, un vocatif et un accusatif pluriel.")
  ];
  const c4 = ["Ap", "Ds", "Bp", "Gs", "Np", "Dp"];

  PARTIE_BILAN.push({ id: "p10", devoir: "Terminale", titre: "Morphologie : les cinq déclinaisons (TLLCAL1, 2026-2027)",
    sous: "Spécialité. Le devoir de morphologie donne un nom du lexique et une forme latine : tu analyses la forme, avec tous les cas et nombres possibles. Une fiche de méthode, puis quatre entraînements : le sujet du devoir (D1 à D3), un second sujet, puis deux sujets sur les cinq déclinaisons.",
    chapitres: [
      fiche,
      entrainement("c80", "Sujet A", "Entraînement 1 : le sujet A (1re, 2e et 3e déclinaisons)", "Le sujet du devoir, tel qu'il a été donné", INTRO, sA, cA),
      entrainement("c81", "Sujet B", "Entraînement 2 : 1re, 2e et 3e déclinaisons", "Un second sujet sur les trois premières déclinaisons", INTRO, s2, c2),
      entrainement("c82", "Sujet C", "Entraînement 3 : les cinq déclinaisons", "Les 4e et 5e déclinaisons s'ajoutent aux trois premières", INTRO, s3, c3),
      entrainement("c83", "Sujet D", "Entraînement 4 : les cinq déclinaisons, les pièges", "Neutres, ablatif en -i, génitif en -ium : les formes qui piègent", INTRO, s4, c4)
    ] });
})();

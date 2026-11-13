/* ============================================================
   FORMES LATINES — modèles de déclinaison et de conjugaison.
   Ordre des cas : Nominatif, Vocatif, Accusatif, Génitif, Datif, Ablatif.
   Dans les désinences, "=" signifie « forme du nominatif singulier ».
   ============================================================ */
const CAS = ["Nominatif", "Vocatif", "Accusatif", "Génitif", "Datif", "Ablatif"];
const CAS_ABR = ["Nom.", "Voc.", "Acc.", "Gén.", "Dat.", "Abl."];
const FONCTIONS = ["Sujet", "Apostrophe", "COD", "Complément du nom", "COI", "Complément circonstanciel"];

const MODELES = {
  rosa:    { decl: 1, nom: "rosa, ae, f", sens: "la rose", rad: "ros", sg: ["a", "a", "am", "ae", "ae", "a"], pl: ["ae", "ae", "as", "arum", "is", "is"] },
  dominus: { decl: 2, nom: "dominus, i, m", sens: "le maître", rad: "domin", sg: ["us", "e", "um", "i", "o", "o"], pl: ["i", "i", "os", "orum", "is", "is"] },
  puer:    { decl: 2, nom: "puer, pueri, m", sens: "l'enfant", rad: "puer", nomSg: "puer", sg: ["=", "=", "um", "i", "o", "o"], pl: ["i", "i", "os", "orum", "is", "is"] },
  templum: { decl: 2, nom: "templum, i, n", sens: "le temple", rad: "templ", sg: ["um", "um", "um", "i", "o", "o"], pl: ["a", "a", "a", "orum", "is", "is"] },
  consul:  { decl: 3, nom: "consul, consulis, m", sens: "le consul", rad: "consul", nomSg: "consul", sg: ["=", "=", "em", "is", "i", "e"], pl: ["es", "es", "es", "um", "ibus", "ibus"] },
  civis:   { decl: 3, nom: "civis, civis, m", sens: "le citoyen", rad: "civ", sg: ["is", "is", "em", "is", "i", "e"], pl: ["es", "es", "es", "ium", "ibus", "ibus"] },
  urbs:    { decl: 3, nom: "urbs, urbis, f", sens: "la ville", rad: "urb", nomSg: "urbs", sg: ["=", "=", "em", "is", "i", "e"], pl: ["es", "es", "es", "ium", "ibus", "ibus"] },
  corpus:  { decl: 3, nom: "corpus, corporis, n", sens: "le corps", rad: "corpor", nomSg: "corpus", sg: ["=", "=", "=", "is", "i", "e"], pl: ["a", "a", "a", "um", "ibus", "ibus"] },
  mare:    { decl: 3, nom: "mare, maris, n", sens: "la mer", rad: "mar", sg: ["e", "e", "e", "is", "i", "i"], pl: ["ia", "ia", "ia", "ium", "ibus", "ibus"] },
  animal:  { decl: 3, nom: "animal, animalis, n", sens: "l'animal", rad: "animal", nomSg: "animal", sg: ["=", "=", "=", "is", "i", "i"], pl: ["ia", "ia", "ia", "ium", "ibus", "ibus"] },
  manus:   { decl: 4, nom: "manus, us, f", sens: "la main", rad: "man", sg: ["us", "us", "um", "us", "ui", "u"], pl: ["us", "us", "us", "uum", "ibus", "ibus"] },
  cornu:   { decl: 4, nom: "cornu, us, n", sens: "la corne", rad: "corn", sg: ["u", "u", "u", "us", "u", "u"], pl: ["ua", "ua", "ua", "uum", "ibus", "ibus"] },
  res:     { decl: 5, nom: "res, rei, f", sens: "la chose", rad: "r", sg: ["es", "es", "em", "ei", "ei", "e"], pl: ["es", "es", "es", "erum", "ebus", "ebus"] }
};

/* Décline un nom sur un modèle : renvoie { sg:[[radical, désinence]×6], pl:[…] } */
function decliner(modele, rad, nomSg) {
  const m = MODELES[modele];
  rad = rad == null ? m.rad : rad;
  nomSg = nomSg || m.nomSg || null;
  const f = d => d === "=" ? [nomSg, ""] : [rad, d];
  return { sg: m.sg.map(f), pl: m.pl.map(f) };
}
const formesPlates = d => [...d.sg, ...d.pl].map(p => p[0] + p[1]);

function tDecl(modele, o = {}) {
  const m = MODELES[modele], d = decliner(modele, o.rad, o.nomSg);
  const c = p => `<td class="la">${p[0]}<b class="des">${p[1]}</b></td>`;
  return `<div class="tab-wrap"><table class="paradigme"><caption>${o.titre || `<i class="la">${o.nom || m.nom}</i> : ${o.sens || m.sens}`}</caption>
<thead><tr><th>Cas</th>${o.fonctions ? "<th>Fonction principale</th>" : ""}<th>Singulier</th><th>Pluriel</th></tr></thead><tbody>
${CAS.map((cas, k) => `<tr><th>${cas}</th>${o.fonctions ? `<td>${FONCTIONS[k]}</td>` : ""}${c(d.sg[k])}${c(d.pl[k])}</tr>`).join("")}</tbody></table></div>`;
}

/* Adjectif de la 1re classe : masculin sur dominus, féminin sur rosa, neutre sur templum */
function tAdj(rad = "bon", titre = '<i class="la">bonus, a, um</i> : bon') {
  const g = [decliner("dominus", rad), decliner("rosa", rad), decliner("templum", rad)];
  const c = p => `<td class="la">${p[0]}<b class="des">${p[1]}</b></td>`;
  return `<div class="tab-wrap"><table class="paradigme"><caption>${titre}</caption>
<thead><tr><th rowspan="2">Cas</th><th colspan="3">Singulier</th><th colspan="3">Pluriel</th></tr><tr><th>Masc.</th><th>Fém.</th><th>Neutre</th><th>Masc.</th><th>Fém.</th><th>Neutre</th></tr></thead><tbody>
${CAS.map((cas, k) => `<tr><th>${cas}</th>${g.map(x => c(x.sg[k])).join("")}${g.map(x => c(x.pl[k])).join("")}</tr>`).join("")}</tbody></table></div>`;
}

/* ---------- Conjugaison des cinq verbes modèles ---------- */
const PERS = ["1re sg.", "2e sg.", "3e sg.", "1re pl.", "2e pl.", "3e pl."];
const VERBES = {
  amo:   { tp: "amo, as, are, avi, atum", fr: "aimer", conj: "1re", impf: "ama", fut: "ama", futB: true, perf: "amav",
           pa: [["am", "o"], ["ama", "s"], ["ama", "t"], ["ama", "mus"], ["ama", "tis"], ["ama", "nt"]],
           pp: [["am", "or"], ["ama", "ris"], ["ama", "tur"], ["ama", "mur"], ["ama", "mini"], ["ama", "ntur"]] },
  moneo: { tp: "moneo, es, ere, monui, monitum", fr: "avertir", conj: "2e", impf: "mone", fut: "mone", futB: true, perf: "monu",
           pa: [["mone", "o"], ["mone", "s"], ["mone", "t"], ["mone", "mus"], ["mone", "tis"], ["mone", "nt"]],
           pp: [["mone", "or"], ["mone", "ris"], ["mone", "tur"], ["mone", "mur"], ["mone", "mini"], ["mone", "ntur"]] },
  lego:  { tp: "lego, is, ere, legi, lectum", fr: "lire", conj: "3e", impf: "lege", fut: "leg", perf: "leg",
           pa: [["leg", "o"], ["legi", "s"], ["legi", "t"], ["legi", "mus"], ["legi", "tis"], ["legu", "nt"]],
           pp: [["leg", "or"], ["lege", "ris"], ["legi", "tur"], ["legi", "mur"], ["legi", "mini"], ["legu", "ntur"]] },
  capio: { tp: "capio, is, ere, cepi, captum", fr: "prendre", conj: "3e mixte", impf: "capie", fut: "capi", perf: "cep",
           pa: [["capi", "o"], ["capi", "s"], ["capi", "t"], ["capi", "mus"], ["capi", "tis"], ["capiu", "nt"]],
           pp: [["capi", "or"], ["cape", "ris"], ["capi", "tur"], ["capi", "mur"], ["capi", "mini"], ["capiu", "ntur"]] },
  audio: { tp: "audio, is, ire, ivi, itum", fr: "entendre", conj: "4e", impf: "audie", fut: "audi", perf: "audiv",
           pa: [["audi", "o"], ["audi", "s"], ["audi", "t"], ["audi", "mus"], ["audi", "tis"], ["audiu", "nt"]],
           pp: [["audi", "or"], ["audi", "ris"], ["audi", "tur"], ["audi", "mur"], ["audi", "mini"], ["audiu", "ntur"]] }
};
const TEMPS = {
  present:  { nom: "Présent", voix: ["actif", "passif"] },
  imparfait:{ nom: "Imparfait", voix: ["actif", "passif"] },
  futur:    { nom: "Futur", voix: ["actif", "passif"] },
  parfait:  { nom: "Parfait", voix: ["actif"] },
  pqp:      { nom: "Plus-que-parfait", voix: ["actif"] },
  futant:   { nom: "Futur antérieur", voix: ["actif"] }
};
const D = {
  impfA: ["bam", "bas", "bat", "bamus", "batis", "bant"], impfP: ["bar", "baris", "batur", "bamur", "bamini", "bantur"],
  futBA: ["bo", "bis", "bit", "bimus", "bitis", "bunt"], futBP: ["bor", "beris", "bitur", "bimur", "bimini", "buntur"],
  futEA: ["am", "es", "et", "emus", "etis", "ent"], futEP: ["ar", "eris", "etur", "emur", "emini", "entur"],
  parf: ["i", "isti", "it", "imus", "istis", "erunt"], pqp: ["eram", "eras", "erat", "eramus", "eratis", "erant"],
  futant: ["ero", "eris", "erit", "erimus", "eritis", "erint"]
};
/* Renvoie les 6 formes [radical, désinence] d'un verbe modèle */
function conjuguer(verbe, temps, voix = "actif") {
  const v = VERBES[verbe], P = voix === "passif";
  if (temps === "present") return P ? v.pp : v.pa;
  if (temps === "imparfait") return (P ? D.impfP : D.impfA).map(d => [v.impf, d]);
  if (temps === "futur") return (v.futB ? (P ? D.futBP : D.futBA) : (P ? D.futEP : D.futEA)).map(d => [v.fut, d]);
  if (P) return null;
  return D[temps === "parfait" ? "parf" : temps].map(d => [v.perf, d]);
}
function tConj(temps, voix = "actif", verbes = Object.keys(VERBES), titre) {
  const cols = verbes.map(v => conjuguer(v, temps, voix));
  return `<div class="tab-wrap"><table class="paradigme"><caption>${titre || `${TEMPS[temps].nom} de l'indicatif ${voix}`}</caption>
<thead><tr><th>Personne</th>${verbes.map(v => `<th><i class="la">${v}</i><br><small>${VERBES[v].fr}</small></th>`).join("")}</tr></thead><tbody>
${PERS.map((p, k) => `<tr><th>${p}</th>${cols.map(c => `<td class="la">${c[k][0]}<b class="des">${c[k][1]}</b></td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
/* ---------- Traduction française des cinq verbes modèles (atelier, niveau 2) ---------- */
const FR_V = {
  amo:   { pres: ["aime", "aimes", "aime", "aimons", "aimez", "aiment"], ri: "aim", rf: "aimer", ps: ["aimai", "aimas", "aima", "aimâmes", "aimâtes", "aimèrent"], pp: "aimé" },
  moneo: { pres: ["avertis", "avertis", "avertit", "avertissons", "avertissez", "avertissent"], ri: "avertiss", rf: "avertir", ps: ["avertis", "avertis", "avertit", "avertîmes", "avertîtes", "avertirent"], pp: "averti" },
  lego:  { pres: ["lis", "lis", "lit", "lisons", "lisez", "lisent"], ri: "lis", rf: "lir", ps: ["lus", "lus", "lut", "lûmes", "lûtes", "lurent"], pp: "lu" },
  capio: { pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"], ri: "pren", rf: "prendr", ps: ["pris", "pris", "prit", "prîmes", "prîtes", "prirent"], pp: "pris" },
  audio: { pres: ["entends", "entends", "entend", "entendons", "entendez", "entendent"], ri: "entend", rf: "entendr", ps: ["entendis", "entendis", "entendit", "entendîmes", "entendîtes", "entendirent"], pp: "entendu" }
};
const FR_PRON = ["je", "tu", "il", "nous", "vous", "ils"];
const FR_IMPF = ["ais", "ais", "ait", "ions", "iez", "aient"], FR_FUT = ["ai", "as", "a", "ons", "ez", "ont"];
const FR_AVOIR = { present: ["ai", "as", "a", "avons", "avez", "ont"], imparfait: FR_IMPF.map(d => "av" + d), futur: FR_FUT.map(d => "aur" + d) };
const FR_ETRE = { present: ["suis", "es", "est", "sommes", "êtes", "sont"], imparfait: FR_IMPF.map(d => "ét" + d), futur: FR_FUT.map(d => "ser" + d) };
const frSujet = (p, reste) => (p === 0 && /^[aeiouéèêh]/i.test(reste) ? "j'" : FR_PRON[p] + " ") + reste;
/* Renvoie les traductions acceptées (la première est celle qu'on affiche) */
function traduireFr(verbe, temps, voix, p) {
  const f = FR_V[verbe], pl = p > 2;
  if (voix === "passif") return [frSujet(p, FR_ETRE[temps][p] + " " + f.pp + (pl && !/s$/.test(f.pp) ? "s" : ""))];
  if (temps === "present") return [frSujet(p, f.pres[p])];
  if (temps === "imparfait") return [frSujet(p, f.ri + FR_IMPF[p])];
  if (temps === "futur") return [frSujet(p, f.rf + FR_FUT[p])];
  if (temps === "parfait") return [frSujet(p, FR_AVOIR.present[p] + " " + f.pp), frSujet(p, f.ps[p])];
  return [frSujet(p, FR_AVOIR[temps === "pqp" ? "imparfait" : "futur"][p] + " " + f.pp)];
}
const SUM = ["sum", "es", "est", "sumus", "estis", "sunt"];

/* ---------- Noms pour l'atelier (modèle, radical, nominatif si besoin) ---------- */
const NOMS_ATELIER = [
  ["rosa", "stell", null, "stella, ae, f", "l'étoile"], ["rosa", "puell", null, "puella, ae, f", "la jeune fille"],
  ["rosa", "silv", null, "silva, ae, f", "la forêt"], ["rosa", "naut", null, "nauta, ae, m", "le marin"],
  ["rosa", "epistul", null, "epistula, ae, f", "la lettre"], ["rosa", "patri", null, "patria, ae, f", "la patrie"],
  ["dominus", "serv", null, "servus, i, m", "l'esclave"], ["dominus", "amic", null, "amicus, i, m", "l'ami"],
  ["dominus", "popul", null, "populus, i, m", "le peuple"], ["dominus", "hort", null, "hortus, i, m", "le jardin"],
  ["puer", "agr", "ager", "ager, agri, m", "le champ"], ["puer", "magistr", "magister", "magister, tri, m", "le maître"],
  ["templum", "bell", null, "bellum, i, n", "la guerre"], ["templum", "don", null, "donum, i, n", "le cadeau"],
  ["templum", "oppid", null, "oppidum, i, n", "la place forte"], ["templum", "pericul", null, "periculum, i, n", "le danger"],
  ["consul", "milit", "miles", "miles, militis, m", "le soldat"], ["consul", "reg", "rex", "rex, regis, m", "le roi"],
  ["consul", "leg", "lex", "lex, legis, f", "la loi"], ["consul", "duc", "dux", "dux, ducis, m", "le chef"],
  ["consul", "patr", "pater", "pater, patris, m", "le père"], ["consul", "labor", "labor", "labor, laboris, m", "le travail"],
  ["civis", "host", null, "hostis, is, m", "l'ennemi"], ["civis", "ign", null, "ignis, is, m", "le feu"],
  ["urbs", "mont", "mons", "mons, montis, m", "la montagne"], ["urbs", "noct", "nox", "nox, noctis, f", "la nuit"],
  ["corpus", "flumin", "flumen", "flumen, fluminis, n", "le fleuve"], ["corpus", "nomin", "nomen", "nomen, nominis, n", "le nom"],
  ["corpus", "tempor", "tempus", "tempus, temporis, n", "le temps"], ["corpus", "vulner", "vulnus", "vulnus, vulneris, n", "la blessure"],
  ["manus", "exercit", null, "exercitus, us, m", "l'armée"], ["manus", "port", null, "portus, us, m", "le port"],
  ["manus", "fruct", null, "fructus, us, m", "le fruit"], ["cornu", "gen", null, "genu, us, n", "le genou"],
  ["res", "di", null, "dies, diei, m", "le jour"], ["res", "r", null, "res, rei, f", "la chose"]
].map(a => ({ mod: a[0], rad: a[1], nomSg: a[2], la: a[3], fr: a[4] }));

if (typeof module !== "undefined") module.exports = { CAS, CAS_ABR, MODELES, decliner, formesPlates, tDecl, tAdj, VERBES, TEMPS, PERS, conjuguer, tConj, NOMS_ATELIER, SUM, traduireFr };

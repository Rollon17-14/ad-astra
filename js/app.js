/* ============================================================
   AD ASTRA — moteur du site (navigation, étapes, progression, atelier, lexique, profil).
   Le contenu est dans contenu1.js … contenu4.js ; les formes latines dans formes.js.
   ============================================================ */
const PARCOURS = [...(window.PARTIE1 || []), ...(window.PARTIE2 || []), ...(window.PARTIE3 || []), ...(window.PARTIE4 || []), ...(window.PARTIE_TRAD || []), ...(window.PARTIE5 || []), ...(window.PARTIE_TRISTES || []), ...(window.PARTIE_VOCAB || []), ...(window.PARTIE_BILAN || []), ...(window.PARTIE_ELEX || [])];
const CHAPS = PARCOURS.flatMap(p => p.chapitres.map(c => (c.partie = p, c)));
/* La numérotation suit l'ordre du parcours ; la progression, elle, est enregistrée par identifiant (c1, c2…). */
{ let n = 0; CHAPS.forEach(c => { if (!c.borne) c.num = ++n; }); }
/* Un chapitre peut porter sa propre étiquette (« borne »), par exemple « III, 1 » pour une élégie des Tristes. */
const lab = c => c.borne || ROMAINS[c.num];
const nomChap = c => c.borne ? (c.genre || "Tristes") + " " + c.borne : "Chapitre " + ROMAINS[c.num];
const chapDe = n => CHAPS.find(c => c.id === "c" + n);
const PARCOURS_VUE = PARCOURS.filter(p => !p.devoir && !p.elex), CHAPS_VUE = CHAPS.filter(c => !c.partie.devoir && !c.partie.elex);
const CLE = "vialatina.v1";
const XP_BASE = { lecon: 5, qcm: 10, ordre: 15, tri: 15, saisie: 20, tableau: 20, analyse: 20, verbe: 20, nominal: 20, mots: 15, examen: 40, quiz: 20, version: 25, guide: 30 };
const NOMS_ETAPES = { lecon: "Leçon", qcm: "Question", ordre: "Remise en ordre", tri: "Classement", saisie: "Réponses à écrire", tableau: "Tableau à compléter", analyse: "Reconnaissance des cas", verbe: "Analyse de verbes", nominal: "Analyse nominale", mots: "Vocabulaire", examen: "Sujet d'examen", quiz: "Questions", version: "Traduction", guide: "Traduction guidée" };
const NIVEAUX = [[0, "Tiro (recrue)"], [150, "Discipulus (élève)"], [450, "Miles (soldat)"], [900, "Centurio (centurion)"], [1500, "Tribunus (tribun)"], [2200, "Consul"], [3000, "Imperator"]];
const ROMAINS = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL"];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const h = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’`]/g, "'").replace(/j/g, "i").replace(/[.,;!?«»]/g, "").replace(/\s+/g, " ").trim();
const melanger = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const auHasard = a => a[Math.floor(Math.random() * a.length)];
const jour = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/* ---------- État ---------- */
function etatVide() { return { pseudo: "", classe: "", xp: 0, faits: {}, serie: { n: 0, jour: "" }, badges: {}, theme: "", atelier: 0, passes: {} }; }
let S = etatVide();
try { const brut = localStorage.getItem(CLE); if (brut) S = Object.assign(etatVide(), JSON.parse(brut)); } catch (e) { /* stockage indisponible : la progression reste en mémoire */ }
function sauver() { try { localStorage.setItem(CLE, JSON.stringify(S)); } catch (e) { /* idem */ } }

function niveau(xp) {
  let i = 0; while (i + 1 < NIVEAUX.length && NIVEAUX[i + 1][0] <= xp) i++;
  return { i, nom: NIVEAUX[i][1], min: NIVEAUX[i][0], max: i + 1 < NIVEAUX.length ? NIVEAUX[i + 1][0] : null };
}
const fait = (c, i) => S.faits[c.id + "." + i];
const nbFaits = c => c.etapes.filter((e, i) => fait(c, i)).length;
const chapFini = c => nbFaits(c) === c.etapes.length;
/* Un chapitre facultatif peut être passé : il ne bloque alors ni la suite du parcours ni le badge final. */
const chapPasse = c => !!S.passes[c.id] && !chapFini(c);
function passerChapitre(c) { S.passes[c.id] = jour(); sauver(); toast(nomChap(c) + " passé. Tu peux y revenir quand tu veux."); const s = prochaine(); location.hash = s ? "#" + s.c.id : "#parcours"; }
const totalEtapes = CHAPS.reduce((n, c) => n + c.etapes.length, 0);
const totalFaits = () => CHAPS.reduce((n, c) => n + nbFaits(c), 0);
const etoilesHtml = n => `<span class="etoiles" aria-label="${n} étoile${n > 1 ? "s" : ""} sur 3">${"★".repeat(n)}<span class="vide">${"★".repeat(3 - n)}</span></span>`;

const BADGES = [
  { id: "incipit", nom: "Incipit", desc: "Valider une première étape", si: () => totalFaits() >= 1 },
  { id: "alea", nom: "Alea jacta est", desc: "Terminer un chapitre", si: () => CHAPS.some(chapFini) },
  { id: "rosa", nom: "Rosa, rosa, rosam", desc: "Terminer le chapitre sur la première déclinaison", si: () => chapFini(chapDe(2)) },
  { id: "vvv", nom: "Veni, vidi, vici", desc: "Terminer trois chapitres", si: () => CHAPS.filter(chapFini).length >= 3 },
  { id: "dies", nom: "Nulla dies sine linea", desc: "Travailler trois jours d'affilée", si: () => S.serie.n >= 3 },
  { id: "faber", nom: "Fabricando fit faber", desc: "Réussir 30 formes dans l'atelier", si: () => S.atelier >= 30 },
  { id: "sine", nom: "Sine errore", desc: "Obtenir trois étoiles à 15 exercices", si: () => Object.entries(S.faits).filter(([k, v]) => v.e === 3 && etapeDe(k).t !== "lecon").length >= 15 },
  { id: "astra", nom: "Ad astra", desc: "Terminer tout le parcours", si: () => CHAPS.every(c => chapFini(c) || chapPasse(c)) && CHAPS.some(chapFini) }
];
function etapeDe(cle) { const [id, i] = cle.split("."); const c = CHAPS.find(x => x.id === id); return (c && c.etapes[+i]) || { t: "lecon" }; }

function toast(msg, type = "") {
  const t = document.createElement("div"); t.className = "toast " + type; t.textContent = msg;
  $("#toasts").append(t); setTimeout(() => t.remove(), 3500);
}
function marquerJour() {
  const auj = jour();
  if (S.serie.jour !== auj) {
    const hier = new Date(); hier.setDate(hier.getDate() - 1);
    S.serie.n = S.serie.jour === jour(hier) ? S.serie.n + 1 : 1; S.serie.jour = auj;
  }
}
function verifierBadges() {
  BADGES.forEach(b => { if (!S.badges[b.id] && b.si()) { S.badges[b.id] = jour(); toast("Badge obtenu : " + b.nom, "badge"); } });
}
/* Valide l'étape i du chapitre c avec 1 à 3 étoiles ; renvoie les points gagnés. */
function reussir(c, i, etoiles) {
  const cle = c.id + "." + i, avant = S.faits[cle], base = XP_BASE[c.etapes[i].t] || 10;
  const pts = e => Math.round(base * (e + 1) / 4);
  let gain = 0;
  if (!avant) gain = pts(etoiles); else if (etoiles > avant.e) gain = pts(etoiles) - pts(avant.e);
  if (!avant || etoiles > avant.e) S.faits[cle] = { e: etoiles, d: jour() };
  const nvAvant = niveau(S.xp).i;
  S.xp += gain; marquerJour(); verifierBadges(); sauver(); majEntete();
  if (niveau(S.xp).i > nvAvant) toast("Nouveau rang : " + niveau(S.xp).nom);
  return gain;
}

function majEntete() {
  const nv = niveau(S.xp);
  $("#stat-niveau").textContent = nv.nom.split(" ")[0];
  $("#stat-xp").textContent = S.xp + " pts";
  $("#jauge-xp").style.width = (nv.max ? Math.round(100 * (S.xp - nv.min) / (nv.max - nv.min)) : 100) + "%";
  $("#stat-serie").textContent = S.serie.jour === jour() || S.serie.n === 0 ? S.serie.n : S.serie.n;
}
function appliquerTheme() { if (S.theme) document.documentElement.dataset.theme = S.theme; }
$("#btn-theme").addEventListener("click", () => {
  const actuel = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  S.theme = actuel === "dark" ? "light" : "dark"; appliquerTheme(); sauver();
});

/* ---------- Vues : accueil, chapitre, fin ---------- */
const app = $("#app");
function prochaine() {
  for (const c of CHAPS_VUE) { const n = nbFaits(c); if (!chapPasse(c) && n > 0 && n < c.etapes.length) return { c, i: c.etapes.findIndex((e, k) => !fait(c, k)) }; }
  const c = CHAPS_VUE.find(x => nbFaits(x) === 0 && !chapPasse(x)); return c ? { c, i: 0 } : null;
}
function borneHtml(c) {
  const n = nbFaits(c), t = c.etapes.length;
  return `<li><a class="borne-lien" href="#${c.id}"><span class="borne ${c.borne ? "longue " : ""}${n === t ? "fini" : chapPasse(c) ? "passe" : n ? "encours" : ""}" aria-hidden="true">${lab(c)}</span><span class="borne-txt"><strong>${h(c.titre)}</strong><span>${h(c.resume)}</span><span class="jauge"><i style="width:${Math.round(100 * n / t)}%"></i></span><span>${chapPasse(c) ? "Chapitre passé · " : c.facultatif && !n ? "Facultatif · " : ""}${n} étape${n > 1 ? "s" : ""} sur ${t}</span></span></a></li>`;
}
function vueAccueil() {
  const p = prochaine(), debut = totalFaits() === 0;
  app.innerHTML = `<div class="accueil-tete"><p class="devise" lang="la">Per aspera ad astra</p><h1 tabindex="-1">Ad astra, le latin au lycée Antoine de Saint-Exupéry, La Rochelle</h1>
<p>${CHAPS.filter(c => !c.borne).length} chapitres qui suivent le cours : des leçons courtes, puis des formes à reconnaître et à analyser, et des phrases à traduire. Chaque étape validée rapporte des points. En fin de parcours, les Terminales de spécialité traduisent le livre III des <em>Tristes</em> d'Ovide.</p></div>
${p ? `<div class="reprendre"><div><span class="muet">${debut ? "Pour commencer" : "Reprendre où tu en étais"}</span><strong>${nomChap(p.c)} : ${h(p.c.titre)}</strong><span class="muet">Étape ${p.i + 1} sur ${p.c.etapes.length}</span></div><div class="actions" style="margin:0"><a class="btn" href="#${p.c.id}-${p.i + 1}">${debut ? "Commencer" : "Continuer"}</a>${p.c.facultatif ? `<button class="btn discret" type="button" id="passer">Passer ce chapitre</button>` : ""}</div></div>` : `<div class="reprendre"><div><strong>Parcours terminé. Optime !</strong><span class="muet">Tu peux refaire les étapes pour gagner des étoiles, ou t'entraîner dans l'atelier.</span></div><a class="btn" href="#atelier">Ouvrir l'atelier</a></div>`}
<p class="vers-devoirs"><a href="#devoirs">Devoirs et examens : les révisions par niveau</a> <a href="#elex">Certification européenne ELEX</a></p>
<div class="aller"><label for="aller">Aller directement à un chapitre, pour réviser</label><select id="aller"><option value="">Choisir un chapitre…</option>${PARCOURS_VUE.map(pa => `<optgroup label="${h(pa.titre)}">${pa.chapitres.map(c => `<option value="${c.id}">${lab(c)}. ${h(c.titre)}${chapFini(c) ? " ✓" : ""}</option>`).join("")}</optgroup>`).join("")}</select></div>
${PARCOURS_VUE.map(pa => `<section><div class="partie"><h2>${h(pa.titre)}</h2><p>${h(pa.sous)}</p></div><ol class="via">${pa.chapitres.map(borneHtml).join("")}</ol></section>`).join("")}`;
  const bp = $("#passer"); if (bp) bp.onclick = () => passerChapitre(p.c);
  $("#aller").onchange = ev => { if (ev.target.value) location.hash = "#" + ev.target.value; };
}
/* ---------- Devoirs et examens : les révisions, par niveau ---------- */
const NIVEAUX_DEVOIRS = [["Première", "premiere"], ["Terminale", "terminale"]];
function vueDevoirs() {
  app.innerHTML = `<h1 tabindex="-1">Devoirs et examens</h1><p class="muet">Les révisions préparées pour chaque devoir : une fiche de ce qu'il faut savoir, puis des entraînements construits comme le sujet.</p>
${NIVEAUX_DEVOIRS.map(([niv, ancre]) => {
    const parties = PARCOURS.filter(p => p.devoir === niv);
    return `<section class="niveau-devoirs" id="dv-${ancre}"><h2 class="niveau-titre">${niv}</h2>${parties.length ? parties.map(pa => `<div class="partie"><h3>${h(pa.titre)}</h3><p>${h(pa.sous)}</p></div><ol class="via">${pa.chapitres.map(borneHtml).join("")}</ol>`).join("") : `<p class="muet">Aucun devoir annoncé pour l'instant. Les révisions apparaîtront ici.</p>`}${niv === "Terminale" && window.PARTIE_TRISTES ? `<p class="vers-devoirs"><a href="#c28">Pour s'entraîner toute l'année : Traduisons le livre III des <em>Tristes</em> d'Ovide</a></p><p class="vers-devoirs"><a href="#c52">Apprendre le vocabulaire des <em>Tristes</em> : 300 mots à connaître</a></p>` : ""}</section>`;
  }).join("")}`;
}
const filDebut = c => c.partie.elex ? `<a href="#elex">Certification ELEX</a>` : c.partie.devoir ? `<a href="#devoirs">Devoirs et examens</a>` : `<a href="#parcours">Parcours</a>`;
function vueChapitre(c) {
  const n = nbFaits(c), suiv = c.etapes.findIndex((e, k) => !fait(c, k));
  app.innerHTML = `<p class="fil">${filDebut(c)} › ${h(c.partie.titre)}</p>
<div class="chap-tete"><span class="borne ${c.borne ? "longue " : ""}${chapFini(c) ? "fini" : n ? "encours" : ""}" aria-hidden="true">${lab(c)}</span><div><h1 tabindex="-1">${h(c.titre)}</h1><p>${h(c.resume)}</p></div></div>
<a class="btn" href="#${c.id}-${(suiv < 0 ? 0 : suiv) + 1}">${n === 0 ? "Commencer le chapitre" : suiv < 0 ? "Revoir depuis le début" : "Continuer à l'étape " + (suiv + 1)}</a>${c.facultatif && !chapFini(c) ? (chapPasse(c) ? ` <button class="btn discret" type="button" id="depasser">Remettre ce chapitre dans mon parcours</button><p class="muet" style="margin-top:.6rem">Tu as passé ce chapitre : il ne t'est plus proposé, mais tu peux le faire quand tu veux.</p>` : ` <button class="btn discret" type="button" id="passer">Passer ce chapitre</button><p class="muet" style="margin-top:.6rem">${h(c.notePasser || "Ce chapitre est facultatif.")}</p>`) : ""}
${(() => { const k = c.etapes.findIndex(e => e.synthese); return k < 0 ? "" : `<p class="reviser"><a class="btn second" href="#${c.id}-${k + 1}">Réviser : ouvrir la fiche synthèse</a></p><p class="muet">Toutes les étapes sont en accès libre : touche celle que tu veux revoir.</p>`; })()}
<ol class="etapes">${c.etapes.map((e, i) => { const f = fait(c, i); return `<li><a class="${f ? "fait" : ""}" href="#${c.id}-${i + 1}"><span class="num">${f ? "✓" : i + 1}</span><span><span class="type">${e.synthese ? "Fiche synthèse" : NOMS_ETAPES[e.t]}</span>${h(e.titre || "")}</span>${f && e.t !== "lecon" ? etoilesHtml(f.e) : "<span></span>"}</a></li>`; }).join("")}</ol>
<nav class="voisins" aria-label="Chapitres voisins">${(() => { const k = CHAPS.indexOf(c), a = CHAPS[k - 1], b = CHAPS[k + 1]; return (a ? `<a class="btn discret" href="#${a.id}">‹ ${lab(a)}. ${h(a.titre)}</a>` : "<span></span>") + (b ? `<a class="btn discret" href="#${b.id}">${lab(b)}. ${h(b.titre)} ›</a>` : ""); })()}</nav>`;
  const bp = $("#passer"); if (bp) bp.onclick = () => passerChapitre(c);
  const bd = $("#depasser"); if (bd) bd.onclick = () => { delete S.passes[c.id]; sauver(); vueChapitre(c); };
}
function vueFin(c) {
  const k = CHAPS.indexOf(c), suiv = CHAPS[k + 1], et = c.etapes.map((e, i) => fait(c, i)).filter(Boolean);
  const exos = c.etapes.filter(e => e.t !== "lecon").length, etoiles = c.etapes.reduce((n, e, i) => n + (e.t !== "lecon" && fait(c, i) ? fait(c, i).e : 0), 0);
  app.innerHTML = `<div class="carte fin"><h1 tabindex="-1">${chapFini(c) ? nomChap(c) + " : terminé" : "Fin : " + nomChap(c)}</h1>
<p>${chapFini(c) ? "Bene fecisti ! Toutes les étapes sont validées." : `Il reste ${c.etapes.length - et.length} étape(s) à valider dans ce chapitre.`}</p>
<dl class="chiffres"><div><dt>Étapes validées</dt><dd>${et.length} / ${c.etapes.length}</dd></div><div><dt>Étoiles</dt><dd>${etoiles} / ${exos * 3}</dd></div><div><dt>Points au total</dt><dd>${S.xp}</dd></div></dl>
<div class="actions">${suiv ? `<a class="btn" href="#${suiv.id}">Chapitre suivant : ${h(suiv.titre)}</a>` : `<a class="btn" href="#profil">Voir mon profil</a>`}<a class="btn second" href="#${c.id}">Revoir ce chapitre</a><a class="btn discret" href="${c.partie.elex ? "#elex" : c.partie.devoir ? "#devoirs" : "#parcours"}">${c.partie.elex ? "Retour à la certification" : c.partie.devoir ? "Retour aux devoirs" : "Retour au parcours"}</a></div></div>`;
}

/* ---------- Étapes ---------- */
function vueEtape(c, i) {
  const e = c.etapes[i];
  app.innerHTML = `<p class="fil">${filDebut(c)} › <a href="#${c.id}">${nomChap(c)} : ${h(c.titre)}</a></p>
<div class="etape-tete"><span class="type">${e.synthese ? "Fiche synthèse" : NOMS_ETAPES[e.t]}</span><span class="muet">Étape ${i + 1} sur ${c.etapes.length}</span></div>
<h1 tabindex="-1">${h(e.titre || NOMS_ETAPES[e.t])}</h1>
<div class="points" aria-hidden="true">${c.etapes.map((x, k) => `<a href="#${c.id}-${k + 1}" class="${k === i ? "ici" : fait(c, k) ? "fait" : ""}" tabindex="-1"></a>`).join("")}</div>
<div class="carte" id="zone"></div><div id="apres"></div>`;
  ({ lecon: etapeLecon, qcm: etapeQcm, tri: etapeTri, ordre: etapeOrdre, saisie: etapeSaisie, tableau: etapeTableau, analyse: etapeAnalyse, verbe: etapeVerbe, nominal: etapeNominal, mots: etapeMots, examen: etapeExamen, quiz: etapeQuiz, version: etapeVersion, guide: etapeGuide }[e.t])($("#zone"), c, i, e);
}
const lienSuivant = (c, i) => i + 1 < c.etapes.length ? `#${c.id}-${i + 2}` : `#${c.id}-fin`;
/* Bandeau de réussite : enregistre, affiche l'explication et le bouton « Étape suivante ». */
function succes(c, i, etoiles, expl) {
  const gain = reussir(c, i, etoiles);
  const z = $("#apres");
  z.innerHTML = `<div class="retour ok" role="status"><p class="gain">${["", "Validé.", "Bien.", "Recte ! Sans faute."][etoiles]} ${etoilesHtml(etoiles)} ${gain ? `+${gain} points` : ""}</p>${expl ? `<div>${expl}</div>` : ""}</div>
<div class="actions"><a class="btn" id="suite" href="${lienSuivant(c, i)}">${i + 1 < c.etapes.length ? "Étape suivante" : "Terminer le chapitre"}</a>${etoiles < 3 ? `<button class="btn discret" type="button" id="refaire">Refaire pour 3 étoiles</button>` : ""}</div>`;
  const r = $("#refaire"); if (r) r.onclick = () => vueEtape(c, i);
  $("#suite").focus({ preventScroll: true }); z.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
const etoilesPour = erreurs => erreurs === 0 ? 3 : erreurs <= 2 ? 2 : 1;
const enTete = e => `${e.intro ? `<div class="lecon">${/^</.test(e.intro) ? e.intro : `<p>${e.intro}</p>`}</div>` : ""}${e.q ? `<p class="question">${e.q}</p>` : ""}${e.doc ? `<div class="doc lecon">${e.doc}</div>` : ""}${vocabHtml(e.vocab)}`;
const vocabHtml = v => v && v.length ? `<details class="vocab"><summary>Vocabulaire</summary><ul>${v.map(x => `<li>${x.replace(/^([^:]+):/, '<i class="la"><b>$1</b></i> :')}</li>`).join("")}</ul></details>` : "";

function etapeLecon(z, c, i, e) {
  z.innerHTML = `<div class="lecon">${e.texte}</div>`;
  $("#apres").innerHTML = `<div class="actions"><a class="btn" id="suite" href="${lienSuivant(c, i)}">${e.synthese ? "J'ai relu la fiche" : "J'ai compris"}, ${i + 1 < c.etapes.length ? "étape suivante" : "terminer le chapitre"}</a></div>`;
  $("#suite").addEventListener("click", () => { const g = reussir(c, i, 3); if (g) toast(`Leçon lue : +${g} points`); });
}

/* Bloc QCM réutilisable (choix unique « bon » ou multiple « bons ») ; appelle fini(nbErreurs). */
function blocQcm(z, q, fini) {
  const multi = Array.isArray(q.bons); let err = 0;
  const ordre = q.fixe ? q.choix.map((x, k) => k) : melanger(q.choix.map((x, k) => k));
  z.innerHTML = `${q.q ? `<p class="question">${q.q}</p>` : ""}${q.doc ? `<div class="doc lecon">${q.doc}</div>` : ""}${multi ? `<p class="muet">Plusieurs réponses possibles.</p>` : ""}
<div class="choix">${ordre.map(k => `<button type="button" data-k="${k}" ${multi ? 'aria-pressed="false"' : ""}>${q.choix[k]}</button>`).join("")}</div>
${multi ? `<div class="actions"><button class="btn" type="button" data-valider>Valider</button></div>` : ""}<div data-retour></div>`;
  const ret = $("[data-retour]", z), btns = $$(".choix button", z);
  const clore = () => { btns.forEach(b => b.disabled = true); const v = $("[data-valider]", z); if (v) v.hidden = true; ret.innerHTML = q.expl ? `<div class="retour ok">${q.expl}</div>` : ""; fini(err); };
  if (!multi) btns.forEach(b => b.onclick = () => {
    if (+b.dataset.k === q.bon) { b.classList.add("juste"); clore(); }
    else { err++; b.classList.add("faux"); b.disabled = true; ret.innerHTML = `<div class="retour non">${(q.retours && q.retours[+b.dataset.k]) || "Ce n'est pas cela. Relis la question et essaie encore."}</div>`; }
  });
  else {
    btns.forEach(b => b.onclick = () => { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); b.classList.remove("faux"); });
    $("[data-valider]", z).onclick = () => {
      const choisis = btns.filter(b => b.getAttribute("aria-pressed") === "true").map(b => +b.dataset.k).sort();
      if (String(choisis) === String([...q.bons].sort())) { btns.forEach(b => { if (q.bons.includes(+b.dataset.k)) b.classList.add("juste"); }); clore(); }
      else { err++; const manque = q.bons.filter(k => !choisis.includes(k)).length, trop = choisis.filter(k => !q.bons.includes(k)).length;
        ret.innerHTML = `<div class="retour non">Pas tout à fait : ${[trop ? `${trop} réponse(s) en trop` : "", manque ? `${manque} réponse(s) manquante(s)` : ""].filter(Boolean).join(", ")}.</div>`; }
    };
  }
}
function etapeQcm(z, c, i, e) { blocQcm(z, e, err => succes(c, i, etoilesPour(err * 2), "")); }
function etapeQuiz(z, c, i, e) {
  let reste = e.questions.length, err = 0;
  z.innerHTML = enTete(e) + e.questions.map((q, k) => `<div class="bloc-q" data-q="${k}"></div>`).join("");
  e.questions.forEach((q, k) => blocQcm($(`[data-q="${k}"]`, z), Object.assign({}, q, { q: `${k + 1}. ${q.q}` }), n => { err += n; if (--reste === 0) succes(c, i, etoilesPour(err), e.expl || ""); }));
}

function etapeTri(z, c, i, e) {
  let essais = 0; const items = melanger(e.items.map((it, k) => k));
  z.innerHTML = enTete(e) + `<div class="tri">${items.map(k => `<div class="tri-item" data-k="${k}"><span class="txt">${e.items[k].txt}</span><div class="seg">${e.categories.map((cat, n) => `<button type="button" data-c="${n}" aria-pressed="false">${cat}</button>`).join("")}</div><small></small></div>`).join("")}</div>
<div class="actions"><button class="btn" type="button" id="valider">Valider</button></div><div id="ret"></div>`;
  $$(".tri-item", z).forEach(d => $$("button", d).forEach(b => b.onclick = () => { $$("button", d).forEach(x => x.setAttribute("aria-pressed", x === b)); d.classList.remove("faux"); }));
  $("#valider", z).onclick = () => {
    let faux = 0, vides = 0;
    $$(".tri-item", z).forEach(d => {
      if (d.classList.contains("juste")) return;
      const it = e.items[+d.dataset.k], ch = $('button[aria-pressed="true"]', d);
      if (!ch) { vides++; return; }
      const bon = e.categories[+ch.dataset.c] === it.cat;
      d.classList.toggle("juste", bon); d.classList.toggle("faux", !bon);
      if (bon) { $$("button", d).forEach(b => b.disabled = true); $("small", d).innerHTML = it.expl || ""; } else faux++;
    });
    if (vides) { $("#ret", z).innerHTML = `<div class="retour non">Il reste ${vides} ligne(s) sans réponse.</div>`; return; }
    if (faux) { essais++; $("#ret", z).innerHTML = `<div class="retour non">${faux} erreur(s) : corrige les lignes en rouge, puis valide à nouveau.</div>`; }
    else { $("#valider", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, etoilesPour(essais), e.expl || ""); }
  };
}

function etapeOrdre(z, c, i, e) {
  let essais = 0, ordre = melanger(e.lignes.map((l, k) => k));
  if (ordre.every((k, n) => k === n)) ordre.reverse();
  z.innerHTML = enTete(e) + `<ol class="ordre"></ol><div class="actions"><button class="btn" type="button" id="valider">Valider l'ordre</button></div><div id="ret"></div>`;
  const ol = $("ol.ordre", z);
  const dessiner = (marques) => {
    ol.innerHTML = ordre.map((k, n) => `<li class="${marques ? (k === n ? "juste" : "faux") : ""}"><span>${e.lignes[k]}</span><button type="button" data-d="-1" data-n="${n}" aria-label="Monter" ${n === 0 ? "disabled" : ""}>↑</button><button type="button" data-d="1" data-n="${n}" aria-label="Descendre" ${n === ordre.length - 1 ? "disabled" : ""}>↓</button></li>`).join("");
    $$("button", ol).forEach(b => b.onclick = () => { const n = +b.dataset.n, m = n + +b.dataset.d; [ordre[n], ordre[m]] = [ordre[m], ordre[n]]; dessiner(false); const cible = $(`button[data-n="${m}"][data-d="${b.dataset.d}"]`, ol); if (cible && !cible.disabled) cible.focus(); });
  };
  dessiner(false);
  $("#valider", z).onclick = () => {
    if (ordre.every((k, n) => e.lignes[k] === e.lignes[n])) { dessiner(true); $$("button", ol).forEach(b => b.disabled = true); $("#valider", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, etoilesPour(essais), e.expl || ""); }
    else { essais++; dessiner(true); $("#ret", z).innerHTML = `<div class="retour non">L'ordre n'est pas encore le bon : les lignes en vert sont à leur place.</div>`; }
  };
}

/* Vérification commune des champs à remplir : chaque input porte data-r = réponses acceptées séparées par | */
function brancherChamps(z, c, i, e, expl) {
  let essais = 0, montre = false;
  const inputs = $$("input[data-r]", z);
  inputs.forEach(x => { x.autocomplete = "off"; x.autocapitalize = "none"; x.spellcheck = false; x.addEventListener("keydown", ev => { if (ev.key === "Enter") { const n = inputs[inputs.indexOf(x) + 1]; if (n) n.focus(); else $("#valider", z).click(); } }); });
  $("#valider", z).onclick = () => {
    let faux = 0;
    inputs.forEach(x => { const ok = x.dataset.r.split("|").map(norm).includes(norm(x.value)); x.classList.toggle("juste", ok); x.classList.toggle("faux", !ok); if (ok) x.readOnly = true; else faux++; });
    if (!faux) { $("#valider", z).hidden = true; $("#voir", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, montre ? 1 : etoilesPour(essais), expl || ""); return; }
    essais++;
    $("#ret", z).innerHTML = `<div class="retour non">${faux} réponse(s) à corriger (en rouge).${essais >= 2 ? " Tu peux afficher les réponses, puis les recopier pour valider." : ""}</div>`;
    if (essais >= 2) $("#voir", z).hidden = false;
  };
  $("#voir", z).onclick = () => { montre = true; inputs.filter(x => !x.readOnly).forEach(x => { x.placeholder = x.dataset.r.split("|")[0]; x.value = ""; x.classList.remove("faux"); }); };
}
const piedChamps = `<div class="actions"><button class="btn" type="button" id="valider">Valider</button><button class="btn discret" type="button" id="voir" hidden>Afficher les réponses</button></div><div id="ret"></div>`;
const rep = r => h([].concat(r).join("|"));
function etapeSaisie(z, c, i, e) {
  z.innerHTML = enTete(e) + `<div class="saisies">${e.items.map((it, k) => `<div class="saisie"><label for="s${k}">${it.q}</label><input type="text" id="s${k}" data-r="${rep(it.r)}"></div>`).join("")}</div>` + piedChamps;
  brancherChamps(z, c, i, e, e.expl);
}
function etapeTableau(z, c, i, e) {
  const d = decliner(e.modele, e.rad, e.nomSg), f = formesPlates(d);
  z.innerHTML = enTete(e) + `<div class="tab-wrap"><table class="paradigme remplir"><caption><i class="la">${e.mot}</i> : ${e.sens}</caption><thead><tr><th>Cas</th><th>Singulier</th><th>Pluriel</th></tr></thead><tbody>
${CAS.map((cas, k) => `<tr><th>${cas}</th><td><input type="text" id="t${k}" aria-label="${cas} singulier" data-r="${h(f[k])}"></td><td><input type="text" id="t${k + 6}" aria-label="${cas} pluriel" data-r="${h(f[k + 6])}"></td></tr>`).join("")}</tbody></table></div>` + piedChamps;
  brancherChamps(z, c, i, e, e.expl);
}

/* Grille cas × nombre : codes "Ns", "Vs", "As", "Gs", "Ds", "Bs" et "Np"… (B = ablatif) */
const CODES = ["N", "V", "A", "G", "D", "B"];
function grilleCas(id) {
  return `<div class="grille" data-grille="${id}"><span class="col">Singulier</span><span class="col">Pluriel</span>${CAS.map((cas, k) => ["s", "p"].map(n => `<button type="button" aria-pressed="false" data-code="${CODES[k]}${n}" aria-label="${cas} ${n === "s" ? "singulier" : "pluriel"}">${CAS_ABR[k]} ${n === "s" ? "sg." : "pl."}</button>`).join("")).join("")}</div>`;
}
const lireGrille = g => $$('button[aria-pressed="true"]', g).map(b => b.dataset.code).sort();
const brancherGrille = g => $$("button", g).forEach(b => b.onclick = () => b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"));
const nomCode = code => `${CAS[CODES.indexOf(code[0])].toLowerCase()} ${code[1] === "s" ? "singulier" : "pluriel"}`;
function etapeAnalyse(z, c, i, e) {
  let essais = 0;
  z.innerHTML = enTete(e) + `<p class="muet">Coche tous les cas possibles pour chaque forme : il y en a parfois plusieurs.</p><div class="analyses">${e.items.map((it, k) => `<div class="analyse" data-k="${k}"><span class="forme">${it.forme}</span><span class="mot">${it.mot || ""}</span>${grilleCas(k)}<small></small></div>`).join("")}</div>
<div class="actions"><button class="btn" type="button" id="valider">Valider</button></div><div id="ret"></div>`;
  $$(".grille", z).forEach(brancherGrille);
  $("#valider", z).onclick = () => {
    let faux = 0;
    $$(".analyse", z).forEach(d => {
      if (d.classList.contains("juste")) return;
      const it = e.items[+d.dataset.k], ch = lireGrille($(".grille", d)), bons = [...it.bons].sort(), ok = String(ch) === String(bons);
      d.classList.toggle("juste", ok); d.classList.toggle("faux", !ok);
      if (ok) { $$("button", d).forEach(b => b.disabled = true); $("small", d).innerHTML = it.expl || ""; }
      else { faux++; const trop = ch.filter(x => !bons.includes(x)).length, manque = bons.filter(x => !ch.includes(x)).length; $("small", d).textContent = [trop ? `${trop} en trop` : "", manque ? `${manque} manquant(s)` : ""].filter(Boolean).join(", ") + (essais >= 2 ? `. Réponse : ${bons.map(nomCode).join(", ")}.` : ""); }
    });
    if (faux) { essais++; $("#ret", z).innerHTML = `<div class="retour non">${faux} forme(s) à revoir.</div>`; }
    else { $("#valider", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, etoilesPour(essais), e.expl || ""); }
  };
}

/* ---------- Verbes : niveau 1 (reconnaître la forme), niveau 2 (reconnaître et traduire) ---------- */
const TEMPS_N = { present: "présent", imparfait: "imparfait", futur: "futur", parfait: "parfait", pqp: "plus-que-parfait", futant: "futur antérieur" };
const MODES_N = { ind: "indicatif", subj: "subjonctif", imp: "impératif" };
const maj = s => s[0].toUpperCase() + s.slice(1);
const libAnalyse = x => `${TEMPS_N[x.t]} ${x.m === "subj" ? "du subjonctif" : x.m === "imp" ? "de l'impératif" : "de l'indicatif"} ${x.v === "p" ? "passif" : "actif"}, ${PERS[x.p]}`;
/* Comparaison souple d'une traduction française : accents, élision, il/elle, accord du participe */
const normFr = s => {
  s = String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’`]/g, "'").replace(/[.,;!?«»"]/g, " ").replace(/\bj'\s*/g, "je ").replace(/\s+/g, " ").trim()
    .replace(/^(elle|on) /, "il ").replace(/^elles /, "ils ");
  const m = s.split(" ");
  if (m.length >= 3) { let d = m[m.length - 1], a; do { a = d; d = d.replace(/(es|e|s)$/, ""); } while (d !== a && d.length > 1); m[m.length - 1] = d; }
  return m.join(" ");
};
const frOk = (val, liste) => !!String(val).trim() && [].concat(liste).map(normFr).includes(normFr(val));
const choix = (cls, nom, opts) => `<label>${nom}<select class="${cls}"><option value="">…</option>${opts.map(([v, n]) => `<option value="${v}">${n}</option>`).join("")}</select></label>`;
function champsVerbe(T, M, V, n2, inf) {
  return `<div class="rangee">${T.length > 1 ? choix("s-t", "Temps", T.map(t => [t, maj(TEMPS_N[t])])) : ""}${M.length > 1 ? choix("s-m", "Mode", M.map(m => [m, maj(MODES_N[m])])) : ""}${V ? choix("s-v", "Voix", [["a", "Active"], ["p", "Passive"]]) : ""}${choix("s-p", "Personne", PERS.map((x, k) => [k, x]))}${inf ? `<label>Infinitif<input type="text" class="s-inf" autocomplete="off" autocapitalize="none" spellcheck="false"></label>` : ""}${n2 ? `<label class="large">Traduction<input type="text" class="s-fr" autocomplete="off" autocapitalize="none" spellcheck="false"></label>` : ""}</div>`;
}
function lireVerbe(d, a, T, M, V) {
  const v = cls => { const s = $("." + cls, d); return s ? s.value : null; }, ch = { t: v("s-t"), m: v("s-m"), v: v("s-v"), p: v("s-p") };
  return a.some(x => (T.length < 2 || x.t === ch.t) && (M.length < 2 || x.m === ch.m) && (!V || x.v === ch.v) && String(x.p) === ch.p);
}
function etapeVerbe(z, c, i, e) {
  let essais = 0;
  const T = e.temps || ["present"], M = e.modes || ["ind"], V = e.voix !== false, n2 = e.niveau === 2;
  z.innerHTML = enTete(e) + `<p class="muet">${n2 ? "Niveau 2 : analyse chaque forme, puis traduis-la en français." : "Niveau 1 : analyse chaque forme, comme au devoir."}</p><div class="analyses verbes">${e.items.map((it, k) => `<div class="analyse verbe" data-k="${k}"><span class="forme">${it.forme}</span><span class="mot">${it.mot || ""}</span>${champsVerbe(T, M, V, n2, !!e.infinitif)}<small></small></div>`).join("")}</div>
<div class="actions"><button class="btn" type="button" id="valider">Valider</button></div><div id="ret"></div>`;
  $("#valider", z).onclick = () => {
    let faux = 0;
    $$(".analyse", z).forEach(d => {
      if (d.classList.contains("juste")) return;
      const it = e.items[+d.dataset.k], okI = !e.infinitif || norm($(".s-inf", d).value) === norm(it.inf), okA = lireVerbe(d, it.a, T, M, V) && okI, okF = !n2 || frOk($(".s-fr", d).value, it.fr), ok = okA && okF;
      const sol = `${it.a.map(libAnalyse).join(" ; ou ")}${e.infinitif ? ` (${it.inf})` : ""}${n2 ? ` : « ${[].concat(it.fr)[0]} »` : ""}`;
      d.classList.toggle("juste", ok); d.classList.toggle("faux", !ok);
      if (ok) { $$("select, input", d).forEach(x => x.disabled = true); $("small", d).innerHTML = maj(sol).replace(/\.$/, "") + "." + (it.expl ? " " + it.expl : ""); }
      else { faux++; $("small", d).textContent = (!okA && !okF ? "Analyse et traduction à revoir." : !okA ? "Analyse à revoir." : "Traduction à revoir.") + (essais >= 2 ? ` Réponse : ${sol.replace(/\.$/, "")}.` : ""); }
    });
    if (faux) { essais++; $("#ret", z).innerHTML = `<div class="retour non">${faux} forme(s) à revoir.</div>`; }
    else { $("#valider", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, etoilesPour(essais), e.expl || ""); }
  };
}

/* ---------- Analyse nominale et adjectivale : cas, nombre, genre et nominatif singulier ---------- */
const GENRES = [["m", "Masculin"], ["f", "Féminin"], ["n", "Neutre"]];
function etapeNominal(z, c, i, e) {
  let essais = 0;
  const champ = nom => `<label class="large">${nom}<input type="text" class="s-lem" autocomplete="off" autocapitalize="none" spellcheck="false"></label>`;
  z.innerHTML = enTete(e) + `<p class="muet">Coche toutes les analyses possibles, indique le genre, puis écris le nominatif singulier (l'entrée du lexique).</p><div class="analyses verbes">${e.items.map((it, k) => `<div class="analyse verbe" data-k="${k}"><span class="forme">${it.forme}</span><span class="mot">${it.adj ? "adjectif" : "nom"}</span>${it.adj
    ? `<div class="genres">${GENRES.map(([g, n]) => `<div><span class="g-nom">${n}</span>${grilleCas(k + g)}</div>`).join("")}</div><div class="rangee">${champ("Nominatif masculin singulier")}</div>`
    : `<div class="une-grille">${grilleCas(k)}</div><div class="rangee">${choix("s-g", "Genre", GENRES)}${champ("Nominatif singulier")}</div>`}<small></small></div>`).join("")}</div>
<div class="actions"><button class="btn" type="button" id="valider">Valider</button></div><div id="ret"></div>`;
  $$(".grille", z).forEach(brancherGrille);
  const liste = b => b.map(nomCode).join(", ");
  $("#valider", z).onclick = () => {
    let faux = 0;
    $$(".analyse", z).forEach(d => {
      if (d.classList.contains("juste")) return;
      const it = e.items[+d.dataset.k], k = d.dataset.k, okL = [].concat(it.lemme).map(norm).includes(norm($(".s-lem", d).value));
      const okC = it.adj ? GENRES.every(([g]) => String(lireGrille($(`[data-grille="${k}${g}"]`, d))) === String([...(it.bons[g] || [])].sort()))
        : String(lireGrille($(".grille", d))) === String([...it.bons].sort()) && $(".s-g", d).value === it.g;
      const ok = okC && okL;
      const sol = (it.adj ? GENRES.filter(([g]) => (it.bons[g] || []).length).map(([g, n]) => `${n.toLowerCase()} : ${liste(it.bons[g])}`).join(" ; ") : `${liste(it.bons)} ; ${GENRES.find(x => x[0] === it.g)[1].toLowerCase()}`) + ` (${it.entree || [].concat(it.lemme)[0]})`;
      d.classList.toggle("juste", ok); d.classList.toggle("faux", !ok);
      if (ok) { $$("button, select, input", d).forEach(x => x.disabled = true); $("small", d).innerHTML = maj(sol) + "." + (it.expl ? " " + it.expl : ""); }
      else { faux++; $("small", d).textContent = [okC ? "" : it.adj ? "Cas à revoir (pense aux trois genres)." : "Cas ou genre à revoir.", okL ? "" : "Nominatif singulier à revoir."].filter(Boolean).join(" ") + (essais >= 2 ? ` Réponse : ${sol}.` : ""); }
    });
    if (faux) { essais++; $("#ret", z).innerHTML = `<div class="retour non">${faux} forme(s) à revoir.</div>`; }
    else { $("#valider", z).hidden = true; $("#ret", z).innerHTML = ""; succes(c, i, etoilesPour(essais), e.expl || ""); }
  };
}

/* ---------- Vocabulaire : du mot latin à son sens, les mots manqués reviennent ---------- */
function etapeMots(z, c, i, e) {
  const cle = m => m[1].split(/[,;(]/)[0].trim();
  let file = e.tirage ? melanger(e.mots).slice(0, e.tirage) : melanger(e.mots), err = 0, faits = 0; const total = file.length;
  z.innerHTML = enTete(e) + `<p class="muet" id="m-av"></p><div id="m-q"></div>`;
  function suivant() {
    $("#m-av", z).textContent = `${faits} mot${faits > 1 ? "s" : ""} sur ${total}`;
    if (!file.length) { $("#m-q", z).innerHTML = ""; succes(c, i, etoilesPour(err), ""); return; }
    const m = file[0], autres = melanger((e.banque || e.mots).filter(x => cle(x) !== cle(m))).filter((x, k, t) => t.findIndex(y => cle(y) === cle(x)) === k).slice(0, 3), ch = melanger([m, ...autres]);
    $("#m-q", z).innerHTML = `<p class="mot-latin" lang="la">${h(m[0])}</p><div class="choix">${ch.map((x, k) => `<button type="button" class="choix-btn" data-k="${k}">${h(x[1])}</button>`).join("")}</div><div id="m-ret"></div>`;
    $$(".choix-btn", z).forEach(b => b.onclick = () => {
      const ok = ch[+b.dataset.k] === m;
      $$(".choix-btn", z).forEach(x => { x.disabled = true; if (ch[+x.dataset.k] === m) x.classList.add("juste"); });
      file.shift();
      if (ok) { faits++; setTimeout(suivant, 450); }
      else { b.classList.add("faux"); err++; file.push(m); $("#m-ret", z).innerHTML = `<div class="retour non"><i class="la"><b>${h(m[0])}</b></i> : ${h(m[1])}. Ce mot reviendra.</div><div class="actions"><button class="btn" type="button" id="m-suite">Continuer</button></div>`; $("#m-suite", z).onclick = suivant; $("#m-suite", z).focus(); }
    });
  }
  suivant();
}

/* ---------- Certification ELEX : page d'accueil de la préparation ---------- */
function vueElex() {
  const parties = PARCOURS.filter(p => p.elex);
  app.innerHTML = `<h1 tabindex="-1">Certification ELEX</h1><p class="muet">L'examen européen de latin d'Euroclassica : 40 questions à choix multiples sur un texte, en 45 minutes. Deux préparations distinctes, une par niveau.</p>
<p class="elex-niveaux">${parties.map(p => `<a href="#el-${p.id}">${h(p.court || p.titre)}</a>`).join("")}</p>
${parties.map(pa => `<section class="niveau-devoirs" id="el-${pa.id}"><h2 class="niveau-titre">${h(pa.titre)}</h2><p>${h(pa.sous)}</p><ol class="via">${pa.chapitres.map(borneHtml).join("")}</ol></section>`).join("")}`;
  $$(".elex-niveaux a").forEach(a => a.onclick = ev => { ev.preventDefault(); const c = document.getElementById(a.getAttribute("href").slice(1)); if (c) c.scrollIntoView({ behavior: "smooth" }); });
}

/* ---------- Sujet d'examen : 40 questions, correction à la fin, médaille ---------- */
function etapeExamen(z, c, i, e) {
  const Q = e.sections.flatMap((s, k) => s.questions.map(q => Object.assign({ sec: k }, q))), L = "ABCD", n = Q.length;
  const seuils = e.seuils || [36, 30, 24];
  let rendu = false, chrono = null;
  const bloc = (q, k) => e.grille
    ? `<div class="ex-q grille-q" data-k="${k}"><span class="ex-n">${k + 1}</span><div class="ex-ch" role="radiogroup" aria-label="Question ${k + 1}">${[...L].map((l, j) => `<label><input type="radio" name="ex${k}" value="${j}"><span>${l}</span></label>`).join("")}</div><small></small></div>`
    : `<fieldset class="ex-q" data-k="${k}"><legend><span class="ex-n">${k + 1}</span> ${q.q}</legend><div class="ex-ch">${q.choix.map((x, j) => `<label><input type="radio" name="ex${k}" value="${j}"><span><b>${L[j]}.</b> ${x}</span></label>`).join("")}</div><small></small></fieldset>`;
  let k = 0;
  z.innerHTML = enTete(e) + `${e.texte ? `<details class="ex-texte" open><summary>Texte${e.voc ? " et vocabulaire" : ""}</summary><div class="ex-lat">${e.texte}</div>${e.voc ? `<p class="ex-voc"><b>Vocabulaire.</b> ${e.voc}</p>` : ""}</details>` : ""}
<p class="ex-barre"><button class="btn second" type="button" id="ex-chrono">Lancer le chrono (${e.duree || 45} min)</button> <span id="ex-temps" aria-live="off"></span></p>
${e.sections.map(s => `<h3 class="ex-sec">${s.titre}</h3>${s.questions.map(() => bloc(Q[k], k++)).join("")}`).join("")}
<div class="actions"><button class="btn" type="button" id="ex-rendre">Rendre ma copie</button></div><div id="ret"></div>`;
  $("#ex-chrono", z).onclick = () => {
    if (chrono) return; const fin = Date.now() + (e.duree || 45) * 60000; $("#ex-chrono", z).hidden = true;
    const maj2 = () => { const r = Math.max(0, fin - Date.now()), m = Math.floor(r / 60000), s2 = Math.floor(r % 60000 / 1000); const el = $("#ex-temps", z); if (!el) { clearInterval(chrono); return; } el.textContent = r ? `Temps restant : ${m} min ${String(s2).padStart(2, "0")}` : "Temps écoulé : rends ta copie."; if (!r || rendu) clearInterval(chrono); };
    maj2(); chrono = setInterval(maj2, 1000);
  };
  let averti = false;
  $("#ex-rendre", z).onclick = () => {
    const rep = Q.map((q, k2) => { const r = z.querySelector(`input[name="ex${k2}"]:checked`); return r ? +r.value : -1; }), vides = rep.filter(r => r < 0).length;
    if (vides && !averti) { averti = true; $("#ret", z).innerHTML = `<div class="retour non">${vides} question(s) sans réponse. Complète-les, ou appuie de nouveau sur « Rendre ma copie ».</div>`; return; }
    rendu = true; let score = 0; const parSec = e.sections.map(() => 0);
    Q.forEach((q, k2) => {
      const d = z.querySelector(`.ex-q[data-k="${k2}"]`), ok = rep[k2] === q.bon; if (ok) { score++; parSec[q.sec]++; }
      d.classList.add(ok ? "juste" : "faux"); $$("input", d).forEach(x => x.disabled = true);
      const lab2 = $$("label", d)[q.bon]; if (lab2) lab2.classList.add("bonne");
      $("small", d).innerHTML = `${ok ? "" : `Réponse : <b>${L[q.bon]}</b>${e.grille && q.r ? " (" + q.r + ")" : ""}. `}${q.expl || ""}`;
    });
    const med = score >= seuils[0] ? ["or", "Médaille d'or", 3] : score >= seuils[1] ? ["argent", "Médaille d'argent", 2] : score >= seuils[2] ? ["bronze", "Médaille de bronze", 1] : ["", "Pas encore de médaille : il en faut " + seuils[2], 0];
    $("#ex-rendre", z).hidden = true; $(".ex-barre", z).hidden = true;
    $("#ret", z).innerHTML = `<div class="ex-bilan ${med[0]}"><p class="ex-score">${score} / ${n}</p><p class="ex-med">${med[1]}</p><p>${e.sections.map((s, j) => `${s.titre.replace(/^[IVX]+\. /, "")} : <b>${parSec[j]} / ${s.questions.length}</b>`).join(" · ")}</p><p class="muet">Remonte dans la copie : chaque question est corrigée.</p>${med[2] ? "" : `<div class="actions"><button class="btn second" type="button" id="ex-refaire">Recommencer</button></div>`}</div>`;
    if (med[2]) succes(c, i, med[2], ""); else $("#ex-refaire", z).onclick = () => etapeExamen(z, c, i, e);
    $("#ret", z).scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

function etapeVersion(z, c, i, e) {
  let reste = e.phrases.length, justes = 0;
  z.innerHTML = enTete(e) + `<p class="muet">Écris ta traduction, puis compare-la à la traduction proposée. C'est toi qui t'évalues : sois honnête, c'est ainsi qu'on progresse.</p>` +
    e.phrases.map((p, k) => `<div class="phrase" data-k="${k}"><p class="lat" lang="la">${p.la}</p>${p.aide ? `<p class="aide">${p.aide}</p>` : ""}<label class="sr" for="v${k}">Ta traduction</label><textarea id="v${k}" placeholder="Ta traduction"></textarea><button class="btn second" type="button">Comparer avec la traduction</button></div>`).join("");
  $$(".phrase", z).forEach(d => $("button", d).onclick = () => {
    const p = e.phrases[+d.dataset.k]; $("button", d).remove(); $("textarea", d).readOnly = true;
    d.insertAdjacentHTML("beforeend", `<div class="trad">${p.fr}${p.note ? `<br><small>${p.note}</small>` : ""}</div><div class="seg"><button type="button" data-v="1">J'avais l'essentiel</button><button type="button" data-v="0">À retravailler</button></div>`);
    $$(".seg button", d).forEach(b => b.onclick = () => { justes += +b.dataset.v; $(".seg", d).outerHTML = `<p class="eval">${+b.dataset.v ? "✓ Compris" : "À retravailler : relis le vocabulaire et l'analyse."}</p>`; if (--reste === 0) succes(c, i, justes === e.phrases.length ? 3 : justes * 2 >= e.phrases.length ? 2 : 1, e.expl || ""); });
  });
}

/* Traduction guidée : l'élève touche les mots de la phrase (pas « clic ») ou répond à une question (pas « choix »),
   puis rédige sa traduction et la compare. Chaque pas validé laisse une trace sous la phrase. */
const classeMarque = m => /^verbe/i.test(m) ? "m-v" : /^(sujet|attribut)/i.test(m) ? "m-s" : /^COD/.test(m) ? "m-o" : "m-c";
/* Code couleur des cas : N, V, A, G, D, B (ablatif), I (mot invariable), X (verbe). */
const LEGENDE_CAS = `<p class="legende-cas" aria-label="Code couleur">${[["N", "nominatif"], ["V", "vocatif"], ["A", "accusatif"], ["G", "génitif"], ["D", "datif"], ["B", "ablatif"], ["I", "invariable"], ["X", "verbe"]].map(([k, n]) => `<span class="cas c-${k}">${n}</span>`).join("")}</p>`;
const CAS_NOMS = { nominatif: "N", vocatif: "V", accusatif: "A", "génitif": "G", datif: "D", ablatif: "B" };
function colorerCas(racine) {
  $$("tbody th, .seg button", racine).forEach(el => { if (el.dataset.cc) return; el.dataset.cc = 1; const m = el.textContent.trim().toLowerCase().match(/^(nominatif|vocatif|accusatif|génitif|datif|ablatif)(?![a-zé])/); if (m) el.classList.add("cas", "c-" + CAS_NOMS[m[1]]); });
  $$(".grille button[data-code]", racine).forEach(b => b.classList.add("cas", "c-" + b.dataset.code[0]));
}
function etapeGuide(z, c, i, e) {
  const jetons = e.la.split(" "), coupes = new Set(), mots = [];
  jetons.forEach(j => j === "/" ? coupes.add(mots.length) : mots.push(j));
  const net = m => m.replace(/[.,;:!?()«»"]/g, ""), cas = e.cas ? e.cas.split(" ") : null;
  const cls = (n, marque) => cas ? "c-" + cas[n] : classeMarque(marque);
  let k = 0, err = 0;
  z.innerHTML = enTete(e) + `<div class="guide-phrase" lang="la">${mots.map((m, n) => `${coupes.has(n) ? '<span class="coupe"></span>' : ""}<button type="button" class="mot" data-n="${n}" aria-pressed="false" disabled>${m}</button>`).join("")}</div>${cas ? LEGENDE_CAS : ""}
<ul class="guide-recap" aria-label="Analyse de la phrase"></ul><ol class="guide-faits"></ol><div id="pas"></div>`;
  const btns = $$(".mot", z), P = $("#pas", z);
  btns.forEach(b => b.onclick = () => b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"));
  const activer = oui => btns.forEach(b => { b.disabled = !oui; b.setAttribute("aria-pressed", "false"); });
  const valider = p => {
    if (p.clic && (p.marque || cas)) p.clic.forEach(n => btns[n].classList.add("cas", cls(n, p.marque)));
    if (p.marque && p.clic) { $(".guide-recap", z).insertAdjacentHTML("beforeend", `<li class="cas ${cls(p.clic[0], p.marque)}"><i class="la">${p.clic.map(n => net(mots[n])).join(" ")}</i> ${p.marque}</li>`); }
    if (p.expl) $(".guide-faits", z).insertAdjacentHTML("beforeend", `<li>${p.expl}</li>`);
    k++; pas();
  };
  function pas() {
    const p = e.pas[k];
    if (!p) return fin();
    if (p.clic) {
      let essais = 0; const bons = [...p.clic].sort((a, b) => a - b);
      activer(true);
      P.innerHTML = `<p class="question">${k + 1}. ${p.q}</p><p class="muet">Touche le ou les mots dans la phrase, puis valide.</p><div class="actions"><button class="btn" type="button" id="g-ok">Valider</button></div><div id="g-ret"></div>`;
      $("#g-ok").onclick = () => {
        const ch = btns.filter(b => b.getAttribute("aria-pressed") === "true").map(b => +b.dataset.n);
        if (String(ch) === String(bons)) { activer(false); valider(p); return; }
        err++; essais++;
        if (essais >= 2) { activer(false); $("#g-ok").parentNode.remove(); $("#g-ret").innerHTML = `<div class="retour non">La réponse était : <i class="la"><b>${bons.map(n => net(mots[n])).join(" ")}</b></i>.</div><div class="actions"><button class="btn" type="button" id="g-suite">Continuer</button></div>`; $("#g-suite").onclick = () => valider(p); }
        else $("#g-ret").innerHTML = `<div class="retour non">${ch.length ? "Ce n'est pas cela." : "Touche d'abord un mot de la phrase."} ${p.indice || "Relis la question et essaie encore."}</div>`;
      };
    } else { activer(false); blocQcm(P, { q: `${k + 1}. ${p.q}`, choix: p.choix, bon: p.bon, bons: p.bons, retours: p.retours }, n => { err += n; valider(p); }); }
    if (k) P.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  function fin() {
    activer(false);
    if (cas) btns.forEach((b, n) => b.classList.add("cas", "c-" + cas[n]));
    P.innerHTML = `${e.construction ? `<p><strong>Ordre pour traduire :</strong> <i class="la">${e.construction}</i></p>` : ""}${e.motamot ? `<p><strong>Mot à mot :</strong> ${e.motamot}</p>` : ""}<p class="question">Écris maintenant ta traduction en bon français.</p><label class="sr" for="g-trad">Ta traduction</label><textarea id="g-trad" placeholder="Ta traduction"></textarea><div class="actions"><button class="btn" type="button" id="g-voir">Comparer avec la traduction</button></div>`;
    $("#g-voir").onclick = () => {
      $("#g-trad").readOnly = true; $("#g-voir").parentNode.remove();
      P.insertAdjacentHTML("beforeend", `<div class="phrase"><div class="trad">${e.fr}${e.note ? `<br><small>${e.note}</small>` : ""}</div><div class="seg"><button type="button" data-v="1">J'avais l'essentiel</button><button type="button" data-v="0">À retravailler</button></div></div>`);
      $$(".seg button", P).forEach(b => b.onclick = () => { $(".seg", P).remove(); succes(c, i, +b.dataset.v ? etoilesPour(err) : 1, ""); });
    };
    P.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  pas();
}

/* ---------- Atelier : entraînement libre ---------- */
const A = { onglet: "decl", mode: "analyser", bons: 0, total: 0, mods: null, temps: null };
function vueAtelier() {
  const declDispo = [...new Set(NOMS_ATELIER.map(n => MODELES[n.mod].decl))];
  A.mods = A.mods || [1, 2]; A.temps = A.temps || ["present"];
  if (A.mode === "donner" || (A.onglet === "decl" && A.mode === "traduire")) A.mode = "analyser";
  app.innerHTML = `<h1 tabindex="-1">Atelier</h1><p class="muet">Un entraînement sans fin pour reconnaître les formes des déclinaisons et des conjugaisons, comme au devoir. Chaque bonne réponse rapporte 2 points.</p>
<div class="carte"><div class="seg" role="group" aria-label="Type d'entraînement">${[["decl", "Déclinaisons"], ["conj", "Conjugaisons"]].map(([k, n]) => `<button type="button" data-onglet="${k}" aria-pressed="${A.onglet === k}">${n}</button>`).join("")}</div>
<p class="muet" style="margin:.8rem 0 .3rem">${A.onglet === "decl" ? "Déclinaisons à travailler" : "Temps à travailler"}</p>
<div class="seg" id="portee">${A.onglet === "decl" ? declDispo.map(d => `<button type="button" data-p="${d}" aria-pressed="${A.mods.includes(d)}">${d}${d === 1 ? "re" : "e"}</button>`).join("") : Object.entries(TEMPS).map(([k, t]) => `<button type="button" data-p="${k}" aria-pressed="${A.temps.includes(k)}">${t.nom}</button>`).join("")}</div>
<p class="muet" style="margin:.8rem 0 .3rem">Exercice</p>
<div class="seg">${(A.onglet === "decl" ? [["analyser", "Reconnaître les cas"]] : [["analyser", "Niveau 1 : reconnaître"], ["traduire", "Niveau 2 : reconnaître et traduire"]]).map(([k, n]) => `<button type="button" data-mode="${k}" aria-pressed="${A.mode === k}">${n}</button>`).join("")}</div></div>
<div class="carte" id="zone" style="margin-top:1rem"></div><p class="score" id="score" style="margin-top:.8rem"></p>`;
  $$("[data-onglet]").forEach(b => b.onclick = () => { A.onglet = b.dataset.onglet; vueAtelier(); });
  $$("[data-mode]").forEach(b => b.onclick = () => { A.mode = b.dataset.mode; vueAtelier(); });
  $$("#portee button").forEach(b => b.onclick = () => {
    const liste = A.onglet === "decl" ? A.mods : A.temps, v = A.onglet === "decl" ? +b.dataset.p : b.dataset.p, k = liste.indexOf(v);
    if (k >= 0) { if (liste.length > 1) liste.splice(k, 1); } else liste.push(v);
    vueAtelier();
  });
  questionAtelier();
}
function pointAtelier(ok) {
  A.total++; if (ok) { A.bons++; S.atelier++; S.xp += 2; marquerJour(); verifierBadges(); sauver(); majEntete(); }
  $("#score").textContent = `Cette séance : ${A.bons} bonne(s) réponse(s) sur ${A.total}.`;
}
const suiteAtelier = z => { z.insertAdjacentHTML("beforeend", `<div class="actions"><button class="btn" type="button" id="encore">Question suivante</button></div>`); $("#encore").onclick = questionAtelier; $("#encore").focus(); };
function questionAtelier() {
  const z = $("#zone"); if (!z) return;
  if (A.onglet === "decl") {
    const n = auHasard(NOMS_ATELIER.filter(x => A.mods.includes(MODELES[x.mod].decl))), f = formesPlates(decliner(n.mod, n.rad, n.nomSg)), k = Math.floor(Math.random() * 12);
    const lib = k => `${CAS[k % 6].toLowerCase()} ${k < 6 ? "singulier" : "pluriel"}`;
    if (A.mode === "donner") {
      z.innerHTML = `<p class="consigne-atelier">Mets <i class="la"><b>${n.la}</b></i> (${n.fr}) au <b>${lib(k)}</b>.</p><div class="rangee"><label for="rep">Ta réponse<input type="text" id="rep" autocomplete="off" autocapitalize="none" spellcheck="false"></label><button class="btn" type="button" id="ok">Valider</button></div><div id="ret"></div>`;
      const valider = () => { const ok = norm($("#rep").value) === norm(f[k]); $("#rep").readOnly = true; $("#rep").classList.add(ok ? "juste" : "faux"); $("#ok").remove(); $("#ret").innerHTML = `<div class="retour ${ok ? "ok" : "non"}">${ok ? "Recte !" : `La forme attendue est <i class="la"><b>${f[k]}</b></i>.`} Modèle : <i class="la">${MODELES[n.mod].nom}</i>.</div>`; pointAtelier(ok); suiteAtelier(z); };
      $("#ok").onclick = valider; $("#rep").onkeydown = ev => { if (ev.key === "Enter" && $("#ok")) valider(); }; $("#rep").focus();
    } else {
      const bons = f.map((x, j) => x === f[k] ? CODES[j % 6] + (j < 6 ? "s" : "p") : null).filter(Boolean).sort();
      z.innerHTML = `<p class="consigne-atelier">Quels cas et nombres cette forme peut-elle avoir ?<span class="forme">${f[k]}</span><span class="muet"><i class="la">${n.la}</i> : ${n.fr}</span></p><div style="max-width:18rem">${grilleCas("a")}</div><div class="actions"><button class="btn" type="button" id="ok">Valider</button></div><div id="ret"></div>`;
      brancherGrille($(".grille", z));
      $("#ok").onclick = () => { const ok = String(lireGrille($(".grille", z))) === String(bons); $$(".grille button", z).forEach(b => b.disabled = true); $("#ok").parentNode.remove(); $("#ret").innerHTML = `<div class="retour ${ok ? "ok" : "non"}">${ok ? "Recte !" : "Pas tout à fait."} <i class="la">${f[k]}</i> : ${bons.map(nomCode).join(", ")}.</div>`; pointAtelier(ok); suiteAtelier(z); };
    }
  } else {
    const combos = A.temps.flatMap(t => TEMPS[t].voix.map(v => [t, v])), [t, voix] = auHasard(combos), vb = auHasard(Object.keys(VERBES)), p = Math.floor(Math.random() * 6);
    const forme = conjuguer(vb, t, voix)[p].join("");
    if (A.mode === "donner") {
      z.innerHTML = `<p class="consigne-atelier">Conjugue <i class="la"><b>${VERBES[vb].tp}</b></i> (${VERBES[vb].fr}) : <b>${TEMPS[t].nom.toLowerCase()} ${voix}, ${PERS[p].replace("sg.", "personne du singulier").replace("pl.", "personne du pluriel")}</b>.</p><div class="rangee"><label for="rep">Ta réponse<input type="text" id="rep" autocomplete="off" autocapitalize="none" spellcheck="false"></label><button class="btn" type="button" id="ok">Valider</button></div><div id="ret"></div>`;
      const valider = () => { const ok = norm($("#rep").value) === norm(forme); $("#rep").readOnly = true; $("#rep").classList.add(ok ? "juste" : "faux"); $("#ok").remove(); $("#ret").innerHTML = `<div class="retour ${ok ? "ok" : "non"}">${ok ? "Recte !" : `La forme attendue est <i class="la"><b>${forme}</b></i>.`}</div>`; pointAtelier(ok); suiteAtelier(z); };
      $("#ok").onclick = valider; $("#rep").onkeydown = ev => { if (ev.key === "Enter" && $("#ok")) valider(); }; $("#rep").focus();
    } else {
      /* toutes les analyses possibles de cette forme, tous temps confondus */
      const toutes = []; Object.keys(TEMPS).forEach(tt => TEMPS[tt].voix.forEach(vv => conjuguer(vb, tt, vv).forEach((x, pp) => { if (x.join("") === forme) toutes.push([tt, vv, pp]); })));
      const n2 = A.mode === "traduire", T = Object.keys(TEMPS);
      const an = toutes.map(x => ({ t: x[0], m: "ind", v: x[1] === "passif" ? "p" : "a", p: x[2] })), frs = toutes.flatMap(x => traduireFr(vb, x[0], x[1], x[2]));
      z.innerHTML = `<p class="consigne-atelier">${n2 ? "Analyse cette forme, puis traduis-la." : "Analyse cette forme."}<span class="forme">${forme}</span><span class="muet"><i class="la">${VERBES[vb].tp}</i> : ${VERBES[vb].fr}</span></p>
<div class="verbe">${champsVerbe(T, ["ind"], true, n2)}</div><div class="actions"><button class="btn" type="button" id="ok">Valider</button></div><div id="ret"></div>`;
      $("#ok").onclick = () => {
        const okA = lireVerbe(z, an, T, ["ind"], true), okF = !n2 || frOk($(".s-fr", z).value, frs), ok = okA && okF;
        $$("select, input", z).forEach(s => s.disabled = true); $("#ok").parentNode.remove();
        $("#ret").innerHTML = `<div class="retour ${ok ? "ok" : "non"}">${ok ? "Recte !" : !okA && !okF ? "Analyse et traduction à revoir." : !okA ? "Analyse à revoir." : "Traduction à revoir."} <i class="la">${forme}</i> : ${toutes.map(x => `${TEMPS_N[x[0]]} ${x[1]}, ${PERS[x[2]]}${n2 ? ` (« ${traduireFr(vb, x[0], x[1], x[2])[0]} »)` : ""}`).join(" ; ou ")}.</div>`; pointAtelier(ok); suiteAtelier(z);
      };
    }
  }
}

/* ---------- Lexique ---------- */
const L = { q: "", ch: "", fiches: false, pile: [], vu: false };
function vueLexique() {
  app.innerHTML = `<h1 tabindex="-1">Lexique</h1><p class="muet">${LEXIQUE.length} mots : ceux des chapitres et les 300 mots du vocabulaire des Tristes. Les noms sont donnés avec leur génitif et leur genre, les verbes avec leurs temps primitifs.</p>
<div class="filtres"><label class="sr" for="lx-q">Chercher un mot</label><input type="text" id="lx-q" placeholder="Chercher un mot latin ou français" value="${h(L.q)}"><label class="sr" for="lx-ch">Chapitre</label><select id="lx-ch"><option value="">Tous les chapitres</option>${CHAPS.filter(c => LEXIQUE.some(m => "c" + m.ch === c.id)).map(c => `<option value="${c.id.slice(1)}" ${c.id.slice(1) === L.ch ? "selected" : ""}>${lab(c)}. ${h(c.titre)}</option>`).join("")}</select>
<button class="btn second" type="button" id="lx-mode">${L.fiches ? "Voir la liste" : "Réviser en fiches"}</button></div><div id="lx"></div>`;
  $("#lx-q").oninput = ev => { L.q = ev.target.value; L.pile = []; dessinerLexique(); };
  $("#lx-ch").onchange = ev => { L.ch = ev.target.value; L.pile = []; dessinerLexique(); };
  $("#lx-mode").onclick = () => { L.fiches = !L.fiches; L.pile = []; vueLexique(); };
  dessinerLexique();
}
function dessinerLexique() {
  const q = norm(L.q), mots = LEXIQUE.filter(m => (!L.ch || String(m.ch) === L.ch) && (!q || norm(m.la).includes(q) || norm(m.fr).includes(q)));
  const z = $("#lx");
  if (!mots.length) { z.innerHTML = `<p class="muet">Aucun mot ne correspond. Essaie un autre mot ou choisis « Tous les chapitres ».</p>`; return; }
  if (!L.fiches) { z.innerHTML = `<div class="carte"><table class="lexique"><tbody>${mots.map(m => `<tr><td lang="la">${h(m.la)}</td><td>${h(m.fr)}</td><td>chap. ${lab(chapDe(m.ch))}</td></tr>`).join("")}</tbody></table></div>`; return; }
  if (!L.pile.length) { L.pile = melanger(mots); L.vu = false; }
  const m = L.pile[0];
  z.innerHTML = `<div class="carte fiche"><span class="mot" lang="la">${h(m.la)}</span>${L.vu ? `<span class="sens">${h(m.fr)}</span>` : `<span class="muet">Que veut dire ce mot ?</span>`}
<div class="actions">${L.vu ? `<button class="btn" type="button" id="f-su">Je le savais</button><button class="btn second" type="button" id="f-re">À revoir</button>` : `<button class="btn" type="button" id="f-voir">Voir le sens</button>`}</div><span class="muet">${L.pile.length} fiche(s) restante(s)</span></div>`;
  const av = (revoir) => { const x = L.pile.shift(); if (revoir) L.pile.push(x); L.vu = false; if (!L.pile.length) toast("Pile terminée, on recommence."); dessinerLexique(); };
  if (L.vu) { $("#f-su").onclick = () => av(false); $("#f-re").onclick = () => av(true); } else $("#f-voir").onclick = () => { L.vu = true; dessinerLexique(); };
}

/* ---------- Profil et code pour le professeur ---------- */
const SEL = "via-latina-2026";
function hacher(s) { let x = 0x811c9dc5; for (const ch of unescape(encodeURIComponent(s))) { x ^= ch.charCodeAt(0); x = Math.imul(x, 0x01000193) >>> 0; } return x.toString(36); }
const versB64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const depuisB64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
function coderBilan() {
  const f = {};
  CHAPS.forEach(c => { const s = c.etapes.map((e, i) => fait(c, i) ? String(fait(c, i).e) : "0").join(""); if (/[1-3]/.test(s)) f[c.id] = s; });
  const corps = versB64(JSON.stringify({ p: S.pseudo, k: S.classe, d: jour(), x: S.xp, s: S.serie.n, a: S.atelier, f }));
  return `VIA1.${corps}.${hacher(corps + SEL)}`;
}
function decoderBilan(code) {
  const m = String(code).match(/^VIA1\.([A-Za-z0-9_-]+)\.([a-z0-9]+)$/);
  if (!m || hacher(m[1] + SEL) !== m[2]) return null;
  try { const o = JSON.parse(depuisB64(m[1])); return o && typeof o.f === "object" && typeof o.x === "number" ? o : null; } catch (e) { return null; }
}
async function copier(texte, btn) {
  try { await navigator.clipboard.writeText(texte); toast("Copié dans le presse-papiers."); }
  catch (e) { toast("Copie impossible ici : sélectionne le texte et copie-le à la main."); }
  if (btn) btn.blur();
}
function vueProfil() {
  const nv = niveau(S.xp), code = coderBilan();
  app.innerHTML = `<h1 tabindex="-1">Profil</h1>
<div class="carte"><h2>${h(nv.nom)}</h2><p>${S.xp} points${nv.max ? `, prochain rang à ${nv.max} points (${h(NIVEAUX[nv.i + 1][1])})` : ", rang le plus élevé atteint"}</p><span class="jauge grand"><i style="width:${nv.max ? Math.round(100 * (S.xp - nv.min) / (nv.max - nv.min)) : 100}%"></i></span>
<ol class="rangs">${NIVEAUX.map((n, k) => `<li class="${k <= nv.i ? "fait" : ""}">${h(n[1].split(" ")[0])}</li>`).join("")}</ol></div>
<dl class="chiffres"><div><dt>Étapes validées</dt><dd>${totalFaits()} / ${totalEtapes}</dd></div><div><dt>Chapitres terminés</dt><dd>${CHAPS.filter(chapFini).length} / ${CHAPS.length}</dd></div><div><dt>Jours d'affilée</dt><dd>${S.serie.n}</dd></div><div><dt>Formes réussies à l'atelier</dt><dd>${S.atelier}</dd></div></dl>
<section class="bloc"><h2>Badges</h2><ul class="badges">${BADGES.map((b, k) => `<li class="${S.badges[b.id] ? "obtenu" : ""}"><span class="ecusson" aria-hidden="true">${ROMAINS[k + 1]}</span><div><strong lang="la">${h(b.nom)}</strong><span>${h(b.desc)}</span>${S.badges[b.id] ? "" : `<span class="sr">(pas encore obtenu)</span>`}</div></li>`).join("")}</ul></section>
<section class="bloc"><h2>Code pour mon professeur</h2><p class="muet">Indique ton prénom et ta classe, puis copie le code et envoie-le à ton professeur. Il contient seulement ta progression sur ce site.</p>
<div class="champs"><label for="pf-nom">Prénom et nom<input type="text" id="pf-nom" value="${h(S.pseudo)}" maxlength="40"></label><label for="pf-classe">Classe<select id="pf-classe"><option value="">Choisir ma classe…</option>${NIVEAUX_CLASSES.map(nv => `<optgroup label="${nv}">${CLASSES.filter(k => k.niveau === nv).map(k => `<option value="${h(k.id)}" ${S.classe === k.id ? "selected" : ""}>${h(k.nom)}</option>`).join("")}</optgroup>`).join("")}${S.classe && !CLASSES.some(k => k.id === S.classe) ? `<option value="${h(S.classe)}" selected>${h(S.classe)}</option>` : ""}</select></label></div>
<p class="code-prof" id="pf-code">${h(code)}</p><div class="actions"><button class="btn" type="button" id="pf-copier">Copier le code</button></div></section>
<section class="bloc"><h2>Recommencer à zéro</h2><p class="muet">Efface toute la progression enregistrée dans ce navigateur.</p><button class="btn discret" type="button" id="pf-raz">Effacer ma progression</button></section>`;
  const maj = () => { S.pseudo = $("#pf-nom").value.trim(); S.classe = $("#pf-classe").value.trim(); sauver(); $("#pf-code").textContent = coderBilan(); };
  $("#pf-nom").oninput = maj; $("#pf-classe").onchange = maj;
  $("#pf-copier").onclick = ev => copier($("#pf-code").textContent, ev.currentTarget);
  $("#pf-raz").onclick = ev => { const b = ev.currentTarget; if (b.dataset.sur) { const th = S.theme; S = etatVide(); S.theme = th; sauver(); majEntete(); toast("Progression effacée."); vueProfil(); } else { b.dataset.sur = 1; b.textContent = "Confirmer : tout effacer"; } };
}
/* Espace professeur : les codes collés sont rangés par classe et conservés dans ce navigateur (jamais envoyés). */
const CLE_PROF = "vialatina.prof.v1";
let PROF = { eleves: {}, filtre: "" };
try { const b = localStorage.getItem(CLE_PROF); if (b) PROF = Object.assign(PROF, JSON.parse(b)); } catch (e) { /* stockage indisponible */ }
const sauverProf = () => { try { localStorage.setItem(CLE_PROF, JSON.stringify(PROF)); } catch (e) { /* idem */ } };
const cleEleve = o => norm(o.k || "") + "|" + norm(o.p || "");
function vueProf() {
  app.innerHTML = `<h1 tabindex="-1">Espace professeur</h1>
<p class="muet">Chaque élève choisit sa classe dans son Profil, puis vous envoie son code. Collez les codes ici : ils sont rangés par classe et conservés dans ce navigateur. Rien n'est envoyé sur Internet.</p>
<label for="pr-codes" style="font-weight:700">Ajouter des codes d'élèves</label><textarea id="pr-codes" rows="4" placeholder="VIA1.… (un ou plusieurs codes, à la suite ou un par ligne)"></textarea>
<div class="actions"><button class="btn" type="button" id="pr-ok">Ajouter à mes classes</button></div><div id="pr-msg"></div>
<div class="seg" id="pr-filtre" role="group" aria-label="Niveau affiché" style="margin-top:1.4rem">${["", ...NIVEAUX_CLASSES].map(nv => `<button type="button" data-f="${nv}" aria-pressed="${PROF.filtre === nv}">${nv || "Toutes mes classes"}</button>`).join("")}</div>
<div id="pr-tab" style="margin-top:1rem"></div>`;
  $("#pr-ok").onclick = () => {
    const codes = [...new Set($("#pr-codes").value.match(/VIA1\.[A-Za-z0-9_-]+\.[a-z0-9]+/g) || [])];
    let ajoutes = 0, maj = 0, rejetes = 0;
    codes.forEach(code => { const o = decoderBilan(code); if (!o) { rejetes++; return; } const k = cleEleve(o), anc = PROF.eleves[k] && decoderBilan(PROF.eleves[k]); if (anc && anc.d > o.d) return; anc ? maj++ : ajoutes++; PROF.eleves[k] = code; });
    sauverProf();
    $("#pr-msg").innerHTML = !codes.length ? `<div class="retour non">Aucun code trouvé. Un code commence par « VIA1. » et doit être copié en entier.</div>` : `<div class="retour ok">${ajoutes} élève(s) ajouté(s), ${maj} mis à jour${rejetes ? `, ${rejetes} code(s) illisible(s) ignoré(s)` : ""}.</div>`;
    if (ajoutes + maj) $("#pr-codes").value = "";
    dessinerClasses();
  };
  $$("#pr-filtre button").forEach(b => b.onclick = () => { PROF.filtre = b.dataset.f; sauverProf(); $$("#pr-filtre button").forEach(x => x.setAttribute("aria-pressed", x === b)); dessinerClasses(); });
  dessinerClasses();
}
function dessinerClasses() {
  const z = $("#pr-tab"); if (!z) return;
  const eleves = Object.entries(PROF.eleves).map(([k, code]) => ({ k, o: decoderBilan(code) })).filter(x => x.o);
  const groupes = [...CLASSES.map(c => ({ ...c })), { id: null, niveau: "", nom: "Autres classes" }].filter(g => !PROF.filtre || g.niveau === PROF.filtre);
  const connues = CLASSES.map(c => c.id);
  const pct = (o, c) => { const s = o.f[c.id] || ""; return Math.round(100 * [...s].filter(x => x !== "0").length / c.etapes.length); };
  const global = o => Math.round(100 * CHAPS.reduce((n, c) => n + [...(o.f[c.id] || "")].filter(x => x !== "0").length, 0) / totalEtapes);
  const lignesCsv = [["Classe", "Élève", "Date", "Points", "Rang", "Série", "Parcours (%)", ...CHAPS.map(c => nomChap(c) + " (%)")]];
  let html = "", total = 0;
  groupes.forEach(g => {
    const liste = eleves.filter(x => g.id ? x.o.k === g.id : !connues.includes(x.o.k)).sort((a, b) => (a.o.p || "").localeCompare(b.o.p || ""));
    if (!g.id && !liste.length) return;
    total += liste.length;
    const cols = CHAPS.filter(c => liste.some(x => o_a(x.o, c)));
    const moy = liste.length ? Math.round(liste.reduce((n, x) => n + global(x.o), 0) / liste.length) : 0;
    liste.forEach(x => lignesCsv.push([g.nom, x.o.p || "(sans nom)", x.o.d, x.o.x, niveau(x.o.x).nom.split(" ")[0], x.o.s, global(x.o), ...CHAPS.map(c => pct(x.o, c))]));
    html += `<section class="classe"><h2>${h(g.nom)}${g.niveau ? ` <span class="muet">${g.niveau}</span>` : ""}</h2>
<p class="muet">${liste.length ? `${liste.length} élève${liste.length > 1 ? "s" : ""}, progression moyenne : ${moy} % du parcours` : "Aucun code reçu pour cette classe."}</p>
${liste.length ? `<div class="tab-wrap"><table class="donnees"><thead><tr><th>Élève</th><th>Date</th><th>Points</th><th>Rang</th><th>Série</th><th>Parcours</th>${cols.map(c => `<th title="${h(c.titre)}">${lab(c)}</th>`).join("")}<th><span class="sr">Retirer</span></th></tr></thead><tbody>${liste.map(x => `<tr><th>${h(x.o.p || "(sans nom)")}</th><td>${h(x.o.d)}</td><td>${x.o.x}</td><td>${h(niveau(x.o.x).nom.split(" ")[0])}</td><td>${x.o.s}</td><td>${global(x.o)} %</td>${cols.map(c => `<td>${pct(x.o, c)} %</td>`).join("")}<td><button type="button" class="retirer" data-k="${h(x.k)}" aria-label="Retirer ${h(x.o.p || "cet élève")}">×</button></td></tr>`).join("")}</tbody></table></div>` : ""}</section>`;
  });
  z.innerHTML = html + `<div class="actions">${total ? `<button class="btn second" type="button" id="pr-csv">Copier ${PROF.filtre ? "ce niveau" : "toutes mes classes"} (CSV)</button><button class="btn discret" type="button" id="pr-vider">Vider mes classes</button>` : ""}</div>
<p class="muet" style="margin-top:.8rem">Les colonnes numérotées donnent la part des étapes validées dans chaque chapitre commencé par la classe. Un nouveau code du même élève remplace l'ancien.</p>`;
  $$(".retirer", z).forEach(b => b.onclick = () => { delete PROF.eleves[b.dataset.k]; sauverProf(); dessinerClasses(); });
  const csv = $("#pr-csv"); if (csv) csv.onclick = ev => copier(lignesCsv.map(l => l.map(x => `"${String(x).replace(/"/g, '""')}"`).join(";")).join("\n"), ev.currentTarget);
  const vd = $("#pr-vider"); if (vd) vd.onclick = () => { if (vd.dataset.sur) { PROF.eleves = {}; sauverProf(); toast("Classes vidées."); dessinerClasses(); } else { vd.dataset.sur = 1; vd.textContent = "Confirmer : effacer tous les élèves"; } };
}
const o_a = (o, c) => /[1-3]/.test(o.f[c.id] || "");

/* ---------- Routage : #parcours, #c3, #c3-2, #c3-fin, #atelier, #lexique, #profil, #professeur ---------- */
function route() {
  const r = location.hash.replace(/^#\/?/, "") || "parcours";
  const m = r.match(/^(c\d+)(?:-(\d+|fin))?$/), c = m && CHAPS.find(x => x.id === m[1]);
  let onglet = c && c.partie.elex ? "elex" : c && c.partie.devoir ? "devoirs" : "parcours";
  if (c && m[2] === "fin") vueFin(c);
  else if (c && m[2] && c.etapes[+m[2] - 1]) vueEtape(c, +m[2] - 1);
  else if (c) vueChapitre(c);
  else if (r === "devoirs") { onglet = r; vueDevoirs(); }
  else if (r === "elex") { onglet = r; vueElex(); }
  else if (r === "atelier") { onglet = r; vueAtelier(); }
  else if (r === "lexique") { onglet = r; vueLexique(); }
  else if (r === "profil") { onglet = r; vueProfil(); }
  else if (r === "professeur") { onglet = ""; vueProf(); }
  else vueAccueil();
  $$("nav.principal a").forEach(a => a.dataset.onglet === onglet ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  window.scrollTo(0, 0);
  const t = $("h1", app); if (t && r !== "parcours") t.focus({ preventScroll: true });
}
new MutationObserver(() => colorerCas(app)).observe(app, { childList: true, subtree: true });
window.addEventListener("hashchange", route);
appliquerTheme(); majEntete(); route();

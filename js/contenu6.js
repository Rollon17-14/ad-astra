/* CONTENU — Partie « Apprendre à traduire pas à pas » (identifiants c18 à c20).
   Type d'étape propre à cette partie :
     guide : { t, titre, intro?, vocab?, la (phrase latine), pas:[…], motamot?, fr, note? }
       pas « clic »  : { q, clic:[rangs des mots à toucher, à partir de 0], marque? ("verbe", "sujet", "COD"…), expl, indice? }
       pas « choix » : { q, choix:[…], bon, expl }
     « expl » est la phrase qui reste affichée sous la phrase une fois le pas validé. */
var PARTIE_TRAD = [{
  id: "p6", titre: "Apprendre à traduire pas à pas", sous: "Une méthode en six étapes, de la phrase simple à la phrase complexe. Chaque chapitre indique ce qu'il faut connaître avant de commencer.",
  chapitres: [
  {
    id: "c18", titre: "La méthode en six étapes", resume: "Traduire une phrase simple sans deviner. À faire après les deux premières déclinaisons et le présent.",
    etapes: [
      { t: "lecon", titre: "Traduire, ce n'est pas deviner",
        texte: `<p>Deux réflexes conduisent presque toujours au contresens :</p>
<ul><li><strong>traduire les mots dans l'ordre</strong> où ils se présentent, comme en français ;</li>
<li><strong>chercher tous les mots dans le dictionnaire</strong>, puis essayer de fabriquer une phrase avec les sens trouvés.</li></ul>
<p>En latin, on <strong>analyse d'abord</strong>, on <strong>traduit ensuite</strong>. Voici la méthode, toujours la même :</p>
<ol><li><strong>Je lis</strong> la phrase en entier, jusqu'au point.</li>
<li><strong>Je repère le verbe</strong> conjugué et je l'analyse : personne, nombre, temps, voix.</li>
<li><strong>Je cherche le sujet</strong> : un nominatif, du même nombre que le verbe.</li>
<li><strong>Je cherche le COD</strong> : un accusatif (ou l'attribut, avec le verbe <i class="la">sum</i>).</li>
<li><strong>Je rattache les autres mots</strong> selon leur cas : génitif à un nom, datif et ablatif au verbe, adjectif à son nom.</li>
<li><strong>Je traduis</strong> mot à mot dans l'ordre du français, puis j'améliore mon français.</li></ol>
<aside class="retenir"><strong>À retenir.</strong> Le verbe est la clé de la phrase : c'est toujours par lui qu'on commence.</aside>` },
      { t: "ordre", titre: "Les six étapes dans l'ordre", q: "Remets les étapes de la méthode dans le bon ordre.",
        lignes: ["Lire la phrase en entier", "Repérer et analyser le verbe conjugué", "Chercher le sujet (nominatif)", "Chercher le COD (accusatif) ou l'attribut", "Rattacher les autres mots selon leur cas", "Traduire mot à mot, puis améliorer le français"] },
      { t: "lecon", titre: "Ce que le verbe nous apprend",
        texte: `<p>La désinence du verbe renseigne déjà sur le sujet, avant même qu'on l'ait trouvé.</p>
<div class="tab-wrap"><table class="donnees"><thead><tr><th>Désinence</th><th>Personne</th><th>Ce que je sais du sujet</th></tr></thead><tbody>
<tr><th><i class="la">-o, -m</i></th><td>1re sg.</td><td>« je » : pas de nominatif à chercher</td></tr>
<tr><th><i class="la">-s</i></th><td>2e sg.</td><td>« tu » : pas de nominatif à chercher</td></tr>
<tr><th><i class="la">-t</i></th><td>3e sg.</td><td>un nominatif <strong>singulier</strong>, ou « il, elle » s'il n'y en a pas</td></tr>
<tr><th><i class="la">-mus</i></th><td>1re pl.</td><td>« nous »</td></tr>
<tr><th><i class="la">-tis</i></th><td>2e pl.</td><td>« vous »</td></tr>
<tr><th><i class="la">-nt</i></th><td>3e pl.</td><td>un nominatif <strong>pluriel</strong>, ou « ils, elles »</td></tr></tbody></table></div>
<p>C'est précieux quand une forme est ambiguë. <i class="la">agricolae</i> peut être un génitif singulier, un datif singulier ou un nominatif pluriel. Si le verbe est <i class="la">amant</i> (3e personne du pluriel), il lui faut un sujet pluriel : <i class="la">agricolae</i> est donc au nominatif pluriel.</p>` },
      { t: "quiz", titre: "Interroger le verbe",
        questions: [
          { q: "Le verbe est <i class=\"la\">amant</i>. Je cherche…", choix: ["un sujet au nominatif pluriel", "un sujet au nominatif singulier", "aucun sujet : c'est « nous »"], bon: 0, expl: "<i class=\"la\">-nt</i> : 3e personne du pluriel." },
          { q: "Le verbe est <i class=\"la\">legimus</i>. Le sujet est…", choix: ["« nous » : il est contenu dans le verbe", "un nominatif pluriel à chercher", "un nominatif singulier à chercher"], bon: 0, expl: "<i class=\"la\">-mus</i> : 1re personne du pluriel." },
          { q: "<i class=\"la\">Rosam videt.</i> Il n'y a pas de nominatif. Je traduis…", choix: ["Il (ou elle) voit une rose.", "La rose voit.", "Je vois une rose."], bon: 0, expl: "<i class=\"la\">-t</i> sans nominatif : le sujet est « il » ou « elle ». <i class=\"la\">rosam</i> est à l'accusatif : COD." },
          { q: "<i class=\"la\">Puellae … cantant.</i> Quel est le cas de <i class=\"la\">puellae</i> ?", choix: ["Nominatif pluriel : le verbe est au pluriel", "Génitif singulier", "Datif singulier"], bon: 0, expl: "Le verbe en <i class=\"la\">-nt</i> réclame un sujet pluriel : « les jeunes filles chantent »." }
        ] },
      { t: "guide", titre: "Traduction guidée : une phrase toute simple", intro: "Applique la méthode, un pas après l'autre.",
        vocab: ["amo, as, are, avi, atum : aimer", "puella, ae, f : la jeune fille", "rosa, ae, f : la rose"],
        la: "Puella rosam amat.", cas: "N A X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [2], marque: "verbe", expl: "Verbe : <i class=\"la\">amat</i>.", indice: "Cherche la désinence <i class=\"la\">-t</i>." },
          { q: "Analyse <i class=\"la\">amat</i>.", choix: ["3e personne du singulier du présent", "3e personne du pluriel du présent", "1re personne du singulier du présent"], bon: 0, expl: "<i class=\"la\">amat</i> : 3e personne du singulier du présent. Le sujet est donc au singulier." },
          { q: "Où est le sujet ? Cherche un nominatif singulier.", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">puella</i>, nominatif singulier.", indice: "Le nominatif singulier de la 1re déclinaison est en <i class=\"la\">-a</i>." },
          { q: "Où est le COD ? Cherche un accusatif.", clic: [1], marque: "COD", expl: "COD : <i class=\"la\">rosam</i>, accusatif singulier.", indice: "L'accusatif singulier de la 1re déclinaison est en <i class=\"la\">-am</i>." }
        ],
        motamot: "la jeune fille / la rose / aime", fr: "La jeune fille aime la rose.", note: "En français, on remet les mots dans l'ordre sujet, verbe, COD." },
      { t: "guide", titre: "Traduction guidée : une forme ambiguë", intro: "<i class=\"la\">agricolae</i> a trois analyses possibles. Le verbe va trancher.",
        vocab: ["agricola, ae, m : le paysan", "amo, as, are, avi, atum : aimer", "terra, ae, f : la terre"],
        la: "Agricolae terram amant.", cas: "N A X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [2], marque: "verbe", expl: "Verbe : <i class=\"la\">amant</i>." },
          { q: "Que nous apprend <i class=\"la\">amant</i> ?", choix: ["3e personne du pluriel : le sujet est au pluriel", "3e personne du singulier : le sujet est au singulier", "1re personne du pluriel : le sujet est « nous »"], bon: 0, expl: "<i class=\"la\">amant</i> : 3e personne du pluriel. Il faut un sujet pluriel." },
          { q: "<i class=\"la\">agricolae</i> peut être génitif singulier, datif singulier ou nominatif pluriel. Lequel ici ?", choix: ["Nominatif pluriel : c'est le sujet de <i class=\"la\">amant</i>", "Génitif singulier : complément du nom <i class=\"la\">terram</i>", "Datif singulier : COI"], bon: 0, expl: "<i class=\"la\">agricolae</i> : nominatif pluriel, sujet. Sans lui, le verbe au pluriel n'aurait pas de sujet." },
          { q: "Où est le COD ?", clic: [1], marque: "COD", expl: "COD : <i class=\"la\">terram</i>, accusatif singulier." }
        ],
        motamot: "les paysans / la terre / aiment", fr: "Les paysans aiment la terre." },
      { t: "lecon", titre: "Sujet non exprimé, attribut du sujet",
        texte: `<p><strong>Quand il n'y a pas de nominatif.</strong> Le sujet est contenu dans la désinence du verbe. On le traduit par un pronom : <i class="la">Templum videmus</i>, « <strong>nous</strong> voyons un temple ».</p>
<aside class="attention"><strong>Le piège des neutres.</strong> <i class="la">templum</i> a la même forme au nominatif et à l'accusatif. C'est encore le verbe qui tranche : avec <i class="la">videmus</i>, le sujet est « nous », donc <i class="la">templum</i> ne peut être que COD.</aside>
<p><strong>Avec le verbe <i class="la">sum</i>.</strong> Il n'y a pas de COD à chercher, mais un <strong>attribut du sujet</strong>, au nominatif comme le sujet : <i class="la">Roma magna est</i>, « Rome est grande ».</p>
<p><strong>Le génitif.</strong> Il se rattache à un nom, le plus souvent celui qui le précède ou le suit immédiatement : <i class="la">servi domini</i>, « les esclaves du maître ».</p>` },
      { t: "guide", titre: "Traduction guidée : le sujet dans le verbe",
        vocab: ["magnus, a, um : grand", "templum, i, n : le temple", "video, es, ere, vidi, visum : voir"],
        la: "Magnum templum videmus.", cas: "A A X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [2], marque: "verbe", expl: "Verbe : <i class=\"la\">videmus</i>." },
          { q: "Que nous apprend <i class=\"la\">videmus</i> ?", choix: ["1re personne du pluriel : le sujet est « nous »", "3e personne du pluriel : il faut un nominatif pluriel", "3e personne du singulier : il faut un nominatif singulier"], bon: 0, expl: "<i class=\"la\">videmus</i> : 1re personne du pluriel. Le sujet est « nous » : inutile de chercher un nominatif." },
          { q: "Touche tous les mots du groupe COD.", clic: [0, 1], marque: "COD", expl: "COD : <i class=\"la\">magnum templum</i>, accusatif neutre singulier. L'adjectif s'accorde avec le nom.", indice: "Un nom et l'adjectif qui s'accorde avec lui." }
        ],
        motamot: "grand / temple / nous voyons", fr: "Nous voyons un grand temple.", note: "Le latin n'a pas d'article : à toi de choisir entre « le » et « un » selon le sens." },
      { t: "guide", titre: "Traduction guidée : avec le verbe sum", intro: "Trois mots en <i class=\"la\">-i</i> : il faut les départager.",
        vocab: ["bonus, a, um : bon", "dominus, i, m : le maître", "servus, i, m : l'esclave", "sum, es, esse, fui : être"],
        la: "Servi domini boni sunt.", cas: "N G N X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [3], marque: "verbe", expl: "Verbe : <i class=\"la\">sunt</i>, 3e personne du pluriel de <i class=\"la\">sum</i>. Il faut un sujet pluriel et, sans doute, un attribut." },
          { q: "Où est le sujet ? C'est le premier nominatif pluriel.", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">servi</i>, nominatif pluriel." },
          { q: "<i class=\"la\">domini</i> suit immédiatement <i class=\"la\">servi</i>. Quelle est sa fonction ?", choix: ["Génitif singulier : complément du nom <i class=\"la\">servi</i>", "Nominatif pluriel : second sujet", "Datif singulier : COI"], bon: 0, expl: "<i class=\"la\">domini</i> : génitif singulier, complément du nom. « Les esclaves du maître ».", retours: { 1: "Deux sujets seraient reliés par <i class=\"la\">et</i>.", 2: "Le datif singulier serait <i class=\"la\">domino</i>." } },
          { q: "Quelle est la fonction de <i class=\"la\">boni</i> ?", choix: ["Attribut du sujet, au nominatif pluriel comme <i class=\"la\">servi</i>", "COD de <i class=\"la\">sunt</i>", "Complément du nom"], bon: 0, expl: "<i class=\"la\">boni</i> : attribut du sujet. Le verbe <i class=\"la\">sum</i> n'a jamais de COD." }
        ],
        motamot: "les esclaves / du maître / bons / sont", fr: "Les esclaves du maître sont bons." },
      { t: "lecon", titre: "Du mot à mot au bon français",
        texte: `<p>Le mot à mot est un <strong>brouillon</strong> : il prouve que tu as compris la construction. Il reste à écrire une vraie phrase française.</p>
<ul><li><strong>L'ordre des mots.</strong> Sujet, verbe, COD, puis les autres compléments.</li>
<li><strong>Les articles.</strong> Le latin n'en a pas. Choisis « le », « un » ou « des » selon le sens : <i class="la">fabulas narrat</i>, « il raconte <strong>des</strong> histoires ».</li>
<li><strong>Les possessifs.</strong> Le latin les sous-entend souvent : <i class="la">filium amat</i>, « il aime <strong>son</strong> fils ».</li>
<li><strong>Le temps du verbe.</strong> Il doit être respecté : un présent reste un présent.</li>
<li><strong>Tous les mots</strong> doivent être traduits, et aucun ne doit être ajouté.</li></ul>
<aside class="attention"><strong>Le test final.</strong> Relis ta phrase à voix haute. Si elle ne veut rien dire en français, c'est que l'analyse contient une erreur : reprends à l'étape du verbe.</aside>` },
      { t: "guide", titre: "Traduction guidée : avec un COI",
        vocab: ["fabula, ae, f : l'histoire", "narro, as, are, avi, atum : raconter", "poeta, ae, m : le poète", "puer, pueri, m : l'enfant"],
        la: "Poeta fabulas pueris narrat.", cas: "N A D X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [3], marque: "verbe", expl: "Verbe : <i class=\"la\">narrat</i>, 3e personne du singulier du présent." },
          { q: "Où est le sujet ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">poeta</i>, nominatif singulier (un masculin de la 1re déclinaison)." },
          { q: "Où est le COD ?", clic: [1], marque: "COD", expl: "COD : <i class=\"la\">fabulas</i>, accusatif pluriel." },
          { q: "<i class=\"la\">pueris</i> peut être datif ou ablatif pluriel. Avec « raconter », c'est…", choix: ["un datif : COI, « aux enfants »", "un ablatif : complément circonstanciel de moyen", "un génitif : complément du nom"], bon: 0, expl: "<i class=\"la\">pueris</i> : datif pluriel, COI. On raconte quelque chose <em>à quelqu'un</em>." }
        ],
        motamot: "le poète / des histoires / aux enfants / raconte", fr: "Le poète raconte des histoires aux enfants." },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ol><li><strong>Lire</strong> toute la phrase.</li><li><strong>Verbe</strong> : le repérer, l'analyser. Sa désinence annonce le sujet.</li>
<li><strong>Sujet</strong> : nominatif du même nombre que le verbe ; sinon, un pronom.</li><li><strong>COD</strong> : accusatif. Avec <i class="la">sum</i> : attribut au nominatif.</li>
<li><strong>Le reste</strong> : génitif avec un nom, datif (COI) et ablatif (circonstances) avec le verbe, adjectif avec son nom.</li>
<li><strong>Traduire</strong> : mot à mot, puis bon français (ordre, articles, possessifs, temps).</li></ol>` }
    ]
  },
  {
    id: "c19", titre: "Traduire des phrases plus riches", resume: "Groupes de mots, compléments circonstanciels, passif. À faire après les adjectifs, l'imparfait et le futur.",
    etapes: [
      { t: "lecon", titre: "Regrouper les mots qui vont ensemble",
        texte: `<p>Une phrase longue n'est pas plus difficile si on la découpe en <strong>groupes</strong>. Trois indices permettent de les former :</p>
<ul><li><strong>L'accord.</strong> Un adjectif va avec le nom qui a le même cas, le même genre et le même nombre : <i class="la">servos miseros</i>.</li>
<li><strong>Le génitif.</strong> Il complète un nom voisin : <i class="la">filia reginae</i>, « la fille de la reine ».</li>
<li><strong>La préposition.</strong> Elle forme un bloc avec le nom qui la suit, à l'accusatif ou à l'ablatif : <i class="la">in villa</i>, <i class="la">ad muros</i>.</li></ul>
<aside class="retenir"><strong>La méthode ne change pas.</strong> Verbe, sujet, COD, puis le reste. Simplement, on cherche désormais des <strong>groupes</strong> et non des mots isolés.</aside>` },
      { t: "guide", titre: "Traduction guidée : trois groupes",
        vocab: ["dominus, i, m : le maître", "in + ablatif : dans", "miser, era, erum : malheureux", "servus, i, m : l'esclave", "superbus, a, um : orgueilleux", "teneo, es, ere, tenui, tentum : tenir, retenir", "villa, ae, f : la propriété"],
        la: "Dominus superbus servos miseros in villa tenet.", cas: "N N A A I B X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [6], marque: "verbe", expl: "Verbe : <i class=\"la\">tenet</i>, 3e personne du singulier du présent." },
          { q: "Touche tous les mots du groupe sujet.", clic: [0, 1], marque: "sujet", expl: "Sujet : <i class=\"la\">dominus superbus</i>, nominatif masculin singulier.", indice: "Le nom au nominatif et l'adjectif accordé avec lui." },
          { q: "Touche tous les mots du groupe COD.", clic: [2, 3], marque: "COD", expl: "COD : <i class=\"la\">servos miseros</i>, accusatif masculin pluriel." },
          { q: "Touche le complément circonstanciel.", clic: [4, 5], marque: "complément de lieu", expl: "Complément de lieu : <i class=\"la\">in villa</i>. <i class=\"la\">in</i> + ablatif : le lieu où l'on est.", indice: "Une préposition et le nom qui la suit." }
        ],
        motamot: "le maître orgueilleux / les esclaves malheureux / dans la propriété / retient", fr: "Le maître orgueilleux retient les malheureux esclaves dans sa propriété." },
      { t: "guide", titre: "Traduction guidée : deux génitifs", intro: "<i class=\"la\">reginae</i> et <i class=\"la\">domini</i> : chacun complète le nom qui le précède.",
        vocab: ["amicus, i, m : l'ami", "dominus, i, m : le maître", "duco, is, ere, duxi, ductum : conduire", "filia, ae, f : la fille", "hortus, i, m : le jardin", "in + accusatif : dans (avec mouvement)", "regina, ae, f : la reine"],
        la: "Filia reginae amicos domini in hortum ducit.", cas: "N G A G I A X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [6], marque: "verbe", expl: "Verbe : <i class=\"la\">ducit</i>, 3e personne du singulier du présent." },
          { q: "Où est le sujet ? Un seul mot au nominatif singulier.", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">filia</i>." },
          { q: "<i class=\"la\">reginae</i> pourrait être un datif. Pourquoi est-ce ici un génitif ?", choix: ["Il suit <i class=\"la\">filia</i> et le complète : « la fille de la reine »", "Parce que le verbe est au singulier", "Parce qu'il est placé avant le verbe"], bon: 0, expl: "<i class=\"la\">reginae</i> : génitif, complément du nom <i class=\"la\">filia</i>. « Conduire » ne se construit pas avec un COI." },
          { q: "Où est le COD ? Un seul mot à l'accusatif.", clic: [2], marque: "COD", expl: "COD : <i class=\"la\">amicos</i>, accusatif pluriel.", indice: "<i class=\"la\">hortum</i> est aussi à l'accusatif, mais il dépend de la préposition <i class=\"la\">in</i>." },
          { q: "Quel mot complète <i class=\"la\">amicos</i> ?", clic: [3], marque: "complément du nom", expl: "<i class=\"la\">domini</i> : génitif singulier, complément du nom <i class=\"la\">amicos</i>. « Les amis du maître »." },
          { q: "Touche le complément circonstanciel.", clic: [4, 5], marque: "complément de lieu", expl: "Complément de lieu : <i class=\"la\">in hortum</i>. <i class=\"la\">in</i> + accusatif : le lieu où l'on va." }
        ],
        motamot: "la fille de la reine / les amis du maître / dans le jardin / conduit", fr: "La fille de la reine conduit les amis du maître dans le jardin." },
      { t: "lecon", titre: "Traduire un passif",
        texte: `<p>Quand le verbe est au passif (<i class="la">-tur, -ntur</i>…), le sujet <strong>subit</strong> l'action. Il n'y a donc <strong>pas de COD</strong> à chercher. On cherche en revanche un <strong>complément d'agent</strong> : <i class="la">a</i> ou <i class="la">ab</i> + ablatif.</p>
<p><i class="la">Pueri a magistro monentur.</i> « Les enfants sont avertis par le maître. »</p>
<p>Deux manières d'améliorer la traduction :</p>
<ul><li>s'il y a un agent, on peut repasser à l'actif : « Le maître avertit les enfants » ;</li>
<li>s'il n'y en a pas, on emploie souvent « on » : <i class="la">Moenia videntur</i>, « on voit les remparts ».</li></ul>
<aside class="attention"><strong>Le temps.</strong> <i class="la">monentur</i> : ils sont avertis (présent). <i class="la">monebantur</i> : ils étaient avertis (imparfait). <i class="la">monebuntur</i> : ils seront avertis (futur). Ne laisse pas le passif te faire oublier le temps.</aside>` },
      { t: "guide", titre: "Traduction guidée : une phrase au passif",
        vocab: ["a, ab + ablatif : par", "bonus, a, um : bon", "magister, tri, m : le maître", "moneo, es, ere, monui, monitum : avertir", "puer, pueri, m : l'enfant"],
        la: "Pueri a magistro bono monentur.", cas: "N I B B X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [4], marque: "verbe", expl: "Verbe : <i class=\"la\">monentur</i>." },
          { q: "Analyse <i class=\"la\">monentur</i>.", choix: ["3e personne du pluriel du présent passif", "3e personne du pluriel du présent actif", "3e personne du singulier du futur passif"], bon: 0, expl: "<i class=\"la\">monentur</i> : présent passif, 3e personne du pluriel. « Ils sont avertis » : pas de COD à chercher." },
          { q: "Où est le sujet ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">pueri</i>, nominatif pluriel." },
          { q: "Touche tous les mots du complément d'agent.", clic: [1, 2, 3], marque: "complément d'agent", expl: "Complément d'agent : <i class=\"la\">a magistro bono</i>, <i class=\"la\">a</i> + ablatif.", indice: "La préposition, le nom et son adjectif." }
        ],
        motamot: "les enfants / par le bon maître / sont avertis", fr: "Les enfants sont avertis par le bon maître.", note: "On peut aussi écrire : « Le bon maître avertit les enfants. »" },
      { t: "lecon", titre: "Les compléments sans préposition",
        texte: `<p>Un nom à l'ablatif ou à l'accusatif sans préposition n'est pas forcément ce qu'il paraît.</p>
<ul><li><strong>Un ablatif seul</strong> exprime le moyen, la manière, la cause ou la date : <i class="la">gladio</i> (avec un glaive), <i class="la">magno animo</i> (avec un grand courage), <i class="la">nocte</i> (la nuit).</li>
<li><strong>Un accusatif n'est pas toujours un COD.</strong> Il peut exprimer la durée (<i class="la">multos annos</i>, pendant de nombreuses années) ou, pour un nom de ville, le lieu où l'on va (<i class="la">Romam</i>).</li></ul>
<aside class="retenir"><strong>Le bon réflexe.</strong> Demande-toi si le verbe peut avoir un COD. « Combattre pendant des années » : <i class="la">pugno</i> n'a pas de COD, donc <i class="la">multos annos</i> exprime la durée.</aside>` },
      { t: "guide", titre: "Traduction guidée : un accusatif qui n'est pas COD",
        vocab: ["animus, i, m : le courage", "annus, i, m : l'année", "magnus, a, um : grand", "multus, a, um : nombreux", "pugno, as, are, avi, atum : combattre", "Romani, orum, m pl : les Romains"],
        la: "Romani multos annos magno animo pugnabant.", cas: "N A A B B X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [5], marque: "verbe", expl: "Verbe : <i class=\"la\">pugnabant</i>." },
          { q: "Analyse <i class=\"la\">pugnabant</i>.", choix: ["3e personne du pluriel de l'imparfait actif", "3e personne du pluriel du futur actif", "3e personne du pluriel du présent actif"], bon: 0, expl: "<i class=\"la\">pugnabant</i> : imparfait (<i class=\"la\">-ba-</i>), 3e personne du pluriel. « Ils combattaient »." },
          { q: "Où est le sujet ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">Romani</i>, nominatif pluriel." },
          { q: "<i class=\"la\">multos annos</i> est à l'accusatif. Quelle est sa fonction ?", choix: ["Complément circonstanciel de temps : la durée", "COD de <i class=\"la\">pugnabant</i>", "Attribut du sujet"], bon: 0, expl: "<i class=\"la\">multos annos</i> : accusatif de durée. « Pendant de nombreuses années »." },
          { q: "Touche le complément de manière.", clic: [3, 4], marque: "complément de manière", expl: "Complément de manière : <i class=\"la\">magno animo</i>, à l'ablatif sans préposition.", indice: "Un nom à l'ablatif et son adjectif." }
        ],
        motamot: "les Romains / pendant de nombreuses années / avec un grand courage / combattaient", fr: "Les Romains combattaient pendant de nombreuses années avec un grand courage." },
      { t: "guide", titre: "Traduction guidée : futur et passif",
        vocab: ["a, ab + ablatif : par", "novus, a, um : nouveau", "occupo, as, are, avi, atum : occuper", "populus, i, m : le peuple", "provincia, ae, f : la province", "Romanus, a, um : romain"],
        la: "Nova provincia a populo Romano occupabitur.", cas: "N N I B B X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [5], marque: "verbe", expl: "Verbe : <i class=\"la\">occupabitur</i>." },
          { q: "Analyse <i class=\"la\">occupabitur</i>.", choix: ["3e personne du singulier du futur passif", "3e personne du singulier de l'imparfait passif", "3e personne du singulier du futur actif"], bon: 0, expl: "<i class=\"la\">occupabitur</i> : futur (<i class=\"la\">-bi-</i>) passif (<i class=\"la\">-tur</i>). « Elle sera occupée »." },
          { q: "Touche tous les mots du groupe sujet.", clic: [0, 1], marque: "sujet", expl: "Sujet : <i class=\"la\">nova provincia</i>, nominatif féminin singulier." },
          { q: "Touche tous les mots du complément d'agent.", clic: [2, 3, 4], marque: "complément d'agent", expl: "Complément d'agent : <i class=\"la\">a populo Romano</i>." }
        ],
        motamot: "une nouvelle province / par le peuple romain / sera occupée", fr: "Une nouvelle province sera occupée par le peuple romain." },
      { t: "quiz", titre: "Améliorer le mot à mot", intro: "Le mot à mot est juste, mais ce n'est pas encore du français. Choisis la meilleure traduction.",
        questions: [
          { q: "<i class=\"la\">Moenia alta videntur.</i> Mot à mot : « de hauts remparts sont vus ».", choix: ["On voit de hauts remparts.", "De hauts remparts voient.", "Les remparts ont vu en haut."], bon: 0, expl: "Passif sans agent : le français préfère « on »." },
          { q: "<i class=\"la\">Magna cura laborat.</i> Mot à mot : « avec grand soin il travaille ».", choix: ["Il travaille avec grand soin.", "Le grand soin travaille.", "Il travaille le grand soin."], bon: 0, expl: "<i class=\"la\">magna cura</i> est un ablatif de manière, pas un sujet : le sujet est dans le verbe." },
          { q: "<i class=\"la\">Pater filium amat.</i> (<i class=\"la\">pater</i> : le père)", choix: ["Le père aime son fils.", "Le père aime fils.", "Le fils aime son père."], bon: 0, expl: "Le français exprime le possessif que le latin sous-entend." },
          { q: "<i class=\"la\">Fabula a poeta narratur.</i>", choix: ["Le poète raconte une histoire.", "L'histoire raconte le poète.", "Le poète est raconté par l'histoire."], bon: 0, expl: "Mot à mot : « une histoire est racontée par le poète ». On peut repasser à l'actif quand l'agent est exprimé." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li>Je forme des <strong>groupes</strong> : nom + adjectif accordé, nom + génitif, préposition + nom.</li>
<li><strong>Passif</strong> : pas de COD ; je cherche un agent (<i class="la">a, ab</i> + ablatif). Je peux traduire par l'actif ou par « on ».</li>
<li><strong>Ablatif seul</strong> : moyen, manière, cause, date. <strong>Accusatif seul</strong> : COD, mais aussi durée ou lieu où l'on va.</li>
<li>Je respecte le <strong>temps</strong> du verbe : <i class="la">-ba-</i> imparfait, <i class="la">-b-</i> ou <i class="la">-a-/-e-</i> futur.</li></ul>` }
    ]
  },
  {
    id: "c20", titre: "Traduire une phrase complexe", resume: "Relative, ablatif absolu, proposition infinitive : découper avant de traduire. À faire après les chapitres correspondants.",
    etapes: [
      { t: "lecon", titre: "Une proposition par verbe",
        texte: `<p>Une phrase complexe contient plusieurs verbes. La règle est simple : <strong>un verbe conjugué, une proposition</strong>.</p>
<ol><li><strong>Je compte les verbes conjugués.</strong> Deux verbes : deux propositions.</li>
<li><strong>Je cherche les mots subordonnants</strong> : le relatif <i class="la">qui, quae, quod</i> ; les conjonctions <i class="la">cum</i> (quand, comme), <i class="la">quod</i> (parce que), <i class="la">si</i> (si), <i class="la">ubi</i> (quand, où), <i class="la">dum</i> (pendant que).</li>
<li><strong>Je délimite la subordonnée</strong> : elle commence au mot subordonnant et s'achève en général à son verbe. Les virgules aident.</li>
<li><strong>J'analyse chaque proposition à part</strong>, avec la méthode habituelle, en commençant par la principale.</li></ol>
<aside class="attention"><strong>Deux tournures sans mot subordonnant.</strong>
<ul><li>L'<strong>ablatif absolu</strong> : un nom et un participe à l'ablatif, détachés du reste (<i class="la">urbe capta</i>).</li>
<li>La <strong>proposition infinitive</strong> : après un verbe comme <i class="la">dico</i> ou <i class="la">scio</i>, un sujet à l'accusatif et un verbe à l'infinitif.</li></ul></aside>` },
      { t: "guide", titre: "Traduction guidée : une relative",
        vocab: ["defendo, is, ere, defendi, defensum : défendre", "fortis, e : courageux", "miles, militis, m : le soldat", "qui, quae, quod : qui, que", "urbs, urbis, f : la ville"],
        la: "Milites, qui urbem defendebant, fortes erant.", cas: "N N A X N X",
        pas: [
          { q: "Touche les deux verbes conjugués.", clic: [3, 5], expl: "Deux verbes conjugués, <i class=\"la\">defendebant</i> et <i class=\"la\">erant</i> : deux propositions.", indice: "Cherche les désinences <i class=\"la\">-nt</i>." },
          { q: "Touche tous les mots de la proposition relative.", clic: [1, 2, 3], marque: "relative", expl: "Relative : <i class=\"la\">qui urbem defendebant</i>, entre les deux virgules.", indice: "Du pronom relatif jusqu'à son verbe." },
          { q: "Quel est l'antécédent de <i class=\"la\">qui</i> ?", choix: ["<i class=\"la\">milites</i>", "<i class=\"la\">urbem</i>", "<i class=\"la\">fortes</i>"], bon: 0, expl: "Antécédent : <i class=\"la\">milites</i>, masculin pluriel comme <i class=\"la\">qui</i>." },
          { q: "Quelle est la fonction de <i class=\"la\">qui</i> dans la relative ?", choix: ["Sujet de <i class=\"la\">defendebant</i> : nominatif", "COD de <i class=\"la\">defendebant</i> : accusatif", "Complément du nom <i class=\"la\">urbem</i>"], bon: 0, expl: "<i class=\"la\">qui</i> : nominatif, sujet de <i class=\"la\">defendebant</i> ; <i class=\"la\">urbem</i> en est le COD. « Qui défendaient la ville »." },
          { q: "Passons à la principale. Où est son verbe ?", clic: [5], marque: "verbe", expl: "Verbe principal : <i class=\"la\">erant</i>, imparfait de <i class=\"la\">sum</i>." },
          { q: "Où est le sujet de la principale ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">milites</i>." },
          { q: "Quelle est la fonction de <i class=\"la\">fortes</i> ?", choix: ["Attribut du sujet <i class=\"la\">milites</i>", "COD de <i class=\"la\">erant</i>", "Sujet de <i class=\"la\">erant</i>"], bon: 0, expl: "<i class=\"la\">fortes</i> : attribut du sujet." }
        ],
        motamot: "les soldats / [qui la ville défendaient] / courageux / étaient", fr: "Les soldats qui défendaient la ville étaient courageux." },
      { t: "guide", titre: "Traduction guidée : une relative au COD",
        vocab: ["amicus, i, m : l'ami", "epistula, ae, f : la lettre", "lego, is, ere, legi, lectum : lire", "scribo, is, ere, scripsi, scriptum : écrire"],
        la: "Epistulam, quam amicus scripsit, legi.", cas: "A A N X X",
        pas: [
          { q: "Touche les deux verbes conjugués.", clic: [3, 4], expl: "Deux verbes conjugués : <i class=\"la\">scripsit</i> et <i class=\"la\">legi</i>." },
          { q: "Touche tous les mots de la proposition relative.", clic: [1, 2, 3], marque: "relative", expl: "Relative : <i class=\"la\">quam amicus scripsit</i>." },
          { q: "Analyse <i class=\"la\">quam</i>.", choix: ["Accusatif féminin singulier : COD de <i class=\"la\">scripsit</i>, antécédent <i class=\"la\">epistulam</i>", "Nominatif féminin singulier : sujet de <i class=\"la\">scripsit</i>", "Accusatif masculin singulier : antécédent <i class=\"la\">amicus</i>"], bon: 0, expl: "<i class=\"la\">quam</i> : féminin singulier comme <i class=\"la\">epistulam</i> ; accusatif, COD de <i class=\"la\">scripsit</i>. Le sujet de la relative est <i class=\"la\">amicus</i>." },
          { q: "Analyse <i class=\"la\">legi</i>, le verbe principal.", choix: ["1re personne du singulier du parfait : « j'ai lu »", "3e personne du singulier du présent : « il lit »", "2e personne du singulier du futur : « tu liras »"], bon: 0, expl: "<i class=\"la\">legi</i> : parfait, 1re personne du singulier. Le sujet est « je »." },
          { q: "Où est le COD de <i class=\"la\">legi</i> ?", clic: [0], marque: "COD", expl: "COD de la principale : <i class=\"la\">epistulam</i>." }
        ],
        motamot: "la lettre / [que l'ami a écrite] / j'ai lu", fr: "J'ai lu la lettre que mon ami a écrite." },
      { t: "guide", titre: "Traduction guidée : un ablatif absolu",
        vocab: ["capio, is, ere, cepi, captum : prendre", "discedo, is, ere, discessi, discessum : partir", "hostis, is, m : l'ennemi", "urbs, urbis, f : la ville"],
        la: "Urbe capta, hostes discesserunt.", cas: "B B N X",
        pas: [
          { q: "Où est le verbe conjugué ? Il n'y en a qu'un.", clic: [3], marque: "verbe", expl: "Verbe : <i class=\"la\">discesserunt</i>, parfait, 3e personne du pluriel. « Ils partirent ».", indice: "<i class=\"la\">capta</i> est un participe, pas un verbe conjugué." },
          { q: "Où est le sujet ?", clic: [2], marque: "sujet", expl: "Sujet : <i class=\"la\">hostes</i>, nominatif pluriel." },
          { q: "Touche les deux mots de l'ablatif absolu.", clic: [0, 1], marque: "ablatif absolu", expl: "Ablatif absolu : <i class=\"la\">urbe capta</i>, un nom et un participe à l'ablatif, détachés par la virgule." },
          { q: "<i class=\"la\">capta</i> est un participe parfait passif. L'action est donc…", choix: ["antérieure à celle du verbe principal, et subie", "simultanée à celle du verbe principal", "postérieure à celle du verbe principal"], bon: 0, expl: "Mot à mot : « la ville ayant été prise ». L'action précède le départ des ennemis." }
        ],
        motamot: "la ville ayant été prise / les ennemis / partirent", fr: "Une fois la ville prise, les ennemis partirent.", note: "Autres traductions possibles : « Après la prise de la ville… », « Quand la ville eut été prise… »." },
      { t: "guide", titre: "Traduction guidée : une proposition infinitive",
        vocab: ["capio, is, ere, cepi, captum : prendre", "dico, is, ere, dixi, dictum : dire", "multus, a, um : nombreux", "statua, ae, f : la statue", "Verres, is, m : Verrès"],
        la: "Cicero dicit Verrem multas statuas cepisse.", cas: "N X A A A X",
        pas: [
          { q: "Où est le verbe conjugué ?", clic: [1], marque: "verbe", expl: "Verbe principal : <i class=\"la\">dicit</i>, un verbe de déclaration. On attend une proposition infinitive." },
          { q: "Où est son sujet ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">Cicero</i>." },
          { q: "Où est l'infinitif ?", clic: [5], expl: "Infinitif : <i class=\"la\">cepisse</i>.", indice: "Cherche la terminaison <i class=\"la\">-isse</i>." },
          { q: "Quel est le sujet de l'infinitive ?", choix: ["<i class=\"la\">Verrem</i>, à l'accusatif", "<i class=\"la\">Cicero</i>, au nominatif", "<i class=\"la\">statuas</i>, à l'accusatif"], bon: 0, expl: "Sujet de l'infinitive : <i class=\"la\">Verrem</i>, à l'accusatif. C'est Verrès qui a pris." },
          { q: "Touche le COD de <i class=\"la\">cepisse</i>.", clic: [3, 4], marque: "COD", expl: "COD de l'infinitif : <i class=\"la\">multas statuas</i>." },
          { q: "<i class=\"la\">cepisse</i> est un infinitif parfait. L'action est…", choix: ["antérieure : « a pris »", "simultanée : « prend »", "postérieure : « prendra »"], bon: 0, expl: "Infinitif parfait : action antérieure à celle de <i class=\"la\">dicit</i>." }
        ],
        motamot: "Cicéron / dit / Verrès / de nombreuses statues / avoir pris", fr: "Cicéron dit que Verrès a pris de nombreuses statues.", note: "On ajoute « que » et on conjugue le verbe en français." },
      { t: "guide", titre: "Traduction guidée : tout ensemble", intro: "Une relative au plus-que-parfait dans une principale au parfait.",
        vocab: ["Alpes, ium, f pl : les Alpes", "in + ablatif : en, dans", "Romani, orum, m pl : les Romains", "transeo, is, ire, transii, transitum : traverser", "vinco, is, ere, vici, victum : vaincre"],
        la: "Hannibal, qui Alpes transierat, Romanos in Italia vicit.", cas: "N N A X A I B X",
        pas: [
          { q: "Touche les deux verbes conjugués.", clic: [3, 7], expl: "Deux verbes conjugués : <i class=\"la\">transierat</i> et <i class=\"la\">vicit</i>." },
          { q: "Touche tous les mots de la proposition relative.", clic: [1, 2, 3], marque: "relative", expl: "Relative : <i class=\"la\">qui Alpes transierat</i>. <i class=\"la\">qui</i> en est le sujet, <i class=\"la\">Alpes</i> le COD." },
          { q: "Analyse <i class=\"la\">transierat</i>.", choix: ["Plus-que-parfait : « il avait traversé »", "Parfait : « il traversa »", "Imparfait : « il traversait »"], bon: 0, expl: "<i class=\"la\">transierat</i> : plus-que-parfait (<i class=\"la\">-era-</i>). L'action précède la victoire." },
          { q: "Où est le verbe de la principale ?", clic: [7], marque: "verbe", expl: "Verbe principal : <i class=\"la\">vicit</i>, parfait de <i class=\"la\">vinco</i>. « Il vainquit »." },
          { q: "Où est le sujet de la principale ?", clic: [0], marque: "sujet", expl: "Sujet : <i class=\"la\">Hannibal</i>." },
          { q: "Où est le COD de <i class=\"la\">vicit</i> ?", clic: [4], marque: "COD", expl: "COD : <i class=\"la\">Romanos</i>." },
          { q: "Touche le complément circonstanciel.", clic: [5, 6], marque: "complément de lieu", expl: "Complément de lieu : <i class=\"la\">in Italia</i>, <i class=\"la\">in</i> + ablatif." }
        ],
        motamot: "Hannibal / [qui les Alpes avait traversé] / les Romains / en Italie / vainquit", fr: "Hannibal, qui avait traversé les Alpes, vainquit les Romains en Italie." },
      { t: "lecon", titre: "Relire sa traduction",
        texte: `<p>Une traduction n'est terminée qu'une fois relue, avec le texte latin sous les yeux. Cinq questions à se poser :</p>
<ol><li><strong>Tous les mots latins sont-ils traduits ?</strong> Pointe-les un par un.</li>
<li><strong>Les temps sont-ils respectés ?</strong> Un imparfait reste un imparfait, un plus-que-parfait reste un plus-que-parfait.</li>
<li><strong>Singulier et pluriel sont-ils justes ?</strong> Vérifie les noms et les verbes.</li>
<li><strong>Chaque adjectif est-il rattaché au bon nom ?</strong> Celui avec lequel il s'accorde.</li>
<li><strong>Ma phrase a-t-elle un sens</strong>, et s'accorde-t-elle avec ce qui précède dans le texte ?</li></ol>` },
      { t: "quiz", titre: "Trouver l'erreur", intro: "Chaque traduction contient une erreur. Laquelle ?",
        questions: [
          { q: "<i class=\"la\">Pueri magistrum audiebant.</i> « Les enfants écoutent le maître. »", choix: ["Le temps : l'imparfait est devenu un présent", "Le nombre : <i class=\"la\">pueri</i> est au singulier", "Les fonctions sont inversées"], bon: 0, expl: "<i class=\"la\">audiebant</i> : « écoutaient »." },
          { q: "<i class=\"la\">Agricolae terram amant.</i> « Le paysan aime la terre. »", choix: ["Le nombre : sujet et verbe sont au pluriel", "Le temps du verbe", "Un mot n'est pas traduit"], bon: 0, expl: "« Les paysans aiment la terre. »" },
          { q: "<i class=\"la\">Rosam puella amat.</i> « La rose aime la jeune fille. »", choix: ["Les fonctions sont inversées : <i class=\"la\">rosam</i> est COD", "Le temps du verbe", "Le nombre du sujet"], bon: 0, expl: "L'ordre des mots latins ne décide de rien : seules les terminaisons comptent." },
          { q: "<i class=\"la\">Dominus servos bonos laudat.</i> « Le bon maître loue les esclaves. »", choix: ["L'adjectif est rattaché au mauvais nom", "Le temps du verbe", "Le sujet et le COD sont inversés"], bon: 0, expl: "<i class=\"la\">bonos</i> s'accorde avec <i class=\"la\">servos</i> : « le maître loue les bons esclaves »." },
          { q: "<i class=\"la\">Milites, qui urbem ceperant, laeti erant.</i> « Les soldats qui prenaient la ville étaient joyeux. »", choix: ["Le temps de la relative : <i class=\"la\">ceperant</i> est un plus-que-parfait", "L'antécédent du relatif", "Le nombre de <i class=\"la\">milites</i>"], bon: 0, expl: "« Qui avaient pris la ville »." }
        ] },
      { t: "lecon", synthese: true, titre: "Fiche synthèse",
        texte: `<ul><li><strong>Un verbe conjugué, une proposition.</strong> Je compte les verbes avant tout.</li>
<li>Je repère les <strong>subordonnants</strong> (<i class="la">qui, quae, quod, cum, quod, si, ubi, dum</i>) et je délimite chaque subordonnée.</li>
<li><strong>Relative</strong> : genre et nombre de l'antécédent, cas selon la fonction dans la relative.</li>
<li><strong>Ablatif absolu</strong> : nom + participe à l'ablatif ; « une fois… », « pendant que… », « comme… ».</li>
<li><strong>Infinitive</strong> : sujet à l'accusatif, verbe à l'infinitif ; j'ajoute « que » et je règle le temps.</li>
<li>Je <strong>relis</strong> : tous les mots, les temps, les nombres, les accords, le sens.</li></ul>` }
    ]
  }]
}];

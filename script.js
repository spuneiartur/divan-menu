/* ============================================================
   Tavola — Smart Digital Menu (mockup logic)
   Filozofie: layer peste operațiuni, NU POS.
   - Meniu: descoperire + filtre + detalii produs
   - Draft: clientul își pregătește selecția -> "Suntem gata să comandăm"
   - Ospătar: cereri de serviciu (nu comenzi)
   - Descoperă: promovare produse/evenimente, separat de meniu
   ============================================================ */

/* ---------- Data ---------- */
const IMG = "https://images.unsplash.com/";
const photo = (id) => `${IMG}${id}?auto=format&fit=crop&w=320&q=70`;

const MENU = [
  {
    id: "starters", name: "Antreuri", desc: "De împărțit sau de pornit",
    items: [
      { id: "burrata", name: "Burrata & roșii cherry", price: 34, weight: "240g",
        emoji: "🧀", img: photo("photo-1608897013039-887f21d8c804"),
        tags: ["vegetarian", "popular", "gluten-free"],
        desc: "Burrata cremoasă, roșii cherry confiate, pesto de busuioc, ulei de măsline extravirgin.",
        ingredients: "Burrata, roșii cherry, busuioc, pin, parmezan, ulei de măsline, oțet balsamic.",
        allergens: ["Lactoză", "Fructe cu coajă"], kcal: 380, prot: 16, carb: 9, fat: 31 },
      { id: "bruschetta", name: "Bruschetta trio", price: 28, weight: "210g",
        emoji: "🍅", img: photo("photo-1572695157366-5e585ab2b69f"),
        tags: ["vegetarian", "vegan"],
        desc: "Trei feluri: roșii & busuioc, ciuperci & trufe, vinete afumate.",
        ingredients: "Pâine de casă, roșii, busuioc, ciuperci, ulei de trufe, vinete, usturoi.",
        allergens: ["Gluten"], kcal: 290, prot: 8, carb: 42, fat: 10 },
      { id: "soup", name: "Supă cremă de dovleac", price: 22, weight: "350ml",
        emoji: "🥣", img: photo("photo-1547592180-85f173990554"),
        tags: ["vegetarian", "gluten-free", "lactose-free"],
        desc: "Dovleac copt, ghimbir, lapte de cocos, semințe prăjite.",
        ingredients: "Dovleac, ghimbir, lapte de cocos, ceapă, semințe de dovleac, ulei de măsline.",
        allergens: [], kcal: 210, prot: 5, carb: 24, fat: 11 },
    ]
  },
  {
    id: "mains", name: "Feluri principale", desc: "Din bucătărie",
    items: [
      { id: "burger", name: "Tavola Beef Burger", price: 48, weight: "320g",
        emoji: "🍔", img: photo("photo-1568901346375-23c9450c58cd"),
        tags: ["popular", "spicy"],
        desc: "Vită maturată, cheddar, bacon crocant, sos chipotle, cartofi prăjiți de casă.",
        ingredients: "Chiflă brioche, vită 200g, cheddar, bacon, salată, roșii, sos chipotle, cartofi.",
        allergens: ["Gluten", "Lactoză", "Ouă", "Muștar"], kcal: 920, prot: 48, carb: 62, fat: 54 },
      { id: "pasta", name: "Tagliatelle cu trufe", price: 52, weight: "300g",
        emoji: "🍝", img: photo("photo-1551183053-bf91a1d81141"),
        tags: ["vegetarian", "popular"],
        desc: "Paste proaspete, sos cremos de trufe negre, parmezan ras la masă.",
        ingredients: "Tagliatelle de casă, smântână, trufe negre, parmezan, unt, pătrunjel.",
        allergens: ["Gluten", "Lactoză", "Ouă"], kcal: 680, prot: 18, carb: 70, fat: 36 },
      { id: "steak", name: "Ribeye la grătar", price: 89, weight: "350g",
        emoji: "🥩", img: photo("photo-1546964124-0cce460f38ef"),
        tags: ["popular", "gluten-free"],
        desc: "Ribeye maturat 28 zile, unt de usturoi, legume la grătar, sos chimichurri.",
        ingredients: "Ribeye, unt, usturoi, rozmarin, dovlecel, ardei, chimichurri.",
        allergens: ["Lactoză"], kcal: 760, prot: 56, carb: 8, fat: 58 },
      { id: "buddha", name: "Buddha bowl", price: 38, weight: "400g",
        emoji: "🥗", img: photo("photo-1512621776951-a57141f2eefd"),
        tags: ["vegan", "vegetarian", "gluten-free", "lactose-free"],
        desc: "Quinoa, năut copt, avocado, edamame, dressing de tahini.",
        ingredients: "Quinoa, năut, avocado, edamame, varză roșie, morcov, tahini, lămâie.",
        allergens: ["Susan"], kcal: 540, prot: 19, carb: 58, fat: 26 },
    ]
  },
  {
    id: "desserts", name: "Deserturi", desc: "Final dulce",
    items: [
      { id: "toffee", name: "Sticky toffee pudding", price: 26, weight: "180g",
        emoji: "🍮", img: photo("photo-1606313564200-e75d5e30476c"),
        tags: ["vegetarian", "popular"],
        desc: "Blat umed de curmale, sos cald de caramel, înghețată de vanilie.",
        ingredients: "Curmale, făină, ouă, unt, zahăr brun, smântână, vanilie.",
        allergens: ["Gluten", "Lactoză", "Ouă"], kcal: 480, prot: 6, carb: 64, fat: 22 },
      { id: "sorbet", name: "Sorbet de fructe de pădure", price: 18, weight: "150g",
        emoji: "🍧", img: photo("photo-1488900128323-21503983a07e"),
        tags: ["vegan", "vegetarian", "gluten-free", "lactose-free"],
        desc: "Sorbet artizanal, fructe de pădure proaspete, mentă.",
        ingredients: "Zmeură, afine, căpșuni, zahăr, lămâie, mentă.",
        allergens: [], kcal: 160, prot: 1, carb: 38, fat: 1 },
    ]
  },
  {
    id: "drinks", name: "Băuturi", desc: "Vinuri, cocktailuri & altele",
    items: [
      { id: "cocktail", name: "Strawberries & Pink Pepper", price: 32, weight: "250ml",
        emoji: "🍹", img: photo("photo-1514362545857-3bc16c4c7d1b"),
        tags: ["popular", "vegan", "gluten-free"],
        desc: "Frișcă vegetală, dulceață de căpșuni, căpșuni proaspete, piper roz.",
        ingredients: "Gin, sirop de căpșuni, suc de lămâie, piper roz, apă tonică.",
        allergens: [], kcal: 190, prot: 0, carb: 18, fat: 0 },
      { id: "wine", name: "Fetească Neagră, pahar", price: 27, weight: "150ml",
        emoji: "🍷", img: photo("photo-1510812431401-41d2bd2722f3"),
        tags: ["vegan", "gluten-free"],
        desc: "Vin roșu sec românesc, note de cireșe negre și condimente.",
        ingredients: "Struguri Fetească Neagră.",
        allergens: ["Sulfiți"], kcal: 125, prot: 0, carb: 4, fat: 0 },
      { id: "coffee", name: "Flat white", price: 14, weight: "180ml",
        emoji: "☕", img: photo("photo-1509042239860-f550ce710b93"),
        tags: ["vegetarian", "gluten-free"],
        desc: "Espresso dublu specialty, lapte texturat fin. Disponibil și cu lapte vegetal.",
        ingredients: "Cafea specialty, lapte (sau lapte de ovăz la cerere).",
        allergens: ["Lactoză"], kcal: 120, prot: 7, carb: 10, fat: 6 },
    ]
  },
];

const DISCOVER = {
  event: {
    kicker: "Eveniment · Astăzi 19:00",
    title: "Seară de vinuri naturale",
    sub: "Degustare ghidată · 5 vinuri",
    emoji: "🍷", img: photo("photo-1510812431401-41d2bd2722f3"),
    body: "Cinci vinuri naturale de la producători români mici, alături de o selecție de brânzeturi. Locuri limitate — întreabă ospătarul pentru rezervare.",
    pill: "120 lei / persoană"
  },
  chef: {
    kicker: "Recomandarea bucătarului",
    title: "Ribeye maturat 28 zile",
    sub: "Cantitate limitată în fiecare seară",
    emoji: "🥩", img: photo("photo-1546964124-0cce460f38ef"),
    body: "Bucătarul nostru recomandă ribeye-ul maturat, servit medium-rare cu chimichurri proaspăt. Se epuizează rapid.",
    pill: "Vezi în meniu", goItem: "steak"
  },
  pairings: [
    { emoji: "🍷", tag: "Pairing", name: "Ribeye + Fetească Neagră", text: "Taninele vinului echilibrează grăsimea cărnii maturate." },
    { emoji: "🍝", tag: "Pairing", name: "Tagliatelle cu trufe + Flat white", text: "Un final aromat — cafeaua specialty taie din cremozitate." },
    { emoji: "🍮", tag: "Sweet match", name: "Sticky toffee + Sorbet", text: "Cald & rece, o combinație clasică de desert." },
  ]
};

const REQUESTS = [
  { id: "waiter",   emoji: "🙋", label: "Cheamă ospătarul", primary: true, sub: "Vine cineva la masa ta în câteva momente", msg: "Ospătarul a fost anunțat — vine imediat." },
  { id: "bill",     emoji: "🧾", label: "Vreau nota",        msg: "Am anunțat ospătarul că dorești nota." },
  { id: "water",    emoji: "💧", label: "Apă, te rog",        msg: "Vine apa la masă." },
  { id: "cutlery",  emoji: "🍴", label: "Tacâmuri",           msg: "Aducem tacâmuri." },
  { id: "napkins",  emoji: "🧻", label: "Șervețele",          msg: "Aducem șervețele." },
  { id: "allergen", emoji: "❓", label: "Întrebare alergeni", msg: "Ospătarul vine să te ajute cu întrebarea despre alergeni." },
];

const TAG_BADGE = {
  popular:        { cls: "pop", label: "⭐ Popular" },
  vegetarian:     { cls: "veg", label: "🌱 Vegetarian" },
  vegan:          { cls: "veg", label: "🥦 Vegan" },
  "gluten-free":  { cls: "gf",  label: "🌾 Fără gluten" },
  "lactose-free": { cls: "gf",  label: "🥛 Fără lactoză" },
  spicy:          { cls: "hot", label: "🌶️ Picant" },
};

/* ---------- State ---------- */
const state = {
  view: "menu",
  activeFilters: new Set(),
  search: "",
  draft: {},          // { itemId: qty }
  draftConfirmed: false,
};

const itemById = {};
MENU.forEach(c => c.items.forEach(i => { itemById[i.id] = { ...i, cat: c.name }; }));

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function imgEl(src, emoji, cls) {
  // image with graceful emoji fallback if offline
  return `<img class="${cls}" src="${src}" alt="" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">
    <div class="${cls}" style="display:none">${emoji}</div>`;
}

function thumbEl(item) {
  return `<div class="item-thumb" style="overflow:hidden">
    <img src="${item.img}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"
      onerror="this.parentElement.innerHTML='${item.emoji}'">
  </div>`;
}

function matchesFilters(item) {
  for (const f of state.activeFilters) if (!item.tags.includes(f)) return false;
  if (state.search) {
    const q = state.search.toLowerCase();
    const hay = (item.name + " " + item.desc + " " + item.tags.join(" ")).toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

/* ---------- Render: Menu ---------- */
function renderCatNav() {
  const nav = $("#catNav");
  nav.innerHTML = MENU.map((c, i) =>
    `<button class="cat-pill ${i === 0 ? "active" : ""}" data-cat="${c.id}">${c.name}</button>`
  ).join("");
  $$(".cat-pill", nav).forEach(p => p.addEventListener("click", () => {
    const sec = $(`#sec-${p.dataset.cat}`);
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}

function renderMenu() {
  const list = $("#menuList");
  let html = "";
  let anyVisible = false;

  MENU.forEach(cat => {
    const visible = cat.items.filter(matchesFilters);
    if (!visible.length) return;
    anyVisible = true;
    html += `<div class="cat-section" id="sec-${cat.id}">
      <div class="cat-title">${cat.name}</div>
      <div class="cat-desc">${cat.desc}</div>
    </div>`;
    visible.forEach(item => {
      const qty = state.draft[item.id] || 0;
      const badges = item.tags.slice(0, 3).map(t => {
        const b = TAG_BADGE[t]; return b ? `<span class="badge ${b.cls}">${b.label}</span>` : "";
      }).join("");
      const control = qty > 0
        ? `<div class="qty" data-qty="${item.id}">
             <button data-dec="${item.id}">−</button><span>${qty}</span><button data-inc="${item.id}">+</button>
           </div>`
        : `<button class="add-btn" data-add="${item.id}" aria-label="Adaugă">+</button>`;
      html += `<div class="item" data-item="${item.id}">
        <div class="item-main">
          <div class="item-name">${item.name}</div>
          <div class="item-badges">${badges}</div>
          <div class="item-desc">${item.desc}</div>
          <div class="item-meta">
            <span class="item-price">${item.price} lei</span>
            <span class="item-weight">${item.weight}</span>
          </div>
        </div>
        <div class="item-media">
          ${thumbEl(item)}
          ${control}
        </div>
      </div>`;
    });
  });

  list.innerHTML = html;
  $("#menuEmpty").hidden = anyVisible;
  list.hidden = !anyVisible;

  // wire item taps
  $$(".item", list).forEach(el => el.addEventListener("click", e => {
    if (e.target.closest("[data-add],[data-inc],[data-dec],[data-qty]")) return;
    openItem(el.dataset.item);
  }));
  $$("[data-add]", list).forEach(b => b.addEventListener("click", e => { e.stopPropagation(); addToDraft(b.dataset.add); }));
  $$("[data-inc]", list).forEach(b => b.addEventListener("click", e => { e.stopPropagation(); changeQty(b.dataset.inc, +1); }));
  $$("[data-dec]", list).forEach(b => b.addEventListener("click", e => { e.stopPropagation(); changeQty(b.dataset.dec, -1); }));
}

/* ---------- Render: Discover ---------- */
function renderDiscover() {
  const d = DISCOVER;
  const heroCard = (c) => `
    <div class="d-card">
      <div class="d-hero">
        <img src="${c.img}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="d-hero-fallback" style="display:none">${c.emoji}</div>
        <div class="d-hero-overlay"></div>
        <span class="d-kicker">${c.kicker}</span>
        <div class="d-hero-txt"><h3>${c.title}</h3><p>${c.sub}</p></div>
      </div>
      <div class="d-body">
        <p>${c.body}</p>
        <div class="d-meta"><span class="pill">${c.pill}</span></div>
        <button class="d-cta" data-discover-cta="${c.goItem || ""}" data-req="${c.goItem ? "" : "waiter"}">
          ${c.goItem ? "Vezi în meniu" : "Întreabă ospătarul"}
        </button>
      </div>
    </div>`;

  const pairings = d.pairings.map(p => `
    <div class="d-card"><div class="d-pair">
      <div class="d-pair-emoji">${p.emoji}</div>
      <div><small>${p.tag}</small><h4>${p.name}</h4><p>${p.text}</p></div>
    </div></div>`).join("");

  $("#discoverBody").innerHTML =
    heroCard(d.event) +
    heroCard(d.chef) +
    `<div class="d-section-label">Combinații recomandate</div>` +
    pairings;

  $$("[data-discover-cta]").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.discoverCta) { switchView("menu"); setTimeout(() => openItem(b.dataset.discoverCta), 250); }
    else { switchView("waiter"); sendRequest("waiter"); }
  }));
}

/* ---------- Render: Waiter ---------- */
function renderWaiter() {
  $("#reqGrid").innerHTML = REQUESTS.map(r => `
    <button class="req ${r.primary ? "primary" : ""}" data-req="${r.id}">
      <span class="req-emoji">${r.emoji}</span>
      <span>
        <span class="req-label">${r.label}</span>
        ${r.sub ? `<span class="req-sub">${r.sub}</span>` : ""}
      </span>
    </button>`).join("");
  $$("[data-req]", $("#reqGrid")).forEach(b => b.addEventListener("click", () => sendRequest(b.dataset.req)));
}

function sendRequest(id) {
  const req = REQUESTS.find(r => r.id === id);
  if (!req) return;
  const status = $("#waiterStatus");
  status.hidden = false;
  status.innerHTML = `<span class="dot"></span> ${req.msg}`;
  toast(`✓ ${req.label} — trimis`);
}

/* ---------- Draft ---------- */
function draftQtyTotal() { return Object.values(state.draft).reduce((a, b) => a + b, 0); }
function draftPriceTotal() { return Object.entries(state.draft).reduce((s, [id, q]) => s + itemById[id].price * q, 0); }

function addToDraft(id) {
  state.draft[id] = (state.draft[id] || 0) + 1;
  state.draftConfirmed = false;
  toast(`Adăugat: ${itemById[id].name}`);
  syncAll();
}
function changeQty(id, delta) {
  const next = (state.draft[id] || 0) + delta;
  if (next <= 0) delete state.draft[id]; else state.draft[id] = next;
  state.draftConfirmed = false;
  syncAll();
}

function syncDraftBar() {
  const bar = $("#draftBar");
  const total = draftQtyTotal();
  if (total > 0) {
    bar.hidden = false;
    $("#draftCount").textContent = total;
  } else {
    bar.hidden = true;
  }
}

function syncAll() {
  syncDraftBar();
  if (state.view === "menu") renderMenu();
  if (!$("#draftSheet").hidden) renderDraftSheet();
}

/* ---------- Item sheet ---------- */
function openItem(id) {
  const item = itemById[id];
  if (!item) return;
  const badges = item.tags.map(t => { const b = TAG_BADGE[t]; return b ? `<span class="badge ${b.cls}">${b.label}</span>` : ""; }).join("");
  const allergens = item.allergens.length
    ? item.allergens.map(a => `<span class="is-allergen">${a}</span>`).join("")
    : `<span class="is-ingredients">Fără alergeni majori declarați.</span>`;
  const qty = state.draft[id] || 0;

  $("#itemSheetInner").innerHTML = `
    <div class="is-hero">
      <img src="${item.img}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
      <div class="is-hero-fallback" style="display:none">${item.emoji}</div>
      <button class="is-close" id="isClose">✕</button>
    </div>
    <div class="is-body">
      <div class="is-title">${item.name}</div>
      <div class="is-price">${item.price} lei <span style="font-size:13px;color:var(--ink-faint);font-weight:500">· ${item.weight}</span></div>
      <div class="is-badges">${badges}</div>
      <div class="is-desc">${item.desc}</div>
      <div class="is-block"><h5>Ingrediente</h5><div class="is-ingredients">${item.ingredients}</div></div>
      <div class="is-block"><h5>Alergeni</h5><div class="is-allergens">${allergens}</div></div>
      <div class="is-block"><h5>Valori nutriționale (porție)</h5>
        <div class="is-nutri">
          <div class="nutri-cell"><b>${item.kcal}</b><span>kcal</span></div>
          <div class="nutri-cell"><b>${item.prot}g</b><span>proteine</span></div>
          <div class="nutri-cell"><b>${item.carb}g</b><span>carbo</span></div>
          <div class="nutri-cell"><b>${item.fat}g</b><span>grăsimi</span></div>
        </div>
      </div>
    </div>
    <div class="is-actions">${itemActionMarkup(id, qty)}</div>`;

  $("#itemSheet").hidden = false;
  $("#isClose").addEventListener("click", closeSheets);
  wireItemActions(id);
}

function itemActionMarkup(id, qty) {
  if (qty > 0) {
    return `<div class="is-stepper">
      <div class="qty-big"><button data-is-dec>−</button><span data-is-qty>${qty}</span><button data-is-inc>+</button></div>
      <button class="is-add" data-is-done>Gata (${qty})</button>
    </div>`;
  }
  return `<button class="is-add" data-is-add>＋ Adaugă în lista mea</button>`;
}
function wireItemActions(id) {
  const cont = $(".is-actions", $("#itemSheetInner"));
  const rerender = () => { cont.innerHTML = itemActionMarkup(id, state.draft[id] || 0); wireItemActions(id); };
  const add = $("[data-is-add]", cont);
  if (add) add.addEventListener("click", () => { addToDraft(id); rerender(); });
  const inc = $("[data-is-inc]", cont); if (inc) inc.addEventListener("click", () => { changeQty(id, +1); rerender(); });
  const dec = $("[data-is-dec]", cont); if (dec) dec.addEventListener("click", () => { changeQty(id, -1); rerender(); });
  const done = $("[data-is-done]", cont); if (done) done.addEventListener("click", closeSheets);
}

/* ---------- Draft sheet ---------- */
function openDraftSheet() { $("#draftSheet").hidden = false; renderDraftSheet(); }

function renderDraftSheet() {
  const inner = $("#draftSheetInner");
  const ids = Object.keys(state.draft);

  if (state.draftConfirmed) {
    inner.innerHTML = `
      <div class="sheet-handle"></div>
      <div class="ds-confirmed">
        <div class="check">✓</div>
        <h3>Ospătarul a fost anunțat</h3>
        <p>Selecția ta a fost transmisă ospătarului mesei. Vine să preia comanda — nu trebuie să faci nimic altceva.</p>
      </div>
      <div class="ds-foot">
        <button class="ds-ready" id="dsClose2">Înapoi la meniu</button>
      </div>`;
    $("#dsClose2").addEventListener("click", () => { closeSheets(); state.draft = {}; state.draftConfirmed = false; syncAll(); switchView("menu"); });
    return;
  }

  if (!ids.length) {
    inner.innerHTML = `
      <div class="sheet-handle"></div>
      <div class="ds-empty"><span>📝</span>
        <h3 style="font-family:var(--font-head);font-size:22px;margin-bottom:6px">Lista ta e goală</h3>
        <p>Adaugă produse din meniu ca să-ți pregătești selecția. Când ești gata, cheamă ospătarul să preia comanda.</p>
      </div>`;
    return;
  }

  const rows = ids.map(id => {
    const it = itemById[id], q = state.draft[id];
    return `<div class="ds-row">
      <div class="ds-emoji">${it.emoji}</div>
      <div class="ds-info"><div class="n">${it.name}</div><div class="p">${it.price} lei</div></div>
      <div class="ds-qty"><button data-ds-dec="${id}">−</button><span>${q}</span><button data-ds-inc="${id}">+</button></div>
    </div>`;
  }).join("");

  inner.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="ds-head">
      <h3>Selecția ta</h3>
      <p>Un draft de comandă — îl pregătești în ritmul tău. Nimic nu se trimite în bucătărie automat.</p>
    </div>
    <div class="ds-list">${rows}</div>
    <div class="ds-foot">
      <div class="ds-total"><span class="lbl">Estimare</span><span class="val">${draftPriceTotal()} lei</span></div>
      <div class="ds-disclaimer">Sumă orientativă. Comanda finală e preluată și confirmată de ospătar la masă.</div>
      <button class="ds-ready" id="dsReady">Suntem gata să comandăm 🙋</button>
      <div class="ds-ready-sub">Ospătarul vine și introduce comanda în sistemul restaurantului.</div>
    </div>`;

  $$("[data-ds-inc]", inner).forEach(b => b.addEventListener("click", () => changeQty(b.dataset.dsInc, +1)));
  $$("[data-ds-dec]", inner).forEach(b => b.addEventListener("click", () => changeQty(b.dataset.dsDec, -1)));
  $("#dsReady").addEventListener("click", () => {
    state.draftConfirmed = true;
    toast("✓ Ospătarul a fost anunțat");
    renderDraftSheet();
  });
}

/* ---------- Sheets / toast ---------- */
function closeSheets() { $("#itemSheet").hidden = true; $("#draftSheet").hidden = true; }
let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastT);
  toastT = setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.hidden = true, 220); }, 1900);
}

/* ---------- View switching ---------- */
function switchView(name) {
  state.view = name;
  $$(".view").forEach(v => v.classList.toggle("active", v.id === `view-${name}`));
  $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === name));
  const active = $(`#view-${name}`);
  if (active) active.scrollTop = 0;
}

/* ---------- Init / wiring ---------- */
function init() {
  renderCatNav();
  renderMenu();
  renderDiscover();
  renderWaiter();

  // tabs
  $$(".tab").forEach(t => t.addEventListener("click", () => switchView(t.dataset.view)));

  // filters
  $$(".chip").forEach(c => c.addEventListener("click", () => {
    const f = c.dataset.filter;
    if (state.activeFilters.has(f)) { state.activeFilters.delete(f); c.classList.remove("active"); }
    else { state.activeFilters.add(f); c.classList.add("active"); }
    renderMenu();
  }));
  $("#clearFilters").addEventListener("click", () => {
    state.activeFilters.clear();
    $$(".chip").forEach(c => c.classList.remove("active"));
    renderMenu();
  });

  // search
  const si = $("#searchInput"), sc = $("#searchClear");
  si.addEventListener("input", () => {
    state.search = si.value.trim();
    sc.hidden = !state.search;
    renderMenu();
  });
  sc.addEventListener("click", () => { si.value = ""; state.search = ""; sc.hidden = true; renderMenu(); si.focus(); });

  // promo strip
  $("#promoClose").addEventListener("click", () => $("#promoStrip").classList.add("hidden"));
  $(".promo-link").addEventListener("click", () => switchView("discover"));

  // draft bar
  $("#openDraft").addEventListener("click", openDraftSheet);

  // close sheets on overlay tap
  $("#itemSheet").addEventListener("click", e => { if (e.target.id === "itemSheet") closeSheets(); });
  $("#draftSheet").addEventListener("click", e => { if (e.target.id === "draftSheet") closeSheets(); });

  // language (visual only in mockup)
  $("#langBtn").addEventListener("click", () => {
    const b = $("#langBtn");
    const isRo = b.textContent.includes("RO");
    b.innerHTML = isRo ? `<span class="flag">🇬🇧</span> EN` : `<span class="flag">🇷🇴</span> RO`;
    toast(isRo ? "Traducere automată: EN" : "Limbă: Română");
  });

  syncDraftBar();
}

document.addEventListener("DOMContentLoaded", init);

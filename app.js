/* Zyvar-English — single-page app (hash routing, no build step) */
(function () {
  "use strict";
  const W = ZY.writing;
  const ORDER = ["email", "article", "review", "essay", "report"];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const slots = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="slot">[$1]</span>');
  const view = $("#view");
  let cleanups = [];
  const onLeave = (fn) => cleanups.push(fn);

  /* ---------------- icons ---------------- */
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/>',
    book: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    library: '<path d="M5 19V5a2 2 0 0 1 2-2h12v15H7a2 2 0 0 0-2 2 2 2 0 0 0 2 2h12"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    cards: '<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v11"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    leaf: '<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="m5 19 8-8"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    flame: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 2 1.5 3 2.5 3 0-3-1-5 0-8z"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    pause: '<path d="M8 4v16M16 4v16"/>',
    reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'
  };
  const ic = (n, cls = "") => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;
  const TYPE_ICON = { email: "mail", article: "news", review: "star", essay: "pen", report: "clipboard" };

  /* ---------------- storage ---------------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("zyvar:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("zyvar:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 1700);
  }
  function copy(text) {
    const done = () => toast("Copied to clipboard");
    const fallback = () => {
      const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Copy failed"); }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }
  function download(name, text) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 100);
  }

  /* ---------------- theme ---------------- */
  const THEMES = [["forest", "Forest", "leaf"], ["ocean", "Ocean", "drop"], ["midnight", "Midnight", "moon"], ["light", "Light", "sun"]];
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t); store.set("theme", t);
    $$(".theme-pick button").forEach(b => b.classList.toggle("on", b.dataset.t === t));
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  }

  /* ---------------- word pools ---------------- */
  const POOL = (() => {
    const seen = new Set(), out = [];
    const add = (w, m, e, cat) => { const k = w.toLowerCase().trim(); if (seen.has(k) || !m) return; seen.add(k); out.push({ w, m, e: e || "", cat }); };
    ZY.universal.forEach(g => g.items.forEach(([w, m, e]) => add(w, m, e, "Universal")));
    ORDER.forEach(id => {
      W[id].vocab.forEach(([w, m, e]) => add(w, m, e, W[id].name));
      W[id].themes.forEach(t => t.words.forEach(([w, m]) => add(w, m, "", W[id].name + " · " + t.name)));
    });
    ZY.themes.forEach(t => t.words.forEach(([w, m]) => add(w, m, "", t.name)));
    ZY.idioms.forEach(([w, m]) => add(w, m, "", "Idioms"));
    return out;
  })();
  const findWord = (w) => POOL.find(c => c.w === w);
  const saved = () => store.get("saved", []);
  function toggleSave(w) {
    const s = saved(), i = s.indexOf(w);
    if (i >= 0) s.splice(i, 1); else s.push(w);
    store.set("saved", s); toast(i >= 0 ? "Removed from saved words" : "Saved to your word list");
    return i < 0;
  }
  const starBtn = (w) => `<button class="star ${saved().includes(w) ? "on" : ""}" data-star="${esc(w)}" title="Save word">${ic("star", "sm")}</button>`;

  function todayKey(d = new Date()) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function seeded(seedStr) {
    let h = 2166136261;
    for (let i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function shuffle(arr, rnd = Math.random) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function fcState() { return store.get("fc", { known: {}, learning: {}, streak: 0, last: "", seenToday: {} }); }
  function dailyDeck() {
    const st = fcState(), key = todayKey();
    if (st.daily && st.daily.date === key) { const locked = st.daily.words.map(findWord).filter(Boolean); if (locked.length) return locked; }
    const fresh = POOL.filter(c => !st.known[c.w]);
    const deck = shuffle(fresh.length >= 10 ? fresh : POOL, seeded("zyvar-" + key)).slice(0, 10);
    st.daily = { date: key, words: deck.map(c => c.w) }; store.set("fc", st);
    return deck;
  }
  const wordOfDay = () => shuffle(POOL, seeded("wotd-" + todayKey()))[0];

  /* ---------------- search ---------------- */
  const INDEX = (() => {
    const idx = [];
    ORDER.forEach(id => {
      const t = W[id];
      idx.push({ l: t.name + " — writing guide", s: t.tagline, h: "#/w/" + id });
      t.samples.forEach((s, i) => idx.push({ l: s.title, s: t.name + " · A* sample", h: "#/w/" + id + "/samples/" + i }));
      (t.prompts || []).forEach((p, i) => idx.push({ l: p.q, s: t.name + " · practice prompt", h: "#/lab?type=" + id + "&p=" + i }));
    });
    POOL.forEach(c => idx.push({ l: c.w, s: c.cat + " — " + c.m, h: "#/vocab?q=" + encodeURIComponent(c.w) }));
    ZY.reading.forEach(r => idx.push({ l: r.title, s: "Reading exercise", h: "#/reading/" + r.id }));
    ZY.errors.forEach(e => idx.push({ l: e[0], s: "Common error — " + e[1], h: "#/grammar" }));
    ZY.confused.forEach(e => idx.push({ l: e[0], s: "Confused words — " + e[1], h: "#/grammar/confused" }));
    [["Writing Lab", "Timed practice with live feedback", "#/lab"], ["Exam guide", "Marking criteria, timing and tips", "#/exam"], ["Grammar quiz", "Test your accuracy", "#/grammar/quiz"], ["Flashcards", "Daily vocabulary", "#/flashcards"]].forEach(([l, s, h]) => idx.push({ l, s, h }));
    return idx;
  })();
  function setupSearch() {
    const inp = $("#search"), box = $("#search-results");
    let sel = -1;
    const close = () => { box.classList.remove("open"); sel = -1; };
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase(); sel = -1;
      if (q.length < 2) return close();
      const seen = new Set();
      const hits = INDEX.filter(x => (x.l + " " + x.s).toLowerCase().includes(q))
        .filter(x => { const k = x.l + x.h; if (seen.has(k)) return false; seen.add(k); return true; })
        .sort((a, b) => (b.l.toLowerCase().startsWith(q) - a.l.toLowerCase().startsWith(q))).slice(0, 14);
      box.innerHTML = hits.length ? hits.map(x => `<a class="sr-item" href="${x.h}"><b>${esc(x.l)}</b><small>${esc(x.s)}</small></a>`).join("") : `<div class="sr-item mute">No results for “${esc(q)}”</div>`;
      box.classList.add("open");
    });
    box.addEventListener("click", () => { close(); inp.value = ""; });
    document.addEventListener("click", e => { if (!e.target.closest(".search")) close(); });
    inp.addEventListener("keydown", e => {
      const items = $$(".sr-item[href]", box);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, Math.min(items.length - 1, sel + (e.key === "ArrowDown" ? 1 : -1))); items.forEach((a, k) => a.classList.toggle("sel", k === sel)); }
      if (e.key === "Enter") { const a = items[sel >= 0 ? sel : 0]; if (a) { location.hash = a.getAttribute("href"); close(); inp.value = ""; inp.blur(); } }
      if (e.key === "Escape") { close(); inp.blur(); }
    });
    document.addEventListener("keydown", e => { if (e.key === "/" && !e.target.matches("input, textarea, select")) { e.preventDefault(); inp.focus(); } });
  }

  /* ---------------- shared writing helpers ---------------- */
  function wordCount(text) { return text.split("\n").filter(l => !/^#{1,2}\s/.test(l)).join(" ").split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length; }
  function wcBadge(n) {
    if (n <= 160) return `<span class="tag" title="Fits a 120–160 word task">${n} words · fits 120–160</span>`;
    if (n <= 200) return `<span class="tag amber" title="Fits a 150–200 word task">${n} words · fits 150–200</span>`;
    return `<span class="tag red" title="Longer than the exam limit — learn from it, but trim for the exam">${n} words · over limit</span>`;
  }
  const SHORT = /^(so|but|as|and|like|then|still|since|though|because|also|plus|for example)$/i;
  function connectivesFor(t) {
    return t.connectives.flatMap(g => g.items).concat(ZY.connectives.flatMap(g => g.formal.concat(g.informal)))
      .filter(c => !c.includes("…") && !c.includes("?") && c.length > 2 && !SHORT.test(c));
  }
  function vocabFor(t) { return t.vocab.map(v => v[0]).concat(ZY.universal.flatMap(g => g.items.map(i => i[0]))).concat(ZY.idioms.map(i => i[0])); }
  function termRegex(terms) {
    const ts = Array.from(new Set(terms.map(s => s.toLowerCase()))).sort((a, b) => b.length - a.length).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return new RegExp("\\b(" + ts.join("|") + ")\\b", "gi");
  }
  function highlighter(t) {
    const map = new Map();
    vocabFor(t).forEach(v => map.set(v.toLowerCase(), "hl"));
    connectivesFor(t).forEach(c => { if (!map.has(c.toLowerCase())) map.set(c.toLowerCase(), "hl hl-c"); });
    const re = termRegex(Array.from(map.keys()));
    return (html) => html.replace(re, m => `<mark class="${map.get(m.toLowerCase()) || "hl"}">${m}</mark>`);
  }
  function renderText(text, hl) {
    return text.trim().split(/\n\s*\n/).map(b => {
      let out = "", para = [];
      const flush = () => { if (para.length) { let h = para.map(esc).join("<br>"); if (hl) h = hl(h); out += `<p>${h}</p>`; para = []; } };
      b.split("\n").forEach(l => {
        if (/^#\s/.test(l)) { flush(); out += `<div class="e-title">${esc(l.slice(2))}</div>`; }
        else if (/^##\s/.test(l)) { flush(); out += `<h5>${esc(l.slice(3))}</h5>`; }
        else para.push(l);
      });
      flush(); return out;
    }).join("");
  }
  function presetHTML(p, i, cls) {
    return `<div class="preset ${cls || ""}">
      <button class="btn sm copy" data-copy="${esc(p.text)}">${ic("copy", "sm")} Copy</button>
      <div class="p-title"><span class="p-num">${i + 1}</span><b>${esc(p.title)}</b></div>
      <div class="p-use">Best for: ${esc(p.use)}</div>
      <div class="p-text">${slots(p.text)}</div></div>`;
  }
  const taskHTML = (s) => `<div class="task"><b>Task:</b> ${esc(s.task || s.q)}
      ${s.points ? `<ul>${s.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      ${s.bubbles ? `<div class="bubbles">${s.bubbles.map(b => `<span class="bubble">“${esc(b)}”</span>`).join("")}</div>` : ""}</div>`;

  /* ================= PAGES ================= */
  function pageHome() {
    const totalSamples = ORDER.reduce((n, id) => n + W[id].samples.length, 0);
    const totalPrompts = ORDER.reduce((n, id) => n + (W[id].prompts || []).length, 0);
    const wotd = wordOfDay(), st = fcState(), known = Object.keys(st.known).length, pct = Math.round(known / POOL.length * 100);
    view.innerHTML = `
      <section class="hero">
        <div class="kicker">Cambridge IGCSE · English as a Second Language 0510</div>
        <h1 style="margin-top:10px">A complete toolkit for <em>A* writing</em>.</h1>
        <p>Fixed introductions and endings, annotated model answers, extensive vocabulary banks, grammar and accuracy guides, daily flashcards, reading practice and a timed Writing Lab with instant feedback.</p>
        <div class="cta">
          <a class="btn primary" href="#/w/email">Start with Email ${ic("arrow", "sm")}</a>
          <a class="btn" href="#/lab">${ic("edit", "sm")} Open the Writing Lab</a>
          <a class="btn ghost" href="#/flashcards">${ic("cards", "sm")} Today's flashcards</a>
        </div>
        <div class="stat-row">
          <div class="stat"><b>${totalSamples}</b><span>A* samples</span></div>
          <div class="stat"><b>${totalPrompts}</b><span>practice prompts</span></div>
          <div class="stat"><b>${POOL.length}</b><span>vocabulary items</span></div>
          <div class="stat"><b>${ZY.reading.length}</b><span>reading exercises</span></div>
          <div class="stat"><b>${ZY.grammarQuiz.length + ZY.errors.length}</b><span>grammar points</span></div>
        </div>
      </section>

      <div class="section-title"><h2>Writing guides</h2><span>Each has its own menu: introductions, endings, vocabulary, phrases, samples and prompts</span></div>
      <div class="grid g3">
        ${ORDER.map(id => { const t = W[id]; return `
          <a class="type-card" href="#/w/${id}">
            <div class="t-ico">${ic(TYPE_ICON[id])}</div>
            <h3>${t.name}</h3><p>${esc(t.tagline)}</p>
            <div class="t-foot"><span class="tag">${t.samples.length} samples</span><span class="tag plain">3 intros · 3 endings</span><span class="tag plain">${(t.prompts || []).length} prompts</span></div>
          </a>`; }).join("")}
        <a class="type-card" href="#/lab">
          <div class="t-ico">${ic("edit")}</div><h3>Writing Lab</h3>
          <p>Write under timed conditions and get instant feedback on word count, register, connectives and vocabulary.</p>
          <div class="t-foot"><span class="tag">New</span><span class="tag plain">Autosaves</span></div>
        </a>
      </div>

      <div class="grid g2" style="margin-top:20px">
        <div class="card">
          <div class="kicker">Word of the day</div>
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:8px"><div class="big-word">${esc(wotd.w)}</div><span class="tag plain">${esc(wotd.cat)}</span></div>
          <p class="muted" style="margin:6px 0 4px">${esc(wotd.m)}</p>
          ${wotd.e ? `<p class="mute" style="font-family:var(--serif);font-style:italic">“${esc(wotd.e)}”</p>` : ""}
          <a class="btn sm" href="#/flashcards">Practise today's 10 words ${ic("arrow", "sm")}</a>
        </div>
        <div class="card">
          <div class="kicker">Your progress</div>
          <div style="display:flex;gap:28px;align-items:center;margin-top:10px;flex-wrap:wrap">
            <div><div class="metric" style="color:var(--amber)">${st.streak || 0}</div><div class="mute small">day streak</div></div>
            <div><div class="metric" style="color:var(--accent)">${known}</div><div class="mute small">words mastered</div></div>
            <div><div class="metric" style="color:var(--blue)">${Object.keys(st.learning).length}</div><div class="mute small">still learning</div></div>
            <div><div class="metric">${saved().length}</div><div class="mute small">saved words</div></div>
          </div>
          <div class="progress" style="margin-top:14px"><i style="width:${pct}%"></i></div>
          <p class="mute small" style="margin-top:6px">${pct}% of the word bank mastered. Progress is saved in this browser.</p>
        </div>
      </div>

      <div class="section-title"><h2>Build accuracy</h2><span>Content and organisation earn marks — accuracy keeps them</span></div>
      <div class="grid g4">
        <a class="type-card" href="#/grammar"><div class="t-ico">${ic("type")}</div><h3>Common errors</h3><p>${ZY.errors.length} mistakes examiners see every year, corrected.</p></a>
        <a class="type-card" href="#/grammar/confused"><div class="t-ico">${ic("shuffle")}</div><h3>Confused words</h3><p>${ZY.confused.length} pairs such as affect/effect and practice/practise.</p></a>
        <a class="type-card" href="#/grammar/quiz"><div class="t-ico">${ic("target")}</div><h3>Grammar quiz</h3><p>${ZY.grammarQuiz.length} exam-style questions with explanations.</p></a>
        <a class="type-card" href="#/exam"><div class="t-ico">${ic("award")}</div><h3>Exam guide</h3><p>Marking criteria, timing plan and the most common reasons students lose marks.</p></a>
      </div>

      <div class="section-title"><h2>The A* paragraph formula</h2><span>For articles, essays and review evaluations</span></div>
      <div class="card">
        <div class="formula"><span class="step">Point</span><span class="arrow">${ic("arrow", "sm")}</span><span class="step">Explain</span><span class="arrow">${ic("arrow", "sm")}</span><span class="step">Example</span><span class="arrow">${ic("arrow", "sm")}</span><span class="step">Link</span></div>
        <p class="muted" style="margin:12px 0 0">Make a clear point; explain why it matters; support it with a relevant example; link it back to the question or purpose.</p>
      </div>

      <div class="section-title"><h2>Choose the right voice</h2></div>
      <div class="table-wrap"><table><thead><tr><th>Writing</th><th>Voice</th><th>Starter</th></tr></thead><tbody>
        ${ZY.voices.map(v => `<tr><td class="word">${v[0]}</td><td>${v[1]}</td><td class="ex">${slots(v[2])}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="callout warn" style="margin-top:18px"><b>Exam reminder:</b> always follow the exact word limit and instructions on your question paper. Adapt every phrase to the task — clear, accurate writing beats unnatural complexity.</div>`;
  }

  const WTABS = [["overview", "Overview"], ["intros", "Introductions"], ["endings", "Endings"], ["vocab", "Vocabulary"], ["themes", "Theme vocab"], ["phrases", "Phrases & connectives"], ["samples", "A* samples"], ["prompts", "Practice prompts"], ["checklist", "Checklist"]];
  function pageWriting(id, tab, extra) {
    const t = W[id]; if (!t) return pageNotFound();
    tab = tab || "overview";
    view.innerHTML = `
      <div class="page-head">
        <div class="kicker">Writing guide</div>
        <h1 style="display:flex;gap:12px;align-items:center"><span class="t-ico" style="width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center">${ic(TYPE_ICON[id], "lg")}</span>${t.name}</h1>
        <p>${esc(t.tagline)}</p>
        <div class="meta"><span class="tag">${esc(t.voice)}</span><span class="tag amber">${esc(t.words)}</span><span class="tag plain">${t.samples.length} samples</span><span class="tag plain">${(t.prompts || []).length} prompts</span></div>
      </div>
      <nav class="tabs">${WTABS.map(([k, l]) => `<a class="tab ${k === tab ? "active" : ""}" href="#/w/${id}/${k}">${l}</a>`).join("")}</nav>
      <div id="wbody"></div>`;
    const body = $("#wbody");
    const r = {
      overview() {
        body.innerHTML = `
          <div class="grid g2">
            <div class="card"><h3>${ic("target")} What the examiner wants</h3>${t.overview.map(p => `<p class="muted">${esc(p)}</p>`).join("")}</div>
            <div class="card"><h3>${ic("list")} Structure</h3><div class="table-wrap"><table><tbody>${t.format.map(f => `<tr><td class="word">${esc(f[0])}</td><td>${slots(f[1])}</td></tr>`).join("")}</tbody></table></div></div>
          </div>
          <div class="grid g2" style="margin-top:14px">
            <div class="card"><h3>${ic("check")} Do</h3><ul class="clean">${t.dos.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>
            <div class="card"><h3>${ic("reset")} Avoid</h3><ul class="clean cross">${t.donts.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>
          </div>
          <div class="card" style="margin-top:14px"><h3>${ic("arrow")} Next steps</h3>
            <div class="chips">
              <a class="btn sm" href="#/w/${id}/intros">Learn the 3 introductions</a>
              <a class="btn sm" href="#/w/${id}/endings">Learn the 3 endings</a>
              <a class="btn sm" href="#/w/${id}/samples">Read the A* samples</a>
              <a class="btn sm" href="#/lab?type=${id}">Practise in the Writing Lab</a>
              <a class="btn sm" href="#/flashcards?cat=${encodeURIComponent(t.name)}">${t.name} flashcards</a>
            </div></div>`;
      },
      intros() {
        body.innerHTML = `<div class="callout" style="margin-bottom:14px"><b>Fixed introductions.</b> Memorise these three, then replace the <span class="slot">[bracketed parts]</span> with details from your task. Choose the one that matches the content of the question.</div>${t.intros.map((p, i) => presetHTML(p, i)).join("")}`;
      },
      endings() {
        body.innerHTML = `<div class="callout" style="margin-bottom:14px"><b>Fixed endings.</b> Three conclusions for three kinds of content. Adapt the <span class="slot">[bracketed parts]</span> to your task.</div>${t.endings.map((p, i) => presetHTML(p, i, "end")).join("")}`;
      },
      vocab() {
        body.innerHTML = `<div class="toolbar"><input id="vf" placeholder="Filter ${t.name.toLowerCase()} vocabulary…" style="flex:1;min-width:200px"><span class="mute small" id="vcount"></span></div>
          <div class="table-wrap"><table><thead><tr><th>Word / phrase</th><th>Meaning</th><th>Example</th><th></th></tr></thead><tbody id="vt"></tbody></table></div>`;
        const draw = (q = "") => {
          const rows = t.vocab.filter(v => v.join(" ").toLowerCase().includes(q.toLowerCase()));
          $("#vt").innerHTML = rows.map(v => `<tr><td class="word">${esc(v[0])}</td><td>${esc(v[1])}</td><td class="ex">${esc(v[2])}</td><td style="position:relative;width:34px">${starBtn(v[0])}</td></tr>`).join("") || `<tr><td colspan="4" class="mute">No matches.</td></tr>`;
          $("#vcount").textContent = rows.length + " / " + t.vocab.length;
        };
        draw(); $("#vf").addEventListener("input", e => draw(e.target.value));
      },
      themes() {
        body.innerHTML = t.themes.map(th => `<div class="theme-block"><h3>${esc(th.name)}<span class="count">${th.words.length} words</span></h3>
          <div class="vgrid">${th.words.map(([w, m]) => `<div class="vcard">${starBtn(w)}<b>${esc(w)}</b><div>${esc(m)}</div></div>`).join("")}</div></div>`).join("") +
          `<div class="callout">More topics: the <a href="#/vocab">Vocabulary Bank</a> has ${ZY.themes.length} themes with ${ZY.themes.reduce((n, x) => n + x.words.length, 0)} further words.</div>`;
      },
      phrases() {
        body.innerHTML = `<div class="grid g2">
          <div class="card"><h3>${ic("list")} Useful phrases</h3>${t.phrases.map(g => `<div class="phrase-group"><h4>${esc(g.group)}</h4><div class="chips">${g.items.map(i => `<span class="chip click" data-copy="${esc(i)}" title="Click to copy">${esc(i)}</span>`).join("")}</div></div>`).join("")}</div>
          <div class="card"><h3>${ic("link")} Connectives for ${t.name.toLowerCase()}s</h3>${t.connectives.map(g => `<div class="phrase-group"><h4>${esc(g.group)}</h4><div class="chips">${g.items.map(i => `<span class="chip click" data-copy="${esc(i)}">${esc(i)}</span>`).join("")}</div></div>`).join("")}
          <p class="mute small" style="margin-top:16px">Click any phrase to copy it. Full formal vs informal list: <a href="#/phrases">Phrases & Connectives</a>.</p></div></div>`;
      },
      samples() {
        const hl = highlighter(t), open = extra !== undefined ? Number(extra) : 0;
        const srcs = ["All"].concat(Array.from(new Set(t.samples.map(s => s.src.replace(/ \(corrected\)/, "")))));
        body.innerHTML = `<div class="sample-tools">
            <label class="btn sm"><input type="checkbox" id="hltoggle" style="margin:0"> Highlight A* language</label>
            <button class="btn sm" id="expandall">Expand all</button>
            <select class="inp" id="srcf" style="padding:5px 10px;font-size:.8rem">${srcs.map(s => `<option>${esc(s)}</option>`).join("")}</select>
            <span class="legend"><span><i style="background:var(--accent-line)"></i>vocabulary</span><span><i style="background:color-mix(in srgb,var(--amber) 55%,transparent)"></i>connectives</span></span>
          </div>
          ${t.samples.map((s, i) => `
          <article class="sample ${i === open ? "open" : ""}" id="s${i}" data-src="${esc(s.src.replace(/ \(corrected\)/, ""))}">
            <div class="sample-head"><span class="chev">${ic("chev", "sm")}</span><h3>${esc(s.title)}</h3>
              <div class="s-meta"><span class="tag plain">${esc(s.src)}</span>${wcBadge(wordCount(s.text))}</div></div>
            <div class="sample-body">
              ${taskHTML(s)}
              <div class="essay" data-raw="${i}">${renderText(s.text)}</div>
              ${s.notes ? `<div class="notes"><b>Why it scores highly</b><ul>${s.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : ""}
              <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
                <button class="btn sm" data-copy="${esc(s.text.replace(/^#{1,2}\s/gm, ""))}">${ic("copy", "sm")} Copy text</button>
                <button class="btn sm" data-print="${i}">${ic("print", "sm")} Print</button>
                <a class="btn sm" href="#/lab?type=${id}&sample=${i}">${ic("edit", "sm")} Try this task in the Lab</a>
              </div>
            </div>
          </article>`).join("")}`;
        $$(".sample-head", body).forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
        $("#expandall").addEventListener("click", e => {
          const all = $$(".sample", body).filter(s => s.style.display !== "none"), anyClosed = all.some(s => !s.classList.contains("open"));
          all.forEach(s => s.classList.toggle("open", anyClosed)); e.target.textContent = anyClosed ? "Collapse all" : "Expand all";
        });
        $("#srcf").addEventListener("change", e => $$(".sample", body).forEach(s => { s.style.display = e.target.value === "All" || s.dataset.src === e.target.value ? "" : "none"; }));
        $$("[data-print]", body).forEach(b => b.addEventListener("click", () => {
          $$(".sample", body).forEach(s => s.style.display = s.id === "s" + b.dataset.print ? "" : "none"); window.print();
          $$(".sample", body).forEach(s => s.style.display = "");
        }));
        const hlOn = store.get("hl", false); $("#hltoggle").checked = hlOn;
        const paint = on => $$(".essay", body).forEach(el => { el.innerHTML = renderText(t.samples[+el.dataset.raw].text, on ? hl : null); });
        if (hlOn) paint(true);
        $("#hltoggle").addEventListener("change", e => { store.set("hl", e.target.checked); paint(e.target.checked); });
        if (extra !== undefined) setTimeout(() => { const el = $("#s" + open); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50);
      },
      prompts() {
        body.innerHTML = `<div class="callout" style="margin-bottom:14px"><b>Practice prompts.</b> Exam-style tasks without model answers. Plan for 3 minutes, then write in the Writing Lab with the timer running.</div>
          <div class="grid g2">${(t.prompts || []).map((p, i) => `<div class="card" style="margin:0">
            <div class="kicker">Prompt ${i + 1}</div>${taskHTML(p)}
            <a class="btn sm primary" href="#/lab?type=${id}&p=${i}">${ic("edit", "sm")} Write this in the Lab</a></div>`).join("")}</div>`;
      },
      checklist() {
        body.innerHTML = `<div class="grid g2">
          <div class="card"><h3>${ic("check")} ${t.name} checklist</h3>${t.checklist.map(c => `<label class="opt" style="border-bottom:1px solid var(--border)"><input type="checkbox"> <span>${esc(c)}</span></label>`).join("")}</div>
          <div class="card"><h3>${ic("target")} Universal self-check</h3><ul class="clean">${ZY.selfCheck.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
          <div class="callout" style="margin-top:14px"><b>Controlled sophistication:</b> one precise expression used naturally is better than several complicated ones used inaccurately.</div></div></div>`;
      }
    };
    (r[tab] || r.overview)();
  }

  /* ---------------- vocab ---------------- */
  function pageVocab(params) {
    const q0 = params.get("q") || "";
    let tab = params.get("tab") || "themes";
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Vocabulary bank</div><h1>Vocabulary & Theme Lists</h1>
        <p>Universal A* vocabulary plus ${ZY.themes.length} topic themes. Star any word to add it to your saved list and study it as flashcards.</p></div>
      <nav class="tabs">${[["themes", "Theme bank"], ["universal", "Universal A* words"], ["upgrades", "Word upgrades"], ["saved", "Saved words"]].map(([k, l]) => `<button class="tab ${k === tab ? "active" : ""}" data-t="${k}">${l}</button>`).join("")}</nav>
      <div class="toolbar"><input id="vq" placeholder="Search any word or meaning…" value="${esc(q0)}" style="flex:1;min-width:200px">
        <select id="vth"><option value="">All themes</option>${ZY.themes.map(t => `<option>${esc(t.name)}</option>`).join("")}</select></div>
      <div id="vb"></div>`;
    const card = (w, m, sub) => `<div class="vcard">${starBtn(w)}<b>${esc(w)}</b><div>${esc(m)}</div>${sub ? `<div class="mute" style="font-size:.74rem">${esc(sub)}</div>` : ""}</div>`;
    const draw = () => {
      const q = $("#vq").value.trim().toLowerCase(), th = $("#vth").value;
      $("#vth").style.display = tab === "themes" ? "" : "none";
      const match = (...s) => !q || s.join(" ").toLowerCase().includes(q);
      let html = "";
      if (tab === "themes") {
        html = ZY.themes.filter(t => !th || t.name === th).map(t => {
          const ws = t.words.filter(([w, m]) => match(w, m)); if (!ws.length) return "";
          return `<div class="theme-block"><h3>${esc(t.name)}<span class="count">${ws.length} words</span></h3><div class="vgrid">${ws.map(([w, m]) => card(w, m)).join("")}</div></div>`;
        }).join("");
        const extra = q ? POOL.filter(c => match(c.w, c.m) && !ZY.themes.some(t => t.words.some(x => x[0] === c.w))) : [];
        if (extra.length) html += `<div class="theme-block"><h3>From writing-type lists<span class="count">${extra.length}</span></h3><div class="vgrid">${extra.slice(0, 60).map(c => card(c.w, c.m, c.cat)).join("")}</div></div>`;
      } else if (tab === "universal") {
        html = ZY.universal.map(g => {
          const it = g.items.filter(i => match(...i)); if (!it.length) return "";
          return `<div class="theme-block"><h3>${esc(g.group)}<span class="count">${it.length}</span></h3><div class="table-wrap"><table><thead><tr><th>Word</th><th>Meaning</th><th>Example</th><th></th></tr></thead><tbody>${it.map(i => `<tr><td class="word">${esc(i[0])}</td><td>${esc(i[1])}</td><td class="ex">${esc(i[2])}</td><td style="position:relative;width:34px">${starBtn(i[0])}</td></tr>`).join("")}</tbody></table></div></div>`;
        }).join("");
      } else if (tab === "upgrades") {
        const it = ZY.upgrades.filter(u => match(...u));
        html = `<div class="table-wrap"><table><thead><tr><th>Instead of…</th><th>Try…</th></tr></thead><tbody>${it.map(u => `<tr><td class="word bad">${esc(u[0])}</td><td class="good">${esc(u[1])}</td></tr>`).join("")}</tbody></table></div>`;
      } else {
        const it = saved().map(findWord).filter(Boolean).filter(c => match(c.w, c.m));
        html = it.length ? `<div class="toolbar"><a class="btn sm primary" href="#/flashcards?mode=saved">${ic("cards", "sm")} Study saved words as flashcards</a><button class="btn sm" id="dlsaved">${ic("download", "sm")} Download list</button></div><div class="vgrid">${it.map(c => card(c.w, c.m, c.cat)).join("")}</div>` :
          `<div class="card empty">No saved words yet. Click the star on any word card to save it here.</div>`;
      }
      $("#vb").innerHTML = html || `<div class="empty">No words match “${esc(q)}”.</div>`;
      const dl = $("#dlsaved"); if (dl) dl.onclick = () => download("zyvar-saved-words.txt", saved().map(w => { const c = findWord(w); return c ? `${c.w} — ${c.m}` : w; }).join("\n"));
    };
    $$(".tabs .tab", view).forEach(b => b.addEventListener("click", () => { $$(".tabs .tab", view).forEach(x => x.classList.remove("active")); b.classList.add("active"); tab = b.dataset.t; draw(); }));
    $("#vq").addEventListener("input", draw); $("#vth").addEventListener("change", draw);
    const onStar = () => { if (tab === "saved") draw(); };
    view.addEventListener("zy:star", onStar); onLeave(() => view.removeEventListener("zy:star", onStar));
    draw();
  }

  /* ---------------- phrases ---------------- */
  function pagePhrases() {
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Language toolkit</div><h1>Phrases, Connectives & Idioms</h1>
        <p>The glue of A* writing. Choose formal linkers for essays and reports and informal ones for emails — examiners notice when the register is wrong.</p></div>
      <nav class="tabs"><a class="tab active" href="#conn" data-s>Connectives</a><a class="tab" href="#idioms" data-s>Idioms</a><a class="tab" href="#grammar" data-s>Structures</a><a class="tab" href="#bytype" data-s>By writing type</a></nav>
      <h2 id="conn">Connectives — formal vs informal</h2>
      <div class="table-wrap"><table><thead><tr><th>Purpose</th><th>Formal (essay · report · article)</th><th>Informal (email)</th></tr></thead><tbody>
        ${ZY.connectives.map(c => `<tr><td class="word">${esc(c.group)}</td><td>${c.formal.map(esc).join(" · ")}</td><td class="good">${c.informal.map(esc).join(" · ")}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="callout warn" style="margin-top:12px"><b>Teacher tip:</b> in informal emails, swap “Furthermore / In addition / Moreover” for “Also / Plus / What's more / Besides”.</div>
      <h2 id="idioms" style="margin-top:32px">Idioms & expressions</h2>
      <div class="toolbar"><input id="iq" placeholder="Filter idioms…" style="flex:1;min-width:200px"></div>
      <div class="table-wrap"><table><thead><tr><th>Idiom</th><th>Meaning</th><th>Best in</th></tr></thead><tbody id="it"></tbody></table></div>
      <p class="mute small" style="margin-top:8px">Idioms suit emails, articles and reviews. Use them sparingly — or not at all — in formal reports and essays.</p>
      <h2 id="grammar" style="margin-top:32px">A* grammar structures</h2>
      <div class="grid g2">${ZY.grammar.map(g => `<div class="vcard" style="padding:13px 15px"><b style="color:var(--accent)">${esc(g[0])}</b><div style="font-family:var(--serif);font-size:1rem;color:var(--text);margin-top:4px">${esc(g[1])}</div></div>`).join("")}</div>
      <h2 id="bytype" style="margin-top:32px">Phrases by writing type</h2>
      <div class="grid g3">${ORDER.map(id => `<a class="type-card" href="#/w/${id}/phrases"><div class="t-ico">${ic(TYPE_ICON[id])}</div><h3>${W[id].name}</h3><p>${W[id].phrases.reduce((n, g) => n + g.items.length, 0)} phrases · ${W[id].connectives.reduce((n, g) => n + g.items.length, 0)} connectives</p></a>`).join("")}</div>`;
    const drawI = (q = "") => { $("#it").innerHTML = ZY.idioms.filter(i => i.join(" ").toLowerCase().includes(q.toLowerCase())).map(i => `<tr><td class="word">${esc(i[0])}</td><td>${esc(i[1])}</td><td class="mute">${esc(i[2])}</td></tr>`).join(""); };
    drawI(); $("#iq").addEventListener("input", e => drawI(e.target.value));
    $$("[data-s]", view).forEach(a => a.addEventListener("click", e => { e.preventDefault(); $$("[data-s]", view).forEach(x => x.classList.remove("active")); a.classList.add("active"); const el = $(a.getAttribute("href")); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 120, behavior: "smooth" }); }));
  }

  /* ---------------- grammar & accuracy ---------------- */
  function pageGrammar(tab) {
    tab = tab || "errors";
    const TABS = [["errors", "Common errors"], ["confused", "Confused words"], ["punctuation", "Punctuation"], ["spelling", "Spelling"], ["structures", "A* structures"], ["quiz", "Grammar quiz"]];
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Grammar & accuracy</div><h1>Accuracy Toolkit</h1>
        <p>Language marks depend on accuracy as much as ambition. Learn the errors examiners see most often, then test yourself.</p></div>
      <nav class="tabs">${TABS.map(([k, l]) => `<a class="tab ${k === tab ? "active" : ""}" href="#/grammar/${k}">${l}</a>`).join("")}</nav><div id="gbody"></div>`;
    const b = $("#gbody");
    if (tab === "errors") {
      b.innerHTML = `<div class="toolbar"><input id="ef" placeholder="Filter errors…" style="flex:1;min-width:200px"></div>
        <div class="table-wrap"><table><thead><tr><th>Incorrect</th><th>Correct</th><th>Why</th></tr></thead><tbody id="et"></tbody></table></div>`;
      const d = (q = "") => $("#et").innerHTML = ZY.errors.filter(e => e.join(" ").toLowerCase().includes(q.toLowerCase())).map(e => `<tr><td class="bad" style="text-decoration:line-through;text-decoration-thickness:1px">${esc(e[0])}</td><td class="good">${esc(e[1])}</td><td class="muted">${esc(e[2])}</td></tr>`).join("");
      d(); $("#ef").addEventListener("input", e => d(e.target.value));
    } else if (tab === "confused") {
      b.innerHTML = `<div class="grid g2">${ZY.confused.map(c => `<div class="card" style="margin:0;padding:15px 17px"><b style="color:var(--accent);font-size:1.02rem">${esc(c[0])}</b><div class="muted" style="margin:4px 0">${esc(c[1])}</div><div style="font-family:var(--serif);font-style:italic">${esc(c[2])}</div></div>`).join("")}</div>`;
    } else if (tab === "punctuation") {
      b.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Mark</th><th>Use</th><th>Example</th></tr></thead><tbody>${ZY.punctuation.map(p => `<tr><td class="word">${esc(p[0])}</td><td>${esc(p[1])}</td><td class="ex">${esc(p[2])}</td></tr>`).join("")}</tbody></table></div>
        <div class="callout" style="margin-top:14px"><b>Teacher feedback from the samples:</b> “Use more advanced punctuation, such as colons and semicolons.” Aim for at least one accurate colon or semicolon in every formal piece.</div>`;
    } else if (tab === "spelling") {
      b.innerHTML = `<p class="muted">These words are misspelt in exam scripts every year. Read each one, cover it, write it, then check.</p>
        <div class="spell">${ZY.spelling.map(w => `<span>${esc(w)}</span>`).join("")}</div>
        <div class="card" style="margin-top:18px"><h3>${ic("target")} Spelling test</h3><p class="mute small">Listen-free version: a word is shown briefly, then hidden. Type it from memory.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="btn primary sm" id="sp-go">Show next word</button><span id="sp-word" style="font-size:1.3rem;font-weight:700;min-width:160px"></span></div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><input class="inp" id="sp-in" placeholder="Type the word…" style="flex:1;min-width:180px" disabled><button class="btn sm" id="sp-check" disabled>Check</button></div>
          <p id="sp-fb" class="small" style="margin-top:8px"></p><p class="mute small" id="sp-score"></p></div>`;
      let cur = "", sc = { r: 0, n: 0 }, order = shuffle(ZY.spelling), k = 0, hideT;
      $("#sp-go").onclick = () => {
        cur = order[k++ % order.length]; $("#sp-word").textContent = cur; $("#sp-in").value = ""; $("#sp-fb").textContent = "";
        $("#sp-in").disabled = true; $("#sp-check").disabled = true; clearTimeout(hideT);
        hideT = setTimeout(() => { $("#sp-word").textContent = "• • •"; $("#sp-in").disabled = false; $("#sp-check").disabled = false; $("#sp-in").focus(); }, 1600);
      };
      onLeave(() => clearTimeout(hideT));
      const check = () => { if (!cur) return; const ok = $("#sp-in").value.trim().toLowerCase() === cur; sc.n++; if (ok) sc.r++; $("#sp-fb").innerHTML = ok ? `<span class="good">Correct.</span>` : `<span class="bad">Not quite —</span> it's <b>${esc(cur)}</b>.`; $("#sp-word").textContent = cur; $("#sp-score").textContent = `Score: ${sc.r} / ${sc.n}`; $("#sp-check").disabled = true; };
      $("#sp-check").onclick = check; $("#sp-in").addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    } else if (tab === "structures") {
      b.innerHTML = `<div class="grid g2">${ZY.grammar.map(g => `<div class="vcard" style="padding:13px 15px"><b style="color:var(--accent)">${esc(g[0])}</b><div style="font-family:var(--serif);font-size:1rem;color:var(--text);margin-top:4px">${esc(g[1])}</div></div>`).join("")}</div>`;
    } else {
      let qs = shuffle(ZY.grammarQuiz), i = 0, sc = 0;
      const render = () => {
        if (i >= qs.length) {
          const best = Math.max(store.get("gq", 0), sc); store.set("gq", best);
          b.innerHTML = `<div class="card empty"><div class="metric" style="color:var(--accent)">${sc} / ${qs.length}</div><p>Quiz complete. Best score: ${best}/${qs.length}</p><button class="btn primary" id="gq-again">Try again</button></div>`;
          $("#gq-again").onclick = () => { qs = shuffle(ZY.grammarQuiz); i = 0; sc = 0; render(); }; return;
        }
        const [q, opts, ans, why] = qs[i];
        b.innerHTML = `<div class="card" style="max-width:720px">
          <div style="display:flex;justify-content:space-between"><span class="kicker">Question ${i + 1} of ${qs.length}</span><span class="mute small">Score ${sc}</span></div>
          <div class="progress" style="margin:10px 0 4px"><i style="width:${i / qs.length * 100}%"></i></div>
          <div class="quiz-q sent">${esc(q).replace("___", '<span class="gap">&nbsp;</span>')}</div>
          <div class="quiz-opts">${opts.map((o, k) => `<button class="quiz-opt" data-k="${k}">${String.fromCharCode(65 + k)}. ${esc(o)}</button>`).join("")}</div>
          <div id="gfb" style="margin-top:12px"></div></div>`;
        $$(".quiz-opt", b).forEach(btn => btn.onclick = () => {
          const ok = +btn.dataset.k === ans; if (ok) sc++;
          $$(".quiz-opt", b).forEach((x, k) => { x.disabled = true; if (k === ans) x.classList.add("right"); });
          if (!ok) btn.classList.add("wrong");
          $("#gfb").innerHTML = `${ok ? `<b class="good">Correct.</b>` : `<b class="bad">Not quite.</b>`} <span class="muted">${esc(why)}</span><div style="margin-top:10px"><button class="btn primary sm" id="gq-next">Next ${ic("arrow", "sm")}</button></div>`;
          $("#gq-next").onclick = () => { i++; render(); }; $("#gq-next").focus();
        });
      };
      render();
    }
  }

  /* ---------------- exam guide ---------------- */
  function pageExam() {
    const E = ZY.exam;
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Exam guide</div><h1>How the Writing Is Marked</h1>
        ${E.overview.map(p => `<p>${esc(p)}</p>`).join("")}</div>
      <h2>The three things examiners assess</h2>
      <div class="grid g3">${E.criteria.map(([n, d, tips]) => `<div class="card" style="margin:0"><h3>${ic("target")} ${esc(n)}</h3><p class="muted small">${esc(d)}</p><ul class="clean">${tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>`).join("")}</div>
      <div class="section-title"><h2>A 25-minute plan for one writing task</h2></div>
      <div class="steps">${E.timing.map(([t, d]) => `<div><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div>
      <div class="section-title"><h2>What each band looks like</h2></div>
      <div class="table-wrap"><table><tbody>${E.bands.map(([b, d]) => `<tr><td class="word">${esc(b)}</td><td>${esc(d)}</td></tr>`).join("")}</tbody></table></div>
      <div class="section-title"><h2>Why students lose marks</h2></div>
      <div class="card"><ul class="clean cross">${E.mistakes.map(m => `<li>${esc(m)}</li>`).join("")}</ul></div>
      <div class="section-title"><h2>Which voice for which task?</h2></div>
      <div class="table-wrap"><table><thead><tr><th>Writing</th><th>Voice</th><th>Starter</th><th>Ending should be…</th></tr></thead><tbody>
        ${ZY.voices.map((v, k) => `<tr><td class="word">${v[0]}</td><td>${v[1]}</td><td class="ex">${slots(v[2])}</td><td>${["warm", "memorable", "evaluative", "decisive", "practical"][k]}</td></tr>`).join("")}</tbody></table></div>
      <div class="callout warn" style="margin-top:18px"><b>Note:</b> this guide summarises general principles. Always check the current Cambridge syllabus and the instructions on your own question paper; the model answers on this site are practice examples, not official mark-scheme responses.</div>
      <div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap"><a class="btn primary" href="#/lab">${ic("edit", "sm")} Practise under timed conditions</a><a class="btn" href="#/grammar/quiz">${ic("target", "sm")} Take the grammar quiz</a></div>`;
  }

  /* ---------------- writing lab ---------------- */
  const FORMAL_LINKERS = ["furthermore", "moreover", "in addition", "additionally", "in conclusion", "consequently", "nevertheless", "nonetheless", "hence", "thus", "to conclude"];
  const WEAK = { "very": "try a stronger adjective (exceptional, crucial, exhausted)", "good": "excellent, beneficial, impressive, worthwhile", "nice": "pleasant, delightful, welcoming", "bad": "disappointing, detrimental, inadequate", "a lot of": "a considerable number of, numerous", "thing": "aspect, factor, feature, issue", "things": "aspects, factors, features", "i think": "I believe, In my view, I am convinced that", "big": "enormous, significant, substantial", "get": "obtain, gain, receive" };
  function analyse(type, text, limit) {
    const t = W[type], low = text.toLowerCase();
    const n = wordCount(text);
    const paras = text.trim() ? text.trim().split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
    const lines = text.trim().split("\n").map(l => l.trim()).filter(Boolean);
    const flags = [];
    const add = (lvl, msg) => flags.push([lvl, msg]);
    const [lo, hi] = limit;
    if (n === 0) return { n, paras, flags: [["warn", "Start writing to see live feedback."]], vocab: [], conns: [] };
    if (n < lo) add("warn", `Word count ${n} is below the ${lo}–${hi} range — develop your points further.`);
    else if (n > hi) add("err", `Word count ${n} is over the ${lo}–${hi} limit — cut repetition.`);
    else add("ok", `Word count ${n} is within ${lo}–${hi}.`);
    if (paras < 3) add("warn", `Only ${paras} paragraph${paras === 1 ? "" : "s"} — aim for at least 4 (separate them with a blank line).`); else add("ok", `${paras} paragraphs — good organisation.`);
    const contractions = (text.match(/\b\w+(n't|'re|'ve|'ll|'m|'d)\b|\b(it|that|what|there|he|she)'s\b/gi) || []).length;
    const formalHits = FORMAL_LINKERS.filter(f => new RegExp("\\b" + f + "\\b", "i").test(text));
    const excl = (text.match(/!/g) || []).length;
    if (type === "email") {
      if (!/^(hi|hey|hello|dear)\b/i.test(lines[0] || "")) add("err", "Start with a greeting such as “Hi Sam,” or “Dear Sam,”.");
      if (!/(love|best|regards|wishes|soon|care|friend|cheers|bye)\b/i.test(lines.slice(-3).join(" "))) add("warn", "Finish with a sign-off (Lots of love, / Best wishes, / Speak soon,) and your name.");
      if (formalHits.length) add("warn", `Formal linkers in an informal email: ${formalHits.join(", ")}. Try also, plus, what's more, anyway.`);
      if (contractions === 0) add("warn", "No contractions — use I'm, you'll, can't to sound natural.");
      if (!/\?/.test(text)) add("warn", "Ask your friend a question to keep them involved.");
    } else {
      if (["essay", "report"].includes(type) && contractions) add("err", `${contractions} contraction${contractions > 1 ? "s" : ""} found — write words in full in a formal ${t.name.toLowerCase()}.`);
      if (["essay", "report"].includes(type) && excl) add("warn", "Avoid exclamation marks in formal writing.");
      if (["article", "review", "report"].includes(type)) {
        const first = lines[0] || "";
        if (first.split(/\s+/).length > 12 || /[.]$/.test(first)) add("warn", `A ${t.name.toLowerCase()} needs a short title on the first line.`); else add("ok", "Title present.");
      }
      if (type === "report") {
        const heads = lines.filter(l => l.split(/\s+/).length <= 5 && !/[.!?,]$/.test(l)).length;
        if (heads < 3) add("warn", "Use clear headings (Introduction, Findings, Recommendations, Conclusion) on their own lines.");
        if (!/recommend|suggest|should|advisable/i.test(text)) add("err", "No recommendations found — reports must suggest improvements.");
      }
      if (type === "article" && !/\?/.test(text)) add("warn", "Try a rhetorical question to engage your reader.");
      if (type === "review" && !/recommend|verdict|worth/i.test(text)) add("warn", "Give a clear recommendation or verdict at the end.");
      if (type === "essay" && !/(in conclusion|ultimately|on balance|to conclude|overall|all things considered)/i.test(text)) add("warn", "Signal your conclusion (In conclusion, / Ultimately, / On balance,).");
    }
    const longS = sentences.filter(s => s.split(/\s+/).length > 40).length;
    if (longS) add("warn", `${longS} very long sentence${longS > 1 ? "s" : ""} (40+ words) — split for clarity.`);
    Object.entries(WEAK).forEach(([w, alt]) => {
      const c = (low.match(new RegExp("\\b" + w + "\\b", "g")) || []).length;
      if (c >= 2 || (["nice", "good", "bad", "a lot of", "thing", "things"].includes(w) && c >= 1)) add("warn", `“${w}” used ${c}× — upgrade: ${alt}.`);
    });
    const vre = termRegex(vocabFor(t)), cre = termRegex(connectivesFor(t).concat(type === "email" ? ["also", "plus", "anyway", "besides", "what's more", "though", "still"] : ["also", "for example", "therefore", "because"]));
    const vocab = Array.from(new Set((text.match(vre) || []).map(s => s.toLowerCase())));
    const connList = (text.match(cre) || []).map(s => s.toLowerCase());
    const conns = Array.from(new Set(connList));
    conns.forEach(c => { const k = connList.filter(x => x === c).length; if (k > 2) add("warn", `“${c}” used ${k} times — vary your connectives.`); });
    if (conns.length < 3) add("warn", `Only ${conns.length} connective${conns.length === 1 ? "" : "s"} detected — link ideas more clearly.`);
    if (vocab.length < 3) add("warn", "Few A* vocabulary items detected — check the Vocabulary tab for this writing type.");
    return { n, paras, flags, vocab, conns };
  }
  function pageLab(params) {
    let type = W[params.get("type")] ? params.get("type") : (store.get("lab:type", "email"));
    const pIdx = params.get("p"), sIdx = params.get("sample");
    let task = null;
    if (pIdx !== null && W[type].prompts && W[type].prompts[+pIdx]) task = W[type].prompts[+pIdx];
    else if (sIdx !== null && W[type].samples[+sIdx]) task = W[type].samples[+sIdx];
    let limit = store.get("lab:limit", [120, 160]);
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Writing Lab</div><h1>Timed Writing Practice</h1>
        <p>Pick a writing type and a prompt, start the timer and write. Feedback updates as you type and your draft is saved automatically in this browser.</p></div>
      <div class="toolbar">
        <div class="seg" id="lab-type">${ORDER.map(id => `<button data-t="${id}" class="${id === type ? "on" : ""}">${W[id].name}</button>`).join("")}</div>
        <select class="inp" id="lab-limit"><option value="120,160">120–160 words</option><option value="150,200">150–200 words</option></select>
        <button class="btn sm" id="lab-rand">${ic("shuffle", "sm")} Random prompt</button>
      </div>
      <div id="lab-task"></div>
      <div class="lab">
        <div>
          <div class="toolbar" style="margin-bottom:8px">
            <select class="inp" id="lab-intro" style="font-size:.8rem;padding:5px 8px"><option value="">Insert an introduction…</option></select>
            <select class="inp" id="lab-end" style="font-size:.8rem;padding:5px 8px"><option value="">Insert an ending…</option></select>
          </div>
          <textarea id="lab-text" spellcheck="true" placeholder="Start writing here…"></textarea>
          <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
            <button class="btn sm" id="lab-copy">${ic("copy", "sm")} Copy</button>
            <button class="btn sm" id="lab-dl">${ic("download", "sm")} Download .txt</button>
            <button class="btn sm danger" id="lab-clear">Clear draft</button>
          </div>
        </div>
        <aside>
          <div class="card" style="margin:0">
            <div class="kicker">Timer</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px"><div class="timer" id="lab-time">20:00</div>
              <select class="inp" id="lab-mins" style="padding:4px 6px;font-size:.8rem"><option>15</option><option selected>20</option><option>25</option><option>30</option></select></div>
            <div style="display:flex;gap:6px;margin-top:8px"><button class="btn sm primary" id="lab-start">${ic("play", "sm")} Start</button><button class="btn sm" id="lab-reset">${ic("reset", "sm")} Reset</button></div>
            <div class="meter"><span class="mute">Words</span><b id="lab-wc">0</b></div>
            <div class="progress"><i id="lab-bar"></i></div>
          </div>
          <div class="card"><div class="kicker">Live feedback</div><div id="lab-flags" style="margin-top:6px"></div></div>
          <div class="card"><div class="kicker">A* vocabulary used</div><div class="chips" id="lab-vocab" style="margin-top:8px"></div>
            <div class="kicker" style="margin-top:14px">Connectives used</div><div class="chips" id="lab-conns" style="margin-top:8px"></div></div>
        </aside>
      </div>`;
    $("#lab-limit").value = limit.join(",");
    const ta = $("#lab-text");
    const draftKey = () => "lab:draft:" + type;
    function setTask(tk) {
      task = tk;
      $("#lab-task").innerHTML = tk ? taskHTML(tk) : `<div class="task">No prompt selected — write freely or press <b>Random prompt</b>.</div>`;
    }
    function fillInserts() {
      $("#lab-intro").innerHTML = `<option value="">Insert an introduction…</option>` + W[type].intros.map((p, k) => `<option value="${k}">${esc(p.title)}</option>`).join("");
      $("#lab-end").innerHTML = `<option value="">Insert an ending…</option>` + W[type].endings.map((p, k) => `<option value="${k}">${esc(p.title)}</option>`).join("");
    }
    function update() {
      const a = analyse(type, ta.value, limit);
      $("#lab-wc").textContent = `${a.n} / ${limit[0]}–${limit[1]}`;
      $("#lab-bar").style.width = Math.min(100, a.n / limit[1] * 100) + "%";
      $("#lab-bar").style.background = a.n > limit[1] ? "var(--red)" : a.n >= limit[0] ? "var(--accent)" : "var(--amber)";
      $("#lab-flags").innerHTML = a.flags.map(([l, m]) => `<div class="flag ${l === "err" ? "err" : l === "warn" ? "warn" : ""}"><span class="dot"></span><span>${esc(m)}</span></div>`).join("");
      $("#lab-vocab").innerHTML = a.vocab.length ? a.vocab.map(v => `<span class="chip">${esc(v)}</span>`).join("") : `<span class="mute small">None yet</span>`;
      $("#lab-conns").innerHTML = a.conns.length ? a.conns.map(v => `<span class="chip">${esc(v)}</span>`).join("") : `<span class="mute small">None yet</span>`;
      store.set(draftKey(), ta.value);
    }
    function loadType(t) {
      type = t; store.set("lab:type", t);
      $$("#lab-type button").forEach(b => b.classList.toggle("on", b.dataset.t === t));
      ta.value = store.get(draftKey(), ""); fillInserts(); update();
    }
    $$("#lab-type button").forEach(b => b.onclick = () => { loadType(b.dataset.t); setTask(null); });
    $("#lab-limit").onchange = e => { limit = e.target.value.split(",").map(Number); store.set("lab:limit", limit); update(); };
    $("#lab-rand").onclick = () => { const ps = W[type].prompts || []; if (ps.length) setTask(ps[Math.floor(Math.random() * ps.length)]); };
    const insert = (txt) => { const s = ta.selectionStart, e = ta.selectionEnd; ta.value = ta.value.slice(0, s) + txt + ta.value.slice(e); ta.focus(); ta.selectionStart = ta.selectionEnd = s + txt.length; update(); };
    $("#lab-intro").onchange = e => { if (e.target.value !== "") insert(W[type].intros[+e.target.value].text + "\n\n"); e.target.value = ""; };
    $("#lab-end").onchange = e => { if (e.target.value !== "") insert("\n\n" + W[type].endings[+e.target.value].text); e.target.value = ""; };
    let deb; ta.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(update, 150); });
    $("#lab-copy").onclick = () => copy(ta.value);
    $("#lab-dl").onclick = () => download(`zyvar-${type}-${todayKey()}.txt`, (task ? "TASK: " + (task.task || task.q) + "\n\n" : "") + ta.value);
    $("#lab-clear").onclick = () => { if (confirm("Clear this draft?")) { ta.value = ""; update(); } };
    /* timer */
    let left = 20 * 60, running = false, tick = null;
    const showT = () => { const m = Math.floor(left / 60), s = left % 60; $("#lab-time").textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`; $("#lab-time").classList.toggle("low", left <= 120); };
    const stop = () => { running = false; clearInterval(tick); $("#lab-start").innerHTML = `${ic("play", "sm")} Start`; };
    $("#lab-start").onclick = () => {
      if (running) return stop();
      running = true; $("#lab-start").innerHTML = `${ic("pause", "sm")} Pause`; ta.focus();
      tick = setInterval(() => { left--; showT(); if (left <= 0) { stop(); left = 0; showT(); toast("Time's up — check your work"); } }, 1000);
    };
    $("#lab-reset").onclick = () => { stop(); left = +$("#lab-mins").value * 60; showT(); };
    $("#lab-mins").onchange = () => { if (!running) { left = +$("#lab-mins").value * 60; showT(); } };
    onLeave(() => clearInterval(tick));
    setTask(task); loadType(type);
  }

  /* ---------------- flashcards ---------------- */
  function pageFlashcards(params) {
    const cats = Array.from(new Set(POOL.map(c => c.cat.split(" · ")[0])));
    let mode = params.get("mode") || (params.get("cat") ? "cat:" + params.get("cat") : "daily");
    let deck = [], i = 0, quiz = "cards", qScore = { r: 0, n: 0 };
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Daily flashcards</div><h1>Learn New Words Daily</h1>
        <p>Every day you get 10 fresh words. Say the meaning out loud, flip the card, then mark it <b class="good">Know it</b> or <b style="color:var(--blue)">Still learning</b>. Use the quizzes to test recall and usage.</p></div>
      <div class="toolbar">
        <select id="fcmode">
          <option value="daily">Today's 10 words</option>
          <option value="learning">Still learning pile</option>
          <option value="saved">My saved words</option>
          <option value="known">Words I know (revision)</option>
          <option value="all">All words (shuffled)</option>
          <optgroup label="By category">${cats.map(c => `<option value="cat:${esc(c)}">${esc(c)}</option>`).join("")}</optgroup>
        </select>
        <div class="seg"><button class="on" data-q="cards">Cards</button><button data-q="meaning">Meaning quiz</button><button data-q="gap">Fill the gap</button></div>
        <button class="btn sm ghost" id="fcshuffle">${ic("shuffle", "sm")} Shuffle</button>
      </div>
      <div class="fc-wrap">
        <div id="fcstage"></div>
        <aside class="card" style="margin:0">
          <div class="kicker">Streak</div>
          <div class="metric" style="color:var(--amber);display:flex;gap:6px;align-items:center">${ic("flame", "lg")}<span id="fcstreak">0</span></div>
          <p class="mute small" style="margin:2px 0 14px">Finish today's 10 words to keep your streak.</p>
          <div class="kicker">Today</div>
          <div class="progress" style="margin:8px 0 4px"><i id="fctoday"></i></div>
          <p class="mute small" id="fctodaytxt"></p>
          <div class="kicker" style="margin-top:14px">Word bank</div>
          <p style="margin:6px 0 4px" class="small"><b class="good" id="fck">0</b> mastered · <b style="color:var(--blue)" id="fcl">0</b> learning · <span class="mute">${POOL.length} total</span></p>
          <div class="progress"><i id="fcall"></i></div>
          <p class="mute small" style="margin-top:14px">Shortcuts: <kbd>Space</kbd> flip · <kbd>←</kbd> <kbd>→</kbd> move · <kbd>K</kbd> know · <kbd>L</kbd> learning · <kbd>S</kbd> save</p>
          <button class="btn sm danger" id="fcreset" style="margin-top:6px">Reset progress</button>
        </aside>
      </div>`;
    if ($("#fcmode").querySelector(`option[value="${CSS.escape(mode)}"]`)) $("#fcmode").value = mode; else mode = "daily";
    function build() {
      const st = fcState();
      if (mode === "daily") deck = dailyDeck();
      else if (mode === "learning") deck = shuffle(POOL.filter(c => st.learning[c.w]));
      else if (mode === "known") deck = shuffle(POOL.filter(c => st.known[c.w]));
      else if (mode === "saved") deck = shuffle(saved().map(findWord).filter(Boolean));
      else if (mode === "all") deck = shuffle(POOL);
      else { const c = mode.slice(4); deck = shuffle(POOL.filter(x => x.cat.split(" · ")[0] === c)); }
      i = 0; qScore = { r: 0, n: 0 }; render();
    }
    function stats() {
      const st = fcState(), today = todayKey(), seen = (st.seenToday && st.seenToday[today]) || [];
      const daily = dailyDeck().map(c => c.w), done = daily.filter(w => seen.includes(w)).length;
      $("#fcstreak").textContent = (st.streak || 0) + (st.streak === 1 ? " day" : " days");
      $("#fctoday").style.width = (done / daily.length * 100) + "%";
      $("#fctodaytxt").textContent = done >= daily.length ? "Done for today — excellent work." : `${done} / ${daily.length} of today's words reviewed`;
      $("#fck").textContent = Object.keys(st.known).length; $("#fcl").textContent = Object.keys(st.learning).length;
      $("#fcall").style.width = (Object.keys(st.known).length / POOL.length * 100) + "%";
    }
    function mark(word, known) {
      const st = fcState(), today = todayKey();
      if (known) { st.known[word] = 1; delete st.learning[word]; } else { st.learning[word] = 1; delete st.known[word]; }
      const seen = (st.seenToday && st.seenToday[today]) || []; if (!seen.includes(word)) seen.push(word);
      st.seenToday = { [today]: seen };
      const daily = (st.daily && st.daily.date === today) ? st.daily.words : dailyDeck().map(c => c.w);
      if (daily.every(w => seen.includes(w)) && st.last !== today) {
        const y = new Date(); y.setDate(y.getDate() - 1);
        st.streak = st.last === todayKey(y) ? (st.streak || 0) + 1 : 1; st.last = today;
        store.set("fc", st); toast("Daily set complete — streak: " + st.streak);
      } else store.set("fc", st);
      stats();
    }
    const gapSentence = (c) => { if (!c.e) return null; const re = new RegExp(c.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"); return re.test(c.e) ? c.e.replace(re, "___") : null; };
    function render() {
      stats();
      const stage = $("#fcstage");
      if (!deck.length) { stage.innerHTML = `<div class="card empty">No cards here yet. ${mode === "learning" ? "Mark words as “Still learning” and they will appear here." : mode === "saved" ? "Star words in the Vocabulary Bank to build this deck." : mode === "known" ? "Mark words as “Know it” to build your revision pile." : ""}</div>`; return; }
      if (i >= deck.length) {
        stage.innerHTML = `<div class="card empty"><div class="metric" style="color:var(--accent)">${quiz !== "cards" ? qScore.r + " / " + qScore.n : "Complete"}</div><p>${quiz !== "cards" ? "Quiz complete." : "You have reached the end of this deck."}</p><button class="btn primary" id="again">Go again</button></div>`;
        $("#again").onclick = () => { deck = shuffle(deck); i = 0; qScore = { r: 0, n: 0 }; render(); }; return;
      }
      const c = deck[i], st = fcState();
      const status = st.known[c.w] ? `<span class="tag">Known</span>` : st.learning[c.w] ? `<span class="tag blue">Learning</span>` : "";
      const isSaved = saved().includes(c.w);
      if (quiz === "cards") {
        stage.innerHTML = `
          <div class="flashcard" id="card"><div class="fc-inner">
            <div class="fc-face"><span class="fc-cat tag plain">${esc(c.cat)}</span><span class="fc-idx">${i + 1} / ${deck.length}</span>
              <div class="fc-word">${esc(c.w)}</div><div class="fc-hint">What does it mean? Think, then click to flip.</div><div style="margin-top:10px">${status}</div></div>
            <div class="fc-face fc-back"><span class="fc-cat tag">${esc(c.w)}</span><span class="fc-idx">${i + 1} / ${deck.length}</span>
              <div class="fc-meaning">${esc(c.m)}</div>${c.e ? `<div class="fc-ex">“${esc(c.e)}”</div>` : ""}</div>
          </div></div>
          <div class="progress" style="margin-top:12px"><i style="width:${(i / deck.length) * 100}%"></i></div>
          <div class="fc-actions">
            <button class="btn" id="prev">${ic("back", "sm")} Prev</button>
            <button class="btn" id="save">${ic("star", "sm")} ${isSaved ? "Saved" : "Save"}</button>
            <button class="btn" id="learn" style="color:var(--blue)">Still learning</button>
            <button class="btn primary" id="know">Know it</button>
            <button class="btn" id="next">Next ${ic("arrow", "sm")}</button>
          </div>`;
        $("#card").onclick = () => $("#card").classList.toggle("flipped");
        $("#prev").onclick = () => { if (i > 0) { i--; render(); } };
        $("#next").onclick = () => { i++; render(); };
        $("#know").onclick = () => { mark(c.w, true); i++; render(); };
        $("#learn").onclick = () => { mark(c.w, false); i++; render(); };
        $("#save").onclick = () => { toggleSave(c.w); render(); };
      } else {
        const gap = quiz === "gap" ? gapSentence(c) : null;
        const useGap = quiz === "gap" && gap;
        const others = shuffle(POOL.filter(x => x.w !== c.w && x.m !== c.m && (!useGap || x.cat.split(" · ")[0] === c.cat.split(" · ")[0] || true))).slice(0, 3);
        const opts = shuffle([c].concat(others));
        stage.innerHTML = `<div class="card" style="margin:0">
          <div style="display:flex;justify-content:space-between;align-items:center"><span class="tag plain">${esc(c.cat)}</span><span class="mute small">${i + 1} / ${deck.length} · score ${qScore.r}/${qScore.n}</span></div>
          ${useGap ? `<div class="quiz-q sent">${esc(gap).replace("___", '<span class="gap">&nbsp;</span>')}</div><p class="mute small" style="text-align:center;margin-top:-6px">Choose the word or phrase that completes the sentence</p>`
            : `<div class="quiz-q">${esc(c.w)}</div><p class="mute small" style="text-align:center;margin-top:-8px">${quiz === "gap" ? "No example sentence for this word — choose its meaning" : "Choose the correct meaning"}</p>`}
          <div class="quiz-opts">${opts.map((o, k) => `<button class="quiz-opt" data-k="${k}">${String.fromCharCode(65 + k)}. ${esc(useGap ? o.w : o.m)}</button>`).join("")}</div>
          <div id="qfb" style="margin-top:12px"></div></div>`;
        $$(".quiz-opt").forEach(b => b.onclick = () => {
          const right = opts[+b.dataset.k].w === c.w;
          qScore.n++; if (right) qScore.r++;
          $$(".quiz-opt").forEach((x, k) => { x.disabled = true; if (opts[k].w === c.w) x.classList.add("right"); });
          if (!right) b.classList.add("wrong");
          mark(c.w, right);
          $("#qfb").innerHTML = `${right ? `<b class="good">Correct.</b>` : `<b class="bad">Not quite.</b> Added to your “still learning” pile.`} <span class="muted"><b>${esc(c.w)}</b> — ${esc(c.m)}</span><div style="margin-top:10px"><button class="btn primary sm" id="qnext">Next ${ic("arrow", "sm")}</button></div>`;
          $("#qnext").onclick = () => { i++; render(); }; $("#qnext").focus();
        });
      }
    }
    $("#fcmode").onchange = e => { mode = e.target.value; build(); };
    $("#fcshuffle").onclick = () => { deck = shuffle(deck); i = 0; render(); };
    $$(".seg [data-q]").forEach(b => b.onclick = () => { quiz = b.dataset.q; qScore = { r: 0, n: 0 }; $$(".seg [data-q]").forEach(x => x.classList.toggle("on", x === b)); render(); });
    $("#fcreset").onclick = () => { if (confirm("Reset all flashcard progress and your streak?")) { store.set("fc", { known: {}, learning: {}, streak: 0, last: "", seenToday: {} }); build(); toast("Progress reset"); } };
    const keys = (e) => {
      if (e.target.matches("input, select, textarea") || quiz !== "cards") return;
      const card = $("#card");
      if (e.code === "Space") { e.preventDefault(); if (card) card.classList.toggle("flipped"); }
      else if (e.key === "ArrowRight") $("#next") && $("#next").click();
      else if (e.key === "ArrowLeft") $("#prev") && $("#prev").click();
      else if (e.key.toLowerCase() === "k") $("#know") && $("#know").click();
      else if (e.key.toLowerCase() === "l") $("#learn") && $("#learn").click();
      else if (e.key.toLowerCase() === "s") $("#save") && $("#save").click();
    };
    document.addEventListener("keydown", keys); onLeave(() => document.removeEventListener("keydown", keys));
    build();
  }

  /* ---------------- reading ---------------- */
  function pageReadingList() {
    const scores = store.get("reading", {});
    view.innerHTML = `
      <div class="page-head"><div class="kicker">Reading</div><h1>Reading Exercises</h1>
        <p>Practise the skills tested in the 0510 reading paper: finding detail, inference, vocabulary in context and the writer's attitude. Read the passage, answer the questions, then check your score.</p></div>
      <div class="grid g2">${ZY.reading.map((r, n) => {
        const s = scores[r.id], total = r.questions.reduce((a, q) => a + (q.marks || 1), 0);
        return `<a class="type-card" href="#/reading/${r.id}">
          <div class="kicker">Exercise ${n + 1}</div><h3 style="margin-top:6px">${esc(r.title)}</h3>
          <p>${esc(r.paragraphs[0].slice(0, 140))}…</p>
          <div class="t-foot"><span class="tag">${r.questions.length} questions · ${total} marks</span><span class="tag plain">${ic("clock", "sm")} ${r.time}</span><span class="tag plain">${esc(r.level)}</span>${s !== undefined ? `<span class="tag amber">Best: ${s}/${total}</span>` : ""}</div>
          <div class="t-foot">${r.skills.map(k => `<span class="mute small">${esc(k)}</span>`).join('<span class="mute small">·</span>')}</div></a>`; }).join("")}</div>
      <div class="callout" style="margin-top:20px"><b>Exam technique:</b> read the questions first, underline key words, then scan the passage. Answers usually appear in the same order as the questions. Short answers rarely need full sentences.</div>`;
  }
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9% ]/g, " ").replace(/\s+/g, " ").trim();
  function pageReading(id) {
    const r = ZY.reading.find(x => x.id === id); if (!r) return pageNotFound();
    const total = r.questions.reduce((a, q) => a + (q.marks || 1), 0);
    view.innerHTML = `
      <div class="page-head"><a href="#/reading" class="back">${ic("back", "sm")} All exercises</a><h1 style="margin-top:8px">${esc(r.title)}</h1>
        <div class="meta"><span class="tag">${r.questions.length} questions · ${total} marks</span><span class="tag plain">${r.time}</span><span class="tag plain">${esc(r.level)}</span></div></div>
      <div class="read-wrap">
        <div class="passage"><h4>${esc(r.title)}</h4>${r.paragraphs.map((p, n) => `<p><span class="pn">${n + 1}</span>${esc(p)}</p>`).join("")}</div>
        <div class="card" style="margin:0"><h3>Questions</h3>
          <form id="rq" autocomplete="off">${r.questions.map((q, n) => {
            const mk = q.marks || 1; let input;
            if (q.type === "mcq") input = q.options.map((o, k) => `<label class="opt"><input type="radio" name="q${n}" value="${k}"> <span>${String.fromCharCode(65 + k)}. ${esc(o)}</span></label>`).join("");
            else if (q.type === "tf") input = ["True", "False", "Not Given"].map(o => `<label class="opt" style="display:inline-flex"><input type="radio" name="q${n}" value="${o}"> <span>${o}</span></label>`).join("");
            else input = `<input type="text" name="q${n}" placeholder="Your answer…">`;
            return `<div class="q" data-n="${n}"><div class="q-text"><span class="qn">${n + 1}.</span>${q.type === "tf" ? "True, False or Not Given? " : ""}${esc(q.q)} <span class="mk">[${mk}]</span></div>${input}<div class="fb"></div></div>`;
          }).join("")}</form>
          <div class="score-box"><button class="btn primary" id="check">Check answers</button><button class="btn ghost" id="reset">Reset</button><span class="sc" id="score"></span></div>
        </div></div>`;
    $("#check").onclick = () => {
      let got = 0;
      r.questions.forEach((q, n) => {
        const box = $(`.q[data-n="${n}"]`), fb = $(".fb", box), mk = q.marks || 1;
        let pts = 0, msg;
        if (q.type === "mcq") { const v = $(`input[name="q${n}"]:checked`, box); pts = v && +v.value === q.answer ? 1 : 0; msg = `Answer: <b>${String.fromCharCode(65 + q.answer)}. ${esc(q.options[q.answer])}</b> — ${esc(q.explain)}`; }
        else if (q.type === "tf") { const v = $(`input[name="q${n}"]:checked`, box); pts = v && v.value === q.answer ? 1 : 0; msg = `Answer: <b>${q.answer}</b> — ${esc(q.explain)}`; }
        else {
          const v = norm($(`input[name="q${n}"]`, box).value), used = new Set();
          q.accept.forEach(group => { const hit = group.find(a => v.includes(norm(a)) && !used.has(norm(a))); if (hit) { pts++; used.add(norm(hit)); } });
          pts = Math.min(pts, mk);
          msg = `Model answer: <b>${esc(q.answer)}</b>${mk > 1 ? ` <span class="mute">(${pts}/${mk})</span>` : ""}`;
        }
        got += pts;
        box.classList.add("done"); box.classList.toggle("ok", pts === mk); box.classList.toggle("no", pts < mk);
        fb.innerHTML = msg;
      });
      $("#score").textContent = `${got} / ${total}`;
      const best = store.get("reading", {}); if (best[r.id] === undefined || got > best[r.id]) { best[r.id] = got; store.set("reading", best); }
      toast(got === total ? "Perfect score" : `You scored ${got}/${total}`);
    };
    $("#reset").onclick = () => { $("#rq").reset(); $$(".q").forEach(q => q.classList.remove("done", "ok", "no")); $("#score").textContent = ""; };
  }

  function pageNotFound() { view.innerHTML = `<div class="empty"><h2>Page not found</h2><p><a href="#/">Back to home</a></p></div>`; }

  /* ---------------- router ---------------- */
  function route() {
    cleanups.forEach(f => { try { f(); } catch (e) { /* ignore */ } }); cleanups = [];
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    const params = new URLSearchParams(qs || "");
    const parts = path.split("/").filter(Boolean);
    let crumb = "Home", active = "#/";
    if (!parts.length) pageHome();
    else if (parts[0] === "w") { pageWriting(parts[1], parts[2], parts[3]); crumb = (W[parts[1]] || {}).name || ""; active = "#/w/" + parts[1]; }
    else if (parts[0] === "vocab") { pageVocab(params); crumb = "Vocabulary bank"; active = "#/vocab"; }
    else if (parts[0] === "phrases") { pagePhrases(); crumb = "Phrases & connectives"; active = "#/phrases"; }
    else if (parts[0] === "grammar") { pageGrammar(parts[1]); crumb = "Grammar & accuracy"; active = "#/grammar"; }
    else if (parts[0] === "exam") { pageExam(); crumb = "Exam guide"; active = "#/exam"; }
    else if (parts[0] === "lab") { pageLab(params); crumb = "Writing Lab"; active = "#/lab"; }
    else if (parts[0] === "flashcards") { pageFlashcards(params); crumb = "Flashcards"; active = "#/flashcards"; }
    else if (parts[0] === "reading") { parts[1] ? pageReading(parts[1]) : pageReadingList(); crumb = "Reading"; active = "#/reading"; }
    else pageNotFound();
    $("#crumb").innerHTML = `Zyvar-English / <b>${esc(crumb)}</b>`;
    $$(".nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === active));
    document.title = (crumb === "Home" ? "" : crumb + " · ") + "Zyvar-English";
    closeMenu();
    if (!(parts[0] === "w" && parts[3] !== undefined)) window.scrollTo(0, 0);
  }

  /* ---------------- shell ---------------- */
  function closeMenu() { $(".sidebar").classList.remove("open"); $(".overlay").classList.remove("open"); }
  function buildShell() {
    $("#nav").innerHTML = `
      <div class="nav-label">Start</div>
      <a href="#/">${ic("home")}Home</a>
      <a href="#/exam">${ic("award")}Exam guide</a>
      <div class="nav-label">Writing</div>
      ${ORDER.map(id => `<a href="#/w/${id}">${ic(TYPE_ICON[id])}${W[id].name}<span class="pill">${W[id].samples.length}</span></a>`).join("")}
      <a href="#/lab">${ic("edit")}Writing Lab<span class="pill">new</span></a>
      <div class="nav-label">Language</div>
      <a href="#/vocab">${ic("library")}Vocabulary bank</a>
      <a href="#/phrases">${ic("link")}Phrases & connectives</a>
      <a href="#/grammar">${ic("type")}Grammar & accuracy</a>
      <div class="nav-label">Practice</div>
      <a href="#/flashcards">${ic("cards")}Flashcards<span class="pill">daily</span></a>
      <a href="#/reading">${ic("book")}Reading<span class="pill">${ZY.reading.length}</span></a>`;
    $(".theme-pick").innerHTML = THEMES.map(([k, l, i]) => `<button data-t="${k}" title="${l} theme">${ic(i, "sm")}${l}</button>`).join("");
    $$(".theme-pick button").forEach(b => b.onclick = () => applyTheme(b.dataset.t));
    $(".menu-btn").innerHTML = ic("menu"); $(".s-ico").innerHTML = ic("search", "sm");
  }
  document.addEventListener("click", e => {
    const c = e.target.closest("[data-copy]"); if (c) { e.preventDefault(); copy(c.getAttribute("data-copy")); return; }
    const s = e.target.closest("[data-star]");
    if (s) { e.preventDefault(); e.stopPropagation(); const on = toggleSave(s.getAttribute("data-star")); $$(`[data-star="${CSS.escape(s.getAttribute("data-star"))}"]`).forEach(x => x.classList.toggle("on", on)); view.dispatchEvent(new Event("zy:star")); }
  });
  $(".menu-btn").addEventListener("click", () => { $(".sidebar").classList.add("open"); $(".overlay").classList.add("open"); });
  $(".overlay").addEventListener("click", closeMenu);
  buildShell(); applyTheme(store.get("theme", "forest")); setupSearch();
  window.addEventListener("hashchange", route);
  route();
})();

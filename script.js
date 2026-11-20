/*
 * DRINKLAB – VANLEG JAVASCRIPT
 *
 * Les i denne rekkjefølgja:
 *  1. Data og språk              5. Ingrediensbibliotek og artiklar
 *  2. Små hjelpefunksjonar       6. Om-sida
 *  3. Navigasjon og framside     7. Knappar, søk og språkval
 *  4. Drikk, næring og animasjon 8. Oppstart
 *
 * Ingen backend: alt skjer i nettlesaren. Ingen npm, fetch eller byggjesteg.
 * Data og språk ligg i data.js. Same 3D-motor som før ligg i animation.js.
 */

(() => {
  'use strict';

  // ── 1. DATA OG SPRÅK ──────────────────────────────────────────────
  const drinks = window.DRINKLAB_DRINKS;
  const ingredients = window.DRINKLAB_INGREDIENTS;
  const nynorsk = window.DRINKLAB_NN;
  const drinkById = new Map(drinks.map(drink => [drink.id, drink]));
  const ingredientById = new Map(ingredients.map(ingredient => [ingredient.id, ingredient]));
  const translations = new Map(Object.entries(nynorsk));

  // Omsetjingar frå fagtekstane blir også brukte i animasjonen og kjeldelenkjene.
  for (const ingredient of ingredients) {
    const nn = ingredient.nn;
    for (const field of ['name', 'category', 'symbol', 'reviewed']) {
      if (ingredient[field] && nn[field]) translations.set(ingredient[field], nn[field]);
    }
    ingredient.sources.forEach((source, index) => {
      if (nn.sources[index]) translations.set(source.name, nn.sources[index].name);
    });
    translations.set(`${ingredient.what} ${ingredient.body}`, `${nn.what} ${nn.body}`);
  }

  let language = 'en';
  try {
    if (localStorage.getItem('drinklab-language') === 'nn') language = 'nn';
  } catch { /* Nettlesarar som sperrar lokal lagring kan framleis byte språk. */ }

  const state = {
    path: '',
    page: 'home',
    drink: null,
    homeCategory: 'All drinks',
    library: { query: '', category: 'All ingredients', focus: 'unfamiliar' },
    playback: { time: 0, playing: false, speed: 1 },
    started: false,
    activeChapter: -1,
    glass: null,
    menuOpen: false,
  };

  function t(english, values = {}) {
    let text = language === 'nn' ? (translations.get(english) ?? english) : english;
    if (language === 'nn' && !translations.has(english) && /^\d+(\.\d+)? (g|mg|µg|ml)$/.test(english)) {
      const [quantity, quantityUnit] = english.split(' ');
      text = `${formatNumber(Number(quantity))} ${quantityUnit}`;
    }
    return String(text).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
  }

  function guide(id) {
    const original = ingredientById.get(id);
    return language === 'nn' ? { ...original, ...original.nn } : original;
  }

  // ── 2. SMÅ HJELPEFUNKSJONAR ───────────────────────────────────────
  const page = document.getElementById('page');
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
  const text = (english, values) => escapeHtml(t(english, values));
  const imagePath = drink => `bilete/${drink.image.replace(/^\//, '')}`;
  const unit = drink => drink.sizeUnit || 'ml';
  const drinkName = drink => t(drink.name);
  const clock = seconds => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  const normalise = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const guideIds = drink => [...drink.ingredients, ...drink.contexts.map(context => context.id)];
  const contextFor = (drink, id) => drink?.contexts.find(context => context.id === id);

  // Lokale SVG-ikon frå dei same Lucide-ikona som før. Ingen ikon-teneste.
  const ICONS = {
    "ArrowLeft": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-arrow-left\"><path d=\"m12 19-7-7 7-7\"></path><path d=\"M19 12H5\"></path></svg>",
    "ArrowUpRight": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-arrow-up-right\"><path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path></svg>",
    "ArrowRight": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-arrow-right\"><path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path></svg>",
    "FlaskConical": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-flask-conical\"><path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"></path><path d=\"M6.453 15h11.094\"></path><path d=\"M8.5 2h7\"></path></svg>",
    "Menu": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\"><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line></svg>",
    "X": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-x\"><path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path></svg>",
    "Atom": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-atom\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z\"></path><path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z\"></path></svg>",
    "BookOpen": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-book-open\"><path d=\"M12 7v14\"></path><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"></path></svg>",
    "Search": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-search\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><path d=\"m21 21-4.3-4.3\"></path></svg>",
    "Info": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-info\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 16v-4\"></path><path d=\"M12 8h.01\"></path></svg>",
    "Plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-plus\"><path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path></svg>",
    "Minus": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-minus\"><path d=\"M5 12h14\"></path></svg>",
    "Check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-check\"><path d=\"M20 6 9 17l-5-5\"></path></svg>",
    "Pause": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-pause\"><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"></rect><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"></rect></svg>",
    "Play": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-play\"><polygon points=\"6 3 20 12 6 21 6 3\"></polygon></svg>",
    "RotateCcw": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-rotate-ccw\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg>",
    "SkipBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-skip-back\"><polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" x2=\"5\" y1=\"19\" y2=\"5\"></line></svg>",
    "SkipForward": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-skip-forward\"><polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" x2=\"19\" y1=\"5\" y2=\"19\"></line></svg>",
    "Layers": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-layers\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"></path><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"></path><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"></path></svg>",
    "Blend": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-blend\"><circle cx=\"9\" cy=\"9\" r=\"7\"></circle><circle cx=\"15\" cy=\"15\" r=\"7\"></circle></svg>",
    "Sparkles": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sparkles\"><path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"></path><path d=\"M20 3v4\"></path><path d=\"M22 5h-4\"></path><path d=\"M4 17v2\"></path><path d=\"M5 18H3\"></path></svg>"
};
  function icon(name, size = 16) {
    return (ICONS[name] || '').replace(/(width|height)="24"/g, `$1="${size}"`);
  }

  function link(path, label, className = '') {
    return `<a href="#${escapeHtml(path)}" class="${escapeHtml(className)}">${label}</a>`;
  }

  function externalLink(url, label) {
    const safeUrl = url.startsWith('https://') ? url : '#';
    return `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${icon('ArrowUpRight', 14)}</a>`;
  }

  function caffeineLabel(drink) {
    return drink.caffeine === null ? t('Present') : `${drink.approximate ? '≈ ' : ''}${formatNumber(drink.caffeine)} mg`;
  }

  function formatNumber(value, digits = 3) {
    return new Intl.NumberFormat(language === 'nn' ? 'nn-NO' : 'en-GB', { maximumFractionDigits: digits }).format(value);
  }

  function formatAmount(amount, nutrientUnit) {
    if (amount === null) return t('Not available');
    const value = typeof amount === 'number' ? { value: amount } : amount;
    const digits = nutrientUnit === 'kJ' ? 0 : nutrientUnit === 'kcal' ? 1 : 3;
    return `${value.lessThan ? '< ' : ''}${value.approximate ? '≈ ' : ''}${formatNumber(value.value, digits)} ${nutrientUnit}`;
  }

  function route() {
    const hash = location.hash.slice(1);
    return hash.startsWith('/') ? hash.replace(/\/$/, '') || '/' : '/';
  }

  function chemistryNote(parent) {
    return t('Explore compounds typically found in {parent}. These are part of the ingredient’s chemistry, not separately added recipe ingredients. Their amounts and presence after processing have not been measured for this product here.', { parent: parent.toLowerCase() });
  }

  function tabs(drink, selected) {
    return `<nav class="drink-tabs" aria-label="${text('{drink} pages', { drink: drinkName(drink) })}">
      ${link(`/drinks/${drink.id}`, `${icon('Layers', 15)} ${text('Layer-by-layer experience')}`, selected === 'experience' ? 'selected' : '')}
      ${link(`/drinks/${drink.id}/ingredients`, `${icon('BookOpen', 15)} ${text('This drink’s ingredients')} <span>${guideIds(drink).length}</span>`, selected === 'ingredients' ? 'selected' : '')}
    </nav>`;
  }

  // ── 3. NAVIGASJON OG FRAMSIDE ─────────────────────────────────────
  function render(preservePosition = false) {
    const scrollY = window.scrollY;
    const nextPath = route();
    const changedPage = nextPath !== state.path;
    if (state.glass) { state.glass.destroy(); state.glass = null; }

    const match = nextPath.match(/^\/drinks\/([^/]+)(?:\/(ingredients)(?:\/([^/]+))?)?$/);
    const selectedDrink = drinkById.get(match?.[1]);
    const generalId = nextPath.match(/^\/ingredients\/([^/]+)$/)?.[1];
    const ingredientId = match?.[3] || generalId;
    const selectedIngredient = ingredientById.get(ingredientId);
    const validScope = !match?.[3] || (selectedDrink && guideIds(selectedDrink).includes(match[3]));

    if (changedPage) {
      state.homeCategory = 'All drinks';
      state.library = { query: '', category: 'All ingredients', focus: selectedDrink ? 'all' : 'unfamiliar' };
      if (state.drink?.id !== selectedDrink?.id || state.page !== 'drink') {
        state.playback.time = 0;
        state.playback.playing = false;
        state.playback.speed = 1;
        state.started = false;
      }
    }
    state.path = nextPath;
    state.drink = selectedDrink || null;
    state.activeChapter = -1;
    let title;

    if (nextPath === '/') {
      state.page = 'home'; title = t('Choose your drink'); page.innerHTML = homePage();
    } else if (selectedDrink && validScope && match?.[2] && !match[3]) {
      state.page = 'library'; title = drinkName(selectedDrink); page.innerHTML = libraryPage(selectedDrink);
    } else if (selectedDrink && validScope && match?.[3] && selectedIngredient) {
      state.page = 'guide'; title = guide(ingredientId).name; page.innerHTML = ingredientPage(ingredientId, selectedDrink);
    } else if (selectedDrink && !match?.[2]) {
      state.page = 'drink'; title = drinkName(selectedDrink); page.innerHTML = drinkPage(selectedDrink);
      mountGlass(selectedDrink);
      updatePlayer(true);
    } else if (nextPath === '/ingredients') {
      state.page = 'library'; title = t('Ingredient library'); page.innerHTML = libraryPage();
    } else if (generalId && selectedIngredient) {
      state.page = 'guide'; title = guide(generalId).name; page.innerHTML = ingredientPage(generalId);
    } else if (nextPath === '/about') {
      state.page = 'about'; title = t('About the lab'); page.innerHTML = aboutPage();
    } else {
      state.page = 'missing'; title = t('That page isn’t in the lab.');
      page.innerHTML = `<div class="page-width page-intro"><h1>${escapeHtml(title)}</h1>${link('/', `${text('Choose a drink')} ${icon('ArrowRight')}`, 'text-link')}</div>`;
    }

    if (state.page !== 'drink') state.playback.playing = false;
    updateShell();
    document.title = `${title} — DrinkLab`;
    const heading = page.querySelector('h1');
    heading?.setAttribute('tabindex', '-1');
    if (preservePosition) window.scrollTo(0, scrollY);
    else { window.scrollTo(0, 0); heading?.focus({ preventScroll: true }); }
  }

  function updateShell() {
    document.documentElement.lang = language;
    document.getElementById('language').value = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-label]').forEach(element => {
      element.setAttribute('aria-label', t(element.dataset.i18nLabel));
    });
    document.querySelectorAll('[data-icon]').forEach(element => {
      element.innerHTML = icon(element.dataset.icon, element.closest('.brand') ? 21 : 19);
    });
    document.querySelectorAll('[data-nav]').forEach(element => {
      const path = element.dataset.nav;
      element.classList.toggle('selected', path === '/' ? state.path === '/' : state.path.startsWith(path));
    });
    document.getElementById('mobile-menu').hidden = !state.menuOpen;
    const menuButton = document.querySelector('[data-action="menu"]');
    menuButton.setAttribute('aria-expanded', String(state.menuOpen));
    menuButton.setAttribute('aria-label', t(state.menuOpen ? 'Close menu' : 'Open menu'));
    menuButton.innerHTML = icon(state.menuOpen ? 'X' : 'Menu', 20);
  }

  function homePage() {
    const categories = ['All drinks', ...new Set(drinks.map(drink => drink.category))];
    return `<div class="page-width collection-page">
      <div class="collection-intro">
        <div class="eyebrow blue"><span class="live-dot"></span>${text('AN EVERYDAY DRINK. A DIFFERENT PERSPECTIVE.')}</div>
        <h1>${text('What’s in')}<br><span>${text('your glass?')}</span></h1>
        <p>${text('From the first ingredient to the final mixture.')}<br>${text('Explore familiar drinks, layer by layer, then look deeper at the evidence.')}</p>
      </div>
      <div class="collection-bar"><span>${text('CHOOSE YOUR EXPERIMENT')}</span><span>${drinks.length} ${text('DRINKS')} · ${categories.length - 1} ${text('CATEGORIES')}</span></div>
      <div class="category-tabs drink-filters" aria-label="${text('Drink categories')}">
        ${categories.map(category => `<button data-action="drink-category" data-category="${escapeHtml(category)}" aria-pressed="${state.homeCategory === category}" class="${state.homeCategory === category ? 'selected' : ''}">${text(category)}</button>`).join('')}
      </div>
      <div class="drink-grid" id="drink-grid">${homeCards()}</div>
      <div class="library-invitation"><span class="invitation-icon">${icon('Atom', 28)}</span><div>
        <h2>${text('One drink’s ingredients. Or the whole library.')}</h2>
        <p>${text('Choose a drink for its own ingredient collection. The separate library brings every guide together, with benefits, downsides and source notes.')}</p>
      </div>${link('/ingredients', `${text('Explore the full library')} ${icon('ArrowUpRight')}`, 'text-link')}</div>
    </div>`;
  }

  function homeCards() {
    return drinks.filter(drink => state.homeCategory === 'All drinks' || drink.category === state.homeCategory).map(drink => {
      const caption = drink.preparation ? t('DILUTED {ratio}', { ratio: drink.preparation.ratio }) : drink.approximate ? t('REPRESENTATIVE BREW') : ['orange-juice', 'sparkling-water'].includes(drink.id) ? t('GENERIC COMPOSITION') : t('LABEL EXPLORATION');
      const discoveries = drink.discoveries.slice(0, 2).map(id => guide(id).name).join(' · ');
      return `<a class="drink-card" href="#/drinks/${drink.id}" style="--drink-accent:${drink.accent};--drink-tint:${drink.tint}">
        <div class="drink-card-art"><span class="card-number">${text(drink.category).toUpperCase()}</span><span class="card-size">${drink.size} ${unit(drink)}${drink.preparation ? ` ${text('PREPARED')}` : ''}</span>
          <div class="card-orbit"></div><img src="${imagePath(drink)}" alt="${text('{drink} product picture', { drink: drinkName(drink) })}" loading="lazy">
          <span class="card-art-caption">${text(drink.carbonated ? 'CARBONATED' : 'STILL')} · ${escapeHtml(caption)}</span>
        </div>
        <div class="drink-card-copy"><h2>${escapeHtml(drinkName(drink))}</h2><p>${text(drink.description)}</p>
          ${discoveries ? `<div class="card-discover"><strong>${text('Look closer:')} </strong>${escapeHtml(discoveries)}</div>` : ''}
          <div class="card-stats"><div><strong>${escapeHtml(caffeineLabel(drink))}</strong><span>${text(drink.approximate ? 'Typical caffeine / serving' : 'Caffeine / serving')}</span></div><div><strong>${text(drink.sugar)}</strong><span>${text('Sugars / serving')}</span></div></div>
          <div class="card-action">${text('Explore this drink')} ${icon('ArrowUpRight', 19)}</div>
        </div>
      </a>`;
    }).join('');
  }

  // ── 4. DRIKK, NÆRING OG ANIMASJON ─────────────────────────────────
  function drinkPage(drink) {
    const first = drink.recipeDiscoveries[0];
    const stages = drink.stages;
    return `<div class="experience-page"><div class="page-width">
      ${link('/', `${icon('ArrowLeft', 15)} ${text('Choose another drink')}`, 'back-link')}
      <div class="experience-heading"><div><div class="eyebrow blue">${text(drink.category).toUpperCase()} · ${text('INSIDE A {size} {unit} SERVING', { size: drink.size, unit: unit(drink) })}</div><h1>${escapeHtml(drinkName(drink))}<span>.</span></h1></div><p>${text('Build the layers.')}<br> ${text('Then watch them become a drink.')}</p></div>
      ${tabs(drink, 'experience')}
      ${drink.preparation ? `<div class="preparation-note">${icon('Info', 18)}<p><strong>${text('A prepared {size} ml glass · dilute {ratio}.', { size: drink.size, ratio: drink.preparation.ratio })}</strong><br>${text('{concentrate} ml concentrate + {water} ml water. The picture shows the concentrate bottle; the animation and nutrition describe one diluted glass.', { concentrate: drink.preparation.concentrateMl, water: drink.preparation.waterMl })}</p></div>` : ''}
      ${first ? `<div class="discovery-start"><div><strong>${text('Want something less familiar?')}</strong><p>${text('Jump straight to a named ingredient, then explore its explanation below.')}</p></div><button data-action="show-ingredient" data-id="${first}">${icon('Play', 14)} ${text('Start with {ingredient}', { ingredient: guide(first).name })}</button></div>` : ''}
      <div class="lab">
        <div class="lab-top"><div class="drink-identity"><img src="${imagePath(drink)}" alt=""><div><strong>${escapeHtml(drinkName(drink))}</strong><span>${drink.size} ${unit(drink)} <i></i> ${escapeHtml(caffeineLabel(drink))} ${text('CAFFEINE')}</span></div></div><span class="lab-badge"><span class="live-dot"></span>${text('LAYER STUDY / REAL-TIME 3D')}</span></div>
        <div class="lab-main"><div class="scene-area">
          <span class="scene-index" id="scene-index"></span><span class="scene-formula" id="scene-formula"></span>
          <div class="canvas-host" id="scene-host"></div>
          <button class="begin-overlay" data-action="play" id="begin-overlay" ${state.started ? 'hidden' : ''}><span>${icon('Play', 18)}</span>${text('Start building the layers')}</button>
          <div class="scene-caption" id="scene-caption"></div>
        </div><aside class="ingredient-panel" id="ingredient-panel"></aside></div>
        <div class="chapter-picker"><label for="ingredient-chapter">${text('{count} ingredient chapters', { count: stages.length - 1 })} <span>· ${text('choose any step')}</span></label><select id="ingredient-chapter">${stages.map((stage, index) => `<option value="${index}">${String(index + 1).padStart(2, '0')} — ${text(stage.name)}</option>`).join('')}</select></div>
        <nav aria-label="${text('Ingredient chapters')}" class="timeline-stages expanded-timeline" id="timeline">${stages.map((stage, index) => `<button data-action="chapter" data-index="${index}" title="${text(stage.name)}" aria-label="${text('Chapter {number}: {name}', { number: index + 1, name: t(stage.name) })}"><span style="--layer-colour:${stage.color}">${index === stages.length - 1 ? icon('Blend', 11) : String(index + 1).padStart(2, '0')}</span>${text(stage.short)}</button>`).join('')}</nav>
        <div class="controls">
          <button class="play-button" data-action="play" id="play-button"></button>
          <button class="icon-button" data-action="previous" aria-label="${text('Previous ingredient')}" id="previous">${icon('SkipBack', 17)}</button>
          <button class="icon-button" data-action="next" aria-label="${text('Next ingredient')}" id="next">${icon('SkipForward', 17)}</button>
          <span class="time" id="elapsed">0:00</span><input type="range" id="progress" aria-label="${text('Animation progress')}" min="0" max="${totalTime(drink)}" step=".05" value="${state.playback.time}"><span class="time total-time">${clock(totalTime(drink))}</span>
          <button class="replay icon-button" data-action="replay" aria-label="${text('Replay animation')}">${icon('RotateCcw', 17)}<span>${text('Replay')}</span></button>
        </div>
        <div class="speed-settings"><span>${text('Playback speed')}</span><div role="group" aria-label="${text('Animation speed')}">${[.5, 1, 1.5, 2, 3, 4].map(speed => `<button data-action="speed" data-speed="${speed}" aria-label="${text('{speed} times speed', { speed: formatNumber(speed) })}" aria-pressed="${speed === state.playback.speed}" class="${speed === state.playback.speed ? 'selected' : ''}">${formatNumber(speed)}×</button>`).join('')}</div></div>
      </div>
      <div class="composition-bar"><div>${icon('Layers', 17)}<span id="composition-caption"></span></div><button data-action="mix">${icon('Blend', 15)} ${text('Watch the final mix')}</button></div>
      <p class="educational-note">${icon('Info', 13)} ${text('This is a visual explanation. Layers do not show real dose, concentration, separation, or manufacturing order.')}</p>
      ${discoveriesSection(drink)}
      ${nutritionSection(drink)}
      <section class="formula-notes"><div><div class="eyebrow blue">${text('CONTINUE WITH THIS DRINK')}</div><h2>${text('What does each ingredient do?')}</h2><p>${text('Open the complete ingredient collection for {drink}. Every guide includes a fuller explanation of useful roles, potential downsides and the strength of the evidence.', { drink: drinkName(drink) })}</p>${link(`/drinks/${drink.id}/ingredients`, `${text('Read this drink’s ingredients')} ${icon('ArrowUpRight', 17)}`, 'button primary')}</div><div class="source-note"><div class="eyebrow">${text('HOW TO READ THESE NUMBERS')}</div><p>${text(drink.note)}</p>${externalLink(drink.source, t('Source information'))}${drink.label !== drink.source ? externalLink(drink.label, t('Additional label or context')) : ''}<small>${text('Reviewed')} ${text(drink.reviewed || '30 October 2026')} · ${text('Current product labels take precedence.')}</small></div></section>
    </div></div>`;
  }

  function discoveriesSection(drink) {
    if (!drink.discoveries.length) return '';
    const explanation = drink.contexts.length
      ? 'Explore named recipe ingredients and clearly marked chemistry inside the ingredients. Chemistry guides do not add extra ingredients or doses to the drink.'
      : 'Explore the named additives in this drink’s source information. Undisclosed flavour mixtures are not assigned guessed chemical ingredients.';
    return `<section class="discovery-section" aria-labelledby="discovery-heading"><div class="discovery-heading"><div><div class="eyebrow blue">${icon('Sparkles', 14)} ${text('SOMETHING NEW TO LEARN')}</div><h2 id="discovery-heading">${text('Meet the less familiar')}<span>.</span></h2><p>${text(explanation)}</p></div>${link(`/drinks/${drink.id}/ingredients`, `${text('All this drink’s guides')} ${icon('ArrowRight', 15)}`, 'text-link')}</div>
      <div class="discovery-grid">${drink.discoveries.slice(0, 4).map(id => {
        const ingredient = guide(id), context = contextFor(drink, id);
        return `<article class="discovery-card"><span class="discovery-kind ${context ? 'natural' : ''}">${context ? text('Inside {parent}', { parent: guide(context.parentId).name }) : text('Recipe ingredient')}</span><span class="discovery-symbol">${escapeHtml(ingredient.symbol)}</span><h3>${link(`/drinks/${drink.id}/ingredients/${id}`, `${escapeHtml(ingredient.name)}${icon('ArrowUpRight')}`)}</h3><p>${escapeHtml(ingredient.what)}</p>${context ? `<small>${text('Ingredient chemistry · product-specific amount unverified')}</small>` : ''}<div class="discovery-actions">${link(`/drinks/${drink.id}/ingredients/${id}`, `${text('What it does')} ${icon('ArrowRight', 13)}`)}${!context ? `<button data-action="show-ingredient" data-id="${id}">${icon('Play', 12)} ${text('See in the glass')}</button>` : ''}</div></article>`;
      }).join('')}</div>
    </section>`;
  }

  function nutritionSection(drink) {
    const nutrition = drink.nutrition;
    const basis = nutrition.referenceUnit;
    const container = t(nutrition.container);
    return `<section class="nutrition-section" aria-labelledby="nutrition-heading">
      <div class="nutrition-intro"><div><div class="eyebrow blue">${text('THE NUMBERS IN YOUR DRINK')}</div><h2 id="nutrition-heading">${text('Nutritional content')}<span>.</span></h2><p>${text('Compare one {container} with 100 {unit}. See how much you drink.', { container, unit: basis })}</p></div><span class="nutrition-volume">${drink.size}<small>${basis} / ${escapeHtml(container)}</small></span></div>
      <div class="nutrition-table-wrap"><table class="nutrition-table"><caption>${text('{drink} · per {container} and per 100 {unit}', { drink: drinkName(drink), container, unit: basis })}</caption><thead><tr><th scope="col">${text('Nutrient / ingredient')}</th><th scope="col">${text('Per {container}', { container })}<span>${drink.size} ${basis}</span></th><th scope="col">${text('Per 100 {unit}', { unit: basis })}<span>${text('For comparison')}</span></th></tr></thead><tbody>
        ${nutrition.rows.map(row => `<tr class="${row.id === 'caffeine' ? 'caffeine-row' : ['sugars', 'saturates'].includes(row.id) ? 'nutrition-subrow' : ''}"><th scope="row">${text(row.name)}${row.id === 'caffeine' ? `<span class="nutrition-tag">${text('STIMULANT')}</span>` : ''}</th><td class="${row.perServing === null ? 'unknown' : ''}">${escapeHtml(formatAmount(row.perServing, row.unit))}</td><td class="${row.per100 === null ? 'unknown' : ''}">${escapeHtml(formatAmount(row.per100, row.unit))}</td></tr>`).join('')}
      </tbody></table></div>
      ${nutrition.massRows.length ? `<div class="mass-reference"><div class="mass-reference-intro"><h3>${text('The manufacturer’s label: per 100 g')}</h3><p>${text('These are weight-based values. They cannot be put into the volume columns above without a verified conversion.')}</p></div><table class="nutrition-table"><caption>${text('{drink} · manufacturer values per 100 grams', { drink: drinkName(drink) })}</caption><thead><tr><th scope="col">${text('Nutrient')}</th><th scope="col">${text('Per 100 g')}<span>${text('As published by TINE')}</span></th></tr></thead><tbody>${nutrition.massRows.map(row => `<tr><th scope="row">${text(row.name)}</th><td>${escapeHtml(formatAmount(row.amount, row.unit))}</td></tr>`).join('')}</tbody></table></div>` : ''}
      <div class="nutrition-footnote">${icon('Info')}<div><p>${text(nutrition.note)}</p><p><strong>${text('Not available means we do not have a verified amount. It does not mean zero.')}</strong> ${text('“≈” marks an estimate. Package labels can round their numbers.')}</p><div>${externalLink(nutrition.source, t('Nutrition source'))}${drink.label !== nutrition.source ? externalLink(drink.label, t('Additional label')) : ''}</div></div></div>
    </section>`;
  }

  function totalTime(drink) {
    const final = drink.stages.at(-1);
    return Math.round((final.start + final.duration) * 1000) / 1000;
  }

  function mountGlass(drink) {
    const host = document.getElementById('scene-host');
    try {
      state.glass = window.DrinkLabGlass.mount(host, drink, state.playback, {
        webgl: t('This 3D experience requires WebGL. You can still read every ingredient guide.'),
        lighting: t('Lighting the studio…'),
      });
    } catch (error) {
      host.innerHTML = `<div class="canvas-message">${text('This 3D experience requires WebGL. You can still read every ingredient guide.')}</div>`;
      console.error('DrinkLab glass:', error);
    }
  }

  function seek(time) {
    state.playback.time = Math.max(0, Math.min(totalTime(state.drink), time));
    state.started = true;
    updatePlayer(true);
  }

  function updatePlayer(force = false) {
    if (state.page !== 'drink') return;
    const drink = state.drink, stages = drink.stages, playback = state.playback;
    const active = Math.max(0, stages.findLastIndex(stage => playback.time >= stage.start));
    const stage = stages[active];
    const play = document.getElementById('play-button');
    play.setAttribute('aria-label', t(playback.playing ? 'Pause animation' : 'Play animation'));
    play.innerHTML = icon(playback.playing ? 'Pause' : 'Play', 18);
    document.getElementById('begin-overlay').hidden = state.started;
    document.getElementById('elapsed').textContent = clock(playback.time);
    document.getElementById('progress').value = playback.time;
    document.getElementById('progress').style.setProperty('--progress', `${playback.time / totalTime(drink) * 100}%`);
    document.getElementById('previous').disabled = active === 0;
    document.getElementById('next').disabled = active === stages.length - 1;
    if (!force && active === state.activeChapter) return;

    state.activeChapter = active;
    const delivery = { pour: 'Liquid pour', crystals: 'Crystals', powder: 'Fine powder', droplets: 'Liquid drops', extract: 'Extract', gas: 'Gas dispersion' };
    document.getElementById('scene-index').innerHTML = `${String(active + 1).padStart(2, '0')} <span>/ ${String(stages.length).padStart(2, '0')}</span>`;
    document.getElementById('scene-formula').textContent = t(stage.formula);
    document.getElementById('scene-caption').textContent = t(stage.kind === 'final' ? 'MIXING THE ILLUSTRATIVE LAYERS' : 'INGREDIENT COLOURS & THICKNESS ARE ILLUSTRATIVE');
    document.getElementById('composition-caption').textContent = t(stage.kind === 'final' ? 'Ingredients become one mixture.' : 'Explore a chapter to inspect its completed layer.');
    document.getElementById('ingredient-chapter').value = active;
    document.getElementById('ingredient-panel').innerHTML = `
      <div class="panel-eyebrow"><span style="background:${stage.color}"></span>${stage.kind === 'final' ? text('THE FINAL MIXTURE') : text('LAYER {number}', { number: String(active + 1).padStart(2, '0') })}</div>
      <div class="ingredient-content"><span class="ingredient-symbol" style="color:${stage.color}">${icon('Atom', 29)}</span><h3>${text(stage.name)}</h3><div class="quantity ${stage.amount.length > 10 ? 'vitamins' : ''}">${text(stage.amount)}</div><div class="quantity-unit">${text(stage.unit)}</div><div class="delivery-label">${text(stage.kind === 'final' ? 'STIR & BLEND' : delivery[stage.delivery]).toUpperCase()} <span>· ${text('VISUAL REPRESENTATION')}</span></div><p>${text(stage.description)}</p></div>
      <div class="stage-guide-links">${stage.ingredientIds.map(id => link(`/drinks/${drink.id}/ingredients/${id}`, `${escapeHtml(guide(id).name)}${icon('ArrowUpRight', 12)}`)).join('')}</div>
      ${link(`/drinks/${drink.id}/ingredients`, `${icon('BookOpen', 14)} ${text('Only {drink} ingredients', { drink: drinkName(drink) })} ${icon('ArrowUpRight', 14)}`, 'ingredient-learn')}`;

    const timeline = document.getElementById('timeline');
    [...timeline.children].forEach((button, index) => {
      button.className = index === active ? 'active' : index < active ? 'complete' : '';
      if (index === active) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
      button.firstElementChild.innerHTML = index < active ? icon('Check', 11) : index === stages.length - 1 ? icon('Blend', 11) : String(index + 1).padStart(2, '0');
    });
    const selected = timeline.children[active];
    timeline.scrollTo({ left: Math.max(0, selected.offsetLeft - timeline.clientWidth / 2 + selected.clientWidth / 2), behavior: 'smooth' });
  }

  // ── 5. INGREDIENSBIBLIOTEK OG ARTIKLAR ─────────────────────────────
  function libraryPage(drink) {
    const collection = drink ? guideIds(drink).map(id => ingredientById.get(id)) : ingredients;
    const categories = ['All ingredients', ...new Set(collection.map(ingredient => ingredient.category))];
    return `<div class="page-width library-page">
      ${drink ? link(`/drinks/${drink.id}`, `${icon('ArrowLeft', 15)} ${text('Back to {drink}', { drink: drinkName(drink) })}`, 'back-link scope-back') : ''}
      <div class="page-intro ${drink ? 'scoped-intro' : ''}"><div class="eyebrow blue">${drink ? `${text(drink.category).toUpperCase()} · ${text('THIS DRINK’S INGREDIENT COLLECTION')}` : text('THE COMPLETE INGREDIENT LIBRARY')}</div><h1>${drink ? `${escapeHtml(drinkName(drink))}<br><span>${text('Inside this drink.')}</span>` : `${text('Big names.')}<br><span>${text('Clear explanations.')}</span>`}</h1><p>${drink ? `${text('Explore {drink}’s recipe ingredients', { drink: drinkName(drink) })}${drink.contexts.length ? text(' and clearly marked chemistry within them') : ''}.<br>${text('Learn their roles, possible downsides and what the evidence can tell us.')}` : `${text('The full collection, across all drinks in the lab.')}<br>${text('Discover unfamiliar names, or switch to all guides for the complete picture.')}`}</p></div>
      ${drink ? `${tabs(drink, 'ingredients')}<div class="scope-notice"><img src="${imagePath(drink)}" alt=""><div><strong>${text('You’re exploring {drink}.', { drink: drinkName(drink) })}</strong><p>${text(drink.note)}</p></div></div><p class="scope-guide-count">${text('{count} recipe ingredient groups', { count: drink.ingredients.length })}${drink.contexts.length ? ` · ${text('{count} guides to chemistry inside them · not extra added ingredients', { count: drink.contexts.length })}` : ''}</p>` : ''}
      <div class="discovery-filter" role="group" aria-label="${text('Guide discovery')}">${['unfamiliar', 'all'].map(focus => `<button data-action="guide-focus" data-focus="${focus}" aria-pressed="${state.library.focus === focus}" class="${state.library.focus === focus ? 'selected' : ''}">${text(focus === 'unfamiliar' ? 'Discover unfamiliar' : 'All guides')}</button>`).join('')}</div>
      <div class="library-tools"><div class="search-field">${icon('Search', 17)}<input id="ingredient-search" aria-label="${text(drink ? 'Search this drink’s ingredients' : 'Search all ingredients')}" placeholder="${text(drink ? 'Search within this drink…' : 'Search the whole library…')}" value="${escapeHtml(state.library.query)}"><button data-action="clear-search" id="clear-search" aria-label="${text('Clear search')}" ${state.library.query ? '' : 'hidden'}>${icon('X', 15)}</button></div><span id="guide-count"></span></div>
      <div class="category-tabs" aria-label="${text('Ingredient types')}">${categories.map(category => `<button data-action="guide-category" data-category="${escapeHtml(category)}" aria-pressed="${state.library.category === category}" class="${state.library.category === category ? 'selected' : ''}">${text(category)}</button>`).join('')}</div>
      <div class="ingredient-grid" id="ingredient-grid"></div><div class="empty-state" id="empty-guides" hidden><h2>${text(drink ? 'No matching ingredients in this drink.' : 'No matching ingredients.')}</h2><button class="text-link" data-action="clear-filters">${text('Clear filters')}</button></div>
      <div class="library-disclaimer">${icon('Info', 19)}<p>${text('These guides explain general evidence. A dose in a supplement study is not necessarily the amount in a drink. The animation enlarges ingredient layers for visibility and does not measure them.')}</p></div>
      ${drink ? `<div class="library-separation">${icon('BookOpen', 21)}<div><h2>${text('Looking for another ingredient?')}</h2><p>${text('The full library is separate from this drink’s collection.')}</p></div>${link('/ingredients', `${text('Open the complete library')} ${icon('ArrowUpRight', 15)}`, 'text-link')}</div>` : ''}
    </div>`;
  }

  const familiar = new Set(['water', 'carbonation', 'sugar', 'glucose', 'fructose', 'caffeine', 'milk', 'salt', 'coffee-solids', 'tea-solids', 'fruit-solids', 'fruit-acids', 'orange-concentrate', 'apple-grape-juice', 'peach-concentrate', 'lemon-concentrate', 'flavourings', 'colours', 'vitamin-c']);
  const discoveryOrder = ['l-leucine','l-valine','l-isoleucine','culture-la5','culture-bb12','culture-lgg','pectins','yoghurt-cultures','green-tea-extract','biotin','vitamin-e','folic-acid','vitamin-d','l-carnitine-tartrate','glucuronolactone','sodium-carbonates','magnesium-carbonates','theobromine','cocoa-flavanols','chlorogenic-acids','trigonelline','l-theanine','theaflavins','casein','lactose','coffee-melanoidins','hesperidin','sucrose-acetate-isobutyrate','wood-rosin-esters','sulfite-caramel','anthocyanins','guar-gum','gellan-gum','locust-bean-gum','inositol','ginseng','maltodextrin','gum-arabic','monopotassium-phosphate','sorbic-acid','benzoic-acid','caramel-unspecified','guarana','coffee-extract','caramel','phosphoric-acid','brilliant-blue','sunset-yellow','steviol-glycosides','acesulfame-k','aspartame','sucralose','potassium-citrate','sodium-citrate','sodium-benzoate','potassium-sorbate','taurine'];
  const discoveryRank = id => { const rank = discoveryOrder.indexOf(id); return rank < 0 ? 100 : rank; };

  function updateLibrary() {
    if (state.page !== 'library') return;
    const drink = state.drink;
    const collection = drink ? guideIds(drink).map(id => ingredientById.get(id)) : ingredients;
    const { query, category, focus } = state.library;
    const filtered = collection.filter(original => {
      // Søk finn begge språk, også når brukaren byter språk midt i eit søk.
      const searchable = [original.name, original.what, original.symbol, original.nn.name, original.nn.what, original.nn.symbol].join(' ');
      return (focus === 'all' || !familiar.has(original.id)) && (category === 'All ingredients' || original.category === category) && normalise(searchable).includes(normalise(query));
    }).sort((a, b) => focus === 'unfamiliar' ? discoveryRank(a.id) - discoveryRank(b.id) : 0);

    document.getElementById('guide-count').textContent = t('{shown} OF {total} GUIDES', { shown: filtered.length, total: collection.length });
    document.getElementById('ingredient-grid').innerHTML = filtered.map(original => {
      const ingredient = guide(original.id), context = contextFor(drink, ingredient.id);
      const path = drink ? `/drinks/${drink.id}/ingredients/${ingredient.id}` : `/ingredients/${ingredient.id}`;
      return link(path, `<div><span class="category-label">${escapeHtml(ingredient.category)}</span>${icon('ArrowUpRight', 18)}</div><span class="chemical-symbol">${escapeHtml(ingredient.symbol)}</span><h2>${escapeHtml(ingredient.name)}</h2>${ingredient.compound ? `<span class="guide-origin">${context ? text('Inside {parent} · ingredient chemistry', { parent: guide(context.parentId).name }) : text('Ingredient chemistry · not a separate recipe item')}</span>` : ''}<p>${escapeHtml(ingredient.what)}</p><span class="read-guide">${text('Useful roles, downsides & evidence')} ${icon('ArrowRight', 14)}</span>`, 'ingredient-card');
    }).join('');
    document.getElementById('empty-guides').hidden = filtered.length > 0;
    document.getElementById('clear-search').hidden = !query;
    document.querySelectorAll('[data-action="guide-focus"]').forEach(button => {
      const selected = button.dataset.focus === focus;
      button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-action="guide-category"]').forEach(button => {
      const selected = button.dataset.category === category;
      button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));
    });
  }

  function ingredientPage(id, drink) {
    const ingredient = guide(id), context = contextFor(drink, id);
    const found = drink ? [drink] : drinks.filter(item => guideIds(item).includes(id));
    return `<article class="page-width ingredient-article">
      ${link(drink ? `/drinks/${drink.id}/ingredients` : '/ingredients', `${icon('ArrowLeft', 15)} ${drink ? text('{drink} ingredients', { drink: drinkName(drink) }) : text('Full ingredient library')}`, 'back-link')}
      <div class="article-header"><div class="eyebrow blue">${drink ? `${escapeHtml(drinkName(drink).toUpperCase())} · ` : ''}${escapeHtml(ingredient.category.toUpperCase())} ${text('FIELD GUIDE')}</div><div class="article-title"><h1>${escapeHtml(ingredient.name)}<span>.</span></h1><span>${escapeHtml(ingredient.symbol)}</span></div><p>${escapeHtml(ingredient.what)}</p></div>
      ${drink ? `<div class="context-strip ${context ? 'chemistry-context' : ''}"><strong>${context ? text('Inside {parent} · ingredient chemistry', { parent: guide(context.parentId).name }) : text('In {drink}', { drink: drinkName(drink) })}</strong><span>${context ? escapeHtml(chemistryNote(guide(context.parentId).name)) : text(drink.note)}</span></div>` : ingredient.compound ? `<div class="context-strip chemistry-context"><strong>${text('Ingredient chemistry')}</strong><span>${text('A compound or family within a food ingredient. This guide does not confirm a measured amount in any branded drink or mean that it was added separately.')}</span></div>` : ''}
      <div class="body-explanation">${icon('Atom', 27)}<div><span class="eyebrow blue">${text('WHAT IT DOES')}</span><p>${escapeHtml(ingredient.body)}</p><div class="body-areas" aria-label="${text('Body areas or product roles')}">${(ingredient.areas || []).map(area => `<span>${escapeHtml(area)}</span>`).join('')}</div></div></div>
      <div class="effects-grid"><section class="effect-positive"><span class="effect-label">${icon('Plus')} ${text('UPSIDES')}</span><h2>${text('How it can help.')}</h2><p>${escapeHtml(ingredient.good)}</p></section><section class="effect-negative"><span class="effect-label">${icon('Minus')} ${text('DOWNSIDES')}</span><h2>${text('What to watch for.')}</h2><p>${escapeHtml(ingredient.bad)}</p></section></div>
      <section class="evidence-block"><div class="eyebrow blue">${text('KEEP IN MIND')}</div><h2>${text('What the evidence tells us.')}</h2><p>${escapeHtml(ingredient.evidence)}</p><div class="article-sources">${ingredient.sources.map(source => externalLink(source.url, source.name)).join('')}</div><small>${text('Reviewed')} ${escapeHtml(ingredient.reviewed || t('30 October 2026'))} · ${text('Educational summaries. No endorsement by source organisations.')}</small></section>
      <section class="found-in"><div class="section-heading"><div class="eyebrow">${text(drink ? 'YOUR SELECTED DRINK' : 'EXPLORE IN CONTEXT')}</div><h2>${text(drink ? 'Back to the glass.' : ingredient.compound ? 'Explore its parent ingredient.' : 'Found in the lab.')}</h2></div>${found.map(item => link(`/drinks/${item.id}`, `<img src="${imagePath(item)}" alt=""><div><strong>${escapeHtml(drinkName(item))}</strong><span>${text(item.category)} · ${item.size} ${unit(item)} · ${text(ingredient.compound ? 'Background ingredient chemistry · amount unverified' : 'See the drink’s source note')}</span></div>${icon('ArrowUpRight', 18)}`)).join('')}</section>
      ${drink ? link('/ingredients', `${text('Browse all ingredients in the separate library')} ${icon('ArrowRight', 14)}`, 'text-link complete-library-link') : ''}
    </article>`;
  }

  // ── 6. OM-SIDA ────────────────────────────────────────────────────
  function aboutPage() {
    return `<div class="page-width about-page">
      <div class="page-intro"><div class="eyebrow blue">${text('ABOUT THE LAB')}</div><h1>${text('Curiosity first.')}<br><span>${text('Context always.')}</span></h1><p>${text('DrinkLab is a visual guide to what we drink. It connects a drink’s ingredient list to an interactive glass, then explains what those ingredients do—and what we cannot confidently claim.')}</p></div>
      <div class="about-principles">
        <section>${icon('FlaskConical', 24)}<h2>${text('See the composition.')}</h2><p>${text('A stream, a crystal, a separate band of colour. Each ingredient group gets a visible place in the glass before the layers swirl together. This turns a difficult label into something you can pause, revisit and understand at your own pace.')}</p></section>
        <section>${icon('BookOpen', 24)}<h2>${text('Read the evidence.')}</h2><p>${text('Benefits and downsides appear together. A vitamin’s normal role is different from a proven benefit of drinking more. A supplement study is different from an undisclosed amount in a can. Our guides make those differences explicit rather than giving ingredients a simple good-or-bad score.')}</p></section>
        <section>${icon('Atom', 24)}<h2>${text('Keep it in context.')}</h2><p>${text('The drink-specific pages show only that drink’s listed or explicitly qualified ingredient groups. The full library is separate. Manufacturer labels inform branded products; brewed and generic drinks use representative descriptions. Missing quantities remain missing.')}</p></section>
      </div>
      <section class="about-method"><div><div class="eyebrow blue">${text('HOW TO READ THE GLASS')}</div><h2>${text('A visual explanation,')}<br>${text('with honest boundaries.')}</h2></div><div><p>${text('The glass is an interactive real-time illustration. Layer colours distinguish ingredients; their thickness is enlarged for visibility. They do not represent measured volumes, actual solubility, separation in the finished drink, or manufacturing order. For example, caffeine and vitamins do not normally form coloured bands in a can.')}</p><p>${text('The final colour is representative. Coffee and tea vary with brewing; labels vary by market and date. A source note accompanies each drink so verified values, typical estimates and unknown quantities can be distinguished.')}</p></div></section>
      <section class="about-method"><div><div class="eyebrow blue">${text('SOURCES & EDITORIAL APPROACH')}</div><h2>${text('Follow the sources.')}</h2></div><div><p>${text('Guides link to manufacturer information and organisations including EFSA, NIH, BfR and public health services. They are educational summaries, not endorsements, diagnoses or personalised advice. Relevant benefits, risks and uncertainties are discussed without treating a chemical name as a reason for fear.')}</p><p>${text('Contains public sector information licensed under the')} <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer">Open Government Licence v3.0</a>. ${text('BfR-based passages are adapted summaries under')} <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. ${text('Sources are credited on each guide. No source organisation endorses DrinkLab.')}</p></div></section>
      ${link('/', `${text('Choose your drink')} ${icon('ArrowRight', 17)}`, 'button primary')}
    </div>`;
  }

  // ── 7. KNAPPAR, SØK OG SPRÅKVAL ───────────────────────────────────
  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    const stages = state.drink?.stages;
    switch (action) {
      case 'menu': state.menuOpen = !state.menuOpen; updateShell(); break;
      case 'drink-category':
        state.homeCategory = button.dataset.category;
        document.getElementById('drink-grid').innerHTML = homeCards();
        document.querySelectorAll('[data-action="drink-category"]').forEach(item => {
          const selected = item.dataset.category === state.homeCategory;
          item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected));
        });
        break;
      case 'guide-focus': state.library.focus = button.dataset.focus; state.library.category = 'All ingredients'; updateLibrary(); break;
      case 'guide-category': state.library.category = button.dataset.category; updateLibrary(); break;
      case 'clear-search': state.library.query = ''; document.getElementById('ingredient-search').value = ''; updateLibrary(); document.getElementById('ingredient-search').focus(); break;
      case 'clear-filters': state.library = { query: '', category: 'All ingredients', focus: 'all' }; document.getElementById('ingredient-search').value = ''; updateLibrary(); break;
      case 'play':
        if (state.playback.time >= totalTime(state.drink)) seek(0);
        state.playback.playing = !state.playback.playing; state.started = true; updatePlayer(true); break;
      case 'replay': seek(0); state.playback.playing = true; updatePlayer(true); break;
      case 'previous': seek(stages[Math.max(0, state.activeChapter - 1)].start + .1); break;
      case 'next': seek(stages[Math.min(stages.length - 1, state.activeChapter + 1)].start + .1); break;
      case 'chapter': {
        const stage = stages[Number(button.dataset.index)]; seek(stage.start + (stage.kind === 'final' ? .1 : stage.duration - .4)); break;
      }
      case 'mix': seek(stages.at(-1).start); state.playback.playing = true; updatePlayer(true); break;
      case 'show-ingredient': {
        const stage = stages.find(item => item.ingredientIds.includes(button.dataset.id));
        if (!stage) break;
        seek(stage.start + .1); state.playback.playing = true; updatePlayer(true);
        document.querySelector('.lab').scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        break;
      }
      case 'speed':
        state.playback.speed = Number(button.dataset.speed);
        document.querySelectorAll('[data-action="speed"]').forEach(item => {
          const selected = Number(item.dataset.speed) === state.playback.speed;
          item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected));
        });
        break;
    }
  });

  document.addEventListener('input', event => {
    if (event.target.id === 'ingredient-search') {
      state.library.query = event.target.value;
      state.library.focus = 'all'; state.library.category = 'All ingredients'; updateLibrary();
    }
    if (event.target.id === 'progress') seek(Number(event.target.value));
  });

  document.addEventListener('change', event => {
    if (event.target.id === 'language') {
      language = event.target.value === 'nn' ? 'nn' : 'en';
      try { localStorage.setItem('drinklab-language', language); } catch { /* Språkval fungerer også utan lagring. */ }
      render(true); if (state.page === 'library') updateLibrary();
    }
    if (event.target.id === 'ingredient-chapter') {
      const stage = state.drink.stages[Number(event.target.value)];
      seek(stage.start + (stage.kind === 'final' ? .1 : stage.duration - .4));
    }
  });

  window.addEventListener('hashchange', () => {
    state.menuOpen = false; render(); if (state.page === 'library') updateLibrary();
  });

  // ── 8. OPPSTART ───────────────────────────────────────────────────
  // Denne klokka styrer framdrifta. 3D-motoren les same playback-objekt.
  let previous = performance.now(), lastUiUpdate = 0;
  function tick(now) {
    if (state.page === 'drink' && state.playback.playing && !document.hidden) {
      state.playback.time = Math.min(totalTime(state.drink), state.playback.time + Math.min((now - previous) / 1000, .1) * state.playback.speed);
      if (state.playback.time >= totalTime(state.drink)) state.playback.playing = false;
      if (now - lastUiUpdate > 90 || !state.playback.playing) { updatePlayer(); lastUiUpdate = now; }
    }
    previous = now; requestAnimationFrame(tick);
  }

  render();
  if (state.page === 'library') updateLibrary();
  requestAnimationFrame(tick);
})();

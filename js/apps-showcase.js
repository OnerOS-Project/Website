import { OnerOSApps } from './apps.js';

(function () {
  'use strict';

  var state = {
    activeAppId: 'settings',
    activeCategory: 'all',
    calcDisplay: '0',
    calcExpr: '',
    calcPrev: null,
    calcOp: null,
    calcNew: true
  };

  var container = document.getElementById('apps-showcase');
  if (!container) return;

  var launcherList = container.querySelector('.apps__launcher-list');
  var windowBody = container.querySelector('.apps__window-body');
  var windowTitleText = container.querySelector('.apps__window-title-text');
  var windowTitleIcon = container.querySelector('.apps__window-title-icon');
  var infoName = container.querySelector('.apps__info-name');
  var infoDesc = container.querySelector('.apps__info-desc');
  var infoFeatures = container.querySelector('.apps__info-features');
  var infoIcon = container.querySelector('.apps__info-icon');
  var infoExternalBadge = container.querySelector('.apps__info-external-badge');
  var categoryBtns = container.querySelectorAll('.apps__cat-btn');

  function getAppById(id) {
    for (var i = 0; i < OnerOSApps.length; i++) {
      if (OnerOSApps[i].id === id) return OnerOSApps[i];
    }
    return null;
  }

  function getFilteredApps() {
    if (state.activeCategory === 'all') return OnerOSApps;
    return OnerOSApps.filter(function (a) { return a.category === state.activeCategory; });
  }

  function renderLauncher() {
    var apps = getFilteredApps();
    var html = '';
    apps.forEach(function (app) {
      var isActive = app.id === state.activeAppId;
      html += '<button class="apps__launcher-item' + (isActive ? ' apps__launcher-item--active' : '') + '" data-app="' + app.id + '" aria-pressed="' + isActive + '">';
      html += '<div class="apps__launcher-icon" style="color:' + app.accent + '">' + app.icon + '</div>';
      html += '<div class="apps__launcher-text">';
      html += '<div class="apps__launcher-name">' + app.name + '</div>';
      html += '<div class="apps__launcher-category">' + app.category + '</div>';
      html += '</div>';
      if (app.external) {
        html += '<svg class="apps__launcher-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
      }
      html += '</button>';
    });
    launcherList.innerHTML = html;

    var items = launcherList.querySelectorAll('.apps__launcher-item');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        selectApp(item.getAttribute('data-app'));
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectApp(item.getAttribute('data-app'));
        }
      });
    });
  }

  function selectApp(appId) {
    state.activeAppId = appId;
    var app = getAppById(appId);
    if (!app) return;

    var items = launcherList.querySelectorAll('.apps__launcher-item');
    items.forEach(function (item) {
      var isActive = item.getAttribute('data-app') === appId;
      item.classList.toggle('apps__launcher-item--active', isActive);
      item.setAttribute('aria-pressed', isActive);
    });

    windowTitleText.textContent = app.name;
    windowTitleIcon.innerHTML = app.icon;
    windowTitleIcon.style.color = app.accent;

    windowBody.classList.add('transitioning');
    setTimeout(function () {
      windowBody.innerHTML = renderPreview(app);
      windowBody.classList.remove('transitioning');

      if (app.previewType === 'calculator') {
        initCalculator();
      }
    }, 150);

    infoName.textContent = app.name;
    infoDesc.textContent = app.description;
    infoIcon.innerHTML = app.icon;
    infoIcon.style.color = app.accent;
    infoIcon.style.background = app.accent + '18';

    var featuresHtml = '';
    if (app.items) {
      app.items.forEach(function (item) {
        featuresHtml += '<span class="apps__info-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>' + item + '</span>';
      });
    }
    infoFeatures.innerHTML = featuresHtml;

    if (app.external) {
      infoExternalBadge.style.display = 'inline-flex';
      infoExternalBadge.style.background = app.accent + '18';
      infoExternalBadge.style.color = app.accent;
      infoExternalBadge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Ecosystem · Open externally';
    } else {
      infoExternalBadge.style.display = 'none';
    }
  }

  function renderPreview(app) {
    switch (app.previewType) {
      case 'settings': return renderSettingsPreview(app);
      case 'personalization': return renderPersonalizationPreview(app);
      case 'devzone': return renderDevZonePreview(app);
      case 'linux-mode': return renderTerminalPreview(app);
      case 'mplayer': return renderMPlayerPreview(app);
      case 'calculator': return renderCalculatorPreview(app);
      case 'revideeo': return renderExternalPreview(app);
      default: return renderDefaultPreview(app);
    }
  }

  function renderSettingsPreview(app) {
    return '<div class="preview-settings">' +
      '<div class="preview-settings__sidebar">' +
        '<div class="preview-settings__sidebar-item preview-settings__sidebar-item--active">Appearance</div>' +
        '<div class="preview-settings__sidebar-item">Theme</div>' +
        '<div class="preview-settings__sidebar-item">Accent Color</div>' +
        '<div class="preview-settings__sidebar-item">Wallpaper</div>' +
        '<div class="preview-settings__sidebar-item">Notifications</div>' +
      '</div>' +
      '<div class="preview-settings__content">' +
        '<div class="preview-settings__section-title">Appearance</div>' +
        '<div class="preview-settings__row">' +
          '<span class="preview-settings__row-label">Dark Mode</span>' +
          '<div class="preview-settings__toggle preview-settings__toggle--on"></div>' +
        '</div>' +
        '<div class="preview-settings__row">' +
          '<span class="preview-settings__row-label">Accent Color</span>' +
          '<div class="preview-settings__row-value">' +
            '<div class="preview-settings__swatch" style="background:' + app.accent + '"></div>' +
          '</div>' +
        '</div>' +
        '<div class="preview-settings__row">' +
          '<span class="preview-settings__row-label">Transparency</span>' +
          '<div class="preview-settings__toggle preview-settings__toggle--on"></div>' +
        '</div>' +
        '<div class="preview-settings__row">' +
          '<span class="preview-settings__row-label">Animations</span>' +
          '<div class="preview-settings__toggle preview-settings__toggle--on"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderPersonalizationPreview(app) {
    return '<div class="preview-personalization">' +
      '<div class="preview-personalization__group">' +
        '<div class="preview-personalization__label">Themes</div>' +
        '<div class="preview-personalization__themes">' +
          '<div class="preview-personalization__theme-card"><div class="preview-personalization__theme-dot" style="background:linear-gradient(135deg,#1a1c24,#252830)"></div>Modern</div>' +
          '<div class="preview-personalization__theme-card preview-personalization__theme-card--active"><div class="preview-personalization__theme-dot" style="background:linear-gradient(135deg,#0f1115,#181a20)"></div>OnerOS 2026</div>' +
          '<div class="preview-personalization__theme-card"><div class="preview-personalization__theme-dot" style="background:linear-gradient(135deg,#000080,#0000aa)"></div>Win95</div>' +
        '</div>' +
      '</div>' +
      '<div class="preview-personalization__group">' +
        '<div class="preview-personalization__label">Accent Color</div>' +
        '<div class="preview-personalization__accents">' +
          '<div class="preview-personalization__accent" style="background:#47b895"></div>' +
          '<div class="preview-personalization__accent preview-personalization__accent--active" style="background:#60a5fa"></div>' +
          '<div class="preview-personalization__accent" style="background:#a78bfa"></div>' +
          '<div class="preview-personalization__accent" style="background:#f472b6"></div>' +
          '<div class="preview-personalization__accent" style="background:#f59e0b"></div>' +
          '<div class="preview-personalization__accent" style="background:#ef4444"></div>' +
        '</div>' +
      '</div>' +
      '<div class="preview-personalization__group">' +
        '<div class="preview-personalization__label">Wallpaper</div>' +
        '<div class="preview-personalization__wallpapers">' +
          '<div class="preview-personalization__wallpaper preview-personalization__wallpaper--active" style="background:linear-gradient(135deg,#0f1115,#181a20)"></div>' +
          '<div class="preview-personalization__wallpaper" style="background:linear-gradient(135deg,#1a1c24,#2a2d38)"></div>' +
          '<div class="preview-personalization__wallpaper" style="background:linear-gradient(135deg,#0c1222,#1a2744)"></div>' +
          '<div class="preview-personalization__wallpaper" style="background:linear-gradient(135deg,#1a0f2e,#2d1b4e)"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderDevZonePreview(app) {
    return '<div class="preview-devzone">' +
      '<div class="preview-devzone__sidebar">' +
        '<div class="preview-devzone__file preview-devzone__file--active">index.ts</div>' +
        '<div class="preview-devzone__file">app.tsx</div>' +
        '<div class="preview-devzone__file">styles.css</div>' +
        '<div class="preview-devzone__file">utils.ts</div>' +
      '</div>' +
      '<div class="preview-devzone__editor">' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">1</span><span class="preview-devzone__line-code"><span class="preview-devzone__keyword">import</span> { <span class="preview-devzone__type">App</span> } <span class="preview-devzone__keyword">from</span> <span class="preview-devzone__string">\'./app\'</span>;</span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">2</span><span class="preview-devzone__line-code"></span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">3</span><span class="preview-devzone__line-code"><span class="preview-devzone__comment">// Initialize OnerOS window manager</span></span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">4</span><span class="preview-devzone__line-code"><span class="preview-devzone__keyword">const</span> <span class="preview-devzone__func">windowManager</span> = <span class="preview-devzone__keyword">new</span> <span class="preview-devzone__type">WindowManager</span>({</span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">5</span><span class="preview-devzone__line-code">  theme: <span class="preview-devzone__string">\'fluent-valley\'</span>,</span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">6</span><span class="preview-devzone__line-code">  snap: <span class="preview-devzone__keyword">true</span>,</span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">7</span><span class="preview-devzone__line-code">  animations: <span class="preview-devzone__keyword">true</span></span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">8</span><span class="preview-devzone__line-code">});</span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">9</span><span class="preview-devzone__line-code"></span></div>' +
        '<div class="preview-devzone__line"><span class="preview-devzone__line-num">10</span><span class="preview-devzone__line-code"><span class="preview-devzone__func">windowManager</span>.<span class="preview-devzone__func">launch</span>(<span class="preview-devzone__type">App</span>);</span></div>' +
      '</div>' +
      '<div class="preview-devzone__statusbar">' +
        '<span>TypeScript · UTF-8</span>' +
        '<span>Ln 10, Col 28</span>' +
      '</div>' +
    '</div>';
  }

  function renderTerminalPreview(app) {
    return '<div class="preview-terminal">' +
      '<div class="preview-terminal__line"><span class="preview-terminal__prompt">oneros@web:~$</span> <span class="preview-terminal__cmd">neofetch</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">       _____  </span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">      /     \\   OS: OnerOS Web 3.1.0</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">     | () () |  Codename: Fluent Valley</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">      \\  ^  /   Theme: OnerOS 2026</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">       |||||    Shell: oneros-term</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">       |||||    Resolution: ' + (window.innerWidth || 1920) + 'x' + (window.innerHeight || 1080) + '</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__prompt">oneros@web:~$</span> <span class="preview-terminal__cmd">ls apps/</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">Settings/  Personalization/  DevZone/  MPlayer/</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__output">Tools/     WinSync/          KDialer/  LinuxMode/</span></div>' +
      '<div class="preview-terminal__line"><span class="preview-terminal__prompt">oneros@web:~$</span> <span class="preview-terminal__cursor"></span></div>' +
    '</div>';
  }

  function renderMPlayerPreview(app) {
    return '<div class="preview-mplayer">' +
      '<div class="preview-mplayer__artwork">' +
        '<svg class="preview-mplayer__artwork-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>' +
      '</div>' +
      '<div class="preview-mplayer__info">' +
        '<div class="preview-mplayer__track">Fluent Valley</div>' +
        '<div class="preview-mplayer__artist">OnerOS Soundtrack</div>' +
      '</div>' +
      '<div class="preview-mplayer__timeline">' +
        '<div class="preview-mplayer__bar"><div class="preview-mplayer__bar-fill"></div></div>' +
        '<div class="preview-mplayer__times"><span>1:24</span><span>3:56</span></div>' +
      '</div>' +
      '<div class="preview-mplayer__controls">' +
        '<div class="preview-mplayer__btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg></div>' +
        '<div class="preview-mplayer__btn preview-mplayer__btn--play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>' +
        '<div class="preview-mplayer__btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg></div>' +
      '</div>' +
    '</div>';
  }

  function renderCalculatorPreview(app) {
    return '<div class="preview-calculator">' +
      '<div class="preview-calculator__display">' +
        '<div class="preview-calculator__expr" id="calc-expr"></div>' +
        '<div class="preview-calculator__result" id="calc-display">0</div>' +
      '</div>' +
      '<div class="preview-calculator__grid">' +
        '<button class="preview-calculator__btn" data-calc="clear">AC</button>' +
        '<button class="preview-calculator__btn" data-calc="negate">+/-</button>' +
        '<button class="preview-calculator__btn" data-calc="percent">%</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--op" data-calc="op" data-op="/">÷</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="7">7</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="8">8</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="9">9</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--op" data-calc="op" data-op="*">×</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="4">4</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="5">5</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="6">6</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--op" data-calc="op" data-op="-">−</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="1">1</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="2">2</button>' +
        '<button class="preview-calculator__btn" data-calc="num" data-num="3">3</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--op" data-calc="op" data-op="+">+</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--wide" data-calc="num" data-num="0">0</button>' +
        '<button class="preview-calculator__btn" data-calc="decimal">.</button>' +
        '<button class="preview-calculator__btn preview-calculator__btn--eq" data-calc="equals">=</button>' +
      '</div>' +
    '</div>';
  }

  function initCalculator() {
    var display = document.getElementById('calc-display');
    var expr = document.getElementById('calc-expr');
    if (!display || !expr) return;

    state.calcDisplay = '0';
    state.calcExpr = '';
    state.calcPrev = null;
    state.calcOp = null;
    state.calcNew = true;

    var buttons = windowBody.querySelectorAll('[data-calc]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var action = btn.getAttribute('data-calc');
        if (action === 'num') {
          calcInputNum(btn.getAttribute('data-num'));
        } else if (action === 'op') {
          calcInputOp(btn.getAttribute('data-op'));
        } else if (action === 'equals') {
          calcEquals();
        } else if (action === 'clear') {
          calcClear();
        } else if (action === 'negate') {
          calcNegate();
        } else if (action === 'percent') {
          calcPercent();
        } else if (action === 'decimal') {
          calcDecimal();
        }
        updateCalcDisplay(display, expr);
      });
    });
  }

  function calcInputNum(num) {
    if (state.calcNew) {
      state.calcDisplay = num;
      state.calcNew = false;
    } else {
      state.calcDisplay = state.calcDisplay === '0' ? num : state.calcDisplay + num;
    }
  }

  function calcDecimal() {
    if (state.calcNew) {
      state.calcDisplay = '0.';
      state.calcNew = false;
    } else if (state.calcDisplay.indexOf('.') === -1) {
      state.calcDisplay += '.';
    }
  }

  function calcInputOp(op) {
    var current = parseFloat(state.calcDisplay);
    if (state.calcOp && !state.calcNew) {
      state.calcPrev = calcCompute(state.calcPrev, current, state.calcOp);
      state.calcDisplay = String(state.calcPrev);
    } else {
      state.calcPrev = current;
    }
    state.calcOp = op;
    state.calcNew = true;
    var opSymbol = op === '*' ? '×' : op === '/' ? '÷' : op === '-' ? '−' : '+';
    state.calcExpr = state.calcPrev + ' ' + opSymbol;
  }

  function calcEquals() {
    if (!state.calcOp || state.calcPrev === null) return;
    var current = parseFloat(state.calcDisplay);
    var result = calcCompute(state.calcPrev, current, state.calcOp);
    state.calcExpr = state.calcPrev + ' ' + (state.calcOp === '*' ? '×' : state.calcOp === '/' ? '÷' : state.calcOp === '-' ? '−' : '+') + ' ' + current + ' =';
    state.calcDisplay = String(result);
    state.calcPrev = null;
    state.calcOp = null;
    state.calcNew = true;
  }

  function calcCompute(a, b, op) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error';
      default: return b;
    }
  }

  function calcClear() {
    state.calcDisplay = '0';
    state.calcExpr = '';
    state.calcPrev = null;
    state.calcOp = null;
    state.calcNew = true;
  }

  function calcNegate() {
    var val = parseFloat(state.calcDisplay);
    state.calcDisplay = String(val * -1);
  }

  function calcPercent() {
    var val = parseFloat(state.calcDisplay);
    state.calcDisplay = String(val / 100);
  }

  function updateCalcDisplay(displayEl, exprEl) {
    if (displayEl) displayEl.textContent = state.calcDisplay;
    if (exprEl) exprEl.textContent = state.calcExpr;
  }

  function renderExternalPreview(app) {
    var linkHtml = app.url ? '<a href="' + app.url + '" class="preview-external__link" target="_blank" rel="noopener noreferrer">Open ' + app.name + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>' : '';
    return '<div class="preview-external">' +
      '<div class="preview-external__icon" style="color:' + app.accent + '">' + app.icon + '</div>' +
      '<div class="preview-external__name">' + app.name + '</div>' +
      '<div class="preview-external__desc">' + app.description + '</div>' +
      linkHtml +
    '</div>';
  }

  function renderDefaultPreview(app) {
    return '<div class="preview-external">' +
      '<div class="preview-external__icon" style="color:' + app.accent + '">' + app.icon + '</div>' +
      '<div class="preview-external__name">' + app.name + '</div>' +
      '<div class="preview-external__desc">' + app.description + '</div>' +
    '</div>';
  }

  categoryBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.activeCategory = btn.getAttribute('data-category');
      categoryBtns.forEach(function (b) {
        b.classList.toggle('apps__cat-btn--active', b === btn);
      });
      renderLauncher();

      var filtered = getFilteredApps();
      var found = false;
      for (var i = 0; i < filtered.length; i++) {
        if (filtered[i].id === state.activeAppId) { found = true; break; }
      }
      if (!found && filtered.length > 0) {
        selectApp(filtered[0].id);
      }
    });
  });

  renderLauncher();
  selectApp(state.activeAppId);

  window.OnerOSAppsShowcase = {
    selectApp: selectApp,
    getActiveAppId: function () { return state.activeAppId; }
  };
})();

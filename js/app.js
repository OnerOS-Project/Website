(function () {
  'use strict';

  var SEARCH_DATA = [
    { name: 'Window Manager', desc: 'Drag, resize, snap, minimize, maximize windows', section: 'features', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
    { name: 'Themes', desc: '7 visual themes including Fluent Valley, Win95, macOS', section: 'features', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c.55 0 1-.45 1-1v-.09c0-.27-.11-.52-.29-.71a1.006 1.006 0 01-.29-.71c0-.55.45-1.01 1-1.01H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/></svg>' },
    { name: 'Applications', desc: 'Settings, Personalization, DevZone, MPlayer, and more', section: 'features', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' },
    { name: 'Personalization', desc: 'Customize wallpapers, accent colors, and themes', section: 'features', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 14a2 2 0 100-4 2 2 0 000 4z"/></svg>' },
    { name: 'Search (Spotlight)', desc: 'Global search with Cmd/Ctrl+K shortcut', section: 'features', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
    { name: 'Web Preview 3.1.0', desc: 'Try OnerOS directly in your browser', section: 'preview', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>' },
    { name: 'Fluent Valley', desc: 'The signature design language of OnerOS', section: 'preview', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>' },
    { name: 'Theme Showcase', desc: 'Explore all 7 OnerOS visual themes', section: 'themes', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/></svg>' },
    { name: 'Windows 95 Theme', desc: 'Classic Windows 95 teal desktop recreation', section: 'themes', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
    { name: 'Windows XP Theme', desc: 'Windows XP Luna blue theme', section: 'themes', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
    { name: 'macOS Theme', desc: 'macOS-inspired design with traffic light controls', section: 'themes', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
    { name: 'Ubuntu Theme', desc: 'Ubuntu GNOME-inspired aubergine and orange', section: 'themes', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
    { name: 'Settings', desc: 'System · Application', section: 'apps', appId: 'settings', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4"/></svg>' },
    { name: 'Personalization', desc: 'System · Application', section: 'apps', appId: 'personalization', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 14a2 2 0 100-4 2 2 0 000 4z"/></svg>' },
    { name: 'DevZone', desc: 'Developer tools · Application', section: 'apps', appId: 'devzone', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
    { name: 'Linux Mode', desc: 'Terminal simulator · Application', section: 'apps', appId: 'linux-mode', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>' },
    { name: 'MPlayer', desc: 'Music player · Application', section: 'apps', appId: 'mplayer', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>' },
    { name: 'Calculator', desc: 'Utility · Application', section: 'apps', appId: 'calculator', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/></svg>' },
    { name: 'ReVideeo', desc: 'Media · Ecosystem Application', section: 'apps', appId: 'revideeo', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>' },
    { name: 'ReVideeo', desc: 'Media application in the OnerOS ecosystem', section: 'ecosystem', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>' },
    { name: 'ReImaage', desc: 'Image and media application in the ecosystem', section: 'ecosystem', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
    { name: 'iVOD', desc: 'Video-on-demand platform in the ecosystem', section: 'ecosystem', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>' },
    { name: 'Calculator', desc: 'Calculator utility in the ecosystem', section: 'ecosystem', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/></svg>' },
    { name: 'GitHub Repository', desc: 'Browse source code, issues, and releases', section: 'open-source', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' },
    { name: 'Contributing', desc: 'Submit pull requests and help improve OnerOS', section: 'open-source', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><path d="M6 9v12"/></svg>' },
    { name: 'Discord Community', desc: 'Join the OnerOS community on Discord', section: 'community', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>' },
    { name: 'Reddit', desc: 'OnerOS community on Reddit', section: 'community', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0z"/></svg>' },
    { name: 'Live Web Preview', desc: 'Experience the actual OnerOS in your browser', section: 'preview', url: 'https://web-oneros.netlify.app', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' }
  ];

  var FEATURE_DATA = {
    'window-manager': {
      title: 'Window Manager',
      desc: 'A complete window management system with drag, resize, snap, minimize, and maximize — bringing desktop-class spatial organization to the browser.',
      items: [
        'Drag and resize windows freely',
        'Snap to edges and quarters',
        'Minimize, maximize, and restore',
        'Spatial animations for opening and closing'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
    },
    'themes': {
      title: 'Themes',
      desc: 'Seven distinct visual themes — from the modern Fluent Valley to authentic recreations of Windows 95, Windows XP, macOS, and Ubuntu.',
      items: [
        'Fluent Valley — original dark-first design',
        'Modern, Centered, Win95, WinXP, macOS, Ubuntu',
        'OnerOS 2026 — floating island taskbar',
        'Consistent theme switching across all apps'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c.55 0 1-.45 1-1v-.09c0-.27-.11-.52-.29-.71a1.006 1.006 0 01-.29-.71c0-.55.45-1.01 1-1.01H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/></svg>'
    },
    'applications': {
      title: 'Applications',
      desc: 'Eight internal applications and seven external ecosystem apps — all running inside the OnerOS window system with a centralized application registry.',
      items: [
        'Settings, Personalization, DevZone, Linux Mode',
        'MPlayer, WinSync, KDialer, Tools',
        'Lazy loading and single-instance support',
        'Centralized application registry'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'
    },
    'personalization': {
      title: 'Personalization',
      desc: 'Customize every aspect of the experience — from wallpapers and accent colors to complete theme overhauls that transform the entire interface.',
      items: [
        'User-configurable accent colors',
        'Wallpaper system with solid color fallback',
        'Accent color propagation to all apps',
        'Per-theme customization options'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 14a2 2 0 100-4 2 2 0 000 4z"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>'
    },
    'search': {
      title: 'Search',
      desc: 'A Spotlight-inspired global search system with Cmd/Ctrl+K shortcut. Search across applications, settings, and system surfaces with grouped results.',
      items: [
        'Cmd/Ctrl+K global keyboard shortcut',
        'Grouped results (Applications, Settings)',
        'Keyboard navigation with arrow keys',
        'Glass overlay with system-inspired design'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    }
  };

  var nav = document.getElementById('main-nav');
  var navLinks = document.querySelectorAll('.nav__link');
  var mobileToggle = document.getElementById('mobile-toggle');
  var navLinksContainer = document.getElementById('nav-links');
  var searchTrigger = document.getElementById('search-trigger');
  var searchOverlay = document.getElementById('search-overlay');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var featureItems = document.querySelectorAll('.features__item');
  var featureContent = document.getElementById('feature-content');
  var revealElements = document.querySelectorAll('.reveal');

  var lastScrollY = 0;
  var scrollThreshold = 100;
  var navHidden = false;

  function handleNavScroll() {
    var currentScrollY = window.scrollY;
    if (currentScrollY > scrollThreshold) {
      if (currentScrollY > lastScrollY && !navHidden) {
        nav.classList.add('nav--hidden');
        navHidden = true;
      } else if (currentScrollY < lastScrollY && navHidden) {
        nav.classList.remove('nav--hidden');
        navHidden = false;
      }
    } else {
      nav.classList.remove('nav--hidden');
      navHidden = false;
    }
    lastScrollY = currentScrollY;
    updateActiveNavLink();
  }

  function updateActiveNavLink() {
    var sections = document.querySelectorAll('section[id]');
    var scrollPos = window.scrollY + window.innerHeight / 3;
    var currentSection = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' + currentSection) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navLinksContainer.classList.toggle('nav__links--open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinksContainer.classList.remove('nav__links--open');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });

  featureItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var featureKey = item.getAttribute('data-feature');
      var data = FEATURE_DATA[featureKey];
      if (!data) return;

      featureItems.forEach(function (fi) {
        fi.classList.remove('features__item--active');
        fi.setAttribute('aria-selected', 'false');
      });
      item.classList.add('features__item--active');
      item.setAttribute('aria-selected', 'true');

      featureContent.classList.add('transitioning');
      setTimeout(function () {
        var listHtml = data.items.map(function (text) {
          return '<div class="features__detail-list-item">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>' +
            '<span>' + text + '</span></div>';
        }).join('');

        featureContent.innerHTML =
          '<div class="features__detail-icon" aria-hidden="true">' + data.icon + '</div>' +
          '<h3 class="features__detail-title">' + data.title + '</h3>' +
          '<p class="features__detail-desc">' + data.desc + '</p>' +
          '<div class="features__detail-list">' + listHtml + '</div>';

        featureContent.classList.remove('transitioning');
      }, 150);
    });
  });

  function openSearch() {
    searchOverlay.classList.add('search-overlay--open');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(function () {
      searchInput.focus();
    }, 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchOverlay.classList.remove('search-overlay--open');
    document.body.style.overflow = '';
    searchInput.blur();
  }

  function renderSearchResults(query) {
    var trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      searchResults.innerHTML = '<div class="search-panel__empty">Type to search features, projects, and more</div>';
      return;
    }

    var matches = SEARCH_DATA.filter(function (item) {
      return item.name.toLowerCase().indexOf(trimmedQuery) !== -1 ||
             item.desc.toLowerCase().indexOf(trimmedQuery) !== -1;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-panel__empty">No results found for "' + escapeHtml(query) + '"</div>';
      return;
    }

    var grouped = {};
    matches.forEach(function (item) {
      var group = item.section;
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(item);
    });

    var groupLabels = {
      'features': 'Features',
      'themes': 'Themes',
      'apps': 'Applications',
      'preview': 'Web Preview',
      'ecosystem': 'Ecosystem',
      'open-source': 'Open Source',
      'community': 'Community'
    };

    var html = '';
    Object.keys(grouped).forEach(function (groupKey) {
      var items = grouped[groupKey];
      html += '<div class="search-panel__group">';
      html += '<div class="search-panel__group-title">' + (groupLabels[groupKey] || groupKey) + '</div>';
      items.forEach(function (item) {
        var appIdAttr = item.appId ? ' data-app-id="' + item.appId + '"' : '';
        var urlAttr = item.url ? ' data-url="' + item.url + '"' : '';
        html += '<div class="search-panel__item" data-section="' + item.section + '"' + appIdAttr + urlAttr + ' tabindex="0">';
        html += '<div class="search-panel__item-icon">' + item.icon + '</div>';
        html += '<div class="search-panel__item-text">';
        html += '<div class="search-panel__item-name">' + highlightMatch(item.name, trimmedQuery) + '</div>';
        html += '<div class="search-panel__item-desc">' + item.desc + '</div>';
        html += '</div></div>';
      });
      html += '</div>';
    });

    searchResults.innerHTML = html;

    var resultItems = searchResults.querySelectorAll('.search-panel__item');
    resultItems.forEach(function (ri) {
      ri.addEventListener('click', function () {
        var section = ri.getAttribute('data-section');
        var appId = ri.getAttribute('data-app-id');
        var url = ri.getAttribute('data-url');
        closeSearch();
        if (url) {
          window.open(url, '_blank', 'noopener');
          return;
        }
        var target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (appId && window.OnerOSAppsShowcase) {
            setTimeout(function () {
              window.OnerOSAppsShowcase.selectApp(appId);
            }, 400);
          }
        }
      });
      ri.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          ri.click();
        }
      });
    });
  }

  function highlightMatch(text, query) {
    var idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return escapeHtml(text);
    var before = text.substring(0, idx);
    var match = text.substring(idx, idx + query.length);
    var after = text.substring(idx + query.length);
    return escapeHtml(before) + '<strong style="color:var(--color-accent)">' + escapeHtml(match) + '</strong>' + escapeHtml(after);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  if (searchTrigger) {
    searchTrigger.addEventListener('click', openSearch);
  }

  searchOverlay.addEventListener('click', function (e) {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', function () {
    renderSearchResults(searchInput.value);
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch();
      return;
    }
    var items = searchResults.querySelectorAll('.search-panel__item');
    if (items.length === 0) return;
    var focused = searchResults.querySelector('.search-panel__item--focused');
    var idx = Array.prototype.indexOf.call(items, focused);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focused) focused.classList.remove('search-panel__item--focused');
      var next = idx < items.length - 1 ? idx + 1 : 0;
      items[next].classList.add('search-panel__item--focused');
      items[next].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focused) focused.classList.remove('search-panel__item--focused');
      var prev = idx > 0 ? idx - 1 : items.length - 1;
      items[prev].classList.add('search-panel__item--focused');
      items[prev].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (focused) focused.click();
    }
  });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay.classList.contains('search-overlay--open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('search-overlay--open')) {
      closeSearch();
    }
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  var throttleTimer = null;
  window.addEventListener('scroll', function () {
    if (throttleTimer) return;
    throttleTimer = setTimeout(function () {
      handleNavScroll();
      throttleTimer = null;
    }, 100);
  }, { passive: true });

  handleNavScroll();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', targetId);
      }
    });
  });

})();

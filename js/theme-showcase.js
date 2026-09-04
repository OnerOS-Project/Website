(function () {
  'use strict';

  var THEMES = [
    {
      id: 'modern',
      name: 'Modern',
      accent: '#47b895',
      wallpaper: 'linear-gradient(135deg, #1a1d24 0%, #0f1115 100%)',
      topbar: { bg: 'rgba(24, 26, 32, 0.9)', color: '#e0e0e0', border: 'rgba(255,255,255,0.06)' },
      window: { bg: '#1e2028', border: 'rgba(255,255,255,0.08)', radius: '10px', headerBg: '#252830', headerBorder: 'rgba(255,255,255,0.06)', headerColor: '#e0e0e0', bodyBg: '#1e2028', bodyLine: 'rgba(255,255,255,0.06)' },
      taskbar: { bg: 'rgba(24, 26, 32, 0.85)', border: 'rgba(255,255,255,0.06)', iconBg: 'rgba(255,255,255,0.06)', iconColor: '#94a3b8', activeBg: 'rgba(71, 184, 149, 0.15)', activeColor: '#47b895', activeBar: '#47b895', floating: false },
      controls: ['#ef4444', '#f59e0b', '#10b981'],
      desc: 'Clean, contemporary design with subtle depth and Fluent Valley glass effects.',
      features: ['Glass surfaces', 'Layered depth', 'Modern radius']
    },
    {
      id: 'centered',
      name: 'Centered',
      accent: '#60a5fa',
      wallpaper: 'linear-gradient(180deg, #111318 0%, #0d0f14 100%)',
      topbar: { bg: 'rgba(20, 22, 28, 0.9)', color: '#d0d0d0', border: 'rgba(255,255,255,0.05)' },
      window: { bg: '#1a1d24', border: 'rgba(255,255,255,0.06)', radius: '12px', headerBg: '#22252e', headerBorder: 'rgba(255,255,255,0.05)', headerColor: '#d0d0d0', bodyBg: '#1a1d24', bodyLine: 'rgba(255,255,255,0.05)' },
      taskbar: { bg: 'rgba(20, 22, 28, 0.85)', border: 'rgba(255,255,255,0.05)', iconBg: 'rgba(255,255,255,0.05)', iconColor: '#8892a4', activeBg: 'rgba(96, 165, 250, 0.12)', activeColor: '#60a5fa', activeBar: '#60a5fa', floating: true },
      controls: ['#f87171', '#fbbf24', '#34d399'],
      desc: 'Centered layout with a floating taskbar and balanced composition.',
      features: ['Floating taskbar', 'Centered layout', 'Balanced UI']
    },
    {
      id: 'win95',
      name: 'Windows 95',
      accent: '#000080',
      wallpaper: 'linear-gradient(180deg, #008080 0%, #006666 100%)',
      topbar: { bg: '#c0c0c0', color: '#000000', border: '#808080' },
      window: { bg: '#c0c0c0', border: '#808080', radius: '0px', headerBg: '#000080', headerBorder: '#808080', headerColor: '#ffffff', bodyBg: '#c0c0c0', bodyLine: '#808080' },
      taskbar: { bg: '#c0c0c0', border: '#808080', iconBg: '#c0c0c0', iconColor: '#000000', activeBg: '#000080', activeColor: '#ffffff', activeBar: '#000080', floating: false },
      controls: ['#c0c0c0', '#c0c0c0', '#c0c0c0'],
      desc: 'Authentic Windows 95 recreation with classic teal desktop and gray interfaces.',
      features: ['Classic teal desktop', 'Gray UI panels', 'Pixel borders']
    },
    {
      id: 'winxp',
      name: 'Windows XP',
      accent: '#3164c5',
      wallpaper: 'linear-gradient(180deg, #3a6ea5 0%, #245b8a 50%, #3a8c3f 50%, #2d7a31 100%)',
      topbar: { bg: 'linear-gradient(180deg, #3168d5 0%, #2456b8 100%)', color: '#ffffff', border: '#1a47a0' },
      window: { bg: '#ece9d8', border: '#0054e3', radius: '8px 8px 0 0', headerBg: 'linear-gradient(180deg, #0a246a 0%, #3c77d2 8%, #3c77d2 92%, #0a246a 100%)', headerBorder: '#0054e3', headerColor: '#ffffff', bodyBg: '#ece9d8', bodyLine: '#c0c0c0' },
      taskbar: { bg: 'linear-gradient(180deg, #3168d5 0%, #2048a8 100%)', border: '#1a47a0', iconBg: 'rgba(255,255,255,0.15)', iconColor: '#ffffff', activeBg: 'rgba(255,255,255,0.2)', activeColor: '#ffffff', activeBar: '#ffffff', floating: false },
      controls: ['#e81123', '#fbba00', '#57c957'],
      desc: 'The iconic Windows XP Luna theme with blue taskbar and green Start button.',
      features: ['Luna blue theme', 'Gradient surfaces', 'Classic XP feel']
    },
    {
      id: 'macos',
      name: 'macOS',
      accent: '#0066cc',
      wallpaper: 'linear-gradient(180deg, #1d1d1f 0%, #2d2d30 100%)',
      topbar: { bg: 'rgba(30, 30, 30, 0.85)', color: '#ffffff', border: 'rgba(255,255,255,0.08)' },
      window: { bg: '#2d2d30', border: 'rgba(255,255,255,0.1)', radius: '10px', headerBg: '#3a3a3c', headerBorder: 'rgba(255,255,255,0.06)', headerColor: '#ffffff', bodyBg: '#2d2d30', bodyLine: 'rgba(255,255,255,0.06)' },
      taskbar: { bg: 'rgba(30, 30, 30, 0.8)', border: 'rgba(255,255,255,0.08)', iconBg: 'rgba(255,255,255,0.08)', iconColor: '#a0a0a0', activeBg: 'rgba(0, 102, 204, 0.15)', activeColor: '#0066cc', activeBar: '#0066cc', floating: true },
      controls: ['#ff5f57', '#febc2e', '#28c840'],
      desc: 'macOS-inspired design with traffic light controls and refined typography.',
      features: ['Traffic light controls', 'Frosted glass', 'Dock-style taskbar']
    },
    {
      id: 'ubuntu',
      name: 'Ubuntu',
      accent: '#e95420',
      wallpaper: 'linear-gradient(180deg, #2c001e 0%, #77216f 50%, #e95420 100%)',
      topbar: { bg: 'rgba(44, 0, 30, 0.9)', color: '#ffffff', border: 'rgba(255,255,255,0.06)' },
      window: { bg: '#3d3846', border: 'rgba(255,255,255,0.08)', radius: '10px 10px 0 0', headerBg: '#2c001e', headerBorder: 'rgba(255,255,255,0.06)', headerColor: '#ffffff', bodyBg: '#3d3846', bodyLine: 'rgba(255,255,255,0.06)' },
      taskbar: { bg: 'rgba(44, 0, 30, 0.9)', border: 'rgba(255,255,255,0.06)', iconBg: 'rgba(255,255,255,0.08)', iconColor: '#ffffff', activeBg: 'rgba(233, 84, 32, 0.2)', activeColor: '#e95420', activeBar: '#e95420', floating: false },
      controls: ['#f41b3b', '#f4b400', '#0fa85e'],
      desc: 'Ubuntu GNOME-inspired design with the iconic aubergine and orange palette.',
      features: ['Aubergine palette', 'Orange accent', 'GNOME-style layout']
    },
    {
      id: 'oneros2026',
      name: 'OnerOS 2026',
      accent: '#60a5fa',
      wallpaper: 'linear-gradient(135deg, #0f1115 0%, #181a20 50%, #1a1d28 100%)',
      topbar: { bg: 'rgba(15, 17, 21, 0.75)', color: '#e0e0e0', border: 'rgba(255,255,255,0.06)' },
      window: { bg: 'rgba(24, 26, 32, 0.85)', border: 'rgba(255,255,255,0.08)', radius: '12px', headerBg: 'rgba(34, 37, 46, 0.9)', headerBorder: 'rgba(255,255,255,0.06)', headerColor: '#e0e0e0', bodyBg: 'rgba(24, 26, 32, 0.85)', bodyLine: 'rgba(255,255,255,0.06)' },
      taskbar: { bg: 'rgba(15, 17, 21, 0.75)', border: 'rgba(255,255,255,0.08)', iconBg: 'rgba(255,255,255,0.06)', iconColor: '#94a3b8', activeBg: 'rgba(96, 165, 250, 0.15)', activeColor: '#60a5fa', activeBar: '#60a5fa', floating: true },
      controls: ['#ef4444', '#f59e0b', '#10b981'],
      desc: 'The signature Fluent Valley design — floating glass surfaces, spatial motion, and modern depth.',
      features: ['Glass blur', 'Floating surfaces', 'Spatial depth', 'Fluent Valley'],
      highlight: true
    }
  ];

  var container = document.getElementById('theme-showcase');
  if (!container) return;

  var currentIndex = 6;
  var previewSurface = container.querySelector('.themes__preview-surface');
  var previewWallpaper = container.querySelector('.themes__preview-wallpaper');
  var previewTopbar = container.querySelector('.themes__preview-topbar');
  var previewTopbarLeft = container.querySelector('.themes__preview-topbar-left');
  var previewTopbarRight = container.querySelector('.themes__preview-topbar-right');
  var previewWindow = container.querySelector('.themes__preview-window');
  var previewWindowHeader = container.querySelector('.themes__preview-window-header');
  var previewWindowControls = container.querySelectorAll('.themes__preview-window-dot');
  var previewWindowBody = container.querySelector('.themes__preview-window-body');
  var previewWindowLines = container.querySelectorAll('.themes__preview-line');
  var previewTaskbar = container.querySelector('.themes__preview-taskbar');
  var previewTaskbarIcons = container.querySelectorAll('.themes__preview-taskbar-icon');
  var previewTaskbarActiveBar = container.querySelector('.themes__preview-taskbar-icon--active::after');
  var previewClock = container.querySelector('.themes__preview-clock');
  var infoName = container.querySelector('.themes__info-name');
  var infoDesc = container.querySelector('.themes__info-desc');
  var infoFeatures = container.querySelector('.themes__info-features');
  var accentSwatch = container.querySelector('.themes__accent-swatch');
  var accentLabel = container.querySelector('.themes__accent-label');
  var themeButtons = container.querySelectorAll('.themes__btn');

  function applyTheme(index) {
    var theme = THEMES[index];
    if (!theme) return;

    previewWallpaper.style.background = theme.wallpaper;

    previewTopbar.style.background = theme.topbar.bg;
    previewTopbar.style.color = theme.topbar.color;
    previewTopbar.style.borderBottomColor = theme.topbar.border;

    previewWindow.style.background = theme.window.bg;
    previewWindow.style.borderColor = theme.window.border;
    previewWindow.style.borderRadius = theme.window.radius;
    previewWindow.style.boxShadow = theme.window.bg.includes('rgba') ? 'var(--fv-elevation-3)' : 'var(--fv-elevation-2)';

    previewWindowHeader.style.background = theme.window.headerBg;
    previewWindowHeader.style.borderBottomColor = theme.window.headerBorder;
    previewWindowHeader.style.color = theme.window.headerColor;

    previewWindowControls.forEach(function (dot, i) {
      dot.style.background = theme.controls[i] || theme.controls[0];
    });

    previewWindowBody.style.background = theme.window.bodyBg;
    previewWindowLines.forEach(function (line) {
      line.style.background = theme.window.bodyLine;
    });

    previewTaskbar.style.background = theme.taskbar.bg;
    previewTaskbar.style.borderTopColor = theme.taskbar.border;

    if (theme.taskbar.floating) {
      previewTaskbar.classList.add('floating');
      previewTaskbar.style.borderRadius = 'var(--radius-xl)';
      previewTaskbar.style.borderColor = theme.taskbar.border;
      previewTaskbar.style.bottom = '8px';
      previewTaskbar.style.left = '12px';
      previewTaskbar.style.right = '12px';
      previewTaskbar.style.boxShadow = 'var(--fv-elevation-3)';
    } else {
      previewTaskbar.classList.remove('floating');
      previewTaskbar.style.borderRadius = '0';
      previewTaskbar.style.borderColor = 'transparent';
      previewTaskbar.style.borderTopColor = theme.taskbar.border;
      previewTaskbar.style.bottom = '0';
      previewTaskbar.style.left = '0';
      previewTaskbar.style.right = '0';
      previewTaskbar.style.boxShadow = 'none';
    }

    previewTaskbarIcons.forEach(function (icon) {
      icon.style.background = theme.taskbar.iconBg;
      icon.style.color = theme.taskbar.iconColor;
    });

    var activeIcon = container.querySelector('.themes__preview-taskbar-icon--active');
    if (activeIcon) {
      activeIcon.style.background = theme.taskbar.activeBg;
      activeIcon.style.color = theme.taskbar.activeColor;
    }

    var activeBarStyle = document.getElementById('dynamic-active-bar');
    if (activeBarStyle) activeBarStyle.remove();
    var style = document.createElement('style');
    style.id = 'dynamic-active-bar';
    style.textContent = '.themes__preview-taskbar-icon--active::after { background: ' + theme.taskbar.activeBar + ' !important; }';
    document.head.appendChild(style);

    if (infoName) {
      var badgeHtml = theme.highlight ? '<span class="themes__btn-badge">New</span>' : '';
      infoName.innerHTML = theme.name + badgeHtml;
    }
    if (infoDesc) infoDesc.textContent = theme.desc;
    if (infoFeatures) {
      infoFeatures.innerHTML = theme.features.map(function (f) {
        return '<span class="themes__info-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>' + f + '</span>';
      }).join('');
    }
    if (accentSwatch) accentSwatch.style.background = theme.accent;
    if (accentLabel) accentLabel.textContent = theme.accent;

    themeButtons.forEach(function (btn, i) {
      if (i === index) {
        btn.classList.add('themes__btn--active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('themes__btn--active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    currentIndex = index;
  }

  themeButtons.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      applyTheme(index);
    });
    btn.addEventListener('keydown', function (e) {
      var newIndex = currentIndex;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        newIndex = (currentIndex + 1) % THEMES.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        newIndex = (currentIndex - 1 + THEMES.length) % THEMES.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = THEMES.length - 1;
      } else {
        return;
      }
      themeButtons[newIndex].focus();
      applyTheme(newIndex);
    });
  });

  applyTheme(currentIndex);
})();

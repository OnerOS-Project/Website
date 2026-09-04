export const OnerOSApps = [
  {
    id: 'settings',
    name: 'Settings',
    category: 'System',
    description: 'Configure system preferences, display, audio, network, and application settings.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    featured: true,
    previewType: 'settings',
    accent: '#47b895',
    items: ['Appearance', 'Theme', 'Accent Color', 'Wallpaper', 'Notifications']
  },
  {
    id: 'personalization',
    name: 'Personalization',
    category: 'System',
    description: 'Customize wallpapers, accent colors, and themes to make OnerOS truly yours.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 14a2 2 0 100-4 2 2 0 000 4z"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>',
    featured: true,
    previewType: 'personalization',
    accent: '#60a5fa',
    items: ['7 Themes', 'Accent Colors', 'Wallpapers', 'Live Preview']
  },
  {
    id: 'devzone',
    name: 'DevZone',
    category: 'Productivity',
    description: 'Developer tools including JSON formatter, Base64 encoder, color picker, and code snippets.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    featured: true,
    previewType: 'devzone',
    accent: '#a78bfa',
    items: ['JSON Formatter', 'Base64 Encoder', 'Color Picker', 'Code Snippets']
  },
  {
    id: 'linux-mode',
    name: 'Linux Mode',
    category: 'Productivity',
    description: 'A simulated Linux terminal with 24+ built-in commands for exploring the system.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    featured: true,
    previewType: 'linux-mode',
    accent: '#f59e0b',
    items: ['24+ Commands', 'File System', 'Process Viewer', 'Network Tools']
  },
  {
    id: 'mplayer',
    name: 'MPlayer',
    category: 'Media',
    description: 'A music player with vinyl animation, playlist management, and audio visualizer.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>',
    featured: true,
    previewType: 'mplayer',
    accent: '#f472b6',
    items: ['Vinyl Animation', 'Playlist', 'Audio Visualizer', 'Equalizer']
  },
  {
    id: 'calculator',
    name: 'Calculator',
    category: 'Utilities',
    description: 'A fully functional calculator with basic arithmetic operations.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="8" y1="18" x2="8" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>',
    featured: true,
    previewType: 'calculator',
    accent: '#10b981',
    items: ['Basic Operations', 'Keyboard Support', 'Memory', 'History']
  },
  {
    id: 'revideeo',
    name: 'ReVideeo',
    category: 'Ecosystem',
    description: 'A media application within the OnerOS ecosystem for video content.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    featured: true,
    previewType: 'revideeo',
    accent: '#ef4444',
    external: true,
    url: 'https://revideeo.app',
    items: ['Video Playback', 'Media Library', 'Streaming', 'Ecosystem App']
  },
  {
    id: 'tools',
    name: 'Tools',
    category: 'System',
    description: 'System utilities including screenshot, monitor, clipboard, recorder, color picker, and notes.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    featured: false,
    previewType: null,
    accent: '#94a3b8',
    items: ['Screenshot', 'Clipboard', 'Recorder', 'Notes']
  },
  {
    id: 'winsync',
    name: 'WinSync',
    category: 'Utilities',
    description: 'Windows sync tools including clipboard, file transfer, QR codes, links, and notes.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>',
    featured: false,
    previewType: null,
    accent: '#94a3b8',
    items: ['Clipboard Sync', 'File Transfer', 'QR Codes']
  },
  {
    id: 'kdialer',
    name: 'KDialer',
    category: 'Utilities',
    description: 'A phone dialer with contacts management and recent calls history.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',
    featured: false,
    previewType: null,
    accent: '#94a3b8',
    items: ['Dialer', 'Contacts', 'Recent Calls']
  },
  {
    id: 'reimaage',
    name: 'ReImaage',
    category: 'Ecosystem',
    description: 'An image and media application within the OnerOS ecosystem.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    featured: false,
    previewType: null,
    accent: '#94a3b8',
    external: true,
    url: 'https://reimaage-app.vercel.app/',
    items: ['Image Editor', 'Media Library', 'Ecosystem App']
  },
  {
    id: 'ivod',
    name: 'iVOD',
    category: 'Ecosystem',
    description: 'A video-on-demand platform within the OnerOS ecosystem.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    featured: false,
    previewType: null,
    accent: '#94a3b8',
    external: true,
    url: 'https://vod.itvt.xyz',
    items: ['Video Streaming', 'Content Library', 'Ecosystem App']
  }
];

export const OnerOSCategories = [
  { id: 'all', label: 'All Apps' },
  { id: 'System', label: 'System' },
  { id: 'Productivity', label: 'Productivity' },
  { id: 'Media', label: 'Media' },
  { id: 'Utilities', label: 'Utilities' },
  { id: 'Ecosystem', label: 'Ecosystem' }
];

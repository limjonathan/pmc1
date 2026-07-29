# PMC — Premier Management Consulting

A premium consulting website for PMC Surabaya, Indonesia — light-dominant, editorial typography, bento grids, and rich CSS-only animations. Zero framework dependencies.

## ✨ Features

| | |
|---|---|
| **Hero entrance stagger** | Badge → heading → text → buttons cascade on load |
| **Ambient glow pulse** | Gold glow breathes on a 6s cycle |
| **Mouse parallax** | Hero elements shift opposite cursor on desktop |
| **3D card tilt** | Service cards rotate toward cursor with depth |
| **Reading progress bar** | Fixed gold bar tracks scroll position |
| **Back to top** | Smooth-scroll button appears after 600px |
| **Staggered scroll reveals** | Grid children animate in sequence via `IntersectionObserver` |
| **Mobile menu stagger** | Nav links bounce in on open |
| **Image carousel** | Cycling hero testimonials |
| **Animated counters** | Stats count up when scrolled into view |
| **Bilingual (EN/ID)** | i18n toggle with flag switcher |
| **Zero JS deps** | Pure CSS + `IntersectionObserver` + mouse events |

## 🚀 Quick Start

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

No build step required.

## 📁 Structure

```
├── index.html         # Main site (standalone, open directly)
├── assets/            # Images, icons, language flags
│   ├── services/      # Service illustrations
│   └── flags/         # EN / IDN flag icons
├── .gitignore
└── README.md
```

## 🎨 Design

- **Palette:** `#ffffff` backgrounds, `#0f1a2e` dark sections, `#c8a84c` gold accent
- **Typography:** Playfair Display (serif headlines) + Inter (body)
- **Inspiration:** McKinsey, Bain, Deloitte, BCG — light-dominant premium consulting style

## 📱 Live

[https://limjonathan.github.io/pmc1](https://limjonathan.github.io/pmc1)

## 📄 License

MIT

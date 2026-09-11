<div align="center">

# Krishna Kumar — Developer Portfolio

**A modern, interactive, and security-hardened developer portfolio website.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Status](https://img.shields.io/badge/Status-Working_Prototype-amber?style=for-the-badge)](https://github.com/ayush00028/portfolio)

</div>

---

> ⚠️ **Project Notice: Working Prototype**  
> This repository contains the complete codebase, interactive 3D graphics, and security architecture for my personal portfolio. It is currently a structural working prototype with sample project records and data placeholders. Real-world projects, verified technical skills, and academic achievements are being curated and updated progressively.

---

## 🌟 Key Highlights & Interactive Features

### 1. 🌐 Interactive 3D Quantum Hologram (Three.js)
- Responsive WebGL canvas featuring an outer geodesic polyhedron, dual orbital rings, and dynamic floating particle clouds.
- Smooth mouse-tracking damping and interactive pulse shockwave on click.
- Automatic color-space adaptation between Cyber Cyan/Indigo (Dark Mode) and Deep Ocean/Teal (Light Mode).
- Fully accessible: automatically respects `prefers-reduced-motion`.

### 2. ☕ Interactive Code Runner (`Krishna.java`)
- An authentic developer IDE code window in the Hero section with syntax highlighting.
- Includes a live **Run Code** compilation simulation and one-click code copying.
- Instant toggle between the 3D Holographic Core and the Live Code Card.

### 3. ⌨️ Developer CLI Command Terminal (`Ctrl + K`)
- Built-in interactive command palette accessible anytime via **`Ctrl + K`** (or **`Cmd + K`** on Mac) or the navbar terminal button.
- Commands supported: `help`, `about`, `skills`, `projects`, `dsa`, `theme`, `sound`, `contact`, `clear`, `exit`.

### 4. 🎵 Zero-Dependency Web Audio Synthesizer
- Generates high-tech UI clicks, success chimes, and theme switches natively via the browser's Web Audio API.
- **0 KB external audio download** with an in-navbar mute/unmute toggle persisted in `localStorage`.

### 5. 🔍 Real-Time Project Filter & Search
- Live search bar filtering across project titles, descriptions, and technology stacks.
- Instant category tabs: *All Projects*, *Featured*, and *Upcoming / Concepts*.

### 6. 🌓 Persistent Theme Engine
- Seamless Dark/Light mode switcher with smooth transitions, CSS variables, and persistent state saved to `localStorage`.

---

## 🛡️ Enterprise-Grade Security Hardening

This portfolio implements multi-layered client-side security to prevent common web vulnerabilities:

| Defense | Implementation | Protection |
| :--- | :--- | :--- |
| **Content Security Policy (CSP)** | `index.html`, `public/_headers`, `vercel.json` | Blocks unauthorized external scripts and prevents Cross-Site Scripting (XSS). |
| **Input Sanitization** | `src/utils/security.js` | Strips raw HTML, `<script>` tags, and inline `javascript:` / `on*=` event handlers. |
| **Anti-Bot Honeypot** | `src/sections/Contact.jsx` | Decoy input field that silently traps automated spam bots without impacting real users. |
| **Client Rate Limiting** | `checkRateLimit()` | 30-second submission cooldown per user in `localStorage` to thwart flood attacks. |
| **Clickjacking Defense** | `X-Frame-Options: DENY` | Prevents malicious websites from framing or embedding the site in hidden iframes. |
| **MIME Sniffing Protection** | `X-Content-Type-Options: nosniff` | Disallows browsers from MIME-type sniffing away from declared content types. |
| **URL Protocol Guard** | `isSafeUrl()` | Validates external links to reject malicious `javascript:` or `data:` URL execution. |
| **Runtime Error Boundary** | `ErrorBoundary.jsx` | Catches unhandled runtime exceptions gracefully to avoid white-screen crashes. |

---

## 📂 Project Architecture

```text
portfolio/
├── public/
│   ├── _headers               # Security headers (Cloudflare Pages / Netlify)
│   ├── favicon.svg            # Custom KK monogram logo
│   └── og-image.png           # Social preview metadata
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphism header & mobile drawer
│   │   ├── Footer.jsx         # Clean minimal footer & quick links
│   │   ├── ThreeHeroScene.jsx # Three.js interactive 3D quantum core
│   │   ├── DeveloperCodeCard.jsx # Live Java code runner card
│   │   ├── CommandPalette.jsx # Interactive terminal CLI (Ctrl+K)
│   │   ├── ProjectCard.jsx    # 3D perspective tilt project card
│   │   ├── ThemeToggle.jsx    # Dark/Light theme switcher
│   │   ├── CursorGlow.jsx     # Ambient cyber spotlight mouse follower
│   │   └── ErrorBoundary.jsx  # Crash-protection error boundary
│   ├── sections/
│   │   ├── Hero.jsx           # Hero headline, intro, CTAs & dual 3D/code view
│   │   ├── About.jsx          # Academic cards, background & interests
│   │   ├── Skills.jsx         # Categorized skills grid
│   │   ├── Projects.jsx       # Project showcase with search & filter
│   │   ├── DSA.jsx            # Algorithmic trajectory & LeetCode/GitHub links
│   │   ├── CurrentlyExploring.jsx # Growth roadmap & learning priorities
│   │   └── Contact.jsx        # Outreach channels & frontend message interface
│   ├── data/                  # Centralized data layer (edit content here)
│   │   ├── profile.js         # Personal info, headline, bio, education
│   │   ├── skills.js          # Categorized technical capabilities
│   │   ├── projects.js        # Showcase projects (Skills2Job, CodeExpo, etc.)
│   │   ├── dsa.js             # Algorithmic notes & coding profiles
│   │   ├── learning.js        # Current learning priorities
│   │   └── socialLinks.js     # GitHub, LinkedIn, Email, LeetCode
│   ├── styles/
│   │   └── index.css          # Tailwind base, utilities & cyber grid styling
│   ├── utils/
│   │   ├── security.js        # Sanitizers, URL validators, and rate limiters
│   │   └── soundEffects.js    # Native Web Audio sound synthesizer
│   ├── App.jsx                # Application root layout
│   └── main.jsx               # React DOM entry point
├── prompts.md                 # AI Update Prompts guide for future content edits
├── Launch-Portfolio.bat       # Windows 1-tap local launcher
├── start.bat                  # Detailed batch launcher
├── vercel.json                # Vercel deployment security configuration
└── vite.config.js             # Bundler configuration with chunk splitting
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### 1. Clone the repository
```bash
git clone https://github.com/ayush00028/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

> 🖱️ **Windows One-Tap Launch**: You can simply double-click `Launch-Portfolio.bat` to boot the server and open your browser automatically.

### 4. Build for production
```bash
npm run build
```
Generates an optimized, chunk-split static bundle in the `dist/` directory ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🤖 Future Updates & AI Prompts

To update your skills, projects, or personal information in the future using any AI coding assistant, refer to the prompt templates in:
👉 **[`prompts.md`](./prompts.md)**

---

## 📬 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-ayush00028-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayush00028)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Krishna_Kumar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/krishnakumar00028)
[![LeetCode](https://img.shields.io/badge/LeetCode-ayush00028-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/ayush00028/)
[![Email](https://img.shields.io/badge/Email-krishnakumar.lps00028@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:krishnakumar.lps00028@gmail.com)

</div>

---

<div align="center">
  <sub>Designed & Developed with clean code, 3D aesthetics, and security hardening for Krishna Kumar.</sub>
</div>
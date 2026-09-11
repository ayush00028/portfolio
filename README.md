# Krishna Kumar Ã¢â‚¬â€  Developer Portfolio

> ⚠️ **Notice: Sample & Working Prototype**  
> This website is currently a rough sample and structural foundation. It contains placeholder content and initial templates. The full project details, comprehensive skill sets, and personal background information will be progressively updated.

A modern, interactive, high-performance developer portfolio website designed for **Krishna Kumar** (Student / Aspiring Software & Web Developer).

Built with **React**, **Vite**, **Tailwind CSS**, and **Three.js**, this portfolio features interactive 3D elements, dynamic 3D card tilt effects, a persistent dark/light theme toggle, and a strictly centralized data architecture designed for effortless editing by humans and AI coding assistants alike.

---

## ?? Features

- **Centralized Data Layer**: All personal information, skills, projects, DSA milestones, and social links are managed in dedicated files inside `src/data/`. No need to touch UI components to update information.
- **Enterprise-Grade Security Hardening**:
  - **Content Security Policy (CSP)**: Strict headers configured in `index.html`, `public/_headers` (Cloudflare/Netlify), and `vercel.json` (Vercel) to prevent unauthorized script execution.
  - **Input Sanitization**: Multi-layer sanitization in `src/utils/security.js` stripping HTML, `<script>`, and dangerous event handlers.
  - **Anti-Bot Honeypot**: Hidden trap field in the contact form that silently deflects automated spam bots.
  - **Client-Side Rate Limiting**: 30-second submission cooldown stored in `localStorage` to prevent spam flooding.
  - **Clickjacking & Sniffing Defense**: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.
  - **URL Protocol Validation**: Automatic verification preventing malicious `javascript:` or `data:` URL injections.
  - **Runtime Error Boundary**: Graceful UI error boundary preventing data leakage and app crashes.
- **Interactive Developer Command Terminal (`Ctrl + K`)**:
  - Full CLI emulator in `src/components/CommandPalette.jsx` with commands (`help`, `about`, `skills`, `projects`, `dsa`, `theme`, `sound`, `contact`, `clear`).
- **Zero-Dependency Native Web Audio Synthesizer**:
  - Futuristic UI clicks, chimes, and theme sounds synthesized directly via the Web Audio API with a polite mute toggle.
- **Dynamic Project Filtering & Search**:
  - Real-time search bar and category tabs (All, Featured, Upcoming) in the Projects showcase.
- **Ambient Cyber Cursor Spotlight Glow**:
  - Subtle mouse follower providing cyberpunk depth while respecting `prefers-reduced-motion`.
- **Interactive 3D Experience**: Smooth, lightweight Three.js canvas featuring a responsive geometric wireframe & particle lattice that tracks cursor motion and adapts to dark/light themes without lagging.
- **Micro-Interactions & 3D Tilt**: Interactive perspective tilt on project cards with dynamic gradient reflection on hover.
- **Dark / Light Mode System**: Seamless theme toggle with local storage persistence and system preference detection.
- **Fully Responsive Navigation**: Fixed blur navigation with scrollspy highlighting and mobile drawer menu.

---

## ??? Technologies Used

- **Framework**: [React](https://react.dev/) (Vite bundler)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ?? Project Structure

```text
portfolio/
+-- public/
Ã‚Â¦   +-- favicon.svg            # Custom modern KK monogram favicon
Ã‚Â¦   +-- og-image.png           # Open Graph metadata placeholder
+-- src/
Ã‚Â¦   +-- assets/                # Static media assets & images
Ã‚Â¦   +-- components/
Ã‚Â¦   Ã‚Â¦   +-- Navbar.jsx         # Sticky navigation with scrollspy & mobile menu
Ã‚Â¦   Ã‚Â¦   +-- Footer.jsx         # Minimal footer with quick links & back-to-top
Ã‚Â¦   Ã‚Â¦   +-- ThemeToggle.jsx    # Dark/Light theme switcher with localStorage
Ã‚Â¦   Ã‚Â¦   +-- ThreeHeroScene.jsx # Interactive 3D Three.js canvas
Ã‚Â¦   Ã‚Â¦   +-- ProjectCard.jsx    # 3D tilt interactive project card
Ã‚Â¦   +-- sections/
Ã‚Â¦   Ã‚Â¦   +-- Hero.jsx           # Hero headline, intro, CTAs & 3D scene
Ã‚Â¦   Ã‚Â¦   +-- About.jsx          # Student story, approach, academic cards
Ã‚Â¦   Ã‚Â¦   +-- Skills.jsx         # Categorized skills grid
Ã‚Â¦   Ã‚Â¦   +-- Projects.jsx       # Data-driven project showcase
Ã‚Â¦   Ã‚Â¦   +-- DSA.jsx            # Problem-solving journey & coding profiles
Ã‚Â¦   Ã‚Â¦   +-- CurrentlyExploring.jsx # Growth-oriented learning roadmap
Ã‚Â¦   Ã‚Â¦   +-- Contact.jsx        # Direct outreach & frontend message interface
Ã‚Â¦   +-- data/
Ã‚Â¦   Ã‚Â¦   +-- profile.js         # Name, role, headlines, bio, education, location
Ã‚Â¦   Ã‚Â¦   +-- skills.js          # Categorized skills list
Ã‚Â¦   Ã‚Â¦   +-- projects.js        # Projects list (Skills2Job + templates)
Ã‚Â¦   Ã‚Â¦   +-- dsa.js             # Problem-solving notes & coding profiles
Ã‚Â¦   Ã‚Â¦   +-- learning.js        # Current learning priorities
Ã‚Â¦   Ã‚Â¦   +-- socialLinks.js     # GitHub, LinkedIn, Email, LeetCode URLs
Ã‚Â¦   Ã‚Â¦   +-- index.js           # Consolidated export
Ã‚Â¦   +-- styles/
Ã‚Â¦   Ã‚Â¦   +-- index.css          # Tailwind base, utilities & glassmorphism
Ã‚Â¦   +-- App.jsx                # Root layout assembler
Ã‚Â¦   +-- main.jsx               # React entry point
+-- index.html                 # HTML shell, fonts, SEO metadata
+-- tailwind.config.js         # Theme colors, glowing shadows, animations
+-- vite.config.js             # Vite configuration with chunk splitting
+-- package.json               # Scripts & dependencies
```

---

## Ã°Å¸Å¡â‚¬ One-Tap Launch

You can launch the portfolio with a single click:

- **Double-click [`Launch-Portfolio.bat`](file:///c:/Users/krish/OneDrive/Documents/ModiJi/Launch-Portfolio.bat)** or **[`start.bat`](file:///c:/Users/krish/OneDrive/Documents/ModiJi/start.bat)** in Windows File Explorer.
  - It automatically checks dependencies, starts the Vite development server, and opens your default browser at `http://localhost:3000/`.

---

## Ã°Å¸â€™Â» Manual Commands

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production

```bash
npm run build
```

The optimized static production files will be output to the `dist/` directory, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

### 4. Preview Production Build

```bash
npm run preview
```

---

## ?? How to Edit Content

You **do not need to edit any JSX files** to update your content. Everything is controlled from `src/data/`:

### 1. Edit Personal Information (`src/data/profile.js`)
- Change your name, role, status badge.
- Replace `[ADD FINAL HEADLINE HERE]` with your custom headline.
- Replace `[ADD SHORT INTRODUCTION HERE]` with your personal introduction.
- Replace `[ADD ABOUT ME CONTENT HERE]` with your background story.
- Update education, college/university, and location placeholders.

### 2. Edit Skills (`src/data/skills.js`)
- Edit the `skillCategories` array.
- To add a skill to a category:
  ```javascript
  { name: "Python", level: "Intermediate" }
  ```
- To add a new skill category, add an object with `id`, `title`, `iconName` (`Code2`, `Globe`, `Wrench`, or `Cpu`), `description`, and `skills` array.

### 3. Add or Modify Projects (`src/data/projects.js`)
- Modify `Skills2Job` or replace the placeholders (`[PROJECT 2]`, `[PROJECT 3]`).
- To add a project, simply append an object to the `projects` array:
  ```javascript
  {
    id: "my-new-project",
    title: "Project Title",
    badge: "Web App",
    isPlaceholder: false,
    description: "What the project does and the problem it solves.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/your-username/repo",
    liveUrl: "https://project-demo.com",
    highlights: ["Feature highlight 1", "Feature highlight 2"]
  }
  ```

### 4. Update Social & Contact Links (`src/data/socialLinks.js`)
- Change `github`, `linkedin`, `email`, and `leetcode` URLs.
- Replace `[ADD CONTACT MESSAGE HERE]` with your customized pitch.

### 5. Update DSA / Problem-Solving (`src/data/dsa.js`)
- Update LeetCode and coding profile URLs.
- Edit your problem-solving notes and topic focus areas.

### 6. Modify Colors & Theme (`tailwind.config.js`)
- Colors (`primary`, `accent`, `dark`) are defined in `tailwind.config.js` under `theme.extend.colors`.
- Glassmorphism and glow styles are configured in `src/styles/index.css`.

### 7. Modify Animations
- 3D hero geometry and particle speeds: `src/components/ThreeHeroScene.jsx`.
- 3D card tilt angle: `src/components/ProjectCard.jsx` (adjust `rotateX` / `rotateY` multiplier).

### 8. Add a New Portfolio Section
1. Create a new file `src/sections/YourSection.jsx`.
2. Add its data in `src/data/yourData.js` (and export from `src/data/index.js`).
3. Import and render it in `src/App.jsx`.
4. Add a navigation link to `src/components/Navbar.jsx` in the `navItems` array.

---

## ?? For Future AI Editing

If an AI coding assistant is tasked with updating or extending this portfolio, follow these clear guidelines:

1. **Content Updates**:
   - **DO NOT** hard-code content into JSX files (`Hero.jsx`, `About.jsx`, etc.).
   - Always modify the corresponding data module in `src/data/`:
     - Profile & Bio: `src/data/profile.js`
     - Skills: `src/data/skills.js`
     - Projects: `src/data/projects.js`
     - DSA & Coding Profiles: `src/data/dsa.js`
     - Learning roadmap: `src/data/learning.js`
     - Social & Contact: `src/data/socialLinks.js`

2. **Card Interactions & 3D**:
   - The 3D canvas is contained cleanly inside `src/components/ThreeHeroScene.jsx`. It manages its own WebGL context, geometry disposal, theme observer, and mouse damping.
   - The 3D tilt effect on cards is isolated in `src/components/ProjectCard.jsx`.

3. **Styling & Themes**:
   - Dark mode uses Tailwind's `class` strategy (`dark`).
   - The active theme is toggled and saved in `localStorage` under key `'portfolio-theme'`.
   - Global styles and glassmorphism classes live in `src/styles/index.css`.

4. **Honesty & Quality Standard**:
   - Never fabricate experience, metrics, or company names.
   - Keep placeholders like `[ADD HERE]` intact until the user supplies real information.

---

## ?? License

This project is personal open-source software built for Krishna Kumar.

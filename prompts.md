# Portfolio AI Update Prompts & Guide

This file contains ready-to-use prompt templates for **Krishna Kumar's Portfolio**. 

Whenever you want to update your website (add skills, add projects, update education, or connect new profiles), simply **copy any prompt below**, fill in your details, and paste it into **any AI assistant** (ChatGPT, Claude, Gemini, Antigravity, Cursor, etc.).

---

## 📋 Master Update Prompt (All-in-One)

Use this prompt when you want to update multiple sections at once:

```text
Please update my developer portfolio website with my real details.

Refer to the centralized data files inside the `src/data/` directory.

Here are my updated details:
--------------------------------------------------
1. PERSONAL & BIO:
   • Full Name: Krishna Kumar
   • Current Role: [e.g., Student / Full-Stack & Java Developer]
   • Location: [e.g., Bengaluru, India]
   • Degree / Education: [e.g., B.Tech in Computer Science and Engineering]
   • College / University: [e.g., Your College / University Name]
   • Headline: [e.g., Building scalable web apps and mastering algorithms]
   • Bio Summary: [2-3 sentences about your journey, interests, and what you enjoy building]

2. SOCIAL & PROFILES:
   • GitHub: https://github.com/ayush00028
   • LinkedIn: https://www.linkedin.com/in/krishnakumar00028
   • LeetCode: https://leetcode.com/u/ayush00028/
   • Email: krishnakumar.lps00028@gmail.com

3. TECHNICAL SKILLS:
   • Programming: [e.g., Java, Python, JavaScript, C++]
   • Web Development: [e.g., HTML5, CSS3, React, Tailwind CSS, Node.js]
   • Tools & Platforms: [e.g., Git, GitHub, VS Code, Postman, Vite]
   • CS Concepts: [e.g., Data Structures & Algorithms, OOP, REST APIs]

4. PROJECTS:
   Project 1:
   • Title: Skills2Job
   • Description: [Detailed short summary of the project and problem solved]
   • Tech Stack: [React, Tailwind CSS, JavaScript, etc.]
   • GitHub Link: https://github.com/ayush00028/Skills2Job
   • Live Demo Link: [Demo URL or leave blank]
   • Key Highlights: [Feature 1, Feature 2]

   Project 2:
   • Title: CodeExpo
   • Description: [Repository of algorithmic solutions in Java and web projects]
   • Tech Stack: [Java, DSA, Algorithms, HTML/CSS]
   • GitHub Link: https://github.com/ayush00028/CodeExpo
   • Live Demo Link: [Demo URL or leave blank]

   [Add more projects if available]

5. CURRENT LEARNING FOCUS:
   • [e.g., Spring Boot, Advanced Graphs, System Design Basics]
--------------------------------------------------

RULES FOR THE UPDATE:
1. Modify ONLY the files in `src/data/` (`profile.js`, `skills.js`, `projects.js`, `dsa.js`, `learning.js`, `socialLinks.js`).
2. Do NOT alter UI components or break the security hardening (CSP, input sanitization, honeypot).
3. Run `npm run build` after updating to verify clean compilation with 0 errors.
```

---

## 🛠️ Prompt: Add a New Project

Use this prompt when you have built a new project and want to showcase it on your portfolio:

```text
Please add a new project to my portfolio in `src/data/projects.js`.

Project Details:
• Title: [Project Name]
• Badge: [e.g., Featured Project / Web App / Machine Learning]
• Description: [2-3 sentences explaining what it does and why it was built]
• Technologies: [List of technologies, e.g., React, Node.js, Tailwind CSS]
• GitHub Repository: [GitHub Repo URL]
• Live Demo URL: [Live Website URL, or leave blank if none]
• Highlights:
  - [Key feature or engineering achievement 1]
  - [Key feature or engineering achievement 2]

Please add this project to `projects` array in `src/data/projects.js` and verify the project cards render properly.
```

---

## 💻 Prompt: Update Skills & Technologies

Use this prompt when you learn a new language, framework, or tool:

```text
Please update the skills configuration in `src/data/skills.js`.

Add the following skills to their respective categories:
• Programming: [e.g., Add Python, C++]
• Web Development: [e.g., Add Next.js, Express]
• Tools: [e.g., Add Docker, Linux, Postman]
• Concepts: [e.g., Add System Design, Graph Algorithms]

Ensure the skills are formatted cleanly as `{ name: "SkillName", level: "ProficiencyLevel" }` in `src/data/skills.js`.
```

---

## 🎯 Prompt: Update DSA & LeetCode Milestones

Use this prompt when you reach new problem-solving milestones:

```text
Please update the problem-solving and DSA section in `src/data/dsa.js`.

Updated Information:
• Overview Notes: [e.g., Solved 200+ problems on LeetCode focusing on Dynamic Programming, Trees, and Graphs]
• Key Focus Topics: [List active topics, e.g., Trees, Graphs, Dynamic Programming]
• Profiles: Ensure LeetCode (https://leetcode.com/u/ayush00028/) and GitHub (https://github.com/ayush00028) remain linked.
```

---

## 🚀 Prompt: Build & Deploy to Production

Use this prompt when you are ready to build the site for deployment (Vercel, Netlify, or GitHub Pages):

```text
Please prepare a production build of my portfolio:
1. Run `npm run build` and verify zero errors.
2. Confirm that security headers (`public/_headers` and `vercel.json`) are intact.
3. Commit and push the changes to my GitHub repository.
```
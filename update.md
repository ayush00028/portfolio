# Portfolio Content Update & Migration Guide

> **Project Status:** This portfolio website is a fully functional, high-performance, security-hardened, and 3D interactive web application. The layout, animations, Three.js canvas, and security configurations are completed.
> 
> **Content Status:** The site currently contains **rough sample/placeholder data** (`[ADD YOUR INFORMATION HERE]`, `[ADD GITHUB URL]`, etc.). This document outlines everything you need to fill in to personalize the website with your real details.

---

## ?? File-by-File Content Map

All content lives strictly in `src/data/`. **You never need to edit JSX or CSS files.**

| Data Area | Target File | What to Update |
| :--- | :--- | :--- |
| **Personal & Bio** | `src/data/profile.js` | Name, custom headline, bio, education, college name, location, interests |
| **Skills** | `src/data/skills.js` | Programming languages, web technologies, developer tools, computer science concepts |
| **Projects** | `src/data/projects.js` | Project titles, short descriptions, tech stack tags, GitHub repositories, live demo links |
| **DSA & Coding** | `src/data/dsa.js` | Problem-solving overview, LeetCode profile URL, key topic focus areas |
| **Active Learning** | `src/data/learning.js` | "Currently Exploring" topics, descriptions, and learning priorities |
| **Social & Contact** | `src/data/socialLinks.js` | GitHub URL, LinkedIn URL, Email address, custom outreach message |

---

## ?? Fill-in-the-Blank Information Template

Copy the template below, replace the bracketed items with your real information, and hand it to any AI assistant (or edit the files directly):

```json
{
  "profile": {
    "name": "Krishna Kumar",
    "role": "Student / Aspiring Developer",
    "statusBadge": "Available for Internships & Projects",
    "headline": "Building reliable web applications and exploring data structures.",
    "shortIntro": "I am a developer who loves breaking down complex problems and turning ideas into clean, functional code.",
    "about": {
      "summary": "I am an aspiring software engineer focused on web technologies, Java, and algorithmic problem-solving.",
      "detailedBio": "Write a 2-3 sentence paragraph about your journey, how you got into coding, and what drives you.",
      "approach": "I prioritize clean code, test-driven logic, and hands-on project building.",
      "futureGoal": "Aspiring to join an engineering team for an internship where I can contribute and learn."
    },
    "details": {
      "location": "Your City, Country",
      "education": "B.Tech in Computer Science (or your degree)",
      "institution": "Your University / College Name",
      "currentFocus": "Full-Stack Web Development & DSA"
    },
    "interests": [
      "Web Development",
      "Software Development",
      "Problem Solving",
      "Data Structures & Algorithms",
      "Building practical projects",
      "Exploring new technologies"
    ]
  },
  "socialLinks": {
    "github": "https://github.com/your-username",
    "linkedin": "https://www.linkedin.com/in/krishnakumar00028",
    "email": "yourname@example.com",
    "leetcode": "https://leetcode.com/your-username"
  },
  "skills": {
    "programming": ["Java", "Python", "C++"],
    "webDevelopment": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "tools": ["Git", "GitHub", "VS Code", "Postman"],
    "concepts": ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving", "REST APIs"]
  },
  "projects": [
    {
      "id": "skills2job",
      "title": "Skills2Job",
      "badge": "Featured Project",
      "description": "A web application that bridges the gap between learning skills and job market requirements.",
      "technologies": ["React", "JavaScript", "Tailwind CSS"],
      "githubUrl": "https://github.com/your-username/Skills2Job",
      "liveUrl": "https://skills2job-demo.vercel.app",
      "highlights": [
        "Interactive skill gap analysis tool",
        "Responsive, modern user interface"
      ]
    },
    {
      "id": "project-2",
      "title": "Algorithm Visualizer",
      "badge": "DSA Tool",
      "description": "Interactive visualizer for search and sorting algorithms.",
      "technologies": ["JavaScript", "HTML5 Canvas", "CSS"],
      "githubUrl": "https://github.com/your-username/algo-visualizer",
      "liveUrl": "https://algo-visualizer-demo.vercel.app",
      "highlights": [
        "Step-by-step binary search and quicksort animations"
      ]
    }
  ],
  "dsa": {
    "overview": "Solved 150+ problems focusing on arrays, two-pointer techniques, recursion, and dynamic programming.",
    "leetcodeUrl": "https://leetcode.com/your-username",
    "otherProfileUrl": "https://codeforces.com/profile/your-username"
  },
  "learning": [
    { "title": "React 19 & Next.js", "status": "In Progress" },
    { "title": "Java Spring Boot", "status": "Exploring" },
    { "title": "System Design Basics", "status": "Reading" }
  ]
}
```

---

## ?? Instructions for AI Coding Assistants

When an AI assistant receives a prompt to update this website:

1. **Read this file (`update.md`)** to locate the exact data mapping.
2. **Update only the data files in `src/data/`**:
   - `src/data/profile.js`
   - `src/data/skills.js`
   - `src/data/projects.js`
   - `src/data/dsa.js`
   - `src/data/learning.js`
   - `src/data/socialLinks.js`
3. **DO NOT** edit the JSX components (`Navbar.jsx`, `Hero.jsx`, `Projects.jsx`, `Contact.jsx`, etc.) unless the user explicitly asks for design modifications.
4. **Preserve Security Standards**:
   - Verify that all external URLs start with `https://`, `http://`, or `mailto:`.
   - Never inject arbitrary raw HTML into JSX.
5. **Test Build**:
   - Run `npm run build` to verify the build succeeds with exit code 0.

/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION - LIFELONG LEARNER ARCHITECTURE
 * =========================================================================
 * Distinguishes solid foundational skills from technologies currently
 * being learned in parallel and implemented in hands-on projects.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    description: "Languages with a solid core foundation alongside active problem-solving",
    skills: [
      { name: "Java", level: "Solid Foundation", status: "mastered" },
      { name: "Python", level: "Solid Foundation", status: "mastered" },
      { name: "C", level: "Solid Foundation", status: "mastered" },
      { name: "JavaScript", level: "Core Web Language", status: "mastered" },
      { name: "TypeScript", level: "Currently Learning & Implementing", status: "learning" }
    ]
  },
  {
    id: "web-dev",
    title: "Web & Backend Engineering",
    iconName: "Globe",
    description: "Modern frameworks and tools currently being learned in parallel through hands-on building",
    skills: [
      { name: "HTML5 & CSS3", level: "Solid Foundation", status: "mastered" },
      { name: "React", level: "Currently Learning & Building", status: "learning" },
      { name: "FastAPI", level: "Learning & Implementing", status: "learning" },
      { name: "Next.js", level: "Currently Exploring & Building", status: "learning" },
      { name: "Tailwind CSS", level: "Implementing in Projects", status: "learning" },
      { name: "REST APIs", level: "Learning Architecture Patterns", status: "learning" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    iconName: "Wrench",
    description: "Daily development workflow utilities and version control",
    skills: [
      { name: "Git", level: "Solid Foundation", status: "mastered" },
      { name: "GitHub", level: "Solid Foundation", status: "mastered" },
      { name: "VS Code", level: "Primary Code Editor", status: "mastered" },
      { name: "SQLAlchemy & SQLite", level: "Learning & Implementing", status: "learning" },
      { name: "Vite", level: "Learning Tooling", status: "learning" }
    ]
  },
  {
    id: "concepts",
    title: "Concepts & Problem Solving",
    iconName: "Cpu",
    description: "Algorithmic thinking and software engineering principles under active practice",
    skills: [
      { name: "Data Structures & Algorithms", level: "Active Daily Practice", status: "learning" },
      { name: "Object-Oriented Programming (OOP)", level: "Solid Foundation", status: "mastered" },
      { name: "AI & LLM Integration", level: "Exploring & Integrating", status: "learning" },
      { name: "Problem Solving", level: "Continuous Lifelong Growth", status: "learning" }
    ]
  }
];

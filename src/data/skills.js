/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION
 * =========================================================================
 * Verified technologies sourced from active repositories and projects.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used for systems, backends, and algorithmic problem solving",
    skills: [
      { name: "Java", level: "DSA & Core OOP" },
      { name: "Python", level: "FastAPI & AI Engines" },
      { name: "TypeScript", level: "Full-Stack Development" },
      { name: "JavaScript", level: "Interactive Web Systems" },
      { name: "C", level: "Systems Fundamentals" }
    ]
  },
  {
    id: "web-dev",
    title: "Web & Backend Engineering",
    iconName: "Globe",
    description: "Frameworks and libraries for constructing scalable client-server applications",
    skills: [
      { name: "Next.js 14+", level: "App Router & SSR" },
      { name: "FastAPI", level: "Async Python APIs" },
      { name: "React", level: "Component State & Hooks" },
      { name: "Tailwind CSS", level: "Modern Responsive UI" },
      { name: "REST APIs", level: "Design & Integration" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    iconName: "Wrench",
    description: "Development tools, ORMs, databases, and build environments",
    skills: [
      { name: "Git & GitHub", level: "Version Control & Collaboration" },
      { name: "VS Code", level: "Primary Development IDE" },
      { name: "SQLAlchemy & SQLite", level: "Relational ORM & Data Models" },
      { name: "Uvicorn & Node.js", level: "Server Runtimes" },
      { name: "Vite", level: "Fast Frontend Tooling" }
    ]
  },
  {
    id: "concepts",
    title: "Concepts & Specializations",
    iconName: "Cpu",
    description: "Computer science foundations and domain-specific engineering concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: "Continuous LeetCode Practice" },
      { name: "Object-Oriented Design", level: "Encapsulation, Polymorphism & Modularity" },
      { name: "AI & LLM Integration", level: "Gemini AI & Semantic Embeddings" },
      { name: "Vector Similarity Search", level: "Cosine Similarity Matching" },
      { name: "ATS Diagnostics", level: "Resume Parsing & Compatibility Scoring" }
    ]
  }
];

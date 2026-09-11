/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION
 * =========================================================================
 * Only genuine skills/technologies provided are displayed here.
 * Add new skills or categories by simply editing this array.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    iconName: "Code2",
    description: "Core languages used for building software and problem solving",
    skills: [
      { name: "Java", level: "Active Focus" },
      { name: "[ADD MORE]", isPlaceholder: true }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Globe",
    description: "Foundation technologies for constructing interactive web interfaces",
    skills: [
      { name: "HTML", level: "Foundation" },
      { name: "CSS", level: "Styling & Responsive Layouts" },
      { name: "JavaScript", level: "Interactive Web Logic" },
      { name: "[ADD MORE]", isPlaceholder: true }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    iconName: "Wrench",
    description: "Development environment and version control utilities",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Code Collaboration" },
      { name: "VS Code", level: "Primary Code Editor" },
      { name: "[ADD MORE]", isPlaceholder: true }
    ]
  },
  {
    id: "concepts",
    title: "Concepts",
    iconName: "Cpu",
    description: "Core computer science and software development foundations",
    skills: [
      { name: "Data Structures & Algorithms", level: "Active Practice" },
      { name: "Object-Oriented Programming", level: "Core Architecture" },
      { name: "Problem Solving", level: "Continuous Learning" },
      { name: "[ADD MORE]", isPlaceholder: true }
    ]
  }
];

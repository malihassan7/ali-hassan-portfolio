
import { Code, Database, Layout, Terminal, Cpu, } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "PHP", "SQL"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Bootstrap", "Material UI", "SCSS", "Gsap", "Framer Motion"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "Laravel", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    name: "Version Control",
    icon: Cpu,
    skills: ["Git & Github", "Vercel", "Netlify"],
  },

];

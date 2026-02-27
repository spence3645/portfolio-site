export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C#', 'C++'],
  },
  {
    name: 'Web',
    skills: ['React', 'Astro', 'Node.js', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    name: 'Game Dev',
    skills: ['Unity', 'Godot', 'OpenGL', 'HLSL/GLSL'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'Figma'],
  },
];

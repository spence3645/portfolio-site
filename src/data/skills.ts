export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'C#', 'Go', 'Java'],
  },
  {
    name: 'Game Dev',
    skills: ['Unity', 'Godot', 'Unreal Engine'],
  },
  {
    name: 'Data',
    skills: ['PySpark', 'AWS EMR', 'AWS Athena', 'AWS S3', 'Airflow'],
  },
];

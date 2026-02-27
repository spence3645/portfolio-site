import type { Project } from '../types/project';

export const softwareProjects: Project[] = [
  {
    slug: 'example-app',
    title: 'Example App',
    tagline: 'A placeholder software project — replace with your own.',
    description:
      'This is a placeholder description for your software project. ' +
      'Update this file at src/data/software-projects.ts to add your real projects.',
    previewGif: 'media/software/example-app.gif',
    techStack: ['TypeScript', 'React', 'Node.js'],
    repoUrl: 'https://github.com/spence3645',
    order: 1,
    published: true,
  },
];

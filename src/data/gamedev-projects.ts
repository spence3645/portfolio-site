import type { Project } from '../types/project';

export const gamedevProjects: Project[] = [
  {
    slug: 'example-game',
    title: 'Example Game',
    tagline: 'A placeholder game project — replace with your own.',
    description:
      'This is a placeholder description for your game project. ' +
      'Update this file at src/data/gamedev-projects.ts to add your real projects.',
    previewGif: '/media/gamedev/example-game.gif',
    techStack: ['Unity', 'C#'],
    repoUrl: 'https://github.com/spence3645',
    order: 1,
    published: true,
  },
];

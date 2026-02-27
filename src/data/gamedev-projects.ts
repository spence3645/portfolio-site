import type { Project } from '../types/project';

export const gamedevProjects: Project[] = [
  {
    slug: 'candy-cutter',
    title: 'Candy Cutter',
    tagline: 'An addicting idle game where the goal is to grow your candy cutting empire.',
    description: 'An addicting idle game where the goal is to grow your candy cutting empire.',
    previewGif: 'media/gamedev/candy_cutter.gif',
    techStack: ['Unity', 'C#', 'iOS', 'Aseprite'],
    year: 2024,
    liveUrl: 'https://apps.apple.com/us/app/candy-cutter/id6478093548',
    repoUrl: 'https://github.com/spence3645',
    order: 1,
    published: true,
  },
  {
    slug: 'chippys-golf',
    title: "Chippy's Golf",
    tagline: "A Game Jam project where I had to develop a spooky game in a week.",
    description: "A Game Jam project where I had to develop a spooky game in a week.",
    previewGif: 'media/gamedev/chippys-golf.gif',
    techStack: ['Unity', 'C#'],
    year: 2023,
    liveUrl: 'https://spence3645.itch.io/chippys-golf',
    order: 2,
    published: true,
  },
];
import type { Project } from '../types/project';

export const gamedevProjects: Project[] = [
  {
    slug: 'redacted-title',
    title: 'Project Chaos',
    tagline: 'IN PROGRESS: A solo developed coop game that emphasizes chaos, made for PC',
    description: 'A chaotic co-op PC game currently in alpha, built solo from the ground up. Responsibilities span core gameplay systems, real-time multiplayer networking via FishNet, and original 3D asset creation in Blender — all under NDA.',
    previewGif: 'media/gamedev/project_chaos.gif',
    techStack: ['Unity', 'C#', 'Multiplayer', 'Blender (3D Modeling)'],
    year: 2026,
    order: 1,
    published: true,
  },
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
    order: 2,
    published: true,
  }
];
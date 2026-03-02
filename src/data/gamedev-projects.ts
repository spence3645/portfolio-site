import type { Project } from '../types/project';

export const gamedevProjects: Project[] = [
  {
    slug: 'unannounced-coop-title',
    title: 'Unannounced Co-op Title',
    tagline: 'A chaotic multiplayer co-op game for PC — solo developing from gameplay to networking to 3D art.',
    description: 'A chaotic co-op PC game currently in alpha stage, built solo from the ground up. Responsibilities span core gameplay systems, real-time multiplayer networking via FishNet, and original 3D asset creation in Blender.',
    previewGif: 'media/gamedev/unannounced_coop.gif',
    techStack: ['Unity', 'C#', 'FishNet', 'Multiplayer', 'Networking', 'Blender', '3D Art'],
    year: 2026,
    order: 1,
    published: false,
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
  },
];
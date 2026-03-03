import type { Project } from '../types/project';

export const softwareProjects: Project[] = [
  {
    slug: 'dynamic-weather-page',
    title: 'Dynamic Weather Page',
    tagline: 'Claude-generated SVG weather display, unique on every refresh.',
    description:
      'A Claude generated SVG weather display (different on every refresh) based on the weather in Philadelphia, PA.',
    previewGif: 'media/software/dynamic-weather-page.gif',
    techStack: ['Claude', 'GenAI', 'Vercel', 'Prompt Engineering'],
    year: 2026,
    liveUrl: 'https://dynamic-weather-page-are8rpwxc-spence3645-9582s-projects.vercel.app/',
    repoUrl: 'https://github.com/spence3645/dynamic-weather-page',
    order: 1,
    published: true,
  },
];

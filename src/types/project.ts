export interface Project {
  slug: string;        // URL-safe ID (e.g. "terrain-generator")
  title: string;
  tagline: string;     // Short blurb on the card
  description: string; // Full text on the detail page
  previewGif: string;  // Path relative to /public
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  order: number;
  published: boolean;
}

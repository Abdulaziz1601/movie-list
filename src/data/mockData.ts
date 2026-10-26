import type { Movie, Comment } from '../types';

/**
 * Bundled demo data. Used when no `VITE_API_BASE_URL` is configured, so the
 * deployed portfolio demo always has content and never depends on an external
 * API that might go offline.
 *
 * Poster images are served from TMDB's public image CDN.
 */
export const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    name: 'Dune: Part Two',
    release: '2024',
    img: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    duration: '2h 46m',
  },
  {
    id: '2',
    name: 'Oppenheimer',
    release: '2023',
    img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    duration: '3h 00m',
  },
  {
    id: '3',
    name: 'The Batman',
    release: '2022',
    img: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    duration: '2h 56m',
  },
  {
    id: '4',
    name: 'Spider-Man: Across the Spider-Verse',
    release: '2023',
    img: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    duration: '2h 20m',
  },
];

export const MOCK_COMMENTS: Record<string, Comment[]> = {
  '1': [
    { id: 'c1-1', username: 'denis', comment: 'Visually stunning. The sound design is unreal.' },
    { id: 'c1-2', username: 'mia', comment: 'Even better than the first part. Wormriding scene!' },
  ],
  '2': [
    { id: 'c2-1', username: 'alex', comment: 'A masterclass in tension. Three hours flew by.' },
  ],
  '3': [
    { id: 'c3-1', username: 'sam', comment: 'Darkest Batman yet. The cinematography is gorgeous.' },
    { id: 'c3-2', username: 'lee', comment: 'Pattinson surprised me. Loved the noir tone.' },
  ],
  '4': [
    { id: 'c4-1', username: 'nadia', comment: 'The animation style is next level. So much detail.' },
  ],
};

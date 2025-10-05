
import type { Photo, Video, Article } from './types';

export const PHOTOS: Photo[] = [
  { id: 1, src: 'https://picsum.photos/id/1015/800/600', alt: 'Thalapathy Vijay at a public event', year: 2023, event: 'Leo Success Meet' },
  { id: 2, src: 'https://picsum.photos/id/1025/800/600', alt: 'Thalapathy Vijay during a movie shoot', year: 2023, event: 'Movie Set' },
  { id: 3, src: 'https://picsum.photos/id/1040/800/600', alt: 'Thalapathy Vijay interacting with fans', year: 2022, event: 'Fan Meet' },
  { id: 4, src: 'https://picsum.photos/id/1062/800/600', alt: 'A still from a blockbuster film', year: 2022, event: 'Film Still' },
  { id: 5, src: 'https://picsum.photos/id/211/800/600', alt: 'Thalapathy Vijay at an award function', year: 2021, event: 'Awards Ceremony' },
  { id: 6, src: 'https://picsum.photos/id/237/800/600', alt: 'Thalapathy Vijay in a casual look', year: 2021, event: 'Casual Outing' },
  { id: 7, src: 'https://picsum.photos/id/433/800/600', alt: 'Thalapathy Vijay announcing his political party', year: 2024, event: 'TVK Party Launch' },
  { id: 8, src: 'https://picsum.photos/id/456/800/600', alt: 'A candid photo of Thalapathy Vijay', year: 2020, event: 'Candid Shot' },
];

export const VIDEOS: Video[] = [
  { id: 1, title: 'Epic Movie Trailer', thumbnail: 'https://img.youtube.com/vi/o4_1a32p66g/0.jpg', youtubeId: 'o4_1a32p66g', description: 'The official trailer that broke all records.', date: '2023-10-01' },
  { id: 2, title: 'Exclusive Interview', thumbnail: 'https://img.youtube.com/vi/8u-cW_e3B_w/0.jpg', youtubeId: '8u-cW_e3B_w', description: 'A candid conversation about his journey.', date: '2023-05-15' },
  { id: 3, title: 'TVK Party Launch Speech', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg', youtubeId: 'dQw4w9WgXcQ', description: 'The historic speech announcing his political entry.', date: '2024-02-02' },
  { id: 4, title: 'Behind the Scenes Action', thumbnail: 'https://img.youtube.com/vi/z-ud0yOs2tA/0.jpg', youtubeId: 'z-ud0yOs2tA', description: 'A look at the making of a high-octane action sequence.', date: '2022-11-20' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'the-journey-to-tvk',
    title: 'The Journey to TVK: A New Chapter',
    heroImage: 'https://picsum.photos/id/1/1200/600',
    excerpt: 'Exploring the motivations and vision behind Thalapathy Vijay\'s historic entry into politics with Tamizhaga Vetri Kazhagam.',
    author: 'Fan Hub Staff',
    date: '2024-02-10',
    tags: ['politics', 'tvk', 'events'],
    content: 'The announcement of Tamizhaga Vetri Kazhagam (TVK) by Thalapathy Vijay marks a pivotal moment in Tamil Nadu politics. This move, long-speculated by fans and political analysts, has sent ripples across the state. This article delves into the potential impact of his entry, the core principles of TVK, and what it means for the future. The party, with its red, black, and yellow flag, symbolizes a new hope for many. His commitment to public service, previously seen through his various welfare activities, now takes a more structured and official form. Fans are ecstatic, and the political landscape is set for a major shift.'
  },
  {
    id: 2,
    slug: 'blockbuster-breakdown-leo',
    title: 'Blockbuster Breakdown: Deconstructing the Success of "Leo"',
    heroImage: 'https://picsum.photos/id/2/1200/600',
    excerpt: 'A deep dive into the cinematic elements that made "Leo" one of the highest-grossing films of the year.',
    author: 'Cinema Analyst',
    date: '2023-11-05',
    tags: ['cinema', 'analysis', 'leo'],
    content: '"Leo" was not just a film; it was a cinematic event. From its gripping screenplay to the stellar performances, every aspect of the movie was crafted to perfection. This analysis explores the narrative techniques, character arcs, and the technical brilliance that contributed to its massive success. The film\'s non-linear storytelling kept audiences on the edge of their seats, while Vijay\'s portrayal of a multi-layered character received critical acclaim. We also look at the box office numbers and how it has set new benchmarks for the industry.'
  },
  {
    id: 3,
    slug: 'vijay-the-philanthropist',
    title: 'Beyond the Silver Screen: Vijay\'s Philanthropic Endeavors',
    heroImage: 'https://picsum.photos/id/3/1200/600',
    excerpt: 'A look at the lesser-known side of Thalapathy Vijay—his extensive charity work and contributions to society.',
    author: 'Social Correspondent',
    date: '2023-01-20',
    tags: ['charity', 'social work'],
    content: 'While he is celebrated for his on-screen persona, Thalapathy Vijay\'s off-screen contributions are equally commendable. For years, he has been silently involved in numerous philanthropic activities through his fan clubs and personal initiatives. From educational aid for underprivileged students to disaster relief efforts, his work has touched thousands of lives. This article highlights some of his key contributions, showcasing a side of the superstar that inspires millions to give back to the community. His actions prove that a true hero is defined not just by roles they play, but by the lives they change.'
  },
];

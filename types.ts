
export interface Photo {
  id: number;
  src: string;
  alt: string;
  year: number;
  event: string;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
  date: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  heroImage: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
}

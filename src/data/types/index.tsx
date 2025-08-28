type HorseProfile = {
  type: "horse";
  name: string;
  image: string;
  breed: string;
  age: string;
  height: string;
  description: string;
  record: string;
  earnings: string;
  trophies: number;
  achievements: string[];
  major_events: string[];
  recent_races: { timestamp: string; description: string }[];
  news: { timestamp: string; description: string }[];
  statics: { starts: number; wins: number; places: number; shows: number };
  recent_trainer: { name: string; image: string };
};

type TrainerProfile = {
  type: "trainer";
  name: string;
  image: string;
  age: string;
  height: string;
  description: string;
  experience: string;
  specialization: string;
  trophies: number;
  achievements: string[];
  major_events: string[];
  recent_races: { timestamp: string; description: string }[];
  news: { timestamp: string; description: string }[];
  statics: { starts: number; wins: number; places: number; shows: number };
};

export type Profile = HorseProfile | TrainerProfile;

export interface news_article {
  id: string;
  title: string;
  description: string;
  image: string;
  published_at: string;
  category: string;
  source: string;
  author: string;
  location: string;
  url: string;
}

export type blog_article = {
  id: number;
  slug: string;
  title: string;
  status: string;
  meta_title: string;
  meta_description: string;
  canonical_url: string;
  excerpt: string;
  content: string; // usually HTML or Markdown
  author: {
    id: number;
    name: string;
    bio?: string;
    avatar?: string;
    social?: {
      twitter?: string;
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      [key: string]: string | undefined; // flexible for extra socials
    };
  };
  category: string;
  tags: string[];
  image?: string;
  images?: string[];
  video_url?: string | null;
  read_time: number; // in minutes
  word_count: number;
  views: number;
  likes: number;
  comments_count: number;
  related_posts?: number[]; // array of article IDs
  published_at: string; // ISO 8601 date string
  created_at: string; // ISO 8601 date string
  updated_at?: string; // ISO 8601 date string
};

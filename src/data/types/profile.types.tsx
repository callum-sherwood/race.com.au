interface RecentRace {
  event: string;
  position: string;
  date: string;
}

// Interface for the news object
interface NewsItem {
  title: string;
  link: string;
}

// Interface for the statistics object
interface HorseStats {
  total_races: number;
  wins: number;
  places: number;
  shows: number;
}

// Interface for the recent trainer object
interface RecentTrainer {
  name: string;
  age: string;
  height: string;
  description: string;
  image: string;
}

// Interface for a horse profile
interface HorseProfile {
  id: string;
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
  recent_races: RecentRace[];
  news: NewsItem[];
  statics: HorseStats;
  recent_trainer: RecentTrainer;
}

// Interface for a trainer profile (for completeness, based on previous context)
interface TrainerProfile {
  id: string;
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
  recent_races: {
    horse: string;
    event: string;
    position: string;
    date: string;
  }[];
  news: NewsItem[];
  statics: {
    total_horses_trained: number;
    championships_won: number;
  };
}

// Interface for a profile tab (Horse Profile or Trainer Profile)
interface ProfileTab {
  tab_title: string;
  profiles: HorseProfile[] | TrainerProfile[];
}

// Type for the entire Profiles array
type ProfilesData = ProfileTab[];

export type {
  HorseProfile,
  TrainerProfile,
  RecentRace,
  NewsItem,
  HorseStats,
  RecentTrainer,
  ProfileTab,
  ProfilesData,
};
export type StaredUserType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
export type TrackType = {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: StaredUserType[];
  isFavorite?: boolean;
};

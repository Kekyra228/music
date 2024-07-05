import { fetchFavoriteTracks, addLike, removeLike } from "@/app/api/userApi";
import { TrackType } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getFavoriteTracks = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (access: string) => {
    const favoriteTracks = await fetchFavoriteTracks(access);
    return favoriteTracks;
  }
);
export const addLikeInTrack = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (id: number) => {
    const likedTrack = await addLike(id);
    return likedTrack;
  }
);

export const removeLikeInTrack = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (id: number) => {
    const dislikedTrack = await removeLike(id);
    return dislikedTrack;
  }
);

type PlaylistStateType = {
  isPlaying: boolean;
  currentTrack: TrackType | null;
  tracks: TrackType[];
  isShuffled: boolean;
  shuffledPlaylist: TrackType[];
  searchFilter: {
    author: string[];
    genre: string[];
    orderSorting: string;
    searchString: string;
  };
  filtredPlaylist: TrackType[];
  likedTracks: number[];
};

const initialState: PlaylistStateType = {
  isPlaying: false,
  currentTrack: null,
  tracks: [],
  isShuffled: false,
  shuffledPlaylist: [],
  searchFilter: {
    author: [],
    genre: [],
    orderSorting: "По умолчанию",
    searchString: "",
  },
  filtredPlaylist: [],
  likedTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{ currentTrack: TrackType; tracks: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledPlaylist = [...action.payload.tracks].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks;
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const nextIndex = currentIndex + 1;
      if (nextIndex >= playlist.length) {
        state.currentTrack = playlist[0];
      } else {
        state.currentTrack = playlist[nextIndex];
      }
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks;
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const prevIndex = currentIndex - 1;
      state.currentTrack = playlist[prevIndex];
    },
    setShuffle: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
      state.tracks = action.payload.tracks;
      state.filtredPlaylist = action.payload.tracks;
    },
    setLikedTracks: (state, action: PayloadAction<number[]>) => {
      state.likedTracks = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        orderSorting?: string;
        searchString?: string;
      }>
    ) => {
      state.searchFilter = {
        author: action.payload.author || state.searchFilter.author,
        genre: action.payload.genre || state.searchFilter.genre,
        orderSorting:
          action.payload.orderSorting || state.searchFilter.orderSorting,
        searchString:
          action.payload.searchString || state.searchFilter.searchString,
      };
      const filterTracks = [...state.tracks].filter((track) => {
        const searchString =
          // track.author &&
          track.name
            .toLocaleLowerCase()
            .includes(state.searchFilter.searchString.toLocaleLowerCase());
        const hasAuthorFilter =
          state.searchFilter.author.length > 0
            ? state.searchFilter.author.includes(track.author)
            : true;
        const hasGenreFilter =
          state.searchFilter.genre.length > 0
            ? state.searchFilter.genre.includes(track.genre)
            : true;
        return searchString && hasAuthorFilter && hasGenreFilter;
      });
      switch (state.searchFilter.orderSorting) {
        case "Сначала новые":
          filterTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filterTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;
        default:
          break;
      }
      state.filtredPlaylist = filterTracks;
    },
    likeTrack: (state, action: PayloadAction<{ id: number }>) => {
      state.likedTracks.push(action.payload.id);
    },
    dislike: (state, action: PayloadAction<{ id: number }>) => {
      state.likedTracks = state.likedTracks.filter(
        (el) => el !== action.payload.id
      );
    },
  },
});

export const {
  setCurrentTrack,
  nextTrack,
  prevTrack,
  setShuffle,
  setIsPlaying,
  setFilter,
  setPlaylist,
  likeTrack,
  dislike,
  setLikedTracks,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

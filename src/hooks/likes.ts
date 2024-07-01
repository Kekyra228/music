import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import {
  addLikeInTrack,
  getFavoriteTracks,
  removeLikeInTrack,
} from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";

type Props = {
  track: TrackType;
};

export function useInitializeLikedTracks() {
  const dispatch = useAppDispatch();

  const tokens = useAppSelector((state) => state.auth.tokens);
  useEffect(() => {
    if (tokens.access) {
      dispatch(getFavoriteTracks(tokens.access));
    }
  }, [tokens, dispatch]);
}

export const useLikeTrack = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);

  const isLiked = likedTracks.includes(track);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isLiked) {
      dispatch(addLikeInTrack(track.id));
    } else {
      dispatch(removeLikeInTrack(track.id));
    }
  };

  return { isLiked, handleLike };
};

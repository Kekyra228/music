import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import {
  addLikeInTrack,
  dislike,
  getFavoriteTracks,
  likeTrack,
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
  const tokens = useAppSelector((state) => state.auth.tokens);
  const isLiked = likedTracks.includes(track.id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!tokens.access) {
      return alert("Вы не зарегестрированы");
    }
    const likedAction = isLiked ? removeLikeInTrack : addLikeInTrack;

    try {
      await dispatch(likedAction(track.id));
      isLiked
        ? dispatch(dislike({ id: track.id }))
        : dispatch(likeTrack({ id: track.id }));
    } catch (error) {
      console.error(error);
    }
  };

  return { isLiked, handleLike };
};

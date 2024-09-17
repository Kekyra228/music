import { toast } from "react-toastify";
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
import { addLike, fetchFavoriteTracks, removeLike } from "@/app/api/userApi";

type Props = {
  track: TrackType;
};

export const useLikeTrack = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const isLiked = likedTracks.some((el) => el.id === track.id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (tokens.access && likedTracks) {
      if (isLiked) {
        await dispatch(
          removeLikeInTrack({ access: tokens.access, id: track.id })
        );
        dispatch(dislike(track));
      } else {
        await dispatch(addLikeInTrack({ access: tokens.access, id: track.id }));
        dispatch(likeTrack(track));
      }
    } else {
      return toast.error("Вы не зарегестрированы");
    }
  };
  return { isLiked, handleLike };
};

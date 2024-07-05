import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import {
  addLikeInTrack,
  dislike,
  getFavoriteTracks,
  likeTrack,
  removeLikeInTrack,
  setLikedTracks,
} from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";
import { fetchFavoriteTracks } from "@/app/api/userApi";

type Props = {
  track: TrackType;
};

export function useInitializeLikedTracks() {
  const token = useAppSelector((state) => state.auth.tokens?.access);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      fetchFavoriteTracks(token)
        .then((data) => {
          dispatch(setLikedTracks(data.map((track: TrackType) => track.id)));
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }, [dispatch, token]);
}

// export function useLikedTracks() {
//   const dispatch = useAppDispatch();
//   const tokens = useAppSelector((state) => state.auth.tokens);
//   useEffect(() => {
//     if (tokens.access) {
//       dispatch(getFavoriteTracks(tokens.access));
//     }
//   }, [tokens, dispatch]);
// }

export const useLikeTrack = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const tokens = useAppSelector((state) => state.auth.tokens);
  const isLiked = likedTracks.includes(track?.id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!tokens.access) {
      return toast.error("Вы не зарегестрированы");
    }
    const likedAction = isLiked ? removeLikeInTrack : addLikeInTrack;

    try {
      await likedAction(track.id);
      isLiked
        ? dispatch(dislike({ id: track.id }))
        : dispatch(likeTrack({ id: track.id }));
    } catch (error) {
      return toast.error("Ошибка");
    }
  };

  return { isLiked, handleLike };
};

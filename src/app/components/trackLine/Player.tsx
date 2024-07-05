import styles from "./trackLine.module.css";
import { useLikeTrack } from "@/hooks/likes";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";
import Image from "next/image";

type Props = {
  track: TrackType;
  tracks: TrackType[];
  isFavorite?: boolean;
};

export default function PlayerLike({ track, tracks, isFavorite }: Props) {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { isLiked, handleLike } = useLikeTrack({ track });
  if (!currentTrack) {
    return null;
  }

  const addFavorite = () => {
    dispatch(
      setCurrentTrack({ currentTrack: { ...currentTrack, isFavorite }, tracks })
    );
  };

  return (
    <div className={styles.trackTime} onClick={addFavorite}>
      <div className={styles.trackTimeLike} onClick={handleLike}>
        {isLiked ? (
          <Image
            src="/activeLike.svg"
            width={14}
            height={12}
            alt="activelike"
          />
        ) : (
          <Image src="/like.svg" width={14} height={12} alt="like" />
        )}
      </div>
    </div>
  );
}

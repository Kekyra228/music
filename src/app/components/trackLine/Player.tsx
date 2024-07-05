import styles from "./trackLine.module.css";
import { useLikeTrack } from "@/hooks/likes";
import { useAppSelector } from "@/hooks/store";
import { TrackType } from "@/types/types";
import Image from "next/image";

type Props = {
  track: TrackType;
};

export default function PlayerLike({ track }: Props) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { isLiked, handleLike } = useLikeTrack({ track });
  if (!currentTrack) {
    return null;
  }
  //   const logout = () => {
  //     dispatch(setAuthState(false));
  //     dispatch(setUserData(null));
  //     localStorage.removeItem("user");
  //     localStorage.removeItem("token");
  //   };

  return (
    <div className={styles.trackTime}>
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

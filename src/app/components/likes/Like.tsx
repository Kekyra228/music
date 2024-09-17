import Image from "next/image";
import styles from "./like.module.css";
import { useLikeTrack } from "@/hooks/likes";
import { TrackType } from "@/types/types";
import { useAppSelector } from "@/hooks/store";
import { formatDuration } from "@/utils/formatDuration";

type Props = {
  track: TrackType;
};

function Like({ track }: Props) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { isLiked, handleLike } = useLikeTrack({ track });
  if (!currentTrack) {
    return null;
  }
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

export default Like;

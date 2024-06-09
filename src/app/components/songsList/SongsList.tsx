import Image from "next/image";
import styles from "./songlist.module.css";
import { TrackType } from "@/types/types";
import Track from "../track/Track";

type Props = {
  tracks: TrackType[];
};

const SongList = ({ tracks }: Props) => {
  return (
    <div className={styles.centerblock__content_playlist}>
      <div className={styles.content_playlist_title}>
        <div className={styles.playlist_title}>Трек</div>
        <div className={styles.playlist_titleAuthor}>Исполнитель</div>
        <div className={styles.playlist_title}>Альбом</div>
        <div className={styles.playlist_title}>
          <Image src="/time.svg" width={14} height={12} alt="like" />
        </div>
      </div>

      <div className={styles.list_wrapper}>
        {tracks.map((value) => (
          <Track key={value.id} track={value} tracks={tracks} />
        ))}
      </div>
    </div>
  );
};

export default SongList;

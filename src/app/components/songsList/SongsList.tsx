import Image from "next/image";
import styles from "./songlist.module.css";
import { getTracks } from "@/app/api/userApi";
import { TrackType } from "@/types/types";

const SongList = async () => {
  const tracks: TrackType[] = await getTracks();

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
        {tracks.map((value, index: number) => {
          return (
            <div className={styles.playlistItem} key={index}>
              <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                  <div className={styles.trackTitleIcon}>
                    <Image
                      src="/songIcon.svg"
                      width={51}
                      height={51}
                      alt="icon"
                    />
                  </div>
                  <div className={styles.trackTitle}>
                    <a className={styles.trackTitleLink} href="http://">
                      {value.name} <span className="track__title-span"></span>
                    </a>
                  </div>
                </div>

                <div className={styles.trackAuthor}>
                  <a className={styles.trackAuthorLink} href="http://">
                    {value.author} <span className="track__title-span"></span>
                  </a>
                </div>

                <div className={styles.trackAlbum}>
                  <a className={styles.trackAlbumLink} href="http://">
                    {value.album}
                    <span className="track__title-span"></span>
                  </a>
                </div>

                <div className={styles.trackTime}>
                  <div className={styles.trackTimeLike}>
                    <Image src="/like.svg" width={14} height={12} alt="like" />
                  </div>
                  <span className={styles.trackTimeText}>
                    {value.duration_in_seconds}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongList;

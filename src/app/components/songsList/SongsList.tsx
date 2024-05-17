import Image from "next/image";
import styles from "./songlist.module.css";

const SongList = () => {
    return (    
    <div className={styles.centerblock__content_playlist }>
            <div className={styles.content_playlist_title}>
                <div className={styles.playlist_title}>Трек</div>
                <div className={styles.playlist_title}>Исполнитель</div>
                <div className={styles.playlist_title}>Альбом</div>
                <div className={styles.playlist_title}>      
                        <Image
                          src="/time.svg"
                          width={14}
                          height={12}
                          alt="like"
                        />
                      </div>
            </div>

            <div className={styles.list_wrapper}>
                <div className={styles.playlistItem}>
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
                        <a className={styles.trackTitleLink} href="http://">Guilt <span className="track__title-span"></span></a>
                      </div>
                    </div>

                    <div className={styles.trackAuthor}>      
                        <a className={styles.trackAuthorLink} href="http://">АВТОР <span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackAlbum}>      
                        <a className={styles.trackAlbumLink} href="http://">Альбом<span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackTime}>
                      <div className={styles.trackTimeLike}>
                          <Image
                          src="/like.svg"
                          width={14}
                          height={12}
                          alt="like"
                          />
                      </div>
                      <span className={styles.trackTimeText}>4:44</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className={styles.playlistItem}>
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
                        <a className={styles.trackTitleLink} href="http://">Guilt <span className="track__title-span"></span></a>
                      </div>
                    </div>

                    <div className={styles.trackAuthor}>      
                        <a className={styles.trackAuthorLink} href="http://">АВТОР <span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackAlbum}>      
                        <a className={styles.trackAlbumLink} href="http://">Альбом <span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackTime}>
                      <div className={styles.trackTimeLike}>
                        <Image
                          src="/like.svg"
                          width={14}
                          height={12}
                          alt="like"
                          />
                      </div>
                      <span className={styles.trackTimeText}>4:44</span>
                    </div>
                    
                  </div>
                </div>

                <div className={styles.playlistItem}>
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
                        <a className={styles.trackTitleLink} href="http://">Guilt <span className="track__title-span"></span></a>
                      </div>
                    </div>

                    <div className={styles.trackAuthor}>      
                        <a className={styles.trackAuthorLink} href="http://">АВТОР <span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackAlbum}>      
                        <a className={styles.trackAlbumLink} href="http://">Альбом <span className="track__title-span"></span></a>
                    </div>

                    <div className={styles.trackTime}>
                      <div className={styles.trackTimeLike}>
                        <Image
                          src="/like.svg"
                          width={14}
                          height={12}
                          alt="like"
                          />
                      </div>
                      <span className={styles.trackTimeText}>4:44</span>
                    </div>
                    
                  </div>
                </div>
                
            </div>
    </div>

    )
}

export default SongList
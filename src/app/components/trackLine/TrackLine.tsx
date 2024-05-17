import Image from "next/image"
import styles from "./trackLine.module.css"

const TrackLine = () => {
    return (
        <div className={styles.bar}>
        <div className={styles.content}>
          <div className={styles.playerProgress}></div>
          <div className={styles.playerBlock}>
            <div className={styles.player}>
              <div className={styles.playerControl}>
                <div className={styles.playerControlBtn}>
                <Image
                src="/back.svg"
                width={14}
                height={13}
                alt="back"
                />
                </div>
                <div className={styles.playerControlBtn}>
                    <Image
                    src="/play.svg"
                    width={22}
                    height={20}
                    alt="play"
                    />
                </div>
                <div className={styles.playerControlBtn}>
                    <Image
                    src="/nextSong.svg"
                    width={14}
                    height={13}
                    alt="next"
                    />
                </div>
                <div className={styles.playerControlBtn}>
                    <Image
                        src="/repeat.svg"
                        width={18}
                        height={12}
                        alt="next"
                        />
                </div>
                <div className={styles.playerControlBtn}>
                        <Image
                        src="/shuffle.svg"
                        width={19}
                        height={12}
                        alt="next"
                        />
                </div>
              </div>

              <div className={styles.playerTrack}>
                <div className={styles.playerTrackContain} >
                  <div className={styles.playerImage}>
                        <Image
                        src="/songIcon.svg"
                        width={51}
                        height={51}
                        alt="next"
                        />
                  </div>
                  <div className={styles.author}>
                    <a className={styles.authorLink} href="http://" >Ты та...</a>
                  </div>
                  <div className={styles.album}>
                    <a className={styles.albumLink} href="http://">Баста</a>
                  </div>
                </div>

                <div className={styles.likeDislike}>
                  <div className={styles.likeBtn}>
                        <Image
                        src="/like.svg"
                        width={14}
                        height={12}
                        alt="next"
                        />
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    {/* <svg className="track-play__dislike-svg">
                      <use
                        xlink:href="img/icon/sprite.svg#icon-dislike"></use>
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.volumeBlock}>
              <div className={styles.volume}>
                <div className={styles.volumeIcon}>
                        <Image
                        src="/volume.svg"
                        width={13}
                        height={18}
                        alt="next"
                        />
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TrackLine
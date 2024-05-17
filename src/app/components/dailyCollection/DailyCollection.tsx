import styles from "./dailyCollection.module.css";

const DailyCollection = () => {
    return (    
    <div className={styles.centerblock__content_playlist }>
        <h2 className={styles.centerblock__h2 }>Треки</h2>
        <div className={styles.content_playlist_title}>
            <div className={styles.playlist_title}>Трек
                    <div className={styles.playlist_track_title}>
                        <img src="./songIcon.svg" width="51px" height="51px" alt="icon" />
                            <a className="track__title-link" href="http://"> Ландыши<span className="track__title-span"></span></a>
                    </div>
                    <div className={styles.playlist_track_title}>
                        <img src="./songIcon.svg" width="51px" height="51px" alt="icon" />
                            <a className="track__title-link" href="http://"> Медлячок<span className="track__title-span"></span></a>
                    </div>
                    <div className={styles.playlist_track_title}>
                        <img src="./songIcon.svg" width="51px" height="51px" alt="icon" />
                            <a className="track__title-link" href="http://"> Ландыши<span className="track__title-span"></span></a>
                    </div>
            </div>
            <div className={styles.playlist_title}>Исполнитель
                <div className={styles.playlist_author}>
                    <a className="track__title-link" href="http://"> Lorem, ipsum.<span className="track__title-span"></span></a>
                </div>
                <div className={styles.playlist_author}>
                    <a className="track__title-link" href="http://"> Воровайки<span className="track__title-span"></span></a>
                </div>
                <div className={styles.playlist_author}>
                    <a className="track__title-link" href="http://"> Lorem ipsum dolor.<span className="track__title-span"></span></a>
                </div>
                  {/* <a className="track__title-link" href="http://"> Воровайки<span className="track__title-span"></span></a>
                  <a className="track__title-link" href="http://"> Ария<span className="track__title-span"></span></a>
                  <a className="track__title-link" href="http://"> Лил Пип<span className="track__title-span"></span></a> */}
            </div>
            <div className={styles.playlist_title}>Альбом
                <div className={styles.playlist_album}>
                        <a className="track__album-link" href="http://">Welcome Reality</a>
                </div>
                <div className={styles.playlist_album}>
                        <a className="track__album-link" href="http://">Welcome Reality</a>
                </div>
                <div className={styles.playlist_album}>
                        <a className="track__album-link" href="http://">Welcome Reality</a>
                </div>
            </div>
            <div className={styles.playlist_title}>
                <img src="./time.svg" width="14px" height="12px" alt="time" />
                <div className={styles.playlist_time}>
                    <img src="./like.svg" alt="like" />
                    <span className="track__time-text">4:44</span>
                </div>
                <div className={styles.playlist_time}>
                    <img src="./like.svg" alt="like" />
                    <span className="track__time-text">4:44</span>
                </div>
                <div className={styles.playlist_time}>
                    <img src="./like.svg" alt="like" />
                    <span className="track__time-text">4:44</span>
                </div>
            </div>
        </div>   
    </div>

    )
}

export default DailyCollection
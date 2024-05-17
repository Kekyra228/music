import styles from "./songscollection.module.css";

const SongsCollection = () =>{
 return (
    <div className={styles.main_sidebar}>
        <div className={styles.sidebarExit}>
        <img src="./exit.svg" width="40px" height="40px" alt="exit" />
      </div>
    <div className={styles.block_sidebar}>
      <div className={styles.list_sidebar}>
        <div className={styles.item_sidebar}>
          <a className={styles.link_sidebar} href="#">
            {/* <Image
              className="sidebar__Image"
              src="Image/playlist01.png"
              alt="day's playlist"
            /> */}
             <img src="./daily.png" alt="daily" />
          </a>
        </div>
        <div className={styles.item_sidebar}>
          <a className={styles.link_sidebar} href="#">
            {/* <Image
              className="sidebar__Image"
              src="Image/playlist02.png"
              alt="day's playlist"
            /> */}
            <img src="./100songs.png" alt="daily" />
          </a>
        </div>
        <div className={styles.item_sidebar}>
          <a className={styles.link_sidebar} href="#">
            {/* <Image
              className="sidebar__Image"
              src="Image/playlist03.png"
              alt="day's playlist"
            /> */}
             <img src="./chargesongs.png" alt="daily" />
          </a>
        </div>
      </div>
    </div>
  </div>
 )
}

export default SongsCollection
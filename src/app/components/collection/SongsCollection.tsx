"use client";
import Image from "next/image";
import styles from "./songscollection.module.css";
import Link from "next/link";
// import { useInitializeLikedTracks } from "@/hooks/likes";
import { useAppSelector } from "@/hooks/store";

const SongsCollection = () => {
  // useInitializeLikedTracks();
  // const userName = useAppSelector((state) => state.auth.user?.username);
  // if (!userName) {
  //   return null;
  // }
  return (
    <div className={styles.main_sidebar}>
      <div className={styles.sidebarExit}>
        <Image src="/exit.svg" width={40} height={40} alt="play" />
        {/* <p>{userName}</p> */}
      </div>
      <div className={styles.block_sidebar}>
        <div className={styles.list_sidebar}>
          <div className={styles.item_sidebar}>
            <a className={styles.link_sidebar} href="#">
              <Link href="/songsList/collection/1">
                <Image src="/daily.png" width={250} height={150} alt="daily" />
              </Link>
            </a>
          </div>
          <div className={styles.item_sidebar}>
            <a className={styles.link_sidebar} href="#">
              <Link href="/songsList/collection/2">
                <Image
                  src="/100songs.png"
                  width={250}
                  height={150}
                  alt="100songs"
                />
              </Link>
            </a>
          </div>
          <div className={styles.item_sidebar}>
            <a className={styles.link_sidebar} href="#">
              <Link href="/songsList/collection/3">
                <Image
                  src="/chargesongs.png"
                  width={250}
                  height={150}
                  alt="chargesongs"
                />
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsCollection;

// export default function User() {
//   useInitializeLikedTracks();

//   const userName = useAppSelector((state) => state.user.user?.username);

//   if (!userName) {
//     return null;
//   }

//   return (
//     <div className={styles.sidebarPersonal}>
//       <p className={styles.sidebarPersonalName}>{userName}</p>
//       <Icon
//         name="logout"
//         wrapperClass={styles.sidebarIcon}
//         iconClass={styles.sidebarIconSvg}
//       />
//     </div>
//   );
// }

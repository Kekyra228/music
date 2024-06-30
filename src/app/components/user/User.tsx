import styles from "./user.module.css";
import Image from "next/image";

function User() {
  return (
    <div className={styles.sidebarExit}>
      <Image src="exit.svg" width={40} height={40} alt="play" />
      <p>userName</p>
    </div>
  );
}

export default User;

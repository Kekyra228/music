import SongsCollection from "../app/components/collection/SongsCollection";
import Navbar from "../app/components/navbar/Navbar";
import TrackLine from "../app/components/trackLine/TrackLine";
import styles from "./songlist.module.css";

export default function SongsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.centerblock__content}>{children}</div>
          <SongsCollection />
        </main>
        <TrackLine />
      </div>
    </div>
  );
}

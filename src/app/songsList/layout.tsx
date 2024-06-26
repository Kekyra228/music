import SongsCollection from "../components/collection/SongsCollection";
import SearchHeader from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Sorting from "../components/sorting/Sorting";
import TrackLine from "../components/trackLine/TrackLine";
import styles from "./layout.module.css";

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
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import SongList from "./components/songsList/SongsList";
import SearchHeader from "./components/header/Header";
import SongsCollection from "./components/collection/SongsCollection";
import DailyCollection from "./components/dailyCollection/DailyCollection";
import Sorting from "./components/sorting/Sorting";
import TrackLine from "./components/trackLine/TrackLine";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
        <div className={styles.centerblock__content}>
          <SearchHeader/>
          <Sorting />
          <SongList/>
      </div>
      <SongsCollection />
    </main>
    <TrackLine/>
      </div>
    </div>
  );
}

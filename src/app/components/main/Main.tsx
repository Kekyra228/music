"use client";
import { TrackType } from "@/types/types";
import SongsCollection from "../collection/SongsCollection";
import SearchHeader from "../header/Header";
import Navbar from "../navbar/Navbar";
import SongList from "../songsList/SongsList";
import Sorting from "../sorting/Sorting";
import TrackLine from "../trackLine/TrackLine";
import styles from "./main.module.css";
import { useState } from "react";

type Props = {
  tracks: TrackType[];
};

export default function Main({ tracks }: Props) {
  const [song, setSong] = useState<null | TrackType>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.centerblock__content}>
            <SearchHeader />
            <Sorting tracks={tracks} />
            <SongList tracks={tracks} setSong={setSong} />
          </div>
          <SongsCollection />
        </main>
        {song && <TrackLine song={song} />}
      </div>
    </div>
  );
}
